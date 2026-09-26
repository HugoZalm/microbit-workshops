# 03 — Database schema & RLS baseline

**Depends on:** 02

**Scope**

- Tables per SPEC §10: `managers`, `projects`, `project_attachments`, `workshops`, `workshop_projects`, `workshop_prerequisites`, `participants`, `participant_sessions`, `workshop_access`, `progress`.
- Constraints: case-insensitive unique `workshops.code`; unique `(workshop_id, lower(nickname))`; `ends_at > starts_at`; code required iff `is_private`; prerequisite rows reference projects in the same workshop; progress status enum.
- Helper `is_manager()` (checks `auth.jwt()->>'email'` against `managers`).
- RLS enabled on all tables: managers full access; public read of published free workshops (+ their projects) only; everything else via RPCs in later tickets.
- Private storage buckets: `covers`, `content`, `attachments`.
- Enable pgcrypto.
- Seed the first manager email from a seed file / variable (not hard-coded in app code).

**Acceptance**

- [ ] Migration applies cleanly from scratch.
- [ ] SQL tests (pgTAP or scripted) prove: anon cannot read draft or private workshop content; anon can read a published free workshop + its projects; a manager can read/write everything.
