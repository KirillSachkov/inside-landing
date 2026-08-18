# Copy & block map

Working document for the landing's structure and copy: the ordered list of
blocks, each block's job, its copy (Russian, draft) and its illustration/artifact.
Filled iteratively — per block the owner sends a reference or picks from
proposed variants. Source of truth for the product: `../product/README.md`.
Visual language: direction A2 (see `../visual/README.md`,
prototype `../visual/prototypes/a2-spec-soft.html`).

Status: **draft block map, under discussion**. Nothing here is final copy.

Rules: claims, prices, testimonials are never invented — unknowns are marked
`TBD`. The conversion event is settled (2026-08-18): every «Получить доступ»
leads to the Tribute payment page `https://web.tribute.tg/s/13EA`
(target=_blank); the price is NOT shown on the landing itself.

## Block map (proposal v1)

| # | Block | Job | Illustration / artifact | Status |
|---|-------|-----|------------------------|--------|
| 01 | Hero | Positioning in one screen: inside real development, to a shipped result. CTA pair. | 3D clay computer with glowing "S" screen (done, `visual/prototypes/assets/hero-computer.webp`) | prototype |
| 02 | ~~Spec strip~~ | Removed by owner (2026-08-17): carried no useful info | – | removed |
| 03 | Что внутри | Explain what the membership consists of: production materials, AI-first, architecture, career, practice, community. | dark bento panel + 6 artifact tiles (first iteration in prototype; awaiting owner references for rework) | iterating |
| 04 | От проектирования до релиза | Full production cycle (not one build-series): design+architecture and AI-first first, code secondary; 4 benefits; stack chips. | light section with terminal window running the CI/CD pipeline line by line (prototype) | iterating |
| 05 | Кто ведёт канал | Trust: real engineer behind the channel, public track record. | white card: cutout photo (`assets/author.webp`) on warm gradient + facts, stats, CTA «Написать мне», social icons | prototype |
| 06 | Три направления (Архитектура / AI-агенты / Production) | What the practice covers; AI as practice, not decoration. | numbered 01/02/03 columns (prototype) or per-topic mini-artifacts | to discuss |
| 07 | Комьюнити | Separate chat, Kirill's participation, breakdowns and streams; not mentorship. | TBD — proposals: chat message cards / stream schedule strip | to discuss |
| 08 | Кому подходит / кому нет | Honest audience filter (already coding; not from zero, not mentorship, no job guarantee). | two soft cards: «Подходит, если ты:» (6 items, orange checks) / «Не подходит, если ты:» (3 items, muted crosses) | prototype |
| 09 | FAQ | Objection handling: language fit, not-a-course, time, answers, cancellation. | soft accordion cards (mono index, plus/minus), `?faq=open` debug param | prototype |
| 10 | Формат и доступ | Closing CTA; price and checkout live on the Tribute page, not on the landing. | dark panel «Заходи в Sachkov Inside» + clay robot + big CTA | prototype |
| 11 | Footer | Brand, social links (TG/YT/GitHub), copyright. | mono row, stacked on mobile, safe-area bottom inset | prototype |

## Open questions

- Price and terms live on the Tribute page, not on the landing.
- Which artifacts in block 03 are real at launch (screenshots of actual
  ADRs/posts vs. stylized mock artifacts).

## Notes per block

_Discussion decisions land here as we go, newest first._

### Final CTA polish + Tribute link (2026-08-18)

Owner pass: trust line «TELEGRAM-FIRST · WEEKLY · CANCEL ANYTIME» removed
from the final CTA panel (sub already says the same in Russian). Tribute link
updated everywhere to `https://web.tribute.tg/s/13EA` (9 CTAs). Stack chips
legibility fixed on the light background: solid white fill, darker border
(rgba ink 0.18), ink text at weight 500 (was 60%-white fill + hairline +
ink-soft text); teal AI chips keep the teal accent. «Платежи» chip earlier
replaced with «Production кейсы» (owner: real production tasks over payment
integrations); perk text «от базы данных до платежей и AI» still mentions
платежи — pending owner decision.

### 09 FAQ — accordion (2026-08-18)

Owner chose a clean accordion over the chat concept for now (chat style may
return later). 5 Q&A drafted by agent, pending owner pass: single language
fit (examples mostly TS, transferable), not-a-course (living channel, pick
your topics), time commitment (own pace, chat for questions), direct answers
(1:1, breakdowns, streams), cancellation (any time, no strings). Section
«Вопросы и ответы» between fit and footer, id="faq", added to nav as
«05 FAQ». Native `<button>` + aria-expanded, grid-rows 0fr→1fr animation,
all answers visible without JS, `?faq=open` debug param. `.sec-cta` at the
end like other sections.

### Header nav + per-section CTA (2026-08-18)

Nav pill now lists all sections: 01 Что внутри / 02 Процесс / 03 Автор / 04
Кому подходит / 05 FAQ (ids added: #pipeline, #author, #fit, #faq;
scroll-margin-top 80px everywhere) + compact orange «Получить доступ» button
in the pill → #access («Доступ» menu item removed, button took its role).
Desktop ≥1024px: single row, nowrap, numbers hidden ≤1200px. <1024px:
hamburger opens a fullscreen overlay menu (5 large items + CTA, Escape /
item click / × to close, body scroll locked, `?nav=open` debug param).
Safe-area: `viewport-fit=cover`, pill top offset and overlay paddings use
`env(safe-area-inset-*)` for iPhone notch/Dynamic Island. Every section
(bento, pipeline, author, fit, faq) ends with a quiet `.sec-cta` mono link
«Получить доступ →» → #access (dark variant in bento). ≤480px: nav CTA
hidden (it's in every section anyway), pill = brand + burger only.

QA note (2026-08-18): the `--force-device-scale-factor=1.272` trick does NOT
shrink the CSS viewport in headless Chrome (layout stays at the clamped
500px width; DSF only scales the screenshot). For true 393px QA use
Playwright: `npx --no-install playwright screenshot --viewport-size=393,H
"file://...a2-spec-soft.html?static" out.png`. Earlier "393px" screenshots
were actually 500 CSS px wide. Owner's intent: the button will
lead to purchase later; keep it present in every block. The «кому подходит»
section itself is pending a visual rework (owner researching; candidates:
участника path timeline, vacancy-style spec sheet, signal chip cloud).

### 08 «Кому это подходит» — audience filter (2026-08-18)

Owner dictated the items (sense preserved, wording polished). «Подходит, если
ты:» — 6 items: knows ≥1 language, wants real projects; working developer
growing to the next level; wants AI-first development: agents, approaches and
practices that are increasingly required in real work («которые всё чаще
требуются на реальной работе», owner rejected «держат тебя востребованным»); wants the community and direct contact; wants an
ever-evolving space, not a stale recorded course; not ready to pay 100k+ for
a course, subscription costs tens of times less (implies subscription
pricing). «Не подходит, если ты:» — 3 items: zero programming; needs a strict
sequential program («это не курс»); expects a job guarantee. Two soft cards,
left wider (1.15fr/0.85fr from 900px), orange checks / muted grey crosses,
no red. Between author section and footer.

### 05 «Кто ведёт канал» — author block (2026-08-17)

Owner provided credentials from his SachkovLearn landing and a cutout photo
(processed to `assets/author.webp`/`author.png`, alpha eroded 1px, 839x1200).
Section between pipeline and footer: H2 «Кто ведёт канал», name «Кирилл
Сачков», accent facts line «Software Engineer · 5 лет опыта · 3+ года
менторства» (owner: not «.NET разработчик», channel is not .NET-only),
paragraph on SachkovLearn/YouTube/250+ учеников (owner: «Веду YouTube-канал
по разработке», no «за 3 года»), paragraph tying
Sachkov Inside to his current real-time work, spec stats in Russian
(ОПЫТ 5+ ЛЕТ / МЕНТОРСТВО 3+ ГОДА / УЧЕНИКИ 250+), CTA «Написать мне» → t.me/sachkov_blog,
social icons (Telegram, YouTube @SachkovDev, GitHub KirillSachkov). White card
on the light page, photo on warm gradient, single column below 960px
(breakpoint raised from 769px after owner QA: at 736–785px the two-column
layout blew up the photo block; stacked photo block now has fixed fluid
height clamp(300px, 50vw, 420px), `picture { display: contents }` so the
img is the flex child and height: 100% works).

### 04b Pipeline rework — terminal instead of git-graph (2026-08-17)

Owner disliked the git-graph (merge branch read as noise). Replaced with a
terminal window `sachkov-inside · pipeline`: `$ sachkov pipeline --run`, five
stages appear line by line with ✓ and timings, final `✓ release deployed →
production` with blinking cursor. IntersectionObserver plays the stagger once;
`?static` debug param forces final state for screenshots. Copy edits by owner:
lead «…покрываем весь путь разработки production-продуктов. Наберись опыта,
который важен в коммерческой разработке.»; perk «навыки, которые делают тебя
востребованным на рынке» («двигают карьеру» rejected as AI-slop); community
tile extended (комьюнити, обмен опытом, обратная связь); stack chips:
«TS / Go / C# / Java» (TS first, highlighted orange — backend language is
secondary) + Тестирование, Авторизация и аутентификация, Релиз в продакшен,
AI-разработка (teal, like AI-интеграция).

### 04 Build-блок → «От проектирования до релиза» (2026-08-17)

Owner steered away from «building one product» (there will be standalone
lessons too) toward full production-cycle coverage, with code deliberately
secondary: проектирование и архитектура и AI-first на первом месте.
Implemented as light section `.pipeline` after the bento: H2 «От
проектирования до релиза», vertical git-graph pipeline (проектирование и
архитектура → AI-first разработка → ревью и тесты → CI/CD и деплой → релиз
и мониторинг), 4 benefits (живой продукт не курс / прямой контакт / полный
фуллстек / практика для роста), stack chips (TypeScript, Backend, Frontend,
PostgreSQL, Redis, Kafka, CI/CD, Платежи, AI-интеграция). Old duplicating
«Что попадает внутрь» 01/02/03 section removed; #access anchor moved to the
footer strip. Future block noted by owner: «об авторе» (5-летний опыт),
between Сообщество and the audience filter.

Owner decision: the strip carried no useful information («Private / Telegram /
Weekly / Real work only») and crowded the hero. Removed from the prototype.
If real numbers appear before launch (counts of materials, cadence facts),
a factual strip may return near the access block.

### 03 «Что внутри» — dark bento, first iteration (2026-08-17)

Owner set the block's job: explain what the membership consists of. Visual
concept (my proposal, pending owner's references): dark contrast panel
(ink #16130E, radius 30px) on the light page + bento of 6 tiles with real
artifact miniatures. Tiles: Production-разработка (code) / Работа с
AI-агентами (terminal) / Архитектура проектов (diagram) / Карьера (checklist)
/ Реальная практика (wide, ADR) / Сообщество (chat). Layout: 6-col bento on
desktop, 2 cols at 700–999px, single column on mobile. Owner will send
references; the section will be reworked from them.

Update (2026-08-17, later): owner liked the clay 3D direction. All 6 tiles
now carry generated clay objects (ChatGPT, transparent bg, style-matched to
the hero computer): Production = server, AI-first = robot with "S", Архитектура
= connected modules, Карьера = staircase with flag, Практика = workbench
(wide tile, object right), Сообщество = speech bubbles. Text artifacts (code,
terminal, diagram, checklist, ADR, chat bubbles) removed; their CSS cleaned
up. Assets: `visual/prototypes/assets/tile-*.webp/.png`. Generation prompt
template is fixed for future objects (clay style anchors + isometric 3/4
facing left + transparent background). Eyebrow, lead and tile micro-labels
were removed by owner — only H2 «Что внутри», bold tile titles, descriptions
(15.5–17.5px fluid). Tile title is «Production разработка» (no dash, owner
edit). Tile descriptions after owner pass: AI = harness, скиллы, пайплайны
агентов, проверка работы, решения; Архитектура = бэкенд, фронтенд,
микросервисы, реальные проекты не учебные; Практика = решения, ошибки,
инфраструктура, деплой, практика для production и карьерного роста (no
anglicisms like trade-offs).

### 01 Hero — copy locked (2026-08-17)

- H1: «От разработчика / к Software Engineer.» (two lines, same size, glitch on
  «Software Engineer»).
- Sub (owner's latest edit in the prototype): «Реальные решения и опыт,
  архитектура проектов, AI-first разработка с агентами, разбор production
  кейсов и сообщество.»
- Eyebrow «Private Engineering Access» removed as redundant.
- CTA pair: «Получить доступ» (primary, action still TBD) + «Что внутри».
- Responsive rules settled: object stays right of the text down to 700px
  (columns 1.25fr/0.75fr below 1000px, 1.1fr/0.9fr above), single column below.
  H1 fluid: clamp(30px, 8.4vw, 60px) single-column, clamp(30px, 4.4vw, 52px)
  two-column; both lines nowrap, always 2 lines.
