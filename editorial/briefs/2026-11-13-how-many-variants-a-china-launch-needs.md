---
brief_id: 36
publish_date: 2026-11-13
week: 09
slot: D
slot_job: the proof page
cluster: Data
content_type: Proof page
status: not_started
---

# BRIEF 36: How many creative variants a China launch actually needs

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
| Working H1 | How many creative variants a China launch actually needs |
| Slug | `/resources/insights/how-many-variants-a-china-launch-needs/` |
| Output file | `output/how-many-variants-a-china-launch-needs.md` |
| Research file | `research/how-many-variants-a-china-launch-needs.md` |
| Primary query | `how many ad creatives per campaign douyin` |
| Secondary queries | `creatives per ad group ocean engine`, `how many ad variations to test`, `ad creative refresh frequency china` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

Brief 10 counted listing and organic slots per SKU. This page counts the other number: paid creative variants. Chinese ad platforms publish guidance on creatives per ad plan, creative review and refresh, mostly in Chinese help centers. The page reports what they publish, what peer-reviewed wear-out research shows, and a variant plan derived from both and labeled as such.

## The research gate, before any drafting

No body copy until `research/how-many-variants-a-china-launch-needs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how many ad creatives per campaign douyin` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/how-many-variants-a-china-launch-needs/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Platform guidance read on the ad platforms' own help or academy pages where readable, Chinese first, dated
- hubStudio's 20/80 shoot-to-generate variant mix only if a live site page publishes it, attributed to that page; if no page carries it, cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A table of platform-published creative-count and refresh guidance, per ad platform, primary where readable and modal otherwise
- What the wear-in and wear-out research measures, with its limits
- A derived variant plan, labeled derived
- The matrix article, by name, for the slot count

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Restate the matrix article's 24 and 27 slot counts as a variant count.
- Present a derived variant plan as a platform rule.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Table: platform guidance on creatives and refresh
- Table: derived variant plan by launch phase
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

- One shoot, six platforms matrix article: `/resources/insights/one-shoot-six-platforms-china-variant-matrix`
- Douyin platform page: `/solutions/platforms/douyin`
- Ad creative design service: `/services/design/ad-creative`

## CTA

Final section only. CTA label: **Plan the variant set**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How Many Ad Variants a China Launch Needs (41 chars) |
| Meta description | 152 chars | What Chinese ad platforms publish on creatives per ad plan, review and refresh, and what wear-out research says about how many variants a launch needs. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How many creatives should a Douyin ad plan have?
2. How often should China ad creatives be refreshed?
3. How many ad variations should I test in China?
4. What is creative fatigue in paid social?
5. How many variants can one shoot produce?

## Notes

Planning decision 2026-09-10: the calendar title overlaps brief 10. This brief moves to paid creative variants so the two pages answer different questions.

## Definition of done

- [ ] `research/how-many-variants-a-china-launch-needs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/how-many-variants-a-china-launch-needs.md`
