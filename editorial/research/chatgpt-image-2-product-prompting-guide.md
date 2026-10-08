# Research: chatgpt-image-2-product-prompting-guide

| Field | Value |
|---|---|
| Brief | 60 (wave two, `editorial/scripts/wave2/60-chatgpt-image-2-product-prompting-guide.mjs`) |
| Target query | chatgpt image 2 prompts |
| Gap statement (one sentence) | The ranking pages are prompt lists that restate the engine's specs secondhand, often wrongly, and none tells a product team what OpenAI itself documents and leaves unfinished (transparency in preview, 4K experimental, masks as guidance), backed by logged runs and a QA list. |
| Research time spent | About 80 minutes: documentation reads and source checks, SERP map, six test runs and their inspection |
| Written | 2026-10-08 |

R4 (Chinese-language web first) does not apply: the piece is about an OpenAI
engine and its own English documentation, with no China platform claim.

## R2. SERP map

Read 2026-10-08 through a US web search. Ages are the dates the pages show,
or "2026, undated" where none is shown. Domains are recorded here for the
evidence trail only; none is named on the page.

Query: chatgpt image 2 prompts

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | notegpt.io | Tool blog, prompt guide | Use cases and prompt lists | Documented limits, transparency status, QA | 2026, undated |
| 2 | weshop.ai | Ecommerce tool blog, "100 prompts" | Volume of copy-paste prompts | Any spec, any test, any product QA | 2026, undated |
| 3 | pasqualepillitteri.it | Personal blog, prompt library | Prompt collection | Specs and limits | 2026, undated |
| 4 | morphic.com | Tool vendor how-to | Capabilities and tips | Masks, transparency status, sizes | 2026 |
| 5 | yce.perfectcorp.com | Vendor use-case page (Spanish) | Ten prompts | Specs | 2026 |
| 6 | rangy.ai | Tool blog | Prompting through a chat model | Engine parameters | 2026 |
| 7 | pixverse.ai | Tool blog (German) | 80 examples, API tips | Product QA | 2026 |

Query: gpt-image-2 prompt guide

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | fal.ai | Inference reseller guide, about 5,500 words, no tables | Prompt structure, examples incl. product shots, up to 16 references | Presents transparency as current, not preview; no 2K experimental note; no QA list | April 21, 2026 |
| 2 | picsart.com | Tool blog | Prompt list | Specs | 2026 |
| 3 | notegpt.io | Tool blog | As above | As above | 2026 |
| 4 | i-scoop.eu | Commentary on OpenAI's guide | Summary of OpenAI's prompting advice | Test evidence, product method | 2026 |
| 5 | lumalabs.ai | Vendor "complete guide" | Overview, says resolutions "up to 2K" | The documented 3840 px edge and 4K band | 2026 |
| 6 | videogen.io | Tool blog | How to use | Specs | 2026 |
| 7 | atlabs.ai | Tool blog, 8,000+ words, one comparison table | 45 prompts in 8 categories | No transparency or mask coverage; claims "pixel-perfect" text that OpenAI's own limitation list contradicts | June 18, 2026, updated Oct 7, 2026 |
| 8 | cometapi.com | API reseller tag page | Parameters | Product method | 2026 |

Query: chatgpt image product photography prompts

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | lilachbullock.com | Marketing blog, 50 prompts | Prompt list incl. product | Engine version, specs | 2025 to 2026 |
| 2 | reliablesoft.net | SEO blog | One product prompt template | Specs, editing | 2025 to 2026 |
| 3 | ringly.io | Ecommerce blog, "2025" guide | Steps in the chat interface | Current engine | 2025 |
| 4 | dreamina.capcut.com | Tool vendor page | Pushes its own tool | Not about the engine | 2025 to 2026 |
| 5 | folio3.ai | Prompt list | 50 prompts | Specs | 2025 to 2026 |
| 6 | willfrancis.com | Marketing blog | Product photography prompts | Specs, QA | 2025 to 2026 |

Query: gpt image 2 editing mask reference images

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | help.scenario.com | Platform help article | Says "up to 10 reference images", "up to 3840x3840" | Wrong against OpenAI's 16-image reference and 3:1 ratio limit | 2026 |
| 2 | fal.ai (model pages) | Reseller playground | Edit endpoint parameters | Prompting method | 2026 |
| 3 | docs.apiyi.com | Reseller docs | Mask editing, describes white areas filled and black kept | OpenAI's mask is an alpha channel, and the edit is guidance only | 2026 |
| 4 | floyo.ai, inference.sh, astria.ai | Workflow and reseller pages | One-click editing | Any method or limit | 2026 |

**The bar:** prompt libraries run 2,000 to 9,000 words with zero or one table
and no test evidence. The serious ones restate OpenAI's prompt structure
(scene, subject, details, use, constraints). A spec table with sources, a
logged test table and a QA list clears the bar on depth at about 1,800 words.

**The gap, in one sentence:** nobody ranking reads OpenAI's own pages closely
enough to say that transparency on gpt-image-2 is a preview the API refused,
that anything above 2560 by 1440 is experimental, that a mask is guidance and
that OpenAI now files gpt-image-2 under earlier models, and nobody turns that
into a product-shot method with a QA list.

## R1 and R5. Claims table

All OpenAI pages were fetched as Markdown (`.md` suffix, which the docs
offer) and read in full on 2026-10-08 (check 1). Check 2 re-fetched each URL
the same day after drafting, see R8. Who paid: OpenAI documents its own
product, so every OpenAI row is a maker claim about its own engine, labeled
as such where it is a quality claim; parameter limits are primary.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| gpt-image-2: "State-of-the-art image generation model for fast, high-quality image generation and editing. It supports flexible image sizes and high-fidelity image inputs."; snapshot gpt-image-2-2026-04-21; input text and image, output image; generation, edit and batch endpoints; inpainting | developers.openai.com/api/docs/models/gpt-image-2 | snapshot 2026-04-21, read 2026-10-08 | n/a | Maker model page | OpenAI | primary (maker claim for the quality words) |
| Size rules: max edge 3840 px, both edges multiples of 16 px, long to short edge ratio not over 3:1, total pixels at least 655,360 and no more than 8,294,400; popular sizes incl. 1024x1024, 1536x1024, 1024x1536, 2048x2048, 2048x1152, 3840x2160, 2160x3840, auto; "Square images are typically fastest to generate." | developers.openai.com/api/docs/guides/image-generation (section "Earlier GPT Image models", "GPT Image 2 settings and input fidelity") | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| "Resolutions above 2560x1440 are experimental" (guide); "If the output image exceeds 2560x1440 pixels (3,686,400 total pixels), commonly referred to as 2K, treat it as experimental because results can be more variable above this size." (prompting guide) | image-generation guide; developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide | read 2026-10-08; prompting guide model summary "As of April 21, 2026" | n/a | Maker documentation | OpenAI | primary |
| Quality for gpt-image-2: low, medium, high (auto default); xhigh and max exist only on gpt-image-2.5-sunburst and -flare | image-generation guide; developers.openai.com/api/reference/resources/images | read 2026-10-08 | n/a | Maker documentation and API reference | OpenAI | primary |
| "Use quality: 'low' for quick drafts"; prompting guide: use medium or high for small text, dense panels, identity edits, high resolution | image-generation guide; prompting guide | read 2026-10-08 | n/a | Maker guidance | OpenAI | primary (guidance) |
| input_fidelity: "For gpt-image-2, omit this parameter; the API doesn't allow changing it because the model processes every image input at high fidelity automatically." | image-generation guide; API reference | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| Edits endpoint: "For GPT image models, you can provide up to 16 images." | API reference, Images | read 2026-10-08 | n/a | API reference | OpenAI | primary |
| Generation: n "Must be between 1 and 10"; prompt "The maximum length is 32000 characters." | API reference, Images | read 2026-10-08 | n/a | API reference | OpenAI | primary |
| Output: png default, jpeg, webp; output_compression 0 to 100 for jpeg and webp; "Using jpeg is faster than png" | image-generation guide; API reference | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| Transparent background: "For gpt-image-2 and gpt-image-2-2026-04-21, this support is in preview. When using transparent, set the output format to png or webp." Prompting guide: "Transparent backgrounds are available in preview for gpt-image-2" | API reference; prompting guide | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| The API refused transparency on gpt-image-2: HTTP 400, "Transparent background is not supported for this model." (param background, code invalid_value), on both `gpt-image-2` and `gpt-image-2-2026-04-21` | Test runs 5 and 5b below | 2026-10-08 | 2 requests | Direct API call from hubStudio's editorial key | hubStudio (own test) | primary, own observation |
| Masking: "Masking with GPT Image is entirely prompt-based. The model uses the mask as guidance, but may not follow its exact shape with complete precision." "If you provide multiple input images, the mask will be applied to the first image." Mask and image same format and size, under 50MB, mask must contain an alpha channel | image-generation guide | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| Limitations, verbatim: "Latency: Complex prompts may take up to 2 minutes to process." "Text Rendering: Although significantly improved, the model can still struggle with precise text placement and clarity." "Consistency: ... may occasionally struggle to maintain visual consistency for recurring characters or brand elements across multiple generations." "Composition Control: ... may have difficulty placing elements precisely in structured or layout-sensitive compositions." | image-generation guide, "Limitations" | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary (the latency line is already in the ledger, brief 39) |
| Moderation: auto (default) and low ("Less restrictive filtering") | image-generation guide; API reference | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| Prompting advice: order "background/scene, subject, key details, constraints" plus intended use; put literal text in quotes or ALL CAPS and specify typography; spell tricky words letter by letter; include "photorealistic"; reference inputs by index and description; "change only X" plus "keep everything else the same", repeat the preserve list each iteration; iterate with single-change follow-ups | prompting guide, section 2 | read 2026-10-08 | n/a | Maker guidance from alpha testing (its own words) | OpenAI | primary (guidance) |
| OpenAI now lists gpt-image-2 under "Earlier GPT Image models" and says "For new integrations, use one of the GPT Image 2.5 models"; "Choose Sunburst for workflows where editing precision matters most, and Flare for fast, high-quality everyday image generation." 2.5 models support opaque and transparent backgrounds without the preview label | image-generation guide; API reference (2.5 snapshots dated 2026-09-08) | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| Returned files carry a C2PA manifest: PNG caBX chunk, action c2pa.created, software agent "gpt-image-2", digital source type trainedAlgorithmicMedia, claim generator "OpenAI Media Service API", signed for OpenAI OpCo, LLC | All five returned files, test runs below | 2026-10-08 | 5 files | Byte read of each PNG's chunks and manifest strings | hubStudio (own test) | primary, own observation |
| "Editing, converting, or sharing a file can remove its metadata." | developers.openai.com/api/docs/guides/content-provenance | read 2026-10-08 | n/a | Maker documentation | OpenAI | primary |
| App: ChatGPT Image 2 in the Image studio, jobs Text to image and Edit; up to 4 source images; Low, Medium, High and 1K, 2K or 4K (4K "up to 3840 px"); PNG, JPG, WebP; Panorama 3:1 and Tall 1:3; Background Auto, Opaque, Transparent on the ChatGPT Image engines; 1 to 10 images per run; Mask; Less strict content filter; prompt up to 4,000 characters; uploads resized to 1,536 px on the long side; price shown before the run; failed run not charged; Improve with AI rewrites for the chosen engine | src/content/help/create-an-image.md (updated 2026-10-08) | 2026-10-08 | n/a | Help center, first-party | hubStudio | primary, first-party |
| App: ChatGPT Image 2.5 Flare and Sunburst in the Image studio, with Extra high and Max quality | src/content/help/create-an-image.md | 2026-10-08 | n/a | Help center | hubStudio | primary, first-party |
| App engine notes: ChatGPT Image engines follow long written briefs and set legible text; Nano Banana 2 fast and dependable on an existing photo; FLUX.1 Kontext Pro and Max change exactly what you name; Seedream 4.5 and 5.0 Pro render natively up to 4K, the pick for a 4K upscale; upscale on Nano Banana 2, Nano Banana Pro, Seedream 4.5 and 5.0 Pro only | create-an-image.md; src/pages/app/engines.astro | 2026-10-08 | n/a | Help center and live page | hubStudio | primary, first-party |
| Skills Catalog has E-commerce packshot, Lifestyle product scene and Legible text inside an image; skills shape Improve with AI | src/content/help/skills.md | 2026-10-08 | n/a | Help center | hubStudio | primary, first-party |

## Test runs (all 2026-10-08, model gpt-image-2, outputs kept in the session scratch folder only)

Runs 1 to 3 used `scripts/generate-image.mjs` (`npm run gen`), run 4
`scripts/edit-image.mjs`, runs 5, 5b and 6 a scratch harness calling the same
API directly, because the repo CLIs expose neither `background` nor `mask`.
Finished 07:18 UTC (runs 1 to 3) and 07:22 UTC (runs 4 to 6).

| Run | Settings | Prompt (abridged; full text in the scratch scripts) | What came back |
|---|---|---|---|
| 1 Packshot | generate, 1024x1024, high, png | 50 ml frosted amber dropper bottle, matte black cap; label text quoted verbatim "ORREN" (thin geometric sans, caps) and "NIGHT SERUM 50 ML"; off-white paper sweep; one softbox camera left; 85mm, eye level, f/8; product about 70% of frame height; no props, no extra text | Both label lines exact, in the asked style; one shadow falling right; centered; bottle about 76% of frame height. 7,024 output tokens |
| 2 Lifestyle | generate, 1536x1024, high | Same bottle described in words only, label "ORREN" with no typeface named; stone windowsill, morning light camera left; a hand entering from the right; 50mm, f/4, bottle on the left third; warm grade, film grain | Usable frame: hand anatomically plausible, light from the left, grain present. The label came back in a serif, not the sans of run 1, and the bottle proportions differ: the same product drifts between two text-only generations |
| 3 Text on pack | generate, 1024x1024, high | White carton; front text quoted: "ORREN", "Barrier Repair Cream", "50 ml / 1.7 fl oz"; side panel ingredient list of nine INCI names quoted verbatim | All three front lines exact. Side panel list: 7 of 9 names right; "Tocopherol" and "Phenoxyethanol" misspelled at small size |
| 4 Reference edit | edit, input = run 1 file, 1536x1024, high | "Image 1 is the product photo." New setting: wet slate ledge, rosemary, window light camera right; "Change only the setting and the light"; preserve list naming shape, proportions, glass color, cap, label text and typeface | Label text and typeface preserved exactly; bottle shape and cap kept; new light direction followed. 1,151 input tokens |
| 5 Transparent | generate, 1024x1024, high, background transparent, png, model `gpt-image-2` | Isolated bottle on a fully transparent background, no backdrop, no checkerboard, no shadow | HTTP 400: "Transparent background is not supported for this model." No image, no charge |
| 5b Transparent retry | generate, 1024x1024, low, background transparent, png, model `gpt-image-2-2026-04-21` | Short isolated-bottle prompt | Same HTTP 400 and message |
| 6 Mask edit | edit, input = run 2 file, mask = same size PNG with alpha 0 over the ceramic dish (x 0 to 430, y 660 to 930), 1536x1024, high | "Replace only the masked area" with a folded square of linen; keep everything else exactly as it is | Dish replaced with linen. Outside the mask the frame was re-rendered: mean change 3.9 levels out of 255, 2.4% of outside pixels moved by more than 20 levels, and a 40-pixel band around the mask changed by 17 levels on average because the new linen ran past the mask edge. The label area moved by 3.2 levels on average. 86.0 seconds |

Every returned file (runs 1, 2, 3, 4, 6) carries the C2PA manifest described
in the claims table.

## Cleared for use

> OpenAI documents gpt-image-2 sizes as any width and height in multiples of
> 16 pixels, up to 3,840 pixels on the long edge, a ratio no wider than 3:1
> and 655,360 to 8,294,400 pixels in total, and it calls anything above 2,560
> by 1,440 experimental.
> Source: OpenAI image generation guide and GPT Image prompting guide, read October 8, 2026, the maker's API documentation.

> OpenAI's documented limits for its GPT Image models: complex prompts can take
> up to two minutes, the model "can still struggle with precise text placement
> and clarity," it may drift on recurring characters or brand elements across
> generations, and it may place elements imprecisely in layout-sensitive
> compositions.
> Source: OpenAI image generation guide, "Limitations," read October 8, 2026, the maker's own list.

> OpenAI lists transparent backgrounds on gpt-image-2 as a preview. Our
> direct API request for one on October 8, 2026 came back refused: "Transparent
> background is not supported for this model."
> Source: OpenAI API reference and prompting guide, read October 8, 2026; hubStudio test runs 5 and 5b, two requests to the Images API, October 8, 2026.

> OpenAI says masking on its GPT Image models "is entirely prompt-based" and
> the model "may not follow its exact shape with complete precision."
> Source: OpenAI image generation guide, read October 8, 2026, the maker's documentation.

> In our masked edit, 2.4 percent of the pixels outside the mask moved by more
> than 20 levels out of 255, and the new object ran past the mask edge.
> Source: hubStudio test run 6, one gpt-image-2 edit at high quality, October 8, 2026, measured by pixel comparison of the input and output files.

> On a carton with a quoted nine-name ingredient list in small type, the
> engine set all three front-panel lines exactly and misspelled two of the nine
> ingredient names.
> Source: hubStudio test run 3, one gpt-image-2 generation at high quality, October 8, 2026, read by eye at 4x zoom.

## Do not publish

| What | Where it came from | Why not | Date |
|---|---|---|---|
| Leaderboard rank of GPT Image 2 | Ledger, brief 40 rows | Ledger rows carry check 1 only; no second check; the brief does not need a rank | 2026-10-08 |
| Any OpenAI price or token rate | image-generation guide pricing sections | House rule: no amounts on the page; prices are not needed for the method | 2026-10-08 |
| "Up to 10 reference images", "up to 3840x3840", "up to 2K", "pixel-perfect text" | SERP pages listed in R2 | Contradicted by OpenAI's own documentation (16 inputs on the edits endpoint, 3:1 ratio cap, 3,840 px edge, text limitation) | 2026-10-08 |
| Mask described as white areas filled and black kept | One reseller doc in R2 | OpenAI's mask works from the alpha channel | 2026-10-08 |
| That transparency works on ChatGPT Image 2 inside the hubStudio app | Help center Background row covers "the ChatGPT Image engines" together | Not tested in the app; the API refused it for gpt-image-2 on the same day | 2026-10-08 |
| A latency figure from our runs other than run 6 | The CLI does not time runs 1 to 4 | One timed run (86 seconds) is an anecdote, not a benchmark; the page quotes OpenAI's ceiling only | 2026-10-08 |
| A SynthID or invisible-watermark claim for gpt-image-2 | The manifest lists a watermarking action; OpenAI's provenance guide checks SynthID | No OpenAI page read says which signal gpt-image-2 carries beyond the C2PA manifest we read | 2026-10-08 |
| The ChatGPT Images 2.0 launch post | openai.com/index/introducing-chatgpt-images-2-0/ | Returned 403 to automated fetch on 2026-09-10 (brief 40); the model page snapshot date carries the date instead | 2026-10-08 |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| (none in the repo) | Test outputs stay in the session scratch folder by the brief's rule; the runs are logged in the table above | 2026-10-08 | Images API |
| /Images/app/imageStudio.webp (existing, localized) | The Image studio, engine menu and the three jobs | existing capture | src/data/app-shots.ts |
| /Images/app/explore.webp (existing, localized) | Explore with the ChatGPT Image 2, 2.5 Flare and 2.5 Sunburst cards | existing capture | src/data/app-shots.ts |

## R8. Reconciliation (filled after drafting)

Check 2: every OpenAI URL in the claims table was re-fetched at 07:33 UTC on
2026-10-08, after drafting and the quality pass: the image-generation guide,
the gpt-image-2 model page, the Images API reference, the prompting guide and
the content-provenance guide. All returned HTTP 200, and a string match
confirmed each quoted sentence and value still on the page (23 strings,
all present; the provenance sentence is wrapped across two lines in the
source). The help-center facts were re-read from the working tree the same
day (create-an-image.md and skills.md, both updated 2026-10-08).

Every number and quoted phrase in the draft, against this file:

| In the draft | Row it traces to |
|---|---|
| 3,840 px, multiples of 16, 3:1, 655,360 to 8,294,400 px | Size rules |
| 2,560 by 1,440 experimental; "results can be more variable above this size" | Experimental row |
| Low, medium, high, auto; higher settings on 2.5 | Quality row; app 2.5 row |
| Low quality for quick drafts, compare higher settings for finals | Quality guidance row |
| Each Quality option shows its price before you pick | App row (help center, The price line) |
| Up to 16 input images (API), up to 4 (app) | Edits endpoint row; app row |
| 1 to 10 images | n row; app row |
| 32,000 characters (API), 4,000 (app) | Prompt row; app row |
| 1,536 px upload resize | App row |
| Up to two minutes; the three quoted limitation phrases | Limitations row |
| 50 MB mask cap, alpha channel, first image | Masking row |
| "entirely prompt-based", "may not follow its exact shape with complete precision" | Masking row |
| 2.4 percent, 20 levels out of 255 | Run 6 |
| Two of nine ingredient names | Run 3 |
| Six tests | Runs 1 to 6 (5b is the retry of 5, reported inside it as "twice, under both model names") |
| Panorama 3:1 and Tall 1:3 | App row |
| April 21, 2026 snapshot | Model page row |
| "for fast, high-quality image generation and editing" | Model page row |
| "Earlier GPT Image models"; Sunburst and Flare quotes | 2.5 row |
| "to strongly engage the model's photorealistic mode" | Prompting advice row |
| C2PA Content Credentials naming gpt-image-2, trained algorithm | C2PA row (own observation) |
| Editing, converting or sharing can remove metadata | Provenance guide row |

Nothing in the draft is missing from this file. Removed during drafting: the
86-second timing of run 6 (one run is not a measure) and the token counts
(they read as cost data). One edit to a prompt as published: run 3 was sent
with the British spelling "grey"; the page prints "gray" under the
American spelling rule, a spelling change only.
