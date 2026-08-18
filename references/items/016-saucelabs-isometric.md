# 016. SauceLabs — isometric testing playground

- **Source:** https://www.lapa.ninja/post/saucelabs/ and https://saucelabs.com/?ref=lapaninja (screenshot from user)
- **Added:** 2026-08-16
- **Tags:** #screenshot #landing #hero #typography #color #illustration #isometric #light-theme #cta #proof #playful
- **Function:** `structure`, `typography`, `product presentation`, `proof` — a classic two-column hero that pairs a marker-highlighted grotesque headline with one large playful isometric scene, plus a bracketed stats strip as proof directly under the first screen.
- **Assets:** ../assets/016-saucelabs-isometric-screenshot.png

## What this is

Hero and first fold of **SauceLabs**, a test-automation cloud ("Website and mobile
testing at every stage of development"). One viewport: a full SaaS top nav, a
left copy column with two CTAs, a large isometric line illustration of a "testing
playground" on the right, a centered scroll cue, and a four-item stats strip
(ROI, payback, NPV, time savings) anchoring the bottom of the screen.

## Structure

- Top nav, four zones: left — bolt logo + "SauceLabs" wordmark, then a thin
  vertical divider; center-left — text links "Products ⌄", "Solutions ⌄",
  "Pricing", "Developers ⌄", "Resources ⌄"; right — "Sign in" text link,
  outlined pill "Request a demo", filled mint pill "Try it free", search icon.
- Hero body, two columns on a very light canvas (~2516 px retina capture,
  ≈ 1258 CSS px): left ~45% holds headline (3 lines, two words wrapped in
  marker-highlight boxes) → two-line gray subcopy → CTA pair (filled mint pill
  "Try it free" + outlined pill "Request a demo", same order and labels as the
  nav — deliberate repetition). Right ~55% is the isometric illustration,
  vertically centered with the copy block.
- Centered scroll cue under the hero: small down-arrow glyph + "SCROLL TO LEARN
  MORE" in tiny letterspaced caps.
- Bottom band: stats strip, four items evenly distributed across the full width
  — big number flanked by mint brackets, small letterspaced caps label beneath:
  "217% ROI", "<6 mos PAYBACK", "$6.8M NET PRESENT VALUE", "↑90% DEVELOPER AND
  QA TIME SAVINGS".
- No logo cloud, no testimonial — the stats strip is the only proof element, and
  it sits inside the first viewport.

## Visual analysis

- **Palette:** cool light scheme. Background very light gray-green (≈ #EEF4F2);
  headline and nav text near-black with a green cast (≈ #1E2A28); subcopy muted
  gray-green (≈ #5E6E6B). Accents: mint green (≈ #7CD5A8) — primary CTA fill,
  stats brackets, logo bolt; golden yellow (≈ #F8C85C) — headline highlight box
  behind "testing"; salmon/terracotta (≈ #E58A63) — highlight box behind
  "development". The illustration reuses the same three accents (mint, peach/
  salmon, yellow) against charcoal line work, so hero art and UI read as one
  system. Ghost CTA is transparent with a thin dark border.
- **Typography:** single geometric grotesque family throughout — circular
  counters, even stroke, medium weight (Aeonik/Circular territory; Sauce Labs'
  brand sans). Headline ≈ 48–52 px CSS equivalent, regular-to-medium weight
  (not bold — emphasis comes from the highlight boxes, not the weight), tight
  leading (~1.1), left-aligned. Subcopy ≈ 14–15 px, gray, two lines. Nav and
  CTA labels ≈ 13–14 px. Stats numbers in the same grotesque at ≈ 40–44 px;
  stat labels in small letterspaced caps ≈ 11–12 px, muted. No serif, no mono.
- **Composition & grid:** wide centered container; the hero split is a classic
  text-left / art-right ~45/55. Generous whitespace: the copy block is narrow
  and the illustration breathes on all sides. The stats strip sits on the same
  background with no divider — separation is done purely by whitespace and the
  scroll cue. Overall element count is low for a SaaS page: nav, 4-element copy
  block, one illustration, scroll cue, one stats row.
- **Graphics:** one large playful isometric scene (~540×420 px in the capture) —
  a "testing playground": a looping light-gray road with a dashed centerline
  curls through the scene like an infinity/track loop; around it a mint desk
  with a peach mechanical keyboard and a branded coffee mug, a dark code window
  with checkboxes, giant keyboard keycaps ("enter", "*"), a traffic light, a
  yellow radar/sonar ring, LEGO-like blocks, a coffee to-go cup, a wrench, a
  cloud with an antenna, server/pipe details. Thin even charcoal outlines,
  flat pastel fills (mint, peach, yellow, white), isometric ~30° axes. The
  metaphors are literal developer-life objects, not abstract SaaS blobs.
- **Motion:** static screenshot — none visible. Reasonably inferable: the loop
  road, radar ring and traffic light strongly suggest subtle looping animation
  (cars/dots circulating, radar sweep, light cycling); unconfirmed.

## Signature techniques

- **Marker-highlight headline** — two key words ("testing", "development") are
  wrapped in rounded yellow/orange highlight boxes, like a marker pass over the
  line. Emphasis without bold weight; doubles as the palette's accent carrier.
- **Bracketed stats** — each big number is flanked by thick mint square brackets
  ("217%", "$6.8M") or rounded brackets ("<6 mos", "↑90%"), turning a plain
  stats row into a branded graphic device with a code/terminal flavor.
- **Isometric developer-playground illustration** — the product story is told
  through one dense but tidy isometric scene of literal work objects (keyboard,
  keycaps, code window, coffee, traffic light) instead of UI screenshots or
  abstract shapes.
- **CTA repetition nav ↔ hero** — the same two buttons ("Try it free" filled,
  "Request a demo" outlined) appear in the nav and the hero in identical order
  and styling; the primary action never leaves the screen.
- **Three-accent discipline on a quiet base** — near-monochrome gray-green page
  with exactly three accents (mint, yellow, salmon) shared between UI and
  illustration, keeping a playful scene from becoming noisy.

## Takeaways for Inside

- **The one principle to take:** marker-highlight boxes on a quiet grotesque
  headline, plus one literal-object illustration that shows the work instead of
  describing it. For Inside this maps well: highlighting the load-bearing words
  ("production work", "real artifacts") is an editorial, engineering-adjacent
  emphasis technique that reads as annotation rather than marketing gloss, and
  our audience responds to being shown concrete objects (code, diagrams, ADRs)
  over benefit claims. The bracketed-stat device also has a natural terminal/
  code flavor that could dress our proof numbers without a corporate dashboard
  look. Hypothesis, not decision.
- **What must not be copied:** the full corporate-SaaS apparatus — five-item
  dropdown nav, dual demo/trial CTAs repeated twice per screen, and especially
  the Forrester-style ROI/NPV stats strip ("217% ROI", "$6.8M NPV"), which is
  exactly the enterprise-proof language Inside must avoid (our proof is
  artifacts and current work, not payback metrics). The playful pastel tone is
  also at risk of sliding into cute; Inside should stay drier and more
  authorial. The highlight-box and bracket devices are borrowable, the
  conversion playbook around them is not.
- **License constraints:** the illustration, logo and wordmark are brand-owned
  artwork — technique (isometric thin-line scene, highlight boxes, bracket
  framing) is borrowable, the drawing itself is not. The brand sans is a
  commercial geometric grotesque (Aeonik-class); free OFL lookalikes exist
  (Inter, General Sans, Poppins), so type licensing is a non-issue if we go
  this route. Screenshot used for internal analysis only.

## User comment

«вот ещё» (комментарий пользователя ко второй пачке референсов)
