# 013. Inside Mockup (own landing draft)

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #mockup #hero #grid #typography #navigation #cta #dark-theme #light-theme #code-graphics #diagram #illustration #3d #engineering #bold
- **Function:** `structure` / `typography` / `product presentation` / `proof` — this is the current baseline draft of our own landing; it defines what already exists and what the next iteration questions.
- **Assets:** ../assets/013-inside-mockup-screenshot.png

## What this is

Not an external reference: a full-page draft mockup of the Sachkov Inside landing itself, desktop width (~1382 px captured, clearly designed wider). Light theme with a graph-paper grid background and a technical spec-sheet aesthetic, one dark "inside the product" section in the middle, and a light numbered-columns section plus footer. Long scroll: hero → dark proof section → light topics section → footer. Note: the screenshot carries a Yandex reverse-image-search overlay ("Поиск по изображению") bottom-right — a capture artifact, not part of the design.

## Structure

1. **Top strip** — logo wordmark "SACHKOV INSIDE" left; four numbered nav items as spec labels (TELEGRAM-FIRST 01 / PRIVATE 02 / ENGINEERING 03 / ARTIFACTS 04); an orange dotted-grid square mark (3×3 dots) top-right in place of a burger/avatar.
2. **Hero** — orange square bullet + mono eyebrow "PRIVATE ENGINEERING ACCESS"; huge two-line black Cyrillic headline "Внутри разработки. / До готового результата."; one-paragraph sub ("Реальные решения, архитектура, AI-агенты, production и рабочие артефакты — в приватном канале."); CTA pair: solid orange pill "получить доступ" + ghost link "что внутри". Right half: 3D render of a white retro-futuristic CRT device with an orange screen, annotated with engineering callouts (SYSTEM S1, ACCESS PRIVATE, leader lines with target-circle markers).
3. **Spec row** — a four-column strip separated from the hero by a hairline: ACCESS LEVEL: PRIVATE / FORMAT: TELEGRAM CHANNEL / UPDATE FREQUENCY: WEEKLY / CONTENT: REAL WORK ONLY, each a tiny caps mono label over a small caps value.
4. **Dark section 02 "Что попадает внутрь"** — near-black field. Left: section marker "SECTION 02", white headline with mixed case ("Что попадает / ВНУТРЬ"), explanatory paragraph, stat row "300+ АРТЕФАКТОВ / 25+ ПРОЕКТОВ / WEEKLY ОБНОВЛЕНИЯ" in orange mono, and an orange "PRIVATE ACCESS" ticket with barcode, lock glyph and "BUILD → SHARE → IMPROVE". Right/center: an overlapping collage of artifact cards — a code editor (`service.ts`, TypeScript OpenAI agent snippet with orange/red syntax highlighting), a terminal card (`deploy.sh`), an "ARCHITECTURE DIAGRAM v1.4" flowchart (Web/App → API Gateway → Auth/Core/AI services → PostgreSQL/Redis/S3), a white "ADR-021 · Выбор брокера сообщений" card with green ACCEPTED chip and Context/Decision/Consequences blocks, and a Telegram post card ("Sachkov Inside · Разбор продакшн-инцидента" with file list and view/reaction counters). Orange "BUILD LOG" pill top-right.
5. **Light section 03** — three numbered columns with oversized outlined numerals 01 / 02 / 03: Архитектура, AI-агенты, Production; each with an orange square bullet, short paragraph, and a small thin-line icon in a hairline square (isometric cubes, sparkles, server stack). Tiny sparkle glyphs separate the headers.
6. **Footer** — hairline-divided strip: Telegram paper-plane glyph in a black square + "TELEGRAM CHANNEL + INSIDE SOCIAL / Закрытое пространство для инженеров. Доступ по запросу."; "ACCESS PROTOCOL [ PRIVATE INVITE ONLY ]" in mono brackets; "MEMBERS ONLY / NO SCREENSHOTS".

## Visual analysis

- **Palette:** strictly two-color system. Off-white paper ~#F5F5F3 with hairline grid ~#E4E4E0; near-black ink ~#0D0D0D; dark section ~#0B0B0C with cards on ~#141416; single accent safety-orange ~#F9570B–#FF5A00 used for bullets, eyebrow markers, the CTA pill, stats, the ticket, and the device screen. Secondary text mid-gray ~#8A8A86. Green appears once (ADR "ACCEPTED" chip) as semantic status color.
- **Typography:** two families. (1) A bold neo-grotesque with tight tracking and full Cyrillic for headlines — Inter Display / TT Norms class, extrabold, hero ~110–130 px at this capture width, line-height ~0.95; section headlines mix sentence case and ALL CAPS within one phrase ("Что попадает / ВНУТРЬ"). (2) A monospaced caps face (JetBrains Mono / IBM Plex Mono class) for all meta labels: nav items, eyebrow, spec row, stats, section markers — small (~11–13 px), letterspaced. Body copy is the grotesque at small size in gray.
- **Composition & grid:** visible graph-paper grid across all light sections doubles as the layout grid; hero is a 2-column split (text left ~55%, render right ~45%) with the headline breaking two lines; spec row and section 03 use 4- and 3-column hairline-divided strips; the dark section abandons the visible grid for an overlapping free collage of cards at slight offsets/rotations (the ticket is rotated ~−6°), which reads as a workbench/desktop. Density is high in the dark section, airy in the hero and section 03.
- **Graphics:** one large photoreal-ish 3D render (white retro-futuristic device, orange CRT screen, engineering callout labels with thin leader lines and target markers) as the hero visual; everything else is UI-literal: real-looking code, terminal, flowchart, ADR document, Telegram post, barcode ticket, thin 1-px line icons. Dotted 3×3 orange grid as a brand mark. Small sparkle/crosshair glyphs as separators.
- **Motion:** static screenshot — none visible. Reasonably inferable: the annotated device suggests hover/scroll-reveal callouts, and the card collage suggests staggered entrance, but this is speculation; no motion is captured.

## Signature techniques

- **Spec-sheet chrome:** every navigational and meta element is written as a numbered technical spec (NAME / NN, LABEL: VALUE), turning the product's facts into the design system itself.
- **Graph-paper background** as both texture and layout grid — instant "engineering notebook" signal.
- **Artifact collage as proof:** the dark section shows the actual content types (code, diagram, ADR, Telegram post) as recognizable UI cards instead of describing them — the product demo *is* the section.
- **Ticket/perifery props:** barcode "PRIVATE ACCESS" ticket, bracketed mono labels, dotted-grid mark — semiotic props that sell privacy/exclusivity without a word of marketing copy.
- **Light/dark/light rhythm:** white paper → black "inside" → white paper; the dark section literally visualizes "going inside".

## Takeaways for Inside

- **The one principle to take:** the spec-sheet vocabulary — ACCESS LEVEL / FORMAT / UPDATE FREQUENCY / CONTENT as literal design elements. It matches the product character exactly (specificity, evidence, honest boundaries) and lets us state facts ("weekly", "real work only", "no screenshots") where other landings would put adjectives. Hypothesis, not decision.
- **What already works:** the artifact collage is the strongest proof block we could have for "real artifacts — code, diagrams, ADRs" — showing a real ADR-021 card and a real Telegram post is more convincing than any feature list. The light/dark/light rhythm gives "inside" a spatial meaning. The footer ("MEMBERS ONLY / NO SCREENSHOTS", "PRIVATE INVITE ONLY") nails the private character without elitism copy. The two-font system (grotesque + mono caps) is the right typographic backbone.
- **What to question:** (1) The 3D retro device render — beautiful, but it's decorative tech nostalgia; it says nothing about the actual content and drifts toward "technological as decoration", which the product explicitly isn't. Candidate for replacement with a real artifact or a more functional visual. (2) Stats "300+ артефактов / 25+ проектов" — unverifiable numbers at launch would break the honesty contract; needs real counts or removal. (3) Graph-paper + callouts + ticket is close to the cliché kit of "technical" landing aesthetics — worth pushing one step further from template. (4) The dark section is dense: five overlapping cards plus stats plus ticket risks overload on mobile. (5) Language mix (English chrome, Russian body) needs a conscious rule, not accident.
- **What must not be copied** (from itself, i.e. flagged before it fossilizes): the device render as hero centerpiece, invented stats, and any callout label that isn't a true fact about the product.
- **License constraints:** internal draft — no external image licenses; the 3D render's origin/generation tool should be recorded if it ships. If the final build adopts these looks, both fonts should be pinned to licensed families with Cyrillic (e.g. Inter Display + JetBrains Mono are OFL; TT Norms / CoFo alternatives are commercial).

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
