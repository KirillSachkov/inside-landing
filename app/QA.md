# Astro port QA evidence

Date: 2026-08-18

Reference: `visual/prototypes/a2-spec-soft.html`

Review base: `bdd0177905df723ca4e4e2fb9288a4d8dc95701b`

## Build gate

- Red: `npm --prefix app run build` failed before the port because `app/package.json` did not exist.
- Green: `npm run build` from `app/` completed with Astro Check reporting 0 errors, 0 warnings, and 0 hints, then generated one static page.

## Responsive parity

The prototype and Astro output were compared with full-page browser screenshots. The final Astro output was checked at 320, 393, 768, 1024, and 1440 CSS pixels. Additional overflow checks covered 700, 900, and 1200 pixels.

- Document width matched viewport width at every checked size.
- No horizontal overflow or overlapping content was observed.
- The mobile navigation was present below 1024 pixels; the desktop navigation was present from 1024 pixels.
- The hero heading kept its confirmed two-line composition.
- All nine WebP images loaded with non-zero natural dimensions.

## Interaction and accessibility checks

- All nine conversion links resolve in the generated page to `https://web.tribute.tg/s/13EA`, open a new tab, and include `rel="noopener"`.
- The mobile menu opens from the burger button, closes with Escape, restores focus, and locks body scrolling while open.
- FAQ items toggle independently and keep `aria-expanded` and `aria-controls` in sync.
- Reduced-motion mode disables the glitch, reveal, terminal, floating-object, navigation, CTA, and social-link motion.
- The deterministic `?static`, `?faq=open`, `?nav=open`, and `?glitch=freeze` QA states work.
- The accessibility tree exposes `Software Engineer` once in the main heading.
- A browser context with JavaScript disabled exposed the six-link semantic fallback navigation, kept the inert burger hidden, and had no horizontal overflow at 393 pixels.
- Browser console checks reported no errors or warnings.
- Visible page text contains no em dash characters.

## Boundaries

- The Tribute target and link behavior were verified; no external checkout or payment was completed.
- Production Core Web Vitals require a deployed URL and real traffic, so they are not verified here.

## Timeweb production build

- `npm run verify` completes with Astro Check reporting 0 errors, 0 warnings, and 0 hints, then validates the production canonical, Open Graph image, robots, sitemap, and health endpoint in the generated static output.
- Browser QA against the production build confirmed the production canonical and Open Graph URL, valid WebSite JSON-LD, nine conversion links, all nine loaded images, no horizontal overflow, no console errors, and the same 393-pixel full-page composition.
- A no-JavaScript browser check confirmed the six-link fallback navigation and hidden inert burger.

The actual Timeweb deployment, domain rebinding, external Tribute checkout, and field Core Web Vitals remain post-push operational checks.
