# 05 — Manage managers UI

**Depends on:** 04

**Scope**

- `/beheer/beheerders`: list allowlisted emails, add an email, remove an email.
- Removing the last manager is impossible (enforced in the DB).
- Emails stored lower-cased; comparison case-insensitive.

**Acceptance**

- [ ] An added email can sign in as manager immediately; a removed email loses access on its next request.
- [ ] Removing the last manager is rejected with a clear message.
