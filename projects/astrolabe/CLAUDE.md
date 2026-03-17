# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static academic paper project page for "Astrolabe" — a reinforcement learning framework for distilled autoregressive video models. It is a pure HTML/CSS/JS site with no build step, package manager, or framework.

## Development

Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8080
```

There are no build, lint, or test commands.

## Architecture

Three source files:

- `index.html` — page structure and content (paper title, authors, abstract, method, gallery sections, citation)
- `styles.css` — all styling; uses CSS custom properties `--astro-start`, `--astro-end`, `--astro-mid` for the brand gradient
- `script.js` — all interactivity

### script.js key patterns

- **Lazy video loading**: Videos use `data-src` instead of `src`. A global `IntersectionObserver` (`window._videoObserver`) swaps in the real src when a video scrolls into view (with an 800px pre-load margin). Any dynamically created video must call `window._videoObserver.observe(video)` after appending it to the DOM.
- **Dynamic grid population**: `buildDynamicGrid(sectionId, data)` is a generic helper. The three video sections (`#short-video`, `#multi-prompt`, `#multi-prompt-scene-cut`) are populated from `CASUAL_FORCING_*` filename arrays on `DOMContentLoaded`. The `#comparisons` section is populated from `MERGED_COMPARISON_VIDEOS` and uses `VIDEO_PROMPTS` (keyed by numeric ID without leading zeros) for hover overlays.
- **Speed controls**: Each `.speed-controls` group scopes its speed buttons to the nearest `.gallery-section` ancestor.

### Asset layout

```
assets/
  logo.svg
  pipeline.png                        # method overview figure
  videos/
    casual_forcing/                   # 2-way side-by-side comparison clips
    comparisons/astrolabe/            # per-method clips (unused by current JS)
    comparisons/base/                 # per-method clips (unused by current JS)
    comparisons_merged/               # 4-method merged clips used by #comparisons section
```

The `comparisons_merged/` directory is referenced in JS but not present in the repo — these files need to be added for the comparisons section to work.
