# 01 — Repo, Angular app & Vercel deploy

**Goal:** An empty but deployable app shell.

**Scope**

- GitHub repo; Angular (latest stable) standalone app, static SPA build, strict TS, ESLint, Prettier, unit test runner.
- Angular Material with a custom playful theme (large touch targets), Dutch locale (`nl`), date display in Europe/Amsterdam.
- App shell: header, router with lazy `public` and `beheer` (manager) areas, 404 page.
- Vercel project linked to the repo; SPA rewrite to `index.html`; preview deploy per PR.
- CI (GitHub Actions): lint, test, build on PR.
- Angular AI tooling, set up **before** scaffolding (copy from `scrolly-telling-op-reis`):
  - skills `angular-developer` and `angular-new-app` in `.claude/skills/`;
  - Angular CLI MCP server in `.mcp.json` (`npx -y @angular/cli mcp`);
  - angular.dev best practices in `docs/angular-best-practices.md`;
  - `CLAUDE.md` with project summary and Angular rules, importing `@docs/angular-best-practices.md` and pointing to the skills and MCP tools (`get_best_practices`, `search_documentation`).

**Acceptance**

- [ ] Claude Code in this repo loads both skills, the `angular-cli` MCP server, and the best practices via `CLAUDE.md`.
- [ ] Push to `main` deploys to the production URL; PRs get preview URLs.
- [ ] Deep links (e.g. `/w/abc`) load on refresh.
- [ ] CI fails on lint/test/build errors.
