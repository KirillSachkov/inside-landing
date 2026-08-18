# inside-landing

Landing for **Sachkov Inside** — Kirill Sachkov's authorial engineering membership.
Repository: https://github.com/KirillSachkov/inside-landing

All agent-facing documents in this repo (skills, READMEs, templates) are written in
English. User-submitted content (verbatim comments, future landing copy) keeps its
original language.

## Structure

- `product/` — product description for landing work (digest of the master brief;
  source of truth: `/Users/dev/Work/sachkov-inside/product/README.md`).
- `visual/` — working document of the visual direction: mood, palette, typography,
  graphics, composition, motion. Filled iteratively; decisions land here only when
  the user confirms them.
- `references/` — visual reference collection: cards in `items/`, images in
  `assets/`, index and tags in `references/README.md`.
- `playbook/` — the landing process this project follows (phase pipeline, owner
  checkpoints, QA gates). `playbook/README.md` is the working version; the
  original Russian handoff is kept verbatim beside it.

## Process

Work follows the pipeline in `playbook/README.md`: product contract → copy →
6–10 analysed references → 3–5 independent visual directions → owner choice →
`DESIGN.md` → implementation → browser QA → bounded review. Each layer builds
on the confirmed previous one; product and visual decisions need owner
confirmation before the next layer starts.

## Landing development rules

- **Mobile-first, always.** Every layout, component, prototype, and QA pass for
  this landing is designed and verified for mobile viewports first (primary
  check: ~393px wide), then scaled up to desktop. Never ship or present a
  block that was only checked on desktop. This applies to prototypes in
  `visual/prototypes/`, the final implementation, and every browser QA pass.
- **Responsive on every resolution.** The landing must work correctly at every
  viewport width, not just at standard breakpoints. Check the in-between ranges
  too (e.g. 768–1200px): no broken wraps, no overlapping elements, no orphaned
  words, no unexpected line-count changes. Fluid sizing (clamp, container
  queries) over breakpoint jumps where possible.
- **No em dashes (—) in landing copy.** Long dashes read as AI slop. Use the
  en dash (–) where a dash is needed, or rephrase. This applies to headlines,
  body copy, buttons, and any visible text on the page.

## Working with references

The user shares a link, screenshots, an md file, or a description — invoke the
`add-reference` skill (`.agents/skills/add-reference/SKILL.md`). It writes a card
from the template in `references/README.md`, does the visual analysis (palette,
typography, structure, signature techniques), saves assets to `references/assets/`,
and updates the index and taxonomy.

## Frontend and design skills

Installed in `.agents/skills/` for the design/implementation phases:

- `frontend-design` (anthropics/skills) — art direction, typography, composition,
  avoiding templated AI-looking design.
- `impeccable` (pbakaus/impeccable) — UI polish and critique: typography, color,
  layout, responsive, motion, anti-slop checks.
- `react-best-practices` (vercel-labs/agent-skills, skill name
  `vercel-react-best-practices`) — React/Next.js performance: waterfalls, bundle
  size, RSC, rendering, data fetching.
- `web-design-guidelines` (vercel-labs/agent-skills) — 100+ checks for
  accessibility, forms, focus, typography, images, UX, performance.
- `modern-web-guidance` (GoogleChrome/modern-web-guidance) — current HTML, CSS,
  Web APIs, browser compatibility, performance (from the Chrome team).
- `playwright-cli` (microsoft/playwright-cli) — browser QA: screenshots,
  responsive checks, interactions, console and DOM inspection.
