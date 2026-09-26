# micro:bit Workshops

A website hosting workshops built from micro:bit projects. Participants (kids and adults) work through ordered projects, some unlocked by finishing others; managers create projects and workshops. Static Angular SPA on Vercel Hobby, Supabase backend.

- Original brief: [brief.md](brief.md)
- **All product and architecture decisions: [docs/SPEC.md](docs/SPEC.md). Read it before designing or implementing anything; don't contradict it without asking.**
- **Work is planned as tickets in [tickets/](tickets/README.md).** Work one ticket at a time, in dependency order; tick its acceptance criteria and update the status column in `tickets/README.md` when done.

## Angular rules

Follow the official Angular best practices (from angular.dev):

@docs/angular-best-practices.md

- Use the project skills `angular-developer` (all Angular code) and `angular-new-app` (scaffolding) in `.claude/skills/`.
- The Angular CLI MCP server is configured in `.mcp.json`; use `get_best_practices` and `search_documentation` when unsure about current APIs.
- After generating code, run `ng build` and fix errors before finishing.

## Project conventions

- Latest stable Angular: standalone, signals, zoneless, static SPA (no SSR).
- UI: Angular Material with our own playful theme (large touch targets). Angular CDK for drag & drop.
- Backend: Supabase (Postgres, Auth, Storage, RLS, RPC). Access rules are enforced in the database (RLS / `SECURITY DEFINER` functions), never only in the UI. Migrations live in `supabase/migrations`.
- Language: Dutch UI and content only; locale `nl`, dates in Europe/Amsterdam.
- Routes: public area at `/`, manager area under `/beheer` (lazy-loaded).
- Tests: Vitest; lint with angular-eslint; format with Prettier (`npm run format`, `npm run format:check`).
