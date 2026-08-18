# 003. Studio Regine — editorial hero with giant mixed-pixel wordmark

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #hero #typography #light-theme #editorial #minimal #bold #navigation #cta #pixel-art
- **Function:** typography / structure — a study in how a single oversized wordmark plus one centered hero object can carry an entire above-the-fold screen with almost no supporting copy.
- **Assets:** ../assets/003-studio-regine-editorial-screenshot.png

## What this is

Hero screen of "Studio Regine", a design-studio site (shown as a preview thumbnail inside a
gallery app — the surrounding chrome, back arrow and controls are the gallery, not the site).
The site itself is an off-white editorial page: a small photo logo top-left, a split two-tone
pill nav top-center ("+ Inquire" on peach / "✷ Explore Work" on near-black), an outlined
"Drop Us a Line" pill button top-right. Below: "STUDIO," in a plain grotesque, then a giant
"REGINE" wordmark in a mixed solid/pixel-stepped display font, and under it a frosted-glass
dome (bell jar) containing a photo of orange, pink and purple roses. Three translucent
"ghost" cards — Identity / Motion / Art — sit in a row overlapping the dome, each with a tiny
geometric glyph icon and a small-caps link underneath ("SEE IDENTITY WORK" / "VIEW MOTION
PROJECTS" / "EXPLORE OUR ART DIRECTION"). The middle card ("Motion") is solid white,
apparently the active/hover state.

## Structure

- Header strip: three zones — logo (left), centered segmented pill nav, outlined CTA (right).
- Hero block: kicker line "STUDIO," (small, grotesque, with a pixel-stepped comma as a
  detail) → giant wordmark spanning roughly 60–65% of the content width → hero object
  (glass dome with roses) centered on the same vertical axis, rising up behind the wordmark
  so the type overlaps the dome's top.
- Card row: three equal ghost cards in one horizontal row, vertically centered over the dome;
  each card = label, geometric icon, two-line small-caps link below.
- No body copy, no stats, no scroll indicator visible — the entire above-the-fold message is
  name + three discipline links.

## Visual analysis

- **Palette:** off-white / warm light gray background (≈ `#F3F2F0`); near-black ink for type
  and the dark half of the pill nav (≈ `#1A1A1A`); one warm peach/apricot accent on the
  "Inquire" segment (≈ `#F2B27E`); the only other color lives inside the dome photo — orange,
  dusty pink and muted purple rose tones, desaturated by the frosted-glass effect. Effectively
  a two-color UI (ink + peach) with photography as the sole color source.
- **Typography:** the wordmark "REGINE" is custom display lettering — geometric blocky caps
  where some glyphs are solid (R, E, N) and others are pixel-stepped / stair-cased (G, I and
  details like the dotted foot of the R), a deliberate mixed pixel/blocky treatment at very
  large size (cap height roughly 4–5× the kicker). Kicker "STUDIO," is a neutral grotesque
  sans, medium weight, sentence case. Nav, buttons and links are a small grotesque, mostly
  uppercase small-caps at tiny size (links ≈ 10–11 px equivalent). Strong three-level scale
  contrast: giant display → small kicker → micro caps.
- **Composition & grid:** strict central vertical axis; wordmark, dome and middle card all
  share it. Three-column symmetry for the ghost cards, wide even gutters. Header uses a
  classic left/center/right tripartite bar. Very low density: one screen holds ~6 text blocks
  total, with generous empty space on both sides of the wordmark.
- **Graphics:** one photographic asset (roses) treated as an object under a frosted glass dome —
  glassmorphism with soft blur and color bleed; tiny geometric glyph icons (crosshair-plus,
  circular arrows, X) drawn in 1–2 px strokes; ghost cards are translucent blurred panels over
  the dome, with the active one flipped to solid white. Pixel steps inside the wordmark echo the
  digital/studio theme without any literal tech imagery.
- **Motion:** static screenshot — no motion visible. Reasonably inferable: the solid-white
  middle card looks like a hover/selected state, so the ghost cards likely animate on hover;
  the blurred dome and overlapping wordmark suggest possible scroll parallax, but neither is
  confirmed from this image.

## Signature techniques

- Giant mixed pixel/solid display wordmark as the entire hero statement — name set so large it
  becomes the layout's main graphic element.
- Type overlapping the hero object: the dome rises behind the wordmark baseline instead of
  sitting in a separate block, fusing type and image into one composition.
- Single hero object under frosted glass — one photograph, abstracted by blur, carries all
  color and mood.
- Ghost cards with tiny geometric glyphs: translucent panels that let the background show
  through, differentiated only by label and icon; active state = solid white.
- Split two-tone pill nav (peach / near-black segments) as the header's only strong accent.
- Pixel-stepped comma in "STUDIO," — a micro-detail that repeats the wordmark's pixel language.

## Takeaways for Inside

- **The one principle to take:** one oversized confident wordmark + one centered physical-feeling
  object, and almost nothing else above the fold. For Inside this could translate to a giant
  "INSIDE" (or "SACHKOV INSIDE") wordmark with a single central artifact — e.g. a real terminal
  session, code diff or ADR card rendered as a tangible object — instead of a feature list. It
  fits our audience because it is structural and specific rather than salesy: engineers respond
  to a single concrete artifact as evidence more than to marketing copy. Hypothesis, not decision.
- **What must not be copied:** the roses and the soft feminine editorial mood are brand-specific
  and off-character for an engineering membership; the frosted-glass romanticism would read as
  decoration, not practice. The pixel-stepped type is also risky — in our context pixels read as
  retro-gaming/hype, not engineering rigor; if we want a "code" voice, monospace or technical
  grotesque is more honest. The three vague discipline cards (Identity/Motion/Art) are too
  content-free for us — our equivalent links need concrete labels (artifacts, build series, ADRs).
- **License constraints:** the wordmark looks like custom or licensed display lettering — not
  reusable; any similar treatment must be commissioned or built from a properly licensed display
  font. The rose photograph is stock/commissioned photography — a central photo for Inside would
  need its own license, or better, be replaced by our own real artifact (screenshot/render of
  actual code), which sidesteps photo licensing entirely. Icon glyphs are generic geometry, no
  concern. Copy ("Drop Us a Line" etc.) is trivial but should not be reused verbatim.

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
