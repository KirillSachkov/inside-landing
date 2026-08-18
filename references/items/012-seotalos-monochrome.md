# 012. SEOtalos — strict monochrome dark SaaS landing

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #dark-theme #hero #typography #grid #bento #pricing #color #illustration #3d #proof #minimal #bold
- **Function:** `structure` / `typography` / `product presentation` / `proof`
- **Assets:** ../assets/012-seotalos-monochrome-screenshot.png

## What this is

Full-page landing for SEOtalos, an SEO analytics SaaS. The screenshot is a composite:
desktop view in a rounded "browser frame" on the left, mobile view on the right.
The entire page is executed in a strict grayscale system — black background, white
and gray type, silver/chrome 3D sparkle objects as the only decorative graphics.
Sections: nav → hero → logo cloud → feature bento grid → achievements/stats →
three-tier pricing → testimonials → FAQ accordion → footer with a giant wordmark.

Note on fidelity: the source screenshot is blurred in places (especially the mobile
column and body copy), so small text is partly illegible; analysis below sticks to
what is actually readable or clearly inferable from shapes.

## Structure

- **Nav:** logo left ("Logo" placeholder with a mark), centered link group
  (Resources, Support, Pricing, Contact), right-aligned "Sign in" + white pill
  "Sign Up" button. Dark bar, thin separators.
- **Hero:** small glass announcement pill above the headline ("…just arrived"
  pattern), then a two-line left-aligned headline "Boost your website's SEO",
  muted gray subline ("Best analytics app for agencies, consultants, affiliates,
  e-commerce, saas"), CTA pair — primary white pill "Start a Free Trial" and
  secondary dark/glass pill "Watch Demo →". Right side: cluster of chrome
  four-pointed 3D sparkles of varying size.
- **Logo cloud:** single row of ~6 grayscale brand logos (Google, Framer, Apple,
  Adobe, LinkedIn, Microsoft) directly under the hero CTAs.
- **Features ("SEO Tool That Delivers Real Results"):** eyebrow pill "Features",
  two-tone heading, then a 4-cell bento grid: (1) wide card with pill-shaped
  metric chips ("Customer visits", "Page Funnels", "Page Impressions") rendered
  as grayscale product-UI fragments; (2) line-chart card with floating
  percentage chips (+8%, +2%, +8%) and "12.5k views / 2.2k clicks" figures;
  (3) "Google Search Console" connect card; (4) card with stacked keyword/tag
  chips arranged as loose floating pills.
- **Achievements ("Proven SEO Results You Can Trust"):** eyebrow "Our
  Achievements", heading + support copy on the left, and a cascade of tilted 3D
  glass stat cards on the right — "200% Organic Traffic", "50K+ Keywords
  Ranked", etc., each with a small icon chip.
- **Pricing ("Flexible Pricing for Every Business"):** three cards — Basic $0,
  Pro $19/month, Premium $39. The middle Pro card is inverted (light/white
  surface, dark text) as the highlighted tier; side cards stay dark. Each has a
  feature list and full-width CTA button.
- **Testimonials ("What People Say About Us"):** three dark quote cards with
  avatar + name rows; carousel prev/next arrows bottom-right of the section.
- **FAQ ("Your Questions Answered"):** two-column — heading + description left,
  accordion right; first item expanded showing the answer in a lighter panel,
  the rest collapsed with plus icons.
- **Footer:** "SEOtalos.com" block with short description and a "Start a Free
  Trial" button, link columns (Legal / Menu / socials), and a giant full-width
  "SEOtalos" wordmark at the very bottom — huge grotesque letters with a
  gradient/outline treatment filling the viewport width.
- **Mobile (right column):** same sections stacked single-column; hero keeps
  the sparkle cluster, bento becomes a vertical stack, pricing cards stack.

## Visual analysis

- **Palette:** strictly monochrome. Background near-black (reads as
  `#000000`–`#0A0A0A`); cards as dark glass panels a few percent lighter with
  subtle radial highlights; primary text white (`#FFFFFF`-ish), secondary text
  mid-gray (≈`#8A8A8A`–`#9A9A9A`); hairline borders in low-alpha white; the only
  "material" accent is silver/chrome on the 3D sparkles and the inverted white
  pricing card. Zero hue anywhere — no brand color at all.
- **Typography:** single neo-grotesque sans family throughout (geometric,
  tight-tracking, in the Inter/Geist/Space Grotesk class — exact font not
  identifiable from the screenshot). Hero headline is very large (≈64–80px
  equivalent desktop), medium weight, sentence case, two lines. Section
  headings repeat a signature **two-tone pattern**: first line white, second
  line gray — e.g. "SEO Tool That / Delivers Real Results". Eyebrows are small
  glass pills with a dot icon + label ("Features", "Our Achievements", "FAQ").
  Body copy small and muted; stat figures oversized ("200%", "50K+").
- **Composition & grid:** content sits in a centered max-width container with
  generous vertical rhythm — large black gaps between sections make each band
  read as a separate "plate". Sections consistently split heading-left /
  content-right or heading-above / grid-below. The bento is a 2×2 with one
  wide cell; pricing is a symmetric 3-column with the center card elevated by
  inversion rather than scale. The whole desktop page is framed in a
  rounded-rectangle browser chrome (~24px radius), reinforcing the "product"
  feel.
- **Graphics:** 3D chrome four-pointed sparkles (the "AI sparkle" glyph rendered
  as metal objects) in the hero; grayscale product-UI fragments inside bento
  cards (chips, chart, keyword pills); tilted glass stat cards with soft
  perspective; everything else is flat UI. Logo cloud desaturated to pure gray.
- **Motion:** static screenshot — no motion visible. Reasonably inferable:
  the tilted stat-card cascade and floating percentage chips suggest parallax
  or scroll-in animation, and the FAQ is an accordion; not verifiable from
  the image.

## Signature techniques

- **Total monochrome discipline:** hierarchy carried entirely by tonal value,
  type scale, and surface elevation — no hue anywhere, including logos and
  product screenshots (all forced to grayscale).
- **Two-tone section headings:** white first line + gray second line, repeated
  in every section — instant scannability and a strong recurring rhythm.
- **Glass bento with embedded product-UI fragments:** feature cards contain
  desaturated UI chips/charts instead of illustrations, so the product itself
  is the artwork.
- **Inverted middle pricing tier:** the recommended plan is highlighted by
  flipping to a white surface, not by a color badge.
- **Tilted 3D stat-card cascade** as the proof visual instead of plain numbers.
- **Giant footer wordmark:** full-width "SEOtalos" logotype closing the page.

## Takeaways for Inside

- **The one principle to take:** monochrome discipline as an engineering
  statement. Letting weight, scale, and tonal contrast carry all hierarchy
  reads as confident and substance-first — exactly the "specificity, structure,
  evidence" character of Inside, and it would make any real artifact we show
  (code, diagrams, ADRs) the natural focal point without decoration competing
  with it. The two-tone heading pattern is a cheap, reusable way to keep dense
  sections scannable. Hypothesis, not decision.
- **What must not be copied:** the chrome 3D sparkles — they are the generic
  "AI product" cliché and collide with our "AI as practice, not decoration"
  stance. Also off-character: logo cloud of big brands (we have no such proof
  and borrowing it would be dishonest), inflated round stats ("200%", "50K+")
  without shown methodology, generic SaaS headline copy ("Boost your X"), and
  the giant wordmark footer — a full-width "Sachkov" would tip into the
  personality cult we explicitly avoid.
- **License constraints:** source/template unknown — treat layout and copy as
  non-reusable. Brand logos (Google, Apple, Adobe, LinkedIn, Microsoft,
  Framer) are trademarked and must not be reused. The chrome-sparkle 3D
  objects are likely template/stock assets with their own license. Typeface
  unidentified; if we adopt a similar grotesque, pick a verified-license one
  (e.g. Inter, OFL) rather than matching sight-unseen.

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
