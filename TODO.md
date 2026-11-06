# Features and bugs

Tick a box when it's done. New items go at the bottom of their section.

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

- [ ] Dev only: every loader runs twice, because `createBrowserRouter` is called inside the `Router` component and StrictMode renders it twice (move it to module scope)
- [ ] Calendar and driver profile send about 6 requests within a second or two, which can brush the API's 4 requests/second limit on a cold load

## Chores

- [x] Add `.playwright-mcp/` to `.gitignore`
- [ ] Remove the unused `mantine-datatable` dependency and its CSS import in `main.tsx`
