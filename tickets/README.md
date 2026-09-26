# Tickets

Spec: [../docs/SPEC.md](../docs/SPEC.md). Tickets are ordered; "Depends on" lists hard prerequisites.
Move to GitHub Issues once the repo exists (T01).

| #   | Ticket                                                                      | Depends on | Status      |
| --- | --------------------------------------------------------------------------- | ---------- | ----------- |
| 01  | [Repo, Angular app & Vercel deploy](01-repo-angular-vercel.md)              | –          | in progress |
| 02  | [Supabase project, local dev & keep-alive](02-supabase-setup.md)            | 01         | todo        |
| 03  | [Database schema & RLS baseline](03-schema-rls.md)                          | 02         | todo        |
| 04  | [Manager sign-in & allowlist](04-manager-auth.md)                           | 03         | todo        |
| 05  | [Manage managers UI](05-manage-managers.md)                                 | 04         | todo        |
| 06  | [Project CRUD, archive & delete guard](06-project-crud.md)                  | 04         | todo        |
| 07  | [Markdown editor, image & attachment upload](07-markdown-editor-uploads.md) | 06, 08     | todo        |
| 08  | [Content renderer: steps, code blocks, MakeCode](08-content-renderer.md)    | 01         | todo        |
| 09  | [Workshop CRUD, code generation, publish](09-workshop-crud.md)              | 04         | todo        |
| 10  | [Workshop composition: order & prerequisites](10-workshop-composition.md)   | 06, 09     | todo        |
| 11  | [Duplicate workshop](11-duplicate-workshop.md)                              | 10         | todo        |
| 12  | [Public homepage & code box](12-homepage.md)                                | 09, 14     | todo        |
| 13  | [Workshop page & time-window rules](13-workshop-page.md)                    | 08, 10     | todo        |
| 14  | [Server-side private access](14-private-access.md)                          | 03         | todo        |
| 15  | [Participant join & resume (nickname + PIN)](15-participant-join.md)        | 14         | todo        |
| 16  | [Project step viewer, status & unlocking](16-project-viewer-progress.md)    | 13, 15     | todo        |
| 17  | [Manager progress grid & overrides](17-progress-grid.md)                    | 16         | todo        |
| 18  | [Participant data retention](18-retention.md)                               | 03         | todo        |
