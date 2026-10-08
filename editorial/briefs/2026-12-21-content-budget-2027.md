---
brief_id: 130
publish_date: 2026-12-21
week: 11
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 130: Planning a 2027 content budget: in-house, app or studio

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Insight (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Planning a 2027 content budget: in-house, app or studio |
| Slug | `/resources/insights/content-budget-2027/` |
| Publishes as | insight |
| Output file | `output/content-budget-2027.md` |
| Research file | `research/content-budget-2027.md` |
| Hero image | `public/Images/insight-content-budget-2027.webp`, referenced as `/Images/insight-content-budget-2027.webp` |
| Primary query | `content production budget 2027` |
| Secondary queries | `how to budget for content production`, `marketing content budget template`, `creative production budget breakdown`, `AI content budget planning`, `in-house vs outsourced content cost` |
| SERP verdict | Budget templates from software vendors and percent-of-revenue rules from marketing blogs rank; none starts from the number of assets the year needs, splits it by the way each asset is best made, or shows what changes when part of the volume moves to an app paid per run. |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Build the 2027 budget from the asset count, not from last year's line. Count what the calendar needs by type and channel, then give each type to the way of working that makes it best: the in-house team for what needs daily context, an app paid per run for volume and variants, the studio for launches and hero work. Price each block from official wage statistics and dated category ranges, never from a single quote, and keep a reserve for what the year adds. The comparison of who makes product photos is its own piece; this one is the annual plan.

## The research gate, before any drafting

No body copy until `research/content-budget-2027.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `content production budget 2027` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/content-budget-2027/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- In-house wages: official statistics, such as the US Bureau of Labor Statistics occupational wage tables, dated; other markets from their national statistics offices
- Studio and agency ranges: category rate cards logged in the ledger, reused with their collection dates
- Marketing budget shares only from a survey with sample and method; if a party that sells marketing services published it, label it a market claim

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table in the first screen: asset type against in-house, app, studio, with the reason for each
- The method in steps: count the year (launches, seasonal moments, always-on social, marketplace refreshes), group by asset type, assign a way of working, price each block, add a reserve, set review points
- A budget template table the reader can copy: block, asset count, way of working, cost basis (salary, per run, per asset or project), source of the figure
- Cost bases from published sources only: official wage statistics for in-house roles; category rate cards with collection dates for studios and agencies, no firm named; for an app paid per run, the structure only (a prepaid balance, the price shown before each run, no seats, no subscription), never a hubStudio amount
- What moves from 2026 to 2027: the share of variants and resizes an app can take, review and approval time, file storage, the people the in-house team still needs
- Mixed models as one line in the plan: Studio + app (the studio works inside the app, the team approves in Validation)
- Pointers to the cost pages rather than restating them: the real cost of brand content, what a finished asset costs, in-house or outsourced, a week of social content, and the freelancer, agency or app comparison
- Calendar anchors for 2027 taken from the holiday calendar page and each platform's own published dates

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name an agency, a subscription service or a software vendor
- Publish a hubStudio rate, monthly figure or per-item price
- Use a percent-of-revenue rule without a source, a date and a method
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset type, in-house, app, studio
- Budget template table, copyable
- Review calendar: when to re-read the plan during 2027
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-content-budget-2027.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Decision or answer table in the first screen, FAQ block. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- real cost of brand content 2026: `/resources/insights/real-cost-of-brand-content-2026`
- what a finished brand asset costs: `/resources/insights/what-a-finished-brand-asset-costs`
- in-house studio or outsourced production: `/resources/insights/in-house-studio-vs-outsourced-production`
- what a week of social content costs: `/resources/insights/cost-of-social-content-week`
- a freelancer, an agency or an app for product photos: `/resources/insights/freelancer-agency-or-app-product-photos`
- holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`
- Studio + app: `/studio/with-the-app`
- pricing: `/pricing`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | 2027 Content Budget: In-House, App or Studio (44 chars) |
| Meta description | 152 chars | Build a 2027 content budget from the asset count: give each asset type to in-house, an app or a studio, price it from published ranges, keep a reserve. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much should a brand budget for content production in 2027?
2. How do I build a content production budget?
3. Is in-house content production cheaper than a studio?
4. How do AI tools change a content budget?
5. What should a creative production budget include?
6. How often should a content budget be reviewed?

## Notes

Market figures only, each with a method; no hubStudio amount. Distinct from brief 114 (who makes product photos) and brief 71 (one week priced): this is the annual plan.

## Definition of done

- [ ] `research/content-budget-2027.md` written before drafting, every claim marked
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
- [ ] File saved as `output/content-budget-2027.md` with `template: insight`
