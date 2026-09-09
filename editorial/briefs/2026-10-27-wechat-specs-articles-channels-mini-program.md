---
brief_id: 08
publish_date: 2026-10-27
week: 07
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 08: WeChat specs in one place: articles, Channels, Mini Program

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | WeChat specs in one place: articles, Channels, Mini Program |
| Slug | `/resources/insights/wechat-specs-articles-channels-mini-program/` |
| Output file | `output/wechat-specs-articles-channels-mini-program.md` |
| Research file | `research/wechat-specs-articles-channels-mini-program.md` |
| Primary query | `wechat official account article image size specs` |
| Secondary queries | `wechat channels video specs`, `wechat mini program banner size`, `wechat article cover size` |
| SERP verdict | WEAK. The canonical incumbent is from 2022 and a 2019 PDF also ranks |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

Pure recency plus consolidation. Three surfaces, one maintained page, dated. The pages holding this query were written before two of the three surfaces looked the way they look now.

## The research gate, before any drafting

No body copy until `research/wechat-specs-articles-channels-mini-program.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `wechat official account article image size specs` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/wechat-specs-articles-channels-mini-program/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Article, Channels and Mini Program dimensions, from the WeChat backend and official documentation only

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Official Account article header and inline image sizes
- Cover thumbnail crops for the different card layouts
- WeChat Channels (视频号) video specs, and how a Channels cut differs from a Douyin (抖音) cut of the same shoot
- Mini Program banner and card sizes
- Tencent Ads placements

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- One spec table per surface
- Table: Channels cut against Douyin cut, same shoot
- Annotated screenshots of the article editor and the Channels upload screen
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Spec table, annotated screenshot, rejection reasons, visible reviewed date. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- WeChat platform page: `/solutions/platforms/wechat`
- Social media design service: `/services/design/social-media`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | WeChat Specs: Articles, Channels, Mini App (42 chars) |
| Meta description | 152 chars | WeChat image and video specs in one maintained page: Official Account articles, cover crops, Channels video, Mini Program banners and Tencent Ads. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size is a WeChat article cover image?
2. What are the WeChat Channels video specs?
3. Can I reuse a Douyin cut on WeChat Channels?
4. What size are Mini Program banners?
5. What image sizes work inside a WeChat article body?

## Definition of done

- [ ] `research/wechat-specs-articles-channels-mini-program.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] Chinese terms as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] File saved as `output/wechat-specs-articles-channels-mini-program.md`
