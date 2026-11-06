# Features and bugs

Tick a box when it's done. New items go at the bottom of their section.

## Redesign (Ink & Ember)

- [x] Theme, fonts and header
- [x] Home
- [ ] Calendar
- [ ] Round detail
- [ ] Standings
- [ ] Mobile bottom tab bar (the header still uses a burger menu)
- [ ] Restyle the remaining Mantine leftovers (`mantine-datatable` tables, tabs)

## Features

- [ ] Driver and team profile pages
- [ ] Season points chart with head-to-head compare
- [ ] Session times in the viewer's timezone on every screen (Home done)
- [ ] Favourite driver pinned on the home page
- [ ] Penalty points tracker (the page is an empty placeholder today)
- [ ] Qualifying and sprint results in the same table switcher as the race
- [ ] Constructors standings with points bars

## Bugs

- [x] Calendar only showed results for the first 5 races (the API caps `limit` at 100)
- [x] Missing React `key` warning in the header
- [x] Race results failed to load when a fastest lap had no average speed
- [ ] `isEventInTheFuture` returns `true` for events in the past
- [ ] `getCurrentSeasonResults` still asks for `limit=10000` (capped at 100, currently unused)
- [ ] "Spring shootout" typo in `getNextEvent` (should be "Sprint shootout")
- [ ] Header renders the nav and theme toggle twice in the DOM (desktop and mobile variants)

## Chores

- [ ] Add `.playwright-mcp/` to `.gitignore`
