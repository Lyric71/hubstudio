---
brief_id: 102
publish_date: 2026-11-23
week: 07
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 102: Creative fatigue: how often ad visuals need a refresh

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
| Working H1 | Creative fatigue: how often ad visuals need a refresh |
| Slug | `/resources/insights/ad-creative-fatigue-refresh/` |
| Publishes as | insight |
| Output file | `output/ad-creative-fatigue-refresh.md` |
| Research file | `research/ad-creative-fatigue-refresh.md` |
| Hero image | `public/Images/insight-ad-creative-fatigue-refresh.webp`, referenced as `/Images/insight-ad-creative-fatigue-refresh.webp` |
| Primary query | `ad creative fatigue` |
| Secondary queries | `how often to refresh ad creative`, `creative fatigue Meta ads`, `TikTok ad fatigue`, `signs of ad fatigue`, `creative refresh cadence` |
| SERP verdict | Ad-tech vendors and agency blogs rank with calendar rules (every 7 days, 1 to 2 weeks, 4 to 6 weeks) attributed to the platforms without a link, plus budget anecdotes with no method; none reads what Meta, TikTok and Google actually publish about fatigue, which is diagnostics and signals, not intervals. |
| Body length | 2,100 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

No major ad platform publishes a refresh interval. What they publish is the signal: a fatigue status or diagnostic in the ads manager, falling performance on an asset, rising frequency. So the answer is a supply plan, not a calendar: read the signal each platform gives, know which part of the ad wore out (the hook, the visual, the format or the idea), and keep the next batch ready before the signal fires. With the advertising research on wear-out, where a method is stated, and China as one market among several.

## The research gate, before any drafting

No body copy until `research/ad-creative-fatigue-refresh.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `ad creative fatigue` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ad-creative-fatigue-refresh/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Meta's own description of creative fatigue in Ads Manager (the delivery status or diagnostic and its trigger as Meta words it): Meta Business Help Center, captured rendered with a date; if the page serves a title only, as on 2026-09-10, say so and cut the claim
- TikTok's own guidance on ad fatigue and creative refresh: TikTok ads help center or TikTok Creative Center, dated
- Google Ads asset performance labels and the YouTube guidance on creative rotation: Google Ads Help, dated
- Any wear-out finding: a peer-reviewed study or academic working paper with sample, period and method; a vendor study is labeled a market claim
- No percentage lift from refreshing creative unless its study states sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An answer table in the first screen: platform, the fatigue signal it publishes, where to read it, what the platform says to do, the page that says so (Meta, TikTok, Google Ads and YouTube, Pinterest, LinkedIn where each publishes one)
- A plain statement that no platform reached publishes a fixed refresh interval, and that the intervals circulating online trace to vendors, not platforms
- What wears out first: a diagnostic table (hook, visual, format, offer, whole concept) with the symptom and the cheapest fix for each
- The research on advertising wear-out, only from peer-reviewed or academic sources with a stated sample and method; if none is current, say what the classic findings were and date them
- A supply plan the reader can run: how many fresh variants to keep in reserve per ad set or campaign, expressed as a method (variants per concept, concepts per quarter) the reader fills with their own spend and audience size, never as an invented number
- China in one paragraph: the Chinese ad platforms publish no refresh interval either (the ledger rows from brief 36), with a pointer to the variant piece
- How refresh batches get made: new hooks and visuals from the existing product photos (Image studio edits from up to four source pictures, engine dependent; Run again and Reuse prompt in History for variations), the network shapes from the Image editor and the Video editor's Social panel, one launch's files kept together in a Campaign
- Case reference only as written in src/data/case-studies.ts: Mexicash (concepts per platform and cuts at six, eight, twelve and fifteen seconds, in 9:16 and 16:9, in five days)

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Attribute a refresh interval to a platform unless the platform's own page states it
- Use any figure on the brief 36 do-not-publish list: Meta 2 to 3 new ads a week, frequency 2.5 to 3, fatigue at twice the cost per result, 3 to 5 or 50 ads per ad set, any Chinese refresh interval
- Reuse the fatigue window or batch figures from the hubStudio ad creative service page (cut by the ledger)
- Name an ad-tech vendor, analytics tool or agency
- Claim hubStudio buys, places or monitors ads, or reads ad performance
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: platform, signal, where to read it, source page
- Diagnostic table: what wore out, symptom, cheapest fix
- Supply plan worksheet described for a table the reader fills in
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ad-creative-fatigue-refresh.webp`.
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

- how many variants a China launch needs: `/resources/insights/how-many-variants-a-china-launch-needs`
- Mexicash case study: `/work/mexicash`
- ad creative design service: `/services/design/ad-creative`
- vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- Meta and TikTok against Douyin and RedNote: `/resources/insights/meta-tiktok-against-douyin-rednote`
- campaign adaptation cost per market: `/resources/insights/campaign-adaptation-cost-per-market`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Ad Creative Fatigue: When to Refresh Ad Visuals (47 chars) |
| Meta description | 152 chars | No ad platform publishes a refresh interval. What Meta, TikTok and Google publish on fatigue, what wears out first, and how to keep a fresh batch ready. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How often should I refresh my ad creative?
2. What is creative fatigue in Meta ads?
3. How do I know if my TikTok ads are fatigued?
4. Does a higher budget make ads fatigue faster?
5. Is it the hook or the visual that wears out first?
6. How many ad variations should I have ready?

## Notes

Platforms' own help pages and peer-reviewed wear-out research only. Distinct from brief 36 (variant counts for a China launch): this piece is about the signal and the supply rhythm, all markets.

## Definition of done

- [ ] `research/ad-creative-fatigue-refresh.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ad-creative-fatigue-refresh.md` with `template: insight`
