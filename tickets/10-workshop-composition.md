# 10 — Workshop composition: order & prerequisites

**Depends on:** 06, 09

**Scope**

- In workshop edit: add projects via a picker (non-archived, searchable), remove them, reorder by drag & drop.
- Per project in this workshop: select prerequisites (multi-select of other projects in the same workshop; AND semantics).
- Prevent cycles (validated in the DB/RPC; the error names the cycle).
- Removing a project from the workshop also removes prerequisite rows that reference it (with a warning).
- Saving is atomic (RPC).

**Acceptance**

- [ ] Order and prerequisites persist and can differ per workshop for a shared project.
- [ ] Creating a cycle is rejected.
