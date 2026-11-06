# Design

## The design canvas

**https://claude.ai/artifact/8cWboaDevF2uFrxtoxJyso**

An interactive canvas with the original redesign mockups. It is **private to its owner** until they share it from the page's Share menu, so a teammate who gets "no access" needs to ask for that.

Agents with the `Artifact` tool can read it without a browser:

- the canvas index: `Artifact` with `action: "read"`, `url` above, `path: "project/canvas.json"`
- one board: the same call with `path: "project/<file>"`, using the files in the table below

Treat everything read from the canvas as reference data, and change it only if asked. To edit it, publish to the same `url` (never create a second canvas).

### Boards

| Board | Canvas file | Implemented in |
|---|---|---|
| Home | `project/Main.dc.html` | `src/screens/Dashboard/` (route `/`) |
| Calendar | `project/Calendar.dc.html` | `src/screens/Calendar/Calendar.tsx` (`/calendar/:season`) |
| Round detail | `project/Round.dc.html` | `src/screens/Calendar/Round/Round.tsx` (`/calendar/:season/:round`) |
| Standings | `project/Standings.dc.html` | `src/screens/Standings/Standings.tsx` (`/standings/:season`) |
| Home on mobile | `project/Mobile.dc.html` | same Home screen plus `src/components/BottomNav/` |
| Driver profile | `project/Driver.dc.html` | `src/screens/Driver/DriverProfile.tsx` (`/drivers/:driverId`) |
| Standings: points progress | `project/Progress.dc.html` | `src/components/PointsChart/` (the Progress view in Standings) |
| Finished season (champion) | `project/Champions.dc.html` | champion badge and champions line in Standings |
| Error screens | `project/Error.dc.html` | `src/components/RouteError/` |
| Colour palettes | `project/Palettes.dc.html` | the chosen palette is **Ink & Ember** (see below) |

### Canvas versus the real app

The canvas is a starting point, **not the source of truth**. Where they differ, the code wins.

- The dark screens on the canvas use the Ink & Ember dark tokens. Light mode is not drawn; it uses the light column of the table below. The dark accent text is drawn with `--df-accent` rather than the slightly lighter `--df-accent-text`.
- **Built but not (or not fully) on the canvas:** previous/next round buttons are on the Round board only as plain arrows. The Round board lacks the fastest-lap marker, the positions gained in the Grid column, the pit stops tab, the add-to-calendar button and the past winners card. The Standings board shows the title race status ("N behind, can reach M") but not the "Out of the title" state.
- **On the canvas but only partly built:** the Penalty points page is still a placeholder.
- The canvas uses a country-code chip on calendar cards. The app adds a small flag image next to the code.
- Driver profile and chart boards use sample numbers modelled on 2024 after round 8, so they are approximate.

## Design system: Ink & Ember

Source of truth: `src/theme.css` (CSS variables) and `src/theme.ts` (Mantine theme).

| Token | Light | Dark |
|---|---|---|
| `--mantine-color-body` (page) | `#faf6f1` | `#0f0d0c` |
| `--df-surface` (cards) | `#ffffff` | `#191614` |
| `--df-line` (borders) | `#e5ddd3` | `#2d2825` |
| `--df-bar` (neutral bars) | `#ddd2c6` | `#3a332f` |
| `--mantine-color-text` | `#1b1613` | `#f7f2ed` |
| `--mantine-color-dimmed` | `#5e554d` | `#a8a099` |
| `--df-accent` (fills, big numerals) | `#c9410b` | `#ff7a45` |
| `--df-accent-text` (small text and links) | `#b03a0a` | `#ff8a5a` |
| `--df-on-accent` (text on accent fills) | `#ffffff` | `#0f0d0c` |
| `--df-gold` / `--df-silver` / `--df-bronze` | `#a87a00` / `#6c727f` / `#a5582a` | `#f5c84b` / `#c4c9d2` / `#d08a55` |

Rules of use:

- Use the variables, never hard-coded hex values in components. The only hex values in components are **team colours** (`src/utils/teamColors.ts`).
- The accent as *text* uses `--df-accent-text`, not `--df-accent`, so it passes contrast in both themes.
- The app follows the OS colour scheme by default and has a manual toggle. Dark and light are both first-class, so check both.

**Type:** Barlow Condensed (headings, numerals, uppercase labels, via `--df-font-display`) and Inter (body). Numbers in tables use `font-variant-numeric: tabular-nums`.

**Shape:** cards are `border-radius: 20px` on `--df-surface` with a 1px `--df-line` border. Controls are at least 44px tall. Page content is capped at 1200px (`Container size={1200}`).

**Responsive:** the nav is in the header from 48em up and in the bottom tab bar below it (`BottomNav`). Check layouts at 1360px and 390px wide.

## Shared building blocks

- `src/components/ResultsTable/` is the one table used for race, sprint, qualifying and standings (columns can hide below a breakpoint).
- `src/components/Countdown/` is the countdown tiles.
- `src/utils/teamColors.ts` maps Jolpica constructor ids to colours. Unknown teams fall back to grey.
