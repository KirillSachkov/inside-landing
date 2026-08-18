# Landing playbook

The process this project follows to build the landing. Source research:
[`handoff-new-landing-playbook-2026-08-15.md`](handoff-new-landing-playbook-2026-08-15.md)
(verbatim handoff, in Russian — kept as the original evidence; this README is the
working version, adapted to this repo).

Core rule: one pass must not invent product, proof, structure, copy, visual
language, and frontend at once. Each layer builds on the confirmed previous one.

## Pipeline

```text
facts & constraints
→ product contract        (product/README.md)
→ copy & conversion narrative  (copy/README.md — not created yet)
→ 6–10 analysed references     (references/)
→ 3–5 independent visual directions
→ owner chooses one
→ DESIGN.md (visual authority)
→ single production writer
→ browser evidence
→ bounded review
→ production metrics
```

Current stage: **discovery — product contract fixed, collecting references**.

## Owner checkpoints

1. **Checkpoint 1 — product contract + conversion event.** Largely covered by
   `product/README.md`; the single conversion event and final promise are still
   open (payment provider and price are undecided in the master brief).
2. **Checkpoint 2 — visual direction.** Owner picks one of 3–5 independently
   produced directions, or rejects all. No production code before this.

## Phase notes for this repo

- **Facts:** `product/README.md` is the digest; the master brief at
  `/Users/dev/Work/sachkov-inside/product/README.md` is the source of truth.
  Claims, prices, testimonials, screenshots, and support terms are never
  invented — unknowns are marked `TBD`/`hypothesis`.
- **References:** 6–10 analysed references across three classes — how they sell
  (structure, offer, proof), how they look, how they phrase. Each reference gets
  a function (`structure`, `typography`, `product presentation`, `motion`,
  `proof`, `mobile behavior`). Live sites rot: the local pack in `references/`
  is the evidence. Cloning one site wholesale is out of scope.
- **Visual directions:** 3–5 independent variants on the same product contract
  and copy, compared side by side in identical desktop/mobile frames; scoped to
  nav, desktop hero, mobile first screen, CTAs, first proof block, one signature
  section, reduced-motion state. Decisions then land in `visual/README.md` and
  finally in `DESIGN.md` as the visual authority.
- **Stack:** standalone static-first site (working default from the playbook:
  Astro + TypeScript, semantic HTML/CSS, JS only where real interactivity lives).
  No animation/WebGL libraries without proven product need.
- **Implementation:** one production writer; other agents stay read-only or work
  in separate prototype branches. Build top-down along the conversion path:
  static semantic baseline → responsive → accessibility → justified motion.
- **Browser QA:** screenshots plus DOM/a11y snapshot, console/network, real
  interactions. Viewports: 393x852, 768x1024, 1440x1000, 320px stress test.
- **Review:** one merged read-only critique → one fix batch → one confirmation
  pass. No endless "make it prettier" loops.
- **Quality gates before owner review:** confirmed claims and real proof,
  working conversion event end-to-end, content visible without JS and before
  animation triggers, reduced-motion shows a complete composition, no dead-end
  CTAs, keyboard/contrast checked, green build, browser evidence attached,
  production p75 targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
- **Publish:** merge/release/publish stays a separate owner decision.

## Skill availability note

The handoff recommends a skill route (`start`, `grill-with-docs`,
`frontend-design`, `impeccable`, `web-design-guidelines`, `playwright`, …).
Of those, only `grill-with-docs` exists in this repo's `.agents/skills/`.
Where a named skill is missing, the agent performs that step directly and says
so, instead of silently skipping it.
