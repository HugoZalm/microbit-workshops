# 06 — Project CRUD, archive & delete guard

**Depends on:** 04

**Scope**

- `/beheer/projecten`: list (search by title, archived filter), create, edit, archive/unarchive, delete.
- Fields: title, summary, cover image, learning goal, estimated duration (min), required materials, content (Markdown; plain textarea until T07).
- Delete is blocked while the project is used in any workshop; the UI lists those workshops (enforced in the DB via FK restrict or RPC).
- Archived projects are excluded from the project picker (T10) but keep working in existing workshops.

**Acceptance**

- [ ] Create/edit/archive round-trips all fields.
- [ ] Deleting a project in use fails and names the workshops; an unused project deletes, including its storage files.
