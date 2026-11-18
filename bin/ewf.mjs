#!/usr/bin/env node
import {
  constants, copyFileSync, cpSync, existsSync, linkSync, mkdirSync, mkdtempSync,
  readFileSync, readdirSync, realpathSync, renameSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const projects = path.join(root, 'projects');
const brand = path.join(root, 'assets', 'brand', 'EWF_LOGO.png');
const overlays = path.join(root, 'assets', 'overlays');
const ffmpeg = process.env.EWF_FFMPEG || 'ffmpeg';
const ffprobe = process.env.EWF_FFPROBE || 'ffprobe';
const folders = { event: 'events', match: 'matches', reel: 'reels', thumbnail: 'thumbnails' };
const help = `EWF • Kit de edição / Editing kit
  node bin/ewf.mjs init <project>
  node bin/ewf.mjs inventory <project>
  node bin/ewf.mjs render <project> <output-id>
  README.md • README.en.md • docs/render.md`;

function fail(message) { throw new Error(message); }

function slug(value) {
  if (typeof value !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,79}$/.test(value)
      || /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/.test(value)) {
    fail('ID inválido / Invalid ID (a-z, 0-9, -, _).');
  }
  return value;
}

function contained(base, target) {
  const rel = path.relative(realpathSync(base), realpathSync(target));
  if (path.isAbsolute(rel) || rel === '..' || rel.startsWith('..' + path.sep)) {
    fail('Caminho fora do projeto / Path outside project: ' + target);
  }
  return target;
}

function sourceFile(project, name) {
  if (typeof name !== 'string' || path.isAbsolute(name)) fail('Use um caminho relativo / Use a relative path.');
  const file = contained(project, path.resolve(project, name));
  if (!statSync(file).isFile()) fail('Arquivo esperado / Expected file: ' + name);
  return file;
}

function command(tool, args, capture = false) {
  const result = spawnSync(tool, args, {
    encoding: 'utf8', windowsHide: true, maxBuffer: 16 * 1024 * 1024,
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : ['ignore', 'inherit', 'inherit'],
  });
  if (result.error) fail(tool + ': ' + result.error.message);
  if (result.status !== 0) fail(tool + ': ' + (result.stderr?.trim() || result.status || result.signal));
  return result.stdout;
}

function probe(file) {
  return JSON.parse(command(ffprobe, ['-v', 'error', '-show_format', '-show_streams',
    '-show_chapters', '-of', 'json', file], true));
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const item = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(item);
    else if (entry.isFile() && entry.name !== '.gitkeep') yield item;
  }
}

function inventory(project) {
  const entries = [];
  const input = contained(project, path.join(project, 'input'));
  for (const file of walk(input)) {
    const stats = statSync(file);
    const relative = path.relative(project, file).split(path.sep).join('/');
    const row = { path: relative, bytes: stats.size, modified_utc: stats.mtime.toISOString() };
    try {
      const { format, streams, chapters } = probe(file);
      delete format.filename;
      Object.assign(row, { format, streams, chapters });
    } catch (error) { row.probe_error = error.message; }
    entries.push(row);
  }
  const dir = contained(project, path.join(project, 'work'));
  const scratch = mkdtempSync(path.join(dir, 'inventory-'));
  const output = path.join(dir, 'inventory.json');
  try {
    const tmp = path.join(scratch, 'inventory.json');
    writeFileSync(tmp, JSON.stringify({ entries }, null, 2) + '\n');
    renameSync(tmp, output);
  } finally { rmSync(scratch, { recursive: true, force: true }); }
  const errors = entries.filter(row => row.probe_error).length;
  console.log(output + ' • ' + entries.length + ' arquivos/files • ' + errors + ' sem metadados/unprobed');
}

function number(value, name, min = 0) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min) fail('Valor inválido / Invalid ' + name);
  return value;
}

function frameRate(value) {
  const text = String(value ?? '');
  if (!/^\d+(?:\.\d+|\/\d+)?$/.test(text)) fail('FPS inválido / Invalid fps: ' + text);
  const [n, d = 1] = text.split('/').map(Number);
  if (!Number.isFinite(n / d) || n / d <= 0 || n / d > 240) fail('FPS inválido / Invalid fps: ' + text);
  return { text, hz: n / d };
}

function streams(meta) {
  return {
    video: meta.streams.find(s => s.codec_type === 'video' && !s.disposition?.attached_pic),
    audio: meta.streams.find(s => s.codec_type === 'audio'),
  };
}

function inputClip(project, row, needsRange) {
  const file = sourceFile(project, row.source);
  const meta = probe(file);
  const { video, audio } = streams(meta);
  if (!video) fail('Vídeo ou imagem ausente / No video or image: ' + file);
  if (!needsRange) return { file, meta, video, audio };
  const start = number(row.start, 'start');
  const end = number(row.end, 'end');
  const limit = Number(video.duration ?? meta.format.duration);
  if (end <= start || (Number.isFinite(limit) && end > limit + 0.001)) {
    fail('Intervalo fora da fonte / Invalid source range: ' + row.source);
  }
  return { file, video, audio, start, duration: end - start };
}

const square = "scale=w='max(2,round(iw*if(gt(sar,0),sar,1)/2)*2)':h=ih,setsar=1";
function fit(width, height) {
  return `${square},scale=${width}:${height}:force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1`;
}
function canvas(width, height) {
  return fit(width, height) + `,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2`;
}
function size(value, fallback) {
  const n = number(value ?? fallback, 'width/height', 2);
  if (!Number.isInteger(n) || n % 2) fail('Use dimensões pares / Use even dimensions.');
  return n;
}

function recipe(project, job) {
  const kind = job.kind;
  if (!Object.hasOwn(folders, kind)) fail('Tipo desconhecido / Unknown kind: ' + kind);
  const event = kind === 'event', thumb = kind === 'thumbnail', reel = kind === 'reel';
  const rows = event ? job.segments : [job];
  if (!Array.isArray(rows) || !rows.length) fail('Segmentos ausentes / Missing segments.');
  const clips = rows.map(row => inputClip(project, row, !thumb));
  const first = clips[0];
  const fps = thumb ? null : frameRate(job.fps ?? (first.video.avg_frame_rate !== '0/0'
    ? first.video.avg_frame_rate : first.video.r_frame_rate));
  const args = [], filters = [];
  for (const clip of clips) {
    if (thumb) {
      const at = number(job.at ?? 0, 'at');
      const length = Number(clip.video.duration ?? clip.meta.format.duration);
      if (Number.isFinite(length) && at >= length) fail('Quadro fora da fonte / Frame outside source.');
      if (at > 0) args.push('-ss', String(at));
    } else args.push('-ss', String(clip.start), '-t', String(clip.duration));
    args.push('-i', clip.file);
  }
  const v = `[0:${first.video.index}]`;
  const duration = thumb ? null : clips.reduce((total, clip) => total + clip.duration, 0);
  let width, height;
  if (thumb) {
    width = 1600; height = 900;
    const framing = job.framing ?? 'contain';
    if (!['contain', 'cover'].includes(framing)) fail('framing: contain / cover');
    const vf = framing === 'cover' ? square + ',scale=1600:900:force_original_aspect_ratio=increase,crop=1600:900,setsar=1' : canvas(width, height);
    filters.push(v + vf + '[photo]');
    const style = job.style ?? 'plain';
    if (!['plain', 'free-match'].includes(style)) fail('style: plain / free-match');
    if (style === 'free-match') {
      args.push('-i', path.join(overlays, 'free-match-footer.png'));
      filters.push('[photo][1:v]overlay=0:0[v]');
    } else filters.push('[photo]null[v]');
  } else if (reel) {
    width = 1080; height = 1920;
    if (Math.abs(duration - 10) > 0.0001) fail('Preset de Reel / Reel preset: 10 s.');
    args.push('-i', job.logo ? sourceFile(project, job.logo) : brand);
    args.push('-i', job.cta ? sourceFile(project, job.cta) : path.join(overlays, 'cta-youtube-pt.png'));
    filters.push(v + 'setpts=PTS-STARTPTS,fps=' + fps.text + ',split=2[bg][fg]',
      '[bg]' + square + ',scale=270:480:force_original_aspect_ratio=increase,crop=270:480,gblur=sigma=16,scale=1080:1920,setsar=1,eq=brightness=-0.20[back]',
      '[fg]' + fit(1080, 608) + '[fight]',
      '[back][fight]overlay=(W-w)/2:600+(608-h)/2[center]',
      '[1:v]scale=660:-1,setsar=1[logo]',
      '[center][logo]overlay=(W-w)/2:160[branded]',
      '[2:v]scale=920:220:force_original_aspect_ratio=decrease,setsar=1[cta]',
      "[branded][cta]overlay=(W-w)/2:1270:enable='gte(t,8)'[v]");
  } else if (event) {
    width = size(job.width, 1920); height = size(job.height, 1080);
    const labels = [];
    clips.forEach((clip, i) => {
      if (!clip.audio) fail('Segmento sem mix / Prepare an audio mix for segment ' + (i + 1));
      filters.push(`[${i}:${clip.video.index}]${canvas(width, height)},fps=${fps.text},format=yuv420p,setpts=PTS-STARTPTS[v${i}]`,
        `[${i}:${clip.audio.index}]aresample=48000,aformat=channel_layouts=stereo,apad,atrim=duration=${clip.duration},asetpts=PTS-STARTPTS[a${i}]`);
      labels.push(`[v${i}][a${i}]`);
    });
    filters.push(labels.join('') + `concat=n=${clips.length}:v=1:a=1[v][a]`);
  } else {
    filters.push(v + "pad=ceil(iw/2)*2:ceil(ih/2)*2,setpts=PTS-STARTPTS" + (job.fps != null ? ',fps=' + fps.text : '') + '[v]');
  }
  args.push('-filter_complex', filters.join(';'), '-map', '[v]', '-map_chapters', '-1');
  if (thumb) args.push('-frames:v', '1', '-an', '-q:v', '2');
  else {
    if (event) args.push('-map', '[a]');
    else if (first.audio) args.push('-map', '0:' + first.audio.index);
    args.push('-c:v', 'libx264', '-crf', '18', '-preset', 'medium', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart');
    if (kind === 'match' && job.fps == null) args.push('-fps_mode', 'passthrough');
  }
  return { args, width, height, duration, fps, hasAudio: !thumb && (event || !!first.audio), count: clips.length };
}

function verify(file, plan) {
  const meta = probe(file);
  const { video, audio } = streams(meta);
  if (!video || !!audio !== plan.hasAudio || (plan.width && (video.width !== plan.width || video.height !== plan.height))) {
    fail('Pistas ou dimensões inesperadas / Unexpected streams or dimensions.');
  }
  if (plan.duration !== null) {
    const tolerance = Math.max(0.08, (plan.count + 1) / plan.fps.hz);
    const lengths = [meta.format.duration, video.duration];
    if (audio) lengths.push(audio.duration);
    if (lengths.some(v => !Number.isFinite(Number(v)) || Math.abs(Number(v) - plan.duration) > tolerance)) {
      fail('Duração divergente / Duration mismatch: ' + lengths.join(', '));
    }
  }
}

function render(project, id) {
  const { outputs } = JSON.parse(readFileSync(sourceFile(project, 'plan.json'), 'utf8').replace(/^\uFEFF/, ''));
  if (!Array.isArray(outputs)) fail('plan.json: outputs[]');
  outputs.forEach(row => slug(row.id));
  if (new Set(outputs.map(row => row.id)).size !== outputs.length) fail('IDs duplicados / Duplicate IDs.');
  const job = outputs.find(row => row.id === id);
  if (!job) fail('ID ausente em plan.json / Unknown output ID: ' + id);
  const plan = recipe(project, job);
  const dir = contained(project, path.join(project, 'exports', folders[job.kind]));
  const name = id + (job.kind === 'thumbnail' ? '.jpg' : '.mp4');
  const final = path.join(dir, name);
  if (existsSync(final)) fail('Entrega existente / Output already exists: ' + final);
  const scratch = mkdtempSync(path.join(dir, '.render-'));
  const tmp = path.join(scratch, name);
  try {
    command(ffmpeg, ['-hide_banner', '-nostdin', '-v', 'error', '-n', ...plan.args, tmp]);
    verify(tmp, plan);
    try { linkSync(tmp, final); }
    catch (error) {
      if (!['EXDEV', 'EPERM', 'EOPNOTSUPP', 'ENOSYS', 'EACCES'].includes(error.code)) throw error;
      copyFileSync(tmp, final, constants.COPYFILE_EXCL);
    }
    console.log(final);
  } finally { rmSync(scratch, { recursive: true, force: true }); }
}

function main(argv) {
  const [cmd, key, id] = argv;
  if (!cmd || cmd === '--help' || cmd === '-h') { console.log(help); return; }
  if (!['init', 'inventory', 'render'].includes(cmd) || argv.length !== (cmd === 'render' ? 3 : 2)) fail(help);
  const project = path.join(projects, slug(key));
  if (cmd === 'init') {
    mkdirSync(project);
    const template = path.join(projects, '_template');
    try {
      for (const name of readdirSync(template)) {
        cpSync(path.join(template, name), path.join(project, name), { recursive: true, force: false, errorOnExist: true });
      }
    }
    catch (error) { rmSync(project, { recursive: true, force: true }); throw error; }
    console.log(project);
    return;
  }
  contained(projects, project);
  command(ffprobe, ['-version'], true);
  if (cmd === 'inventory') inventory(project);
  else render(project, slug(id));
}

try { main(process.argv.slice(2)); }
catch (error) { console.error('EWF: ' + error.message); process.exitCode = 1; }
