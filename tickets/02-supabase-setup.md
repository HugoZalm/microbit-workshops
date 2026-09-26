# 02 — Supabase project, local dev & keep-alive

**Depends on:** 01

**Scope**

- Create the Supabase project (EU region). Local stack via Supabase CLI; migrations in `supabase/migrations`, committed.
- Angular environment config for Supabase URL + anon key (dev/prod); Vercel env vars.
- Supabase client service in Angular.
- Scheduled GitHub Actions workflow (e.g. every 3 days) that makes a lightweight API request, preventing the free-tier 7-day pause.
- README: run locally, apply migrations, deploy migrations.

**Acceptance**

- [ ] `supabase start` + `ng serve` runs the app against local Supabase.
- [ ] Migrations deploy to the hosted project with a documented command.
- [ ] Keep-alive workflow runs on schedule and succeeds.
