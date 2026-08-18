# 004. Be.run Dashboard

- **Source:** screenshot from user
- **Added:** 2026-08-16
- **Tags:** #screenshot #element #grid #bento #diagram #color #light-theme #navigation #playful
- **Function:** `structure` / `product presentation` — a bento composition of data cards showing how to present live metrics and progress without a marketing layout.
- **Assets:** ../assets/004-berun-dashboard-screenshot.png

## What this is

A full-screen UI concept for "Be.run", a fitness/habit-tracking app — a product
dashboard, not a landing. One desktop view: greeting header, workout-results
chart, training calendar, step donut, habit list with trainers, and a
weight-loss plan bar, all arranged as rounded cards on a warm beige canvas.

## Structure

- **Left icon rail** — narrow white vertical pill with a logo mark ("Be.run")
  on top and 6–7 thin line icons in circles; one active state is a dark
  charcoal circle with a yellow icon.
- **Header row** — greeting "Hi, Amanda!" (bold) with a muted one-line
  subtitle "Let's take a look at your activity today"; to the right a rounded
  search field and a dark "Upgrade" pill button.
- **Main row, two cards (~2:1)** — large taupe card "Your Workout Results for
  Today" with the blob chart and legend; dark charcoal card "Your Training
  Days" with a month calendar.
- **Bottom row, bento of three zones** — "Steps for Today" donut card,
  "Weight Loss Plan" progress-bar card stacked under it on the left third,
  and a wide "My Habits" list card with an "Add New +" action taking the
  remaining two-thirds.

## Visual analysis

- **Palette:** warm, desaturated, light. Outer canvas beige/taupe ~#CFC8BC;
  app surface warm off-white ~#F4F0E8; cards pure white or khaki-taupe
  ~#B7AD9B (chart card) and near-black warm charcoal ~#22221F (calendar,
  active icon). Accents: soft yellow ~#F5D86B (blobs, legend), bright
  saturated yellow ~#F2D024 (calendar day circles, icons), coral/red
  ~#E8735A (burned-calorie blob, habit progress segments, donut arc).
  Text: near-black headings, mid-gray subtitles ~#8A857B.
- **Typography:** single geometric humanist sans (Poppins/Quicksand family
  look — circular 'o', single-storey 'a'). Bold ~24–28px greeting, ~15–17px
  semibold card titles, small ~11–12px gray metadata, medium-weight numerals
  ("8.500", "1,875", "68%"). Two weights do almost all the work; density is
  low — short labels, no paragraphs.
- **Composition & grid:** bento grid with generous gutters (~20–24px) and
  large uniform card radius (~24–28px); everything sits inside one big
  rounded app shell floating on the darker beige backdrop. Left rail + header
  + 2×2-ish card matrix. Airy inside cards: single focal number or viz per
  card, wide padding.
- **Graphics:** the signature element is the "blob chart" — three
  soft-edged, heavily blurred color blobs (yellow, coral, charcoal)
  overlapping like a defocused Venn diagram, each carrying a white/dark
  numeric value (1,875 kcal / 850 kcal / 2.30 hours); a legend of rounded
  dashes below. Elsewhere: a thin donut ring with a coral arc, segmented
  equalizer-style progress bars (red filled vs. gray empty segments),
  circular photo avatars of trainers, thin stroke icons in circular chips,
  a dark calendar with solid yellow day circles for done days and outlined
  dark circles for scheduled ones.
- **Motion:** static screenshot — no motion visible. Reasonably inferable:
  the blurred blobs and progress segments suggest soft animated
  counters/transitions in a live product, but this cannot be confirmed from
  the image.

## Signature techniques

- **Blurred-blob dataviz** — replacing a precise chart with defocused color
  masses; numbers float on the blobs. Emotional, decorative, deliberately
  imprecise.
- **Warm beige + charcoal + yellow system** — a light theme that avoids the
  default white/blue SaaS look; one dark card as contrast anchor.
- **Bento with mixed card tones** — white, taupe, and dark cards in one grid,
  so hierarchy comes from card background, not borders or shadows.
- **Segmented progress** — habits shown as rows of discrete filled/empty
  segments (9/12) rather than smooth bars; reads as a streak, not a percent.
- **Icon rail as a rounded floating pill** — navigation detached from the
  content area, matching the card radius language.

## Takeaways for Inside

- **The one principle to take:** a bento of "live evidence" cards — one
  metric or artifact per rounded card, warm light canvas, a single dark
  contrast card. For Inside this maps naturally to showing real, current
  artifacts (build-series progress, ADR count, diagram thumbnails, repo
  pulse) as a dashboard of proof rather than marketing claims — fits the
  "engineering + alive" character and an audience that trusts numbers over
  adjectives. Hypothesis, not decision.
- **What must not be copied:** the blurred-blob chart itself — our audience
  wants legible, precise data, and an imprecise viz reads as decoration
  (off-character "hype"); the fitness-brand yellow/coral palette; the cute
  maximal rounding and trainer photo avatars (personality-driven, close to
  the personality cult we avoid); the greeting-first consumer tone
  ("Hi, Amanda!").
- **License constraints:** this is a third-party product UI concept — the
  layout and graphics can inform but not be traced or redistributed; trainer
  avatar photos are third-party portraits, not reusable; the typeface is
  unidentified (Poppins/Quicksand-like — both OFL if substituted); all
  visible copy belongs to the Be.run concept.

## User comment

«Вот, наверное, первый набор того, что мне понравилось.» (комментарий пользователя ко всей пачке из 13 скриншотов)
