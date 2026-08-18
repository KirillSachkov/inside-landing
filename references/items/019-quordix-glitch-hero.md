# 019. Quordix — glitch hero with interactive dot grid

- **Source:** https://21st.dev/@quordix/components/quordix-hero — community
  component on 21st.dev by @quordix; full component code pasted by the user
- **Added:** 2026-08-17
- **Tags:** #element #screenshot #hero #typography #color #light-theme #motion #cta #engineering #bold
- **Function:** `motion` / `typography` / `product presentation` — primarily a
  motion-and-texture reference: the glitch effect and the interactive dot grid
  the owner explicitly wants to combine with direction A (spec-sheet).
- **Assets:** ../assets/019-quordix-glitch-hero-screenshot.png,
  ../assets/019-quordix-glitch-hero-component.tsx (full working React source —
  the glitch keyframes and dot-grid canvas logic are reusable as-is)

## What this is

A self-contained React hero component for "Quordix" (custom software
development agency), published on 21st.dev. Fixed light background `#F8FAFC`,
pill navbar with backdrop blur, huge two-line display headline where the second
word runs a periodic RGB-split glitch, and a full-viewport interactive dot-grid
canvas behind everything. All styles inlined; the component forces its own
light color scheme regardless of the host page.

## Structure

Single hero viewport: fixed pill nav (logo SVG, links, dark "Let's Talk" CTA;
hamburger + full-screen overlay on mobile) → centered hero block (letterspaced
orange tagline, two-line 900-weight headline, subtitle, orange pill CTA) →
fixed background layer (dot grid canvas, two blurred slate glows, giant faint
`< >` watermark).

## Visual analysis

- **Palette:** forced light — `#F8FAFC` base, ink `#0F172A`, slate secondary
  `#475569`/`#64748B`, single orange accent family `#EA580C`/`#F97316`
  (tagline, glitch state, CTA, active dots `#FF5500`). Glitch flashes use
  cyan/magenta/lime/red RGB-split shadows for a few frames only.
- **Typography:** Space Grotesk (400–900, Google Fonts, OFL). Headline
  `clamp(3.5rem, 11vw, 10rem)`, weight 900, uppercase, `line-height: 0.85`,
  tracking −0.02em. Tagline 900 with `letter-spacing: 0.28em`. Extreme
  scale contrast against the 1rem body.
- **Composition & grid:** centered single column, max-width 64rem, generous
  air; the visual density comes from the background texture, not from layout.
- **Graphics:** no images at all — inline logo SVG, blurred gradient blobs,
  and the giant `< >` watermark at 2.5% opacity (engineering signal without
  a single screenshot).
- **Motion (the point of this reference):**
  1. **Glitch** — the word "BUSINESS" toggles ink→orange on a 7s cycle; at the
     toggle moments two pseudo-element copies run RGB-split clip-path slice
     bursts (translate/skew/clip polygons) for ~0.2s. Pure CSS keyframes,
     `data-text` duplication trick. Reads as "alive system", not decoration.
  2. **Interactive dot grid** — canvas, 30px spacing, base dots
     `rgba(148,163,184,0.4)` r=1.5; within 100px of the cursor dots scale up
     and turn `#FF5500` with a soft glow ("flashlight" effect). On mobile the
     cursor is replaced by a horizontal scan line sweeping every ~6.5s.
     Plus 12–40 slowly drifting orange particles.
  3. Tagline opacity pulse (2s), nav-link/CTA scale hovers, CTA arrow nudge.

## Signature techniques

- Glitch as a *state change* (ink↔orange), not constant noise — 0.2s bursts
  twice per 7s cycle, so it stays legible and calm.
- Cursor-as-flashlight dot grid: zero images, cheap canvas loop, instant
  "engineering texture" that invites play.
- Forced-light shell (`color-scheme: light`, hardcoded bg) — component immune
  to host dark mode.
- `< >` glyph watermark at 2.5% opacity.

## Takeaways for Inside

- **The one principle to take:** motion as a *system signal* — one glitching
  word + a reactive grid say "engineering, alive" louder than any 3D render,
  at near-zero asset cost. Fits "technological but not hype-driven" if the
  cycle stays slow and sparse. Hypothesis: combine with direction A — paper
  base, spec labels, artifact cards, but rounded/soft, with the dot grid and
  a single glitch word in the H1 (e.g. «ВНУТРИ»).
- **What must not be copied:** agency copy and "GROW YOUR BUSINESS" billboard
  tone; RGB neon glitch palette (cyan/magenta) — retune glitch shadows to
  ink/orange; the centered symmetric layout (A's structure is left-aligned and
  denser); the component is a hero only — no content model behind it.
- **License constraints:** community component on 21st.dev — verify the
  license before reusing code verbatim (the technique, not the code, is what
  we take). Space Grotesk is OFL — safe. No images/fonts with restrictions
  otherwise.

## User comment

«мне нравится эффект глитча который я тебе скинул + там стиль похожий. я бы
хотел попробовать в таком стиле сделать лендинг. это можно вместе с A стилем
сочетать. также мне не нравится в a-spec.html что все рамки острые и стиль
строгий. мне нравится более мягкий закругленный стиль с объёмом, 3д,
анимациями и тд»
