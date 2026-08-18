# 014. Tokens Studio — Design Systems, Fully Automated

- **Source:** https://www.lapa.ninja/post/tokens/ · https://tokens.studio/?ref=lapaninja
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #hero #typography #color #light-theme #3d #cta #code-graphics #bold #playful
- **Function:** structure / typography / product presentation / proof
- **Assets:** ../assets/014-tokens-studio-playground-screenshot.png

## What this is

Hero section of the Tokens Studio landing (design-system / token-automation
platform). It leads with a giant black extra-bold claim, a pair of pill CTAs,
and then — instead of a device frame or abstract illustration — puts the real
product dashboard in the center of a playground of floating, chunky 3D UI
cards. Each floating card is a miniature of an actual product feature (color
steps, font style, border radius, densities, accessibility contrast, token
JSON). The next section header, `WATCH THE REAL THING IN ACTION`, doubles down
on the same promise: everything shown is the actual tool, not marketing art.

## Structure

- Top nav: logo + wordmark left; `PRODUCTS / RESOURCES / COMPANY / PRICING`
  center; `Login` + cyan `Start Free Trial` button right. White bar on
  off-white page, no border.
- Hero block, centered column: oversized two-line headline → one short
  paragraph of body copy → two large pill CTAs side by side
  (`Explore Studio Platform` cyan with dark icon tile; `Other Tools & Plugins`
  light gray).
- Product stage below: a real dashboard screenshot (Distribution stacked bars
  for Brand A–D, donut `104 Total tokens` with legend Static 84 / Dynamic 16 /
  Unknown 4, Themes list — Color Mode 3 modes, Brand 3 modes, Appearance 7
  modes, Other 3 modes, and a row of purple `Tiny Tokens Big Impact` cards
  inside it) anchored in the center.
- ~12 floating 3D cards orbit the dashboard in a loose ellipse, overlapping its
  edges: pink bezier-curve card, purple `Accessibility / Check Contrast` chip,
  lime `25 Color Steps` stepper, orange `Brand A` pill toggle, cyan square,
  yellow `Densities` slider (Compact / Default / Open), lime `Font Style` card
  (Sans / Serif / Mono / Slab), cyan toggle, dark-purple JSON code card,
  orange `Border Radius` card (Square / Round / Pills), yellow rounded cube,
  pink `Type Scale 1.067 Minor Second` card, small purple cube.
- Next section header centered below: `WATCH / THE REAL THING / IN ACTION`,
  same black display face, ~60% of hero size.

## Visual analysis

- **Palette:** off-white background (~#FAFAF7); near-black ink for type
  (~#1A1A1A). Accents are a candy set, each floating card in one saturated
  hue: cyan (~#5FE3E8, also the primary CTA), violet/purple (~#6C5CE7,
  brand color, dominates the dashboard), pink (~#F273B8), lime (~#A6E635),
  orange (~#F97316), yellow (#FACC15). The dark JSON card is deep indigo
  (~#1E1B4B) with pastel syntax colors. High-key, light theme overall.
- **Typography:** the headline is a heavy geometric grotesque, extra-bold /
  black weight, uppercase, tight tracking and tight leading, set huge
  (~110–130 px at desktop width, two lines, centered). Nav and dashboard labels
  use the same family in small bold uppercase. Body copy is a neutral
  mid-weight sans, ~17–18 px, centered, max ~70 ch. Inside the dashboard, the
  `Tiny Tokens Big Impact` cards use a contrasting rounded serif display face —
  a deliberate second voice.
- **Composition & grid:** strictly symmetrical center axis for nav, headline,
  copy, and CTAs; the playground below breaks that symmetry on purpose — the
  dashboard sits dead-center while floating cards scatter asymmetrically with
  varied rotation (~±5–15°), scale, and overlap. Vertical rhythm is generous:
  large whitespace between headline, CTAs, and stage. Dashboard occupies
  roughly the middle 55–60% of viewport width.
- **Graphics:** flat 2.5D "clay" UI cards — thick rounded corners (16–24 px),
  soft drop shadows, slight extrusion/tilt giving them toy-like depth; no
  photorealism, no gradients beyond subtle shading. The dashboard itself is a
  clean flat product UI (thin gray dividers, purple charts). One genuine code
  artifact: the JSON token card with syntax highlighting.
- **Motion:** static screenshot — nothing animated is visible. Reasonably
  inferable: floating cards are staged for parallax/drift on scroll or hover
  (varied depth, shadows, and overlap suggest layered motion), and the
  `WATCH THE REAL THING IN ACTION` header implies a video/demo section follows.
  Not verifiable from the image.

## Signature techniques

- **Product-as-centerpiece playground:** the real dashboard is the anchor, and
  every floating card is a literal miniature of a feature — the orbit
  *explains the product* instead of decorating it.
- **Candy-coded feature chips:** each capability gets its own saturated color,
  making the feature set scannable as a color-coded constellation.
- **Type as the loudest element:** the uppercase black headline carries the
  entire brand tone; color and 3D stay below the fold of the first screen.
- **Dual CTA hierarchy by fill only:** identical pill geometry, primary in
  cyan with an icon tile, secondary in light gray — no outlines.
- **Promise-proof adjacency:** `WATCH THE REAL THING IN ACTION` placed
  immediately under the product render turns the section header into a proof
  claim.

## Takeaways for Inside

- **The one principle to take:** build the hero around real artifacts, not
  abstractions. For Inside this maps directly: a real Telegram thread /
  ADR excerpt / architecture diagram as the centered "product", with small
  floating cards each showing a genuine artifact type (an ADR card, a diff
  card, a diagram card, a build-series episode card). It matches our audience:
  developers trust screenshots of actual work over illustrations, and the
  "everything here is real" stance fits the engineering + honest character.
  Hypothesis, not a decision.
- **What must not be copied:** the candy-pastel palette and toy-like clay 3D
  cards are Tokens Studio's brand voice — playful SaaS, too sweet and too
  decorative for Inside's restrained engineering tone. Also the uppercase
  shouting headline and SaaS CTA language (`Start Free Trial`) are
  off-character; Inside's typography should be assertive but not
  billboard-loud.
- **License constraints:** screenshot used for analysis only — layout, palette,
  and 3D card designs are Tokens Studio's brand assets; do not reuse their
  artwork, logo, or copy verbatim. Display typeface unidentified from the
  screenshot; any similar font choice needs its own license check.

## User comment

«вот ещё» (комментарий пользователя ко второй пачке референсов)
