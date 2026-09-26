# 04 — Manager sign-in & allowlist

**Depends on:** 03

**Scope**

- Supabase OAuth providers: Google and Microsoft (Azure, `common` tenant for personal + work/school accounts).
- `/beheer/login` page with both buttons; sign-out.
- Route guard for `/beheer/**`: signed in **and** `is_manager()`; otherwise a "Geen toegang" page (with sign-out).
- Manager sign-in replaces an anonymous participant session on the same device; document this.

**Acceptance**

- [ ] The seeded manager can sign in with Google and with Microsoft (matching email) and reach `/beheer`.
- [ ] A non-allowlisted account sees "Geen toegang" and cannot read manager-only data (RLS, not just UI).
