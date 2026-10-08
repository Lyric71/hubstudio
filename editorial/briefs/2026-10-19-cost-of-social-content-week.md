---
brief_id: 71
publish_date: 2026-10-19
week: 02
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 71: What a week of social content really costs: in-house, freelance, agency or an app

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
| Working H1 | What a week of social content really costs: in-house, freelance, agency or an app |
| Slug | `/resources/insights/cost-of-social-content-week/` |
| Publishes as | insight |
| Output file | `output/cost-of-social-content-week.md` |
| Research file | `research/cost-of-social-content-week.md` |
| Hero image | `public/Images/insight-cost-of-social-content-week.webp`, referenced as `/Images/insight-cost-of-social-content-week.webp` |
| Primary query | `cost of social media content creation` |
| Secondary queries | `how much does social media content cost per month`, `social media manager salary vs agency cost`, `freelance social media content rates`, `in-house vs agency social media cost` |
| SERP verdict | VENDOR-PRICED. The ranking pages are scheduler and agency blogs quoting wide, unsourced ranges (hourly rates, monthly retainers) built to make their own plan look cheap; none uses official wage statistics, none counts the hidden costs (approval rounds, rework, tools), and none prices one defined week of output. |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Price one defined week (say, ten posts across four networks, with pictures, two short videos and client approval) under four ways of working, using official wage statistics for in-house, published rate surveys for freelance and category-level retainer ranges for agencies. Then show what an app-based week costs in structure (a prepaid balance charged per run, the price shown before each run, nothing for editing, approval or publishing to four networks) without printing a hubStudio figure.

## The research gate, before any drafting

No body copy until `research/cost-of-social-content-week.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `cost of social media content creation` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/cost-of-social-content-week/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- US: BLS Occupational Employment and Wage Statistics, latest May release, median and percentile wages for the relevant occupations (marketing specialists, graphic designers, public relations specialists), with the BLS Employer Costs for Employee Compensation ratio for the loaded-cost uplift
- Europe: Eurostat structure of earnings or national statistics office data (INSEE, Destatis) for a comparable occupation, dated
- Freelance hourly rates: a published rate survey with sample size and method, attributed to category and date; cut if no method
- Agency retainer ranges: category-level, collected from published price pages on a stated date, no vendor named

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The defined week as a spec at the top (posts, networks, visuals, videos, approval rounds), so every route is priced on the same output
- Answer table: route (in-house, freelance, agency retainer, app run by your team, studio) against what you pay for, fixed or variable, hidden costs, who carries the risk of rework
- In-house: loaded cost from official wage data (US Bureau of Labor Statistics occupational wages; Eurostat or national statistics office for Europe), with the employer-cost uplift method stated
- Freelance and agency: published rate surveys and category-level retainer ranges, attributed to category and date, never to a named firm
- Hidden costs every route carries: approval rounds, rework, tool seats, stock licenses, the hours of a manager reviewing
- The app route in structure only: no subscription, no seat fees, a prepaid balance in real currency, the price shown before every run, a failed run never charged; the Image editor, Validation, Campaigns and publishing to LinkedIn, Instagram, Facebook and TikTok cost nothing; each post sent to X is charged, with the price shown before you send
- When a studio makes more sense than any of the four, and the three ways to work (Use the app, Studio + app, Studio only)

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print any hubStudio amount, per-image rate or studio rate, or call the money anything but a prepaid balance in real currency
- Name any agency, freelance marketplace, scheduler or competitor, or quote a named firm's rate card
- Use a vendor blog's range as evidence; label any vendor-published range a market claim
- Mention the onboarding offer price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The defined week spec, as a short table
- Answer table: route by cost structure, five columns maximum
- Cost band table: route, low and high weekly band, source category and date, method in one line
- Hidden-cost table: cost item, which routes carry it
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-cost-of-social-content-week.webp`.
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

- The real cost of brand content in 2026: `/resources/insights/real-cost-of-brand-content-2026`
- In-house studio or outsourced production: `/resources/insights/in-house-studio-vs-outsourced-production`
- Subscription or managed production: `/resources/insights/subscription-or-managed-production`
- Pricing: `/pricing`
- Social media design service: `/services/design/social-media`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | What a Week of Social Content Really Costs (42 chars) |
| Meta description | 152 chars | One defined week of social posts priced four ways (in-house, freelance, agency, an app) from official wage data and dated rate surveys, hidden costs in. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does social media content creation cost?
2. Is it cheaper to hire a social media manager or an agency?
3. What do freelancers charge for social media content?
4. What are the hidden costs of social media content?
5. How does pay-as-you-go pricing work for AI content apps?
6. When should a brand use a studio instead of doing social content in-house?

## Notes

Budget-holder: lead with the answer table. Every $ hit is a market figure with category, date and method; zero hubStudio figures. Search the finished file for $ and check every hit.

## Definition of done

- [ ] `research/cost-of-social-content-week.md` written before drafting, every claim marked
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
- [ ] File saved as `output/cost-of-social-content-week.md` with `template: insight`
