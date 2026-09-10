---
brief_id: 33
publish_date: 2026-11-09
week: 09
slot: A
slot_job: the money page
cluster: Research
content_type: Money page
status: not_started
---

# BRIEF 33: The real cost of brand content in 2026, from published figures

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
| Working H1 | The real cost of brand content in 2026, from published figures |
| Slug | `/resources/insights/real-cost-of-brand-content-2026/` |
| Output file | `output/real-cost-of-brand-content-2026.md` |
| Research file | `research/real-cost-of-brand-content-2026.md` |
| Primary query | `brand content production cost 2026` |
| Secondary queries | `content production cost benchmark`, `how much does brand content cost`, `creative production cost per asset 2026` |
| SERP verdict | To be mapped at R2. Part 1.2 found the position open to anyone publishing absolute numbers with a stated method and no gate |
| Body length | 3,000 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

One ungated reference for what brand content costs in 2026, by asset type, in absolute figures, with the source type, date and method behind every band. hubStudio has no survey data and cannot publish its own rates, so the page is a compilation of published figures already cleared across the cost cluster (briefs 11 to 16) and the ledger, plus any new band found with a method. It says plainly that it is a compilation, states its inclusion rule, and publishes conflicts instead of averaging them.

## The research gate, before any drafting

No body copy until `research/real-cost-of-brand-content-2026.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `brand content production cost 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/real-cost-of-brand-content-2026/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Every band reused verbatim from the ledger or the cost cluster research files, with its original attribution and confidence label
- A new band only with a published figure and a stated method
- No currency conversion without the rate and its date; no averaging of conflicting bands

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A master table by asset type: product image, lifestyle or model image, retouch, detail page, short video, generated video, translation and transcreation, subscription access, in-house labor
- The method: inclusion rule, collection dates, what was excluded and why
- The four tests a cost benchmark in this category should pass (sample stated, absolute figures, ungated, independent author) and which this page meets and misses
- A decision table: which buying model fits which volume, from the published figures
- The production cost estimator, by name

## Confidence handling

Single-source bands are labeled single-source in the table itself.

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Call the page a survey, a study or original research.
- Name any company whose rate card is counted.
- Print the circulating dollar-per-ad or 40 percent savings claims except as labeled market claims.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Master cost table by asset type
- Decision table: buying model by volume
- Method box: inclusion rule and dates
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

- Production cost estimator: `/resources/production-cost`
- Pricing page: `/pricing`
- What a finished brand asset costs article: `/resources/insights/what-a-finished-brand-asset-costs`
- Product photography cost per SKU article: `/resources/insights/product-photography-cost-per-sku`

## CTA

Final section only. CTA label: **Price your own brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | The Real Cost of Brand Content in 2026 (38 chars) |
| Meta description | 152 chars | Published cost bands for brand content in 2026, by asset type, ungated, with the source, date and method behind every figure and nothing averaged. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does brand content cost in 2026?
2. What does a product image cost to produce?
3. What does AI video really cost per usable shot?
4. Is a design subscription cheaper than a studio?
5. Why do content cost benchmarks disagree?
6. What does it cost to translate a campaign for China?

## Notes

Planning decision 2026-09-10: the search spec asks for a benchmark with a named external co-author and sample data. Neither exists, so the H1 drops "the benchmark" and the page is a labeled compilation. If a co-author and survey arrive, the page upgrades in place at the same URL.

## Definition of done

- [ ] `research/real-cost-of-brand-content-2026.md` written before drafting, every claim marked
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
- [ ] File saved as `output/real-cost-of-brand-content-2026.md`
