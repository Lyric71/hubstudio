# Research: readable-text-in-ai-images

| Field | Value |
|---|---|
| Brief | 61 (wave two, `editorial/scripts/wave2/61-readable-text-in-ai-images.mjs`) |
| Target query | AI image with text |
| Gap statement (one sentence) | The ranking pages are tool landing pages, vendor blogs and forum threads that either promise perfect text or say AI cannot spell; none gives a rule for when to render the words in the image and when to overlay them, none cites what the engine makers document about their own text rendering, and none carries a proofing checklist. |
| Research time spent | About 75 minutes: SERP map, eleven maker pages fetched and read in full text, help center and positioning cross-check, live-site contradiction sweep |
| Written | 2026-10-08 |

## R2. SERP map

Search tool: US web search, read 2026-10-08. Ages are the page's own date
where it shows one; "undated" where it shows none.

Query: AI image with text

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | hivo.co | Vendor blog | What text-to-image is | Text inside the image at all | undated |
| 2 | concepts.dsebastien.net | Glossary note | Definition of text to image | Everything practical | undated |
| 3 | shapes.inc | Tool landing page | A generator with text overlays | Method, limits, proofing | undated |
| 4 | i2img.com | Tool landing page | A generator | Same | undated |
| 5 | apps.apple.com | App listing | An app | Same | undated |
| 6 | veed.io | Tool landing page | A generator | Same | undated |
| 7 | community.articulate.com | Forum thread | Users asking why text comes out wrong | Any answer with a source | undated |
| 8 | atlasai.ma | Tool directory | One text-focused tool | Method, sources | undated |

Query: AI image generator text accurate

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | topai.tools | Tool directory | Lists of tools claiming accurate text | Evidence | undated |
| 2 | petapixel.com | News | A 2023 launch claiming text was solved | Current engines | 2023-08-25 |
| 3 | digitalstrategy.rsm.nl | University blog test | A 2023 hands-on test, mixed results | Current engines | 2023-09-29 |
| 4 | community.iqoo.com | Forum post | General overview | Text specifics | undated |
| 5 | community.adobe.com | Bug report | Users reporting wrong text | Fix or method | undated |
| 6 | grandavehousing.calpoly.edu | Off-topic page | Nothing on text | Everything | undated |

Query: how to add text to AI images

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | community.articulate.com | Forum thread | Add text afterwards in another tool | When rendering is the better call | undated |
| 2 | dreamina.capcut.com | Tool landing page | Add text with its editor | Decision rule, proofing | undated |
| 3 | community.gamma.app | Forum Q and A | Generate a layout without text, add text later | Sources, localization | undated |
| 4 | segmind.com | Workflow page | An automated text-addition flow | Proofing | undated |
| 5 | veed.io | Tool landing page | Prompted text added by AI | Limits | undated |

Query: AI poster with readable text

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | picsart.com | Tool landing page | A poster generator | Method | undated |
| 2 | photoroom.com | Vendor blog | Poster how-to | Maker documentation | undated |
| 3 | promptus.ai | Tool landing page | A poster feature | Method | undated |
| 4 | vistaprint.com | Vendor hub | AI for poster design | Text limits | undated |
| 5 | krumzi.com | Blog how-to | Step-by-step poster with AI, 2026 | Sources, proofing, localization | 2026 |
| 6 | mikareyes.com | Personal blog | Fixing AI-looking posters, add text yourself | When rendering works | undated |
| 7 | renoise.ai | Tool guide | AI poster | Method | undated |

**The bar:** short pages, 600 to 1,500 words, zero or one table, no maker
source, no checklist. A practical guide of about 1,500 words with four tables
and prompt blocks clears it.

**The gap, in one sentence:** nobody says when to render the words and when to
set them on top, and nobody quotes what the makers themselves admit.

## R1 and R5. Claims table

Every source below is the engine maker's own page (primary for what the maker
says about its own engine; a maker claim, not an independent measurement, and
labeled that way on the page). App facts come from `hubstudio-positioning.md`
and `src/content/help/`, which are first-party and need no external source.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| OpenAI's guide lists a limitation for its GPT Image models: "Although significantly improved, the model can still struggle with precise text placement and clarity." | https://developers.openai.com/api/docs/guides/image-generation | undated page, read 2026-10-08 | n/a | Maker's stated limitation | OpenAI (maker) | primary |
| Same guide: "may occasionally struggle to maintain visual consistency for recurring characters or brand elements across multiple generations" | same | read 2026-10-08 | n/a | Maker's stated limitation | OpenAI | primary |
| OpenAI prompting guide, GPT Image models: "Reliable text rendering with crisp lettering, consistent layout, and strong contrast inside images" | https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide | 2026-04-21 | n/a | Maker claim | OpenAI | primary (maker claim) |
| Same guide: "Put literal text in quotes or ALL CAPS and specify typography details (font style, size, color, placement) as constraints. For tricky words (brand names, uncommon spellings), spell them out letter-by-letter to improve character accuracy. Use medium or high quality for small text, dense information panels, and multi-font layouts." | same | 2026-04-21 | n/a | Maker guidance from alpha testing | OpenAI | primary |
| Same guide: marketing creatives with in-image text "are great for rapid ad concepting, but typography needs explicit constraints"; example prompt "Billboard text (EXACT, verbatim, no extra characters)" and "Ensure text appears once and is perfectly legible" | same | 2026-04-21 | n/a | Maker guidance | OpenAI | primary |
| Same guide, Translation in Images: preserve "typography style, placement, spacing, and hierarchy" while translating verbatim, "no unintended edits to logos, icons, or imagery" | same | 2026-04-21 | n/a | Maker guidance | OpenAI | primary |
| Google Gemini API docs, Nano Banana models: "Advanced text rendering: Capable of generating legible, stylized text for infographics, menus, diagrams, and marketing assets." | https://ai.google.dev/gemini-api/docs/image-generation | last updated 2026-10-06 | n/a | Maker claim | Google | primary (maker claim) |
| Same page, prompting: "Be clear about the text, the font style (descriptively), and the overall design." Template: with the text "[text to render]" in a [font style] | same | 2026-10-06 | n/a | Maker guidance | Google | primary |
| Same page, Limitations: "For best performance, use the following languages: EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN, id-ID, it-IT, ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN." (15 entries, counted) | same | 2026-10-06 | n/a | Maker's stated limitation | Google | primary |
| Same page: Nano Banana Pro (Gemini 3 Pro Image) offers "advanced localization" | same | 2026-10-06 | n/a | Maker claim | Google | primary (maker claim) |
| Google DeepMind Nano Banana Pro model page: "You should always carefully check images you create, including text in images, for accuracy"; "it can still struggle with small faces, accurate spelling, and fine details" | https://deepmind.google/models/gemini-image/pro/ | undated page, read 2026-10-08 | n/a | Maker's stated limitation | Google | primary |
| Same page: "The model is capable of generating and translating text in many languages, but it may struggle with grammar, spelling, cultural nuances, or idiomatic phrases." | same | read 2026-10-08 | n/a | Maker's stated limitation | Google | primary |
| Google launch post, Nano Banana 2: "generate accurate, legible text for marketing mockups or greeting cards. You can even translate and localize text within an image" | https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | n/a | Maker claim | Google | primary (maker claim) |
| Google launch post, Nano Banana Pro: "correctly rendered and legible text directly in the image, whether you're looking for a short tagline, or a long paragraph" | https://blog.google/innovation-and-ai/products/nano-banana-pro/ | 2025-11-20 | n/a | Maker claim | Google | primary (maker claim) |
| Black Forest Labs, FLUX.1 Kontext: "Replace text in signs, posters, and labels with precision while maintaining the original styling and context. Simply use quotes around the text you want to change" | https://docs.bfl.ml/kontext/kontext_overview.md | undated, read 2026-10-08 | n/a | Maker claim and guidance | Black Forest Labs | primary |
| Same page: Kontext [max] listed with "Industry-leading typography" | same | read 2026-10-08 | n/a | Maker marketing claim | Black Forest Labs | primary (market claim of the maker, not repeated on the page as fact) |
| Same docs: maker now recommends FLUX.2 for editing, with "better text editing" | https://docs.bfl.ml/kontext/kontext_image_editing.md | read 2026-10-08 | n/a | Maker statement | Black Forest Labs | primary |
| Kontext editing doc: prompt structure `Replace '[original text]' with '[new text]'`; colored boxes as annotations "work well for text edits that require text repositioning and resizing" | same | read 2026-10-08 | n/a | Maker guidance | Black Forest Labs | primary |
| FLUX1.1 [pro] page makes no text-rendering claim (prompt adherence only) | https://docs.bfl.ml/flux_models/flux_1_1_pro.md | read 2026-10-08 | n/a | Absence on the maker page | Black Forest Labs | primary (absence) |
| FLUX1.1 [pro] Ultra page makes no text-rendering claim (resolution and Raw mode only) | https://docs.bfl.ml/flux_models/flux_1_1_pro_ultra_raw.md | read 2026-10-08 | n/a | Absence on the maker page | Black Forest Labs | primary (absence) |
| ByteDance Seed, Seedream 4.5: "further enhances the typography and dense text rendering capabilities"; "clear and readable small text rendering, ideal for posters" | https://seed.bytedance.com/en/seedream4_5 | undated model page, read 2026-10-08 | n/a | Maker claim | ByteDance | primary (maker claim) |
| ByteDance Seed, Seedream 5.0 Pro launch: "there is still room to improve in finer-grained text rendering and pixel-level editing consistency"; native input and generation "in over ten commonly used languages worldwide, including French, German, Russian, Japanese, Korean, Spanish, and Arabic" in addition to Chinese and English | https://seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro | 2026-07-08 | n/a | Maker claim and stated limitation | ByteDance | primary |
| Seedream 5.0 Pro model page: "Can generate text-rich images" | https://seed.bytedance.com/en/seedream5_0_pro | undated, read 2026-10-08 | n/a | Maker claim | ByteDance | primary (maker claim) |
| App: Catalog skill "Legible text inside an image" for headlines, labels and posters; "Avoid list: hands, text artifacts, watermarks" | src/content/help/skills.md (updated 2026-10-05) | 2026-10-05 | n/a | First-party help center | hubStudio | primary (first party) |
| App: Image editor Text panel (Font, Size, bold, italic, underline, alignment, Color, Highlight behind the words, Dark outline, Soft shadow); Picture panel (logo from computer or library, Opacity, nine Place it squares, "A light logo in a corner makes a watermark"); Social panel Checks include "whether your words are large enough to read on a phone" and whether anything added sits under the network's buttons; free, in the browser; Save a copy or Save as a new version | src/content/help/assets-library.md | 2026 help sync | n/a | First-party help center | hubStudio | primary (first party) |
| App: image studio Edit an image job; ChatGPT Image engines take a Mask; price shown before the run; a failed run is not charged; Improve with AI rewrites the prompt for the engine, shaped by skills | src/content/help/create-an-image.md (updated 2026-10-08), hubstudio-positioning.md | 2026-10-08 | n/a | First-party | hubStudio | primary (first party) |
| App: Validation, send an image to a teammate or client to validate or send back; versions on one thread | hubstudio-positioning.md | 2026-09-29 | n/a | First-party | hubStudio | primary (first party) |
| The help center does not document loading a custom font into the Image editor | src/content/help/assets-library.md, searched for "font" | 2026-10-08 | n/a | Absence in first-party docs | hubStudio | primary (absence): the page never claims it |

## Cleared for use

> OpenAI's image generation guide lists text among its GPT Image models' limitations: "Although significantly improved, the model can still struggle with precise text placement and clarity."
> Source: OpenAI image generation guide, read October 2026. https://developers.openai.com/api/docs/guides/image-generation

> Google's model page for Nano Banana Pro says it "can still struggle with small faces, accurate spelling, and fine details," and that when it translates text it "may struggle with grammar, spelling, cultural nuances, or idiomatic phrases."
> Source: Google DeepMind, Nano Banana Pro model page, read October 2026. https://deepmind.google/models/gemini-image/pro/

> ByteDance says of Seedream 5.0 Pro that "there is still room to improve in finer-grained text rendering," while claiming native generation in over ten languages besides Chinese and English.
> Source: ByteDance Seed launch post, July 2026. https://seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro

> Google's API documentation lists 15 languages "for best performance," among them EN, fr-FR, de-DE, es-MX, ja-JP and zh-CN; a language off the list is not promised the same result.
> Source: Google Gemini API image generation documentation, last updated October 2026. https://ai.google.dev/gemini-api/docs/image-generation

> OpenAI's prompting guide for its image models: "Put literal text in quotes or ALL CAPS and specify typography details (font style, size, color, placement) as constraints," and spell brand names letter by letter.
> Source: OpenAI, GPT Image prompting guide, April 2026. https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide

## Do not publish

| Item | Reason |
|---|---|
| Any accuracy percentage for text rendering (a "99%+" figure appears on a tool directory) | Third-party, no method, sells the thing it flatters |
| A ranking of engines on text quality | No method-stated, current, independent benchmark read for this piece; the page reports what each maker documents and nothing more |
| Engine prices, including the per-image price on the Black Forest Labs Kontext page | House rule: no amounts |
| ChatGPT Image 2.5 Flare and Sunburst | Listed in the help center but not in `hubstudio-positioning.md`'s engine list; the page names ChatGPT Image 2 only |
| FLUX.2 and Qwen-Image text claims | Not engines offered in the app per positioning; FLUX.2 appears only as the maker's own recommendation |
| Grok Imagine and Meta Muse text claims | Makers outside the brief's four; not researched, not on the page |
| A custom-font upload in the Image editor | Not documented in the help center; the page says to place brand type as a picture instead |
| Platform rules on how much text an ad image may carry | Not researched for this piece; out of scope |
| "Industry-leading typography" (Kontext [max]) as a fact | Maker marketing line; may appear only attributed as the maker's own words, and the page does not use it |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| research/readable-text-in-ai-images/excerpts-2026-10-08.md | Verbatim text excerpts of all eleven maker pages, at the anchors quoted above | 2026-10-08 | Maker HTML fetched with curl, tags stripped |

No new app capture: the how-to reuses the localized help captures, per the
wave two rule.

## R8. Reconciliation (filled after drafting)

Check 2: all thirteen maker URLs (the eleven above plus the FLUX1.1 [pro]
Ultra page and the Kontext editing page) re-fetched with curl on 2026-10-08
after drafting, in iteration 8, and every quoted string searched for in the
fresh text. Every string was found. One note: "better text editing" sits on
the Kontext image editing page; the overview page says "improved text
editing". The draft quotes "better text editing" and the claims table
attributes it to the editing page, so it stands.

| Number or quoted claim in the draft | Claims-table row | Status |
|---|---|---|
| "can still struggle with precise text placement and clarity" | OpenAI guide limitation | matches |
| Quotes or ALL CAPS, typography details as constraints, letter-by-letter spelling, medium or high quality for small text | OpenAI prompting guide | matches |
| "Reliable text rendering with crisp lettering"; a translation edit that keeps typography and placement | OpenAI prompting guide | matches |
| "can still struggle with small faces, accurate spelling, and fine details"; check every image, text included (paraphrased, not quoted, because the source sentence uses dashes) | DeepMind model page | matches |
| "is capable of generating and translating text in many languages, but it may struggle with grammar, spelling, cultural nuances, or idiomatic phrases" | DeepMind model page | matches |
| 15 languages "for best performance", EN, fr-FR, de-DE, es-MX, ja-JP and zh-CN among them | Gemini API Limitations, counted | matches |
| Google template: the text, the font style, the design | Gemini API prompting section | matches |
| Nano Banana 2: "accurate, legible text"; "translate and localize text within an image" | Google launch post, 2026-02-26 | matches |
| Nano Banana Pro: "a short tagline, or a long paragraph" | Google launch post, 2025-11-20 | matches |
| Kontext: "signs, posters, and labels"; quotes around the text to change; replace prompt; maker recommends a newer model with "better text editing" for new projects | BFL Kontext docs | matches |
| The same replace prompt fixes one misspelled word without starting over | BFL Kontext: "Replace text in signs, posters, and labels with precision while maintaining the original styling and context" | matches the maker's documented use |
| FLUX Pro 1.1 and Ultra: no text-rendering claim | BFL pages, absence | matches |
| Seedream 4.5: "typography and dense text rendering", readable small text for posters | ByteDance model page | matches |
| Seedream 5.0 Pro: text-rich images; over ten languages besides Chinese and English; "there is still room to improve in finer-grained text rendering" | ByteDance launch post 2026-07-08 and model page | matches |
| Nine positions for a logo; Text panel options; Social panel checks; skill names; failed run not charged; Reuse prompt; Validation versions on one thread | help center and positioning | first-party, matches |

Nothing in the draft lacks a row above. Removed during drafting, before the
quality pass: "No maker publishes a fair head-to-head" (no source, replaced by
"This guide doesn't rank them"); "Short headlines in a listed language come
out best" (inference, not a maker statement); "Ask for one headline, not
three" (replaced by the maker's own "the text appears once"); a direct quote
of the DeepMind "carefully check" sentence (its dashes could not be carried
over verbatim under the house dash rule, so it is paraphrased).
