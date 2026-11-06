# DriveForce

A Formula 1 dashboard: home (next race, last race, top 5), calendar, round results, standings (with a points-progress chart and champion badges) and driver profiles. React + TypeScript + Vite + Mantine 7. Data comes from [Jolpica](https://github.com/jolpica/jolpica-f1) (the Ergast-compatible API) at `https://api.jolpi.ca/ergast/f1`, called straight from the browser.

## Start here

| Need | Go to |
|---|---|
| What to work on (features, bugs, chores) | [`TODO.md`](TODO.md) |
| How it should look, colours, type, components | [`docs/DESIGN.md`](docs/DESIGN.md) |
| **The design canvas** (mockups for every main screen) | https://claude.ai/artifact/8cWboaDevF2uFrxtoxJyso (details and how to read it in `docs/DESIGN.md`) |

## Commands

```sh
yarn dev                 # Vite dev server, http://localhost:5173
yarn build               # production build
yarn lint                # ESLint, must stay at 0 warnings
npx tsc --noEmit -p .    # type check, must stay clean
npx prettier --write <files>   # format the files you touched
```

Node 24 (see `mise.toml`). There is no test suite, so verification is the type check, lint and looking at the page (see below).

## Working on a TODO item

1. Pick an unchecked item in `TODO.md`. Do one item at a time.
2. Implement it, following the conventions below.
3. Verify it (type check, lint, and the browser checks below).
4. Tick the item in `TODO.md` **in the same commit**, and add any new bugs or ideas you found as new unchecked items (put each under the right heading).
5. One commit per item. Short lowercase imperative message, e.g. `add driver profile pages`. Do not push unless asked.
6. Only stage the files you changed. The working tree usually has local files that are not ours (`yarn.lock`, `.yarn/`, `.yarnrc.yml`, `mise.toml`); leave them alone.

The user often already has the dev server running on port 5173. Reuse it; don't start a second one or restart it.

## Architecture

- **Routing and data:** `src/Router.tsx` creates the router once at module scope (creating it inside a component makes every loader run twice under StrictMode). Each route has a loader in `src/utils/loaders.ts`; screens read the result with `useLoaderData()`. Route errors render `RouteError` inside the layout.
- **React Query** (`src/queries/`) is only for lazy, client-side fetches that should not block navigation (the points chart, a driver's career totals).
- **API layer:** `src/utils/api/endpoints.ts` (one function per endpoint) and `axiosConfig.ts` (base URL, retry with backoff on HTTP 429, rejects with the response body).
- **Types:** raw API shapes in `src/types/dto/`, app models in `src/types/`, mappers in `src/domain/`.
- **UI:** Mantine 7 plus CSS modules (`*.module.css`, processed by `postcss-preset-mantine`). Screens are in `src/screens/`, shared pieces in `src/components/`. `@/` is an alias for `src/`.
- **Theme:** `src/theme.ts` (Mantine) and `src/theme.css` (CSS variables). See `docs/DESIGN.md` for the tokens.

## Gotchas

These cost real time already; don't rediscover them.

**The API**
- `limit` is silently capped at **100**. Anything bigger (season results, sprint results) must be paged with `offset`: see `getAllRaceResultPages` in `endpoints.ts`.
- Rate limit: **4 requests/second burst, 500/hour**, per IP (so per visitor). Over the limit returns `429 "Request was throttled"`; that is a temporary throttle, not a documented ban. A page should stay in the single digits of requests, sent sequentially where it can be. Responses are cached by the browser for 10 minutes.
- Per-driver standings need a season (`/drivers/{id}/driverStandings.json` returns 400), so career-wide stats use `limit=1` totals instead.
- Recent races can omit `AverageSpeed` on the fastest lap; the DTO marks it optional.
- Season-in-progress standings: a title is "decided" when the leader's lead exceeds the maximum points still available (constants at the top of the standings loader). Finished seasons simply use the final leader.

**CSS and Mantine**
- `light-dark()` **inside `:root` is broken** by `postcss-preset-mantine` (it becomes a selector that never matches). `theme.css` uses explicit `:root[data-mantine-color-scheme="dark"]` blocks. `light-dark()` inside component CSS modules is fine.
- Mantine computes the text colour on filled buttons once, for the light shade, so `theme.css` overrides it for dark mode.
- The whole app is wrapped in a Mantine `ScrollArea` (a `display: table`), which grows to the width of its widest child. Wide tables need `contain: inline-size` on their horizontal scroll container (see `ResultsTable.module.css`), or the page scrolls sideways on mobile.
- Mantine charts print React `defaultProps` warnings from inside recharts 2. They are harmless.
- Use the CSS variables from `theme.css`. Hard-coded hex values are only for team colours.

## Verifying a change in the browser

If a Playwright MCP is available, check every UI change at **1360 px and 390 px wide**, in **light and dark**, and look at the console for errors.

- The page scrolls inside the `ScrollArea`, so full-page screenshots only capture the viewport. Resize the window taller instead.
- Screenshots can only be saved inside the repo; the default output folder `.playwright-mcp/` is git-ignored.
- The theme toggle is the first `button[aria-label^="Switch to"]`. The choice is stored in `localStorage` (`mantine-color-scheme-value`), so it persists between page loads.
- Handy URLs: `/` · `/calendar/2025` · `/calendar/2025/6` (a sprint weekend) · `/standings/2025` · `/standings/1988` · `/drivers/norris`. A finished season (2025) shows champions; the current season is in progress.

## Conventions

- Comments only where the reason isn't obvious from the code (a constraint or a gotcha). Don't narrate what the code does.
- Keep screens thin: data in loaders or hooks, markup in the screen, styling in its CSS module. Reuse `ResultsTable`, `Countdown` and the helpers in `src/utils/` before writing new ones.
- Real links (`<Link>`, `<a>`) for navigation and real `<button>`s for actions, with a visible focus state and at least 44 px touch targets.
- Don't add a dependency without a good reason, and tell the user when you do (`yarn.lock` is theirs to commit).
