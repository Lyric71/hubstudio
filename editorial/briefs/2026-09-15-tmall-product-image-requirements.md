---
brief_id: 01
publish_date: 2026-09-15
week: 01
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: blocked
---

# BRIEF 01: Tmall product image requirements: the complete 2026 spec sheet

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
| Working H1 | Tmall product image requirements: the complete 2026 spec sheet |
| Slug | `/resources/insights/tmall-product-image-requirements/` |
| Output file | `output/tmall-product-image-requirements.md` |
| Research file | `research/tmall-product-image-requirements.md` |
| Primary query | `tmall product image requirements` |
| Secondary queries | `tmall image size`, `tmall main image dimensions`, `tmall global image rules`, `taobao product photo requirements` |
| SERP verdict | VACANT. Top result is a coding tutorial. Only one result mentions Tmall in the body |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

The only English page that gives the real numbers, cites the Taobao Rule Center (淘宝规则中心), and separates Tmall domestic from Tmall Global. Every ranking page today is either about a different platform or about code.

## The research gate, before any drafting

No body copy until `research/tmall-product-image-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `tmall product image requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/tmall-product-image-requirements/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Main image dimensions and count, from the seller backend or the Taobao Rule Center only
- File weight cap, primary capture only, otherwise publish the 500KB against 3MB conflict as a range
- Product fill ratio, primary capture only, otherwise publish the 60 percent against 70 to 80 percent conflict as a range

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Main image count and dimensions
- The five slots and what each one is for
- Detail page width, mobile against PC
- Formats and file weight
- Prohibited elements: promotional overlays, superlative claims, watermarks
- The three most common rejection reasons, with a screenshot of a real rejection
- A category-variation note
- A Tmall Global delta table

## Confidence handling

State which figures are platform caps and which are performance recommendations. Where sources conflict and backend capture is unavailable, publish the range and say why they conflict.

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish the file size cap or the product fill ratio from a secondary source. Both are on the do-not-publish list in Part 7 of the search spec until a backend capture confirms them.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: slot, dimensions, format, weight, what it is for
- Delta table: Tmall domestic against Tmall Global
- Annotated screenshot of the upload screen, seller identifiers blurred
- Screenshot of a real rejection notice, account details blurred
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Spec table, annotated screenshot, rejection reasons, visible reviewed date. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Tmall platform page: `/solutions/platforms/tmall`
- Ecommerce design service: `/services/design/ecommerce`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Tmall Product Image Requirements 2026 (37 chars) |
| Meta description | 152 chars | The real Tmall image specs: main image dimensions, the five slots, detail page width, file weight, prohibited elements and where Tmall Global differs. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a Tmall main image be?
2. How many images can a Tmall listing have?
3. Why did Tmall reject my product image?
4. Do Tmall Global listings use different image rules?
5. Can I reuse my Amazon product images on Tmall?

## Notes

BLOCKED until the Qianniu (千牛) seller-backend capture session happens. See RUNBOOK, the blocking task. Do not draft a spec table from secondary sources to fill the slot.

## Definition of done

- [ ] `research/tmall-product-image-requirements.md` written before drafting, every claim marked
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
- [ ] File saved as `output/tmall-product-image-requirements.md`
