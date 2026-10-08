---
brief_id: 49
publish_date: 2026-10-08
week: 00
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 49: Black Friday to New Year: the 2026 holiday content calendar, counted backwards

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
| Working H1 | Black Friday to New Year: the 2026 holiday content calendar, counted backwards |
| Slug | `/resources/insights/holiday-content-calendar-2026/` |
| Publishes as | insight |
| Output file | `output/holiday-content-calendar-2026.md` |
| Research file | `research/holiday-content-calendar-2026.md` |
| Hero image | `public/Images/insight-holiday-content-calendar-2026.webp`, referenced as `/Images/insight-holiday-content-calendar-2026.webp` |
| Primary query | `holiday content calendar 2026` |
| Secondary queries | `black friday 2026 creative deadline`, `when to start black friday creative production`, `holiday marketing calendar 2026 retail`, `christmas 2026 last shipping day for marketing`, `q4 2026 ad review times meta tiktok` |
| SERP verdict | DATE LISTS AND SELLER PLAYBOOKS. The query returns social-media awareness-day lists (300 plus days) and vendor Black Friday playbooks that recommend 6 to 16 week lead times with no source; one prints Black Friday 2026 on the wrong day. None counts back from what platforms and carriers publish (ad review times, the learning week, the Amazon deal submission close, the USPS cutoffs, the French sale-start rule) to a dated last day to brief and deliver. |
| Body length | 2,200 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Retailers and brands in the US and Europe plan the holiday season by event date. This page counts back from each 2026 date (Thanksgiving November 26, Black Friday November 27, Cyber Monday November 30, the December gifting window that closes at the carrier cutoffs, Christmas, Boxing Day, the New Year sales) to when each asset must be briefed, made, approved and in the ad review queue. Production lead times, not marketing tips. Singles Day appears only as a pointer to the 11.11 and 618 production calendar; China is one market among several.

## The research gate, before any drafting

No body copy until `research/holiday-content-calendar-2026.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `holiday content calendar 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/holiday-content-calendar-2026/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- OPM federal holidays 2026 and 2027 (Thanksgiving November 26, Christmas December 25, New Year January 1, 2027)
- GOV.UK bank holidays: Boxing Day substitute day Monday December 28, 2026
- USPS newsroom release September 22, 2026: Ground Advantage and First-Class Mail December 17, Priority Mail December 18, Priority Mail Express December 19
- Amazon Seller Central news post, Holiday 2026: deal submission July 8 to October 20 for Black Friday Week and Cyber Monday
- Meta Business Help Center: About ads in review; About the learning phase; Significant edits and learning phase
- TikTok Ad Review FAQs (updated February 2025); Google Ads About the ad review process; Google Merchant Center Promotion status FAQs
- Service Public, soldes d hiver rule (second Wednesday, advanced to first when the second falls after the 12th)
- EUR-Lex Directive (EU) 2019/2161, Article 6a of Directive 98/6/EC, prior price
- Ledger rows: Amazon A+ and Shoppable video review windows, Meta and TikTok placement specs, Amazon image rules
- First-party windows: ad creative, email design, ecommerce, video production and pricing pages

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A dated calendar table: event, date, in market by, last day to deliver, last day to brief, with the counting method stated above it
- The platform-side deadlines that bind, only where the platform publishes them, cited: Meta and TikTok ad review (most within 24 hours), Google Ads review (most within one business day), Meta learning phase (about 50 results in the week after a significant edit, adding a new ad is one), Amazon US deal submission window (closes October 20, 2026 for Black Friday Week and Cyber Monday), Amazon A+ review (up to seven business days), Google Merchant Center promotions (submit at least 24 hours ahead), USPS 2026 holiday shipping dates, the UK bank holidays, the French winter sales start rule
- The asset list per moment: feed, Reels and TikTok, marketplace images, email headers
- Where AI production shortens the chain (variants, resizes, scene changes, scheduling organic posts, approvals on one thread) and where it does not (platform review, the learning week, deal windows, carrier cutoffs, price-claim sign-off, physical product)
- The studio production windows the site already publishes, attributed to their pages, never as measured delivery data
- One pointer to the 11.11 and 618 production calendar for China

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any competitor, agency, tool vendor or the publisher of a ranking page
- Print a lead time from a seller playbook (6 weeks, 16 weeks, briefs due October 15) as if it were evidence
- Print Meta-commissioned or Amazon-published performance statistics
- Print any fee, rate or dollar amount, hubStudio or platform
- Print Royal Mail 2026 dates before Royal Mail publishes them
- Claim the app runs or schedules paid ads: it publishes and schedules organic posts
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Calendar table (event, 2026 date, in market by, deliver by, brief by)
- Platform deadline table (platform, what it publishes, source)
- Asset list per moment table
- Production windows table (first-party, attributed)
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-holiday-content-calendar-2026.webp`.
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

- 11.11 and 618 production calendar: `/resources/insights/singles-day-618-production-calendar`
- ad creative service: `/services/design/ad-creative`
- ecommerce design service: `/services/design/ecommerce`
- hubStudio app: `/app`
- Amazon platform page: `/solutions/platforms/amazon`
- email design service: `/services/design/email-design`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Holiday content calendar 2026, counted backwards (48 chars) |
| Meta description | 152 chars | Black Friday to New Year 2026: the last day to brief and deliver each holiday asset, counted back from ad review times and shipping cutoffs. (140 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. When should Black Friday 2026 creative be briefed?
2. How long does Meta and TikTok ad review take before Black Friday?
3. When is the Amazon deal deadline for Black Friday 2026?
4. What is the last shipping day for Christmas 2026?
5. When do the January 2027 sales start in France and the UK?
6. Can AI production shorten the holiday content calendar?
7. What assets does a Black Friday campaign need?

## Notes

Publishes 2026-10-08, the day the calendar still has every row ahead of it. Amazon Black Friday Week dates and Royal Mail 2026 last posting dates were not published at research time: watch rows. Insight family, CTA Send a brief.

## Definition of done

- [ ] `research/holiday-content-calendar-2026.md` written before drafting, every claim marked
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
- [ ] File saved as `output/holiday-content-calendar-2026.md` with `template: insight`
