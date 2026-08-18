# 011. HooBank — Dark Fintech Landing

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #hero #dark-theme #color #cta #illustration #3d #proof #bold
- **Function:** `structure` / `product presentation` / `proof` — a canonical example of the classic dark-SaaS page skeleton and of how a single accent color carries an entire dark page.
- **Assets:** ../assets/011-hoobank-dark-fintech-screenshot.png

## What this is

Full-page screenshot of HooBank, a fictional payment-service landing (a widely circulated React/Tailwind template design). One long dark page, ~1350px tall in the capture, walking the classic SaaS arc: hero → stats → three feature blocks → testimonials → logo cloud → CTA card → footer. The screenshot also includes a couple of floating UI decoration elements (a back-to-top / mockup tile bottom-right) that appear to be screenshot artifacts, not part of the page design.

## Structure

Top to bottom, with clear alternation rhythm:

1. **Header:** logo left, text nav right (Home / About Us / Features / Solution), no CTA button in the nav.
2. **Hero:** two columns. Left — small pill badge ("20% DISCOUNT FOR 1 MONTH ACCOUNT"), giant 3-line headline with the middle line ("Generation") in cyan gradient, paragraph, and a circular outlined "Get Started ↗" badge instead of a rectangular button. Right — 3D render: a robotic hand palm-up holding a stack of three floating glassmorphic credit cards in isometric perspective, plus a glowing cyan sphere above.
3. **Stats row:** three metrics ("3800+ USER ACTIVE | 230+ TRUSTED BY COMPANY | $230M+ TRANSACTION") in one row, big gradient numerals + small caps gray labels, separated by thin vertical dividers.
4. **Feature block A:** text left ("You do the business, we'll handle the money.") + cyan button; right side three stacked notification-style feature chips (Rewards / 100% Secured / Balance Transfer) with icon + microcopy.
5. **Feature block B (mirrored):** left — dark app mockup card showing a "Paypal" transaction list (Dribbble Pro, Netflix, Manulife Cash) with a floating success toast "Great! Your Payment is successfully"; right — headline "Easily control your billing & invoicing." + paragraph + App Store / Google Play badges.
6. **Feature block C:** text left ("Find a better card deal in few easy steps.") + cyan button; right — analytics dashboard mockup ("Card Analysis" with line/bar charts, "Scan Credit Cards") plus a row of small payment-method icons.
7. **Testimonials:** heading "What people are saying about us" with a right-aligned supporting sentence; three cards in a row, each opening with a huge quotation-mark glyph, quote text, avatar + name + role. Middle card sits on a slightly elevated gradient panel.
8. **Logo cloud:** four grayscale wordmarks — airbnb, BINANCE, coinbase, Dropbox — evenly spaced.
9. **CTA card:** wide rounded panel ("Let's try our service now!") with heading + text left and cyan button right, on a subtle gradient background distinct from the page.
10. **Footer:** logo + tagline left, three link columns (Useful Links / Community / Partner), copyright bar with social icons.

## Visual analysis

- **Palette:** near-black navy background, approximately `#00040F`–`#0A0E1A`, with sections subtly lightened via soft radial glows. Single accent family: cyan/teal gradient (roughly `#5CE1E6` → `#33BBCF`, with pale tint `#DEF9FA` at the light end) used for gradient text, buttons, icons, and glows. Body text is white at reduced opacity (gray-blue, ~`#FFFFFF` at 70% / `#A7B0BE`-like). Ambient decoration comes from large, very blurred cyan radial glows bleeding in from section edges — the page never uses a second accent hue.
- **Typography:** geometric sans throughout — Poppins (this template's known font; the wide, round letterforms with single-story "a" match). Display headlines ~48–56px, weight 600, tight line-height (~1.1); section headlines ~40px; body 16–18px at 400 in muted gray-blue; labels in small caps with wide letterspacing (stats labels, pill badge). Gradient fill applied to selected headline words and stat numerals, not to body text.
- **Composition & grid:** centered ~1200px container, 12-column feel; hero and feature blocks are strict two-column splits with alternating sides (text-left/visual-right, then visual-left/text-right), creating a zigzag reading path. Generous vertical rhythm — ~120px+ between sections. Density is low: short paragraphs (2–3 lines), lots of dark negative space, each section carries exactly one idea.
- **Graphics:** 3D-rendered hero artwork (robotic hand + floating glass cards with blur/transparency), glassmorphism on UI chips (translucent dark panels, 1px light borders, soft shadows), app-UI mockups used as the product visuals in feature blocks, oversized decorative quote glyphs in testimonial cards, grayscale/desaturated partner logos. Floating blurred cyan orbs and glow fields act as atmosphere, tying sections together.
- **Motion:** static screenshot — none visible. The floating card stack, glow fields, and circular "Get Started" badge are typical candidates for parallax/hover animation in the live version, but this is inference, not observed.

## Signature techniques

- **One accent, total discipline:** a single cyan gradient does all the work — headline words, numerals, buttons, icons, glows. The dark background stays neutral so the accent reads as "technological" without any other color noise.
- **Gradient on keywords, not whole headlines:** only the operative word ("Generation") and the stat numbers get the gradient — the rest stays white, which keeps the accent scarce and valuable.
- **Ambient glow fields:** oversized blurred radial glows at section edges create depth and separate bands of the page without borders, dividers, or background color blocks.
- **Circular badge CTA in hero:** an outlined circle with an arrow ("Get Started ↗") replaces the standard rectangular primary button in the hero — a memorable, unconventional CTA shape.
- **Alternating two-column feature rhythm with product-UI-as-visual:** each feature row pairs a short claim with an actual app mockup, so the product itself is the illustration.
- **Stats row as instant proof:** three metrics with dividers immediately under the hero, before any feature explanation.

## Takeaways for Inside

- **The one principle to take:** accent discipline on a dark canvas — one restrained accent color (or gradient) applied only to operative words, numbers, and CTAs, over a near-black background with atmospheric glows instead of section borders. This fits our audience: developers read dark themes natively, and the "evidence-first" stats row pattern (numbers right under the hero) maps directly onto Inside's character — specificity and proof (subscriber counts, shipped artifacts, ADRs) before feature talk. Hypothesis, not decision.
- **What must not be copied:** the 3D robotic hand / floating glass cards — decorative sci-fi stock aesthetics that contradict "AI as practice, not decoration" and would read as hype. Also the generic SaaS filler claims ("The Next Generation Payment Method", fake app-store badges, inflated stats like "$230M+ Transaction") — Inside must stay honest about boundaries, so proof numbers have to be real and modest. The fictional fintech logo cloud (airbnb/binance/coinbase) is borrowed credibility we neither have nor should imitate; any logo/proof block must come from real member companies or none.
- **License constraints:** this is a well-known tutorial/template design (JS Mastery HooBank); its design and assets circulate as a Tailwind/React starter — layout patterns are safe to learn from, but the actual artwork (robot hand render, card mockups) and any brand logos must not be reused. Poppins is SIL OFL (free for web use). Partner logos shown (airbnb, Binance, Coinbase, Dropbox) are third-party trademarks — decorative use only in the original demo, never copy them.

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
