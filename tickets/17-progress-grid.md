# 17 — Manager progress grid & overrides

**Depends on:** 16

**Scope**

- `/beheer/workshops/:id/voortgang`: grid of participants (rows) × projects in workshop order (columns); each cell shows a status icon; counts per column; refresh button (no realtime).
- Cell action: set status (niet gestart / bezig / klaar).
- Row actions: reset PIN (sets `pin_hash = NULL`), delete participant (with confirmation).

**Acceptance**

- [ ] Overriding to "klaar" unlocks dependent projects for that participant.
- [ ] After a PIN reset, the participant is asked to choose a new PIN on their next login.
