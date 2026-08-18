# Переносимый playbook: новый лендинг с AI-агентами

## Цель

Спроектировать и собрать новый полноценный лендинг в другом проекте по воспроизводимому процессу: от подтверждённых фактов о продукте и conversion narrative до выбранного визуального направления, production-кода, browser QA и evidence перед публикацией.

## Стадия пайплайна

Текущая стадия — **alignment/discovery до реализации**. В новой сессии начать через `start`; для существующего проекта маршрут обычно продолжится через `grill-with-docs`, а при отсутствии полноценного agent harness — сначала через `project-harness-bootstrap`.

Этот файл — переносимая дорожная карта, а не утверждённая спецификация конкретного лендинга. Продуктовые и визуальные решения остаются за владельцем и должны быть подтверждены уже в целевом проекте.

## Что решено

### 1. Канонический порядок работы

```text
Факты и ограничения
→ product contract
→ copy и conversion narrative
→ 6–10 декомпозированных референсов
→ 3–5 независимых visual directions
→ выбор владельца
→ DESIGN.md
→ один production-writer
→ browser evidence
→ bounded review
→ production metrics
```

Главное правило: агент не должен одним проходом одновременно придумывать продукт, доказательства, структуру, copy, визуальный язык и frontend. Каждый слой опирается на подтверждённый предыдущий слой.

### 2. Фаза 0 — подготовить проект к работе

До обсуждения дизайна новая сессия должна:

1. Прочитать корневой `AGENTS.md`, project docs, tracker contract и команды запуска/проверки.
2. Проверить наличие полноценного harness (`AGENTS.md` и `.harness/harness.lock`). Если его нет — не начинать разработку лендинга, а вызвать `project-harness-bootstrap`.
3. Выяснить, новый лендинг живёт отдельно или внутри существующего продукта.
4. Зафиксировать текущий runtime/deploy boundary: домен, hosting, analytics, формы, API, auth, CMS, shared tokens и компоненты.
5. Создать канонический tracker artifact, если работа нетривиальна, и пройти alignment через `grill-with-docs`.

### 3. Фаза 1 — зафиксировать product contract

До copy, референсов и кода нужно получить короткий проверяемый документ `PRODUCT.md` либо эквивалентную секцию в project spec:

- кто конкретно целевая аудитория;
- какую проблему или job-to-be-done решает продукт;
- какой один результат обещает страница;
- какой основной conversion event: заявка, покупка, регистрация, звонок, waitlist и т. п.;
- какой secondary CTA допустим и зачем;
- какие подтверждённые факты можно публиковать;
- какие proof artifacts реально существуют: продуктовые экраны, кейсы, отзывы, метрики, демо, репозитории, сертификаты;
- какие цена, сроки, ограничения, поддержка и условия подтверждены;
- что пока неизвестно и должно быть помечено как `TBD` или `hypothesis`.

Запрещено правдоподобно выдумывать цифры, отзывы, логотипы клиентов, результаты пользователей, скидки, сроки, product screenshots или условия поддержки.

**Owner checkpoint 1:** владелец подтверждает product contract и conversion event.

### 4. Фаза 2 — собрать copy и conversion narrative

До визуальной полировки подготовить `COPY.md`:

- H1 и короткое обещание результата;
- primary CTA и ожидаемое действие после клика;
- логическую последовательность секций;
- ключевые возражения и честные ответы;
- proof рядом с соответствующими claims;
- условия/offer без скрытых обещаний;
- финальный CTA, согласованный с первым экраном.

Структура страницы выводится из принятия решения пользователем, а не из привычного шаблона `hero → cards → testimonials → FAQ`. Любой CTA обязан вести к реальному действию; fallback без ссылки или формы считается дефектом.

Если текст звучит от лица Кирилла и будет опубликован как его авторский голос — вызвать `natural-text`. Для обычного product/UX copy этот skill автоматически не применяется.

### 5. Фаза 3 — собрать reference pack

Нужно 6–10 реальных референсов, а не длинный промпт из прилагательных. Источники разделяются на три класса:

1. **Как продают:** структура, offer, pricing, proof и порядок блоков.
2. **Как выглядит:** композиция, типографика, воздух, графика и motion.
3. **Как формулируют:** заголовки, CTA и работа с возражениями.

Каждый референс получает одну или несколько функций:

- `structure`;
- `typography`;
- `product presentation`;
- `motion`;
- `proof`;
- `mobile behavior`.

Для каждого примера записать:

- URL оригинала;
- desktop и mobile screenshot;
- какой один принцип можно взять;
- почему он подходит этой аудитории;
- что копировать нельзя;
- ограничения лицензии для шрифта, изображения, иллюстрации и copy.

Рекомендуемая переносимая структура:

```text
references/<site-name>/
├── source.md
├── desktop-1440.png
├── mobile-393.png
├── page.html
├── structure.json
├── styles.json
├── assets.md
├── motion.md
└── analysis.md
```

Галерея служит discovery, а локальный pack — evidence: live-сайты меняются и ссылки протухают. Playwright подходит для screenshots и DOM extraction; SingleFile — для faithful HTML после ручного открытия anti-bot страницы.

Полезные категории источников:

- conversion/sections: Land-book, Lapa Ninja, Landingfolio, Saaspo Sections, SaaSFrame, SaaSUI, Referest;
- visual direction: Recent.design, siteInspire, One Page Love, Httpster, Minimal Gallery;
- copy: Marketing Examples, Swiped, Swipefile;
- components как сырьё, не как art direction: 21st.dev, Aceternity UI;
- design-system references: Refero Styles.

Нельзя клонировать один сайт целиком. Итоговое направление собирается из нескольких источников, каждый из которых отвечает за свою функцию.

### 6. Фаза 4 — сравнить visual directions

До полной страницы создать **3–5 независимых направлений** на одном `PRODUCT.md` и `COPY.md`. Варианты не должны видеть результаты друг друга и должны получать разные наборы референсов.

Scope каждого направления ограничить:

- navigation;
- desktop hero;
- mobile first screen;
- primary/secondary CTA;
- первый proof-блок;
- одна signature-секция;
- reduced-motion state.

Сравнивать направления рядом, в одинаковых desktop/mobile frames. Направление считается недостаточно характерным, если hero нельзя отличить от вариантов без product label.

**Owner checkpoint 2:** владелец выбирает одно направление либо явно отклоняет все. Production-код до этого решения не строится.

### 7. Фаза 5 — сделать `DESIGN.md` визуальным authority

После выбора направление фиксируется в project-local `DESIGN.md`. `AGENTS.md` должен требовать читать его перед созданием, изменением и review пользовательских страниц.

Минимальное содержание `DESIGN.md`:

- visual thesis и signature concept;
- approved screenshots/prototype links;
- color, typography, spacing, grid, radii и surface tokens;
- component contracts, а не случайный каталог карточек;
- desktop/mobile composition;
- responsive breakpoints и правила перестройки;
- focus, contrast и accessibility contract;
- motion grammar и reduced-motion state;
- правила для реальных/generated assets и provenance;
- approved patterns;
- запрещённые generic AI patterns;
- отклонённые решения и причина отказа.

Project-local `DESIGN.md` выше по авторитетности универсального design skill: skill помогает думать, но не должен переопределять уже выбранное направление.

### 8. Фаза 6 — выбрать стек по границе продукта

#### Вариант A: отдельный standalone marketing site

Рабочий default: **Astro + TypeScript**, static output, semantic HTML/CSS и точечные interactive islands. Astro по умолчанию отдаёт компоненты как HTML/CSS без client JavaScript и гидратит только явно отмеченные islands: [официальная документация Astro](https://docs.astro.build/en/concepts/islands/).

Выбирать этот вариант, если лендинг:

- не разделяет auth/runtime с основным приложением;
- в основном состоит из контента и простых форм;
- должен дешёво размещаться как static site;
- не требует тяжёлого client state.

#### Вариант B: лендинг внутри существующего приложения

Использовать **существующий framework, tokens, analytics, catalog/API и deploy pipeline**. Не создавать второй frontend stack только ради лендинга.

Если проект уже на Next.js App Router, разумный baseline — Server Components по умолчанию, а Client Components только для локальной интерактивности. Next.js прямо рекомендует держать client boundary узким, чтобы уменьшать client JavaScript: [официальная документация Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components).

#### Общий static-first baseline

- semantic HTML;
- обычный CSS/project-native styling;
- inline SVG для схем и signature graphics;
- AVIF/WebP с явными dimensions;
- LCP asset не lazy-load;
- JavaScript только там, где есть реальная интерактивность;
- CSS transitions/keyframes и progressive enhancement для motion;
- `prefers-reduced-motion` показывает законченное статичное состояние;
- смысловой текст, CTA, offer и карточки видимы без viewport-trigger animation.

Не добавлять Motion/GSAP/Lenis, WebGL/Three.js/Spline, canvas, cursor tracking, autoplay video или animation library ради одного reveal без доказанной продуктовой необходимости и отдельного performance experiment.

### 9. Фаза 7 — реализовать с одним production-writer

Research, reference extraction, независимые prototypes, critique и QA можно распараллеливать. Production-файлы одновременно меняет **один builder**.

Остальные агенты:

- работают read-only;
- возвращают findings и evidence;
- либо используют отдельные prototype branches/worktrees;
- не смешивают несколько конкурирующих design directions в production-коде.

Builder реализует сверху вниз по conversion path, сначала статический смысловой baseline, затем responsive, accessibility и только затем оправданный motion/polish.

### 10. Фаза 8 — провести browser QA

Screenshot сам по себе не является доказательством. Browser evidence объединяет четыре слоя:

1. visual screenshots;
2. DOM/accessibility snapshot;
3. console/network;
4. реальные interactions.

Минимальные viewport:

- `393x852` — основной mobile;
- `768x1024` — tablet/narrow layout;
- `1440x1000` — desktop;
- `320px` — дополнительный stress test для длинного русского copy и узкой навигации.

Минимальный проход:

- full-page и above-the-fold screenshots;
- primary и secondary CTA;
- navigation, anchors, forms и error/success states;
- keyboard navigation, visible focus и Escape там, где ожидается;
- контраст, touch targets и semantic headings;
- normal и reduced motion;
- длинные строки/цены/метрики;
- отсутствие horizontal overflow и floating overlays поверх контента;
- отсутствие failed requests и console errors;
- корректные metadata, canonical, OG, robots/sitemap и уместные structured data;
- изображения без layout shift и с корректными dimensions.

Повторяемые критичные сценарии закрепляются Playwright checks/visual comparisons; exploratory browser inspection остаётся источником новых дефектов. Playwright поддерживает screenshot comparison как отдельный тестовый механизм: [официальная документация Playwright](https://playwright.dev/docs/test-snapshots).

### 11. Фаза 9 — bounded visual review

Отдельный read-only critic получает:

- `PRODUCT.md`;
- `COPY.md`;
- `DESIGN.md`;
- reference pack;
- desktop/mobile screenshots;
- browser evidence.

Цикл ограничен:

1. один объединённый review с приоритетами;
2. один fix batch от production builder;
3. одна confirmation-проверка.

Critic отдельно перечисляет решения, которые менять не нужно. Если после confirmation pass страница всё ещё слаба концептуально, команда возвращается к visual direction, а не запускает бесконечные запросы «сделай красивее».

### 12. Quality gates перед публикацией

Лендинг готов к owner review, когда:

- claims подтверждены и proof не выдуман;
- основной conversion event работает end-to-end;
- выбранное направление соблюдено в desktop и mobile;
- semantic content видим без JS и до animation trigger;
- reduced motion показывает полноценную композицию;
- нет horizontal overflow, перекрывающих overlays и тупиковых CTA;
- keyboard/focus/contrast/accessibility проверены;
- build, lint и project-specific checks зелёные;
- приложены browser screenshots и interaction evidence;
- SEO/metadata проверены на production-like preview;
- production p75 ориентиры: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Это именно field/production цели на 75-м перцентиле, а не обещание на основе local dev-run: [официальные Web Vitals](https://web.dev/articles/vitals).

После реализации применить проектный delivery/report contract. Merge/release/publish остаются отдельным owner-controlled решением, если проектный harness не задаёт иной явно подтверждённый режим.

### 13. Рекомендуемый skill route

Для нового лендинга:

```text
start
→ project-harness-bootstrap (только если harness отсутствует/неполон)
→ grill-with-docs
→ research-engine (claims и reference discovery по необходимости)
→ modern-web-guidance
→ frontend-design
→ owner chooses visual direction
→ implementation skill проекта
→ impeccable critique
→ impeccable polish
→ web-design-guidelines
→ playwright
→ project-task-report
```

Уточнения:

- `frontend-design` — для нового visual direction;
- `redesign-existing-projects` используется вместо него, если работа окажется редизайном существующего сайта;
- `better-interface` — отдельный holistic read-only audit, не второй аудит того же scope параллельно с `impeccable critique`;
- `imagegen` — только когда действительно нужны generated bitmap assets; сохранять prompt/model/provenance и не выдавать generated UI screenshot за реальный продукт;
- `natural-text` — только для авторского голоса Кирилла, не для обычного product/UX copy.

### 14. Канонические источники в sachkov-os

- `/Users/dev/Work/sachkov-os/notes/series-ai-first-landing-workflow.md` — входная серия и порядок работы.
- `/Users/dev/Work/sachkov-os/wiki/agentic-static-landing-design-system.md` — compiled stack, static-first, motion и gates; страница имеет статус `hypothesis`, поэтому проектные детали нельзя переносить вслепую.
- `/Users/dev/Work/sachkov-os/wiki/landing-references.md` — классы и каталоги референсов, архивация и tagging.
- `/Users/dev/Work/sachkov-os/notes/design-components-and-reference-sources.md` — структура локального reference pack.
- `/Users/dev/Work/sachkov-os/notes/public-frontend-design-skill-pack.md` — последовательность frontend skills.
- `/Users/dev/Work/sachkov-os/wiki/interface-review-agent-skills.md` — границы между audit, design, implementation и post-implementation review.

### 15. Открытые вопросы для целевого проекта

Новая сессия не должна угадывать ответы:

- это standalone landing или route существующего приложения;
- кто аудитория и какой один conversion event главный;
- какие claims, offer, цена, сроки и ограничения подтверждены;
- какие реальные proof artifacts разрешено публиковать;
- кто владеет copy и кто может его утвердить;
- нужны ли CMS, локализация, auth, payments, CRM, analytics и A/B testing;
- где preview/production и кто даёт go/no-go на публикацию;
- какие brand assets, fonts и лицензии уже существуют;
- какой current framework и design system уже обязателен в проекте.

## Что дальше

1. Перенести этот файл в контекст новой сессии и указать путь целевого репозитория.
2. Попросить агента сначала прочитать `AGENTS.md`, docs, tracker contract и текущий frontend — без кода и без финальных дизайн-решений.
3. Если harness отсутствует, пройти `project-harness-bootstrap`.
4. Через `start`/`grill-with-docs` собрать ответы на открытые вопросы и зафиксировать `PRODUCT.md`/spec.
5. Утвердить copy и conversion narrative.
6. Собрать reference pack и показать 3–5 сопоставимых visual directions.
7. После выбора владельца создать `DESIGN.md`, выбрать стек по product boundary и только затем переходить к implementation.
8. Завершить работу browser evidence, bounded review, production-like metrics и owner go/no-go.

## Suggested skills

- `start` — определить корректный проектный маршрут.
- `project-harness-bootstrap` — только если в целевом repo нет полного harness.
- `grill-with-docs` — провести alignment на фактах существующего проекта до spec и кода.
- `research-engine` — проверить market claims и подобрать источники/референсы, когда это требуется.
- `modern-web-guidance` — сверить актуальные HTML/CSS/browser/performance практики перед реализацией.
- `frontend-design` — создать одно контекстное визуальное направление нового интерфейса.
- `impeccable` — выполнить critique и polish во время реализации.
- `web-design-guidelines` — независимо проверить готовый UI-код.
- `playwright` — снять browser evidence на целевых состояниях и ширинах.
- `project-task-report` — оформить каноническое evidence-backed завершение проектной работы.

## Стартовая фраза

> Мы начинаем новый лендинг в репозитории `<ПУТЬ_К_ПРОЕКТУ>`. Текущая стадия — alignment/discovery до реализации. Прочитай переносимый playbook `/var/folders/1j/ppfpljkd1zd7xngw0xs8jf_h0000gn/T/handoff-new-landing-playbook-2026-08-15.md`, затем корневой `AGENTS.md`, project docs и tracker contract. Вызови `start`; если harness отсутствует — сначала `project-harness-bootstrap`, иначе продолжи через `grill-with-docs`. Пока не пиши код и не фиксируй продуктовые или визуальные решения без моего подтверждения: сначала собери реальные инварианты и задай мне первый вопрос с рекомендацией через native structured question UI.
