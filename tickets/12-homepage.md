# 12 — Public homepage & code box

**Depends on:** 09, 14

**Scope**

- `/`: cards for **published free** workshops (cover, title, dates, status badge: "Start op …" / "Nu bezig" / "Afgelopen"), sorted active → upcoming → ended; ended ones limited or collapsed.
- "Heb je een code?" box: case-insensitive input → RPC from T14 → navigate to the private workshop; a wrong code shows a friendly error; attempts are rate-limited.
- Empty state when there are no workshops.

**Acceptance**

- [ ] Private and draft workshops never appear in the list.
- [ ] A valid code typed in lowercase opens the private workshop.
