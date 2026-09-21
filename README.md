# 🪐 Planet Choices

**Every decision shapes a world.**

A browser-based decision game: pick a planet, then work through 24 rounds of environmental, economic, and social trade-offs. There's no "correct" answer — every choice shifts five stats (Planet Health, Ozone Layer, Biodiversity, Pollution, Quality of Life), and your planet's final report reflects the pattern of decisions you made.

## Play it

Open `index.html` in any modern browser — no build step, no dependencies to install.

### Host it on GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`, pick your default branch and `/ (root)`.
4. Save — your game will be live at `https://<your-username>.github.io/<repo-name>/`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure — all screens (menu, planet select, how to play, game, results, settings) |
| `style.css` | Visual design — dark cosmic theme, HUD stat bars, responsive layout, RTL support |
| `script.js` | Game data (8 planets, 24 decision rounds) and all logic |

## Features

- 8 selectable planets, 24 branching decision rounds with two options each
- Live stat tracking (Planet Health, Ozone, Biodiversity, Pollution, Quality of Life) with an ozone status indicator
- End-of-game report with an overall score, strongest/weakest area breakdown, and a planet title
- English / Arabic interface toggle (full RTL layout) for the menu, tutorial, and settings
- Settings: language, sound (on/off), animation (full/reduced), text size, high contrast, reduced motion
- Small "Did you know?" environmental facts after select rounds
- No external JS libraries; light WebAudio-based click sounds, no audio files needed

## Customizing

All game content lives in `script.js`:
- `PLANETS` — the 8 selectable planets
- `ROUNDS` — the 24 decision rounds, each with `a`/`b` options, consequence text, and stat deltas
- `I18N` — interface text in English and Arabic

Edit stat deltas per choice (`health`, `ozone`, `biodiversity`, `pollution`, `quality`) to rebalance how forgiving or strict the game feels — pollution deltas are inverted (positive = worse) everywhere else higher = better.
