---
brief_id: 107
publish_date: 2026-11-26
week: 07
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 107: Real creator content or AI-generated UGC

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Comparison (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Real creator content or AI-generated UGC |
| Slug | `/resources/insights/ai-ugc-vs-creator-content/` |
| Publishes as | insight, category Buying models |
| Output file | `output/ai-ugc-vs-creator-content.md` |
| Research file | `research/ai-ugc-vs-creator-content.md` |
| Hero image | `public/Images/insight-ai-ugc-vs-creator-content.webp`, referenced as `/Images/insight-ai-ugc-vs-creator-content.webp` |
| Primary query | `AI UGC vs real creators` |
| Secondary queries | `AI UGC vs human UGC`, `is AI UGC worth it`, `AI generated UGC ads disclosure`, `creator content vs AI content for ads`, `UGC creators or AI videos` |
| SERP verdict | Creator marketplaces and AI UGC vendors rank, each arguing for what it sells, with trust percentages and test results that state no sample or method; none separates what only a real person can carry (an experience, an audience, a testimony) from what is only a look, and none puts the contract and disclosure side in the same table. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

The question is what the clip has to carry. A real creator brings an experience, an audience and a voice people already trust; AI-generated UGC brings the look, the volume and the speed. Testimony is the line: a generated person cannot say the product worked for them. Most budgets use both: AI to test angles and fill formats, creators for the claims and the reach. Compared by job, contract and disclosure, never by vendor.

## The research gate, before any drafting

No body copy until `research/ai-ugc-vs-creator-content.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI UGC vs real creators` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-ugc-vs-creator-content/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC: 16 CFR Part 255 and Part 465, from ftc.gov and eCFR, with effective dates
- UK: CAP Code section on recognising marketing communications and the ASA influencer guidance, dated
- EU: Directive 2005/29/EC as amended, from EUR-Lex
- Platform label and branded content rules: TikTok, Meta and YouTube help pages, dated
- Creator rate ranges only from a published survey with sample and method; otherwise cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: criterion (personal experience or testimony, existing audience, speed, number of variants, languages, usage rights and term, whitelisting or partnership ads, disclosure, reshoots) against creator content, AI-generated UGC, both
- When to choose each: concept and hook testing, product demos, localization and seasonal variants against reviews, testimonials, launches that need reach
- The paperwork for creators: usage rights, term, territory, paid usage, partnership or Spark authorization, from the platforms' own pages
- The rules for both: the FTC Endorsement Guides (16 CFR Part 255) and the Consumer Reviews and Testimonials rule (16 CFR Part 465) in the US; the UK CAP Code and ASA guidance on influencer marketing; the EU Unfair Commercial Practices Directive; each from its own page, scoped as written
- The platforms' AI content labels and branded content tools (TikTok, Meta, YouTube), from their own help pages
- Cost structure, not amounts: creators priced per deliverable plus usage rights; AI clips paid per run, with the price shown before each run in the app; category ranges only from published sources with a date and a method
- The hybrid: creator footage as the anchor, AI cut-downs, variants and b-roll around it; an AI UGC test that tells you which angle to pay a creator for
- Pointers to the how-to on making UGC-style video and to the avatar or presenter comparison

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Use the average or median UGC cost per deliverable rows on the ledger's do-not-publish list, or any UGC price it rejected (circular citation, no instrument)
- Repeat a trust or performance percentage unless its study states sample, date and method
- Name a creator marketplace, UGC agency, avatar tool or AI UGC app
- Suggest a generated person can give a review or testimonial
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Rules table by market: rule, page, what it means for a UGC-style clip
- Hybrid workflow described in the ASSET BRIEF
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-ugc-vs-creator-content.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A decision table and a when-to-choose section, no company named. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- UGC-style product videos with AI: `/resources/how-to/ai-ugc-product-video`
- AI avatar or real presenter: `/resources/insights/ai-avatar-vs-real-presenter`
- AI brand ambassadors: what you sign: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- AI avatars in brand content: `/resources/insights/ai-avatars-brand-content`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`
- short video design service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Real Creator Content or AI-Generated UGC (40 chars) |
| Meta description | 152 chars | When a real creator earns the fee and when AI-generated UGC does the job: testimony, audience, volume, usage rights and disclosure rules, side by side. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Is AI UGC as effective as real creator content?
2. Can AI-generated UGC be used in ads legally?
3. Do I need to disclose AI UGC?
4. Can an AI-generated person review my product?
5. Is AI UGC cheaper than hiring creators?
6. Should I use AI UGC and real creators together?

## Notes

Category Buying models. Compares ways of working, never a named marketplace or tool. Distinct from brief 95 (avatar or presenter for explainers): this one is creator content against UGC-style generation for social and ads.

## Definition of done

- [ ] `research/ai-ugc-vs-creator-content.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-ugc-vs-creator-content.md` with `template: insight`
