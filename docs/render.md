# Comandos e receitas / Commands and recipes

[PT](../README.md) · [EN](../README.en.md) · [Plano com os quatro formatos / Four-format plan](../examples/plan.json)

## Ambiente / Environment

**PT.** Execute os comandos na raiz do kit. Use Node.js 18 ou posterior. Para inventário, disponibilize `ffprobe`. Para render, disponibilize também `ffmpeg` com `libx264`, AAC, JPEG e os filtros da receita. O kit usa CPU. Os executáveis podem estar no PATH ou nos caminhos apontados por `EWF_FFMPEG` e `EWF_FFPROBE`. Não há pacotes npm para instalar.

**EN.** Run commands from the kit root. Use Node.js 18 or later. Inventory needs `ffprobe`. Rendering also needs `ffmpeg` with `libx264`, AAC, JPEG and the recipe filters. The kit uses CPU encoding. Put the tools on PATH or set `EWF_FFMPEG` and `EWF_FFPROBE` to their executable paths. The CLI has no npm dependencies.

```sh
node --version
ffprobe -version
ffmpeg -version
node bin/ewf.mjs --help
node bin/ewf.mjs init ultima-noite-2026
```

| Comando / Command | Resultado / Result |
|---|---|
| `init <project>` | Cria um evento a partir de `_template`. Um ID existente é preservado. / Creates an event from the template. Existing IDs are preserved. |
| `inventory <project>` | Lê `input/` recursivamente e atualiza `work/inventory.json`. Inclui caminhos relativos, bytes, datas, pistas, capítulos e erros individuais de leitura. / Recursively inspects inputs, records relative paths, sizes, dates, streams, chapters and per-file probe errors. |
| `render <project> <output-id>` | Lê o plano, renderiza uma entrega, confere a estrutura e a promove para `exports/`. Para nova revisão, use novo ID. / Reads the plan, renders one output, checks its structure and saves it under exports. Use a new ID for a revision. |

## Primeira exportação / First export

**PT.** Após criar a pasta, coloque o master em `projects/ultima-noite-2026/input/video/`. Preencha `plan.json` com as entradas correspondentes do [exemplo](../examples/plan.json), ajuste os caminhos aos nomes reais e marque os tempos após conferir o master. Para outra luta, meça novamente. No plano, o caminho parte da pasta do evento. Cada saída é independente, exceto se a sua fonte for o resultado de uma etapa anterior.

**EN.** After initialization, put the master in `projects/ultima-noite-2026/input/video/`. Copy the relevant entries from the [example](../examples/plan.json) into the event’s `plan.json`, update paths to the actual names and verify times against the master. Measure new times for another match. Paths in the plan are relative to the event folder. Each output can run independently unless its source is an earlier output.

```sh
node bin/ewf.mjs inventory ultima-noite-2026
node bin/ewf.mjs render ultima-noite-2026 luta-02-v01
node bin/ewf.mjs render ultima-noite-2026 reel-02-v01
```

## Campos do plano / Plan fields

O documento JSON tem a forma `{"outputs": [...]}`. IDs de projeto e saída usam letras minúsculas ASCII, números, hífen ou sublinhado. Nomes de mídia podem incluir acentos e espaços. `source`, `logo` e `cta` são caminhos de arquivo relativos ao evento. / Project and output IDs use lowercase ASCII letters, digits, hyphens or underscores. Media filenames may include spaces and accents. File paths are relative to the event.

| `kind` | Campos / Fields | Comportamento / Behaviour |
|---|---|---|
| `match` | `id, kind, source, start, end` e / and optional `fps` | Corte preciso. Mantém o enquadramento e o ritmo da fonte por padrão. / Accurate cut. Preserves source framing and timing by default. |
| `reel` | `id, kind, source, start, end`; optional `fps, logo, cta` | Intervalo contínuo de 10 s. Aplica o modelo EWF, com fps derivado da fonte. PNGs locais substituem logo ou CTA. / Continuous 10 s range, EWF layout, source-derived frame rate. Local PNGs can override logo or CTA. |
| `thumbnail` | `id, kind, source`; optional `at, style, framing` | JPG 1600 × 900. Foto ou quadro no segundo `at` (padrão 0). `style` = `plain` (padrão/default) ou/or `free-match`. `framing` = `contain` (padrão/default) ou/or `cover`. |
| `event` | `id, kind, segments`; optional `width, height, fps` | Cada segmento tem `source, start, end`. Ordena os intervalos já mixados e normaliza a tela e o áudio estéreo. Padrão 1920 × 1080 e fps da primeira fonte. / Joins premixed intervals in order, conforms picture and stereo sound. Defaults to 1920 × 1080 and the first source’s fps. |

**Tempo / Time.** `start`, `end` e `at` usam segundos desde o início do arquivo indicado. Cada intervalo é `[start, end)`. `fps` pode ser um número ou razão, como `"30000/1001"`. O preset de Reel produz cadência constante. / All times are seconds from the start of the named file. Ranges include the start and exclude the end. FPS can be numeric or a rational string. The Reel preset uses constant frame rate.

## Escopo das receitas / Recipe scope

**PT.** A CLI lê a primeira pista de vídeo de conteúdo e a primeira de áudio. Para evento, forneça segmentos com áudio alinhado e mixado. A montagem automática inclui o som dessas pistas. Prepare multicâmera, correção de deriva, mixagem, títulos ou capítulos no [fluxo de evento](event.md). Em Reel de fonte silenciosa, a saída fica silenciosa. Em material HDR, prepare a conversão de cor conforme o destino antes de usar as receitas de vídeo SDR. Para artes com tipografia ou recorte exclusivos, use as referências no editor de imagem.

**EN.** The CLI reads the first content video stream and the first audio stream. For an event, supply clips with aligned, mixed audio. The assembler carries those mixes into the result. Use the [event workflow](event.md) for multicamera, drift correction, mixing, titles or chapters. Silent Reel sources produce silent output. Prepare HDR color conversion for the destination before using the SDR video recipes. Use an image editor for custom typography or focal crops.

## Revisão e falhas / Review and recovery

**PT.** Caminho ausente ou intervalo inválido aparece no terminal. Corrija a entrada no plano e repita o mesmo ID caso ainda não tenha sido exportado. Em inventário, um PDF ou texto pode aparecer com `probe_error`; confira a lista. O render mede duração e pistas, além das dimensões nas receitas com tela definida. Depois, abra o arquivo e faça o QA do guia. Em show longo, valide um trecho com os mesmos parâmetros antes de renderizar a montagem inteira.

**EN.** Missing paths and invalid ranges are reported in the terminal. Fix the plan and retry the same ID if it has no completed export. The inventory may list a PDF or text file with `probe_error`; inspect that list. Rendering checks duration and streams, plus dimensions for fixed-canvas recipes. Open the output and apply the workflow’s editorial checks. For a long show, run a representative sample using the intended settings first.
