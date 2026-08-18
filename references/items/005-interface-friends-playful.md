# 005. Interface Friends — playful event landing

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #landing #screenshot #hero #typography #light-theme #color #illustration #cta #bold #playful
- **Function:** `structure` / `typography` — a reference for how far a single-column page can go on type scale + character illustration alone, with zero product screenshots.
- **Assets:** ../assets/005-interface-friends-playful-screenshot.png

## What this is

Full-page screenshot of **Interface Friends**, a one-off event landing (Figma Config 2024 side event in San Francisco, June 25 2024) by Dann Petty, built with Webflow. The page's only job: announce the event and collect emails ("register to get notified"). One narrow centered column, no navigation, no pricing, no feature grid.

## Structure

- **Utility bar:** sticky rounded "GET NOTIFIED" pill button, top right (visible pinned at the very top edge).
- **Hero:** small metadata row (`June 25 2024` left / `San Francisco, CA` right), then a giant two-line condensed headline `INTERFACE FRIENDS`, crossed by **two diagonal ticker-tape strips** repeating `REGISTER TO GET NOTIFIED · DETAILS COMING SOON`. Below the headline, three cartoon device mascots (game console, computer tower winking with `WINK >>>` on its display, flip phone).
- **Intro copy block:** centered mini-headline `Come make new "IFFs."` (with a footnote-style expansion "Interface Friends Forever"), then `Experience CONFIG together and more.` in bold, then 3 short paragraphs of small centered body text.
- **Hosts row:** `Hosted by` — avatar chips for Dann Petty, Webflow, and an empty dashed slot `You (Sponsor)`.
- **Ticket-includes list:** thin divider, `Included with your ticket:`, then a stacked bold list — `Meet New Friends / Games & Activities / Light Dinner + Refreshments / Interactive Discussions / Config with Friends / & More!` — flanked by a large laptop mascot leaning in from the left.
- **Signup card:** white card with thick black border: eyebrow `Limited Spots Available`, big condensed `GET A FRIENDLY NOTIFICATION`, one supporting line, `NAME` and `EMAIL ADDRESS` inputs (thin black borders, uppercase micro-labels inside), full-width black `NOTIFY ME` button. A fourth mascot (camera/phone character) leans against the card's right edge, overlapping it.
- **Footer:** two-line sponsorship contact (`Interested in sponsoring... dann@interfacefriends.com`), then a **mascot strip** — a row of device characters peeking up from the bottom edge of the page.

## Visual analysis

- **Palette:** pale blue-gray page background (~`#D9E3E8`); near-black ink (~`#161616`) for headline, borders, button; white cards and ticker tape (~`#FFFFFF`). Accent colors live only inside the mascots: warm yellow/orange faces (~`#F7B32B`, `#F28C38`), purple console (~`#5A4E9C`), teal-green phone (~`#3E6B50`), coral-orange laptop (~`#E8632F`), screen blue (~`#5FA8D3`). Roughly 90% neutral field, 10% saturated character color.
- **Typography:** one extra-bold condensed grotesque for all display text, all-caps, very tight leading — the hero spans nearly the full content width in two lines (~"Anton"/Druk-Condensed class; exact font not verifiable from a screenshot). Same face at mid scale for the includes list and the signup card title. Body copy is a small plain grotesque, centered, generously leaded. Micro-labels (`GET NOTIFIED`, `NOTIFY ME`, ticket phrases on the tape) are tiny uppercase bold. Contrast between massive display type and deliberately small body text is the whole typographic system — effectively two sizes.
- **Composition & grid:** strict single centered column (~600–650px content width inside a much wider viewport), everything center-aligned. Vertical rhythm by generous whitespace and thin full-width hairline dividers between blocks. The diagonal ticker tapes (~-3°) and the mascots leaning in from outside the column are the only elements that break the orthogonality — and they break it hard, which is what makes them read as accents.
- **Graphics:** no product imagery at all (there is no product to show). Five+ custom cartoon mascots — retro devices with faces, flat fills, chunky black outlines, slight 3/4 tilt, soft drop shadows. They carry the entire emotional tone and all the page's color.
- **Motion:** static screenshot. Reasonably inferable: the ticker tapes are classic marquee loops (text repeating seamlessly), and "details coming soon" implies the tape persists as a state-of-the-event signal; the `WINK >>>` display on the tower mascot suggests at least one animated/blinking character. Not verifiable from the image — flagged as inference.

## Signature techniques

- **Diagonal ticker tape crossing the headline** — a marquee strip used as a graphic element, not a banner: it slices the giant wordmark, adds energy, and carries the only CTA copy on the hero ("register to get notified").
- **Two-size typography** — enormous condensed display vs. tiny body, nothing in between; hierarchy by extreme contrast instead of a type scale.
- **Mascots as the accent-color budget** — the page stays neutral; all saturation is quarantined inside characters, so the design feels colorful without a single colored UI block.
- **Characters overlapping layout edges** — mascots lean against the signup card and peek from the footer edge, breaking the column grid at exactly the moments where attention is needed (signup, page end).
- **Empty sponsor slot as content** — `You (Sponsor)` dashed chip turns a sales ask into part of the hosts row; the signup card repeats the trick with `Limited Spots Available` as an eyebrow instead of a pricing block.

## Takeaways for Inside

- **The one principle to take:** let one oversized, tightly-set condensed headline plus small quiet body text carry the hierarchy, and keep the accent-color budget small and deliberate. For Inside this maps to an engineering voice: a confident, specific headline ("what we're building this month") set huge, everything else calm — density of value without visual noise. The diagonal-tape idea also has an engineering analog worth testing: a thin "status strip" across the hero carrying live signals (current build-series episode, open question of the week) instead of marketing slogans — "alive" as a graphic device. Hypothesis, not decision.
- **What must not be copied:** the cute device mascots and the overall kiddish-playful tone — wrong register for practicing developers; Inside is warm but professional, not adorable. No cartoon faces, no `& More!` list punctuation, no fake-scarcity eyebrow ("Limited Spots Available") — off-character for a membership that sells on honesty about boundaries. The "details coming soon" ambiguity also only works for a one-day event, not a subscription.
- **License constraints:** mascots are custom commissioned illustrations (Dann Petty / Webflow) — not reusable; any mascot-style art for Inside would need original commissioning. Display typeface unverified from the screenshot (condensed grotesque in the Anton/Druk class — Anton is OFL, Druk is commercial); confirm before use. Copy, event name, and layout concept are brand-specific.

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
