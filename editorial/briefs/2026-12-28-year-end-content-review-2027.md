---
brief_id: 137
publish_date: 2026-12-28
week: 12
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 137: The year-end content review: what to keep, cut and change for 2027

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
| Working H1 | The year-end content review: what to keep, cut and change for 2027 |
| Slug | `/resources/insights/year-end-content-review-2027/` |
| Publishes as | insight |
| Output file | `output/year-end-content-review-2027.md` |
| Research file | `research/year-end-content-review-2027.md` |
| Hero image | `public/Images/insight-year-end-content-review-2027.webp`, referenced as `/Images/insight-year-end-content-review-2027.webp` |
| Primary query | `content strategy review 2027` |
| Secondary queries | `content audit template 2027`, `year-end marketing content review`, `brand content library audit`, `what to change in brand content for 2027` |
| SERP verdict | Agency and marketing-software blogs rank with generic audit checklists built on web traffic; none audits a brand's image and video library as assets, with the rights that lapse, the platform specs and marketplace rules that moved in 2026, and the AI labeling duties that now apply. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Review the library asset by asset, not channel by channel, and give each asset one of three verdicts. Keep: it performs, its rights run through 2027, it fits current specs. Cut: a talent, stock or music license lapses, it breaks a rule now in force, or it never earned its place. Change: the idea works but the file does not, because a spec, a label duty or a market moved. With a dated list of what moved in 2026 and what moves in 2027, each from its own primary page.

## The research gate, before any drafting

No body copy until `research/year-end-content-review-2027.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `content strategy review 2027` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/year-end-content-review-2027/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Google Merchant Center minimum image size and its enforcement date: Merchant Center Help, reusing the ledger citation of the white background packshot piece if current
- EU AI Act transparency dates: reuse the ledger citations of the EU AI Act piece
- New York General Business Law section 396-b: the New York State Senate's statute page
- CAC labeling Measures: reuse the ledger citation of the China AI labeling piece
- Any library-waste or content-reuse figure only from a study with sample and method; otherwise no figure

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The review table as a template: asset, where it runs, performance from the platform's own analytics, rights end date, spec fit, label duty, verdict (keep, cut, change)
- Rights that lapse: talent usage terms, stock licenses, music licenses; where the end date sits in the contract; no market figure
- What moved and what moves, each dated from its own page: Google Merchant Center's minimum image size enforced from January 31, 2027; the EU AI Act transparency duties as the EU AI Act piece states them; the New York synthetic performer disclosure; for teams that also sell in China, the CAC labeling Measures in force since September 1, 2025; platform spec changes as the spec pages record them
- Change rather than reshoot: what an edit, a resize, a new caption or a new version fixes without a new shoot
- The evidence for keep: performance read from each platform's own reporting, compared like for like, never a vendor benchmark
- How to run it: one owner, a two-week window, one shared list; in hubStudio a Campaign can hold the 2027 refresh and Validation records who approved each change
- The studio route for the change list: Studio only or Studio + app, a producer reads the brief within one business day, a written proposal within 48 hours

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite a content-waste or reuse percentage without a study that states sample and method
- Name a marketing-software vendor, agency or tool
- Write that a law requires a brand, agency or tool vendor to carry a duty where only a law-firm reading says so: write generally treated as
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The keep, cut, change review table as a reusable template
- Dated list of 2026 and 2027 changes, each with its source page
- A two-week review plan described for a timeline graphic
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-year-end-content-review-2027.webp`.
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

- real cost of brand content in 2026: `/resources/insights/real-cost-of-brand-content-2026`
- production roster review questions: `/resources/insights/production-roster-review-questions`
- planning a 2027 content budget: `/resources/insights/content-budget-2027`
- measuring whether a visual works: `/resources/insights/measure-creative-performance`
- creative fatigue and ad refresh: `/resources/insights/ad-creative-fatigue-refresh`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`
- China AI labeling rules: `/resources/insights/china-ai-labeling-rules-production-workflow`
- resize one visual for every network: `/resources/how-to/resize-image-every-social-network`
- Campaigns in the app: `/app/campaigns`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Year-End Content Review: Keep, Cut, Change in 2027 (50 chars) |
| Meta description | 152 chars | Review your content library asset by asset before 2027: what to keep, cut and change, with the rights, specs and AI label rules that moved, dated. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I review my content strategy for 2027?
2. What should a year-end content audit include?
3. Which content should I retire at the end of the year?
4. What changes in 2027 for brand content?
5. How do I check whether my image and music rights expire?
6. Can old content be updated instead of reshot?

## Notes

Every rule and date from its own page; the budget piece (130) prices 2027, this piece sorts the library, so the two cross-link and do not overlap; reuse the ledger citations of the EU AI Act, US disclosure, China labeling and white background packshot pieces where still current. China is one market among several here.

## Definition of done

- [ ] `research/year-end-content-review-2027.md` written before drafting, every claim marked
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
- [ ] File saved as `output/year-end-content-review-2027.md` with `template: insight`
