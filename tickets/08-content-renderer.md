# 08 — Content renderer: steps, code blocks, MakeCode

**Depends on:** 01

**Scope**

- Split project Markdown into steps on lines that are exactly `---`, ignoring `---` inside fenced code blocks.
- Render Markdown safely (sanitised HTML; no scripts).
- Fenced `python`, `typescript`, `javascript` blocks → syntax highlighting + "Kopieer" button. Unknown languages render as plain code.
- Fenced `makecode` block containing a MakeCode share URL (`https://makecode.microbit.org/_xxxx` or `#pub:` form) → embedded MakeCode iframe (sandboxed, responsive); an invalid URL shows a visible warning.
- All code types can be mixed within one project and one step.
- `asset://` image URLs resolved to signed Storage URLs (batched, cached per page).

**Acceptance**

- [ ] Unit tests for step splitting (incl. `---` inside code) and MakeCode URL parsing.
- [ ] A step containing Python, TypeScript and a MakeCode embed renders all three correctly.
