# Run log: 2026-10-08

| Field | Value |
|---|---|
| Brief | 50 (wave two, `scripts/wave2/50-product-photo-to-lifestyle-image.mjs`) |
| Slug | product-photo-to-lifestyle-image |
| Research file | research/product-photo-to-lifestyle-image.md |
| Output | output/product-photo-to-lifestyle-image.md |
| Body word count | 2,704 with tables, 2,182 prose only (check-draft count; prose includes the six blockquotes and the prompt block) |
| Body char count | 15,222 |
| Status reached | image_ready (steps 0 to 3 done; schedule.csv left to the integrator, per the wave two drafter instructions) |
| Model used at every step | Claude Opus 5.5 for research, drafting and quality; gpt-image-2 at high quality for the image. No cheaper path was offered or taken |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Six claim groups listed at the top of the claims table |
| R2 SERP mapped, four phrasings minimum | yes | Four phrasings, nine results each, three ranking pages read in full |
| R3 primary sources for every number | yes | Amazon and Google Merchant Center help rendered in a logged-out browser; OpenAI, Google and Black Forest Labs documentation fetched; app facts from the help center |
| R4 Chinese-language web searched first | not applicable | The piece is not China related |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Vendor survey figures cut as market claims |
| R6 triangulated, conflicts published as ranges | yes | No conflicting figures on the page; every rule cited to its owner's page |
| R7 research file written before drafting | yes | Written before the first line of body copy |
| R8 reconciled after drafting | yes | Every number traced; two sentences removed (see the research file) |

**Gap statement, one sentence:** Every ranking page sells one tool; none tells
the reader what the engine makers themselves say fails in an edit, runs one
brief across several engines, or ties the finished file to the destination's
own slot and metadata rule.

**Research time spent:** about 70 minutes.

- Figures reused from the ledger: the Amazon G1881 rows (brief 31), re-rendered
  and re-confirmed twice today.
- Claims cut because they could not be sourced: a vendor's seller survey (58
  percent, 12 hours saved), a vendor's per-image photography cost band, a
  10 to 15 second generation time, a "3 to 4 variations" rule.
- Conflicts published as a range rather than a single figure: none needed.
- Captures saved to `research/product-photo-to-lifestyle-image/`: Amazon G1881
  (check 1 text and screenshot, check 2 text), Merchant Center Help 9103186
  (check 1 text and screenshot, check 2 text), OpenAI and Gemini docs text,
  Black Forest Labs Kontext editing page.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification (write the list out)
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- Iteration 1: full draft from the brief and the research file, nine H2s plus
  FAQ, three tables, prompt block, six sourced blockquotes.
- Iteration 2, the ten weaknesses: (1) the Black Forest Labs line overreached
  ("helps on every engine"); (2) "hand retouching rarely survives" had no
  source; (3) the destinations table credited hubStudio as a rule source for
  Instagram; (4) the intro step list and the sections repeated each other in
  identical bold-label rhythm; (5) the QA section ended on a wrap-up of links
  that answered a different question; (6) the opening answer ran 66 words;
  (7) the mask paragraph did not say which part of the mask is editable;
  (8) the "Color" row's "gently" was vague; (9) the light row contradicted
  itself (one direction fixed, direction free); (10) nothing told the reader
  how to reuse the work for the next product.
- Iteration 3: all ten fixed. New H2 "When should you photograph the scene
  instead?" carries the studio and insight references; History and Reuse
  prompt added; mask explained (product solid, background transparent).
- Iteration 4: production review. Added the Create an image help article as a
  fifth internal reference; confirmed every app fact against the help center.
- Iteration 5: removed "engine makers say this outright", "size matters more
  than people expect" and similar stock phrases.
- Iteration 6: zero em dashes; six blockquotes in one format (claim, then
  Source with publisher, page date or "page undated", read date).
- Iteration 7 ran as the **cadence variant**, not the planted-error variant:
  step list rebuilt with uneven entries (one ends without a bold full stop),
  one-line paragraphs set against long ones ("Read the rewrite before you run
  it."), contractions where a reporter would use them. No deliberate errors.
- Iteration 8: check 2 re-fetched every cited URL on 2026-10-08 (Amazon and
  Google Merchant Center re-rendered in a browser, OpenAI, Gemini and Black
  Forest Labs re-fetched); every quoted phrase found again. R8 reconciliation
  written into the research file; two unsourced sentences removed.
- Iteration 9: title 50, meta 148, excerpt 25 words, counted by check-draft.
- Iteration 10: second pass; "There isn't one answer, which is why" split in
  two; "Its makers say so" softened to what the documentation supports.
- Iteration 11: re-read as the practitioner; the label FAQ now cites the
  maker's limit instead of asserting how an engine draws.
- Iteration 12: tables realigned in the source; long lines re-wrapped.
- Iteration 13: five concepts. (a) The packshot print taped behind the same
  bottle on a sunlit shelf, chosen: it shows the before and the after in one
  photograph. (b) A hand holding a white-background print over a real bathroom
  shelf, rejected: hands are the commonest AI tell. (c) A contact sheet of
  scene variants on a desk, rejected: reads as a diagram. (d) A bottle half in
  a white cyclorama and half on stone, rejected: a visual trick, not a
  photograph. (e) A retoucher's monitor with two versions, rejected: screens
  first, people second, against the style guide.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : pause, second AI-undetectable pass
[x] Iteration 10 : second human touch pass
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check
[x] Final        : fold the SEO content into the markdown
```

- Passes 1 to 4: newsroom register held; weaknesses found: the brief section
  claimed "engine makers" in the plural for one maker's statement (fixed to
  "One engine maker spells this out"); the label FAQ asserted a mechanism
  (rewritten to the maker's own limit); the Amazon FAQ answer said "only"
  where the guide is one page among Amazon's rules (scoped to "Amazon's
  product image guide"); a triad in the brief section broken.
- Passes 5, 7, 9, 10: no stock humanizers added; contractions kept to where
  they read naturally.
- Pass 6: zero em dashes in the file, comments included. Straight quotes kept,
  as in every existing draft in `output/`; the publish step sets typography.
- Pass 8 and 17: title 50 of 52, meta 148 of 152, excerpt 25 of 25 words. The
  skill's looser 60 and 156 ceilings were not used.
- Pass 11, hostile reader: freshness cue present in every citation (read
  October 8, 2026); no pricing question left unanswered (the price shows
  before every run; no amount, by rule); engine choice answered with the help
  center's own one-liners, attributed.
- Pass 12: bold-label passages are the step list and the QA checklist; every
  other section is prose. Roughly 30 percent rigid, 70 percent prose.
- Pass 13: grep for seamless, leverage, robust, unlock, elevate, delve,
  comprehensive, navigate: zero.
- Passes 14 to 16: one aside kept ("Read the rewrite before you run it. If
  your keep sentence got shorter, put it back."); no closing flourish at the
  end of sections.
- Pass 18: no repeated humanizer.

## Image

- Prompt used: verbatim from the feature-image block.
- Confirmed the prompt names no real person: yes (Portra 400 is a film stock).
- Attempts: one. Accepted on the first frame.
- AI-tells checklist against the final frame: one window light from the upper
  left, shadows fall right; no faces or hands; no text, the labels are blank;
  stone has pits and a water mark; no identical bokeh; no edge artifacts; the
  print's packshot bottle reads as a photograph on paper.
- Saved to: `public/Images/howto-product-photo-to-lifestyle-image.webp`,
  1536 by 1024, 126 KB (sharp, webp quality 78, no enlargement). The
  intermediate PNG stays in the session scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero. Engine makers are named only as makers of engines offered in the app and as authors of their own documentation; platforms are cited as rule owners |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | six blockquotes, each with a source and a date |

## Sources

- New figures for the ledger: listed under "Ledger additions" below for the
  integrator, with both check dates.
- Rows for the do-not-publish log: listed under "Ledger additions".

## Closed in this run

- First-party figures used: none. App facts come from the help center and
  `hubstudio-positioning.md`.
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: vendor statistics cut; no
  section depends on them.
- Briefs amended: the brief module was written in this run; its Catalog skill
  name follows the help center ("Lifestyle product scene"), not the shorter
  "lifestyle scene" in the piece spec, and the module records that choice.
- Live articles corrected: none needed (see below).
- Rows for `watch.csv`: listed under "Watch rows" for the integrator.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with the
  hero image and the existing localized help captures).
- Runbook substitutions: `check-draft.mjs` hard-codes the insight hero path
  (`public/Images/insight-<slug>.webp`) and so reports one failure on a
  `template: howto` draft. The wave two drafter instructions and the repo's
  how-to convention (`howto-<slug>` images in `src/data/howtos.ts`) set the
  path `public/Images/howto-product-photo-to-lifestyle-image.webp`, which this
  draft uses. The check was run on a scratch copy with only that path swapped:
  every hard check passed. This drafter may not edit shared scripts; the
  check's path rule is reported to the integrator in the final message.
- Integration, 2026-10-08: `check-draft.mjs` now accepts the howto hero path; run on the draft itself, every hard check passes. The runbook substitution above describes the earlier script.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 50, product-photo-to-lifestyle-image)") and watch rows merged into `watch.csv`, sorted by due date.

## Ledger additions

Rows for `sources/verified-sources.md`, both checks on 2026-10-08.

| Figure | Attribution to use | Source | Collected | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Amazon MAIN on pure white RGB 255; lifestyle main allowed for a limited number of product types only; PT01 to PT99 for additional angles and product in use; all images must accurately represent the product and match its title | "Amazon Seller Central, Product image guide, US store, page undated, read October 8, 2026" | sellercentral.amazon.com/help/hub/reference/external/G1881 | read 2026-10-08 | primary, US store | 2026-10-08 | 2026-10-08 | 31, 50 |
| contains-synthetic-performer keyword in dc:subject (XMP) for photorealistic people entirely generated by AI; not when no people appear | Same | Same | read 2026-10-08 | primary, no effective date on the page | 2026-10-08 | 2026-10-08 | 27, 31, 50 |
| Google Merchant Center lifestyle_image_link: optional, up to 5 lifestyle images, minimum 600 x 600, no promotional elements, text, overlays (watermarks, brand names, logos), borders or padding | "Google Merchant Center Help, lifestyle image link attribute, page undated, read October 8, 2026" | support.google.com/merchants/answer/9103186 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 50 |
| Images created with generative AI must contain metadata saying so (for example IPTC DigitalSourceType TrainedAlgorithmicMedia); do not remove it | Same | Same | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 50 |
| GPT Image limitations: text placement and clarity; "may occasionally struggle to maintain visual consistency for recurring characters or brand elements across multiple generations" | "OpenAI image generation guide, the maker's own documentation, page undated, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | primary, the maker on its own model | 2026-10-08 | 2026-10-08 | 50 |
| Mask: "The model uses the mask as guidance, but may not follow its exact shape with complete precision" | Same | Same | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 50 |
| To preserve critical details such as a face or logo in an edit, "describe them in great detail along with your edit request" | "Gemini API image generation documentation, last updated October 6, 2026" | ai.google.dev/gemini-api/docs/image-generation | 2026-10-06 | primary | 2026-10-08 | 2026-10-08 | 50 |
| FLUX.1 Kontext: quotation marks around the specific text are "the most effective way to edit text" | "Black Forest Labs, FLUX.1 Kontext image editing documentation, page undated, read October 8, 2026" | docs.bfl.ml/kontext/kontext_image_editing.md | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 50 |

Do-not-publish rows:

| Claim | Where it came from | Why it did not clear | Checked |
|---|---|---|---|
| 58 percent of sellers finish store-ready images in under five minutes; median 12 hours saved a month | A tool vendor's own seller survey on a ranking page, brief 50 | Market claim by the seller of the tool; method not on the page | 2026-10-08 |
| Product photography at $25 to $500 an image plus $150 to $300 a studio hour | Same page, the vendor's own research | No method | 2026-10-08 |
| Google lifestyle image aspect ratio "between 2:0 and 2:3" | Merchant Center Help 9103186 | Printed as "2:0", reads as a typo on the page; not repeated | 2026-10-08 |
| Gemini image models take up to 14 reference images | Gemini API docs | True for the API, misleading for app users (the app takes up to 4 per edit) | 2026-10-08 |

## Watch rows

```
2027-01-08,product-photo-to-lifestyle-image,"Quarterly recheck of the Amazon rows: re-render sellercentral.amazon.com G1881 and confirm the pure white MAIN rule, the limited lifestyle-main exception, PT01 to PT99 for product in use, and the contains-synthetic-performer wording. If any changed, update the destinations table, the QA list and the FAQ, and move the page's last updated date.",sellercentral.amazon.com/help/hub/reference/external/G1881,2026-10-08
2027-01-08,product-photo-to-lifestyle-image,"Quarterly recheck of the Google Merchant Center lifestyle_image_link page: up to 5 images, 600 x 600 minimum, no text or overlays, and the generative AI metadata rule. If any changed, update the blockquote, the destinations table and the labeling FAQ, and move the page's last updated date.",support.google.com/merchants/answer/9103186,2026-10-08
2027-01-08,product-photo-to-lifestyle-image,"Recheck the engine table (source pictures per edit and the help center's one-liners) against src/content/help/create-an-image.md; engines are added over time. Update the table and the FAQ to match.",src/content/help/create-an-image.md,2026-10-08
```

## Live pages this piece contradicts

None. `/app/create` says some engines take up to four source pictures (the
guide agrees). The Shoot it or generate it insight files lifestyle scenes
under "Generate, around a shot anchor" and texture and performance shots under
"Shoot", which is exactly the guide's last section.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 50 | 52 | yes |
| Meta description | 148 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/howtos.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/how-to/product-photo-to-lifestyle-image`, French address `/fr/ressources/guides-pratiques/d-une-photo-produit-a-une-photo-d-ambiance` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/how-to/product-photo-to-lifestyle-image/` and `.i18n-work/passes/zh/resources/how-to/product-photo-to-lifestyle-image/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass2: « Comment transformer une photo produit en photo d’ambiance | hubStudio » -> « D’une photo produit à une photo d’ambiance | hubStudio » / why: 61 characters down to 54, and the title now matches the French slug.
[meta] pass1 -> pass2: « Faire d’un packshot fournisseur une scène… » -> « Un packshot fournisseur devient une scène d’ambiance crédible… » / why: a verb-led sentence instead of an infinitive label, under 155 characters.
[intro] pass1 -> pass3: « Le décor, c’est la partie facile. Ce qui casse, c’est le produit » -> « Le décor est la partie facile. Ce qui flanche, c’est le produit » / why: spoken « ce qui casse » replaced; pass 2’s « truffée de fautes » overstated « misspelled » and was pulled back.
[answer] pass1 -> pass2: « Considérez le packshot comme la référence à laquelle chaque résultat est comparé » -> « Le packshot sert d’étalon : chaque résultat se juge à son aune » / why: English relative clause turned into a native two-beat sentence.
[steps] pass1 -> pass3: « Choisir la scène en fonction d’un emplacement. Décidez… avant de décider » -> « Partir de l’emplacement. Sachez où l’image paraîtra avant d’en arrêter le contenu : c’est l’emplacement qui dicte les règles » / why: repeated « décider » removed, stronger verb.
[steps] pass1 -> pass2: « Le lancer sur plusieurs moteurs » -> « Multiplier les moteurs » / why: shorter, idiomatic step label.
[table] pass1 -> pass3: « Seulement la chaleur de la lumière, et seulement un peu » -> « Seulement la température de la lumière, et à peine » / why: photographers say température; doubled « seulement » removed.
[table] pass1 -> pass2: « Un seul logo, à sa place, jamais inversé » -> « jamais en miroir » / why: « inversé » is ambiguous in French, « en miroir » is the trade word.
[angle] pass1 -> pass2: « L’angle est le piège… et il en inventera un » -> « Le piège, c’est l’angle… : il l’inventera » / why: native front-loading and a colon in place of « et ».
[destination] pass1 -> pass3: « n’autorise une photo d’ambiance à cet emplacement que pour un nombre limité » -> « n’y admet une photo d’ambiance que pour un nombre restreint » / why: pass 2 repeated « place » twice; lighter and exact.
[source] pass1 -> pass2: « Faites ensuite attention à la taille » -> « Reste la question de la taille » / why: journalistic transition rather than an instruction calque.
[engines] pass1 -> pass2: « Le format du résultat suit la première image » -> « Les proportions du résultat suivent celles de la première image » / why: « format » clashed with file format; the app setting is Cadrage.
[brief] pass1 -> pass3: Google quote « les décrire de façon très détaillée en même temps que la demande » -> « les décrire avec une grande précision, en même temps que la demande de retouche » / why: idiomatic rendering of « in great detail », number agreement fixed (des détails / les).
[prompt example] pass1 -> pass2 -> pass3: imperative tutoiement kept, pass 2 tried infinitives, pass 3 settled on a creative director’s brief: « pose le flacon… sur une tablette de salle de bains en calcaire clair », « bouchon compte-gouttes noir », « Portrait 4:5, vraie photo, pas de retouche glacée » / why: one voice across the three paragraphs, studio vocabulary (tablette, hors champ, retouche glacée).
[BFL] pass1 -> pass3: « les guillemets autour du texte précis sont le moyen le plus efficace » -> « placer le texte visé entre guillemets est le moyen le plus efficace » / why: noun chain turned into a verb phrase.
[skills] pass1 -> pass2: « Elles vous évitent d’écrire… Dès lors, chaque compétence… est prise en compte quand » -> « Elles vous dispensent de recopier… Désormais, chaque fois qu’Améliorer avec l’IA réécrit un prompt, toutes les compétences activées… entrent en jeu » / why: passive removed, placeholders reordered to French word order.
[skills] all passes: skill name uses the app label « Produit en situation » (app fr.json), not the help center’s « Mise en scène lifestyle d’un produit ».
[editor] pass1 -> pass3: « Allez-y doucement dans Ajuster » -> « Dans Ajuster, gardez la main légère » / why: spoken register out.
[QA] pass1 -> pass3: « Ne recomposez pas une étiquette à la main : vous dessineriez le produit au lieu de le montrer » -> « Ne retracez pas à la main les lettres d’une étiquette : ce serait dessiner le produit, et non plus le montrer » / why: exact sense of « letter back in », sharper antithesis.
[QA list] pass1 -> pass3: « Chaque mot orthographié comme à l’impression » -> « Chaque mot reproduit à la lettre » / why: idiom instead of a calque of « as printed ».
[approval] pass1 -> pass3: « Quand la liste est validée… pas d’une zone vide » -> « Une fois tous les points validés… et non d’une page blanche » / why: native idiom for a blank start.
[shoot] pass1 -> pass2: « Quand l’image est l’argument… Photographiez l’image pivot ; générez les scènes qui se répètent » -> « Quand l’image vaut preuve… photographiez l’image de référence, générez les scènes qui se déclinent » / why: « se déclinent » is the French marketing verb for repeated variants.
[FAQ engines] pass1 -> pass3: « Il n’y a pas de réponse unique. C’est pourquoi on en lance plusieurs » -> « Aucun ne s’impose, d’où l’intérêt d’en essayer plusieurs » / why: two flat sentences merged into one.
[FAQ label text] pass1 -> pass3: « Si une lettre revient encore fausse, relancez. Ne la corrigez pas à la main » -> « relancez la génération plutôt que de la corriger à la main » / why: one sentence, no imperative stacking.
[typography] all units: non-breaking spaces before : ; ? % and inside « », 1 536 / 1 080 × 1 350, dates as 8 octobre 2026, typographic apostrophes.

### Chinese changes

Second round (leftovers after the English fixes):

Terms: lifestyle image -> 场景图 (the ecommerce trade word; the app's skill keeps its label 产品生活场景图); packshot -> 产品图; source picture -> 源图; slot -> 投放位; additional image slots -> 附图位.

[title] pass1 -> pass3: 如何把产品图做成场景图 -> 产品图如何做成场景图 / why: shorter, headline order.
[meta] pass1 -> pass2: 不必重拍，就能把……：哪些元素不能动 -> 无需重拍，把……：哪些不能动 / why: drop the 就能 filler, tighter list.
[intro] pass1 -> pass3: 本文介绍的方法，就是让产品保持原样 -> 下面这套方法，要解决的正是如何守住产品原貌 / why: 守住 carries the stakes, no "本文介绍" calque.
[answer] pass1 -> pass3: 这一整套流程，在 hubStudio 一个应用里就能完成 -> 这些步骤，在 hubStudio 一个应用里就能全部完成 / why: lighter close.
[steps] pass1 -> pass3: 按投放位选场景。先定图片投放在哪里，再定画面里放什么 -> 先定投放位，再选场景。决定画面放什么之前，先想清楚图片投到哪里 / why: the bold line states the rule, the body gives the reason without repeating it.
[steps] pass1 -> pass2: 能修的不重跑 -> 无需重跑的，直接修 / why: verb-led, reads like a working rule.
[steps] pass1 -> pass3: 逐项核对，通过后才能交付审批 -> 逐项过关后才交给他人审批 / why: 交付审批 was a noun chain.
[fixed vs scene] pass1 -> pass3: 都可以自由改动 -> 则可以随意重新布置 / why: 布置 is the set-dresser's verb.
[angle] pass1 -> pass3: 用一张正面拍的盒子要它出背面，它就会凭空编一个 -> 拿一张盒子正面照去要背面，它只能凭空编一个出来 / why: native order, 只能 stresses the limit.
[Amazon rule] pass1 -> pass2: 产品使用场景应放在附图位 -> 展示产品使用情景的图片应放入附图位 / why: precise, regulatory register for a quoted rule.
[source photo] pass1 -> pass3: 小字在这个尺寸下就会丢失细节 -> 小字到了这个尺寸，细节就保不住了 / why: verbal, natural rhythm.
[brief] pass1 -> pass3: 有一家引擎厂商把这一点讲得很明白 -> 有一家引擎厂商就把这一点写得明明白白 / why: it is written documentation, and the reduplication is idiomatic.
[prompt example] pass1 -> pass3: 参考所给图片，将图 1 中的精华瓶摆在…… -> 以所给图片为参考：把图 1 的精华瓶放在…… / why: rewritten as a Chinese creative director's shot brief: short clauses, 打入, 出画, 上行/下行 for the label lines.
[prompt example] pass1 -> pass3: 不要光面精修感 -> 不要油亮的精修感 / why: 油亮 is the word retouchers use for the plastic AI look.
[skills] pass1 -> pass3: 点查看详情阅读说明 -> 点查看详情看说明 / why: plainer UI instruction.
[Improve with AI] pass1 -> pass3: 它了解当前任务……它不会改动您的设置 -> 它知道您在做哪类任务……您的设置则一概不动 / why: one flowing sentence instead of three short translated ones.
[engines] pass1 -> pass3: 第一次还在生成时，就可以发起下一次 -> 前一次还在渲染，下一次就能开跑 / why: parallel structure, production slang kept light.
[engine table] pass1 -> pass2: 基于现有照片编辑，速度快、表现稳定 -> 改现有照片，快速而稳定 / why: table cell brevity.
[editor] pass1 -> pass3: 产品周围的问题交给它处理……与原生成图并列 -> 产品以外的部分都交给它处理……与原生成图并排存放 / why: clearer scope, natural verb.
[mask] pass1 -> pass3: 产品部分保持不透明，背景设为透明 -> 产品区域保持不透明，背景留透明 / why: technical register.
[QA] pass1 -> pass3: 形状或标签不合格，图片就退回重跑 -> 形状或标签只要有一项不合格，就退回重跑 / why: makes the either-fails rule explicit.
[QA list] pass1 -> pass3: “调整”中做过的修改也要算进去 -> 用过“调整”的，调完再比一次 / why: concrete action instead of an abstract clause.
[QA list] pass1 -> pass3: 阴影背向光源 -> 阴影朝背光一侧落下 / why: photographer's phrasing.
[shoot instead] pass1 -> pass3: 当图片本身就是卖点的证据时 -> 当图片本身就是卖点的时候 / why: lighter; the next sentence carries the proof idea.
[shoot instead] pass1 -> pass2: 核心画面实拍 -> 主视觉实拍 / why: the trade term.
[FAQ] pass1 -> pass2: 可以做到很接近，剩下的靠检查 -> 可以非常接近，余下的靠核查 / why: written register, 核查 used throughout.
[FAQ] pass1 -> pass3: 花多少余额，每一次都心中有数 -> 扣多少余额，心里都有数 / why: tighter close.
[final read] pass3: 用于 Google 场景图位的 -> 投放 Google 场景图位的文件……且要保留文件中的 AI 元数据; 改动说明 -> 改动清单 / why: a full subject in the QA line, and the list the app shows is a list.

## Publish

- Page created: `src/pages/resources/how-to/product-photo-to-lifestyle-image.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/howtos.ts` entry added at the head; insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
