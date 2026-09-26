# 16 — Project step viewer, status & unlocking

**Depends on:** 13, 15

**Scope**

- Project page: header with learning goal, duration, materials and attachments; then one step per screen with Vorige/Volgende, a step progress bar and keyboard arrows.
- First open by a joined participant → progress `in progress` (RPC, idempotent).
- The last step shows "Klaar!" → progress `finished` → back to the workshop page with newly unlocked projects highlighted.
- A locked project (not all prerequisites finished) can't be opened; enforced in RPC/RLS, and the UI shows what's needed.
- After the workshop ends, the viewer still works but status changes are rejected.
- Nice-to-have: remember the last viewed step per project on the device.

**Acceptance**

- [ ] With prerequisites A and B for C, C unlocks only after that participant finishes both.
- [ ] Status changes after the end time are rejected by the server.
