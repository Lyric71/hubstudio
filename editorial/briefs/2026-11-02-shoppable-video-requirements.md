---
brief_id: 85
publish_date: 2026-11-02
week: 04
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 85: Shoppable video: what TikTok Shop, Instagram and YouTube Shopping each need from a product video

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
| Working H1 | Shoppable video: what TikTok Shop, Instagram and YouTube Shopping each need from a product video |
| Slug | `/resources/insights/shoppable-video-requirements/` |
| Publishes as | insight |
| Output file | `output/shoppable-video-requirements.md` |
| Research file | `research/shoppable-video-requirements.md` |
| Hero image | `public/Images/insight-shoppable-video-requirements.webp`, referenced as `/Images/insight-shoppable-video-requirements.webp` |
| Primary query | `shoppable video requirements` |
| Secondary queries | `TikTok Shop video requirements`, `how to tag products in Instagram Reels`, `YouTube Shopping product tagging requirements`, `shoppable video specs` |
| SERP verdict | Shoppable-video software vendors rank with TikTok-only how-tos built around their own integrations; nobody puts the three platforms side by side on eligibility, where each operates, the catalog connection and what the clip itself has to do. |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

The file is the easy part. Each platform gates shopping behind its own eligibility, its own market list and its own catalog connection, and each rewards a different clip. One master, three cuts, three checklists, read from each platform's own seller and creator help, dated.

## The research gate, before any drafting

No body copy until `research/shoppable-video-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `shoppable video requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/shoppable-video-requirements/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- TikTok Shop seller and creator eligibility and markets: TikTok Shop Seller Center or Academy and TikTok's own help, dated
- Instagram product tagging eligibility and markets: Meta Business Help Center (commerce eligibility, product tags in Reels)
- YouTube Shopping eligibility, markets and product tagging rules: YouTube Help (YouTube Shopping, the Shopping affiliate program)
- Any conversion or adoption figure only with a stated method; vendor claims are cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A side-by-side table: TikTok Shop, Instagram product tagging, YouTube Shopping: who can tag, eligibility, where it operates per the platform's own page, catalog source, the formats it applies to
- For each platform, what the product video itself needs: length and format, the product in frame early, and the commerce content rules from the platform's own policy page
- Disclosure: TikTok's commercial content disclosure, Instagram's paid partnership label, YouTube's paid promotion setting, each from its own help
- Where each operates, only as each platform lists it, with the date read
- One master to three cuts, pointing to the TikTok, Reels and Shorts spec pages
- How the hubStudio app fits, inside its facts: render the clip in the Video studio, frame it for a Reel or a TikTok in the Video editor with the network's zones shown, publish to Instagram and to TikTok (Beta, always labeled), and prepare a YouTube video that hubStudio hands to YouTube Studio; product tags are added on each platform, never in hubStudio
- Where the studio comes in: shoppable cutdowns run as a production line

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim hubStudio adds product tags, links a catalog or connects to a shop
- Use a follower threshold or an eligibility rule from anything but the platform's own page
- Name a shoppable-video vendor, plugin, consultancy or agency
- Drop the Beta label when TikTok publishing from the app is mentioned
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Platform table, five columns at most
- Clip checklist per platform
- One master, three cuts diagram, described in the ASSET BRIEF
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-shoppable-video-requirements.webp`.
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

- TikTok video specs: `/resources/insights/tiktok-video-specs`
- Instagram Reels and Stories specs: `/resources/insights/instagram-reels-stories-specs`
- YouTube Shorts specs: `/resources/insights/youtube-shorts-specs`
- short video service: `/services/design/short-video`
- TikTok platform page: `/solutions/platforms/tiktok`
- Video tools: `/app/video-tools`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Shoppable Video: TikTok, Instagram, YouTube Needs (49 chars) |
| Meta description | 152 chars | What TikTok Shop, Instagram product tags and YouTube Shopping each require: eligibility, markets, catalog link, disclosure and the clip itself. (143 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is a shoppable video?
2. How do I tag products in an Instagram Reel?
3. What are the requirements for TikTok Shop videos?
4. Who can use YouTube Shopping?
5. Can one product video work on TikTok Shop, Instagram and YouTube?
6. Do shoppable videos need an ad disclosure?

## Notes

Each platform's own seller or creator help only. Eligibility and market lists move: add a watch row three months out (2027-02-02) for the recheck.

## Definition of done

- [ ] `research/shoppable-video-requirements.md` written before drafting, every claim marked
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
- [ ] File saved as `output/shoppable-video-requirements.md` with `template: insight`
