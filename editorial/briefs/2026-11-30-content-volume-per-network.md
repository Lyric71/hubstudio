---
brief_id: 109
publish_date: 2026-11-30
week: 08
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 109: How much content a brand needs each month, network by network

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
| Working H1 | How much content a brand needs each month, network by network |
| Slug | `/resources/insights/content-volume-per-network/` |
| Publishes as | insight |
| Output file | `output/content-volume-per-network.md` |
| Research file | `research/content-volume-per-network.md` |
| Hero image | `public/Images/insight-content-volume-per-network.webp`, referenced as `/Images/insight-content-volume-per-network.webp` |
| Primary query | `how many posts per week per platform` |
| Secondary queries | `how often to post on social media 2026`, `posting frequency by platform`, `how much content does a brand need per month`, `how many posts per week on Instagram`, `how often to post on LinkedIn for business` |
| SERP verdict | Scheduler and social tool blogs rank with one table of posts per week per network (3 to 5 on Instagram, 15 to 25 pins a day) and benchmark studies from their own users that state little method; none separates what a platform itself says from what a vendor counted, and none turns a posting rhythm into the monthly asset count a budget is built on. |
| Body length | 2,200 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Platforms publish caps and a little guidance, not an ideal frequency; the posting numbers that circulate are counts of what vendors' own users did. So build the month the other way round: start from what each network itself says, keep only the studies that state their method, then convert posts into assets (a carousel is several pictures, a Reel needs a cover and cut-downs, ads need variants). The output is a monthly asset count per network that a budget holder can price.

## The research gate, before any drafting

No body copy until `research/content-volume-per-network.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how many posts per week per platform` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/content-volume-per-network/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- What each platform says about posting frequency: each network's own creator, business or help pages, dated; record where a platform says nothing
- Posting caps where stated: the platforms' own pages (the hubStudio help notes Instagram's 100 posts a day per account and TikTok's cap of about 15 a day; confirm each on the platform's own page)
- Benchmark studies: only those with sample, period and method stated, labeled with who ran them
- Chinese platforms: the ledger rows from brief 36 on the absence of a published interval

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An answer table in the first screen: network, what the platform itself says about posting frequency (or that it says nothing), the posting cap where the platform states one, what studies with a stated method found, the source of each
- The networks: Instagram, Facebook, TikTok, LinkedIn, X, YouTube and Shorts, Pinterest; and RedNote, Douyin and WeChat Channels as one market among several, where no platform publishes a frequency either
- Each benchmark study labeled by who ran it, its sample and its method; a vendor count of its own users is labeled a market claim
- Posts into assets: a conversion table (single image, carousel, Reel or TikTok with cover and cut-downs, Story, pin, ad variants) the reader fills with their own rhythm
- A monthly worksheet: network, posts a week the team can sustain, assets per post, ad variants, total assets a month
- What keeps the number sustainable: one long video into several shorts, one visual resized for every network, a week planned in one afternoon, with links to those pieces
- How the app carries the volume, from the help center and hubstudio-positioning.md: posts drafted from a brief, pictures and clips rendered or picked from the library, publishing to LinkedIn, Instagram, Facebook and TikTok (Beta) free of charge and to X with the price shown before sending, up to 20 accounts per post, a queue with automatic retries

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print a recommended posting frequency without the source that states it and its method
- Present a platform's daily posting cap as a target
- Name a scheduler, social tool or agency
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: network, platform guidance, cap, studies with method, source
- Posts into assets conversion table
- Monthly worksheet described for a table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-content-volume-per-network.webp`.
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

- what a week of social content costs: `/resources/insights/cost-of-social-content-week`
- plan a week of social posts: `/resources/how-to/plan-week-social-posts`
- long video to shorts: `/resources/how-to/long-video-to-shorts`
- resize one visual for every social network: `/resources/how-to/resize-image-every-social-network`
- social media design service: `/services/design/social-media`
- publishing in the app: `/app/publish`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How Many Posts a Week on Each Social Network (44 chars) |
| Meta description | 152 chars | What each network itself says about posting frequency, which studies state a method, and how to turn a posting rhythm into a monthly asset count. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How many times a week should a brand post on Instagram?
2. How often should a business post on LinkedIn?
3. How many TikToks should a brand post per week?
4. Is posting every day better for reach?
5. How many pieces of content does a brand need per month?
6. Is there a limit to how many posts I can publish a day?

## Notes

Platforms' own pages and studies with a stated method only. Distinct from brief 71 (cost of a week) and brief 65 (planning a week): this one sizes the volume per network.

## Definition of done

- [ ] `research/content-volume-per-network.md` written before drafting, every claim marked
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
- [ ] File saved as `output/content-volume-per-network.md` with `template: insight`
