# 13 — Workshop page & time-window rules

**Depends on:** 08, 10

**Scope**

- `/w/:id`: title, cover, description, dates, ordered project cards (title, summary, duration, materials).
- Time window: before start → banner "Start op …" and project content can't be opened (also enforced server-side); active → normal; after end → banner "Afgelopen", content viewable, progress read-only.
- Not joined (free workshop): projects viewable read-only, with a "Doe mee" button to track progress.
- Joined: per-project status (niet gestart / bezig / klaar) and lock state with "Eerst klaar: …".
- Project route `/w/:id/p/:projectId` (viewer built in T16).

**Acceptance**

- [ ] Free and private workshops behave the same across the three time states.
- [ ] Before start, content is not returned by the API (not just hidden).
