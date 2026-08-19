# inside-landing

Landing for **Sachkov Inside** — Kirill Sachkov's authorial engineering membership.
Repository: https://github.com/sachkov-inside/inside-landing

All agent-facing documents in this repo (skills, READMEs, templates) are written in
English. User-submitted content (verbatim comments, future landing copy) keeps its
original language.

## Structure

- `product/` — repository-owned product contract for Landing work.
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

Every PR starts from a Landing issue. Repository-level tracker, triage and domain conventions live
in `docs/agents/`; the cross-repository issue/branch/PR lifecycle is named Developer Pipeline in
the Workspace, but this repository remains runnable without a Workspace checkout.

Create branches from current `main` as `<type>/<issue>-<slug>`. Keep one primary issue, one branch
and one PR per meaningful change. PRs use squash merge and require explicit owner GO; readiness for
review is never merge permission.

## Commands

Run from the repository root:

```bash
npm ci --prefix app
npm run dev --prefix app
npm run build --prefix app
npm run verify --prefix app
```

`npm run verify --prefix app` is the full CI-equivalent check; there is no separate test script.
Deploy has no local command: Timeweb deploys `main` through its GitHub integration. Use the
production smoke commands in `README.md` after deployment.

## UI Definition of Done

A UI change is ready for owner review when:

- `npm run verify --prefix app` passes;
- the changed flow is checked around 393px first, then desktop and intermediate widths;
- keyboard navigation, focus visibility, readable contrast and reduced-motion behavior remain
  usable where relevant;
- browser QA finds no broken layout, interaction failure or unexpected console error;
- the PR includes representative mobile and desktop evidence and lists anything not tested.

For tracker operations and readiness roles read `docs/agents/issue-tracker.md` and
`docs/agents/triage-labels.md`. For product vocabulary and ADR boundaries read
`docs/agents/domain.md`.

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

The shared Inside product harness provides these skills in `.agents/skills/` and
`.claude/skills/` for design and implementation work:

- `frontend-design` (anthropics/skills) — art direction, typography, composition,
  avoiding templated AI-looking design.
- `impeccable` (pbakaus/impeccable) — UI polish and critique: typography, color,
  layout, responsive, motion, anti-slop checks.
- `vercel-react-best-practices` (vercel-labs/agent-skills) — React/Next.js performance:
  waterfalls, bundle size, RSC, rendering, data fetching.
- `web-design-guidelines` (vercel-labs/agent-skills) — 100+ checks for
  accessibility, forms, focus, typography, images, UX, performance.
- `modern-web-guidance` (GoogleChrome/modern-web-guidance) — current HTML, CSS,
  Web APIs, browser compatibility, performance (from the Chrome team).
- `playwright-cli` (microsoft/playwright-cli) — browser QA: screenshots,
  responsive checks, interactions, console and DOM inspection.
- `karpathy-guidelines` — surgical code changes, explicit assumptions, and verifiable success
  criteria without unnecessary complexity.

<!-- inside-product-harness:start -->
## Inside product harness

This repository uses the versioned Sachkov Inside product harness.

- Shared skills installed in `.agents/skills/` are managed distribution artifacts. Change their
  canonical source in the Workspace harness, then run the explicit update command.
- Repository-specific instructions and skills remain owned by this repository. Give local skills
  unique names; do not shadow a managed skill.
- Invoke skills only when their descriptions match the task. Installing the suite does not make
  every workflow mandatory for every request.
- Keep this repository autonomous: build, test, run, and deploy must not depend on the Workspace
  repository or on machine-local paths.
- Treat user-level skills, MCP, plugins and hooks as unavailable. Declare every recurring
  capability in this repository's harness and keep credentials in native auth or environment.
- Do not edit `.inside-harness/` manually. Use the Workspace lifecycle commands and review the Git
  diff they produce.
<!-- inside-product-harness:end -->
