# 18 — Participant data retention

**Depends on:** 03

**Scope**

- Daily scheduled job (Supabase `pg_cron`) that deletes participants, sessions and progress for workshops whose `ends_at < now() - interval '30 days'`.
- Also clean up `workshop_access` rows for those workshops, and stale anonymous users if feasible.
- The workshop edit page shows "Deelnemersgegevens worden verwijderd op <datum>".

**Acceptance**

- [ ] With a backdated workshop, the data is removed on the next run; the workshop and projects remain.
