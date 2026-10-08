---
brief_id: 97
publish_date: 2026-11-16
week: 06
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 97: Generated photos or 3D renders for product content

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
| Working H1 | Generated photos or 3D renders for product content |
| Slug | `/resources/insights/generated-photos-vs-3d-renders/` |
| Publishes as | insight, category Buying models |
| Output file | `output/generated-photos-vs-3d-renders.md` |
| Research file | `research/generated-photos-vs-3d-renders.md` |
| Hero image | `public/Images/insight-generated-photos-vs-3d-renders.webp`, referenced as `/Images/insight-generated-photos-vs-3d-renders.webp` |
| Primary query | `AI product photos vs 3D rendering` |
| Secondary queries | `3D rendering vs product photography`, `CGI vs AI product images`, `when to use 3D product renders`, `AI images or 3D models for ecommerce` |
| SERP verdict | Tool vendors and forum threads rank, one repeating an uncited 20 to 40 percent return-reduction figure for 3D; none compares on what decides it: whether the product exists yet, how exact the geometry must be, how many variants, reuse over years, and the cost curve. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

A 3D model is an asset you keep; a generated photo is an output you make. Choose 3D when geometry must be exact, the product does not exist yet, or variants run into the hundreds; choose generation when scene, season and mood change faster than the product. Most launches use both: a 3D render as the source picture for generation.

## The research gate, before any drafting

No body copy until `research/generated-photos-vs-3d-renders.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI product photos vs 3D rendering` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/generated-photos-vs-3d-renders/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- 3D modeling cost ranges by category, from published rate cards with a date, attributed to the category
- Any return-reduction figure for 3D or AR only from a study with sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: criterion (product exists, geometry exactness, number of variants, interactive viewer, scene variety, timeline) against 3D, generated, both
- Cost curves by category: 3D modeling up front then cheap renders; generation paid per run; a photo shoot paid per day; dated category figures only
- The hybrid: a 3D render or packshot as the source picture for an edit in the Image studio (up to four source pictures, engine dependent)
- Case studies, only as written: iFlytek Anypin (live shooting, CGI and AIGC in one hybrid build) and 1834 Gin (AIGC and CGI, from zero assets to omnichannel)
- Pointers to the promptable 3D piece and to shoot it or generate it

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a 3D software vendor or rendering service
- Repeat the 20 to 40 percent return figure unless a primary study with a method is found
- Claim 3D modeling or a 3D viewer in the app
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Cost curve described for a chart
- Hybrid workflow diagram described in the ASSET BRIEF
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-generated-photos-vs-3d-renders.webp`.
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

- promptable 3D content operations: `/resources/insights/promptable-3d-content-operations`
- shoot it or generate it: `/resources/insights/shoot-it-or-generate-it`
- iFlytek case study: `/work/iflytek-anypin`
- 1834 Gin case study: `/work/1834-gin`
- concept creation service: `/services/design/concept-creation`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Generated Photos or 3D Renders for Product Content (50 chars) |
| Meta description | 152 chars | A 3D model is an asset you keep, a generated photo is an output you make. When each wins on geometry, variants, timeline and cost, and the hybrid. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Is 3D rendering better than AI product photos?
2. When should I use 3D renders for products?
3. Can AI generate product images before the product exists?
4. Is 3D rendering more expensive than AI images?
5. Can I use a 3D render as a source for AI images?
6. Do 3D product images reduce returns?

## Notes

Category Buying models. Compares ways of working, never a named tool.

## Definition of done

- [ ] `research/generated-photos-vs-3d-renders.md` written before drafting, every claim marked
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
- [ ] File saved as `output/generated-photos-vs-3d-renders.md` with `template: insight`
