# 018. Discord — blurple night-sky hero and glow-card section

- **Source:** https://discord.com/ (screenshots from user)
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #hero #color #dark-theme #illustration #3d #cta #playful #bold
- **Function:** structure / product presentation
- **Assets:** ../assets/018-discord-blurple-hero.png, ../assets/018-discord-blurple-section.png

## What this is

Discord's marketing homepage: a dark-theme landing built on the brand's "blurple"
identity. The hero pairs a giant condensed headline and dual CTAs with a staged
scene of product UI (desktop monitor + phone) surrounded by 3D mascot characters.
The second screenshot is a feature section: one oversized rounded card with a
magenta glow, a mobile chat-UI screenshot inside, a robot mascot peeking over the
card's top edge, and display heading + body copy beside it.

## Structure

- **Hero:** full-viewport dark gradient field. Top bar: logo left, horizontal text
  nav center (Download, Nitro, Discover, Safety, Quests, Support, Blog, Developers,
  Careers — several with dropdown carets), white "Log In" pill right. Below, an
  asymmetric two-part layout: left column holds the display headline (3 lines),
  a 3-line body paragraph, and — centered under the whole composition — two CTA
  pills side by side (white solid primary "Download for Mac" with download icon,
  blurple solid secondary "Open Discord in your browser"). Right half is a
  theatrical scene: a large 3D-rendered monitor showing the actual Discord app UI,
  a phone with mobile UI leaning against it, and five-plus character mascots
  (robots, a purple game controller, humans in purple outfits) standing around the
  devices as if on a stage.
- **Feature section:** a single full-width content card with very large corner
  radius, its left half filled by a radial pink/magenta glow that bleeds to the
  card edges; a mobile app screenshot sits centered on the glow. Right half of the
  card: white display heading ("MAKE YOUR GROUP CHATS MORE FUN", 3 lines) over a
  ~6-line gray body paragraph. A small mint-green robot mascot peeks over the
  card's top edge, breaking the rectangle. Another mascot floats blurred in the
  background left, outside the card.

## Visual analysis

- **Palette:** deep night gradient from near-black navy (#0A0B2A-ish) at the
  corners to saturated blurple/indigo (#3B3FD8–#4A4FE0-ish) toward the center and
  bottom. Discord brand blurple #5865F2 on the secondary CTA. Accent glow: hot
  pink/magenta (#FF3FA4–#D84FCE range) fading to deep maroon at its edge. Type is
  pure white for display, light gray/lavender (#C9CBE0-ish) for body and nav.
  Small white/light stars and sparkle dots scattered across the field. Mascots add
  mint green, orange, and pink accents. Overall: high-chroma dark theme, 2
  dominant hues (blurple + magenta) plus character accents.
- **Typography:** display headline is an extra-bold, tightly condensed uppercase
  grotesque with slight irregularity/character (consistent with Discord's brand
  font Ginto Nord — inference from look, not verified). Hero headline spans ~3
  lines at massive scale (roughly 90–110 px equivalent at this viewport), tight
  leading, left-aligned. Body and nav use a neutral rounded sans (gg sans–like),
  regular weight, small size (~15–16 px), generous line-height. Strong hierarchy
  by weight and scale contrast alone — one display face, one text face.
- **Composition & grid:** loose 12-col feel; hero text occupies left ~40%, scene
  right ~60%, CTAs centered across the seam. Lots of empty dark field around
  everything — low element density, huge breathing room. The feature card is a
  single centered container ~80% viewport width with ~40–60 px corner radius; its
  internal split is roughly 55% visual / 45% text. Alignment is simple and calm;
  all energy comes from color, scale, and characters, not from layout complexity.
- **Graphics:** signature asset is the cast of 3D mascot illustrations — soft
  rounded robots, a game controller, stylized humans — rendered with soft studio
  shading and slight grain, staged around real product UI on device mockups
  (monitor, phone). Background stars/sparkles at varying sizes and opacities give
  the "night sky" depth; some mascots are blurred as if out of focal plane.
  Product screenshots are shown straight-on, unembellished, inside the playful
  frame — the app itself stays legible and honest.
- **Motion:** static screenshots — no motion visible. Reasonably inferable: the
  real page animates characters and uses hover states on the CTAs/nav, but this
  cannot be confirmed from the captures.

## Signature techniques

1. **Night-sky brand field:** a radial/linear dark gradient with star speckles
   turns the whole viewport into one branded atmosphere — no hard section edges
   needed in the hero.
2. **Product UI on a stage:** real app screenshots placed on 3D device props,
   surrounded by mascots — the product is literally the centerpiece of a scene,
   so the UI gets shown at full fidelity inside a fantasy frame.
3. **Glow-backed card:** a saturated radial glow (magenta) behind the product
   screenshot inside a rounded card creates focal pull without borders, shadows,
   or extra chrome.
4. **Mascot breaking the frame:** the robot peeking over the card's top edge
   violates the container on purpose — a small, memorable surprise that softens
   the big rectangle.
5. **Dual equal-weight CTAs:** white solid vs brand-color solid pills, same size,
   side by side, centered — two honest paths (download / open in browser) with no
   fake urgency.

## Takeaways for Inside

- **The one principle to take:** *show the real product artifact inside an
  atmospheric frame.* Discord puts unretouched app UI on a monitor/phone inside a
  moody branded scene — the fantasy carries the emotion, the screenshot carries
  the proof. For Inside this maps directly: real artifacts (code, ADRs, diagrams,
  Telegram thread excerpts) shown straight, inside a restrained branded
  atmosphere. Fits our audience because the evidence stays literal and verifiable
  while the page still has a mood — engineering honesty + alive character.
  Hypothesis, not a decision.
- **What must not be copied:** the mascot cast and the playful gaming tone —
  robots, controllers, and "FUN & GAMES" copy belong to Discord's brand and would
  read as personality decoration, off-character for an engineering membership.
  Also the very low information density (one idea per giant viewport) conflicts
  with "dense in value". The hot pink/magenta accent is Discord-specific; our
  palette decisions are separate.
- **License constraints:** Discord's mascots, logo, and brand fonts (Ginto/Ginto
  Nord, gg sans — proprietary) cannot be reused; blurple #5865F2 as a dominant
  brand color should also be avoided. Screenshots are reference-only, not assets
  to ship. Layout/composition ideas are free to adapt.

## User comment

«вот ещё» (комментарий пользователя ко второй пачке референсов)
