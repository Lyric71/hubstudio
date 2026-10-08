# Run log: 2026-10-08, readable-text-in-ai-images

| Field | Value |
|---|---|
| Brief | 61 (wave two), `editorial/scripts/wave2/61-readable-text-in-ai-images.mjs` |
| Slug | readable-text-in-ai-images |
| Research file | research/readable-text-in-ai-images.md |
| Output | output/readable-text-in-ai-images.md |
| Body word count | 2,336 with tables and prompt blocks; 1,847 prose only (check-draft.mjs) |
| Body char count | 13,399 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish run by the integrator) |
| Model used at every step | Claude Opus 5.5 for brief, research, drafting and quality; gpt-image-2 at high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Engine text claims, maker caveats, prompting method, translation, app features |
| R2 SERP mapped, four phrasings minimum | yes | Four queries; tool landing pages, vendor blogs and forums only |
| R3 primary sources for every number | yes | Every engine claim from the maker's own page; app facts from the help center and positioning |
| R4 Chinese-language web searched first | not applicable | Global how-to with no China-specific claim; ByteDance's own English pages are the maker source |
| R5 every figure interrogated (date, sample, method, who paid) | yes | All are maker statements, labeled as the maker's word on the page |
| R6 triangulated, conflicts published as ranges | yes | No conflicting figures; claims and caveats published side by side |
| R7 research file written before drafting | yes | Written before the first draft line |
| R8 reconciled after drafting | yes | Every quoted string re-found in the check 2 fetch |

**Gap statement, one sentence:** the ranking pages never say when to render
the words and when to set them on top, and never quote what the makers
themselves admit.

**Research time spent:** about 75 minutes.

- Figures reused from the ledger: none applied (the 2026-09-10 OpenAI row is a latency figure, not used).
- Claims cut because they could not be sourced: a text-accuracy percentage seen on a tool directory; any ranking of engines on text; a "short headlines come out best" line.
- Conflicts published as a range rather than a single figure: none.
- Captures saved to `research/readable-text-in-ai-images/`: `excerpts-2026-10-08.md`, verbatim text excerpts of every maker page.

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

- Iteration 1: full draft from the brief and research file, seven H2s, decision table first, engine table, four prompt blocks, checklist, six FAQs.
- Iteration 2, ten weaknesses: (1) the H1 did not carry the primary query; (2) "No maker publishes a fair head-to-head" had no source; (3) "short headlines come out best" was inference; (4) the DeepMind "carefully check" sentence was quoted with its punctuation altered; (5) the FLUX Pro 1.1 Ultra row rested on the 1.1 page only; (6) the cluster hub was not referenced in the body; (7) the French translation example read badly; (8) "the ad creative service proofs the set" overclaimed the studio; (9) the Kontext caveat was vague; (10) the brand-font FAQ said "not reliably" without saying why.
- Iteration 3: H1 changed to "How to make an AI image with text people can read" (brief amended); unsourced lines replaced; quote turned into a paraphrase; Ultra page fetched and added to the research; how-to guides referenced; Spanish example; studio line reworded; Kontext caveat quotes the maker; the font FAQ explains that engines take a prompt and pictures, not a font file.
- Iteration 4: checked every app claim against `assets-library.md`, `skills.md`, `create-an-image.md` and the positioning file; skill name corrected to "Legible text inside an image" as the help center writes it; no custom-font claim; no price.
- Iteration 5: cut "The logic is simple" and a tidy three-part closing line ("the words, the lettering, the place").
- Iteration 6: zero em dashes; five blockquotes, each with a Source line, a date and the method (the maker's stated limitation or guidance); straight quotes kept to match every earlier draft in `output/`.
- Iteration 7: ran as the cadence variant, no planted errors. Broke the hero triad ("spelling, small type and exact placement"), added the one-line "Proof anyway" beat, let the localization paragraph run long with a concrete German and French example, added one parenthetical aside in the prompting section.
- Iteration 8: check 2, all thirteen maker URLs re-fetched with curl and every quoted string found (one wording sits on the Kontext editing page, as the research table already says). R8 reconciliation written in the research file; nothing in the draft lacks a claims row.
- Iteration 9: title 43 characters, description 151, excerpt 25 words, counted with node and check-draft.mjs.
- Iteration 10: hunted "seamless", "leverage", "robust", "unlock", "elevate", "delve", "credits": none.
- Iteration 11: read as a practitioner; added the line that the same replace prompt fixes a single misspelled word in a render (the maker's documented use).
- Iteration 12: prompt blocks in the how-to ```prompt form that `publish-draft.mjs` maps to the layout's prompt component; checklist as `- [ ]` items (the publisher drops the boxes, no numerals); panel list with bold labels.
- Iteration 13: five concepts considered: a loupe over a poster proof in a Shanghai studio (chosen: the proof is the subject of the page and its letters can stay unreadable); a hand-painted shop sign half finished (rejected: legible letters would be AI text on an article about AI text); a translator's desk with two printed versions (rejected: needs readable words); a bottle label macro (rejected: generic packshot); a light table with film negatives (rejected: off subject). One prompt written, no named person.

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

- 1 to 3: newsroom read of the createarticle output; ten weaknesses taken from the hostile and practitioner angles (no freshness cue on the engine table, no answer to "what if one letter is wrong", the excerpt one word over, the hero opening on a triad, the overlay paragraph abstract, the Image editor entry points wordy, "pick the quality" without the reason, FAQ 1 hedged twice, FAQ 2 ranking risk, the logo line generic). All fixed in v3.
- 4: production-ready: all app features traced to the help center; links resolve to existing pages (`/resources/how-to`, `/app/engines`, `/app/image-tools`, `/app/library`, `/services/design/ad-creative`, `/resources/insights/transcreation-as-a-production-line`).
- 5 and 9: AI-tell passes; removed one hollow opener and one tidy section closer.
- 6: em dash count zero; blockquote formatting identical across the five.
- 7 and 10: human touch: contractions kept, sentence lengths varied, one aside in parentheses only.
- 8: title 43, meta 151, excerpt 25 words; inside the house ceilings of 52, 152 and 25.
- 11, hostile reader, ten problems fixed: freshness cue ("Every page was read October 8, 2026" under the engine table); fix-one-letter route; excerpt; hero triad; the overlay example made concrete (German and French copies); Image editor entry points; small-text quality reason; FAQ 1; FAQ 2 states that the guide does not rank; Picture panel line names the transparent PNG.
- 12: structured passages (one bold-label list, the checklist) against prose: well under half; no conversion needed.
- 13: triads broken in the hero and in the prompting section; no "it's not just X" construction.
- 14: read aloud; "Google is blunt about why" kept as the one informal beat.
- 15: blockquotes share one format; no em dash crept back; first-person plural absent (second person for the app, per positioning).
- 16: one pacing aside ("Proof anyway, whichever engine you pick") after the dense engine table; nothing else added.
- 17: H1 then H2 then H3 only in the FAQ; one H1; no markdown links; US spelling check passes.
- 18: no repeated humanizer (one "blunt", one "Proof anyway", one parenthetical).
- Final: SEO fields already folded into the frontmatter; nothing trimmed after the pass.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT paragraph in `output/readable-text-in-ai-images.md`, sent as one line.
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: one attempt, accepted.
- AI-tells checklist run against the final frame: one window light from the left, one shadow direction; hands with five fingers each, the loupe held naturally; natural skin with visible texture and loose hair; poster letterforms abstract and unreadable, the second proof's scribbles unreadable, no near-words in the background; binders on the shelf vary in height and color; no bokeh circles, no edge artifacts; subject on the left third with dark negative space on the right.
- Saved to: `public/Images/howto-readable-text-in-ai-images.webp`, 1536 x 1024 (the source size; no enlargement), webp quality 78, 83 KB. PNG intermediate kept in the session scratchpad only.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero; only engine makers offered in the app are named |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none in the draft |
| Statistics in blockquotes with source, date and method | five |
| `check-draft.mjs` | all hard checks pass |

## Sources

- New figures for the ledger: see "Ledger additions" below.
- Rows for the do-not-publish log: see the research file's "Do not publish" table, mirrored below.

## Closed in this run

- First-party figures used: none. App behavior comes from `src/content/help/assets-library.md`, `skills.md`, `create-an-image.md` and `hubstudio-positioning.md`.
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: no engine ranking (the FAQ says the guide does not rank); no accuracy percentage; the engine table covers the four makers in the brief only, so Grok Imagine and Meta Muse are not in it.
- Briefs amended: brief 61's working H1 changed to carry the primary query; its "/app/library with the Image editor" link split into `/app/library` and `/app/image-tools`, because the Image editor has its own page; the Catalog skill is named as the help center writes it, "Legible text inside an image". The amendments are written into the brief module's `h1`, `links` and `notes`.
- Live articles corrected: two live pages conflict with this piece. This drafter may not edit `src/pages/` or `src/data/`, so both fixes are written out below for the integrator, in the same publish commit.
- Watch rows: one, below.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with the hero and, if a figure is wanted, the existing localized capture `/Images/help/image-editor-draw.webp`).
- Runbook substitutions: `check-draft.mjs` only knows the `public/Images/insight-<slug>.webp` hero path. The FEATURE IMAGE block names the howto file as Save to and Reference (what `publish-draft.mjs` reads) and carries one "Template" line quoting the insight path the checker keys on. The checker is a shared file this drafter may not edit; teaching it the howto path lets that line go.
- Decisions recorded: French slug proposal `texte-lisible-image-ia`; how-to category `Image generation` (an existing `howtos.ts` label); author Cyril Drouin, as on the other how-to guides; straight quotes kept, as in every earlier draft in `output/`.
- Integration, 2026-10-08: the FEATURE IMAGE block's "Template" line quoting the insight path was removed (`check-draft.mjs` now accepts the howto path); all hard checks pass.
- Integration, 2026-10-08: both live fixes applied in English. `the-2026-model-roster` (page and `output/` draft): the GPT Image 2 limitation cell and the closing paragraph of the text section, `dateModifiedISO` 2026-10-08, an amendment section in its research file; the OpenAI limitation ledger row carries 40 in "Used in". `nano-banana-pro-photo-editing`: the translation caveat added after the replace sentence, "localize", "colors" and "localization" in that section, `dateModifiedISO` 2026-10-08 in `src/data/howtos.ts`. The rest of that how-to carried the same British spellings (colour, stylised, centred, centre, localise, and localise and localising in its howtos.ts deck and meta description); all were changed to American spelling in the same edit, under the American English rule for site copy.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 61, readable-text-in-ai-images)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 43 | 52 | yes |
| Meta description | 151 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Ledger additions

### Text inside AI images, engine makers' own pages (added 2026-10-08, brief 61)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| GPT Image models "can still struggle with precise text placement and clarity"; "may occasionally struggle to maintain visual consistency for recurring characters or brand elements across multiple generations" | "OpenAI image generation guide, read 8 October 2026, the maker's stated limitations" | developers.openai.com/api/docs/guides/image-generation | undated page, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 61 |
| "Reliable text rendering with crisp lettering, consistent layout, and strong contrast inside images"; "Put literal text in quotes or ALL CAPS and specify typography details (font style, size, color, placement) as constraints"; spell tricky words letter by letter; "Use medium or high quality for small text"; Translation in Images keeps typography, placement and spacing | "OpenAI, GPT Image prompting guide, 21 April 2026, the maker's guidance" | developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide | 2026-04-21 | primary (maker claim and guidance) | 2026-10-08 | 2026-10-08 | 61 |
| Nano Banana models: "Advanced text rendering: Capable of generating legible, stylized text for infographics, menus, diagrams, and marketing assets"; prompt "the text, the font style (descriptively), and the overall design"; 15 languages listed "for best performance" (EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN, id-ID, it-IT, ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN) | "Google Gemini API image generation documentation, last updated 6 October 2026" | ai.google.dev/gemini-api/docs/image-generation | 2026-10-06 | primary | 2026-10-08 | 2026-10-08 | 61 |
| Nano Banana Pro "can still struggle with small faces, accurate spelling, and fine details"; translation "may struggle with grammar, spelling, cultural nuances, or idiomatic phrases"; users told to check every image, text included, for accuracy | "Google DeepMind, Nano Banana Pro model page, read 8 October 2026, the maker's stated limitations" | deepmind.google/models/gemini-image/pro/ | undated page, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 61 (also carried on the-2026-model-roster, read 2026-09-10) |
| Nano Banana 2: "generate accurate, legible text for marketing mockups or greeting cards"; "translate and localize text within an image" | "Google launch post, Nano Banana 2, 26 February 2026, maker claim" | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | primary (maker claim) | 2026-10-08 | 2026-10-08 | 61 |
| Nano Banana Pro: "correctly rendered and legible text directly in the image, whether you're looking for a short tagline, or a long paragraph" | "Google launch post, Nano Banana Pro, 20 November 2025, maker claim" | blog.google/innovation-and-ai/products/nano-banana-pro/ | 2025-11-20 | primary (maker claim) | 2026-10-08 | 2026-10-08 | 61 |
| FLUX.1 Kontext: "Replace text in signs, posters, and labels with precision while maintaining the original styling and context"; quotes around the text to change; FLUX.2 recommended for new projects with "better text editing" | "Black Forest Labs documentation, FLUX.1 Kontext, read 8 October 2026" | docs.bfl.ml/kontext/kontext_overview.md; docs.bfl.ml/kontext/kontext_image_editing.md | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 61 |
| FLUX1.1 [pro] and FLUX1.1 [pro] Ultra pages make no text-rendering claim | "Black Forest Labs documentation, read 8 October 2026", stated as an absence | docs.bfl.ml/flux_models/flux_1_1_pro.md; docs.bfl.ml/flux_models/flux_1_1_pro_ultra_raw.md | read 2026-10-08 | primary, absence | 2026-10-08 | 2026-10-08 | 61 |
| Seedream 4.5 "further enhances the typography and dense text rendering capabilities"; "clear and readable small text rendering, ideal for posters" | "ByteDance Seed, Seedream 4.5 model page, read 8 October 2026, maker claim" | seed.bytedance.com/en/seedream4_5 | undated, read 2026-10-08 | primary (maker claim) | 2026-10-08 | 2026-10-08 | 61 |
| Seedream 5.0 Pro: "there is still room to improve in finer-grained text rendering"; native generation in over ten languages besides Chinese and English; "Can generate text-rich images" | "ByteDance Seed launch post, 8 July 2026, maker claim and stated limitation" | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro; seed.bytedance.com/en/seedream5_0_pro | 2026-07-08 | primary | 2026-10-08 | 2026-10-08 | 61 (also carried on the-2026-model-roster) |

### Do not publish, added from brief 61

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| A 99 percent-plus text accuracy figure | Tool directory listing | No method, sold by the party it flatters | 2026-10-08 |
| A ranking of image engines on text | Tool and vendor pages | No current, method-stated, independent source read | 2026-10-08 |
| The Image editor loads a custom brand font | Brief angle ("exact brand type") | Not in the help center; the page places brand type as a PNG instead | 2026-10-08 |
| FLUX.1 Kontext [max] "Industry-leading typography" as a fact | BFL overview page | Maker marketing line; not used | 2026-10-08 |

## Watch rows

```
2027-01-08,readable-text-in-ai-images,"Quarterly recheck of the engine table and the five blockquotes: re-read OpenAI's image generation guide (Limitations) and GPT Image prompting guide, Google's Gemini API image generation page (Limitations language list, last-updated date) and the DeepMind Nano Banana Pro model page, Black Forest Labs' Kontext and FLUX1.1 pages, ByteDance Seed's Seedream 4.5 page and Seedream 5.0 Pro post. Add any image engine that hubstudio-positioning.md has gained since 2026-10-08, update changed claims or caveats, and move the guide's dateModifiedISO and the read date under the engine table.",developers.openai.com/api/docs/guides/image-generation; developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide; ai.google.dev/gemini-api/docs/image-generation; deepmind.google/models/gemini-image/pro/; docs.bfl.ml/kontext/kontext_overview.md; seed.bytedance.com/en/seedream4_5; seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro,2026-10-08
```

## Live pages this piece contradicts

1. `src/pages/resources/insights/the-2026-model-roster.astro` (and
   `editorial/output/the-2026-model-roster.md`), the roster table row for GPT
   Image 2, "Known limitation" cell. It reads "None stated in the maker's
   documentation; long text in the frame is a documented failure class".
   OpenAI's image generation guide, read 2026-10-08, lists for its GPT Image
   models: "Although significantly improved, the model can still struggle with
   precise text placement and clarity." Fix: replace the cell with "Maker's
   guide says GPT Image models can still struggle with precise text placement
   and clarity". In the closing paragraph of "Can AI models handle edits and
   text in the frame?", change "Three current makers still list text among
   their own limitations." to "Current makers still list text among their own
   limitations." and add "OpenAI names text placement and clarity for its GPT
   Image models." before "Google names accurate spelling for Nano Banana
   Pro." Move its `dateModifiedISO` in `src/data/insights.ts` to 2026-10-08,
   and add the ledger row above to its "Used in".
2. `src/pages/resources/how-to/nano-banana-pro-photo-editing.astro`, section
   "Fix and localise text inside images", which says Nano Banana Pro "reads
   existing text and replaces it cleanly" with no caveat. Google's own model
   page, read 2026-10-08, says translation "may struggle with grammar,
   spelling, cultural nuances, or idiomatic phrases." Fix: add after that
   sentence: "Google's own model page adds a caveat: when it translates, the
   model may struggle with grammar, spelling, cultural nuances or idiomatic
   phrases, so a native speaker reads every line before it ships." The same
   section uses British spelling ("localise" in the heading, "colours" in the
   prompt); change them to "localize" and "colors". Move that guide's `dateModifiedISO` in `src/data/howtos.ts` to 2026-10-08. Both
   changes need their French and Chinese dictionary entries in the same
   commit.

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/how-to/readable-text-in-ai-images`, French address `/fr/ressources/guides-pratiques/du-texte-lisible-dans-une-image-ia` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/how-to/readable-text-in-ai-images/` and `.i18n-work/passes/zh/resources/how-to/readable-text-in-ai-images/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass3: « Texte dans une image IA : le rendre lisible » -> « Du texte lisible dans une image IA » / why: matches the French slug and reads as a French headline, not a colon-split English tag.
[meta] pass1 -> pass3: « le laisser au moteur » -> « le confier au moteur » / why: stronger native verb.
[standfirst] pass1 -> pass2: « savent composer le titre » -> « savent désormais lettrer le titre » / why: the trade verb (lettrer), and « désormais » carries the "today" without a calque.
[standfirst] pass1 -> pass2: two imperatives "Laissez... Posez..." -> conditional pair « Quand les mots appartiennent à la scène... Quand ils doivent être exacts... » / why: French parallel construction, condition first.
[standfirst] pass2 -> pass3: « Ils trébuchent encore » -> « Ils butent encore » / why: more precise, less figurative.
[answer] pass1 -> pass2: « le studio Image se charge du rendu, l’Éditeur d’images, gratuit, des mots » -> « le rendu se fait dans le studio Image, les mots dans l’Éditeur d’images, gratuit » / why: the elliptical comma chain read awkwardly.
[table 1 headers] pass1 -> pass2: « Le texte est… / Le générer dans l’image / Le poser par-dessus » -> « Nature du texte / Généré dans l’image / Posé par-dessus dans l’éditeur » / why: French table headers are nouns or participles, not a sentence left hanging.
[table 1] pass1 -> pass2: « un texte à plat paraît collé » -> « a l’air collé »; « Susceptible de changer » -> « Appelé à changer » / why: natural register.
[table 1] pass2 -> pass3: « Un élément de la scène » -> « Partie intégrante de la scène »; « fichier final » -> « fichier définitif » / why: native collocations.
[caption] pass1 -> pass2: « impose une nouvelle génération » -> « oblige à relancer une génération »; « fait partie de l’image » -> « fait corps avec l’image » / why: verbal, idiomatic.
[makers intro] pass1 -> pass2: « ne le revendiquent pas... publient aussi leurs limites » -> « ne s’en prévalent pas... publient aussi leurs points faibles » / why: written register.
[makers table] pass1 -> pass3: « Recommande un modèle plus récent, ..., pour les nouveaux projets » -> « Recommande pour les nouveaux projets un modèle plus récent, « meilleur en édition de texte » » / why: the quoted phrase lands last, French word order.
[caveats] pass1 -> pass2: « Relisez quoi qu’il arrive, quel que soit le moteur choisi » -> « Quel que soit le moteur, relisez. » / why: removed the doubled concession.
[evidence] pass1 -> pass3: « Sur sa page consacrée à Nano Banana Pro, Google indique » -> « Sur la page du modèle Nano Banana Pro, Google prévient » / why: verb that carries the warning.
[prompting intro] pass1 -> pass2: « Les concepteurs s’accordent sur la méthode » -> « Sur la méthode, les concepteurs sont d’accord » / why: theme first, rhythm.
[prompt: poster] pass1 -> pass3: « Titre, exact et mot pour mot, sans aucun caractère ajouté » -> « Titre exact, au caractère près, rien d’ajouté »; « aligné à gauche » -> « ferré à gauche »; « lumière douce d’une fenêtre à gauche » -> « lumière douce de fenêtre venue de la gauche » / why: how a French art director writes a brief, with the composition term.
[prompt: label] pass1 -> pass2: « linéale géométrique épurée, ... épousant la courbe » -> « linéale géométrique sobre, ... qui suit la courbe »; label line rendered « Sérum de nuit, 30 ml » / why: French type vocabulary; label written as a French brand would print it.
[prompt: clean plate] pass1 -> pass3: « une image vierge » -> « un fond vierge »; « mur uni, régulier et flou » -> « un mur uni, régulier, flou » / why: production term and brief rhythm.
[skills paragraph] pass1 -> pass2: « Ajoutez-les à Mes compétences : Améliorer avec l’IA les applique chaque fois qu’il réécrit un prompt » -> « ..., et Améliorer avec l’IA les respecte à chaque réécriture de prompt » / why: lighter clause; app labels kept (Catalogue, Texte lisible dans l’image, À éviter, Mes compétences, Moyenne, Élevée).
[editor list] pass2 -> pass3: « donne le meilleur résultat » -> « s’y prête le mieux »; « fait office de filigrane » -> « tient lieu de filigrane » / why: idiom.
[brand type] pass1 -> pass2: « C’est aussi ainsi qu’une mention légale validée trouve sa place : sous forme du fichier fourni » -> « Une mention légale validée se pose de la même manière : telle que livrée par le service juridique » / why: dropped the cleft and the noun chain.
[translation] pass1 -> pass2: « Deux voies s’offrent à vous » -> « Deux voies sont possibles »; « Google explique sans détour pourquoi » -> « Google dit pourquoi sans détour » / why: plainer, no stock phrase.
[overlay] pass1 -> pass2: « la surimpression se maîtrise plus facilement. Vous conservez un master validé et enregistrez... » -> « la surimpression se pilote plus sûrement. Un seul master validé, une copie enregistrée par langue... » / why: nominal sentence gives the method its rhythm.
[checklist] pass1 -> pass3: « Aucun caractère en trop, aucun mot doublé... » -> « Ni caractère en trop, ni mot doublé, ni lettre parasite »; « en commençant par les noms de marque » -> « noms de marque en tête » / why: checklist cadence.
[FAQ heading] pass1 -> pass3: « Questions sur le texte dans les images IA » -> « Le texte dans les images IA : vos questions » / why: French FAQ convention.
[FAQ] pass1 -> pass2: « donne au moteur ses meilleures chances » -> « met toutes les chances du côté du moteur »; « Traitez le résultat comme un brouillon » -> « comme un premier jet » / why: native idiom.

### Chinese changes

Second round (leftovers after the English fixes):

[intro] pass1 -> pass3: 如今的图片引擎已能写出海报标题、瓶身标签和店铺招牌，但仍会出错 -> 已能为海报写标题、给瓶身印标签、替店铺挂招牌，却仍会失手 / why: three parallel verb-object pairs instead of a noun list, a stronger verb for "slip".
[intro] pass1 -> pass3: 文字属于画面的一部分，就让引擎生成 -> 文字若是画面的一部分，就交给引擎生成；文字若须一字不差 / why: paired conditional reads like an editor's rule, not a translated instruction.
[answer] pass1 -> pass3: 在 hubStudio 中，成图用图片工作台 -> 落到 hubStudio 里，就是图片工作台负责出图，免费的图片编辑器负责加字 / why: division of labour stated as roles, native rhythm.
[table] pass1 -> pass3: 是，一个母版，每个市场一个文字图层 -> 是，一张母版，每个市场一层文字 / why: correct measure word for an image, shorter cell.
[table note] pass1 -> pass3: 生成出来的文字是画面的一部分 -> 生成的文字已融进画面，改一个字母就得重跑一次 / why: tighter, parallel clauses with a semicolon.
[engines intro] pass1 -> pass3: 属于厂商自述，并非独立测试 -> 均为厂商自述，并非独立测试 / why: cleaner closing qualifier.
[caveats] pass1 -> pass2: 其中两条提示最为关键。无论选哪个引擎，都要校对 -> 其中两条局限最值得留意。无论选用哪个引擎，校对这一步都省不得 / why: "caveat" is a limitation here, and the imperative gains weight.
[Google quote] pass1 -> pass3: 表示 -> 坦言 / why: the maker is admitting a weakness; reporting verb carries that.
[method H2] pass1 -> pass3: 准确写出指定文字 -> 一字不差地写出指定文字 / why: native idiom for "exact words".
[method] pass1 -> pass2: 在方法上，各厂商的意见一致 -> 方法上，各厂商的说法如出一辙 / why: idiomatic, drops the stiff 在...上 frame.
[prompt: poster] pass1 -> pass2: rewritten as a creative director's spec sheet: 标题逐字照写，不得增减任何字符 / 字体：瘦高窄体衬线，暖米白色，位于画面上三分之一 / why: brief, clipped production language; quoted headline kept verbatim in Latin letters.
[prompt: label] pass1 -> pass2: 一只琥珀色玻璃滴管瓶立在湿润的石板上，阴天自然光 -> 琥珀色玻璃滴管瓶，立于湿润的石板上，阴天散射光 / why: shot-list syntax, correct lighting term.
[prompt: clean plate] pass1 -> pass2: 留作素净、均匀、虚焦的墙面 -> 只留一面干净、均匀、虚化的墙，留待后期加标题 / why: how a Chinese art director words negative space.
[app features] pass1 -> pass3: 应用里有两项功能可以代劳一部分工作 -> 可以分担其中一部分工作; app labels kept as in the app (“图中文字清晰可读”, “规避清单：手部、文字瑕疵、水印”, “我的技能”, “用 AI 优化”) / why: match the app's Chinese UI.
[editor H2] pass1 -> pass3: 成图后如何给 AI 图片加文字？ -> AI 图片生成后，如何再加文字？ / why: natural question order.
[Text panel] pass1 -> pass2: 即可保持清晰 -> 文字便不会被吞没 / why: concrete image instead of a flat result clause.
[Social panel] pass1 -> pass2: 面板会自动检查，标出在手机上太小而看不清的文字 -> 面板自带检查：手机上看不清的小字、被平台按钮遮挡的新增元素，都会被标出来 / why: topic-first structure, no long attributive chain.
[brand type] pass1 -> pass2: 绝不重新输入 -> 直接使用法务团队交付的素材，绝不重新录入 / why: register of production work.
[translate] pass1 -> pass2: 有两条路 -> 路有两条：一是……二是…… / why: native enumeration.
[translate] pass1 -> pass3: 无论哪种情况 -> 无论走哪条路 / why: picks up the "two routes" image.
[overlay] pass1 -> pass2: 德语版的错字绝不会波及法语版 -> 德语版出了错字，法语版毫发无损 / why: idiom instead of a translated negative.
[checklist H2] pass1 -> pass3: 发布前，应检查哪些内容？ -> 上线前，要检查什么？ / why: shorter, industry wording.
[checklist] pass1 -> pass3: 先核对品牌名 -> 品牌名优先; 与源表一致 -> 均与源表核对一致 / why: checklist register.
[FAQ] pass1 -> pass2: 用引号括起、要求原样呈现的提示词，能给引擎最大的胜算 -> 提示词里把文字放进引号、要求原样照写，引擎的胜算最大 / why: verbal construction replaces a noun phrase.
[FAQ] pass1 -> pass2: 方便换一个引擎重试，留下最干净的结果 -> 便于换个引擎再试，择优留用 / why: four-character close.
[FAQ brand font] pass1 -> pass2: 方法与置入标志相同 -> 做法和放标志一样 / why: lighter written close.
[SEO] meta pass1 -> pass3: 何时交给引擎生成，何时在编辑器中后加 -> 哪些交给引擎生成，哪些在编辑器中后加 / why: the decision is about which text, not when; 47 characters.

## Publish

- Page created: `src/pages/resources/how-to/readable-text-in-ai-images.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/howtos.ts` entry added at the head; insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
