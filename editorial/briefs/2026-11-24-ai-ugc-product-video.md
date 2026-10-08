---
brief_id: 103
publish_date: 2026-11-24
week: 07
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 103: How to make UGC-style product videos with AI

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | How-to (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to make UGC-style product videos with AI |
| Slug | `/resources/how-to/ai-ugc-product-video/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/ai-ugc-product-video.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/ai-ugc-product-video.md` |
| Research file | `research/ai-ugc-product-video.md` |
| Hero image | `public/Images/howto-ai-ugc-product-video.webp`, referenced as `/Images/howto-ai-ugc-product-video.webp` |
| Primary query | `AI UGC video` |
| Secondary queries | `AI UGC ads`, `AI generated UGC product video`, `UGC style video with AI`, `AI unboxing video`, `AI product demo video for TikTok` |
| SERP verdict | Avatar apps and single-purpose UGC generators rank with speed and cost claims and a script, pick an avatar, export workflow; none says what makes a clip read as UGC (phone framing, natural light, a hand, a first-person hook), none keeps the real product exact, and none deals with the rule that a generated person must never pass as a real customer. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

UGC style is a look and a structure, not a person: handheld phone framing, daylight, a hand with the product, a hook in the first seconds, captions. All of that can be generated. A customer's experience cannot. So the method keeps two lines: build the look from the real product photo and a written script, and never present the person on screen as a customer or a reviewer. Taught with the video studio, the TikTok Brief tab and the Video editor.

## The research gate, before any drafting

No body copy until `research/ai-ugc-product-video.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI UGC video` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-ugc-product-video/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- App behavior: create-a-video.md, create-an-image.md, tiktok.md, skills.md and assets-library.md in the help center
- FTC: the Trade Regulation Rule on the Use of Consumer Reviews and Testimonials (16 CFR Part 465) and the Endorsement Guides (16 CFR Part 255), from ftc.gov and eCFR, with dates
- TikTok's AI-generated content label and Meta's AI label rules: each platform's own help page, dated
- Speech in generated sound: each engine maker's own model documentation, never a reseller page
- No performance claim for AI UGC against creator UGC unless a study states sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What makes a clip read as UGC: framing, light, camera behavior, the hand and the product, the spoken or written hook, captions; a shot list for four formats (unboxing, first use, before and after of a routine, a quick demo)
- The script first: the TikTok module's Brief tab returns a hook, a timed script, on-screen text and a caption kept inside TikTok's rules (hook in the first 3 seconds, a script that fits the length)
- The start frame from the real product: a picture of a hand or a person with the product made in the Image studio as an edit of the product photo, then image to video (Start image, or Start and last frame) so the product on screen is the one in the photo
- Engines from the help center only: Veo 3.1 Fast (4, 6 or 8 seconds, optional sound, start and last frame or up to 3 reference pictures), Kling 3.0 (3 to 15 seconds, prompt only, optional sound), Seedance 2.5 (4 to 30 seconds, optional sound, start and last frame or up to 30 pictures, 10 clips and 2 sound files as references), Grok Imagine 1.5 (1 to 15 seconds, optional sound, start image or up to 7 pictures); clips over 15 seconds can time out after billing
- Spoken lines: rely on speech in generated sound only where the engine maker's own documentation describes it; check lip movement and the brand name on every clip, and carry the message in on-screen text and captions whatever happens
- The same person across a series: the Consistent character across images skill and one reference picture reused; the Short vertical video ad and Video camera movement vocabulary skills
- Finishing in the Video editor: TikTok Video 9:16 at 1080 x 1920 or an Instagram or Facebook Reel, captions timed word by word, what the network covers shown in red, checks that fix what they find; editing is free, the fast captions are billed at the price shown
- The honesty line, from the regulators' own pages: the FTC rule on consumer reviews and testimonials (16 CFR Part 465) and the Endorsement Guides (16 CFR Part 255) on fake or AI-generated testimonials; the platforms' AI-generated content labels (TikTok, Meta) from their own help pages
- A QA checklist: product exact against the photo, hands, text on pack, lip sync, captions inside the safe area, no testimonial claim, label applied where the platform asks

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Present a generated person as a customer, reviewer or creator, or script a testimonial of personal experience
- Claim a lip-sync, avatar or voice-cloning feature in the app
- Name an AI UGC app, avatar tool or creator marketplace
- Print a price or any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Shot list table: format, opening frame, camera, hook, length
- Engine table from the help center: engine, length, sound, what it can be fed
- Prompt blocks for a start frame and for two clips
- QA checklist
- Existing localized captures create-a-video-studio.webp and tiktok-brief.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-ai-ugc-product-video.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A step sequence, a prompt example, a checklist the reader can use today. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- consistent character in AI images and video: `/resources/how-to/consistent-character-ai-images-video`
- real creator content or AI-generated UGC: `/resources/insights/ai-ugc-vs-creator-content`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`
- Video tools in the app: `/app/video-tools`
- short video design service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make UGC-Style Product Videos with AI (44 chars) |
| Meta description | 152 chars | Make UGC-style product videos with AI: phone framing, a hand with the real product, a scripted hook, captions, and never a fake customer. Step by step. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI make UGC videos for my product?
2. Is AI-generated UGC allowed in ads?
3. Do I have to disclose AI UGC on TikTok and Instagram?
4. How do I keep my product accurate in an AI video?
5. Can an AI video have someone talking about my product?
6. How long should a UGC-style ad be?

## Notes

Help: create-a-video.md, create-an-image.md, tiktok.md (Brief tab), skills.md, assets-library.md (Video editor). Links the comparison piece 107 scheduled the same week.

## Definition of done

- [ ] `research/ai-ugc-product-video.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] No Han characters in the article: Chinese names romanized (deviation 6)
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center
- [ ] File saved as `output/ai-ugc-product-video.md` with `template: howto`
