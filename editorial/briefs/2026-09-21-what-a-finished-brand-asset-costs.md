---
brief_id: 11
publish_date: 2026-09-21
week: 02
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 11: What a finished brand asset actually costs in 2026

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
| Working H1 | What a finished brand asset actually costs in 2026 |
| Slug | `/resources/insights/what-a-finished-brand-asset-costs/` |
| Output file | `output/what-a-finished-brand-asset-costs.md` |
| Research file | `research/what-a-finished-brand-asset-costs.md` |
| Primary query | `cost per creative asset benchmark` |
| Secondary queries | `cost per asset creative production`, `brand content cost per asset`, `creative production cost benchmark 2026`, `how much does one ad creative cost` |
| SERP verdict | VACANT. No production company, trade body or consultancy publishes a usable answer |
| Body length | 3,200 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The first page that answers the question with absolute figures, a stated method, no email gate, and a clear definition of what one unit is. The absence is structural: agencies will not disclose unit cost because it exposes margin, software vendors publish only figures that flatter their pricing, and consultancies gate. The position is open to anyone willing to publish absolute numbers with a stated method.

## The research gate, before any drafting

No body copy until `research/what-a-finished-brand-asset-costs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `cost per creative asset benchmark` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/what-a-finished-brand-asset-costs/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Managed design subscription monthly floors, category range, collection date stated
- Ecommerce retouch per-image floor, category range, collection date stated
- Every band carries its own method sentence: what is counted, what is excluded, over what sample

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A definition of "one finished asset" before any number appears
- Cost bands by asset type: static PDP image, lifestyle image, 15-second social cut, 30-second brand film, campaign adaptation
- What is inside each band: direction, capture, retouch, versioning, clearance, project management
- The four buying models compared as models, not firms: freelance, agency retainer, subscription, offshore studio, with published category price ranges and the date they were collected
- Why the existing benchmarks fail as a category: savings percentages instead of absolutes, no sample size, vendor-published, or measuring volume rather than cost, with no company named
- A methodology box

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate. Send that to the calculator.
- Name the company behind any benchmark being criticised. The critique works on the category pattern.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table in the first screen: asset type, cost band, what is inside it
- Table: the four buying models, what you buy, published category range, date collected
- Methodology box: definition of a unit, what is counted, sample, collection dates
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

- Pricing page: `/pricing`
- Quotation calculator: `/pricing/calculator`
- AI excellence page: `/the-studio/ai-excellence`

## CTA

Final section only. CTA label: **Get a market range for your volume**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | What a Brand Asset Costs in 2026 (32 chars) |
| Meta description | 152 chars | Absolute cost bands per finished brand asset, with the method stated and no email gate: images, social cuts, brand films and campaign adaptations. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does one creative asset cost?
2. What counts as one finished asset?
3. How much does a 30-second brand film cost?
4. Why do agencies not publish cost per asset?
5. Is a subscription cheaper than a production studio?
6. What does a cost per asset figure usually leave out?

## Notes

The flagship of the cost cluster. Widest research pass in the plan. Start it in week 1.

## Definition of done

- [ ] `research/what-a-finished-brand-asset-costs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/what-a-finished-brand-asset-costs.md`
