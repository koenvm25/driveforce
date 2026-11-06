---
name: next-todo
description: Pick what to work on next from TODO.md. Ranks the open items, shows the best few, asks the user to choose one, then does exactly that item. Use when the user asks what to do next, to pick something from the todo list, for the next item, or runs /next-todo.
---

# Pick the next TODO item

The goal is to save the user from scanning the whole list: surface the few best open items, let them choose, then do the chosen one properly.

## 1. Gather

- Read `TODO.md` and `CLAUDE.md` (workflow, gotchas, API limits).
- Collect every unchecked item (`- [ ]`) with its section heading.
- Run `git log --oneline -10` to see what was just worked on.

## 2. Drop what is blocked

Leave an item out if it can't be done yet. Typical reasons:

- its own note says it needs something first that is still unchecked (for example the lap-by-lap chart needs the response cache; penalty points need a data source)
- it needs a decision or an account only the user can provide

"Pairs with" or "see also" in a note is not a blocker. Keep a one-line list of what you dropped and why, to mention in the question.

## 3. Rank the rest

Use judgement, not a formula. In rough order of importance:

1. **Bugs that affect users** (wrong data, broken layout, rate-limit failures) beat everything else.
2. **Small, visible features with no extra API cost.** Cheap wins first.
3. **Medium features**, then **chores** and polish.
4. **Rate limits matter.** The API allows 4 requests/second and 500/hour per visitor. Between two similar items, prefer the one that adds fewer requests.
5. **Momentum.** An item that builds on the last few commits is cheaper than a cold start.

Make the shortlist **varied**: at most one chore, and don't fill it with four items of the same kind. Choose up to 4.

## 4. Ask

Use `AskUserQuestion` with a single question and up to 4 options.

- Put your top pick first and end its label with `(Recommended)`.
- `label`: the item in a few words.
- `description`: one line covering why it's worth doing now, the rough effort (small, medium, large) and the API cost (none, or how many requests).
- Mention the blocked items in the question text, in a single short sentence.
- The user can always choose "Other" to name a different item or to say not now.

Do not start any work before they answer.

## 5. Do exactly that one item

Follow the workflow in `CLAUDE.md`:

1. Implement it with the conventions and gotchas from `CLAUDE.md`.
2. Verify it: `npx tsc --noEmit -p .`, `yarn lint`, and in the browser at 1360px and 390px wide, in light and dark, checking the console.
3. Tick the item in `TODO.md` in the same commit. Add any new bugs or ideas you found as new unchecked items under the right heading.
4. Make one commit with only the files you changed. Short lowercase imperative message. Don't push.
5. **Stop.** Summarise what was done and what you noticed, and don't start another item. The user runs the skill again when they want the next one.

If the item turns out to be blocked or much bigger than it looked, stop and tell the user instead of widening the scope.

## If nothing is open

Say so plainly. Don't invent work.
