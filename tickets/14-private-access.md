# 14 — Server-side private access

**Depends on:** 03

**Scope**

- Visitors get a Supabase **anonymous session** when first needed.
- RPC `open_workshop_by_code(code)` (SECURITY DEFINER): case-insensitive lookup among published private workshops; on a match inserts `workshop_access(auth.uid(), workshop_id)` and returns the workshop id; otherwise returns null. Attempts are rate-limited per session.
- RLS: a private workshop and its projects/attachments are readable only by managers or when `workshop_access` exists for `auth.uid()`; content is additionally only readable after `starts_at`.
- Storage policies mirror these rules (signed URLs only for authorised sessions).
- A direct link to a private workshop without access shows the code prompt.

**Acceptance**

- [ ] SQL tests: an anon session without access gets zero rows of private content and cannot sign storage URLs; after a valid code it can.
- [ ] Brute-force attempts are throttled.
