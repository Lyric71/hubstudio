---
brief_id: 21
publish_date: 2026-10-22
week: 06
slot: C
slot_job: the operations page
cluster: Buying models
content_type: Money page
status: not_started
---

# BRIEF 21: Subscription or managed production: the unit you are buying

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
| Working H1 | Subscription or managed production: the unit you are buying |
| Slug | `/resources/insights/subscription-or-managed-production/` |
| Output file | `output/subscription-or-managed-production.md` |
| Research file | `research/subscription-or-managed-production.md` |
| Primary query | `design subscription vs production partner` |
| Secondary queries | `design subscription at volume`, `unlimited design subscription limits`, `managed creative production model` |
| SERP verdict | WEAK. Avoid the phrase "creative subscription vs production studio", which a January 2026 consumer product launch has polluted |
| Body length | 2,700 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

The unit of purchase. A subscription prices access to designers. Production prices delivered assets. That one distinction decides which model fits, and no comparison page starts there.

## The research gate, before any drafting

No body copy until `research/subscription-or-managed-production.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `design subscription vs production partner` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/subscription-or-managed-production/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Managed design subscription monthly floors, roughly $6,000 to $15,000, dedicated tiers from roughly $30,000, category range with a September 2026 collection date, published pricing pages only
- The mid-market gap is stated as an arithmetic consequence of the floors, shown, not asserted

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A comparison of the two models on the axis of what you are buying, not on features
- Published subscription price bands quoted as a category range with the collection date
- The queue-and-capacity problem in subscriptions at volume
- Where a subscription is genuinely right
- The mid-market gap that opened during 2026 as subscription floors rose

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a subscription provider or attribute a price to one.
- Use the phrase "creative subscription vs production studio" as a heading. The SERP for it is polluted.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: what you buy, how it is priced, what breaks at volume
- Table: published category bands, what each tier includes, collection date
- Decision table: volume, turnaround, origination need
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. A workflow, checklist or document structure the reader can use tomorrow. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Pricing page: `/pricing`
- Brands solutions page: `/solutions/brands`
- Quotation calculator: `/pricing/calculator`

## CTA

Final section only. CTA label: **Get a market range for your volume**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Subscription or Managed Production (34 chars) |
| Meta description | 152 chars | A subscription prices access to designers. Production prices delivered assets. What that distinction changes, and where each model actually fits. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between a design subscription and a production partner?
2. What am I actually buying with a design subscription?
3. Do design subscriptions work at high volume?
4. When is a subscription the right choice?
5. What do subscription price bands look like in 2026?

## Definition of done

- [ ] `research/subscription-or-managed-production.md` written before drafting, every claim marked
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
- [ ] File saved as `output/subscription-or-managed-production.md`
