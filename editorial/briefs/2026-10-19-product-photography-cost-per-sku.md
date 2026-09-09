---
brief_id: 12
publish_date: 2026-10-19
week: 06
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 12: Product photography cost per SKU, from 50 SKUs to 5,000

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Product photography cost per SKU, from 50 SKUs to 5,000 |
| Slug | `/resources/insights/product-photography-cost-per-sku/` |
| Output file | `output/product-photography-cost-per-sku.md` |
| Research file | `research/product-photography-cost-per-sku.md` |
| Primary query | `how much does ecommerce product photography cost per SKU` |
| Secondary queries | `product photography cost per sku`, `ecommerce photography pricing volume`, `bulk product photography cost` |
| SERP verdict | WEAK at volume. Head term crowded with single-photographer day-rate framing |
| Body length | 2,800 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

Own the volume tier nobody covers. A real per-SKU cost curve with the breakpoints where studio capture plus generated extension beats pure photography. Day-rate framing falls apart above about 200 SKUs and nobody says so.

## The research gate, before any drafting

No body copy until `research/product-photography-cost-per-sku.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how much does ecommerce product photography cost per SKU` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/product-photography-cost-per-sku/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Per-SKU cost curve, absolute figures, method and sample stated for each tier
- Retouch per-image floor, category range with a collection date
- The 70/30 mix is hubStudio delivery data: state the method and the period on the page

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The curve as a table at 50, 200, 500, 2,000 and 5,000 SKUs
- Fixed against variable cost split
- What a day rate hides at volume: styling, sample logistics, reshoots, retouch queue
- The 70/30 generated-to-shot mix and where that ratio moves
- The published per-image retouch floor in the market, quoted as a category range, with the point that retouch is not production

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio per-SKU rate. Send that to the calculator.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Cost curve table: 50, 200, 500, 2,000, 5,000 SKUs
- Table: fixed against variable, by cost line
- Chart: cost per SKU against volume, showing the breakpoint
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Decision table, cost-band section, FAQ block. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Ecommerce design service: `/services/design/ecommerce`
- Retailers solutions page: `/solutions/retailers`
- Quotation calculator: `/pricing/calculator`

## CTA

Final section only. CTA label: **Get a market range for your catalog**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Product Photography Cost per SKU (32 chars) |
| Meta description | 152 chars | A real per-SKU cost curve from 50 to 5,000 SKUs, what a day rate hides at volume, and where studio capture plus generation beats pure photography. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does product photography cost per SKU?
2. Does cost per SKU fall at volume?
3. What does a photography day rate not cover?
4. When is generation cheaper than shooting?
5. How much does ecommerce retouching cost per image?

## Definition of done

- [ ] `research/product-photography-cost-per-sku.md` written before drafting, every claim marked
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
- [ ] File saved as `output/product-photography-cost-per-sku.md`
