---
brief_id: 123
publish_date: 2026-12-14
week: 10
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 123: Measuring whether a visual works: the metrics that matter

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Insight (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Measuring whether a visual works: the metrics that matter |
| Slug | `/resources/insights/measure-creative-performance/` |
| Publishes as | insight |
| Output file | `output/measure-creative-performance.md` |
| Research file | `research/measure-creative-performance.md` |
| Hero image | `public/Images/insight-measure-creative-performance.webp`, referenced as `/Images/insight-measure-creative-performance.webp` |
| Primary query | `how to measure creative performance` |
| Secondary queries | `creative performance metrics`, `how to measure ad creative effectiveness`, `hook rate and hold rate`, `creative testing metrics`, `how to test which image performs better` |
| SERP verdict | Ad-analytics vendors and agency blogs rank with home-made metrics (hook rate, thumb-stop ratio) and benchmark tables without a method; none maps each objective to the metric the platform itself defines, says which numbers judge the creative and which judge the targeting, or explains how to run a test the platform will split fairly. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Judge a visual on the metric that matches its job, read from the platform's own definition, in a test that changes one thing. Attention (video plays, view rate), response (click-through rate), outcome (conversion rate, cost per result) and memory (brand lift) answer different questions, and most dashboards mix them. One table maps objective to metric to the page that defines it; then a test protocol: one variable, enough volume, the platform's own split test, the decision rule written before the result. When to refresh a visual that has worn out is the creative fatigue piece; this one is how to tell whether it worked.

## The research gate, before any drafting

No body copy until `research/measure-creative-performance.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how to measure creative performance` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/measure-creative-performance/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Each metric definition from the platform's own help page, dated
- Any typical range only where the platform publishes it itself, such as YouTube's own statement on typical impressions click-through rates in YouTube Help, dated
- Any figure on how much of an ad's result comes from the creative only from a study with sample and method; if a party that sells advertising published it, label it a market claim

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An answer table in the first screen: objective, the metric, what it says about the visual, what it cannot say, the platform page that defines it
- Platform definitions from their own help pages: Meta (3-second video plays, ThruPlays, link click-through rate, cost per result), YouTube Analytics (impressions, impressions click-through rate, average view duration), LinkedIn Campaign Manager (video views, click-through rate), Google Ads (view rate, conversion rate)
- The home-made ratios (hook rate, hold rate): how each is computed from platform metrics, and why they do not compare across platforms
- Built-in split tests from the platforms' own pages: Meta A/B tests, YouTube's A/B test of titles and thumbnails, Google Ads experiments; what each holds constant
- Why the creative and the audience get confused: a visual tested on different audiences, budgets or dates measures the delivery, not the picture
- Organic posts: the reach, engagement and click figures each network shows for a post, and why they are a weak test of a visual
- Making variants to test: one change per variant (the background, the first frame, the words in the picture), kept together so the files and the results match; in hubStudio, a campaign gathers the variants and History keeps each one with its prompt and engine
- A short section on brand lift and incrementality studies: what the platforms offer and when a budget justifies one

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name an ad-analytics vendor or an agency
- Publish a benchmark click-through or conversion rate without a source, a date, a sample and a method
- Restate the fatigue signals covered on the creative fatigue page beyond a pointer
- Claim hubStudio reads ad results or connects to an ad account
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: objective, metric, what it says, what it cannot say, source page
- Test protocol checklist: one variable, volume, duration, decision rule written first
- Variant table: what changes per variant and what stays
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-measure-creative-performance.webp`.
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

- creative fatigue: `/resources/insights/ad-creative-fatigue-refresh`
- data-driven AIGC: `/resources/insights/data-driven-aigc`
- how to make a YouTube thumbnail people click: `/resources/how-to/youtube-thumbnail-that-gets-clicks`
- Campaigns in hubStudio: `/app/campaigns`
- ad creative service: `/services/design/ad-creative`
- creative strategy service: `/services/design/creative-strategy`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Measuring Creative Performance: Metrics That Matter (51 chars) |
| Meta description | 152 chars | Judge a visual on the metric that matches its job, read from each platform's own definition, in a test that changes one thing. Objective by objective. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do you measure creative performance?
2. What is a good click-through rate for an ad?
3. What is hook rate and how is it calculated?
4. How do I A/B test ad images?
5. How long should a creative test run?
6. Which metrics show whether a video ad works?

## Notes

Platforms' own help pages only; no benchmark without a method. Distinct from brief 102 (when to refresh): this piece is how to judge a visual.

## Definition of done

- [ ] `research/measure-creative-performance.md` written before drafting, every claim marked
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
- [ ] File saved as `output/measure-creative-performance.md` with `template: insight`
