# 15 — Participant join & resume (nickname + PIN)

**Depends on:** 14

**Scope**

- Join dialog: nickname chosen by the participant (2–20 chars, may be a team name) + a 4-digit PIN chosen by the participant.
- RPC `join_or_resume(workshop_id, nickname, pin)`:
  - new nickname → create the participant with a bcrypt PIN hash and link `participant_sessions(auth.uid())`;
  - existing nickname → "Ben jij dit? Voer je PIN in." flow: verify the PIN, link the session on success;
  - existing nickname with `pin_hash IS NULL` (reset by a manager) → the participant chooses a new PIN;
  - 5 failed attempts → `locked_until = now() + 5 min`.
- The PIN is fixed once chosen; participants cannot change it themselves.
- Requires workshop access (private). New participants can't be created after the end; resuming after the end is allowed (read-only).
- "Wissel van deelnemer" action to leave on this device.

**Acceptance**

- [ ] The same nickname + PIN resumes progress on another device.
- [ ] 5 wrong PINs lock the nickname for 5 min; the PIN hash never leaves the DB.
- [ ] After a manager reset, the participant can choose a new PIN.
