---
brief_id: 27
publish_date: 2026-09-18
week: 01
slot: D
slot_job: the proof page
cluster: Craft
content_type: Proof page
status: not_started
---

# BRIEF 27: Shoot it or generate it: the decision rule, asset by asset

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Shoot it or generate it: the decision rule, asset by asset |
| Slug | `/resources/insights/shoot-it-or-generate-it/` |
| Output file | `output/shoot-it-or-generate-it.md` |
| Research file | `research/shoot-it-or-generate-it.md` |
| Primary query | `when to shoot vs generate product images` |
| Secondary queries | `ai generated vs photographed product images`, `when to use ai product photography`, `shoot or generate decision` |
| SERP verdict | VACANT |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

The rule an actual studio uses, published. Lead with the four conditions that force capture, not with a ratio: the conditions are what the reader can act on, and three of the four are written into marketplace rules and statutes rather than into model capability. CORRECTED AFTER RESEARCH, 2026-09-09: the site publishes "most catalogs run about 70 percent generated, 30 percent shot" on the ecommerce design service page, and separately frames 20/80 on the who-we-are page as a judgment about "the work". The 20/80 is NOT scoped to color variants and the AI image production page publishes no ratio at all. The two published ratios count different things, so do not present them as one metric at two scopes.

## The research gate, before any drafting

No body copy until `research/shoot-it-or-generate-it.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `when to shoot vs generate product images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/shoot-it-or-generate-it/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- The 70/30 generated-to-shot mix on ecommerce and the 20/80 shoot-to-generate mix on variants are hubStudio delivery figures: state the method, the sample and the period on the page

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table by asset type
- The four conditions that force capture: texture and material truth, regulated categories, talent, physical scale
- The conditions that favour generation
- What goes wrong in each direction
- The cost consequence of getting it wrong

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset type, shoot, generate, or hybrid, and why
- Table: the four conditions that force capture, with an example each
- Table: failure mode, what it looks like, what it costs
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. One number from hubStudio's delivery record with its method stated. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Video production service: `/services/design/video-production`
- AI image production: `/solutions/ai-production/image`
- Ecommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Shoot It or Generate It: The Decision Rule (42 chars) |
| Meta description | 152 chars | The rule a working studio uses, asset by asset: the four conditions that force capture, when generation wins, and what getting it wrong costs. (142 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. When should a product be photographed instead of generated?
2. What can AI not generate convincingly yet?
3. What is a good shot-to-generated ratio?
4. Which categories require real photography?
5. What goes wrong when you generate something you should have shot?

## Definition of done

- [ ] `research/shoot-it-or-generate-it.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] Chinese terms as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] File saved as `output/shoot-it-or-generate-it.md`
