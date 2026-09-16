# Research: the-2026-model-roster

| Field | Value |
|---|---|
| Brief | 040 |
| Target query | best ai model for product images 2026 |
| Gap statement (one sentence) | No page ranking for these queries separates the model from the app built on it, dates a leaderboard rank and states how it was voted, quotes the maker's own admitted limitations, or says what each maker's terms allow for commercial use, so every "best model" answer on the first page is an undated opinion from a seller. |
| Research time spent | About 95 minutes active, 2026-09-10. The session's web-search budget was exhausted after the five SERP queries plus maker-URL discovery; everything after that was read by direct fetch of maker, terms, leaderboard and paper URLs |
| Written | 2026-09-10 |

**Handling rule for this file.** Generation models and their makers are
named as tools, per the planning decision in brief 40 (2026-09-10), because
site pages already name them. Creative studios, agencies, creative automation
platforms, resellers and self-serve creative apps built on top of models are
never named, described or alluded to. Where one surfaced in a SERP, its row
says "quarantined" and the domain appears only in Do not publish.

## R0. What the site already says about models, first-party

Read from the repo 2026-09-10 (grep of `src/pages` and `src/data` for model
names, then the matching lines opened). The site already names generation
models as tools on at least fourteen pages. Where the site conflicts with a
maker page, the conflict is flagged here and in Notes for the writer (SPEC.md
stop condition 5: the site wins on what the site says, but the article may not
repeat a site claim a maker page contradicts).

| Page | File and line | Models named | Role the site gives each | Reading |
|---|---|---|---|---|
| Video production service | `src/pages/services/design/video-production.astro:116`, FAQ `:198` | Veo 3.1, Kling 3.0, Seedance 2.0, Runway Gen-4.5, Wan 2.6, Hunyuan, Hailuo, Pika, ComfyUI | Veo 3.1 "native 48kHz audio", "cinematic brand work", "true 4K"; Kling 3.0 "high-motion sequences and the longest extendable output window"; Seedance 2.0 "phoneme-level lip-sync across eight-plus languages"; Runway Gen-4.5 "granular camera control" and "reference-driven character consistency"; "Wan 2.6 and Hunyuan for open-source fine-tuning on private infrastructure"; Hailuo and Pika "for expressive social motion at speed". "The model choice is a creative decision per shot" | The nearest thing the site has to a roster. **Conflict flagged:** Wan 2.6 is described as open-source. See the open-weight section: the last open-weight Wan release found on a maker page is Wan 2.2. Do not repeat "Wan 2.6 open-source" in the article |
| Motion design service | `src/pages/services/design/motion-design.astro:110-111`, `:568-571` | Kling 3.0, Seedance 2.0, Wan 2.6, Hunyuan Video, Runway Gen-4.5, Veo 3.1, ComfyUI | "Kling 3.0 and Seedance 2.0 for image-to-video and motion transfer. Wan 2.6 and Hunyuan Video for high-volume product motion. Runway Gen-4.5 when precise camera direction matters. Veo 3.1 when integrated audio belongs in the generation" | Role statements, no method. Consistent with video production page |
| Illustration design service | `src/pages/services/design/illustration-design.astro:116`, `:588-591` | Nano Banana, Seedream v4, Midjourney, Hunyuan, Qwen | "Nano Banana for photoreal integration, Seedream for line work, Midjourney for painterly mood, the Chinese models for graphic Asian aesthetics" | Role statements. Seedream version on site (v4) is behind the maker's current release (5.0 Pro, July 2026) |
| Creative strategy service | `src/pages/services/design/creative-strategy.astro:561-565` | Midjourney, Stable Diffusion, ComfyUI, Hunyuan, Wan | Hunyuan and Wan "in rotation for China-bound work, where the Chinese models tend to render Mandarin signage and East-Asian faces with fewer post-production fixes" | A comparative quality claim with no method. **Not cleared for the article** as a claim; may be described as studio practice only if the writer keeps "tend to" and attributes it to the page. Safer: cut |
| Presentation design service | `src/pages/services/design/presentation-design.astro:139`, `:211` | Midjourney, custom LoRAs, a self-serve presentation app (quarantined, not named here), Midjourney Pro, Flux Pro | "commercially safe models (Midjourney Pro, Flux Pro, custom-trained LoRAs on your assets)" | The "commercially safe" label is the site's; the maker terms section below is what the article cites instead |
| Ebook and digital reports service | `src/pages/services/design/ebook-digital-reports.astro:201` | Firefly | Editorial illustration "generated with Firefly carries Adobe Content Credentials when the brief calls for it" | Provenance role. Firefly not researched for the roster (a creative suite, not a standalone model roster candidate) |
| AI video production | `src/pages/solutions/ai-production/video.astro:130`; `:36`, `:80`, `:122` | Wan, Veo, Flux, Suno (training syllabus) | Training covers "Wan, Veo, Flux, Suno". Separately: "ship it in 47 languages with lip-sync precision" | 47 languages is a ledger delivery figure with method still needed |
| AI image production | `src/pages/solutions/ai-production/image.astro:131` | ChatGPT, MidJourney (named as public platforms not used) | "We never send brand data to public AI platforms such as ChatGPT or MidJourney. All content is processed on private, dedicated servers using open-source AI models." | **Site conflict flagged.** Other pages name closed API models (Veo 3.1, Kling 3.0, Seedance 2.0, Nano Banana, Midjourney Pro, Flux Pro) as production tools. The article must not assert either "open-source only" or "closed APIs with brand data". Writer: describe the roster as tools per asset type, and do not state where brand data is processed. Flag to site backlog |
| Consulting | `src/pages/solutions/consulting.astro:57`, `:63` | Flux, Stable Diffusion XL, Kling, Veo3, Wan | "open-source and API-based models (Flux, Stable Diffusion XL, Kling, Veo3, Wan)" | Acknowledges both open-source and API models, contradicting the image page |
| Training | `src/pages/solutions/training.astro:79-102` | MidJourney, Gemini, ChatGPT-4o, Flux, Wan, Veo, ComfyUI, ControlNet, Stable Diffusion | Syllabus tool tour | Training context only |
| Glossary | `src/pages/resources/glossary.astro:376-410` | ChatGPT Image 2 (gpt-image-2), Nano Banana 2, Kling 3.0, Seedance 2.0; elsewhere Sora, Runway, Pika, Kling, ElevenLabs, Resemble, PlayHT, plus two self-serve avatar apps (quarantined here) | gpt-image-2 "launched April 2026 as the successor to DALL·E"; Nano Banana 2 "released February 2026"; Kling 3.0 "released February 2026 ... native 4K, 60 FPS, and up to 15 seconds"; Seedance 2.0 "Currently ranks #1 for image-to-video with audio on the Artificial Analysis leaderboard" | **The Seedance #1 line is an undated leaderboard rank on the site.** The brief bans ranking on an undated leaderboard. Do not repeat it. Kling "60 FPS" not confirmed on the maker release read here |
| How-to: Nano Banana prompting | `src/pages/resources/how-to/nano-banana-prompting-guide.astro:6-19` | Nano Banana 2 (Gemini 3.1 Flash Image), Nano Banana Pro (Gemini 3 Pro Image) | "not interchangeable, and picking the wrong one is the cheapest mistake to avoid" | Internal link candidate for the image row |
| How-to: Nano Banana Pro editing | `src/pages/resources/how-to/nano-banana-pro-photo-editing.astro:6-77` | Nano Banana Pro | Relight, re-angle, "upscales to 4K", text replacement in frame | Internal link candidate for the editing and upscale rows |
| Insight: Veo 3 review | `src/pages/resources/insights/veo-3-studio-review.astro` | Veo 3, Runway ML, Pika Labs | Qualitative ratings table; "a 60% cost reduction in initial concept development"; "30% of outputs requiring significant rework" | No method on any figure. **Do not reuse.** Also Veo 3 is superseded by Veo 3.1 on the maker page |
| Insight: diffusion models explained | `src/pages/resources/insights/diffusion-models-explained.astro:44-55` | DALL-E, Midjourney, Stable Diffusion, Flux | One-line role for each; "tested 40% higher for authenticity than stock photography" | No method. **Do not reuse.** DALL-E is described on the glossary as retired |
| Insight: custom AIGC workflows | `src/pages/resources/insights/custom-aigc-workflows.astro:19-56` | Stable Diffusion 3.5, Flux | Foundation layer and speed layer roles | Older framing, not reused |
| Insight: Adobe AI mistake | `src/pages/resources/insights/adobe-ai-mistake.astro:14-17` | Hunyuan Image 3.0, Gemini 2.5 Flash Image, Qwen-Image, Wan 2.2 | "Ranked first on LMArena"; "A leading video generation model on VBench" | Undated ranks. **Do not reuse.** Also names a software company in commentary, which this article must not echo |
| Insight: AI content introduces itself | `src/pages/resources/insights/your-ai-content-is-about-to-introduce-itself.astro:14`, `:66` | Veo, Kling, Seedance, Wan, ElevenLabs | "The models are commodities now ... Every studio has the same access, so the output separates on direction rather than tooling" | The closest the site comes to the article's thesis. Usable as the site's stated position |
| Insight: AI sound for video | `src/pages/resources/insights/ai-sound-for-video.astro:10` | HunyuanVideo-Foley | Synchronized sound from video | Not on the roster scope (sound effects) |
| AI excellence | `src/pages/the-studio/ai-excellence.astro:225`, `:674-676` | none by name | "For commercial work, we use models with clear licensing terms." | First-party policy. Supports the commercial-terms column. Stat block figures on the same page (60 percent, 22 to 78 percent, 7x, 80 percent) stay blocked per ledger |
| Editorial image script | `scripts/generate-image.mjs:22`, `:38` | gpt-image-2 (default), gpt-image-1.5, gpt-image-1, gpt-image-1-mini | Default model for this site's editorial images | First-party fact about the site's own tooling. Usable as "hubStudio's own editorial images on this site are generated with gpt-image-2", no figure attached |

**What R0 means for the article.** The roster table can name every model the
site already names, but not in the site's words where the site claims a rank,
an open-source status or a comparative quality with no method. The roster cells
must come from maker pages (maker claims) and dated method-stated evaluations,
listed below. The site gives no single delivery figure with a method; see Notes
for the writer on the slot requirement.

## R2. SERP map

Searched 10 September 2026. The search surface returned six or seven organic
results per query, not ten; counts below are what came back, not padded. Ages
are taken from the title or the result where a year was printed; pages were not
opened one by one. The session's web-search budget was exhausted after these
five queries, so no further phrasings could be run: every later fact in this
file comes from a direct fetch of a known maker, terms, leaderboard or paper
URL. Quarantined rows are creative apps, studios, agencies, resellers or
self-serve tools built on top of models: they are recorded by domain here for
re-verification only and never reach the page.

Query: **best ai model for product images 2026** (7 returned)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | weshop.ai | Self-serve AI photo app blog (quarantined) | "Ultimate AI image model review for ecommerce", model-by-model impressions | No method, no dated evaluation, sells an app built on the models it reviews | 2026 per title |
| 2 | datanorth.ai | AI consultancy listicle | Top ten image tools, "Q3 update" | Tools and apps mixed with models, no method, no terms | 2026 Q3 per title |
| 3 | fibbl.com | Product visualization vendor listicle | Twelve tools for product photography | Apps not models, no evaluation, seller-published | 2026 per title |
| 4 | nightjar.so | AI product photo app blog (quarantined) | Ten product photography tools | Seller ranking its own category | 2026 per title |
| 5 | rewarx.com | AI product photo app blog (quarantined, already in the ledger as a failed source) | "Which AI image model dominates ecommerce product shots" | Asserted ranking, no sample, no date on the rank | 2026 per title |
| 6 | teamday.ai | AI agent platform blog | "10 compared, ranked by job" | Closest in shape to a roster; no method, no maker terms, no failure evidence | 2026 per title |
| 7 | blog.mage.space | Self-serve image app blog (quarantined) | Best generator for product photography | Seller of the app, no method | 2026 per title |

Search summary text on this query asserted a model was "the most commercially
reliable" and that there is "no single best AI image model in 2026". Both came
from the pages above, carry no method, and are not cited.

Query: **best ai video model for ads 2026** (7 returned)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | higgsfield.ai | Self-serve video app blog (quarantined) | Six video generators "tested and compared" | Tests not described, sells access to the models it ranks | 2026 per title |
| 2 | heygen.com | Self-serve avatar video app blog (quarantined) | Best generator for ads | Seller ranking the category it sells into | 2026 per title |
| 3 | higgsfield.ai | Same app, second page (quarantined) | Five video models "tested and compared" | Same | 2026 per title |
| 4 | zeely.ai | Ad creative app blog (quarantined) | Best video models for marketing | No method | 2026 per title |
| 5 | creativemarketing.ai | Ad creative vendor blog (quarantined) | Ten models for automation and ads | No method | 2026 per title |
| 6 | vidau.ai | Video app blog (quarantined) | Eighteen models, how to choose | No method, no dated rank | 2026 per title |
| 7 | technology.org | Technology news site | Best models for cinematic ads | Reads as sponsored roundup, no method | 2026-06-05 per URL |

Search summary text quoted a model as "the strongest AI video model for
commercial content in 2026" and two models as producing people "visually
indistinguishable from real actors". Neither traces to a method. Not cited.

Query: **which ai image generator for ecommerce** (6 returned)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | shopify.com | Commerce platform blog | Top AI image tools for ecommerce | 2025 page, apps not models, no evaluation | 2025 per title |
| 2 | wizcommerce.com | B2B commerce software blog | Eleven product photo generators | Apps, no method | 2026 per title |
| 3 | pineable.com | Listicle | Twenty-two photo generators | Apps, no method, no dates | not dated in the result |
| 4 | usemintly.com | Product photo app blog (quarantined) | How to make AI product photos for marketplaces | Seller how-to | not dated in the result |
| 5 | usemintly.com | Same app, product page (quarantined) | The app itself | Product page | not dated in the result |
| 6 | pixelpanda.ai | Product photo app page (quarantined) | Free tool page | Product page | not dated in the result |

Query: **ai models for brand content comparison** (7 returned)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | senso.ai | AI visibility vendor blog | How language models decide brand recommendations | Off-intent: about chatbots recommending brands, not generation models | not dated in the result |
| 2 | sitepoint.com | Developer publication | AI brand visibility monitoring tools | Off-intent | 2026 per title |
| 3 | thatagency.com | Agency blog (quarantined) | Comparing language models for marketing | Off-intent, agency-published | not dated in the result |
| 4 | unusual.ai | AI visibility vendor blog | Writing comparison content language models trust | Off-intent | not dated in the result |
| 5 | cited.md | AI visibility vendor article | How AI systems compare brands | Off-intent | not dated in the result |
| 6 | trysight.ai | AI visibility vendor guide | Tracking how models describe a brand | Off-intent | not dated in the result |
| 7 | bartplatteeuw.com | Personal consultant blog | Comparison content for AI tools | Off-intent | not dated in the result |

This phrasing is captured entirely by the generative-search visibility
category. Seven of seven results are off-intent.

Query, Chinese-language web (R4), romanized: **2026 dianshang chanpin tu AI
moxing na ge hao duibi** (2026 ecommerce product image AI model, which is
better, comparison) (7 returned)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | m.jiemian.com | Chinese business news | Panorama of 2026 ecommerce AI tools, single-point efficiency to agents | Tools and platforms, not models; no evaluation | 2026 per title |
| 2 | csdn.net | Developer community, ranking list | Five ecommerce creative platforms compared | Apps, reads as placed content | 2026-07-20 per URL |
| 3 | csdn.net | Same, second list | Ten mainstream ecommerce image tools by scenario | Apps, no method | 2026-07-16 per URL |
| 4 | csdn.net | Same, third list | Product image software, four core capabilities | Apps, no method | 2026-07-07 per URL |
| 5 | csdn.net | Same, fourth list | Six product image generation tools | Apps, no method | 2026-07-20 per URL |
| 6 | csdn.net | Same, fifth list | Product image software ranking by ecommerce need | Apps, no method | 2026-07-07 per URL |
| 7 | zhuanlan.zhihu.com | Q and A column | Eight text-to-image platforms compared | Platforms, no method | 2026 per result |

**Finding from the Chinese pass.** The Chinese web answers the question with
ranked lists of self-serve apps, not models. Its one useful contribution is
the buyer checklist the summary repeated: test batch consistency, check whether
commercial rights are granted, whether outputs carry a watermark, and whether
training data carries copyright risk. That is a structure, not a figure, and it
matches the test criteria below. No Chinese result names a model with a dated,
method-stated evaluation.

**Publisher-type counts across the four English queries, 27 results, counted
by row.**

| Publisher type | Q1 | Q2 | Q3 | Q4 | Total |
|---|---|---|---|---|---|
| Self-serve app or tool built on the models it ranks (quarantined) | 4 | 6 | 3 | 0 | 13 |
| Other software, consultancy or commerce platform vendor | 3 | 0 | 2 | 0 | 5 |
| Listicle, no disclosed business | 0 | 0 | 1 | 0 | 1 |
| Technology news site | 0 | 1 | 0 | 0 | 1 |
| Off-intent (visibility vendors 5, agency 1, consultant 1) | 0 | 0 | 0 | 7 | 7 |
| **Total** | 7 | 7 | 6 | 7 | 27 |

**Maker pages in the results: 0 of 27. Independent evaluations with a method
and a date: 0 of 27. Pages printing a leaderboard rank with its date and
method: 0 of 27.** Chinese pass: 0 of 7 on all three counts. On-intent results
(queries one to three, 20 rows): 18 of 20 published by a company with a
commercial interest in the answer.

**The bar:** ranking pages are listicles of 6 to 22 tools, roughly 1,500 to
3,000 words, one comparison table at most, "tested" with no test described,
apps and models mixed in one list, ranks asserted with no date, no commercial
terms, and no failure mode traced to research. To beat them the page needs:
1,600 words, a roster table by asset type with a source per cell, a test
criteria table labeled production practice, every rank carrying a read date
and the arena's method, each maker's own stated limitation, and a terms column
that says plainly where the terms could not be read.

**The gap, in one sentence:** No page ranking for these queries separates the
model from the app built on it, dates a leaderboard rank and states how it was
voted, quotes the maker's own admitted limitations, or says what each maker's
terms allow for commercial use, so every "best model" answer on the first page
is an undated opinion from a seller.

**H1 consequence:** the working H1 ("The 2026 model roster: which AI model for
which asset") holds and should stay: it promises a roster by asset, not a
winner, which is the honest answer the evidence supports. The deck should say
the roster was read on a stated date and is re-tested, because ranks moved
materially inside nine months (see R6). Do not put "best" in the H1. The
primary query phrase "best ai model for product images 2026" goes in the first
100 words and one H2, answered as "there is no single best; here is what the
dated evidence shows for product stills".

## R1. Claims the page needs, resolved

Mapped before the maker pages were read. Each item resolved as holds, breaks
or cut.

| # | What the page needs to be true | Verdict |
|---|---|---|
| 1 | Each asset type (product still, on-model or lifestyle, environment, image editing, short video, lip sync or talking head, voice, upscale) has at least one current model whose maker states a relevant capability on its own page | **Holds.** Fifteen maker release or model pages read and dated, plus four maker documentation or license pages |
| 2 | One model is "the best" for product images | **Breaks.** Two public blind-vote arenas agree on the top non-preliminary image model but disagree on the order below it, neither publishes a product-still category score on the pages read, and the confidence intervals of several models overlap. The page answers "no single best" with the dated evidence |
| 3 | Leaderboard ranks can be cited with a date and a method | **Holds, with limits.** One arena prints a last-updated date and vote counts; the other prints no date on the leaderboard pages but publishes its method and says video ratings are recomputed hourly, so every rank from it carries the read date, 10 September 2026. A January 2026 paper shows arena anonymity can be broken, which is a limit the page states |
| 4 | Commercial-use terms are readable per model | **Partly holds.** Readable: Google (Gemini API terms), Runway, ElevenLabs, the FLUX.2 [dev] license, the Qwen-Image and Wan 2.2 repositories (Apache 2.0). Not readable by automated fetch on 10 September 2026: OpenAI (403 on two terms URLs), Midjourney (403 on two URLs), Kling (JavaScript shell, no clause text). BytePlus (the cloud route for Seedance, Seedream and OmniHuman) serves a 2022 terms page with no clause on AI output. MiniMax terms not located before the search budget ran out. The page says which is which |
| 5 | Known failure modes per model class come from method-stated research, not vendor blogs | **Holds.** Video physics, anatomy and commonsense (VBench-2.0); long text in images (TextAtlas5M); hands (HandRefiner, older models); lip sync on arbitrary faces and shortcut learning (Wav2Lip, LatentSync); physical realism in edits (PICABench, ledger); generated images not tied to physical parameters (Journal of Vision, ledger); fidelity in generative restoration (SUPIR); open against proprietary editing gap (ImgEdit, authors' statement) |
| 6 | Makers publish their own limitations | **Holds for six.** Nano Banana Pro, Seedream 5.0 Pro, Seedance 2.0, Runway Gen-4.5, Veo 3.1, MiniMax H3 each state one or more on the page read. Pages for gpt-image-2 docs, Nano Banana 2, FLUX.2, Midjourney V8.1, Kling 3.0, Qwen-Image-2512 and OmniHuman 1.5 state none |
| 7 | Which roster models are open-weight and which are closed can be stated from maker pages | **Holds.** Open: FLUX.2 [dev] (non-commercial model license, commercial outputs allowed), Qwen-Image line (Apache 2.0), Wan 2.2 (Apache 2.0). Closed or no weights found: all others read. MiniMax H3 says it "plans" to open weights, unverified |
| 8 | Models change fast enough that a roster needs re-testing | **Holds, as a count of what was read.** The latest release of each of the fifteen roster models with a dated maker page falls between 28 July 2025 and 31 July 2026, nine of the fifteen in 2026. On the day of reading, the public leaderboards already listed newer versions from three of the same makers than the release pages covered. A maker's December 2025 "ranked #1" video claim is checked against the current board in R6 before any use |
| 9 | Commercial use of AI output is possible but copyright in the output is not automatic | **Holds.** Reuse the US Copyright Office rows already in the ledger (briefs 22 and 29), verbatim |
| 10 | hubStudio delivery record gives one number with its method stated | **Breaks as specified.** No first-party figure on the site carries a written method. The 22 to 78 percent approval, the 7x output and the 60 and 80 percent figures stay blocked. The first-party exception allows the 70/30 catalog mix or the three to six week training window as published figures attributed to their pages, without a method. See Notes for the writer |
| 11 | The site's own model claims can be repeated | **Cut where they conflict or carry no date.** Wan 2.6 "open-source" (breaks against the maker's GitHub organization), Seedance "#1" on the glossary (undated rank), "up to 12 reference assets" for Seedance (maker states 9 images, 3 video clips, 3 audio clips), Kling "60 FPS" (not on the maker release read) |
| 12 | Upscale has a model-level answer | **Holds.** Native high-resolution output is a maker claim on four roster models; two open restoration models (Real-ESRGAN, BSD-3-Clause; SUPIR, CVPR 2024) have repositories or papers, and SUPIR's authors name the fidelity issue in generative restoration |
| 13 | A method-stated, independent evaluation exists for product stills specifically, or for lip sync across languages in production | **Cut as a claim, published as an absence.** Neither arena page read publishes a retail or product-still score, although one arena's method page lists "Retail & E-commerce" as a prompt use case. No lip-sync accuracy benchmark across languages for the current commercial models was reached |
| 14 | Provenance marking differs by maker | **Holds.** Google states SynthID on Nano Banana Pro, Nano Banana 2 (plus C2PA Content Credentials) and Veo; OpenAI states C2PA metadata on all Sora 2 assets plus a visible moving watermark on downloads. Others read state nothing |

## Maker pages: roster candidates by asset type

Every row read on the maker's own surface on 10 September 2026 (launch post,
model card, documentation, repository or the maker's press release on a wire).
**Every capability in this section is a maker claim** and carries that label
on the page. "Limitation stated" quotes the maker; "none stated" means the page
read printed none, not that none exists.

### Still images: product still, on-model or lifestyle, environment, text in image

| Model (maker) | Version and date | Maker claims, quoted | Limitation stated by the maker | Source URL |
|---|---|---|---|---|
| GPT Image 2 (OpenAI) | Snapshot `gpt-image-2-2026-04-21`; launch post 403 to automated fetch | "state-of-the-art image generation model for fast, high-quality image generation and editing"; input "text, image", output "image"; image generation and image edit endpoints supported; "inpainting" listed | None stated on the documentation page | developers.openai.com/api/docs/models/gpt-image-2 (openai.com/index/introducing-chatgpt-images-2-0/ returned 403) |
| Nano Banana 2, Gemini 3.1 Flash Image (Google DeepMind) | 26 February 2026 | "Maintain character resemblance of up to five characters and the fidelity of up to 14 objects in a single workflow"; "generate accurate, legible text for marketing mockups or greeting cards. You can even translate and localize text within an image"; "aspect ratios and resolutions from 512px to 4K"; "coupling our state-of-the-art SynthID technology with interoperable C2PA Content Credentials" | None stated | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ |
| Nano Banana Pro, Gemini 3 Pro Image (Google DeepMind) | 20 November 2025 | "blend more elements than ever before, using up to 14 images"; "maintaining the consistency and resemblance of up to 5 people"; "available 2K and 4K resolution"; "Select, refine and transform any part of an image with improved localized editing. Adjust camera angles, change the focus and apply sophisticated color grading"; "all media generated by Google's tools are embedded with our imperceptible SynthID digital watermark" | Model page: may struggle with "small faces, accurate spelling, and fine details"; real-world knowledge "extensive but not infallible"; character consistency "may not always get it right"; complex edits may produce "unnatural results, visual artifacts, or disjointed scenes" | blog.google/innovation-and-ai/products/nano-banana-pro/; deepmind.google/models/gemini-image/pro/ |
| FLUX.2 (Black Forest Labs) | 25 November 2025 | "Reference up to 10 images simultaneously with the best character / product / style consistency available today"; "Image editing on resolutions up to 4MP"; "Complex typography, infographics, memes and UI mockups with legible fine text now work reliably"; [pro] and [flex] API-only; [dev] a 32B open-weight model; [klein] announced as an Apache 2.0 model, "coming soon" at launch | None stated | bfl.ai/blog/flux-2 |
| Seedream 5.0 Pro (ByteDance Seed) | 8 July 2026 | "Accurately transforms data, concepts, and dense text into professional layouts"; "point selection, lasso selection, sketch rendering, color and material replacement, layer separation, and multi-image fusion"; layer separation into "more than 10 independent layers"; "Reproduces real-world lighting, materials, and skin textures"; rendering "for over ten commonly used languages" | "There is still room to improve in finer-grained text rendering and pixel-level editing consistency." | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro |
| Midjourney V8.1 (Midjourney) | Default model from 11 June 2026 | "smarter, more coherent, better adheres to detailed prompts"; "renders text better than ever"; "renders at twice the size and 4x the resolution of V7 images" (HD mode); "Style references, personalization, and aesthetics remain consistent between V7 and V8.1" | "V7 omni-reference is available to use while we finish training the improved version for V8", so the character-reference feature ran on the older model at the date read | updates.midjourney.com/v8-1-is-now-the-default-model/ |
| Qwen-Image line (Alibaba Qwen) | Qwen-Image 4 August 2025; Qwen-Image-Edit 18 August 2025; Edit-2509 22 September 2025; Edit-2511 23 December 2025; Qwen-Image-2512 31 December 2025; Qwen-Image-2.0 10 February 2026 | Qwen-Image "achieves significant advances in complex text rendering and precise image editing"; Edit-2511 "Multiple Image Support and Improved Consistency"; 2512 "significantly reduces the 'AI-generated' look ... especially for human subjects" and "improves the accuracy and quality of textual elements"; 2.0 "Professional Typography Rendering" and "native 2K resolution support" | None stated | github.com/QwenLM/Qwen-Image; huggingface.co/Qwen/Qwen-Image-2512 |

Not read at a maker page and therefore not on the roster as a capability row:
Qwen-Image-3.0 (appears on both image arenas), and every other image model
ranked on the arenas below.

### Video: short video, image to video, reference-driven shots

| Model (maker) | Version and date | Maker claims, quoted | Limitation stated by the maker | Source URL |
|---|---|---|---|---|
| Veo 3.1 (Google DeepMind) | 15 October 2025 | "providing up to 3 reference images of a character, object, or scene"; scene extension to "create longer videos, even lasting for a minute or more"; "By providing a starting and an ending image, you can direct Veo 3.1 to generate the transition between them"; model page lists "1080p and 4K" and native audio including "sound effects, ambient noise, and even dialogue"; "Videos made with Veo will be marked with SynthID" | "Creating videos with natural and consistent spoken audio, particularly for shorter speech segments, remains an area of active development." | developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/; deepmind.google/models/veo/ |
| Veo 3.1 maker evaluation | Charts dated October 2025 on the model page | Text to video on MovieGenBench, 1,003 prompts: "Veo 3.1 performs best on overall preference"; image to video on a VBench set of 355 image and text pairs: outputs "were preferred overall"; text to video with audio, 527 prompts: preference advantage and "audio that is better synchronized" | Rater count and rater pool not stated on the page read. **Maker claim, maker-run comparison** | deepmind.google/models/veo/ |
| Kling 3.0 series (Kuaishou) | Press release 5 February 2026 | "Video 3.0, Video 3.0 Omni, Image 3.0 and Image 3.0 Omni"; "extended video duration of up to 15 seconds"; Image 3.0 "2K and 4K ultra-high-definition output"; native audio "speech in English, Chinese, Japanese, Korean, Spanish, and various English accents and Chinese dialects"; "multi-shot storyboard feature"; "upload a reference video, enabling the AI to extract visual traits and voice characteristics of a character and replicate them faithfully"; "retain or generate text, such as signage, captions, and branded elements, with high accuracy" | None stated. At release "available for exclusive early access to Ultra subscribers" | globenewswire.com/news-release/2026/02/05/3232837 (the investor relations page at ir.kuaishou.com timed out) |
| Seedance 2.0 (ByteDance Seed) | 12 February 2026 | "input up to 9 images, 3 video clips, 3 audio clips, plus natural language instructions"; "15-second high-quality multi-shot audio-video output" with "dual-channel audio"; voiceovers "seamlessly aligned with the visual rhythm"; internal evaluation set built with experts, method, sample and raters not disclosed | "still requires ongoing refinement in detail stability, hyper-realism, and dynamic vitality"; "occasional audio distortion"; "room for optimization regarding multi-subject consistency, text rendering accuracy, and complex editing effects" | seed.bytedance.com/en/blog/official-launch-of-seedance-2-0 |
| Runway Gen-4.5 (Runway) | 1 December 2025 | "State-of-the-art motion quality, prompt adherence and visual fidelity"; "Ranked #1 on the Artificial Analysis Text-to-Video benchmark with 1,247 Elo points" as of 30 November 2025, "determined by blind human preference voting across thousands of pairwise comparisons" | "Causal reasoning: effects sometimes precede causes (e.g., a door opening before the handle is pressed)"; "Object permanence: objects may disappear or appear unexpectedly across frames"; "Success bias: actions disproportionately succeed (e.g., a poorly aimed kick still scoring a goal)" | runway.com/research/introducing-runway-gen-4.5 |
| Sora 2 (OpenAI) | System card published 30 September 2025 | "more accurate physics", "synchronized audio", "enhanced steerability"; "C2PA metadata on all assets"; "Visible moving watermark on videos downloaded from sora.com or the Sora app"; "restricting the use of image uploads that feature a photorealistic person and all video uploads" | "some harmful behaviors or policy violations may still circumvent mitigations" (a safety limitation, not a quality one) | deploymentsafety.openai.com/sora-2 |
| MiniMax H3 (MiniMax) | 31 July 2026 | "up to 15 seconds at 2K resolution"; "all audio output is native stereo"; mixed references across video, image and audio in one instruction; described as following the earlier Hailuo 01 and Hailuo 02 designs; "we plan to open up the model weights in the coming days, subject to applicable laws and regulations" | "H3 still has room to grow"; "Visual detail can still be improved in certain scenarios" | minimax.io/blog/minimax-h3 |
| Wan 2.2 (Alibaba Tongyi Lab, Wan-Video) | Weights and inference code released 28 July 2025; S2V-14B 26 August 2025; Animate-14B 19 September 2025 | Variants T2V-A14B, I2V-A14B, TI2V-5B, S2V-14B (speech to video), Animate-14B; TI2V-5B "720P video generation at 24 FPS"; Apache 2.0 | None stated | github.com/Wan-Video/Wan2.2 |

Not read at a maker page: Wan 2.5, 2.6, 2.7 and 3.0 (wan.video served a
JavaScript shell with no model text), Seedance 2.5, and the other video models
on the arenas. The Wan-Video GitHub organization, read 10 September 2026, lists
Wan2.1 and Wan2.2 weights repositories and no repository for Wan2.5, Wan2.6,
Wan2.7 or Wan3.0.

### Lip sync, talking head and voice

| Model (maker) | Version and date | Maker claims, quoted | Limitation stated by the maker | Source URL |
|---|---|---|---|---|
| OmniHuman 1.5 (ByteDance, via its BytePlus cloud) | Page undated, read 10 September 2026 | "From a single image and a voice track, OmniHuman-1.5 generates expressive character animations"; "syncing lip movements, emotions, and gestures with audio"; "Generate dynamic group dialogues and ensemble performances by routing separate audio tracks to the correct characters"; "Supports native 1080p-resolution video output" | None stated; no consent or real-person restriction printed on the page | byteplus.com/en/product/OmniHuman |
| Seedance 2.0, Kling 3.0, Veo 3.1, MiniMax H3 | As above | Native audio with speech generated in the same pass (see video table). Kling lists five languages plus accents and dialects; Veo 3.1 flags short speech segments as a weakness; MiniMax H3 does not claim lip sync explicitly | As above | As above |
| Wan2.2-S2V-14B (Alibaba) | 26 August 2025 | Speech-to-video variant, open weights, Apache 2.0 | None stated | github.com/Wan-Video/Wan2.2 |
| Eleven v3 (ElevenLabs) | Generally available 2 February 2026 | "our most advanced Text to Speech model"; documentation: `eleven_v3`, "70+ languages supported", "5,000 character limit", suited to "Audiobook Production" and multi-character dialogue; `eleven_v3_conversational` "Low latency (~280ms)" | Documentation positions v3 for non-real-time use and a separate conversational model for real time; Flash v2.5: "Numbers aren't normalized by default in a way you might expect" | elevenlabs.io/blog/eleven-v3-is-now-generally-available; elevenlabs.io/docs/overview/models |
| Eleven v3 maker evaluation | 2 February 2026 | "users preferred the new version 72% of the time over the previous Alpha release"; "68% reduction in errors. Error rate dropped from 15.3% to 4.9%"; "tested against an internal benchmark covering 27 categories across 8 languages" | **Maker claim, internal benchmark, compared only against its own alpha.** Sample size of users not stated. The "8 languages" is the benchmark's coverage, not the model's language count | elevenlabs.io/blog/eleven-v3-is-now-generally-available |

### Upscale and restoration

| Model (maker) | Version and date | Claims, quoted | Limitation stated | Source URL |
|---|---|---|---|---|
| Native high-resolution output | As above | Nano Banana 2 "from 512px to 4K"; Nano Banana Pro "2K and 4K"; Veo 3.1 "1080p and 4K"; Midjourney V8.1 HD "4x the resolution of V7"; Kling Image 3.0 "2K and 4K"; MiniMax H3 "2K" | As above | As above |
| Real-ESRGAN (open-source research project, Tencent ARC lineage per the repository) | Paper at ICCV Workshops 2021 | "Practical Algorithms for General Image/Video Restoration"; 2x, 3x and 4x models plus arbitrary scale; BSD-3-Clause license | The portable executable may introduce "block inconsistency" from tile-based processing | github.com/xinntao/Real-ESRGAN |
| SUPIR (research paper) | arXiv v1 24 January 2024, v2 3 April 2024, CVPR 2024 | Restoration with a generative prior and model scaling; "a dataset comprising 20 million high-resolution, high-quality images"; text-guided restoration | Authors "develop a restoration-guided sampling method to suppress the fidelity issue encountered in generative-based restoration", which names the fidelity risk of generative upscaling | arxiv.org/abs/2401.13627 |

Writer's note on Real-ESRGAN: the "Tencent ARC lineage" wording above is not
confirmed on the page read. On the page, attribute only to "an open-source
restoration model published at ICCV Workshops 2021, BSD-3-Clause".

## Commercial-use terms

Read 10 September 2026. Quotes are the maker's own terms. **This describes what
the terms say, not legal advice**, and the page must say so. No price, tier
price or revenue threshold figure is recorded here, by rule.

| Maker and models | Terms surface | Last updated | What the terms say about output and commercial use | Readable? |
|---|---|---|---|---|
| Google: Nano Banana 2, Nano Banana Pro, Veo 3.1 via the Gemini API | ai.google.dev/gemini-api/terms | 2026-04-28 | "Google won't claim ownership over that content." Unpaid services: "Google uses the content you submit to the Services and any generated responses to provide, improve, and develop Google products and services." Paid services: "Google doesn't use your prompts ... or responses to improve our products." "You may use only Paid Services when making API Clients available to users in the European Economic Area, Switzerland, or the United Kingdom." "Do not submit sensitive, confidential, or personal information to the Unpaid Services." | Yes |
| Runway: Gen-4.5 | runway.com/terms-of-use (runwayml.com redirects, 308) | 2026-05-11 | "Company does not claim ownership of any of your Inputs or Outputs." "Subject to your compliance with the Agreement, the Company does not restrict your commercial use of your Outputs." "You acknowledge that Inputs and Outputs may be used by the Company to train and improve its AI models" under a "non-exclusive, irrevocable, perpetual, worldwide, royalty-free, fully paid, transferable, sublicensable right and license" | Yes |
| ElevenLabs: Eleven v3 | elevenlabs.io/terms-of-use (non-EEA terms) | 2026-03-31 | "you retain all rights in and to your Output." Free users may use the services for non-commercial purposes only; paid users may use them commercially (tier condition only, no price recorded). Voice models require audio "of your voice or the voice you are authorized to share with us." ElevenLabs takes a "perpetual and irrevocable ... nonexclusive ... royalty-free ... worldwide ... and sub-licensable" license to content "to improve the Services, and to develop new services and products" | Yes. The free and paid split was read through an automated summary of the page; the direct quotes above are verbatim |
| Black Forest Labs: FLUX.2 [dev] open weights | huggingface.co/black-forest-labs/FLUX.2-dev/blob/main/LICENSE.md | License version "FLUX Non-Commercial License v2.1" (no date on the extract) | Model use is non-commercial: "revenue-generating activity" is excluded from Non-Commercial Purpose. Outputs: "You may use Output for any purpose (including for commercial purposes), except as expressly prohibited herein." "We claim no ownership rights in and to the Outputs." Outputs may not be used "to train, fine-tune, or distill a model that is competitive with a FLUX Model" | Yes. The FLUX.2 [pro] and [flex] API terms were not read |
| Alibaba Qwen: Qwen-Image line | github.com/QwenLM/Qwen-Image; Hugging Face model card metadata | Repository read 2026-09-10 | "Apache 2.0" on the repository; "apache-2.0" on the Qwen-Image-2512 card | Yes, for the open-weight releases. Qwen-Image-3.0 service terms not read |
| Alibaba Tongyi Lab: Wan 2.2 | github.com/Wan-Video/Wan2.2 | Repository read 2026-09-10 | Apache 2.0. "We claim no rights over the your generated contents, granting you the freedom to use them" (the repository's own wording, grammatical slip included); use "must not involve sharing any content that violates applicable laws" | Yes, for Wan 2.2 only |
| OpenAI: GPT Image 2, Sora 2 | openai.com/policies/services-agreement/ and openai.com/policies/terms-of-use/ | Not read | Both returned HTTP 403 to automated fetch on 2026-09-10 | **No.** The page must say the terms could not be read on the date, and send the reader to the maker's terms |
| Midjourney: V8.1 | docs.midjourney.com Terms of Service article and midjourney.com/terms-of-service | Not read | Both returned HTTP 403 to automated fetch on 2026-09-10 | **No.** Do not repeat the site's copyright-and-ai page on Midjourney tiers from memory |
| Kuaishou: Kling 3.0 | kling.ai/document-api/protocols/paidServiceProtocol (app.klingai.com redirects, 301) | Not read | Served a JavaScript shell titled "KlingAI Open Platform" with no clause text | **No** |
| ByteDance via BytePlus: Seedance 2.0, Seedream 5.0 Pro, OmniHuman 1.5 | docs.byteplus.com/en/legal/docs/terms-of-service | 2022-08-23 | Customer grants BytePlus "a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sub-licensable, and transferable right and license ... to access and use any data collected from you, or stored or uploaded by you" for purposes relating to the services. **No clause on ownership or commercial use of AI-generated output** on the page read. Any model-specific service terms were not located | **Unclear.** Readable, but silent on output. The page says the general cloud terms read do not address generated output |
| MiniMax: H3 | Not located | n/a | Terms URL not located before the search budget ran out | **No** |

**Cross-maker observation, derived.** Of the eleven maker surfaces checked, six
state in readable text that the maker does not claim the output or grants
freedom to use it (Google, Runway, ElevenLabs, the FLUX.2 [dev] license, Wan
2.2; Qwen by license type only, Apache 2.0). Four could not be read or did not
serve clause text (OpenAI, Midjourney, Kling, MiniMax). One was readable and
silent on output (BytePlus general terms). Two of the readable ones state the
maker may use inputs and outputs, or content, to improve or train its models
(Runway; ElevenLabs), and Google states the same for unpaid services only.

**The copyright layer, reused from the ledger, verbatim form.** Maker terms can
grant use; they cannot create copyright in output a human did not author. The
US Copyright Office rows logged for briefs 22 and 29 cover this and are reused
under Cleared for use.

## Independent evaluations

Two public blind-vote preference leaderboards, each with a published method,
read on 10 September 2026, plus method-stated papers. The leaderboards are
recorded by name here for traceability. On the page attribute them by category
("a public blind-vote leaderboard") with the read date and the method, never
as an undated rank. Neither publisher sells creative production; neither page
read states who funds the arena.

### Methods, as published

| Leaderboard | Method, quoted | Date signal | Limits |
|---|---|---|---|
| Artificial Analysis image arenas (text to image, image editing) | "Blind pairwise voting: Evaluators see two outputs generated from the same prompt by two different models, without model identities, and select the one they prefer." "We compute ratings using Bradley-Terry Maximum Likelihood Estimation and rescale them to an Elo-like range for readability." Judging hints and an "Engagement gate" requiring "minimum engagement time with each output". Prompt taxonomy by use case ("Marketing & Advertising, Retail & E-commerce") and capability ("Reasoning, Knowledge, Text Rendering, Layout") | **No last-updated date on the leaderboard pages read.** Cite with the read date, 10 September 2026 | Minimum votes and confidence method not stated on the method page. Leaderboard pages print a 95 percent interval and sample count per model. Category sub-scores not captured |
| Artificial Analysis video arenas | "users compare two videos generated from the same prompt by different models and select the one they prefer"; Bradley-Terry, rescaled; "Elo is reported separately for each modality (Text to Video, Image to Video, Video Editing, Text to Video with Audio, Image to Video with Audio, Video Editing with Audio)"; "Ratings are recomputed hourly." | Hourly recomputation; the text-to-video page lists models "Added to the leaderboard in the last month", the image-to-video page an August 2026 entry | Prompt categories, duration and resolution normalization not stated |
| arena.ai leaderboards (text to image, image edit, text to video, image to video) | Changelog: Bradley-Terry scores with confidence intervals moved to "a new method based on the Central Limit Theorem (CLT) for M-estimators" (23 July 2025); reweighting battles "inversely proportionally to how frequently they appear" (23 July 2025); "Deduplication filters out around 10% of all submitted votes" (14 July 2025); new models marked "preliminary" "until enough fresh votes have been collected" (18 September 2025) | **Each leaderboard page prints a last-updated date** (7 September 2026 for text to image and image edit; 4 September 2026 text to video; 2 September 2026 image to video) and total votes | What voters are asked on the image and video boards is not stated on the pages read |
| Deanonymization of text-to-image leaderboards (arXiv 2601.09647) | "generations from each T2I model form distinctive clusters in the image embedding space, enabling accurate deanonymization without prompt control or training data. Using 22 models and 280 prompts (150K images), our centroid-based method achieves high accuracy"; "Our findings expose fundamental security flaws in T2I leaderboards" | Submitted 14 January 2026 | Preprint. Shows voter anonymity can be broken; does not show that any ranking was manipulated |

### Readings, roster models only

Ranks are positions on the page as read, including models not on the roster.
"Prelim." marks a score the page labels preliminary.

**Text to image**

| Model | arena.ai, updated 7 Sep 2026 (6,142,759 votes, 78 models): rank, score, CI, votes | Artificial Analysis, read 10 Sep 2026: rank, Elo, 95% CI, samples |
|---|---|---|
| GPT Image 2 | 3, 1381, plus or minus 4, 78,731 ("gpt-image-2 medium"); ranks 1 and 2 are two preliminary OpenAI "gpt-image-2.5" variants (1421 and 1399, about 3,000 votes each) | 1, 1171, plus or minus 9, 15,381 ("GPT Image 2 (high)") |
| Nano Banana 2 (Gemini 3.1 Flash Image) | 9, 1261, plus or minus 5, 41,957 | 4, 1122, plus or minus 8, 16,622 |
| Nano Banana Pro (Gemini 3 Pro Image) | 14, 1246, plus or minus 3, 152,220 ("gemini-3-pro-image-2k") | 9, 1097, plus or minus 9, 15,085 |
| Seedream 5.0 Pro | 10, 1257, plus or minus 4, 62,443 | 13, 1080, plus or minus 8, 12,749 |
| Qwen-Image-3.0-Pro (maker page not read) | 11, 1254, plus or minus 7, 10,920 | 12, 1085, plus or minus 10, 5,835 |
| FLUX.2, Midjourney V8.1 | Not in top 15 | Not in top 15 |

**Image editing**

| Model | arena.ai image edit, updated 7 Sep 2026 (29,526,046 votes, 55 models) | Artificial Analysis editing, read 10 Sep 2026 |
|---|---|---|
| GPT Image 2 | 3, 1461, plus or minus 3, 235,928 (ranks 1 and 2 are the two "gpt-image-2.5" variants, not labeled preliminary in the extract) | 3, 1114, plus or minus 9, 13,383 |
| Seedream 5.0 Pro | 8, 1394, plus or minus 4, 179,966 | 7, 1099, plus or minus 9, 11,997 |
| Nano Banana Pro | 9, 1390, plus or minus 3, 556,580 ("gemini-3-pro-image-2k") | 9, 1093, plus or minus 9, 12,432 |
| Nano Banana 2 | 12, 1387, plus or minus 4, 157,693 | 6, 1103, plus or minus 9, 13,442 |
| Qwen-Image-3.0-Pro | Not in top 15 | 13, 1076, plus or minus 9, 12,006 |

On the Artificial Analysis editing board, ranks 1 to 10 span 1124 to 1093, a
31-point range, with every interval at plus or minus 9 or wider. The intervals
of GPT Image 2, Nano Banana 2, Seedream 5.0 Pro and Nano Banana Pro overlap.

**Text to video (with audio on Artificial Analysis)**

| Model | arena.ai, updated 4 Sep 2026 (668,045 votes, 48 models) | Artificial Analysis text to video with audio, read 10 Sep 2026 |
|---|---|---|
| Seedance 2.0 | 7, 1479, plus or minus 8, 52,864 ("dreamina-seedance-2.0-720p") | 5, 1222, plus or minus 5, 24,874 |
| MiniMax H3 | 8, 1462, plus or minus 10, 7,648 | 4, 1228, plus or minus 7, 9,028 |
| Kling 3.0 | Not in top 15 | 10, 1109, plus or minus 5, 22,560 (1080p Pro); 13, 1101 (720p Standard) |
| Sora 2 | 11, 1367, plus or minus 7, 50,415 ("sora-2-pro") | 14, 1093, plus or minus 9, 4,907 ("Sora 2 (December)") |
| Veo 3.1 | 12, 1364, plus or minus 14, 13,703 ("veo-3.1-audio") | 15, 1091, plus or minus 6, 9,507 |
| Wan 3.0 (maker page not read) | 3, 1494, plus or minus 19, 1,167 | 1, 1240, plus or minus 10, 5,625 |
| Runway Gen-4.5 | Not in top 15 | Not in top 15 |

**Image to video**

| Model | arena.ai, updated 2 Sep 2026 (1,906,002 votes, 47 models) | Artificial Analysis image to video with audio, read 10 Sep 2026 |
|---|---|---|
| MiniMax H3 | 1, 1497, plus or minus 6, 36,137 | 3, 1187, plus or minus 8, 7,499 (rank 1 is a third-party post-trained variant of the same model) |
| Seedance 2.0 | 5, 1477, plus or minus 8, 113,611 | 2, 1192, plus or minus 6, 18,167 |
| Veo 3.1 | 12, 1398, plus or minus 11, 25,112 ("veo-3.1-audio") | 11, 1087, plus or minus 7, 8,949 |
| Kling 3.0, Runway Gen-4.5, Sora 2 | Not in top 15 | Not in top 15 |

**The two scales are not comparable.** Both are rescaled to an Elo-like range
independently; 1381 on one board and 1171 on the other are not a difference in
quality. Compare ranks and overlapping intervals only.

**Lip sync, voice and upscale: no public blind-vote leaderboard with a method
was read for these asset types.** The pages that exist for voice and lip sync
on the two arena publishers were not fetched. The page publishes that absence
and relies on maker claims plus method-stated research for those rows.

## Known failure modes by model class

Method-stated research only. Vendor blogs are not used. Each row keeps its date
and scope, because several predate the models on the roster: they describe the
failure class, not the current rate for any named model.

| Failure class | Asset types it hits | Evidence, quoted | Source and date | Method and scope | Confidence |
|---|---|---|---|---|---|
| Physics, anatomy, commonsense in video | Short video, talking head | "While recent models perform increasingly well on these metrics, they still struggle to generate videos that are not just visually plausible but fundamentally realistic." The next frontier is "intrinsic faithfulness to ensure that generated videos adhere to physical laws, commonsense reasoning, anatomical correctness, and compositional integrity." Five dimensions: Human Fidelity, Controllability, Creativity, Physics, Commonsense | VBench-2.0, arXiv 2503.21755, v1 27 March 2025, v2 20 August 2025 | Automatic evaluators (vision-language and language models plus anomaly detectors) aligned to "extensive human annotations". Author affiliations not shown on the abstract page. Models evaluated are 2025 generation | primary as to the benchmark, single-source |
| Maker-stated video failures | Short video | "effects sometimes precede causes"; "objects may disappear or appear unexpectedly across frames"; "actions disproportionately succeed" | Runway Gen-4.5 research page, 1 December 2025 | The maker's own limitations list for one model | maker claim, and a rare useful one |
| Long and dense text inside images | Product still (packaging, labels), ad layouts, infographics | "the generation of images containing long-form text remains a persistent challenge"; the 3,000-image human-improved test set presents "significant challenges even for the most advanced proprietary models (e.g. GPT4o with DallE-3), while their open-source counterparts show an even larger performance gap" | TextAtlas5M, arXiv 2502.07870, v1 11 February 2025, v2 3 November 2025 | Benchmark of 3,000 human-improved test images across 3 domains. The proprietary model named is a 2024 to 2025 generation, now superseded; two current makers (Seedream 5.0 Pro, Seedance 2.0) still list text rendering among their own limitations | primary as to the benchmark, scope-dated |
| Hands | On-model and lifestyle stills | "Diffusion models have achieved remarkable success in generating realistic images but suffer from generating accurate human hands, such as incorrect finger counts or irregular shapes." | HandRefiner, arXiv 2311.17957, v1 29 November 2023, v2 16 August 2024 | Method paper proposing a repair step; the failure is the premise, not a measured rate. 2023-generation models | single-source, scope-dated. Use as "a documented failure class", never as a current rate |
| Small faces, spelling, fine detail, complex edits | On-model stills, product still, editing | May struggle with "small faces, accurate spelling, and fine details"; complex edits may produce "unnatural results, visual artifacts, or disjointed scenes" | Nano Banana Pro model page, read 10 September 2026 | Maker's own stated limitations | maker claim |
| Physical realism in edits (reflections, contact, state change) | Image editing, product still | Reused from ledger, brief 27: a 900-case benchmark across optics, mechanics and state transition scored eleven editing models against human-annotated reflection surfaces and contact points; every open-source model scored below 60, only two closed systems slightly above | PICABench, arXiv 2510.17681, 20 October 2025 | Ledger row, single-source, check 1 2026-09-09 | single-source (ledger) |
| Generated images not tied to physical parameters | Product still, environment | Reused from ledger, brief 27: generated images "can be perceptually convincing without being physically plausible" | Journal of Vision 26(3):7, 16 March 2026 | Ledger row, primary; tested 2022-era generators, structural point only | primary (ledger), scope-limited |
| Open-weight editing models behind proprietary ones | Image editing | The authors attribute open-source editing models trailing proprietary ones to "limited high-quality data and insufficient benchmarks" and release 1.2 million edit pairs plus a three-suite benchmark | ImgEdit, arXiv 2505.20275, 26 May 2025 | Dataset and benchmark paper; the gap is the authors' stated premise, read through an automated summary of the abstract | single-source, authors' statement. Use only with that label |
| Lip sync on arbitrary faces in real video | Lip sync, talking head, dubbing | Existing approaches "fail to accurately morph the lip movements of arbitrary identities in dynamic, unconstrained talking face videos"; the paper introduces "new, rigorous evaluation benchmarks and metrics to accurately measure lip synchronization in unconstrained videos" | Wav2Lip, arXiv 2008.10010, 23 August 2020, ACM Multimedia 2020 | Research paper, quantitative metrics, no human evaluation in the abstract. 2020 | primary as to the paper, scope-dated. Use for the failure class and the fact that sync is measured by a trained sync expert, not by eye |
| Lip sync shortcut learning in diffusion models | Lip sync | The "'shortcut learning problem', wherein the model predominantly learns visual-visual shortcuts while neglecting the critical audio-visual correlations"; a temporal alignment mechanism added "to enhance temporal consistency" | LatentSync, arXiv 2412.09262, v1 12 December 2024, v2 13 March 2025 | Research paper on a diffusion lip-sync method; HDTF and VoxCeleb2 datasets | single-source |
| Short speech segments | Talking head, native-audio video | "Creating videos with natural and consistent spoken audio, particularly for shorter speech segments, remains an area of active development." | Veo 3.1 model page, October 2025 | Maker's own limitation | maker claim |
| Audio distortion, multi-subject consistency | Short video with audio, multi-character | "occasional audio distortion"; "multi-subject consistency, text rendering accuracy, and complex editing effects" | Seedance 2.0 launch post, 12 February 2026 | Maker's own limitation | maker claim |
| Fidelity in generative upscaling | Upscale, restoration | A restoration-guided sampling method "to suppress the fidelity issue encountered in generative-based restoration" | SUPIR, arXiv 2401.13627, CVPR 2024 | Authors name the issue their method addresses; no rate | single-source |
| Tile seams in fast upscaling | Upscale | The portable build may introduce "block inconsistency" | Real-ESRGAN repository, read 10 September 2026 | Maintainer's note | primary as to the note |
| Automated scores are a weak stand-in for a reviewer | All, testing method | Reused from ledger, brief 29: automated image-similarity scores reach only 50.72 and 60.98 percent of human-to-human agreement on subject preservation; a multimodal model judge reaches 83.31 percent | ICLR 2025 benchmark, arXiv 2406.16855 v2, 9 March 2025 | Ledger row, primary | primary (ledger) |

**What is absent.** No method-stated study measures product fidelity (label,
logo, shape and color match to a physical SKU) across the current named models.
No method-stated study measures lip-sync accuracy across languages for the
current commercial video models. Both are published as absences, searched
through the arenas and papers reached in this session; the search budget ran out
before a dedicated literature sweep, so the page says "none was found in the
sources reviewed", never "none exists".

## Open-weight against closed

From maker pages only, read 10 September 2026.

| Model | Weights | License or access, as stated | Source |
|---|---|---|---|
| GPT Image 2 | Closed, API and ChatGPT | API model page lists endpoints; no weights | developers.openai.com model page |
| Nano Banana 2, Nano Banana Pro | Closed | Gemini app, AI Studio, API, Vertex AI, Google products | blog.google posts |
| FLUX.2 [pro], [flex] | Closed, API only | API | bfl.ai/blog/flux-2 |
| FLUX.2 [dev] | **Open weights, 32B** | FLUX Non-Commercial License v2.1 for the model; outputs usable commercially per the license | bfl.ai/blog/flux-2; Hugging Face license file |
| FLUX.2 [klein] | Announced as Apache 2.0, "coming soon" on 25 November 2025 | Release not confirmed in this session | bfl.ai/blog/flux-2 |
| Seedream 5.0 Pro | Not stated; treated as closed | Maker channels | seed.bytedance.com post |
| Midjourney V8.1 | Closed | Midjourney service | updates.midjourney.com |
| Qwen-Image, Qwen-Image-Edit (2509, 2511), Qwen-Image-2512 | **Open weights** | Apache 2.0 | GitHub and Hugging Face |
| Qwen-Image-2.0 | Listed in the repository news; weights status not confirmed on a model card in this session | Unconfirmed | github.com/QwenLM/Qwen-Image |
| Veo 3.1 | Closed | Gemini API, Google products | Google developer blog |
| Kling 3.0 series | Closed | Kling service, early access at release | Maker press release |
| Seedance 2.0 | Not mentioned; no indication of open weights | Maker channels | seed.bytedance.com post |
| Runway Gen-4.5 | Closed | Runway service | runway.com research page |
| Sora 2 | Closed | sora.com, Sora app, API "in the future" at launch | OpenAI system card |
| MiniMax H3 | Closed at 31 July 2026; maker "plan[s] to open up the model weights in the coming days" | Not verified as released | minimax.io blog |
| Wan 2.2 (T2V, I2V, TI2V, S2V, Animate) | **Open weights** | Apache 2.0 | github.com/Wan-Video/Wan2.2 |
| Wan 2.5 to 3.0 | **No weights repository found** on the maker's GitHub organization | wan.video served no model text | github.com/Wan-Video |
| OmniHuman 1.5 | Closed, cloud API | BytePlus | byteplus.com product page |
| Eleven v3 | Closed, API and app | ElevenLabs | elevenlabs.io docs |
| Real-ESRGAN | Open source | BSD-3-Clause | GitHub repository |
| SUPIR | Research release; license not read | Not confirmed | arXiv abstract only |

**Why it matters on the page, stated as production practice:** open weights
can be fine-tuned and run on private infrastructure, which is what the site's
video production page describes; the article must attach that only to the
models whose maker pages show open weights (FLUX.2 [dev], the Qwen-Image line,
Wan 2.2), never to Wan 2.6.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified.
"Maker claim" is added wherever a maker describes its own model; a maker claim
can be primary as to what the maker says and still carry no independent check.
Unverified rows are cut and sit in Do not publish.

### Maker pages

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| GPT Image 2: snapshot gpt-image-2-2026-04-21; text and image input, image output; generation and edit endpoints; inpainting | developers.openai.com/api/docs/models/gpt-image-2 | 2026-04-21 snapshot, read 2026-09-10 | n/a | Maker API documentation | OpenAI | primary, maker claim |
| Nano Banana 2 released 26 February 2026; up to five characters and 14 objects; 512px to 4K; legible text, translate and localize text in image; SynthID with C2PA Content Credentials | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | n/a | Maker launch post | Google | primary, maker claim |
| Nano Banana Pro released 20 November 2025; up to 14 images, 5 people; 2K and 4K; localized editing, camera angle, focus, color grading; SynthID | blog.google/innovation-and-ai/products/nano-banana-pro/ | 2025-11-20 | n/a | Maker launch post | Google | primary, maker claim |
| Nano Banana Pro limitations: small faces, accurate spelling, fine details; complex edits can produce artifacts | deepmind.google/models/gemini-image/pro/ | Page undated, read 2026-09-10 | n/a | Maker model page | Google | primary, maker claim |
| FLUX.2 released 25 November 2025; up to 10 reference images; editing up to 4MP; legible fine text; [dev] 32B open weights; [pro] and [flex] API only | bfl.ai/blog/flux-2 | 2025-11-25 | n/a | Maker launch post | Black Forest Labs | primary, maker claim |
| Seedream 5.0 Pro released 8 July 2026; dense text layouts; lasso, layer separation into more than 10 layers; lighting, materials, skin textures; over ten languages; limitation on finer-grained text and pixel-level editing consistency | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro | 2026-07-08 | n/a | Maker launch post, no benchmark | ByteDance | primary, maker claim |
| Midjourney V8.1 default from 11 June 2026; better prompt adherence and text; HD twice the size and 4x the resolution of V7; omni-reference still on V7 | updates.midjourney.com/v8-1-is-now-the-default-model/ | 2026-06-11 | n/a | Maker update post | Midjourney | primary, maker claim |
| Qwen-Image line: 4 August 2025 to 10 February 2026 releases; text rendering and editing claims; Apache 2.0 | github.com/QwenLM/Qwen-Image; huggingface.co/Qwen/Qwen-Image-2512 | 2025-08-04 to 2026-02-10 | n/a | Maker repository and model card | Alibaba | primary, maker claim |
| Qwen-Image-2512 "currently the strongest open-source model" after "over 10,000 rounds of blind model evaluations on AI Arena" | huggingface.co/Qwen/Qwen-Image-2512 | December 2025 | 10,000+ rounds | Arena run by the maker, method not stated on the card | Alibaba | maker claim. **Not cleared as a rank** |
| Veo 3.1 released 15 October 2025; up to 3 reference images; extension to a minute or more; first and last frame | developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/ | 2025-10-15 | n/a | Maker developer post | Google | primary, maker claim |
| Veo 3.1: 1080p and 4K; native audio; SynthID; limitation on natural spoken audio for shorter speech segments | deepmind.google/models/veo/ | Charts dated October 2025 | n/a | Maker model page | Google | primary, maker claim |
| Veo 3.1 maker comparison: best overall preference on MovieGenBench (1,003 prompts), preferred on a 355-pair image-to-video set, better synchronized audio on 527 prompts | deepmind.google/models/veo/ | October 2025 | 1,003, 355 and 527 prompts; raters not stated | Maker-run preference comparison against other models | Google | maker claim, method partly stated |
| Kling 3.0 series released 5 February 2026; up to 15 seconds; Image 3.0 at 2K and 4K; speech in five languages plus accents and dialects; multi-shot storyboard; reference video for character traits and voice; text and branded elements retained | globenewswire.com/news-release/2026/02/05/3232837/0/en/ | 2026-02-05 | n/a | Maker press release on a wire service | Kuaishou | primary, maker claim |
| Seedance 2.0 released 12 February 2026; up to 9 images, 3 video clips, 3 audio clips; 15-second multi-shot audio-video with dual-channel audio; stated limitations on detail stability, audio distortion, multi-subject consistency, text rendering | seed.bytedance.com/en/blog/official-launch-of-seedance-2-0 | 2026-02-12 | Internal evaluation, sample undisclosed | Maker launch post | ByteDance | primary, maker claim |
| Runway Gen-4.5 released 1 December 2025; stated failure modes on causal reasoning, object permanence, success bias | runway.com/research/introducing-runway-gen-4.5 | 2025-12-01 | n/a | Maker research post | Runway | primary, maker claim |
| Runway Gen-4.5 "Ranked #1 on the Artificial Analysis Text-to-Video benchmark with 1,247 Elo points" as of 30 November 2025 | runway.com/research/introducing-runway-gen-4.5 | 2025-11-30 | "thousands of pairwise comparisons" | Maker citing a public arena | Runway | maker claim, dated. Not current; see R6 |
| Sora 2 system card 30 September 2025; C2PA metadata on all assets; visible moving watermark on downloads; photorealistic person image uploads and all video uploads restricted | deploymentsafety.openai.com/sora-2 | 2025-09-30 | n/a | Maker system card | OpenAI | primary, maker claim |
| MiniMax H3 released 31 July 2026; up to 15 seconds at 2K; native stereo; mixed references; plans to open weights; limitations on visual detail | minimax.io/blog/minimax-h3 | 2026-07-31 | n/a | Maker blog | MiniMax | primary, maker claim. Weights plan unverified |
| Wan 2.2 weights released 28 July 2025, Apache 2.0; TI2V-5B 720P at 24 FPS; S2V-14B 26 August 2025; no rights claimed over generated content | github.com/Wan-Video/Wan2.2 | 2025-07-28 | n/a | Maker repository | Alibaba Tongyi Lab | primary |
| No weights repository for Wan2.5, Wan2.6, Wan2.7 or Wan3.0 on the maker's GitHub organization | github.com/Wan-Video | Read 2026-09-10 | 6 repositories listed | Direct read of the organization page | n/a | primary, absence at source |
| OmniHuman 1.5: single image plus voice track; lip, emotion and gesture sync; group dialogue by routed audio tracks; native 1080p | byteplus.com/en/product/OmniHuman | Page undated, read 2026-09-10 | n/a | Maker cloud product page | ByteDance (BytePlus) | primary, maker claim, undated |
| Eleven v3 generally available 2 February 2026; users preferred GA over alpha 72 percent of the time; error rate 15.3 to 4.9 percent on an internal benchmark of 27 categories across 8 languages | elevenlabs.io/blog/eleven-v3-is-now-generally-available | 2026-02-02 | User count not stated; 27 categories, 8 languages | Internal benchmark against the maker's own earlier version | ElevenLabs | maker claim |
| Eleven v3: 70+ languages; 5,000 character limit; audiobooks and multi-character dialogue; separate conversational model for real time | elevenlabs.io/docs/overview/models | Read 2026-09-10 | n/a | Maker documentation | ElevenLabs | primary, maker claim |
| Real-ESRGAN: ICCV Workshops 2021; 2x to 4x; BSD-3-Clause; block inconsistency note | github.com/xinntao/Real-ESRGAN | Read 2026-09-10 | n/a | Project repository | Open-source project | primary |
| SUPIR: CVPR 2024; 20 million training images; sampling method to suppress "the fidelity issue encountered in generative-based restoration" | arxiv.org/abs/2401.13627 | 2024-01-24, v2 2024-04-03 | 20 million images (training) | Research paper, abstract read | Not read | single-source |

### Commercial-use terms

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Google won't claim ownership of generated content; unpaid services content used to improve products, paid services not; EEA, Switzerland and UK require paid services | ai.google.dev/gemini-api/terms | Last updated 2026-04-28 | n/a | Terms text | Google | primary |
| Runway claims no ownership of inputs or outputs and does not restrict commercial use; inputs and outputs may be used to train its models under a perpetual license | runway.com/terms-of-use | Last updated 2026-05-11 | n/a | Terms text | Runway | primary |
| ElevenLabs users retain all rights in output; ElevenLabs takes a perpetual license to content to improve services | elevenlabs.io/terms-of-use | Last updated 2026-03-31 | n/a | Terms text, verbatim quotes | ElevenLabs | primary |
| ElevenLabs free users limited to non-commercial use, paid users may use commercially | elevenlabs.io/terms-of-use | 2026-03-31 | n/a | Read through an automated summary of the page, not a verbatim quote | ElevenLabs | single-source. **Confirm verbatim before use** |
| FLUX.2 [dev]: FLUX Non-Commercial License v2.1; outputs usable for any purpose including commercial; no ownership claimed in outputs; outputs not to train competing models | huggingface.co/black-forest-labs/FLUX.2-dev/blob/main/LICENSE.md | Read 2026-09-10 | n/a | License text | Black Forest Labs | primary |
| Qwen-Image line and Wan 2.2 released under Apache 2.0; Wan 2.2 claims no rights over generated content | github.com/QwenLM/Qwen-Image; github.com/Wan-Video/Wan2.2 | Read 2026-09-10 | n/a | Repository license statements | Alibaba | primary |
| OpenAI terms not readable: 403 on the services agreement and the terms of use | openai.com/policies/services-agreement/; openai.com/policies/terms-of-use/ | 2026-09-10 | 2 requests | Direct unauthenticated fetch | n/a | primary, negative observation |
| Midjourney terms not readable: 403 on two URLs | docs.midjourney.com Terms of Service article; midjourney.com/terms-of-service | 2026-09-10 | 2 requests | Direct unauthenticated fetch | n/a | primary, negative observation |
| Kling terms served a JavaScript shell with no clause text | kling.ai/document-api/protocols/paidServiceProtocol | 2026-09-10 | 1 request after a 301 | Direct unauthenticated fetch | n/a | primary, negative observation |
| BytePlus general terms, last updated 23 August 2022, contain no clause on ownership or commercial use of AI-generated output | docs.byteplus.com/en/legal/docs/terms-of-service | 2022-08-23, read 2026-09-10 | n/a | Terms text read for an output clause | ByteDance (BytePlus) | primary, absence at source |

### Independent evaluations and method

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Image arena method: blind pairwise voting on outputs from the same prompt; Bradley-Terry, rescaled to an Elo-like range; engagement gate; taxonomy includes Retail and E-commerce use case and Text Rendering capability | artificialanalysis.ai/image/methodology | Page undated, read 2026-09-10 | n/a | Published method page | Arena publisher; funding not stated | primary as to method |
| Video arena method: pairwise preference, Bradley-Terry, separate arenas by modality with and without audio, ratings recomputed hourly | artificialanalysis.ai/video/methodology | Read 2026-09-10 | n/a | Published method page | Same | primary as to method |
| Second arena method: CLT-based confidence intervals and reweighting (23 July 2025), about 10 percent of votes removed by deduplication (14 July 2025), preliminary label until enough fresh votes (18 September 2025) | arena.ai/blog/leaderboard-changelog | 2025-07-14 to 2025-09-18 | n/a | Publisher changelog | Arena publisher; funding not stated | primary as to method |
| Text to image readings, roster models (table in Independent evaluations) | arena.ai/leaderboard/text-to-image | Updated 2026-09-07 | 6,142,759 votes, 78 models | Blind pairwise, Bradley-Terry | Same | primary as to the reading, single publisher |
| Text to image readings, roster models | artificialanalysis.ai/image/leaderboard/text-to-image | No date on page, read 2026-09-10 | 5,835 to 16,622 samples per roster row | Blind pairwise, Bradley-Terry rescaled | Same | primary as to the reading; dated by read date only |
| GPT Image 2 is the highest-placed non-preliminary text-to-image model on both boards | Both text-to-image URLs above | 2026-09-07 and 2026-09-10 | As above | Two independent arenas compared by rank | Two publishers | triangulated |
| Image editing readings, roster models | arena.ai/leaderboard/image-edit | Updated 2026-09-07 | 29,526,046 votes, 55 models | Blind pairwise | Same | primary as to the reading |
| Image editing readings; top ten span 1124 to 1093 with intervals of plus or minus 9 or wider | artificialanalysis.ai/image/leaderboard/editing | Read 2026-09-10 | 11,997 to 13,442 samples per roster row | Blind pairwise, 95 percent intervals | Same | primary as to the reading |
| Text to video readings | arena.ai/leaderboard/text-to-video | Updated 2026-09-04 | 668,045 votes, 48 models | Blind pairwise | Same | primary as to the reading |
| Text to video with audio readings | artificialanalysis.ai/video/leaderboard/text-to-video | Read 2026-09-10 | 4,907 to 24,874 samples per roster row | Blind pairwise, with-audio arena | Same | primary as to the reading |
| Image to video readings | arena.ai/leaderboard/image-to-video | Updated 2026-09-02 | 1,906,002 votes, 47 models | Blind pairwise | Same | primary as to the reading |
| Image to video with audio readings | artificialanalysis.ai/video/leaderboard/image-to-video | Read 2026-09-10 | 7,499 to 18,167 samples per roster row | Blind pairwise, with-audio arena | Same | primary as to the reading |
| Newer versions than the maker pages read already on the boards: Wan 3.0 and Qwen-Image-3.0 (Alibaba), Seedance 2.5 (ByteDance), two preliminary gpt-image-2.5 variants (OpenAI) | The leaderboard URLs above | 2026-09-02 to 2026-09-10 | n/a | Leaderboard rows compared with maker release pages read the same day | n/a | primary, derived comparison |
| Text-to-image leaderboard anonymity can be broken from image embeddings; 22 models, 280 prompts, 150K images | arxiv.org/abs/2601.09647 | 2026-01-14 | 22 models, 280 prompts, 150,000 images | Centroid clustering in image embedding space | Authors; funding not read | single-source, preprint |
| Latest release of each of the fifteen dated roster models falls between 28 July 2025 and 31 July 2026, nine in 2026 | Maker rows above | Read 2026-09-10 | 15 models | Count of maker release dates | n/a | derived count, not a market rate |

### Failure modes, research

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Video models "still struggle to generate videos that are not just visually plausible but fundamentally realistic": physical laws, commonsense, anatomical correctness, compositional integrity | arxiv.org/abs/2503.21755 | 2025-03-27, v2 2025-08-20 | Human annotation count not in the abstract | Five-dimension benchmark, automatic evaluators aligned to human annotation | Authors; affiliations not shown on the abstract page | primary as to the benchmark, single-source |
| Long-form text in images "remains a persistent challenge"; significant challenges even for the most advanced proprietary models tested, larger gap for open-source | arxiv.org/abs/2502.07870 | 2025-02-11, v2 2025-11-03 | 3,000 human-improved test images, 3 domains | Benchmark evaluation | Not read | single-source, scope-dated |
| Diffusion models "suffer from generating accurate human hands, such as incorrect finger counts or irregular shapes" | arxiv.org/abs/2311.17957 | 2023-11-29, v2 2024-08-16 | n/a | Method paper premise | Not read | single-source, scope-dated |
| Earlier lip-sync approaches "fail to accurately morph the lip movements of arbitrary identities in dynamic, unconstrained talking face videos"; new sync metrics and benchmarks | arxiv.org/abs/2008.10010 | 2020-08-23, ACM Multimedia 2020 | n/a | Research paper, quantitative metrics | Not read | primary as to the paper, scope-dated |
| Diffusion lip-sync models suffer a "shortcut learning problem", learning visual shortcuts and neglecting audio-visual correlation | arxiv.org/abs/2412.09262 | 2024-12-12, v2 2025-03-13 | HDTF and VoxCeleb2 | Research paper | Not read | single-source |
| Open-source editing models trail proprietary ones, attributed by the authors to limited high-quality data and insufficient benchmarks | arxiv.org/abs/2505.20275 | 2025-05-26 | 1.2 million edit pairs | Dataset and benchmark paper, read via automated summary | Not read | single-source, authors' premise |
| PICABench physical-realism result (ledger row) | arxiv.org/html/2510.17681v1 | 2025-10-20 | 900 cases, 8 subdimensions, 11 models | Human-annotated key regions | Academic preprint | single-source (ledger, check 1 2026-09-09) |
| Generated images convincing but not physically plausible (ledger row) | pmc.ncbi.nlm.nih.gov/articles/PMC13001837/ | 2026-03-16 | 32 materials; 45, 35, 40 observers | Triplet similarity judgments | Peer-reviewed journal | primary (ledger) |
| Automated similarity scores at 50.72 and 60.98 percent of human-to-human agreement (ledger row) | arxiv.org/html/2406.16855v2 | 2025-03-09 | 150 images, 1,350 prompts, 7 annotators | Pearson correlation against human ratings | Not stated | primary (ledger) |
| US Copyright Office: human authorship required; prompts alone do not confer protection (ledger rows) | govinfo.gov 88 FR 16190; copyright.gov/newsnet/2025/1060.html | 2023-03-16; 2025-01-29 | n/a | Statement of policy; report announcement | US Copyright Office | primary (ledger) |

### First-party and search audit

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| The site already names generation models as tools per shot: "The model choice is a creative decision per shot, not a vendor lock-in" | src/pages/services/design/video-production.astro:116 | Read 2026-09-10 | n/a | First-party site copy | hubStudio | first-party, published |
| "For commercial work, we use models with clear licensing terms." | src/pages/the-studio/ai-excellence.astro:225 | Read 2026-09-10 | n/a | First-party policy | hubStudio | first-party, policy |
| "Most catalogs run about 70 percent generated, 30 percent shot." | src/pages/services/design/ecommerce.astro:81 | Read 2026-09-09 (brief 27) | Not stated | First-party site copy, no method; publication resolved by the site owner 2026-09-09 | hubStudio | first-party, published, no method |
| Three to six weeks from brief to a trained custom model | src/pages/the-studio/ai-excellence.astro:232 | Read 2026-09-10 | Not stated | First-party site copy, no method | hubStudio | first-party, published, no method |
| SERP audit: 0 of 27 English results a maker page, 0 of 27 an evaluation with method and date; 18 of 20 on-intent results commercial; Chinese pass 0 of 7 on the same counts | R2 tables in this file | 2026-09-10 | 34 results, 5 queries | Publisher type recorded per row | n/a | primary observation, re-countable |

## R6. Where evaluations conflict

Publish the range and the reason, never an average of two boards.

| Conflict | Range | Why they differ |
|---|---|---|
| Text to image, below the top | Nano Banana 2 fourth on one board, ninth on the other; Nano Banana Pro ninth and fourteenth; Seedream 5.0 Pro thirteenth and tenth; Qwen-Image-3.0-Pro twelfth and eleventh | Different prompt sources and voter instructions (one board publishes a prompt taxonomy, judging hints and an engagement gate; the other's pages do not say what voters are asked); different variants of the same model entered (quality "high" on one, "medium" or "2k" on the other); different model mixes above and below each entry; very different vote volumes (Nano Banana Pro 152,220 votes on one, 15,085 samples on the other); each board rescales independently |
| Text to image, the top | Agreement: GPT Image 2 is the highest non-preliminary entry on both. One board places two preliminary variants from the same maker above it, on about 3,000 votes each | Preliminary entries carry few votes and wide intervals until fresh votes accumulate (the board's own rule since 18 September 2025). Do not put an unreleased variant on the roster |
| Image editing | GPT Image 2 third on both; Nano Banana 2 sixth and twelfth; Seedream 5.0 Pro seventh and eighth; Nano Banana Pro ninth on both | On the board with intervals of plus or minus 9, the four roster models overlap and the vote cannot separate them. The board with hundreds of thousands of votes per model has intervals of plus or minus 3 to 4, so its ordering is tighter but covers a different variant set |
| Text to video | Seedance 2.0 fifth and seventh; MiniMax H3 fourth and eighth; Sora 2 fourteenth and eleventh; Veo 3.1 fifteenth and twelfth; Kling 3.0 tenth on one, outside the top fifteen on the other; top entries differ entirely | One board splits arenas by audio and lists one row per model; the other lists audio and resolution variants as separate rows ("veo-3.1-audio", "veo-3.1-audio-1080p"), which pushes one model across several ranks. Top entries on both boards are new models on 1,167 to 5,625 votes with the widest intervals on the page |
| Image to video | MiniMax H3 first and third; Seedance 2.0 fifth and second; Veo 3.1 twelfth and eleventh | Same structural differences. On one board a third-party post-trained variant of MiniMax H3 sits above the maker's own model |
| Maker evaluation against public arenas, Veo 3.1 | Maker's October 2025 comparison: "performs best on overall preference" on 1,003 prompts. Public arenas September 2026: eleventh to fifteenth | Eleven months apart, and newer entrants arrived. The maker ran its own comparison against models available then and did not state raters. Both can be true on their dates. Publish both with dates; never present the maker comparison as current |
| Maker leaderboard claim, Runway Gen-4.5 | Maker: "#1 on the Artificial Analysis Text-to-Video benchmark with 1,247 Elo points" as of 30 November 2025. The same publisher's text-to-video-with-audio board read 10 September 2026: not in the top fifteen | **Not a like-for-like comparison unless the no-audio board is read**: the arenas are separated by modality. See the re-check note below this table |
| Text rendering: makers against research | Makers: FLUX.2 "legible fine text now work reliably"; Nano Banana 2 "accurate, legible text"; Midjourney V8.1 "renders text better than ever". Makers' own limitations: Seedream 5.0 Pro "room to improve in finer-grained text rendering"; Seedance 2.0 "text rendering accuracy"; Nano Banana Pro "accurate spelling". Research: long-form text "remains a persistent challenge" (tested 2025-generation models) | Short headline text in maker demos against long and dense copy in research test sets; research predates the current releases. Publish as: short text is now a maker claim across the category, long and small text remains a documented failure class and appears in three makers' own limitation lists |
| Eleven v3 language count | Launch post "across 8 languages"; documentation "70+ languages supported" | Not a conflict: 8 languages is the internal benchmark's coverage, 70+ is supported languages. Never publish "8 languages" as support |
| Nano Banana Pro resolution | Launch post "2K and 4K"; model page "1k, 2k, or 4k" | Model page adds a 1K option. Publish "up to 4K" |
| FLUX.2 [dev] license | An automated read of the launch post rendered [dev] as Apache 2.0; the license file on the model repository is the FLUX Non-Commercial License v2.1 | The license file is the primary instrument and wins. The launch post names Apache 2.0 for [klein] and the VAE |
| Site against maker: Wan 2.6 | Site: "Wan 2.6 and Hunyuan for open-source fine-tuning on private infrastructure". Maker GitHub organization: weights repositories for Wan2.1 and Wan2.2 only | The site is ahead of the evidence. The article attaches open weights to Wan 2.2 only; flag the site copy |
| Site against maker: Seedance references | Site glossary: "up to 12 reference assets". Maker: "up to 9 images, 3 video clips, 3 audio clips" | Use the maker figure |
| Site against maker: Kling frame rate and lip-sync claims | Site glossary: "native 4K, 60 FPS, and up to 15 seconds"; video page: Seedance "phoneme-level lip-sync across eight-plus languages", Veo "native 48kHz audio", Kling "longest extendable output window" | None of the four phrases appears on the maker pages read. Do not repeat them |
| Leaderboard integrity | Arenas rely on anonymized outputs; a January 2026 preprint identified models from image embeddings across 22 models and 280 prompts | The page states the limit once: preference arenas measure what anonymous voters prefer on general prompts, and their anonymity is breakable. They do not measure product fidelity |

Re-check note on the Runway Gen-4.5 row, filled from a second fetch of the
same leaderboard page on 10 September 2026: see the paragraph immediately below.

**Result of the re-check.** The second read of the text-to-video leaderboard
page found no full table for the without-audio arena, only an FAQ line naming
the top five silent models, led by Wan 3.0 at 1333, and "Runway Gen-4.5" does
not appear anywhere on the page. Because the arenas are separated by modality,
absence from the with-audio table is not evidence that Gen-4.5 fell, and the
five-model FAQ summary is too thin to show where it sits now. **Both readings are
cut:** the maker's December 2025 "#1" may not run as current, and no sentence may
say the model dropped out of the rankings. The rank-change point is made with the
Veo 3.1 row instead, which compares two dated statements without claiming a fall.

## Cleared for use

Blockquote-ready, American English. Model and maker names are used as tools per
the brief 40 planning decision. Leaderboards are attributed by category, never
by name. No app, studio, agency, reseller or platform built on top of a model is
named. Every maker capability carries "maker claim" in its Source line. Reused
ledger quotes are copied verbatim, with the ledger's attribution form and a
method clause added where the logged Source line lacked one. URLs for the asset
brief sit in the claims table, not on the page.

### What the dated evidence says about "best"

> On two public blind-vote image leaderboards read in September 2026, GPT Image
> 2 was the highest-placed released text-to-image model on both: first on one
> board, and third on the other behind two preliminary variants from the same
> maker.
> Source: two public blind-vote leaderboards, one updated 7 September 2026 with 6,142,759 votes across 78 models, the other read 10 September 2026; voters chose between two anonymous images made from the same prompt, and votes were aggregated with a Bradley-Terry model.

> Below the top spot the same two boards disagree. Nano Banana 2 placed fourth
> on one and ninth on the other, Nano Banana Pro ninth and fourteenth, and
> Seedream 5.0 Pro thirteenth and tenth.
> Source: the same two public blind-vote text-to-image leaderboards, updated 7 September 2026 and read 10 September 2026; ranks compared rather than scores, because each board rescales its ratings independently.

> On one public image-editing leaderboard the ten highest-rated models sat
> inside a 31-point band, and the confidence intervals of GPT Image 2, Nano
> Banana 2, Seedream 5.0 Pro and Nano Banana Pro overlapped, so the vote could
> not separate them.
> Source: a public blind-vote image-editing leaderboard read 10 September 2026; pairwise preference votes aggregated with a Bradley-Terry model and reported with 95 percent confidence intervals.

> For text to video, Seedance 2.0 placed fifth and seventh on two public
> boards, MiniMax H3 fourth and eighth, Sora 2 fourteenth and eleventh, and Veo
> 3.1 fifteenth and twelfth. Kling 3.0 placed tenth on one board and outside the
> top fifteen on the other.
> Source: two public blind-vote video leaderboards, one updated 4 September 2026 with 668,045 votes across 48 models, the other read 10 September 2026 in its text-to-video-with-audio arena; pairwise preference votes aggregated with a Bradley-Terry model.

> For image to video, MiniMax H3 ranked first on one public board and third on
> the other, Seedance 2.0 fifth and second, and Veo 3.1 twelfth and eleventh.
> Source: two public blind-vote video leaderboards, one updated 2 September 2026 with 1,906,002 votes across 47 models, the other read 10 September 2026 in its image-to-video-with-audio arena; pairwise preference votes aggregated with a Bradley-Terry model.

> The leaderboards measure preference, and they publish how. One shows a voter
> two anonymous outputs from the same prompt, requires a minimum viewing time,
> and aggregates the picks with a Bradley-Terry model, running separate video
> arenas with and without audio and recomputing video ratings hourly. The other
> removes about 10 percent of submitted votes as duplicates and labels a new
> model's score preliminary until enough fresh votes arrive.
> Source: the two leaderboard publishers' own methodology pages, read 10 September 2026, and changelog entries dated July to September 2025; published method statements, not an audit.

> Anonymity on these boards can be broken. Researchers identified which model
> made an image from where it fell in an image-embedding space, across 22
> models, 280 prompts and 150,000 images, and said the findings expose
> fundamental security flaws in text-to-image leaderboards.
> Source: arXiv preprint 2601.09647, submitted 14 January 2026; a centroid-based clustering method applied to model outputs, not yet peer reviewed.

> In October 2025 Google reported that Veo 3.1 performed best on overall
> preference in its own comparison across 1,003 text-to-video prompts. On the
> public video leaderboards read in September 2026, Veo 3.1 ranked between
> eleventh and fifteenth.
> Source: Google DeepMind's Veo model page, charts dated October 2025, a maker-run preference comparison with raters not stated (maker claim); and two public blind-vote video leaderboards updated 2 to 4 September 2026 and read 10 September 2026.

> The latest release of each of the fifteen models on this roster with a dated
> maker page falls between 28 July 2025 and 31 July 2026, and nine of the
> fifteen came out in 2026. On the day those pages were read, the public
> leaderboards already listed newer versions from three of the same makers.
> Source: model makers' own launch posts, model cards and repositories, read 10 September 2026, compared with two public leaderboards updated 2 to 7 September 2026; a count of the pages read, not a measure of the market.

### Maker claims, still images

> OpenAI's API documentation describes GPT Image 2 as a model for "fast,
> high-quality image generation and editing", taking text and image input, with
> generation and edit endpoints and inpainting, under a snapshot dated 21 April
> 2026.
> Source: OpenAI API model documentation for gpt-image-2, read 10 September 2026; the maker's own documentation, maker claim.

> Google says Nano Banana 2, released 26 February 2026 and technically Gemini
> 3.1 Flash Image, can keep the resemblance of up to five characters and the
> fidelity of up to 14 objects in one workflow, output from 512 pixels to 4K,
> and translate and localize text inside an image.
> Source: Google launch post, 26 February 2026; the maker's own announcement, maker claim.

> Google says Nano Banana Pro, released 20 November 2025, can blend up to 14
> images, keep up to five people consistent, output at 2K and 4K, and edit a
> selected part of an image, including camera angle, focus and color grade.
> Source: Google launch post, 20 November 2025; the maker's own announcement, maker claim.

> Google's own model page says Nano Banana Pro may struggle with small faces,
> accurate spelling and fine details, and that complex edits can produce
> unnatural results, visual artifacts or disjointed scenes.
> Source: Google DeepMind model page for Gemini 3 Pro Image, read 10 September 2026; the maker's stated limitations.

> Black Forest Labs says FLUX.2, released 25 November 2025, can reference up to
> 10 images at once for character, product or style consistency and edit at up
> to 4 megapixels, and it publishes one version, FLUX.2 [dev], as open weights.
> Source: Black Forest Labs launch post, 25 November 2025; the maker's own announcement, maker claim.

> ByteDance says Seedream 5.0 Pro, released 8 July 2026, turns dense text and
> data into layouts, separates an image into more than 10 editable layers, and
> renders text in more than ten languages. The same post says "there is still
> room to improve in finer-grained text rendering and pixel-level editing
> consistency."
> Source: ByteDance Seed launch post, 8 July 2026; maker claim and the maker's own stated limitation.

> Midjourney made V8.1 its default model on 11 June 2026, saying it adheres
> better to detailed prompts, renders text better and, in HD mode, renders at
> twice the size and four times the resolution of V7. Its omni-reference
> feature was still running on V7 on that date.
> Source: Midjourney update post, 11 June 2026; the maker's own announcement, maker claim.

> Alibaba's Qwen team has published Qwen-Image and its editing models as open
> weights under the Apache 2.0 license since August 2025, lists later versions
> through Qwen-Image-2.0 on 10 February 2026, and says the line advances complex
> text rendering and precise image editing.
> Source: the maker's code repository and model card, read 10 September 2026; license and release dates as the maker states them, capability as a maker claim.

### Maker claims, video

> Google says Veo 3.1, released 15 October 2025, accepts up to three reference
> images of a character, object or scene, can extend a clip to a minute or more,
> generates the transition between a supplied first and last frame, and outputs
> at 1080p and 4K with native audio.
> Source: Google developer blog, 15 October 2025, and Google DeepMind's Veo model page read 10 September 2026; maker claim.

> Google's own Veo page says "creating videos with natural and consistent spoken
> audio, particularly for shorter speech segments, remains an area of active
> development."
> Source: Google DeepMind Veo model page, October 2025 edition, read 10 September 2026; the maker's stated limitation.

> Kuaishou says its Kling 3.0 series, launched 5 February 2026, generates video
> of up to 15 seconds with native speech in English, Chinese, Japanese, Korean
> and Spanish plus accents and dialects, offers a multi-shot storyboard, and can
> retain or generate signage, captions and branded elements.
> Source: Kuaishou press release, 5 February 2026; the maker's own announcement, maker claim.

> ByteDance says Seedance 2.0, launched 12 February 2026, accepts up to nine
> images, three video clips and three audio clips in one instruction and returns
> a 15-second multi-shot video with dual-channel audio.
> Source: ByteDance Seed launch post, 12 February 2026; the maker's own announcement, maker claim.

> The same launch post says Seedance 2.0 still needs work on detail stability,
> occasional audio distortion, multi-subject consistency, text rendering
> accuracy and complex editing effects.
> Source: ByteDance Seed launch post, 12 February 2026; the maker's stated limitations.

> Runway lists three known failure modes for Gen-4.5, released 1 December 2025:
> effects sometimes precede causes, objects may disappear or appear
> unexpectedly across frames, and actions disproportionately succeed, such as a
> poorly aimed kick still scoring a goal.
> Source: Runway research post, 1 December 2025; the maker's stated limitations.

> MiniMax says H3, released 31 July 2026, generates up to 15 seconds at 2K with
> native stereo sound from mixed video, image and audio references, and that
> visual detail "can still be improved in certain scenarios."
> Source: MiniMax blog post, 31 July 2026; maker claim and the maker's stated limitation.

> OpenAI's system card for Sora 2, published 30 September 2025, says all assets
> carry C2PA metadata, that videos downloaded from its site and app carry a
> visible moving watermark, and that image uploads featuring a photorealistic
> person, and all video uploads, were restricted.
> Source: OpenAI Sora 2 system card, 30 September 2025; the maker's statement of its own safeguards.

> Alibaba's Tongyi Lab released Wan 2.2 video model weights on 28 July 2025
> under the Apache 2.0 license, added a speech-to-video variant on 26 August
> 2025, and states in the repository that it claims no rights over generated
> content.
> Source: the Wan 2.2 code repository, read 10 September 2026; license and release dates as the maker states them.

> The maker's public code organization, read in September 2026, lists weights
> repositories for Wan 2.1 and Wan 2.2 and none for Wan 2.5, 2.6, 2.7 or 3.0.
> Source: the Wan-Video organization page on GitHub, read 10 September 2026; a direct check of the repositories listed.

### Maker claims, lip sync, voice, upscale

> ByteDance's cloud product page says OmniHuman 1.5 animates a character from a
> single image and a voice track, syncing lip movements, emotions and gestures,
> routes separate audio tracks to separate characters for group dialogue, and
> outputs at 1080p.
> Source: BytePlus product page for OmniHuman 1.5, undated, read 10 September 2026; maker claim.

> ElevenLabs made Eleven v3, which it calls its most advanced text-to-speech
> model, generally available on 2 February 2026. Its documentation lists
> support for more than 70 languages and points real-time use to a separate
> conversational model.
> Source: ElevenLabs announcement, 2 February 2026, and model documentation read 10 September 2026; maker claim.

> ElevenLabs reports that users preferred the generally available Eleven v3 over
> its own alpha 72 percent of the time, and that its error rate fell from 15.3
> percent to 4.9 percent on an internal benchmark of 27 categories across eight
> languages.
> Source: ElevenLabs announcement, 2 February 2026; an internal benchmark against the maker's own earlier version with the user sample not stated, maker claim.

> By their makers' own account, several roster models generate at high
> resolution natively: Nano Banana 2 up to 4K, Nano Banana Pro at 2K and 4K,
> Veo 3.1 at 1080p and 4K, and MiniMax H3 at 2K.
> Source: the makers' own launch posts and model pages, November 2025 to July 2026, read 10 September 2026; maker claims.

> An open-source restoration model published at ICCV Workshops 2021 offers 2x,
> 3x and 4x upscaling under a BSD-3-Clause license, and its maintainers note that
> the portable build can introduce block inconsistency from tile-based
> processing.
> Source: the Real-ESRGAN code repository, read 10 September 2026; the maintainers' own documentation.

> A CVPR 2024 restoration model trained on 20 million high-resolution images
> added a sampling method specifically "to suppress the fidelity issue
> encountered in generative-based restoration."
> Source: SUPIR, CVPR 2024, arXiv 2401.13627, submitted January 2024; a research paper, abstract read at source.

### Commercial-use terms

> Google's Gemini API terms say "Google won't claim ownership over that
> content." Content sent to unpaid services is used to improve Google products;
> prompts and responses on paid services are not.
> Source: Gemini API Additional Terms of Service, last updated 28 April 2026; the terms text read at source.

> Runway's terms say it "does not claim ownership of any of your Inputs or
> Outputs" and "does not restrict your commercial use of your Outputs", and that
> inputs and outputs "may be used by the Company to train and improve its AI
> models."
> Source: Runway Terms of Use, last updated 11 May 2026; the terms text read at source.

> ElevenLabs' terms say "you retain all rights in and to your Output", and give
> ElevenLabs a perpetual license to use content to improve its services and
> develop new products.
> Source: ElevenLabs Terms of Service for users outside the EEA, last updated 31 March 2026; the terms text read at source.

> The license on the FLUX.2 [dev] open weights is non-commercial for the model
> itself, yet says "You may use Output for any purpose (including for commercial
> purposes)" and "We claim no ownership rights in and to the Outputs", while
> barring the use of outputs to train a competing model.
> Source: FLUX Non-Commercial License v2.1 on the model's repository, read 10 September 2026; license text read at source.

> The Qwen-Image models and the Wan 2.2 video models are published under the
> Apache 2.0 open-source license, and the Wan 2.2 repository states that its
> maker claims no rights over generated content.
> Source: the makers' code repositories and model card, read 10 September 2026; license statements read at source.

> Not every maker's terms could be read. On 10 September 2026 OpenAI's and
> Midjourney's terms pages returned access errors to an automated request,
> Kling's served no clause text, and the general cloud terms covering Seedance,
> Seedream and OmniHuman, last updated in 2022, contain no clause on
> AI-generated output.
> Source: direct requests to each maker's published terms URLs, 10 September 2026; the result recorded per surface.

Reused verbatim from the ledger (briefs 22 and 29):

> Copyright protects only material that is the product of human creativity, and
> where a generative system produces the expressive elements of a work, that
> material is not protected by copyright.
> Source: US Copyright Office, registration guidance for works containing material generated by artificial intelligence, 88 FR 16190, 16 March 2023, a statement of policy published by the issuing office.

> The Office concluded that copyright protection does not extend to the mere
> provision of prompts, that an output is protected where a human author has
> determined sufficient expressive elements, that using a generative system as an
> assistive tool or placing generated material inside a larger human-authored
> work does not defeat protection, and that "the case has not been made for
> changes to existing law to provide additional protection for AI-generated
> outputs."
> Source: US Copyright Office, announcement of Part 2 of its Copyright and Artificial Intelligence report, 29 January 2025; the Office's own announcement of its report.

### Known failure modes

> A 2025 video benchmark found that while models score increasingly well on
> surface measures such as per-frame aesthetics and temporal consistency, "they
> still struggle to generate videos that are not just visually plausible but
> fundamentally realistic", falling short on physical laws, commonsense
> reasoning, anatomical correctness and compositional integrity.
> Source: VBench-2.0, arXiv 2503.21755, March 2025, revised August 2025; a five-dimension benchmark using automatic evaluators aligned with human annotation.

> Long passages of text inside generated images remain "a persistent
> challenge": a 3,000-image human-improved test set posed significant challenges
> even for the most advanced proprietary model tested, and open-source models
> trailed further.
> Source: TextAtlas5M, arXiv 2502.07870, February 2025, revised November 2025; a benchmark across three data domains, testing models of that generation.

> Diffusion image models have a documented failure with human hands, "such as
> incorrect finger counts or irregular shapes", serious enough that researchers
> built dedicated repair steps for it.
> Source: HandRefiner, arXiv 2311.17957, November 2023; a research paper on 2023-generation models, cited for the failure class and not for a current rate.

Reused verbatim from the ledger (brief 27), attribution in the ledger's form:

> Physical realism, not semantic accuracy, is where current image generation
> still breaks: a 900-case benchmark covering optics, mechanics and state
> transition scored eleven current image editing models against
> human-annotated reflection surfaces and contact points, and every
> open-source model scored below 60, with only two closed systems slightly
> above it.
> Source: an image editing physical-realism benchmark, October 2025; 900 human-annotated editing cases scored for physical consistency across eleven models.

> Generated images can be perceptually convincing without being physically
> plausible, because unlike a rendering or a photograph they do not originate
> from a three-dimensional scene and cannot be tied back to physical
> parameters.
> Source: Journal of Vision 26(3):7, March 2026, a study of 32 reference materials judged by 45, 35 and 40 observers in triplet similarity tasks against physically based renderings.

> A 2020 paper that introduced lip-sync accuracy metrics for real video named
> the failure precisely: earlier approaches failed "to accurately morph the lip
> movements of arbitrary identities in dynamic, unconstrained talking face
> videos."
> Source: Wav2Lip, ACM Multimedia 2020, arXiv 2008.10010; a research paper introducing lip-sync metrics and benchmarks for unconstrained video.

> Diffusion-based lip-sync models can take a shortcut, learning visual patterns
> from the video while "neglecting the critical audio-visual correlations."
> Source: LatentSync, arXiv 2412.09262, December 2024, revised March 2025; a research paper evaluated on two public talking-face datasets.

Reused verbatim from the ledger (brief 29):

> Automated consistency scores are a weak stand-in for a human reviewer. A
> 2025 benchmark had seven annotators rate generated images across 150
> reference images and 1,350 prompts, then checked how well automated scores
> tracked them. On whether the subject was preserved, the two common
> image-similarity scores reached only 50.72 percent and 60.98 percent of the
> agreement human raters showed with each other.
> Source: peer-reviewed machine learning conference paper, ICLR 2025; Pearson correlation with human ratings, expressed as a share of human-to-human agreement, each image rated by at least two annotators.

### Absences

> Across four English buyer searches for the best AI model for product images,
> ads, ecommerce and brand content, none of 27 results was a model maker's own
> page and none carried an evaluation with a stated method and date. Eighteen
> of the 20 on-topic results came from companies selling a tool or app built on
> the models they ranked.
> Source: search-results audit run 10 September 2026, publisher type recorded for every result, no domain named.

> No method-stated study measuring how faithfully current named models reproduce
> a physical product's label, logo, shape and color was found in the sources
> reviewed, and neither public leaderboard read publishes a product-still
> score, although one lists retail and ecommerce among its prompt categories.
> Source: two public leaderboards and twelve research papers and abstracts reviewed 10 September 2026; stated as an absence in those sources, not as proof that none exists.

### First-party

> hubStudio's video production page describes model choice as "a creative
> decision per shot, not a vendor lock-in."
> Source: hubStudio video production service page, read 10 September 2026; first-party site copy.

> hubStudio publishes that "for commercial work, we use models with clear
> licensing terms."
> Source: hubStudio AI excellence page, read 10 September 2026; first-party published policy, not a legal standard.

> hubStudio's ecommerce design page states that most catalogs run about 70
> percent generated and 30 percent shot.
> Source: hubStudio ecommerce design service page, September 2026; a first-party published figure with no sample or period stated on the page.

## Do not publish

| Claim | Where it came from | Why it was cut |
|---|---|---|
| Any single "best AI model" verdict, including an image model called "the most commercially reliable" and a video model called "the strongest for commercial content in 2026" | Search summaries of app and vendor blogs, R2 queries one and two | No method, no date on the judgment, published by sellers of apps built on the models |
| Generated people "visually indistinguishable from real actors" | Search summary, R2 query two | No study, no raters, no method |
| A video model integrated into an ad platform's asset tool in March 2026; a video model as "the only mainstream model" with native 4K | Search summaries and a third-party guide | Not read at a maker page; the second is a superlative with no evidence |
| Seedance "#1 for image-to-video with audio" | hubStudio glossary, `src/pages/resources/glossary.astro:410` | Undated leaderboard rank. The brief bans it. On 10 September 2026 it was second on one board and fifth on another |
| Hunyuan Image 3.0 "ranked first on LMArena"; Wan 2.2 "a leading video generation model on VBench" | hubStudio insight, `adobe-ai-mistake.astro:14-17` | Undated ranks, and the page comments on a named software company |
| Runway Gen-4.5 "#1" as a current rank, and any sentence saying it dropped out of the rankings | Maker research post, 1 December 2025; leaderboard reads 10 September 2026 | The maker claim is nine months old. The with-audio table read does not list the model, but arenas are split by modality and the no-audio arena showed only a five-model FAQ line with no full table. Neither direction can be stated |
| Qwen-Image-2512 "currently the strongest open-source model" after "over 10,000 rounds" of blind evaluation | Maker model card | The arena is run by the maker and the card states no method. A rank, and a maker-run one |
| Wan 2.6 (or 2.5, 2.7, 3.0) as open-source or open weights | hubStudio video production and motion design pages; third-party pages in search results | No weights repository for any of them on the maker's GitHub organization read 10 September 2026 |
| MiniMax H3 weights as released | Maker blog, 31 July 2026, "we plan to open up the model weights in the coming days" | A plan, not verified as done |
| Seedance "up to 12 reference assets"; Kling "60 FPS"; Seedance "phoneme-level lip-sync across eight-plus languages"; Veo "native 48kHz audio"; Kling "the longest extendable output window" | hubStudio glossary and video production page | None appears on the maker pages read. Seedance's maker states 9 images, 3 video clips and 3 audio clips |
| Chinese models "tend to render Mandarin signage and East-Asian faces with fewer post-production fixes" | hubStudio creative strategy page | A comparative quality claim with no method |
| All hubStudio content "processed on private, dedicated servers using open-source AI models" | hubStudio AI image production FAQ | Conflicts with other site pages naming closed API models as production tools. Do not state where brand data is processed either way. Site backlog |
| Eleven v3 supports "8 languages" | Misreading of the launch post | 8 languages is the internal benchmark's coverage; documentation says 70+ supported |
| LatentSync accuracy rising from 91 to 94 percent | Automated summary of the abstract | What the percentage measures could not be confirmed from the text read; likely the sync discriminator, not generated video |
| OneIG-Bench as evidence of any failure | arXiv 2506.07977 abstract | The abstract describes the benchmark's dimensions and states no finding |
| ImgEdit's open-against-proprietary gap as a measured result | Automated summary of arXiv 2505.20275 | Read as the authors' premise, not a quoted measurement. Use only as the authors' statement, or leave out |
| Veo 3.1's October 2025 maker comparison presented as current or independent | Google DeepMind Veo page | Maker-run, raters not stated, eleven months old at reading |
| Capability claims for Wan 3.0, Seedance 2.5, Qwen-Image-3.0 and the preliminary gpt-image-2.5 variants | Leaderboard rows only | No maker page read. Preliminary variants may never ship under that name |
| Any other model on the boards as a roster row (for example MAI-Image, Reve, Muse Image, Grok Imagine, Luma, HappyHorse, MAGI, SkyReels, HiDream, Gemini Omni Flash, a FLUX video model) | Leaderboard rows | Maker pages not read in this session. May be referred to only as "other models on the boards" |
| A third-party post-trained variant of MiniMax H3 at the top of one image-to-video board | Leaderboard row | Not the maker's model; naming the inference provider adds nothing and edges toward naming a reseller |
| ElevenLabs free users "non-commercial only" as a quoted term | Automated summary of the terms page | The split was not captured verbatim. Confirm the clause at source before quoting |
| Any price, credit rate, tier fee, per-image price or revenue threshold, including a per-image price in yuan in a search result title, subscription tiers on terms pages, and pricing statements in the site's Veo 3 review | Search results, terms pages, hubStudio insight | No pricing of any kind, by brief |
| OpenAI and Midjourney output terms, indemnification or tier conditions from memory or from the site's copyright guide | hubStudio `resources/copyright-and-ai.astro:157-218` | Terms not read at source in this session (403 on four URLs). The site guide also carries dollar figures and seat pricing that must not be repeated |
| hubStudio 22 to 78 percent approval, 7x output, "60 percent below traditional cost", "cuts production time by 80 percent" | hubStudio AI excellence page | Blocked in the ledger: no approver, sample, period or baseline |
| "60% cost reduction in initial concept development", "30% of outputs requiring significant rework", "tested every major video-generation model" | hubStudio Veo 3 review insight | No method, no sample, and a superseded model version |
| "Tested 40% higher for authenticity than stock photography" | hubStudio diffusion models insight | No method |
| Self-serve avatar and video apps as lip-sync or video roster entries, including the consumer app whose name prefixes Seedance on one leaderboard | Site glossary; leaderboard labels; R2 query two | Standing rule on apps built on top of models. On the page write "Seedance 2.0", never the app-prefixed label |
| Pika and Hunyuan (Tencent) models as roster rows | hubStudio video production, motion design and illustration pages | Maker pages not read in this session |
| FLUX.2 [klein] as released; Qwen-Image-2.0 as open weights | Launch post "coming soon", November 2025; repository news list | Neither confirmed at a model card in this session |
| Kling 3.0 public availability, Sora 2 API availability | Maker pages at launch | Availability stated as future at launch and not re-read |
| Real-ESRGAN attributed to a named company lab | This file's own draft note | Not confirmed on the repository page read |
| A product-fidelity benchmark or a cross-language lip-sync benchmark for current named models | Brief angle | None found in the sources reviewed. Publish the absence |
| Any ranking of Chinese ecommerce image apps | Chinese pass, csdn.net and zhihu.com lists | Apps, not models, and the lists read as placed content |

### Quarantined domains

Recorded for SERP re-verification only, never named, linked, quoted or
described identifiably on the page. Self-serve apps, tools or vendors built on
models, agencies and resellers: weshop.ai, nightjar.so, rewarx.com,
blog.mage.space, higgsfield.ai, heygen.com, zeely.ai, creativemarketing.ai,
vidau.ai, usemintly.com, pixelpanda.ai, thatagency.com, and the consumer apps
named in the Chinese-language result summary. Other SERP publishers not cited
(no method): datanorth.ai, fibbl.com, teamday.ai, wizcommerce.com, pineable.com,
shopify.com, technology.org, senso.ai, sitepoint.com, unusual.ai, cited.md,
trysight.ai, bartplatteeuw.com, m.jiemian.com, csdn.net, zhuanlan.zhihu.com.
Third-party pages that surfaced during maker-URL discovery and were not used as
sources: mindstudio.ai, thenewstack.io, buildfastwithai.com, evolink.ai,
almcorp.com, mcplato.com, revolutioninai.com, aiphotogenerator.net, together.ai,
mgx.dev, gisuser.com, aifreeapi.com, dev.to, medium.com, venturebeat.com,
theplanettools.ai, magicshot.ai, tech-insider.org, invideo.io, siray.ai,
qwenimages.com (not the maker), orcarouter.ai, nenobanana.com, gaga.art,
app.cinevva.com, overchat.ai, kling.art (not the maker), bestphoto.ai,
datacamp.com, replicate.com, atlascloud.ai, kie.ai, morphic.com, cliprise.app,
wan27.org (not the maker), aiwiki.ai, howaiworks.ai, eweek.com, cnbc.com,
mlq.ai, eachlabs.ai, dreamina.capcut.com (self-serve app), omnihuman-1.com (not
the maker), geeky-gadgets.com, inworld.ai, kingy.ai, crafiq.ai,
elevenlabsmagazine.com, releasebot.io, progressiverobot.com, sophon.at,
benchgen.com, deeplearning.ai, and one API reseller blog already banned as a
provider in the repo rules.

## Screenshot inventory

**Nothing was captured in this session.** No China platform spec is involved,
so no capture blocks drafting. But the leaderboard ranks move hourly on one
publisher, and several maker pages are undated, so dated captures should be
taken before the draft ships, saved to `research/the-2026-model-roster/` with
the date in the filename.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| 2026-09-xx-arena-text-to-image.png | Last-updated date, total votes, rows 1 to 15 including the two preliminary labels | not yet | Public leaderboard, text to image, dated board |
| 2026-09-xx-aa-text-to-image.png | Rows 1 to 15 with intervals and samples, plus the absence of a date on the page | not yet | Public leaderboard, text to image, undated board |
| 2026-09-xx-aa-image-editing.png | The 1124 to 1093 band and the plus or minus 9 intervals | not yet | Public leaderboard, image editing |
| 2026-09-xx-arena-image-edit.png | Last-updated date, votes, rows 1 to 15 | not yet | Public leaderboard, image edit |
| 2026-09-xx-video-boards.png | Text-to-video and image-to-video rows on both publishers, with the with-audio label | not yet | Public leaderboards, video |
| 2026-09-xx-aa-method.png | Blind pairwise, Bradley-Terry, engagement gate, prompt taxonomy with Retail and E-commerce | not yet | Leaderboard method page |
| 2026-09-xx-nano-banana-pro-limitations.png | Small faces, spelling, fine details, complex-edit artifacts | not yet | Google DeepMind model page |
| 2026-09-xx-runway-gen45-limitations.png | The three stated failure modes and the dated rank claim | not yet | Runway research page |
| 2026-09-xx-seedance-2-limitations.png | Input limits and the limitations paragraph | not yet | ByteDance Seed launch post |
| 2026-09-xx-wan-video-org.png | Repository list with no Wan2.5 to 3.0 weights | not yet | GitHub organization page |
| 2026-09-xx-terms-403.txt | Response codes for the OpenAI and Midjourney terms URLs and the Kling shell | not yet | Terms URLs, raw responses |

## Ledger rows to append

For the orchestrator to append to `sources/verified-sources.md`. Rows follow
the ledger's table formats. Check 1 is this session's read; check 2 is left
empty. Also add `40` to the "Used in" column of four existing rows: the
image-editing physical-realism benchmark (brief 27), the Journal of Vision
perception study (brief 27), the ICLR 2025 automated-score row (brief 29), and
the two US Copyright Office rows (88 FR 16190 and the Part 2 announcement).

```markdown
## The 2026 model roster: maker claims, commercial terms, dated leaderboard readings (added 2026-09-10, brief 40)

Planning decision, brief 40, 2026-09-10: generation models and their makers are
named as tools, because site pages already name them. Leaderboards are
attributed by category with the read date and method, never by name. Apps,
studios, agencies, automation platforms and resellers built on models are never
named. Every maker capability is a maker claim. Full working in
`research/the-2026-model-roster.md`.

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Text to image: GPT Image 2 highest-placed released model on both public boards; third at 1381 plus or minus 4 on 78,731 votes behind two preliminary same-maker variants on one; first at 1171 plus or minus 9 on 15,381 samples on the other | "two public blind-vote leaderboards, one updated 7 September 2026 with 6,142,759 votes across 78 models, the other read 10 September 2026, pairwise votes aggregated with a Bradley-Terry model" | arena.ai/leaderboard/text-to-image; artificialanalysis.ai/image/leaderboard/text-to-image | 2026-09-07; read 2026-09-10 | triangulated as to the top; each reading single-publisher | 2026-09-10 | | 40 |
| Text to image below the top: Nano Banana 2 fourth and ninth; Nano Banana Pro ninth and fourteenth; Seedream 5.0 Pro thirteenth and tenth; Qwen-Image-3.0-Pro twelfth and eleventh | same attribution, "ranks compared, not scores" | same | same | primary per reading, publish as a range | 2026-09-10 | | 40 |
| Image editing: on one board the top ten span 1124 to 1093 with intervals of plus or minus 9 or wider, and GPT Image 2 (third), Nano Banana 2 (sixth), Seedream 5.0 Pro (seventh) and Nano Banana Pro (ninth) overlap; on the other, updated 7 September 2026 with 29,526,046 votes across 55 models, GPT Image 2 third, Seedream 5.0 Pro eighth, Nano Banana Pro ninth, Nano Banana 2 twelfth | "public blind-vote image-editing leaderboards, read 10 September 2026, 95 percent intervals" | artificialanalysis.ai/image/leaderboard/editing; arena.ai/leaderboard/image-edit | read 2026-09-10; 2026-09-07 | primary per reading | 2026-09-10 | | 40 |
| Text to video: Seedance 2.0 fifth and seventh; MiniMax H3 fourth and eighth; Sora 2 fourteenth and eleventh; Veo 3.1 fifteenth and twelfth; Kling 3.0 tenth and outside the top fifteen | "two public blind-vote video leaderboards, one updated 4 September 2026 with 668,045 votes across 48 models, the other read 10 September 2026 in its text-to-video-with-audio arena" | arena.ai/leaderboard/text-to-video; artificialanalysis.ai/video/leaderboard/text-to-video | 2026-09-04; read 2026-09-10 | primary per reading, publish as a range | 2026-09-10 | | 40 |
| Image to video: MiniMax H3 first and third; Seedance 2.0 fifth and second; Veo 3.1 twelfth and eleventh | "two public blind-vote video leaderboards, one updated 2 September 2026 with 1,906,002 votes across 47 models, the other read 10 September 2026 in its image-to-video-with-audio arena" | arena.ai/leaderboard/image-to-video; artificialanalysis.ai/video/leaderboard/image-to-video | 2026-09-02; read 2026-09-10 | primary per reading | 2026-09-10 | | 40 |
| Leaderboard methods: blind pairwise votes on same-prompt outputs, Bradley-Terry rescaled to an Elo-like range, engagement gate, prompt taxonomy incl. Retail and E-commerce and Text Rendering, separate video arenas with and without audio, hourly recomputation; second publisher removes about 10 percent of votes by deduplication and labels new scores preliminary | "the two leaderboard publishers' own methodology pages, read 10 September 2026, and changelog entries dated July to September 2025" | artificialanalysis.ai/image/methodology; artificialanalysis.ai/video/methodology; arena.ai/blog/leaderboard-changelog | 2025-07-14 to 2025-09-18; read 2026-09-10 | primary as to method | 2026-09-10 | | 40 |
| Text-to-image leaderboard anonymity broken from image embeddings across 22 models, 280 prompts, 150,000 images | "arXiv preprint, 14 January 2026, centroid-based clustering, not yet peer reviewed" | arxiv.org/abs/2601.09647 | 2026-01-14 | single-source | 2026-09-10 | | 40 |
| Latest release of each of fifteen dated roster models falls between 28 July 2025 and 31 July 2026, nine in 2026; boards already list newer versions from three of the same makers | "model makers' own release pages read 10 September 2026, compared with two public leaderboards updated 2 to 7 September 2026, a count of pages read, not a market measure" | Maker rows below plus leaderboard rows above | 2026-09-10 | derived | 2026-09-10 | | 40 |
| Veo 3.1 maker comparison: best overall preference on 1,003 text-to-video prompts (October 2025); public boards September 2026: eleventh to fifteenth | "Google DeepMind's Veo model page, charts dated October 2025, maker-run comparison, raters not stated (maker claim); two public boards updated 2 to 4 September 2026" | deepmind.google/models/veo/ plus video leaderboard rows | 2025-10; 2026-09 | maker claim set against primary readings | 2026-09-10 | | 40 |
| GPT Image 2: snapshot 2026-04-21; text and image input; generation, edit, inpainting | "OpenAI API model documentation, read 10 September 2026, maker claim" | developers.openai.com/api/docs/models/gpt-image-2 | 2026-04-21 | primary, maker claim | 2026-09-10 | | 40 |
| Nano Banana 2 (Gemini 3.1 Flash Image), 26 February 2026: five characters, 14 objects, 512px to 4K, translate and localize in-image text, SynthID with C2PA | "Google launch post, 26 February 2026, maker claim" | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | primary, maker claim | 2026-09-10 | | 40 |
| Nano Banana Pro (Gemini 3 Pro Image), 20 November 2025: 14 images, 5 people, 2K and 4K, localized editing; stated limits on small faces, spelling, fine details, complex-edit artifacts | "Google launch post, 20 November 2025, and model page read 10 September 2026, maker claim and stated limitations" | blog.google/innovation-and-ai/products/nano-banana-pro/; deepmind.google/models/gemini-image/pro/ | 2025-11-20 | primary, maker claim | 2026-09-10 | | 40 |
| FLUX.2, 25 November 2025: 10 reference images, 4MP editing, [dev] open weights 32B, [pro] and [flex] API only | "Black Forest Labs launch post, 25 November 2025, maker claim" | bfl.ai/blog/flux-2 | 2025-11-25 | primary, maker claim | 2026-09-10 | | 40 |
| Seedream 5.0 Pro, 8 July 2026: dense text layouts, more than 10 layers, over ten languages; stated limit on finer-grained text and pixel-level editing consistency | "ByteDance Seed launch post, 8 July 2026, maker claim and stated limitation" | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro | 2026-07-08 | primary, maker claim | 2026-09-10 | | 40 |
| Midjourney V8.1 default 11 June 2026: better prompt adherence and text, HD at twice the size and 4x the resolution of V7; omni-reference still on V7 | "Midjourney update post, 11 June 2026, maker claim" | updates.midjourney.com/v8-1-is-now-the-default-model/ | 2026-06-11 | primary, maker claim | 2026-09-10 | | 40 |
| Qwen-Image line: 4 August 2025 to 10 February 2026 releases; Apache 2.0 on the open-weight releases | "the maker's repository and model card, read 10 September 2026" | github.com/QwenLM/Qwen-Image; huggingface.co/Qwen/Qwen-Image-2512 | 2025-08-04 to 2026-02-10 | primary, maker claim | 2026-09-10 | | 40 |
| Veo 3.1, 15 October 2025: 3 reference images, extension to a minute or more, first and last frame, 1080p and 4K, native audio, SynthID; stated limit on short speech segments | "Google developer blog, 15 October 2025, and Veo model page, maker claim and stated limitation" | developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/; deepmind.google/models/veo/ | 2025-10-15 | primary, maker claim | 2026-09-10 | | 40 |
| Kling 3.0 series, 5 February 2026: up to 15 seconds, Image 3.0 at 2K and 4K, speech in five languages plus accents and dialects, multi-shot storyboard, reference video, text and branded elements retained | "Kuaishou press release, 5 February 2026, maker claim" | globenewswire.com/news-release/2026/02/05/3232837/0/en/ | 2026-02-05 | primary, maker claim | 2026-09-10 | | 40 |
| Seedance 2.0, 12 February 2026: 9 images, 3 video clips, 3 audio clips; 15-second multi-shot with dual-channel audio; stated limits on detail stability, audio distortion, multi-subject consistency, text rendering, complex edits | "ByteDance Seed launch post, 12 February 2026, maker claim and stated limitations" | seed.bytedance.com/en/blog/official-launch-of-seedance-2-0 | 2026-02-12 | primary, maker claim | 2026-09-10 | | 40 |
| Runway Gen-4.5, 1 December 2025: stated failure modes on causal reasoning, object permanence, success bias | "Runway research post, 1 December 2025, stated limitations" | runway.com/research/introducing-runway-gen-4.5 | 2025-12-01 | primary, maker claim | 2026-09-10 | | 40 |
| Sora 2 system card, 30 September 2025: C2PA metadata on all assets, visible moving watermark on downloads, photorealistic-person image uploads and all video uploads restricted | "OpenAI Sora 2 system card, 30 September 2025, maker statement of safeguards" | deploymentsafety.openai.com/sora-2 | 2025-09-30 | primary, maker claim | 2026-09-10 | | 40 |
| MiniMax H3, 31 July 2026: up to 15 seconds at 2K, native stereo, mixed references; stated limit on visual detail; weights "planned" | "MiniMax blog post, 31 July 2026, maker claim" | minimax.io/blog/minimax-h3 | 2026-07-31 | primary, maker claim; weights unverified | 2026-09-10 | | 40 |
| Wan 2.2 weights 28 July 2025, Apache 2.0, TI2V-5B 720P at 24 FPS, S2V-14B 26 August 2025, no rights claimed over generated content; no weights repository for Wan2.5 to Wan3.0 on the maker organization | "the Wan 2.2 repository and the Wan-Video GitHub organization, read 10 September 2026" | github.com/Wan-Video/Wan2.2; github.com/Wan-Video | 2025-07-28; read 2026-09-10 | primary; absence at source | 2026-09-10 | | 40 |
| OmniHuman 1.5: single image plus voice track, lip, emotion and gesture sync, routed audio for group dialogue, 1080p | "BytePlus product page, undated, read 10 September 2026, maker claim" | byteplus.com/en/product/OmniHuman | read 2026-09-10 | primary, maker claim, undated | 2026-09-10 | | 40 |
| Eleven v3 GA 2 February 2026; 70+ languages; 72 percent preferred over its own alpha; error rate 15.3 to 4.9 percent on an internal benchmark of 27 categories across 8 languages | "ElevenLabs announcement, 2 February 2026, and documentation, internal benchmark against its own alpha, maker claim" | elevenlabs.io/blog/eleven-v3-is-now-generally-available; elevenlabs.io/docs/overview/models | 2026-02-02 | maker claim | 2026-09-10 | | 40 |
| Real-ESRGAN, ICCV Workshops 2021: 2x to 4x, BSD-3-Clause, block inconsistency note; SUPIR, CVPR 2024: 20 million training images, sampling "to suppress the fidelity issue encountered in generative-based restoration" | "an open-source restoration model's repository, read 10 September 2026"; "CVPR 2024 research paper, abstract read" | github.com/xinntao/Real-ESRGAN; arxiv.org/abs/2401.13627 | 2021; 2024-01-24 | primary; single-source | 2026-09-10 | | 40 |
| Gemini API terms: Google won't claim ownership; unpaid services content used to improve products, paid not; EEA, Switzerland, UK paid only | "Gemini API Additional Terms of Service, last updated 28 April 2026" | ai.google.dev/gemini-api/terms | 2026-04-28 | primary | 2026-09-10 | | 40 |
| Runway terms: no ownership of inputs or outputs, commercial use not restricted, inputs and outputs may train its models | "Runway Terms of Use, last updated 11 May 2026" | runway.com/terms-of-use | 2026-05-11 | primary | 2026-09-10 | | 40 |
| ElevenLabs terms: user retains all rights in output; perpetual license to content to improve services | "ElevenLabs Terms of Service, non-EEA, last updated 31 March 2026" | elevenlabs.io/terms-of-use | 2026-03-31 | primary for the quoted clauses; free and paid split single-source summary, confirm before quoting | 2026-09-10 | | 40 |
| FLUX Non-Commercial License v2.1 on FLUX.2 [dev]: model non-commercial; outputs usable for any purpose including commercial; no ownership claimed; outputs not to train competing models | "FLUX Non-Commercial License v2.1, read 10 September 2026" | huggingface.co/black-forest-labs/FLUX.2-dev/blob/main/LICENSE.md | read 2026-09-10 | primary | 2026-09-10 | | 40 |
| Terms not readable 10 September 2026: OpenAI 403 on two URLs, Midjourney 403 on two URLs, Kling JavaScript shell with no clause text; BytePlus general terms (23 August 2022) silent on AI-generated output; MiniMax terms not located | "direct requests to each maker's published terms URLs, 10 September 2026, result recorded per surface" | openai.com/policies/services-agreement/; openai.com/policies/terms-of-use/; docs.midjourney.com; midjourney.com/terms-of-service; kling.ai/document-api/protocols/paidServiceProtocol; docs.byteplus.com/en/legal/docs/terms-of-service | 2026-09-10 | primary, negative observations | 2026-09-10 | | 40 |
| Video models "still struggle to generate videos that are not just visually plausible but fundamentally realistic": physics, commonsense, anatomy, composition | "VBench-2.0, arXiv, March 2025, revised August 2025, five-dimension benchmark with automatic evaluators aligned to human annotation" | arxiv.org/abs/2503.21755 | 2025-03-27 | primary, single-source | 2026-09-10 | | 40 |
| Long-form text in images "remains a persistent challenge", significant even for the most advanced proprietary model tested, larger gap for open-source; 3,000-image test set | "TextAtlas5M, arXiv, February 2025, revised November 2025, benchmark across three domains" | arxiv.org/abs/2502.07870 | 2025-02-11 | single-source, scope-dated | 2026-09-10 | | 40 |
| Diffusion models "suffer from generating accurate human hands, such as incorrect finger counts or irregular shapes" | "HandRefiner, arXiv, November 2023, research paper on 2023-generation models, failure class only" | arxiv.org/abs/2311.17957 | 2023-11-29 | single-source, scope-dated | 2026-09-10 | | 40 |
| Lip-sync approaches "fail to accurately morph the lip movements of arbitrary identities in dynamic, unconstrained talking face videos"; diffusion lip sync suffers a "shortcut learning problem" | "Wav2Lip, ACM Multimedia 2020"; "LatentSync, arXiv, December 2024, revised March 2025" | arxiv.org/abs/2008.10010; arxiv.org/abs/2412.09262 | 2020-08-23; 2024-12-12 | primary (2020, dated); single-source | 2026-09-10 | | 40 |
| Search audit: four English buyer phrasings, 27 results, 0 maker pages, 0 evaluations with method and date, 18 of 20 on-intent results commercial; Chinese pass 0 of 7 on the same counts | "search-results audit run 10 September 2026, publisher type recorded for every result, no domain named" | R2 in research/the-2026-model-roster.md | 2026-09-10 | primary observation, re-countable | 2026-09-10 | | 40 |

### Do not publish, added from brief 40

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| Any single "best AI model" verdict for product images or video ads, including "most commercially reliable" and "strongest for commercial content" | App and vendor blogs on the brief 40 queries | No method, undated, sellers of apps built on the models | 2026-09-10 |
| Seedance "#1 for image-to-video with audio" | hubStudio glossary | Undated rank; on 10 September 2026 second and fifth on two boards | 2026-09-10 |
| Runway Gen-4.5 "#1 on the text-to-video benchmark" as current, or as having dropped out | Maker post 1 December 2025; boards read 10 September 2026 | Nine months old; arenas split by modality and the no-audio table was not served in full. Neither direction stated | 2026-09-10 |
| Qwen-Image-2512 "strongest open-source model" | Maker model card | Maker-run arena, no method | 2026-09-10 |
| Wan 2.5, 2.6, 2.7 or 3.0 as open weights | hubStudio video production and motion design pages; third-party pages | No weights repository on the maker's GitHub organization | 2026-09-10 |
| MiniMax H3 weights as released | Maker blog, "we plan to open up the model weights" | Plan, unverified | 2026-09-10 |
| Seedance "up to 12 reference assets", Kling "60 FPS", Seedance "phoneme-level lip-sync across eight-plus languages", Veo "native 48kHz audio", Kling "longest extendable output window" | hubStudio site copy | Not on the maker pages read; Seedance maker states 9 images, 3 video, 3 audio | 2026-09-10 |
| Eleven v3 supports 8 languages | Misreading of the launch post | Benchmark coverage; 70+ supported per documentation | 2026-09-10 |
| LatentSync accuracy 91 to 94 percent | Automated summary of the abstract | Quantity measured not confirmed | 2026-09-10 |
| OneIG-Bench as a failure finding | Abstract | States no finding | 2026-09-10 |
| Capability claims for Wan 3.0, Seedance 2.5, Qwen-Image-3.0, preliminary gpt-image-2.5 variants | Leaderboard rows | No maker page read; preliminary | 2026-09-10 |
| OpenAI and Midjourney output terms from memory or from the site copyright guide | hubStudio resources/copyright-and-ai | Terms 403 at source; the guide carries dollar figures | 2026-09-10 |
| ElevenLabs free-tier non-commercial clause as a quote | Automated summary | Not captured verbatim | 2026-09-10 |
| All hubStudio generation on open-source models on private servers | hubStudio AI image production FAQ | Conflicts with site pages naming closed API models; site backlog | 2026-09-10 |
| Any product-fidelity or cross-language lip-sync benchmark for current named models | Brief 40 angle | None found in the sources reviewed | 2026-09-10 |
```

## Notes for the writer

### Standing-rule handling for this piece

- Name models and their makers as tools. Never name a leaderboard: write "a
  public blind-vote leaderboard" with its date and method. Never name an app,
  studio, agency, automation platform, reseller or inference provider,
  including the consumer app whose name prefixes Seedance on one board.
- Every maker capability sentence carries "the maker says" or "maker claim"
  in the text or its Source line. A maker's stated limitation is the strongest
  material on the page: use it.
- Ranks always travel with the read date and the words "blind-vote" or
  "preference". Never print a score from one board next to a score from the
  other: the scales are independent.
- No pricing anywhere. No dollar sign, no yuan, no tier fee, no credit rate.
- Terms sections carry "this describes what the terms say, not legal advice".
- No Han characters. Model names are romanized as makers write them in English.

### Outline mapped to the must-includes (1,600 words body)

| Section (H2) | Words | Must-include or brief item it carries | Evidence to use |
|---|---|---|---|
| H1 "The 2026 model roster: which AI model for which asset", deck: a roster read on 10 September 2026 and re-tested, not a winner | 40 | Target query in H1 and first 100 words | R2 gap |
| What is the best AI model for product images in 2026? (restates the query; 40 to 60 word answer naming hubStudio once) then the roster table | 250 | **Roster table: asset type, model, what it does well, known failure** | Draft roster below; first two cleared quotes |
| Product stills, on-model images and environments | 220 | Roster detail | Maker claims for GPT Image 2, Nano Banana 2 and Pro, FLUX.2, Seedream 5.0 Pro, Midjourney V8.1, Qwen-Image; hands, small faces, physical plausibility quotes |
| Editing and text in the frame | 150 | Known failures | Editing band quote; physical-realism benchmark; long-text benchmark; three makers' own text limitations |
| Which AI video model for ads and short video | 230 | FAQ 2, roster detail | Two video rank quotes; Seedance, Kling, Veo, MiniMax H3 claims; Runway's failure list; VBench-2.0 |
| Lip sync, voice and upscale | 150 | Roster detail | OmniHuman, Veo short-speech limitation, Wav2Lip, LatentSync; Eleven v3 claims labeled internal; native 4K plus the SUPIR fidelity quote |
| Why the leaderboards disagree | 160 | "No leaderboard rank without date and method" | Method quote, disagreement quotes, anonymity preprint, Veo 3.1 maker-versus-arena quote |
| What each maker's terms allow for commercial use | 180 | **Commercial-use terms per model where readable** | Terms table below; the unreadable-terms quote; the two copyright quotes |
| How the roster is tested | 220 | **How the roster is tested, labeled as production practice**; slot requirement | Test criteria table below; the automated-score quote; release-date count quote |
| FAQ (5 questions, 40 to 70 words each) | see below | FAQ block | Mapped below |
| CTA: See the roster at work | | CTA | |

### Draft roster table (cell sources in the last column, for the writer only)

| Asset type | Model | What it does well | Known failure | Source for the row |
|---|---|---|---|---|
| Product still | GPT Image 2 | Highest-placed released model on both text-to-image boards, September 2026; generation, editing, inpainting (maker) | Long, dense pack copy remains a failure class; physical realism in edits | Both T2I boards; OpenAI docs; TextAtlas5M; physical-realism benchmark |
| Product still, many references | Nano Banana Pro | Up to 14 input images, 2K and 4K, localized edits (maker) | Maker says small faces, spelling, fine detail, complex-edit artifacts | Google post 2025-11-20; DeepMind model page |
| Product still, open weights | FLUX.2 [dev] | Up to 10 references for product consistency, editing to 4MP (maker) | Model license non-commercial; outputs usable commercially | BFL post 2025-11-25; license v2.1 |
| On-model and lifestyle | Nano Banana 2 | Five characters and 14 objects in one workflow, up to 4K, in-image text translation (maker) | Hands a documented failure class in diffusion models | Google post 2026-02-26; HandRefiner |
| On-model and lifestyle | Seedream 5.0 Pro | Lighting, materials and skin texture; layered editing (maker) | Maker says finer text and pixel-level edit consistency | Seed post 2026-07-08 |
| Environment and art direction | Midjourney V8.1 | Prompt adherence, HD at 4x V7 resolution, stable style references (maker) | Omni-reference still on V7 at June 2026; generated scenes not tied to physical parameters | MJ post 2026-06-11; Journal of Vision |
| Text-heavy layouts, open weights | Qwen-Image line | Complex text rendering and precise editing (maker); Apache 2.0 | Open editing models trail proprietary ones on the authors' account | Qwen repo; ImgEdit (authors' statement) |
| Image editing | GPT Image 2, Nano Banana 2, Seedream 5.0 Pro, Nano Banana Pro | Top of both editing boards; intervals overlap on one | Reflections and contact physics in edits | Editing boards; physical-realism benchmark |
| Short video, multi-reference ads | Seedance 2.0 | 9 images, 3 videos, 3 audio clips in; 15-second multi-shot with audio out (maker); second to seventh across four boards | Maker says audio distortion, multi-subject consistency, text | Seed post 2026-02-12; video boards |
| Short video, storyboarded shots | Kling 3.0 | 15 seconds, multi-shot storyboard, speech in five languages, signage retained (maker) | Physics, anatomy, commonsense failures across video models | Kuaishou release 2026-02-05; VBench-2.0 |
| Image to video | MiniMax H3 | 15 seconds at 2K, native stereo (maker); first and third on image-to-video boards | Maker says visual detail in some scenarios | MiniMax post 2026-07-31; boards |
| Reference and frame control, 4K | Veo 3.1 | Three reference images, first and last frame, 1080p and 4K, SynthID (maker) | Maker says short speech segments | Google posts 2025-10-15; Veo page |
| Camera and motion direction | Runway Gen-4.5 | Motion quality and controllability (maker) | Maker says cause and effect, object permanence, success bias | Runway post 2025-12-01 |
| Open-weight video | Wan 2.2 | 720P at 24 FPS, speech-to-video variant, Apache 2.0 | Same video failure classes | Wan 2.2 repo; VBench-2.0 |
| Lip sync, talking head | OmniHuman 1.5 | Single image and voice track, group dialogue, 1080p (maker) | Arbitrary faces in real video; shortcut learning; no current cross-language benchmark found | BytePlus page; Wav2Lip; LatentSync |
| Voice | Eleven v3 | 70+ languages, expressive dialogue (maker); preferred over its own alpha (maker internal) | Maker points real-time use to a separate model | ElevenLabs post 2026-02-02; docs |
| Upscale | Native 4K generation, or an open restoration model | 2x to 4x open upscaling; up to 4K native on several models (maker) | Fidelity issue in generative restoration; tile seams | Real-ESRGAN repo; SUPIR |

The article table must stay at five columns or fewer: drop the source column
and move the evidence into the body blockquotes. Consider splitting into a
still-image table and a video-and-audio table if it runs long on mobile. Sora 2
is best placed in the provenance line of the terms section, not as a roster row.

### Draft terms table

| Model | Terms read 10 Sep 2026 | Output ownership | Commercial use | Maker may use inputs or outputs |
|---|---|---|---|---|
| Nano Banana 2, Nano Banana Pro, Veo 3.1 | Gemini API terms, 28 Apr 2026 | Google won't claim ownership | For professional or business use; EEA, Switzerland, UK paid services only | Unpaid services: yes, to improve products. Paid: no |
| Runway Gen-4.5 | Terms of Use, 11 May 2026 | No ownership claimed | Not restricted | Yes, to train its models |
| Eleven v3 | Terms of Service, 31 Mar 2026 | User retains all rights | Confirm the free and paid clause verbatim before printing | Yes, license to improve services |
| FLUX.2 [dev] | Non-Commercial License v2.1 | No ownership claimed | Outputs yes; the model itself non-commercial | Outputs may not train a competing model |
| Qwen-Image, Wan 2.2 | Apache 2.0 | Wan 2.2: no rights claimed | Apache 2.0 | Not stated |
| GPT Image 2, Sora 2 | Not readable (403) | Not read | Not read | Not read |
| Midjourney V8.1 | Not readable (403) | Not read | Not read | Not read |
| Kling 3.0 | No clause text served | Not read | Not read | Not read |
| Seedance 2.0, Seedream 5.0 Pro, OmniHuman 1.5 | Cloud general terms, 23 Aug 2022 | Silent on generated output | Silent | Broad license to uploaded data |
| MiniMax H3 | Not located | Not read | Not read | Not read |

### Draft test criteria table, labeled production practice

No published standard exists for testing a model roster, and no rate may be
attached to any row. Label the table "production practice, not a published
standard".

| Test | What gets checked | Why it is on the list | When it reruns |
|---|---|---|---|
| Product truth | Label, logo, shape, color and material against the physical product and its approved shot | No independent product-fidelity benchmark was found; editing benchmarks show physical realism breaking | Every new maker version, before any product work moves to it |
| Text in the frame | Full pack copy and every localized line at final size, read by a person | Long text is a documented failure class, and three makers list text among their own limitations | Every new version; every new language |
| People | Hands, small faces, identity held across a set or a clip | Hands are a documented failure class; one maker names small faces | Every new version |
| Motion and physics | Cause and effect, objects persisting, anatomy through the clip | A 2025 benchmark and one maker's own failure list | Every new version |
| Speech and sync | The actual presenter, the actual language, short lines as well as long | Lip sync on arbitrary faces is a documented failure; one maker flags short speech | Every new version; every new language |
| Terms and provenance | Terms read on the date: output ownership, commercial use, training use; SynthID or C2PA marking | Terms differ and several could not be read; marking differs by maker | When terms update or a model changes surface |
| Human sign-off over automated scores | An art director reviews candidate outputs; similarity scores are advisory | Automated scores track human judgment at about half to three fifths of human-to-human agreement | Always |
| Dated rank check | Leaderboard read date, method, overlapping intervals, preliminary labels | The two boards disagree below the top and ranks move | Each roster review |

### Slot requirement: one number from hubStudio's delivery record, with its method

**Cannot be met as written.** No first-party delivery figure has a written
method. Options, in order of preference:

1. Leave the slot marked `TODO: method statement` and ship without a delivery
   number. Honest, and consistent with the page's own argument about methods.
2. Use the published 70 percent generated, 30 percent shot catalog figure under
   the first-party exception (site owner approved publication on 2026-09-09),
   quoted in the cleared form with "no sample or period stated". It fits the
   roster piece loosely: it says how much catalog work goes to generation, not
   which model.
3. Use the published three to six week window from brief to trained custom
   model (first-party, no method), only if the testing section mentions custom
   models.

Never use 22 to 78 percent, 7x, 60 percent or 80 percent. Blocked.

### Must-includes that cannot be fully met

- **Commercial-use terms per model:** met for Google (three models), Runway,
  ElevenLabs, FLUX.2 [dev], Qwen-Image and Wan 2.2. Not met for OpenAI,
  Midjourney, Kling and MiniMax (not readable or not located), and unclear for
  ByteDance's models (general cloud terms silent on output). The page states
  each gap plainly and tells the reader to read the maker's current terms.
- **Independent evaluation for product stills, lip sync, voice and upscale:**
  none with a method was read. The page says so and leans on maker claims and
  failure-mode research for those rows.
- **Slot number with method:** see above.

### FAQ mapping

| Question | Answer draws on |
|---|---|
| What is the best AI model for product images? | No single best on the dated evidence; GPT Image 2 top on both boards, disagreement below; the test that matters is product truth |
| Which AI video model is best for ads? | The two video boards disagree at the top; Seedance 2.0 and MiniMax H3 place high on both; multi-reference inputs and native audio are maker claims; no ad-specific evaluation found |
| Can AI-generated images be used commercially? | Readable terms (Google, Runway, ElevenLabs, FLUX.2 [dev] outputs, Apache 2.0 releases) do not claim output; several makers' terms could not be read; copyright needs human authorship. Not legal advice |
| How often do AI production models change? | Latest releases of fifteen roster models dated July 2025 to July 2026, nine in 2026; newer versions already on the boards; the Veo 3.1 maker-versus-arena contrast |
| Why do studios use more than one AI model? | Boards disagree below the top, each maker states different limitations, and terms differ; the site's own line that model choice is "a creative decision per shot" |

### H1, title and meta

Keep the approved title (41 characters) and meta description (151
characters): both remain accurate, and "with what each model gets wrong" is
supported by maker limitations and failure-mode research. Keep the working H1.
Do not add "best" to the H1. Place "best ai model for product images 2026" in
the first 100 words and in the first H2. Excerpt still to be written and
counted.

### Internal link targets, verified to exist in `src/pages`

| Anchor idea | URL | File |
|---|---|---|
| AI image production | /solutions/ai-production/image | src/pages/solutions/ai-production/image.astro |
| AI video production | /solutions/ai-production/video | src/pages/solutions/ai-production/video.astro |
| AI excellence (cluster hub for Craft) | /the-studio/ai-excellence | src/pages/the-studio/ai-excellence.astro |
| Shoot it or generate it | /resources/insights/shoot-it-or-generate-it | src/pages/resources/insights/shoot-it-or-generate-it.astro |
| Service page: video production | /services/design/video-production | src/pages/services/design/video-production.astro |
| Platform page: Douyin (short video) or Tmall (product stills) | /solutions/platforms/douyin; /solutions/platforms/tmall | src/pages/solutions/platforms/douyin.astro; tmall.astro |
| All-in cost of AI video | /resources/insights/all-in-cost-of-ai-video | src/pages/resources/insights/all-in-cost-of-ai-video.astro |
| Training a brand model | /resources/insights/training-a-brand-model-that-stays-on-brand | src/pages/resources/insights/training-a-brand-model-that-stays-on-brand.astro |
| Nano Banana how-tos | /resources/how-to/nano-banana-prompting-guide; /resources/how-to/nano-banana-pro-photo-editing | src/pages/resources/how-to/ |

Do not link the copyright guide (it carries dollar figures and tier pricing not
re-verified here) or the glossary model cards (they carry the undated Seedance
rank and the unconfirmed Kling frame rate) until the site backlog fixes them.

### Site backlog flags raised by this research (SPEC stop condition 5)

1. AI image production FAQ says all content runs on open-source models on
   private servers; other pages name closed API models.
2. Video production and motion design pages call Wan 2.6 open-source.
3. Glossary: Seedance "#1" undated rank, "12 reference assets", Kling "60 FPS".
4. Video production page: Seedance lip sync "across eight-plus languages", Veo
   "native 48kHz audio", Kling "longest extendable output window" not on maker
   pages read.
5. Illustration page names Seedream v4; the maker's current release read is 5.0
   Pro.
6. Veo 3 review and diffusion explainer insights carry unmethoded percentages.

## R8. Reconciliation (filled after drafting)
