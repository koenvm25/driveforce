# Features and bugs

Tick a box when it's done. New items go at the bottom of their section. Workflow and gotchas are in [`CLAUDE.md`](CLAUDE.md); the design is in [`docs/DESIGN.md`](docs/DESIGN.md).

## Redesign (Ink & Ember)

- [x] Theme, fonts and header
- [x] Home
- [x] Calendar
- [x] Round detail
- [x] Standings
- [x] Mobile bottom tab bar (replaces the burger menu)

## Features

- [x] Driver profile pages (linked from standings, results and home)
- [ ] Team profile pages
- [ ] Championships count on driver profiles (needs one standings request per season)
- [x] Season points chart with head-to-head compare (Standings, "Progress" view)
- [x] Session times in the viewer's timezone on every screen
- [ ] Favourite driver pinned on the home page
- [ ] Penalty points tracker (the page is an empty placeholder; the Jolpica API has no penalty points data, so a data source is needed first)
- [x] Qualifying and sprint results in the same table switcher as the race
- [x] Constructors standings with points bars
- [x] Previous/next round buttons on the round page
- [x] Champion badges and a champions line on finished seasons in the standings
- [x] Show a title as clinched before the final round (uses the current points system: 25 per race and 8 per sprint for a driver, 43 and 15 for a team)
- [x] Team colours for historical teams (they fall back to grey)

### Ideas (no API cost unless noted)

- [x] Add to calendar: download an `.ics` file with every session of a weekend, in the viewer's timezone
- [ ] Title race view in the standings: mark drivers and teams who are mathematically out, and show how many points the others need (reuse the clinch logic in the standings loader)
- [x] Race table extras: fastest-lap marker and a "positions gained/lost vs grid" column (the delta sits in the Grid column; the marker shows on every screen size, the delta from 62em up)
- [ ] Past winners at this circuit on the round page (1 request)
- [ ] Pit stops table on the round page (1 request)
- [ ] Teammate head-to-head (qualifying and race wins) on driver profiles or in the Progress view
- [ ] Team accent colour: pick a favourite team and the site accent takes its colour (pairs with the favourite driver item)
- [ ] Predictions game: pick a podium before a race and get scored afterwards, stored in the browser
- [ ] Global search to jump to a driver, race or season (a few requests)
- [ ] Response cache in the browser (IndexedDB), possibly as an installable offline PWA, to reduce rate-limit pressure
- [ ] Lap-by-lap race chart of position changes (about 1,400 lap rows, so 14 requests per race: only with the response cache above)
- [ ] Live timing during a session (Jolpica has nothing live; OpenF1 does, but its live data is paid)

## Bugs

- [x] Calendar only showed results for the first 5 races (the API caps `limit` at 100)
- [x] Missing React `key` warning in the header
- [x] Race results failed to load when a fastest lap had no average speed
- [x] `isEventInTheFuture` returned `true` for events in the past (renamed to `hasEventPassed`)
- [x] `getCurrentSeasonResults` asked for `limit=10000` (capped at 100, unused, removed)
- [x] "Spring shootout" typo in `getNextEvent` (should be "Sprint shootout")
- [x] Header rendered the nav and theme toggle twice in the DOM (desktop and mobile variants)
- [x] API rate limiting (429) broke pages: requests now retry with backoff, and failed loads show an error screen inside the page chrome
- [x] Filled buttons had white text on the orange in dark mode (low contrast)
- [x] Dev only: every loader ran twice, because `createBrowserRouter` was called inside the `Router` component and StrictMode renders it twice (router now lives at module scope)
- [x] Calendar and driver profile send about 6 requests within a second or two, which can brush the API's 4 requests/second limit on a cold load (the axios client now queues requests, max 3 per 1.1 s)

## Chores

- [ ] Update the design canvas to the real Ink & Ember colours and add the screens it lacks (driver profile, progress chart, champion badges, error screen)
- [x] Add `.playwright-mcp/` to `.gitignore`
- [x] Remove the unused `mantine-datatable` dependency and its CSS import in `main.tsx`
