# 11 — Duplicate workshop

**Depends on:** 10

**Scope**

- "Dupliceer" action: a dialog asks for a new title (default "<titel> (kopie)") and start/end date-time.
- Copies description, cover, projects, order, prerequisites and free/private; generates a new code; published = false; no participants or progress.
- Implemented as one RPC (single transaction).

**Acceptance**

- [ ] The copy opens in edit mode as a draft with identical composition and a new unique code.
