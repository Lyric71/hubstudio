---
brief_id: 135
publish_date: 2026-12-24
week: 11
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 135: Generate from scratch or edit a source photo

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Comparison (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Generate from scratch or edit a source photo |
| Slug | `/resources/insights/generate-or-edit-source-photo/` |
| Publishes as | insight, category Buying models |
| Output file | `output/generate-or-edit-source-photo.md` |
| Research file | `research/generate-or-edit-source-photo.md` |
| Hero image | `public/Images/insight-generate-or-edit-source-photo.webp`, referenced as `/Images/insight-generate-or-edit-source-photo.webp` |
| Primary query | `AI image generation vs AI photo editing` |
| Secondary queries | `text to image vs image to image`, `AI photo editing for product images`, `when to use text to image`, `edit my product photo with AI or generate a new one` |
| SERP verdict | Glossaries and tool landing pages explain text to image and image editing as features; none treats the choice as a decision about what must stay true (the product, a person, a place), the rights carried by the source photo, the runs it takes to a usable result, and who signs off. |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

The question is not which feature is newer but what must stay true. Generate from scratch when nothing in the picture has to match a real object: concepts, backgrounds, moods, a product that does not exist yet. Edit a source photo when the product, the person or the place is real and must stay itself. Most production does both: generate the setting, then bring the real product into it with an edit.

## The research gate, before any drafting

No body copy until `research/generate-or-edit-source-photo.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI image generation vs AI photo editing` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/generate-or-edit-source-photo/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- US Copyright Office, Copyright and Artificial Intelligence Part 2: Copyrightability (January 2025), copyright.gov, the human-authorship conclusion quoted
- Any figure on runs to a usable result only from a study with sample and method; otherwise no figure
- App facts: create-an-image.md (jobs, source pictures, mask)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table in the first screen: criterion (the product must match, a person's likeness, rights in the source, text on the product, volume of variants, runs to a usable result, sign-off) against generate, edit, both
- What an edit keeps and what it can still change: label text, proportions, color, edges; the check after every edit
- Rights: an edit inherits the rights of its source photo, so the source license matters; a generated picture's copyright status from the US Copyright Office's own report
- Marketplace accuracy rules that apply either way: the picture must show the product sold (link the marketplace policies piece)
- The hybrid, described as a way of working: generate the setting, then edit with the real packshot as a source picture (up to four source pictures, engine dependent), with a mask on some engines to fix what may change
- Cost structure, never amounts: both paths are paid per run; what drives the number of runs on each

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any image app, photo editor or tool vendor
- Rank individual engines as better or worse
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Hybrid workflow diagram described in the ASSET BRIEF: generated setting, real packshot, edit, check
- Edit check table: what to inspect after an edit and the fix
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-generate-or-edit-source-photo.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A decision table and a when-to-choose section, no company named. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- stock photos or AI images: `/resources/insights/stock-photos-vs-ai-images`
- what Amazon and Google Shopping allow: `/resources/insights/marketplace-policies-ai-product-images`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- shoot it or generate it: `/resources/insights/shoot-it-or-generate-it`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- text to video or image to video: `/resources/insights/text-to-video-vs-image-to-video`
- generated photos or 3D renders: `/resources/insights/generated-photos-vs-3d-renders`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Generate From Scratch or Edit a Source Photo (44 chars) |
| Meta description | 152 chars | AI image generation or AI photo editing: decide by what must stay true. When to generate, when to edit your own photo, and how most teams do both. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between AI image generation and AI photo editing?
2. Should I generate product images or edit my product photos?
3. Does AI editing change my product?
4. Who owns an AI-edited photo?
5. Can I combine a generated background with my real product?
6. Is editing a photo cheaper than generating one?

## Notes

Category Buying models. Compares ways of working, never a named tool or engine.

## Definition of done

- [ ] `research/generate-or-edit-source-photo.md` written before drafting, every claim marked
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
- [ ] File saved as `output/generate-or-edit-source-photo.md` with `template: insight`
