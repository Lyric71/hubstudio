# Verified sources ledger

Every figure that reaches a page passes through here first. Read this before
researching anything. If a figure is logged, dated within 12 months and
carries two passing checks, reuse the exact citation rather than researching
it again. The ledger is what stops the same number being researched
forty-eight times and cited three different ways.

Seeded from Part 7 of `public/content/hubstudio-search-spec.md` on
2026-09-09. **Every seeded row still needs its two check dates before it can
be cited.** A seeded row with empty check columns is a research lead, not a
publishable figure.

## How to read a row

| Column | Meaning |
|---|---|
| Confidence | primary, triangulated, single-source, or market claim |
| Check 1 | fetched the URL, confirmed figure, unit, period and date on the page |
| Check 2 | re-fetched before the draft shipped, still says the same thing |
| Attribution | the exact wording that goes on the page. Never names a company for a market figure |

## Category market ranges

Quotable as bands with the collection date. Never attributed to a firm.

| Figure | Attribution to use | Source type | Collected | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Managed design subscription monthly floors, roughly $6,000 to $15,000, dedicated tiers from roughly $30,000 | "published subscription rate cards in this category, September 2026" | Published pricing pages, collected across the category | 2026-09 | triangulated | | | 11, 21 |
| Self-serve AI video tool tiers, roughly $39 to $99 a month | "published self-serve tiers in this category, September 2026" | Published pricing pages | 2026-09 | triangulated | | | 14 |
| Ecommerce retouch per-image floor around $1 | "the published per-image retouch floor in this category, September 2026" | Published pricing pages | 2026-09 | single-source | | | 11, 12 |
| AI-generated ad output at $1 to $5 per ad | "a circulating market claim, September 2026" then unpack what it excludes | Circulating claim, no method published | 2026-09 | market claim | | | 14 |
| Offshore creative production savings around 40 percent | "a figure circulating in this category, published as a percentage with no absolute figures and no sample size" | Circulating claim | 2026-09 | market claim | | | 20 |

## Industry and regulatory

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Fewer than half of respondents required in-house bidding disclosure; over 60 percent did not require production rebates returned | ANA production transparency study, 2017 | ana.net/content/show/id/pr-2017-production-transparency | 2017 | primary | | | 17 |
| 82 percent of members run an in-house agency, up from 78 percent in 2018 | ANA | ANA in-house agency research | | primary | | | 15 |
| CAC Measures for Labeling of AI-Generated Synthetic Content, issued 14 March 2025 by CAC, MIIT, MPS and NRTA, effective 1 September 2025 | the issuing bodies, by name of the instrument | chinalawtranslate.com/en/ai-labeling/ | 2025-03-14 | primary | | | 23, 24, 26 |
| Mandatory national standard GB 45438-2025 in force 1 September 2025 | the standard, by number | loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1 | 2025-03 | triangulated | | | 23, 26 |
| February 2026 enforcement figures | Xinhua, February 2026 | english.news.cn/20260210/2f7003ab7953408ca2da3559a14bb22e/c.html | 2026-02-10 | primary | | | 23 |
| 137,210 domains studied, 97 percent of llms.txt files received zero requests | Ahrefs, May 2026 | ahrefs.com/blog/llmstxt-study/ | 2026-05 | primary | | | infrastructure |
| No citation lift from adding JSON-LD across 1,885 pages | Ahrefs, difference-in-differences study | ahrefs.com/blog/schema-ai-citations/ | 2026 | primary | | | infrastructure |
| Brand mentions correlate with AI visibility at 0.664, backlinks at 0.218 | Zyppy meta-analysis of 54 experiments, 7 May 2026 | ppc.land/23-factors-that-actually-get-your-content-cited-by-ai-search-engines/ | 2026-05-07 | triangulated | | | off-site |
| 38 percent of Google AI Overview citations come from top-10 pages, down from 76 percent in mid-2025 | Ahrefs | ahrefs.com/blog/ai-overview-citations-top-10 | 2026 | primary | | | infrastructure |
| 51 percent of 1,076 B2B buyers start research with an AI chatbot more often than Google | G2, March 2026 | learn.g2.com/g2-2026-ai-search-insight-report | 2026-03 | primary | | | infrastructure |

## hubStudio delivery figures

Published on the site already. Any of these on a page must carry the method:
what is counted, over what sample, across what period. A figure without its
method does not go on the page.

| Figure | Method still needed | Used in |
|---|---|---|
| Internal approval on AI assets moved from 22 percent to 78 percent | What counts as an approval, who approves, sample size, period | 29, 47 |
| 70/30 generated-to-shot mix on ecommerce | Sample of engagements, period | 12, 27 |
| 20/80 shoot-to-generate on variants | Sample of engagements, period | 27 |
| Custom model training 3 to 6 weeks | Observed range across how many engagements | 29 |
| Output scaled 7x | Baseline, period, what is counted as output | proof pages |
| 90-day file retention | Policy, not a legal requirement. State it as policy | 24, 28 |
| 48-hour binding proposal, 3 revision rounds | Policy | 41 |
| 35+ markets, 47 languages with lip sync | What counts as a market served | 43 |

Case study figures: HiSense live on a self-serve platform in 8 weeks,
thousands of assets per week. Premium SUV, 70 percent budget cut, 3 weeks
against 6 months, 15 markets, 20+ environments, zero vehicles shipped.
Mexicash, 5 platforms in 5 days. 1834 Gin, 46-second film, 3 weeks from zero
assets. iFlytek AnyPin, 22 cuts, 3 techniques. L'infuseur, 2 weeks, 3
channels. Any client figure not already public needs sign-off before it is
used.

## Platform specs already on the site

`/services/design/ecommerce` is the only page on the site carrying hard
platform numbers: Amazon 2,000px RGB 255 mains, Tmall 800x800 mains,
750x1,000 verticals, white slot under 300KB, titles inside 200 characters.
These need re-verification against the backend before they are repeated on a
spec page, because they are the numbers the spec cluster is supposed to
supersede.

## Do not publish without primary confirmation

Hard blocks. Publishing any of these from a secondary source is the single
most damaging thing this system can do.

1. **Tmall file size cap and product fill ratio.** Three Chinese sources
   conflict: 500KB against 3MB, and 60 percent against 70 to 80 percent fill.
   None distinguishes Tmall Global from domestic, and none accounts for
   category variation. Publish the range and the conflict, or capture it.
2. **Allocation of AI-labeling duties** between brand, agency and tool vendor
   under the CAC Measures. Law-firm interpretation, not a regulator statement.
   Write "generally treated as", never "requires".
3. **Penalties under the CAC Measures.** Not specified as a new schedule.
   Enforcement runs through existing instruments and is still described as
   unclear. Do not publish a fine figure.

## Do-not-publish log

Everything checked that did not clear the bar, with the reason. As valuable as
the cleared list, because it stops the next writer re-researching the same
dead end.

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| | | | |
