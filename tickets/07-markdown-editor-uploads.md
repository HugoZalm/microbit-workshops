# 07 — Markdown editor, image & attachment upload

**Depends on:** 06, 08 (preview uses the renderer)

**Scope**

- Editor component: textarea + live preview side by side (stacked on narrow screens); preview uses the T08 renderer, including step separation.
- Paste or drag an image → upload to the `content` bucket → insert `![](asset://<path>)` at the cursor; show upload progress and errors.
- Cover image upload (shared by projects and workshops).
- Attachments: upload, list, rename display name, delete; stored in the `attachments` bucket.
- Size limits (images ≤ 5 MB, attachments ≤ 25 MB) with friendly errors.
- Help panel with the syntax: `---` step separator; fenced `python`, `typescript`, `javascript` and `makecode` blocks.

**Acceptance**

- [ ] Pasting a screenshot inserts a working image in the preview.
- [ ] Attachments appear on the project page and download for authorised users only.
