# Research: kling-3-product-video-guide

| Field | Value |
|---|---|
| Brief | 74 (wave two, `editorial/scripts/wave2/74-kling-3-product-video-guide.mjs`) |
| Target query | kling 3.0 prompts |
| Gap statement (one sentence) | The reviewed results leave room for a product-specific shot plan with explicit app-input limits and rejection checks. |
| Research time spent | Earlier attempt saved 15 captures and a SERP audit before its session limit; its claimed 60-minute estimate is not supported by the 14-minute runner interval. Continuation rechecked the evidence on October 16; no measured research-duration claim is made. |
| Written | 2026-10-16 |

R4 (Chinese-language web first): Kling is made by Kuaishou, a Chinese
company, so the Chinese-language web was searched before the English one and
the official Chinese user guide (docs.qingque.cn) was captured. It carries the
same capability table as the English guide (same rows, same ticks) and the
same 15-second ceiling and five languages; the article cites the English
guide, which is the version a reader out of China can open. No China platform
spec is involved. Chinese source and English rendering, side by side:

| Chinese (Kling, official guide) | English (Kling, official guide) |
|---|---|
| 可灵视频 3.0 模型使用指南 | Kling VIDEO 3.0 Model User Guide |
| 智能分镜 / 自定义分镜 | Multi-Shot / Custom Multi-Shot |
| 首帧 + 主体参考 | Start Frame + Element Reference |
| 多语种（中、英、日、韩、西） | Multilingual Support (Chinese, English, Japanese, Korean, Spanish) |
| 生成时长15秒 | 15s Output Duration |

## R1. What has to be true (mapped before looking anything up)

1. What Kling 3.0 is, who makes it, when it shipped.
2. What changed from Kling 2.6 and from Kling 2.5 Turbo, maker's words only.
3. Kling 3.0 length range at the maker, and in the hubStudio app.
4. Resolution at the maker, and frame size in the app; whether frame size
   changes the price in the app.
5. Standard and Pro (Professional) modes: what the maker says each does.
6. Sound: native audio on 3.0, languages, what 2.6 needs (Pro) for sound.
7. The maker's prompt structure, and its camera move vocabulary.
8. Which moves the maker warns about (several moves at once, fast subject
   plus move).
9. Multi-shot: what it is at the maker, and whether the app exposes it.
10. Text and labels: what the maker claims for lettering on 3.0.
11. In the app: Kling engines are prompt only; which engines take a start
    frame; prompt length; Improve with AI; the two Catalog skills; price per
    second shown before the render; charged only on success; History.
12. Whether the maker has shipped anything newer, so the guide is honest
    about its scope.

Dropped at R1 because no maker page can support them: a frame rate, a
consistency or success rate, any benchmark rank, any render time in seconds.

## R2. SERP map

Read 2026-10-16 through a US web search by a research subagent, 22 pages
opened. Non-primary domains are anonymized under the user's overriding no-naming rule. Their result positions, page types and gaps are retained. Ages are the dates the pages show.

Query: kling 3.0 prompts

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Result source 01 | Video editor app blog, about 2,800 words, 2 tables | Five-part formula, motion scale, negative prompts | Says clips run "up to 10 seconds" (wrong for 3.0); no product guidance; no maker links | 2026, undated |
| 2 | Result source 02 | API reseller blog, about 2,200 words, 1 table | Think in shots, up to 6 shots, dialogue formatting | Resolution; product video beyond one line; no maker links | 2026-02-05 |
| 3 | Result source 03 | Medium post | Style and prompt list | Not opened | 2026, undated |
| 4 | Result source 04 | AI app use-case page, about 2,500 words, 1 table | Lead with the camera, weak vs strong prompts | No specs, no product content | Undated |
| 5 | Result source 05 | Third-party look-alike site, about 4,500 words | Layered prompts, camera vocabulary, 15 s | No maker links, no product section | 2026-02-15 |
| 6 | Result source 06 | AI app blog | Prompt guide | Not opened | 2026 |
| 7 | Result source 07 | AI app blog | Prompt guide | Not opened | 2026 |
| 8 | Result source 08 | Third-party look-alike site | Examples | Not opened | 2026 |
| 9 | Result source 09 | AI app blog | 25 examples | Not opened | 2026 |

Query: kling 3.0 prompt guide

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Result source 01 | As above | As above | As above | 2026 |
| 2 | Result source 02 | As above | As above | As above | 2026-02-05 |
| 3 | Result source 10 | AI video app blog, about 8,500 words, 2 tables | Scene, characters, action, camera, audio; 10+ moves | No reflective surfaces or labels; does link the maker guide | Shows 2026-10-15 |
| 4 | Result source 11 | AI video app resource, about 4,500 words, 2 tables | Spec table (3 to 15 s, 4K, 5 languages), labels legible in orbit | No product demo, no maker links | 2026-02 |
| 5 | Result source 04 | As above | As above | As above | Undated |
| 6 | Result source 05 | As above | As above | As above | 2026-02-15 |
| 7 | Result source 12 | Look-alike site | Cinematic prompting | Not opened | 2026 |
| 8 | Result source 06 | As above | As above | Not opened | 2026 |
| 9 | Result source 08 | As above | As above | Not opened | 2026 |
| 10 | Result source 13 | AI video app blog | Master formula | Not opened | 2026 |

Query: kling camera movement prompts

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Result source 14 | AI app news | General tips | Not opened | Undated |
| 2 | kling.ai | Maker's own blog, about 2,800 words, 0 tables | Push in, pull back, pan, tilt, track, orbit, static; a skincare bottle push-in | No spec table; nothing on labels or reflections | 2026-08-13 |
| 3 | Result source 01 | Video app blog | All-models prompts | Not opened | 2026 |
| 4 | Result source 15 | Design app blog | 30+ prompts | Not opened | Undated |
| 5 | Result source 16 | AI blog | 70+ commands, for 2.5 | Older model | 2025 to 2026 |
| 6 | Result source 17 | Tutorial site | Moves, negative prompts | Not opened | 2026 |
| 7 | Result source 13 | AI video app blog, about 2,800 words, 1 table | 11 moves, speed guide | No specs, no product content | 2026-04-12 |
| 8 | Result source 18 | AI tools blog | Advertising use | Not opened | 2026 |
| 9 | Result source 19 | Aggregator, about 2,200 words, 1 table | 6 moves plus 4 master shots | "8k" and "NeRF" claims; upsell | 2026-04-21 |

Query: kling 3.0 vs kling 2.6

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Result source 20 | Creator review, about 2,000 words, 0 tables | Hands-on multi-shot, elements, audio | No specs table, no product content | 2026-02 |
| 2 | Result source 21 | AI tools directory | Use 2.6 by default, 3.0 for 4K or longer clips | Not opened | 2026 |
| 3 | Result source 22 | AI app blog | Comparison | HTTP 410, dead but indexed | 2026 |
| 4 | Result source 23 | Design app blog | "Real test" | Shell only | 2026 |
| 5 | Result source 24 | AI app blog, about 800 words, 1 table | Short comparison | "3+ minutes per clip", "4K at 60fps", both wrong against the maker | 2026-03-13 |
| 6 | Result source 25 | Aggregator, about 3,500 words, 1 table | Spec table for both | 24/30/60 fps and "2.6 had no native audio", both unsupported by the maker | 2026 |
| 7 | Result source 26 | AI app blog, about 3,500 words, 2 tables | Motion and adherence | Says both top out at 1080p (outdated since April 2026) | 2026-05-27 |
| 8 | en.wikipedia.org | Encyclopedia | History | Not opened | Rolling |
| 9 | Result source 27 | AI app blog | What's new | Not opened | 2026 |

Query: kling 3.0 video length

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Result source 21 | AI tools directory, about 3,800 words, 3 tables | 3 to 15 s, 720p, 1080p, 4K, 5 languages | No product content | 2026-08-29 |
| 2 | kling.ai | Maker's own blog, about 4,500 words | 3 to 15 s, up to 6 shots, 5 languages | No product walkthrough | 2026-07-28 |
| 3 | Result source 28 | API host model page | 3 to 15 s, multi_prompt up to 6 shots | No 4K, no product content | 2026 |
| 4 | Result source 22 | AI app landing | App page | Not opened | 2026 |
| 5 | Result source 29 | Ecommerce video app blog, about 3,200 words, 1 table | The only third-party page on product video: references, a negative prompt for label artifacts | Nothing on reflections; muddles multi-shot; mixes in image specs | 2026-02-21 |
| 6 | Result source 30 | AI app model page | Specs | Not opened | 2026 |
| 7 | Result source 31 | Look-alike site | Generator | Not opened | 2026 |
| 8 | Result source 32 | Marketing app page | Specs | Not opened | 2026 |
| 9 | Result source 33 | Review site | Plans, 15 s, native audio | Not opened | 2026 |

Chinese-language web (可灵3.0 提示词, 可灵 3.0 运镜, 可灵3.0 使用指南): portal
reposts and hands-on tests (sohu.com, 163.com, news.qq.com, woshipm.com,
ithome.com, finance.sina.com.cn), community repos, a Zhihu column from 2024
and developer blogs. One sohu repost (2026-06-13) has a product example, a
180-degree orbit around a sneaker. None treats labels or reflective finishes.
Official pages found: the Qingque guide captured below.

**The bar:** the substantial ranking pages run 2,000 to 4,500 words (one
outlier at 8,500) with zero to two tables, usually a weak-versus-strong
prompt table or a spec grid. They teach the same formula (subject, motion,
camera, scene, style, audio) and list 6 to 11 moves. Almost none link the
maker. The earlier review did not establish an end-to-end product test. A maker-sourced
capability table, a camera move table with the risk to a product, three
product prompts and a QA list clear the bar at about 1,800 words.

**The gap, in one sentence:** a useful guide can connect the maker's capabilities to the app's actual inputs and explicit product QA.

## R1 and R5. Claims table

Who paid: every engine fact below is the maker's own documentation, so the
maker paid for it and it is a maker claim about its own product; the page
attributes it to Kling and calls quality statements the maker's own. Sample
size and method: not applicable to documentation (a stated capability, not a
measurement); no measured figure is used. App facts are the hubStudio help
center, first party, used under the house rule that app features are
described only from that source.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Kling 3.0 series fully rolled out January 31, 2026 | kling.ai/release-note/release-history | entry 2026-01-31, read 2026-10-16 | n/a | Maker release notes | Kling (Kuaishou) | primary |
| Kling 3.0 user guide dated Feb 6, 2026; 2.6 "upgraded to VIDEO 3.0" | kling.ai/quickstart/klingai-video-3-model-user-guide | 2026-02-06 | n/a | Maker user guide | Kling | primary |
| 3.0 adds over 2.6: Multi-Shot, Start Frame + Element Reference, 3+ character coreference, 5 languages (zh, en, ja, ko, es), dialects and accents, 15 s output, flexible duration; both have text to video, image to video, start and end frames, native audio | same guide, capability table; same table in the Chinese guide (docs.qingque.cn) | 2026-02-06 | n/a | Maker capability table | Kling | primary |
| 3.0 length "flexible duration ranging from 3 to 15 seconds" | same guide | 2026-02-06 | n/a | Maker user guide | Kling | primary |
| 3.0 at launch: "two modes: Native Audio and No Native Audio, each supporting 1080p and 720p" | same guide, pricing section | 2026-02-06 | n/a | Maker user guide | Kling | primary (prices not used) |
| Native 4K mode added to VIDEO 3.0 series | kling.ai release note "Cinema-Grade Native 4K" | entry 2026-04-23 | n/a | Maker release note | Kling | primary |
| 3.0 dialogue in 5 languages; other languages translated into English by the model | same guide, Multilingual section | 2026-02-06 | n/a | Maker user guide | Kling | primary |
| 3.0 "native-level text output", keeps signs, captions, logos from images; "e-commerce advertising" | same guide, section 4 | 2026-02-06 | n/a | Maker claim | Kling | primary, maker claim |
| Multi-Shot is a switch; off = single-shot by default; Custom Multi-Shot sets shots and durations | same guide, section 1 | 2026-02-06 | n/a | Maker user guide | Kling | primary |
| Custom Multi-Shot up to six shots; durations add up to the output length | kling.ai/blog/kling-3-15s-video-narrative-control-duration | 2026-07-28 | n/a | Maker blog | Kling | primary, maker blog |
| Element binding keeps the subject "clear and stable" under zoom, pan, tilt; elements from 2 to 4 reference images | same user guide, section 2 | 2026-02-06 | n/a | Maker claim | Kling | primary, maker claim |
| 2.6: native audio, "visuals, natural voiceovers, matching sound effects, and ambient atmosphere in a single pass"; 5 s or 10 s; 16:9, 1:1, 9:16; voice in Chinese and English only | kling.ai/quickstart/klingai-video-26-audio-user-guide | 2025-12-16 | n/a | Maker user guide | Kling | primary |
| 2.6 native audio priced only under Professional Mode (sound with Pro) | same guide, pricing lines | 2025-12-16 | n/a | Maker user guide | Kling | primary (prices not used) |
| 2.6 prompt format: Scene + Element + Movement + Audio + Other (style, emotion, camera); quote the sound content | same guide, section 4 | 2025-12-16 | n/a | Maker user guide | Kling | primary |
| 2.5 Turbo announced September 23, 2025: "more dynamic motion and camera movement with greater amplitude", better "prompt comprehension", "handle complex multi-step instructions", lighting and composition | finance.yahoo.com/news/kling-ai-launches-2-5-112200779.html (Kuaishou release via GLOBE NEWSWIRE, 2025-09-26; ir.kuaishou.com and globenewswire.com return 403) | 2025-09-26 | n/a | Maker press release | Kuaishou | primary, maker claim |
| Prompt formula: Subject (description) + Subject Movement + Scene (description) + (Camera Language + Lighting + Atmosphere) | kling.ai/quickstart/text-to-video-prompt-guide | page dated 2025-11-24, written for earlier versions (5 or 10 s) | n/a | Maker guide | Kling | primary (formula only) |
| Standard: faster, lower cost; Professional: "richer details", and in the maker's own examples "the camera movement is more stable" | kling.ai/quickstart/how-to-choose-video-mode | page dated 2025-11-24 | n/a | Maker guide | Kling | primary, maker claim |
| Camera words: push in, pull back, pan left/right, tilt up/down, track forward, orbit slowly, static camera; "one main camera move per shot"; several moves "can create unstable results"; product close-up "may need a slow push-in"; push-in on a still subject easier than on a fast one; tilt needs vertical structure; pan against fast opposite subject motion confuses | kling.ai/blog/kling-ai-camera-control-video-guide | 2026-08-13 | n/a | Maker blog | Kling | primary, maker blog |
| Camera control presets: horizontal, vertical, zoom, pan, tilt, roll, plus four Master Shots | kling.ai/quickstart/ai-camera-control-guide | page dated 2025-11-24 | n/a | Maker guide | Kling | primary (UI presets of Kling's own studio; not in the hubStudio app, used only as vocabulary) |
| Newer Kling generation released October 15, 2026 | kling.ai release note dated 2026-10-15 | 2026-10-15 | n/a | Maker release note | Kling | primary; not named on the page (not in the app) |
| App: Kling 3.0 3 to 15 s; Mode Standard or Pro; frame size 720p, 1080p or 4K; sound optional; prompt only | src/content/help/create-a-video.md | updated 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: Kling 2.6 5 or 10 s; Standard or Pro; 720p or 1080p; sound Pro only; prompt only | same | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: Kling 2.5 Turbo 5 or 10 s; Standard or Pro; 720p or 1080p; sound optional; prompt only | same | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: frame size does not change the price; Mode labeled "Pro: sharper" | same, options table | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: start-frame engines Veo 3.1 Fast, Wan 3.0, Seedance 2.0 (start and last frame), with lengths 4/6/8 s, 2 to 30 s, 4 to 15 s | same, engine table | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: prompt up to 2,500 characters; write the scene as a shot | same, step list | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: Improve with AI rewrites for this engine, length and sound choice; skills for images and video shape it; Catalog has Video camera movement vocabulary, Video shot pacing and duration, Avoid list: hands, text artifacts, watermarks | create-a-video.md; skills.md | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: price per second shown before the render, follows engine, mode, sound, length; charged only when it succeeds | create-a-video.md, price section | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: every clip saved in History with prompt, engine, length and cost; Reuse prompt; Run again bills again | create-a-video.md; history.md | 2026-10-12 | n/a | Help center | hubStudio | primary |
| App: render given about five minutes | create-a-video.md | 2026-10-12 | n/a | Help center | hubStudio | primary |

Check 1: every maker URL fetched and read in full on 2026-10-16 (captures
below). Check 2: see R8.

## Cleared for use

> Kling documents Kling 3.0 as a text, image and start-and-end-frame video
> model that runs "from 3 to 15 seconds," adds multi-shot control and
> dialogue in five languages, and launched in 720p and 1080p.
> Source: Kling AI, Kling VIDEO 3.0 Model User Guide, February 6, 2026, the maker's own documentation.

> Kling added a native 4K mode to the VIDEO 3.0 series on April 23, 2026,
> by its own release notes.
> Source: Kling AI release notes, April 23, 2026, the maker's own announcement.

> Kling's camera advice for its 3.0 models: "one main camera move per shot is
> usually better," because asking for several "can create unstable results."
> Source: Kling AI blog, camera control guide, August 13, 2026, the maker's own advice, not a measured result.

> Kling describes VIDEO 2.6 as generating "visuals, natural voiceovers,
> matching sound effects, and ambient atmosphere in a single pass," at 5 or 10
> seconds, with voice in Chinese and English.
> Source: Kling AI, KLING VIDEO 2.6 User Guide, December 16, 2025, the maker's own documentation.

> Kuaishou said 2.5 Turbo brought "more dynamic motion and camera movement
> with greater amplitude" and better handling of "complex multi-step
> instructions."
> Source: Kuaishou press release, September 26, 2025 (launch September 23), the maker's own claim.

## Do not publish

| Claim | Where it came from | Why it was cut |
|---|---|---|
| 60 fps, 24/30/60 fps, "4K at 60fps" | Aggregator and app blogs; the live glossary | No maker page gives a frame rate |
| "Up to 10 seconds" for 3.0 | Video app blog | Wrong against the maker (3 to 15 s) |
| "3+ minutes per clip" | AI app blog | Wrong against the maker |
| Native 4K at launch | Several blogs; the live glossary | Maker launched at 720p and 1080p; 4K mode added April 23, 2026 |
| "Longest extendable output window" for Kling 3.0 | hubStudio video production page | Not on any maker page; in the app Kling 3.0 tops out at 15 s while two other engines reach 30 s |
| 2.6 had no native audio | Aggregator | Contradicted by the maker's 2.6 guide |
| 2.5 Turbo has no sound | Inference from the maker calling 2.6 its first native-audio model | The app's help center lists sound as optional on 2.5 Turbo; the page reports the app fact and does not call 2.6 a first |
| Any Kling credit price (12, 9, 8, 6 credits a second; 30 a second for 4K; 25 per 5 s for 2.5 Turbo) | Maker pages | House rule: no amounts; and credits are another product's unit |
| Win-loss ratios in blind tests (2.5 Turbo) | Kuaishou press release | Seller's own test, names other engines, no method published |
| User counts on the feature page (60M+ users, 600M+ videos) | kling.ai feature page | Seller's own figure, no method; not needed |
| Multi-Shot, Custom Multi-Shot, element binding, Motion Control, camera presets as hubStudio features | Maker pages | Not in the help center: in the app Kling is prompt only, and no shot control is listed |
| The name of the newer generation released October 15, 2026 | Maker release note | Brief: never name an engine the app does not offer; the page says a newer generation exists without naming it |
| Kling 3.0 Turbo and 3.0 Omni capabilities | Maker release notes | Not offered in the app |
| Element binding keeps products "stable" as a promise | Maker claim | Reported as the maker's claim about its own studio only, never as an app result |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| research/kling-3-product-video-guide/kling-video-3-model-user-guide.txt | Kling 3.0 user guide, full text | 2026-10-16 | kling.ai quickstart (curl) |
| .../kling-video-3-guide-zh-qingque.txt | Chinese official guide, outline and capability table | 2026-10-16 | docs.qingque.cn (headless render) |
| .../kling-release-history.txt | Release notes list, 2026-01-05 to 2026-10-15 | 2026-10-16 | kling.ai (headless render) |
| .../kling-release-note-native-4k.txt | 4K mode note | 2026-10-16 | kling.ai |
| .../kling-release-note-3-rollout.txt | 3.0 rollout note | 2026-10-16 | kling.ai |
| .../kling-release-note-3-turbo.txt | 3.0 Turbo note (not in the app) | 2026-10-16 | kling.ai |
| .../kling-release-note-newer-generation-2026-10-15.txt | Newer generation note | 2026-10-16 | kling.ai |
| .../kling-blog-camera-control-2026-08-13.txt | Maker camera control guide | 2026-10-16 | kling.ai blog |
| .../kling-blog-15s-duration-2026-07-28.txt | Maker duration and multi-shot blog | 2026-10-16 | kling.ai blog |
| .../kling-feature-video-3.txt | Maker feature page | 2026-10-16 | kling.ai |
| .../kling-quickstart-camera-movement.txt | Camera control presets | 2026-10-16 | kling.ai quickstart |
| .../kling-quickstart-text-to-video-prompt.txt | Prompt formula | 2026-10-16 | kling.ai quickstart |
| .../kling-quickstart-standard-professional-mode.txt | Standard and Professional modes | 2026-10-16 | kling.ai quickstart |
| .../kling-video-2-6-user-guide.txt | 2.6 user guide | 2026-10-16 | kling.ai quickstart |
| .../kuaishou-release-2-5-turbo-2025-09-26.txt | 2.5 Turbo release quotes | 2026-10-16 | Yahoo Finance syndication |

App screens on the page reuse the existing localized capture
`/Images/help/create-a-video-studio.webp` (with `.fr` and `.zh`). No new
capture.

## R8. Reconciliation (filled after drafting)

Reconciliation is recorded after the draft below.

## Continuation research decision, October 16, 2026

The prior SERP file has nine results for several phrasings and ten for one.
Four searches were rerun during continuation; results are a search-tool
snapshot, not a verified Google ranking. No missing tenth result is invented.
No ranking or word-count claim from the SERP audit enters the article.

The maker guides were fetched again and matched the saved captures. The
primary corporate release for 2.5 Turbo is now readable at
https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-25-turbo-video-model-industry-leading
(September 26, 2025). This replaces the syndication URL. The native 4K
release dialog currently returns a heading to the web reader; the saved
render is corroborated by Kuaishou's August 19, 2026 interim-results release:
https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-technology-announces-second-quarter-and-interim-2026
The article uses the dated corporate confirmation, not an unsupported launch
resolution. January 31 rollout timing is cut because the corporate release
dates the public announcement February 5. No launch date is needed in copy.

| Additional cleared claim | Source | Date | Sample and method | Paid by | Confidence |
|---|---|---|---|---|---|
| Native 4K added to the 3.0 series during the second quarter | Kuaishou interim-results release above | August 19, 2026 | No sample; documented release, not a benchmark | Maker | primary |
| Product prompts and camera-risk notes are proposed shot plans, not tested outputs or guarantees | Editorial method based on maker camera guide | October 16, 2026 | No experiment claimed; explicit acceptance criteria | hubStudio | primary (editorial method, not performance evidence) |
| Any numerical example duration is a suggested setting within the documented range, not a quality claim | create-a-video.md and maker 3.0 guide | October 12 and February 6, 2026 | Documentation mapping | hubStudio and maker | primary |

The existing English, French and Chinese video-studio captures were checked.
They show monetary amounts and do not depict a Kling-specific selection.
They are named in the asset brief as excluded sources; none is embedded,
reconstructed or presented as a tested Kling session. The page uses a hero
and documented text instructions. No showcase recording exists; fallback 12
applies. No product generation test was run, and no success claim is made.

Live-copy reconciliation found an unsupported Kling frame rate in the
glossary and an unsupported longest-duration superlative in the video
production service. Both are corrected in their source pages and locales.
The published model-roster article already identifies these claims as
unverified, so its factual body does not require a changed date.

## R8 final reconciliation, October 16, 2026

R2 completion: four individual continuation searches each returned at least
ten results. The first ten are recorded in serp-continuation.md. They include
product examples and maker guides, so the original absence claim is
withdrawn and the source brief verdict corrected. No article claim depended
on that absence. This supersedes the earlier nine-result limitation.

| Draft figure or factual group | Evidence and scope | Result |
|---|---|---|
| 3.0, 2.6, 2.5 Turbo | Version names in maker guides and app help | Matched, not numerical performance claims |
| 3 to 15 seconds; 5 or 10 seconds | Maker 3.0 guide and app table updated October 12 | Matched |
| 720p, 1080p, 4K | App help table; maker interim release corroborates native 4K was added after launch | Matched, no frame rate published |
| Chinese, English, Japanese, Korean and Spanish speech | February 6 maker 3.0 guide | Matched; no success rate asserted |
| Standard, Pro, frame-size price behavior and optional sound | create-a-video.md, engine/options tables | Matched; amounts omitted |
| 3, 5, 10 and 15-second suggested settings; five/ten seconds in prompt examples | Cleared app duration ranges | Editorial examples within documented limits, not an experiment |
| Veo 3.1 Fast, Seedance 2.0 and Wan 3.0 start frames | create-a-video.md | Matched; no exact-product guarantee |
| February 6 and December 16 guide dates; September 26 release date; August 19 interim statement; November 24 prompt guide; August 13 camera guide | Page datelines and saved captures | Matched |
| October 12 help update, October 16 review | Source frontmatter and run date | Matched |
| Improve with AI, named Catalog skills, History and rerun behavior | create-a-video.md, skills.md, history.md | Matched; review notes are an editorial instruction, not an invented app feature |
| Shape controls | Engine-dependent options in help | No unsupported Kling-specific aspect ratio claimed |
| Hero 3:2, maximum width and compression; six FAQs | Editorial output spec and actual structure | Production metadata, not product claims |

Check 2 re-fetched all six external URLs on October 16. Each returned the
expected title and content: 3.0 guide, 2.6 guide, camera guide, prompt guide,
2.5 Turbo corporate release and interim-results release. Local help sources
were re-read in the same pass. The public help URL is a citation to the
repository-owned source, not a new claim about the deployed app.

Unused research claims (rollout timing, maximum storyboard shots, reference
counts, newer releases, render-time estimates and numeric prompt limits) do
not enter the draft. The article contains no frame-rate number, benchmark,
measured product consistency, rate amount, or China distribution-platform
specification. No range/conflict disclaimer is needed for this engine guide.

Capture completion: four maker guide pages returned HTTP 200 in headless Chromium. Dated PNG screenshots and fresh text captures are listed in capture-receipts.json. Text captures replace long dashes with spaced hyphens, as required. The final draft contains 2,670 body words including tables and 1,985 prose words; 15,928 body characters.
