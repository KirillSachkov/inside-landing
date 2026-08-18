# References

Collection of visual references feeding the visual direction of the Sachkov Inside landing.

## How references are added

Via the `add-reference` skill (`.agents/skills/add-reference/`): it processes the input (link, screenshots, md file, description), writes the analysis, saves assets, and updates this file. This document is the single source of truth for the card template and the tag taxonomy.

Card and asset names: `NNN-slug` — next number, short lowercase slug naming the essence (`001-linear-hero`).

## Card template

Fields marked with † come from the landing playbook (see `playbook/README.md`).

```markdown
# NNN. Title

- **Source:** URL or "screenshot from user"
- **Added:** YYYY-MM-DD
- **Tags:** #tag1 #tag2
- **Function†:** one or more of `structure` / `typography` / `product presentation`
  / `motion` / `proof` / `mobile behavior` — what role this reference plays for us.
- **Assets:** ../assets/NNN-slug-desktop.png, ../assets/NNN-slug-mobile.png

## What this is

Short description: site/section/element, whose product.

## Structure

Page composition section by section (for a landing): hero, features, social proof,
pricing, etc. What each section does and how.

## Visual analysis

- **Palette:** concrete colors (hex where visible), background, accents.
- **Typography:** fonts (name or precise description), scale, density.
- **Composition & grid:** whitespace, rhythm, content width.
- **Graphics:** product screenshots, illustrations, diagrams, 3D, code.
- **Motion:** animations and their character (where visible or known).

## Signature techniques

What makes this reference worth keeping — the moves a generic landing does not have.

## Takeaways for Inside

- **The one principle to take†** and why it fits our audience (see
  ../product/README.md). Hypothesis, not decision.
- **What must not be copied†** — brand-specific or off-character elements.
- **License constraints†** — font/image/illustration/copy licenses worth noting.

## User comment

The user's verbatim note on submission, in its original language, if any.
```

For links, capture both desktop (1440px) and mobile (393px) screenshots when
tooling allows — the local pack is the evidence; live sites change.

## Tags

Kind:

- `#landing` `#section` `#element` `#screenshot` `#mockup` (drafts of our own landing, not external references)

Elements & techniques:

- `#hero` `#typography` `#color` `#dark-theme` `#light-theme` `#motion`
  `#illustration` `#3d` `#isometric` `#grid` `#bento` `#navigation` `#cta`
  `#pricing` `#code-graphics` `#diagram` `#pixel-art` `#proof` (stats rows,
  logo clouds, testimonials)

Mood:

- `#engineering` `#minimal` `#bold` `#playful` `#brutalist` `#editorial`

A new tag is allowed only when no existing one covers the trait.

## Index

| # | Title | Tags | Added |
|---|---|---|---|
| 001 | [ainrum — isometric technical hero](items/001-ainrum-isometric.md) | #hero #illustration #isometric #light-theme #engineering #minimal | 2026-08-16 |
| 002 | [Backing Tomorrow — blueprint grid](items/002-backing-tomorrow-grid.md) | #grid #typography #light-theme #3d #bold #engineering | 2026-08-16 |
| 003 | [Studio Regine — editorial pixel wordmark](items/003-studio-regine-editorial.md) | #typography #editorial #minimal #light-theme #pixel-art | 2026-08-16 |
| 004 | [Be.run — soft bento dashboard](items/004-berun-dashboard.md) | #element #bento #grid #color #light-theme | 2026-08-16 |
| 005 | [Interface Friends — playful event landing](items/005-interface-friends-playful.md) | #playful #illustration #typography #light-theme #bold #cta | 2026-08-16 |
| 006 | [Light — metaverse dark glow](items/006-light-metaverse-glow.md) | #dark-theme #color #3d #cta #bold | 2026-08-16 |
| 007 | [Agency careers — dark with 3D spotlight](items/007-agency-dark-3d.md) | #dark-theme #illustration #isometric #3d #typography | 2026-08-16 |
| 008 | [Network — crypto neon green](items/008-crypto-neon-green.md) | #dark-theme #color #typography #motion #bold | 2026-08-16 |
| 009 | [GDevelop — pixel-art game engine](items/009-gdevelop-pixel-art.md) | #pixel-art #dark-theme #illustration #playful #cta | 2026-08-16 |
| 010 | [XOTC — cyberpunk HUD](items/010-xotc-cyberpunk.md) | #dark-theme #illustration #3d #diagram #bold #cta | 2026-08-16 |
| 011 | [HooBank — dark fintech SaaS](items/011-hoobank-dark-fintech.md) | #dark-theme #color #3d #cta | 2026-08-16 |
| 012 | [SEOtalos — monochrome dark SaaS](items/012-seotalos-monochrome.md) | #dark-theme #bento #grid #pricing #minimal #typography | 2026-08-16 |
| 013 | [Inside landing draft mockup (ours)](items/013-inside-mockup.md) | #mockup #grid #code-graphics #diagram #engineering #light-theme #dark-theme | 2026-08-16 |
| 014 | [Tokens Studio — product playground hero](items/014-tokens-studio-playground.md) | #hero #typography #3d #code-graphics #light-theme #playful #bold | 2026-08-16 |
| 015 | [The Neuron — warm editorial newsletter](items/015-theneuron-warm-editorial.md) | #editorial #typography #color #light-theme #illustration #playful | 2026-08-16 |
| 016 | [SauceLabs — marker-highlight isometric](items/016-saucelabs-isometric.md) | #typography #isometric #light-theme #proof #playful | 2026-08-16 |
| 017 | [Railway — dark dusk canvas](items/017-railway-dark-canvas.md) | #dark-theme #illustration #typography #proof #editorial | 2026-08-16 |
| 018 | [Discord — blurple night sky](items/018-discord-blurple.md) | #dark-theme #color #3d #playful #bold | 2026-08-16 |
| 019 | [Quordix — glitch hero, interactive dot grid](items/019-quordix-glitch-hero.md) | #element #hero #motion #typography #light-theme #engineering #bold | 2026-08-17 |
| 020 | [Clay 3D retro computer (hero object mood)](items/020-clay-retro-computer.md) | #element #3d #illustration #light-theme #playful | 2026-08-17 |
| 021 | [Pixel-art retro devices (hero object mood)](items/021-pixel-retro-devices.md) | #element #pixel-art #illustration #dark-theme #playful | 2026-08-17 |
