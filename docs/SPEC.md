# micro:bit Workshops — Specification

Status: agreed (grilling session, 2026-09-26). Source brief: [../brief.md](../brief.md).
Implementation work is tracked in [../tickets/](../tickets/README.md).

## 1. Purpose

A website that hosts a collection of **workshops** built from micro:bit **projects**. Participants (kids and adults) work through the projects of a workshop in order; some projects unlock only after others are finished. **Managers** create projects and workshops.

## 2. Glossary

| Term                 | Meaning                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **Workshop**         | A dated, ordered collection of projects. Free or private.                                           |
| **Project**          | A task with instructions (Markdown steps), code, images and attachments. Reusable across workshops. |
| **Free workshop**    | Open to anyone; browsable without joining.                                                          |
| **Private workshop** | Requires the workshop **code** to open.                                                             |
| **Code**             | Shared secret for one private workshop, e.g. `K7XM3P`. Unique across workshops.                     |
| **Participant**      | A person _or team_ inside one workshop, identified by **nickname + PIN**. Not a global account.     |
| **Prerequisite**     | Within a workshop: project B is locked until project A is finished (by that participant).           |
| **Status**           | Per participant per project: `not started`, `in progress`, `finished`.                              |
| **Manager**          | Signed-in user on the allowlist; can edit everything.                                               |
| **Step**             | One screen of a project's instructions; steps are separated by `---` in the Markdown.               |

## 3. Stack & hosting

- **Frontend:** Angular (latest stable at scaffold time; standalone components, signals), built as a **static SPA** (no SSR). Styling: **Angular Material**, custom playful theme, large touch targets.
- **Hosting:** Vercel **Hobby** (personal/volunteer use), connected to a **GitHub** repo; preview deploy per PR.
- **Backend:** **Supabase** (free tier): Postgres, Auth, Storage, Row Level Security, database functions (RPC).
  - One Supabase project (production) + local Supabase CLI for development. No staging.
  - Free projects pause after 7 days of inactivity → a **scheduled GitHub Actions workflow** pings the API (keeps the app free of serverless functions).
- **Language:** Dutch UI and content only (this phase).
- **Time zone:** all dates entered and displayed in **Europe/Amsterdam**; stored as `timestamptz`.
- **Angular AI tooling (project level):** skills `angular-developer` and `angular-new-app` in `.claude/skills/`, the Angular CLI MCP server in `.mcp.json`, and the angular.dev best practices in `docs/angular-best-practices.md`, referenced from `CLAUDE.md`. Same setup as the sibling project `scrolly-telling-op-reis`.

## 4. Roles & access

### Managers

- Sign in with **Google or Microsoft** (Supabase OAuth; Microsoft allows personal and work/school accounts).
- Authorisation = **email allowlist** (`managers` table). Signed-in users not on the list see "Geen toegang".
- Seed: the owner's account (hugo.vanderzalm@merkator.com) is the first manager; managers add/remove others in the app. A manager cannot remove themselves if they are the last one.
- No ownership: every manager can edit every workshop and project.

### Participants

- No accounts. Per workshop, a participant chooses a **nickname** (may be a team name) and a **4-digit PIN**.
- The PIN is chosen by the participant and **fixed** once set; only a manager can reset it (after which the participant chooses a new one on next login).
- Nicknames are unique per workshop (case-insensitive). Entering an existing nickname = **resume**: "Ben jij dit? Voer je PIN in."
- 5 wrong PIN attempts → nickname locked for 5 minutes.
- The device remembers the session (Supabase anonymous sign-in linked to the participant).

### Visitors (not joined)

- Can view the homepage and **free** workshops including project content (read-only, no progress).
- Private workshops require the code first.

## 5. Workshops

**Fields:** title, description (Markdown), cover image, start date/time, end date/time, free/private, code (private only), draft/published.

- **Draft** workshops are visible to managers only.
- **Time window** (same rules for free and private):
  - Before start: listed/reachable, shows "Start op …", content locked.
  - Between start and end: active.
  - After end: read-only — content viewable, progress can no longer change.
- **Code:** generated as 6 characters from an unambiguous alphabet (no `0/O`, `1/I/L`), editable by managers, case-insensitive, unique across workshops.
- **Projects** are attached with a per-workshop **order**.
- **Prerequisites** are defined **per workshop**, AND-only (a project can require several others; all must be finished). No cycles.
- **Duplicate workshop:** copies description, cover, projects, order, prerequisites; asks for new dates and generates a new code; does not copy participants; the copy starts as draft.

## 6. Projects

**Fields:** title, short summary, cover image, learning goal (the brief's "target"), estimated duration (minutes), required materials (free text, e.g. "micro:bit v2, speaker, krokodillenklemmen"), content (Markdown), attachments, archived flag.

- **Content** is Markdown split into **steps** by a line containing only `---` (outside code blocks).
- **Code** in content, mix freely within one project:
  - Python — fenced block ` ```python `
  - TypeScript / JavaScript — fenced ` ```typescript ` / ` ```javascript `
  - MakeCode — fenced ` ```makecode ` containing a MakeCode share link, rendered as an embedded MakeCode viewer
  - Text code blocks get syntax highlighting and a "Kopieer" (copy) button.
- **Images** are uploaded by paste/drag in the editor; **attachments** (worksheets etc.) are listed on the project page for download.
- A project can be used in multiple workshops. **Edits are live everywhere** (no versioning).
- **Delete** is blocked while the project is used in any workshop (the UI lists which). **Archive** hides it from the project picker without breaking existing workshops.

## 7. Participant experience

1. Homepage lists **published free** workshops, plus a **"Heb je een code?"** box that opens the matching private workshop.
2. Workshop page: description and ordered project list, each with status and lock state.
3. Join (needed only to track progress): enter code (private), then nickname + PIN (new or resume).
4. Project page: **one step per screen** with Vorige/Volgende and a progress bar. Materials, learning goal and attachments are visible up front.
5. Opening a project the first time sets status **in progress**.
6. The last step shows **"Klaar!"** → status **finished** (self-reported) → dependent projects unlock immediately.
7. Locked projects show which projects must be finished first.

## 8. Manager experience

- Manage **managers** (allowlist).
- **Projects:** list (incl. archived filter), create/edit/archive/delete. Editor = Markdown textarea with **live preview**, image upload by paste/drag (inserts the Markdown link), attachment upload.
- **Workshops:** list, create/edit, publish/unpublish, attach projects, reorder, set prerequisites, regenerate/edit code, duplicate.
- **Progress grid** per workshop: participants × projects with status; refreshes on reload (no realtime this phase).
  - Override any status, reset a participant's PIN, delete a participant.

## 9. Security & privacy

- Private access is **enforced server-side**: without a verified code (or manager role), the database returns no project content of that private workshop. Implemented with RLS + a `SECURITY DEFINER` RPC that verifies the code and records access for the current (anonymous) session.
- Storage buckets are private; files are served via signed URLs subject to the same access rules.
- PINs are stored hashed (pgcrypto/bcrypt), never returned to clients.
- **Retention:** participants and their progress are deleted automatically **30 days after the workshop's end** (scheduled job); managers can delete earlier.
- No personal data beyond the nickname is collected from participants.

## 10. Data model (outline)

```
managers(email PK, added_by, created_at)
projects(id, title, summary, cover_path, learning_goal, duration_min, materials,
         content_md, archived, created_at, updated_at)
project_attachments(id, project_id → projects, storage_path, filename, size, created_at)
workshops(id, title, description_md, cover_path, starts_at, ends_at,
          is_private, code UNIQUE (case-insensitive, nullable), published, created_at, updated_at)
workshop_projects(workshop_id, project_id, position)            PK(workshop_id, project_id)
workshop_prerequisites(workshop_id, project_id, requires_project_id)
participants(id, workshop_id, nickname, pin_hash NULLABLE, failed_attempts, locked_until, created_at)
                                                                UNIQUE(workshop_id, lower(nickname))
participant_sessions(auth_uid, participant_id)
workshop_access(auth_uid, workshop_id, granted_at)
progress(participant_id, project_id, status, started_at, finished_at)   -- no row = not started
```

`pin_hash` is `NULL` after a manager reset → the participant sets a new PIN on next login.

## 11. Out of scope (this phase)

Audience level, difficulty, location, other languages, content versioning, realtime dashboard, staging environment, participant accounts, automated checks/quizzes, manager approval of "finished", SSR/SEO.
