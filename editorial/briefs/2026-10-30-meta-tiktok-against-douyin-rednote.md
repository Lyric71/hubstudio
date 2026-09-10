---
brief_id: 32
publish_date: 2026-10-30
week: 07
slot: D
slot_job: the proof page
cluster: China specs
content_type: Proof page
status: not_started
---

# BRIEF 32: Meta and TikTok against Douyin and RedNote: the same campaign, twice

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
| Working H1 | Meta and TikTok against Douyin and RedNote: the same campaign, twice |
| Slug | `/resources/insights/meta-tiktok-against-douyin-rednote/` |
| Output file | `output/meta-tiktok-against-douyin-rednote.md` |
| Research file | `research/meta-tiktok-against-douyin-rednote.md` |
| Primary query | `adapt tiktok ads for douyin` |
| Secondary queries | `douyin vs tiktok ad specs`, `meta campaign to rednote`, `tiktok safe zone vs douyin safe zone` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

The same campaign built twice: once for Meta and TikTok, whose ad specs their own help centers publish openly (primary readings), once for Douyin and RedNote, from the cleared collections in briefs 05, 06 and 07. The page shows where a Western cut survives the move, where it fails (frame, safe zone, duration window, opening seconds, cover ratio), and what to capture once to serve both halves. Platforms are named; they are not competitors.

## The research gate, before any drafting

No body copy until `research/meta-tiktok-against-douyin-rednote.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `adapt tiktok ads for douyin` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/meta-tiktok-against-douyin-rednote/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Meta and TikTok values from their own ads help pages, read and dated, primary for that page only, never placed on a Douyin or RedNote row
- Douyin and RedNote values reused verbatim from the cleared collections with counts
- RedNote paid ad formats only if RedNote's own ad documentation is readable, or counted under deviation 7; otherwise organic note formats only, stated as such

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Side-by-side table: frame, safe zone, duration, file and cover rules for the four platforms
- A survives or fails table for a Western cut moved to Douyin and RedNote
- What to capture once so both halves come from one shoot

## Confidence handling

Douyin and RedNote rows carry the social-platform form of the disclaimer. The readable-page paragraph names the Meta and TikTok pages read.

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Put a TikTok figure on a Douyin row or treat the two apps as one spec.
- Try to replace Meta or TikTok documentation. Part 5 rule 11: compare and point to it.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Table: the four platforms side by side
- Table: survives or fails, per asset
- Capture checklist for a two-half campaign
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. One number from hubStudio's delivery record with its method stated. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- TikTok platform page: `/solutions/platforms/tiktok`
- Meta platform page: `/solutions/platforms/meta`
- Douyin platform page: `/solutions/platforms/douyin`
- RedNote platform page: `/solutions/platforms/rednote`
- Ad creative design service: `/services/design/ad-creative`

## CTA

Final section only. CTA label: **Build the campaign for both**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Meta and TikTok vs Douyin and RedNote Specs (43 chars) |
| Meta description | 152 chars | One campaign built for Meta and TikTok, then again for Douyin and RedNote: which cuts survive the move, which fail, and what to capture once for both. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can a TikTok ad run on Douyin?
2. Are Douyin and TikTok ad specs the same?
3. What changes when a Meta campaign moves to RedNote?
4. How do TikTok and Douyin safe zones differ?
5. How do I shoot one campaign for Western and Chinese platforms?

## Definition of done

- [ ] `research/meta-tiktok-against-douyin-rednote.md` written before drafting, every claim marked
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
- [ ] File saved as `output/meta-tiktok-against-douyin-rednote.md`
