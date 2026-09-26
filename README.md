# micro:bit Workshops

Website with workshops built from micro:bit projects. Static Angular SPA (Angular Material) on Vercel, Supabase backend.

- Spec: [docs/SPEC.md](docs/SPEC.md)
- Tickets: [tickets/README.md](tickets/README.md)

## Development

Requires Node 22+.

```bash
npm install
npm start              # dev server on http://localhost:4200
npm test               # unit tests (Vitest)
npm run lint           # angular-eslint
npm run format         # Prettier (format:check in CI)
npm run build          # production build → dist/microbit-workshops/browser
```

## Deployment

Vercel builds `main` to production and every PR to a preview URL (config in [vercel.json](vercel.json)). CI in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs lint, format check, tests and build.
