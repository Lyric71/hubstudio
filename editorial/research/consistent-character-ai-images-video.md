# Research: consistent-character-ai-images-video

| Field | Value |
|---|---|
| Brief | 058 (wave two, `editorial/scripts/wave2/58-consistent-character-ai-images-video.mjs`) |
| Target query | consistent character AI |
| Gap statement (one sentence) | The pages ranking for this query are guides by tool vendors to their own product, and none prints the reference-image limits from the engine makers' own documentation, none says a real person's face needs written consent, and only one gives a drift table a reviewer can run. |
| Research time spent | About 75 minutes active: four SERP phrasings, four ranking pages read, fifteen maker documentation pages fetched and quoted, three help center articles and the positioning file read |
| Written | 2026-10-08 |

Scope note for the writer: the rights section describes production practice,
not legal advice, and says so on the page. No price, no "credits", no hubStudio
rate. Engine capabilities and limits come only from the maker's own page. App
steps come only from `src/content/help/create-an-image.md`,
`create-a-video.md` and `skills.md`, and `hubstudio-positioning.md`.

**Session constraint, recorded as a fact.** The shared web search budget ran
out after the four SERP queries below (200 calls a turn, shared with the
parallel wave two drafters). Every maker page in this file was reached by
fetching a known documentation URL directly, then read as raw HTML with the
tags stripped, so each quote is the page's own text and not a summary. R4
(Chinese-language web first) does not apply: the piece is global and not
China-related. The ByteDance and Alibaba pages read are the makers' own
English pages.

## R2. SERP map

Four phrasings run 2026-10-08. The search surface returned 9 to 10 results per
query. Ages are from the page when fetched, otherwise from the result.

Query: `consistent character AI`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | packagingunboxd.substack.com | Newsletter post | A custom GPT workflow for characters | One tool, no engine limits, no rights | Undated |
| 2 | artlist.io | Tool vendor blog | Tips and a workflow inside the vendor's tool | 403 to fetch; snippet shows tool-centric tips | Undated |
| 3 | runway.com | Tool vendor guide | Character creation and references in the vendor's tool | "some tools let you upload 2-3 reference images", no maker limits, no consent, no QA checklist | 2025-12-19 (fetched) |
| 4 | ltx.studio | Tool vendor blog | Consistency inside the vendor's tool | One tool | Undated |
| 5 | flexclip.com | Tool landing page | A consistent character generator | Product pitch | Undated |
| 6 | kling.ai | Engine maker blog | Consistency factors, prompt techniques, the maker's own tools | No consent, no checklist, no reference maximum | 2026-07-28 (fetched) |
| 7 | mybesh.com | Tool directory | A listing | Nothing on method | Undated |
| 8 | peerpush.com | Tool directory | A listing | Nothing on method | Undated |

Query: `consistent character AI video same character every clip`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | medium.com (personal blog) | Blog post | Five clips with one character | Unverified tool claims | 2026 per title |
| 2 | magichour.ai | Tool vendor blog | A workflow and a common-mistakes table | No consent; "no per-engine limits cited", says it has no test proving two to four images help | 2026-03-18, rechecked 2026-10-01 (fetched) |
| 3 | invideo.io | Tool vendor FAQ | Consistent characters in the vendor's tool | One tool | Undated |
| 4 to 10 | morphic.com (seven locale copies) | Glossary entry | A definition | No method | Undated |

Query: `how to keep the same character in AI images`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | picsart.com | Tool vendor tutorial | Consistency in the vendor's tool | One tool | Undated |
| 2 | community.make.com | Forum thread | An automation question | No answer of record | Undated |
| 3 | imprasit.substack.com | Newsletter post | Seed locking in one free tool | Seed control is not a general method | Undated |
| 4 | gotranscript.com | Video transcript | A tutorial transcript | Not a guide | Undated |
| 5 | apiframe.ai | API reseller guide | Consistency through an API | Reseller | Undated |
| 6 | runway.com | Tool vendor guide | Character references | As above | Undated |
| 7 | budgetpixel.com | Blog | Consistency tips | Generic | Undated |
| 8, 9 | lovable.app and dreampixelforge.com | Hobby sites | Generic tips | Generic | Undated |

Query: `character reference AI image generator reference images`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 to 3 | runway.com, runwayml.com | Tool vendor guides (duplicates) | Character reference tips | Single tool | Undated |
| 4 | docs.novelai.net | Tool documentation | One tool's character reference | Anime tool, one product | Undated |
| 5 | docs.ideogram.ai | Tool documentation | One tool's character reference | One product | Undated |
| 6, 7 | runway.com, runwayml.com | Tool vendor guides | As above | As above | Undated |
| 8, 9 | sorceress.games | Game-asset blog | Reference images for game characters | Game assets, not brand | 2026 per title |

**The bar:** 1,200 to 2,500 words; a workflow list; one table at most (the
common-mistakes table on the one page that has it); no citations to maker
documentation; no rights section on any page read.

**The gap, in one sentence:** every ranking page teaches one product, so a
brand team that runs several engines gets no maker-sourced reference limits,
no consent step for a real face, and no drift check, which is what this piece
supplies.

## R1. What has to be true (mapped before looking anything up)

1. Each engine named in the reference table documents reference images, and
   the limit is on the maker's own page.
2. What the hubStudio app takes per engine (help center).
3. That a start frame anchors the first frame of an image-to-video clip (maker).
4. That reference to video imitates rather than shows the input (maker and
   help center).
5. That the app makes you choose frame or references, not both (help center).
6. A maker-documented method for building a multi-angle set (Google's 360 view
   guidance).
7. A maker statement on real-person references (ByteDance Seed; Google's
   person-generation setting).
8. The Consistent character skill exists in the Catalog (help center).
9. Image upload resizing in the image studio (help center).

Cut from the outline at R1 because no primary source was reached: any claim
that seed locking holds a face across engines; any percentage of "drift" or
"consistency" from a vendor blog; LoRA or fine-tuning steps (not an app
feature, and studio-only per positioning).

## R1 and R5. Claims table

All rows: check 1 on 2026-10-08, fetched as raw HTML. Excerpts saved to
`research/consistent-character-ai-images-video/check1-excerpts-2026-10-08.txt`.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Veo 3.1: "up to 3 reference images of a character, object, or scene"; a starting and an ending image direct the transition between them | developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/ | 2025-10-15 | n/a | Maker developer post | Google | primary, maker claim |
| Veo 3.1 docs: "Veo 3.1 now accepts up to 3 reference images to guide your generated video's content. Provide images of a person, character, or product to preserve the subject's appearance in the output video"; feature on Veo 3.1 models only | ai.google.dev/gemini-api/docs/veo | Last updated 2026-09-17 | n/a | Maker API documentation | Google | primary |
| Veo docs: duration "Must be 8" seconds when using reference images (Veo 3.1 and 3.1 Fast column) | same | 2026-09-17 | n/a | Parameter table | Google | primary |
| Veo docs: personGeneration for image-to-video, interpolation and reference images is "allow_adult" only | same | 2026-09-17 | n/a | Parameter table | Google | primary |
| Veo docs: in image to video, "Veo uses the input image as the initial frame"; first and last frames (interpolation) on Veo 3.1 models | same | 2026-09-17 | n/a | Maker documentation | Google | primary |
| Gemini API: "Nano Banana models allow you to mix up to 14 reference images"; Gemini 3.1 Flash Image (Nano Banana 2) up to 10 object images and up to 4 character images; Gemini 3 Pro Image (Nano Banana Pro) up to 6 object images and up to 5 character images | ai.google.dev/gemini-api/docs/image-generation | Last updated 2026-10-06 | n/a | Maker API documentation | Google | primary |
| Gemini API, "Character consistency: 360 view": generate angles by iterative prompting; "include previously generated images in subsequent prompts to maintain consistency. For complex poses, include a reference image of the selected pose" | same | 2026-10-06 | n/a | Maker prompting guidance | Google | primary |
| Nano Banana 2 launch: "Maintain character resemblance of up to five characters and the fidelity of up to 14 objects in a single workflow" | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | n/a | Maker launch post | Google | primary, maker claim; conflicts with the docs row, see R6 |
| Nano Banana Pro launch: blend "using up to 14 images", "maintaining the consistency and resemblance of up to 5 people" | blog.google/innovation-and-ai/products/nano-banana-pro/ | 2025-11-20 | n/a | Maker launch post | Google | primary, maker claim; agrees with the docs |
| OpenAI image edit endpoint: "For GPT image models, you can provide up to 16 images" | developers.openai.com/api/reference/resources/images/methods/edit | Undated, read 2026-10-08 | n/a | Maker API reference | OpenAI | primary |
| gpt-image-2 "processes every image input at high fidelity automatically" (input_fidelity not settable) | developers.openai.com/api/docs/guides/image-generation | Undated, read 2026-10-08 | n/a | Maker guide | OpenAI | primary |
| FLUX.1 Kontext edits from one `input_image`; "FLUX.1 Kontext excels at character consistency, even after multiple edits"; maker recommends FLUX.2 with "multi-reference support (up to 10 images)" for new projects | docs.bfl.ai/kontext/kontext_image_editing | Undated, read 2026-10-08 | n/a | Maker documentation | Black Forest Labs | primary, maker claim |
| Seedance 2.0: "Users can simultaneously input up to 9 images, 3 video clips, 3 audio clips, plus natural language instructions"; "room for optimization regarding multi-subject consistency" | seed.bytedance.com/en/blog/official-launch-of-seedance-2-0 | 2026-02-12 | Internal evaluation, sample undisclosed (not used) | Maker launch post | ByteDance | primary, maker claim |
| Seedance 2.0 note: "If you wish to use real human portraits as subject references for video generation, identity verification or prior legal authorization is required" | same | 2026-02-12 | n/a | Maker statement | ByteDance | primary |
| Seedance 2.5 page: videos up to 30 seconds; "Understands reference videos more precisely"; no reference count stated | seed.bytedance.com/en/seedance2_5 | Undated, read 2026-10-08 | n/a | Maker model page | ByteDance | primary for what it states; the count is an absence |
| Seedream 5.0 Pro: editing includes "multi-image fusion"; "By simultaneously inputting multiple reference materials and a target base image, the model fuses the different elements into the scene as instructed"; no reference count stated | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro | 2026-07-08 | n/a | Maker launch post | ByteDance | primary, maker claim |
| Seedream 4.5: "Preserves the reference image's facial features, lighting, color tone, and other details"; no reference count stated | seed.bytedance.com/en/seedream4_5 | Undated, read 2026-10-08 | n/a | Maker model page | ByteDance | primary, maker claim |
| xAI reference to video: "A maximum of 7 reference images can be provided per request"; "The maximum resolution for reference-to-video is 720p"; use cases include "character-consistent storytelling"; images do not lock the first frame | docs.x.ai/developers/model-capabilities/video/reference-to-video | Last updated 2026-09-28 | n/a | Maker API documentation | xAI | primary |
| Alibaba Model Studio: wan3.0-video "supports all-in-one reference capabilities with multiple reference images, videos, and audio" (no count on the page); "Setting the last frame of one clip as the first frame of the next creates seamless transitions" | alibabacloud.com/help/en/model-studio/video-generate-edit-model/ | Last updated 2026-09-28 | n/a | Maker documentation | Alibaba Cloud | primary |
| Alibaba Model Studio, Wan reference to video (wan2.7-r2v): "When used for a main character, the reference asset must contain only a single character" | alibabacloud.com/help/en/model-studio/wan-video-to-video-api-reference | Last updated 2026-09-28 | n/a | Maker API reference | Alibaba Cloud | primary; documented for wan2.7-r2v, used on the page as maker guidance on reference hygiene, not as a Wan 3.0 rule |
| MiniMax H3: mixed references in one instruction, example "have the character in Image 2 sing"; no count stated | minimax.io/blog/minimax-h3 | 2026-07-31 (ledger, brief 40) | n/a | Maker blog | MiniMax | primary, maker claim |
| App: image engines and source images per edit: ChatGPT Image 2 up to 4, Nano Banana 2 and Pro up to 4, Seedream 4.5 and 5.0 Pro up to 4, FLUX.1 Kontext Pro and Max 1, Muse Image 1.0 1, Grok Imagine Image 2.0 and FLUX Pro 1.1 none | src/content/help/create-an-image.md | updated 2026-10-08 | n/a | Help center | hubStudio | first-party, ground truth for the app |
| App: uploads resized in the browser to 1,536 px on the long side, metadata removed; the result's shape follows the first upload; prompt up to 4,000 characters | same | 2026-10-08 | n/a | Help center | hubStudio | first-party |
| App: video engines and what each can be fed (Veo 3.1 Fast start and last frame or up to 3 reference pictures; Wan 3.0 start and last frame or up to 10 pictures, 5 clips, 1 sound; Grok Imagine 1.5 start image or up to 7 pictures, 1 sound; Seedance 1.0 Pro Fast start image; Seedance 2.0 start and last frame or 9 pictures, 3 clips, 1 sound; Seedance 2.5 start and last frame or 30 pictures, 10 clips, 2 sound files; MiniMax H3 start and last frame or 9 pictures, 3 clips, 1 sound; Kling 2.5 Turbo, 2.6 and 3.0 and Gemini Omni Flash prompt only) | src/content/help/create-a-video.md | updated 2026-10-08 | n/a | Help center | hubStudio | first-party |
| App: "It is one or the other. An engine given a frame ignores the references"; references are imitated "rather than shows as they are, for a character, a product, a style or a voice"; prompt up to 2,500 characters | same | 2026-10-08 | n/a | Help center | hubStudio | first-party |
| App: price shown next to the button before every run; files fed to a video render billed like a download when it succeeds; on some engines a reference clip lowers the price of the whole render; a failed run is not charged; storage and downloads a small charge against the balance | src/content/help/create-a-video.md, create-an-image.md, hubstudio-positioning.md | 2026-10-08 | n/a | Help center and positioning | hubStudio | first-party, no amount |
| App: Catalog skill "Consistent character across images" to keep the same person or mascot recognizable across a series; skills shape Improve with AI | src/content/help/skills.md | updated 2026-10-05 | n/a | Help center | hubStudio | first-party |
| App: History reuse prompt; Validation; Assets Library folders, tags, versions; Campaigns | hubstudio-positioning.md | 2026-10-08 | n/a | Binding positioning file | hubStudio | first-party |

## R6. Conflicts, published as a range or a stated difference

| Topic | Sources | Why they differ | How the page handles it |
|---|---|---|---|
| Nano Banana 2 characters | Launch post 2026-02-26: up to five characters, 14 objects "in a single workflow". API docs updated 2026-10-06: up to 4 character images and 10 object images per request, 14 references in all | The launch post counts what a multi-step workflow can hold; the docs count images in one request, eight months later | Print the docs figure as the per-request limit and the launch figure beside it, with both dates |
| Maker limit against app limit | OpenAI 16 images, Gemini 14, against the app's 4 source images per edit | The app caps what one edit takes; the maker states what its API takes | The table carries both columns, labeled |
| Seedance 2.0 sound | Maker: 3 audio clips. App: 1 sound file | Same reason | Both columns |

## Cleared for use

> Google's Gemini API documentation lets Nano Banana 2 take up to 4 character
> images and up to 10 object images in one request, and Nano Banana Pro up to
> 5 character images and 6 object images, out of 14 reference images in all.
> Source: Google AI for Developers, image generation documentation, last
> updated October 2026; maker documentation.

> Google's documentation says Veo 3.1 accepts up to 3 reference images of a
> person, character or product to preserve the subject's appearance, and a
> reference-image clip must run 8 seconds.
> Source: Google AI for Developers, Veo documentation, last updated September
> 2026; maker documentation.

> ByteDance says Seedance 2.0 takes up to 9 images, 3 video clips and 3 audio
> clips in one request, and that real human portraits used as subject
> references need identity verification or prior legal authorization.
> Source: ByteDance Seed, Seedance 2.0 launch post, February 2026; maker
> statement.

> xAI's documentation allows up to 7 reference images per reference-to-video
> request, at a maximum of 720p.
> Source: xAI documentation, reference to video, last updated September 2026;
> maker documentation.

> OpenAI's image edit endpoint takes up to 16 input images for its GPT Image
> models.
> Source: OpenAI API reference, image edits, read October 2026; maker
> documentation.

> Black Forest Labs documents FLUX.1 Kontext as editing from one input image
> and says it holds character consistency across repeated edits.
> Source: Black Forest Labs documentation, FLUX.1 Kontext image editing, read
> October 2026; maker claim.

## Do not publish

| Claim | Where it came from | Why |
|---|---|---|
| "A single high-quality reference image works well for most projects" | A tool vendor guide | Vendor opinion, no test, and names a tool |
| "2 to 3 reference images" as a general rule | Tool vendor guides | Not a maker figure; the maker limits differ by engine |
| Seed locking keeps the same face | A newsletter post on one free tool | One tool, no method, not an app feature |
| Kling reference counts (Elements, multi-image reference) | Not reached on a maker page this session | The app runs every Kling engine prompt only, so the piece does not need it |
| A reference count for Wan 3.0, Seedance 2.5, Seedream 4.5 or 5.0 Pro, MiniMax H3 from the maker | Maker pages read state none | Print the app's limit and say the maker page read states no count |
| Wan 2.7 R2V "reference images plus videos up to 5" applied to Wan 3.0 | Alibaba Wan 2.7 API reference | Different model; the app's Wan 3.0 limit is 10 pictures |
| OpenAI usage policy wording on likeness | openai.com/policies/usage-policies | 403 to fetch on 2026-10-08 |
| Grok Imagine Image 2.0 "up to 5 reference images" for editing | docs.x.ai Imagine overview | True on the maker page, but the app runs that engine as text to image only, so it would mislead a reader of an app guide |
| Any percentage for drift, consistency or approval rate | Vendor blogs | No method |
| LoRA training, fine-tuning, a "character lock" in the app | Vendor pages | Not an app feature (positioning: no custom model training in the app) |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| check1-excerpts-2026-10-08.txt | The quoted passage on each of the fifteen maker pages, with its URL, as stripped page text | 2026-10-08 | Maker documentation and blogs, fetched by curl |

No new app capture: the piece reuses the existing localized captures
(`/Images/help/create-an-image-studio.webp`, `/Images/help/create-a-video-studio.webp`,
`/Images/help/skills-catalog.webp`), per the wave two rule.

## R8. Reconciliation (filled after drafting)

Check 2 ran in iteration 8 on 2026-10-08: all sixteen maker URLs re-fetched
by curl, every quoted phrase found again unchanged. Excerpts saved to
`research/consistent-character-ai-images-video/check2-excerpts-2026-10-08.txt`.
The Seedream 5.0 Pro launch post was re-read for the table row and added to
the claims table above.

| Number or fact in the draft | Claims table row | Status |
|---|---|---|
| 1,536 pixels on the long side | App, image studio uploads | matches |
| Up to 14 references; 4 character and 10 object images (Nano Banana 2); 5 and 6 (Nano Banana Pro) | Gemini API image docs | matches |
| Five characters, 14 objects, "in a single workflow" (launch, February 2026) | Nano Banana 2 launch post | matches, published beside the docs figure (R6) |
| Up to 16 images on the edit endpoint; high fidelity | OpenAI API reference and guide | matches |
| One input image; consistency across repeated edits (Kontext) | BFL docs | matches |
| Seedream 4.5 facial features; 5.0 Pro multi-image fusion; no count | ByteDance model page and launch post | matches |
| Veo 3.1: 3 reference images, 8-second clip, initial frame, adults only | Veo docs and developer post | matches |
| Seedance 2.0: 9 images, 3 clips, 3 audio; multi-subject consistency limitation; real-portrait authorization | Seedance 2.0 launch post | matches |
| Seedance 2.5 "Understands reference videos more precisely"; no count | Seedance 2.5 page | matches; an earlier wording "than 2.0" was not on the page and was removed |
| Grok Imagine 1.5: 7 reference images, 720p | xAI reference-to-video docs | matches |
| Wan 3.0 multiple references, no count; last frame as next first frame; single character per reference | Alibaba Model Studio docs | matches; the single-character line is attributed to Wan documentation, not stated as a Wan 3.0 rule |
| MiniMax "have the character in Image 2 sing" | MiniMax H3 blog | matches |
| Every app column value (4, 1, 3, 9, 3, 1, 30, 10, 2, 7, 10, 5, prompt only) | App help center rows | matches |
| Consistent character across images skill; Undo; team skills and the When line | skills.md, create-an-image.md | matches |
| FAQ on cost: price before the run, inputs billed like a download, reference clip can lower the price, failed run not charged | App price row | matches; no amount printed |
| "Nine steps", "five pictures", "fifty to eighty words" | Method advice, not a sourced figure | house practice, stated as instruction, no claim of measurement |

Removed during drafting because they were not in this file: a comparative
claim that five clean angles beat fourteen mixed ones (rewritten without
numbers), a claim that short clips hold a face better than one long take
(rewritten as reasoning from the start-frame row, no comparative claim), and
the "than 2.0" wording on Seedance 2.5.
