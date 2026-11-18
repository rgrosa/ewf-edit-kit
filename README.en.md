# EWF · Editing kit

[Português](README.md) · [Agent instructions](AGENTS.md) · [EWF reference edits](docs/references.md)

Open this folder as the workspace root in your AI editor. Each event gets its own brief, sources, edit decisions and deliverables. Use the included command line tools or your usual video and image editors.

## Start your first edit

1. Duplicate **[projects/_template](projects/_template)** as `projects/revolution-2026`, or run the command below. Use a new ID for each event.
2. Inside that event, put recordings in `input/video/`, photos in `input/images/` and commentary in `input/audio/`. Keep original filenames, including spaces and accents.
3. Give the agent your request in chat or in `brief.md`. Name the event and the outputs you want. The agent records your request, selects the workflow and documents the decisions needed for the edit.
4. Open the appropriate subfolder of `exports/` to view the result. Read `review.md` for the version, checks and open items. To request a revision, give the output ID and the change.

```sh
node bin/ewf.mjs init revolution-2026
```

**Example request**

> Read AGENTS.md and work in projects/revolution-2026. Make an EWF Reel for Strong Style Society vs ASH & Kali. Pick a sequence that fits the setup, landing and reaction into ten seconds. Keep the approved Portuguese end card.

## Event folder map

| Inside `projects/<event>/` | What goes here |
|---|---|
| `input/video/` | Full show, camera originals, individual matches or edited masters |
| `input/audio/` | Commentary, mixer feeds, venue sound and approved mixes |
| `input/images/` | Source photos and posters |
| `input/brand/` | Event-specific logos, cards and overlays |
| `input/references/` | Approved artwork, reference videos and framing examples |
| `brief.md`, `edit.md`, `plan.json` | Request, editorial decisions and CLI render parameters |
| `work/` | Inventory, proxies, editable sessions, layers, previews and intermediates |
| `exports/events/`, `exports/matches/`, `exports/reels/`, `exports/thumbnails/` | Versioned deliverables by format |
| `review.md` | Review findings and handoff notes |

`assets/` contains the shared EWF logo, portable overlays and two visual references. Keep event-specific material with its event.

## Production guides

| Request | Guide |
|---|---|
| Assemble a show, sync commentary or create chapters | [Full event](docs/event.md) |
| Split a show into individual free matches | [Free matches](docs/free-matches.md) |
| Turn an action sequence into a Reel | [Reels](docs/reels.md) |
| Fit a poster or create a FREE MATCH cover | [Thumbnails](docs/thumbnails.md) |
| Inventory sources or render a plan | [Commands, formats and limits](docs/render.md) |
| Hand off a project to another editor | [Git and handoff](docs/handoff.md) |

The CLI uses Node.js 18+ and FFmpeg/FFprobe for media operations. The guides and manual folder setup work independently of those tools.
