---
brief_id: 31
publish_date: 2026-10-23
week: 06
slot: D
slot_job: the proof page
cluster: China specs
content_type: Proof page
status: not_started
---

# BRIEF 31: Amazon, Tmall, JD: one product, three listing builds

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
| Working H1 | Amazon, Tmall, JD: one product, three listing builds |
| Slug | `/resources/insights/amazon-tmall-jd-one-product-three-listings/` |
| Output file | `output/amazon-tmall-jd-one-product-three-listings.md` |
| Research file | `research/amazon-tmall-jd-one-product-three-listings.md` |
| Primary query | `amazon tmall jd product image requirements comparison` |
| Secondary queries | `amazon vs tmall listing images`, `can i use amazon product images on tmall`, `jd vs amazon image size` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

One product, three listing builds. Amazon publishes its image rules openly in its own seller help pages, so Amazon rows are primary readings scoped to the page read. Tmall and JD rows reuse the cleared modal collections from briefs 01, 02 and 04 with their counts. The page shows what carries over between the three builds, what has to be rebuilt, and one capture plan that serves all three.

## The research gate, before any drafting

No body copy until `research/amazon-tmall-jd-one-product-three-listings.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `amazon tmall jd product image requirements comparison` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/amazon-tmall-jd-one-product-three-listings/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Amazon values from Amazon's own public seller help pages, read and dated, primary for that page only
- Tmall and JD values reused verbatim from the cleared collections with their original counts, never re-counted and never added across collections
- Every carry-over conclusion labeled as derived

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A side-by-side table of main image rules: background, fill, size, count, format, video
- A carry-over table: which Amazon assets re-export to Tmall and JD, which need a re-crop, a re-edit or new capture
- Amazon detail content against the Tmall and JD detail page build
- One capture plan that serves all three marketplaces

## Confidence handling

Tmall and JD rows open with the China platform spec disclaimer from SPEC.md. The readable-page paragraph names the Amazon help pages read and their scope.

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Present any Tmall or JD modal value as verified, official or read from a platform.
- Repeat the Amazon, Tmall or title-length figures on the ecommerce design service page. The ledger flags them for re-verification.
- Try to replace Amazon's own documentation. Part 5 rule 11: the page is a comparison that points to it.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Table: main image rules, Amazon, Tmall and JD side by side
- Table: carry-over by asset, cell type per marketplace
- Capture plan for one shoot day
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

- Amazon platform page: `/solutions/platforms/amazon`
- Tmall platform page: `/solutions/platforms/tmall`
- JD platform page: `/solutions/platforms/jd`
- Ecommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Plan a three-marketplace build**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Amazon, Tmall, JD: One Product, Three Listings (46 chars) |
| Meta description | 152 chars | One product listed on Amazon, Tmall and JD: which images carry over, which need rebuilding, and one capture plan that serves all three marketplaces. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can I use Amazon product images on Tmall?
2. What is the difference between Amazon and Tmall main images?
3. Does JD accept the same images as Tmall?
4. Is Amazon detail content the same as a Tmall detail page?
5. How do I shoot one product for Amazon, Tmall and JD?

## Definition of done

- [ ] `research/amazon-tmall-jd-one-product-three-listings.md` written before drafting, every claim marked
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
- [ ] File saved as `output/amazon-tmall-jd-one-product-three-listings.md`
