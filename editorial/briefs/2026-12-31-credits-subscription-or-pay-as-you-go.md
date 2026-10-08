---
brief_id: 142
publish_date: 2026-12-31
week: 12
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 142: Credits, subscription or pay as you go for AI content

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
| Working H1 | Credits, subscription or pay as you go for AI content |
| Slug | `/resources/insights/credits-subscription-or-pay-as-you-go/` |
| Publishes as | insight, category Buying models |
| Output file | `output/credits-subscription-or-pay-as-you-go.md` |
| Research file | `research/credits-subscription-or-pay-as-you-go.md` |
| Hero image | `public/Images/insight-credits-subscription-or-pay-as-you-go.webp`, referenced as `/Images/insight-credits-subscription-or-pay-as-you-go.webp` |
| Primary query | `AI content tool pricing models` |
| Secondary queries | `credits vs subscription for AI tools`, `pay as you go AI image generator`, `do AI credits expire`, `prepaid balance or subscription` |
| SERP verdict | Software comparison blogs and vendor pricing pages rank, each arguing for its own model; none sets the three ways of paying side by side on what a buyer actually lives with: what a unit is worth, what expires, what a failed run costs, how a team caps spend, and what the invoice shows. |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

The three models price the same render differently in practice. A credit is a unit whose value the seller sets and can change; a subscription buys capacity whether it is used or not; pay as you go charges each run in money, at a price shown before it runs. Compare them on transparency, expiry, failed runs, team control and accounting, never on a headline figure, and say which kind of team each suits. Price levels only.

## The research gate, before any drafting

No body copy until `research/credits-subscription-or-pay-as-you-go.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI content tool pricing models` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/credits-subscription-or-pay-as-you-go/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Market structure: published pricing pages of AI image and video apps collected on one dated day, counted by payment model (credits, subscription, pay as you go, mixed) and by whether unused value expires; category only, no vendor named
- Renewal and cancellation law: the statute or the regulator's page with its current status (for example a state automatic renewal law, or the FTC's negative option rule and its standing in court), dated
- hubStudio facts: hubstudio-positioning.md (Money) and balance-and-payments.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table in the first screen: criterion (unit of account, price visible before a run, unused value, expiry and rollover, failed runs, team caps, invoices and accounting, predictability of the monthly bill) against credits, subscription, pay as you go
- Which team each suits: steady high volume, irregular campaigns, an agency billing its clients
- What to read in any terms: how a credit converts to a run and whether that can change, expiry, rollover, renewal and cancellation, refunds for failed runs
- Renewal and cancellation rules only from the legislature's or regulator's own page, with their current status stated
- hubStudio's model as one example, from the positioning file only: a prepaid balance held in real currency, no subscription, no seat fees, the price shown before every run (Gemini Omni Flash is priced after the render), a failed run not charged (one exception: a clip over 15 seconds that times out after the engine billed it), a balance that does not expire, optional automatic top-up, a daily spending limit per person, an invoice per top-up, a Usage log
- Relative cost shown only as price levels from $ to $$$$, as the Model benchmarks page shows them

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any app, platform or vendor, or describe one so it can be recognized
- Print any amount, rate, credit conversion or hubStudio figure
- Call hubStudio's balance credits
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Terms checklist: the clause, where to find it, what to ask
- Price-level legend from $ to $$$$, no figures
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-credits-subscription-or-pay-as-you-go.webp`.
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

- model benchmarks with price levels: `/resources/insights/ai-model-benchmarks`
- what a week of social content costs: `/resources/insights/cost-of-social-content-week`
- one app or a stack of tools: `/resources/insights/one-app-vs-tool-stack-social-content`
- subscription or managed production: `/resources/insights/subscription-or-managed-production`
- pricing: `/pricing`
- balance and payments help: `/help/balance-and-payments`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Credits, Subscription or Pay as You Go for AI (45 chars) |
| Meta description | 152 chars | Three ways to pay for AI content compared on what you live with: unit value, expiry, failed runs, team caps and invoices. Price levels only, no figures. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between credits and a subscription for AI tools?
2. Do AI credits expire?
3. Is pay as you go cheaper than a subscription for AI images?
4. Am I charged for a failed AI generation?
5. How can a team control spending on AI content tools?
6. Which pricing model suits an agency billing clients?

## Notes

Category Buying models. Compares ways of paying, never a named tool; no amount anywhere, price levels only. The word credits describes the market model, never hubStudio.

## Definition of done

- [ ] `research/credits-subscription-or-pay-as-you-go.md` written before drafting, every claim marked
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
- [ ] File saved as `output/credits-subscription-or-pay-as-you-go.md` with `template: insight`
