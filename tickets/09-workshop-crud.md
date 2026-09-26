# 09 — Workshop CRUD, code generation, publish

**Depends on:** 04

**Scope**

- `/beheer/workshops`: list (chips: concept/gepubliceerd, binnenkort/actief/afgelopen), create, edit, delete.
- Fields: title, description (Markdown editor from T07), cover image, start/end date-time (Europe/Amsterdam pickers), free/private, code, published.
- Private → code auto-generated (6 chars, alphabet without 0/O/1/I/L), editable, "Nieuwe code" button; uniqueness checked case-insensitively with a clear error.
- Validation: end after start.
- Deleting a workshop removes its participants and progress (the confirm dialog shows counts).

**Acceptance**

- [ ] Switching free → private generates a code; private → free clears it.
- [ ] A duplicate code (any case) is rejected.
- [ ] Draft workshops are invisible to non-managers (verified via RLS).
