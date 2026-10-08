---
brief_id: 91
publish_date: 2026-11-06
week: 04
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 91: AI content for jewelry and watch brands

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Industry page (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | AI content for jewelry and watch brands |
| Slug | `/resources/insights/ai-content-jewelry-watches/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-jewelry-watches.md` |
| Research file | `research/ai-content-jewelry-watches.md` |
| Hero image | `public/Images/insight-ai-content-jewelry-watches.webp`, referenced as `/Images/insight-ai-content-jewelry-watches.webp` |
| Primary query | `AI jewelry product photography` |
| Secondary queries | `AI jewelry photography`, `AI generated jewelry images`, `AI watch product photography`, `jewelry product video AI` |
| SERP verdict | Single-purpose product-photo apps and freelancer listings rank; one designer guide names the real failures (reflections in polished metal, chain links, prongs that move), but none covers watches, the rules on describing metals and stones, or when a piece has to be shot. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

In jewelry and watches the piece is the product and the buyer zooms in. Generate the world around the piece, never the piece: the setting, the light, the season, the model. Keep stones, settings, metal, dial and hands from a real capture. A macro fidelity checklist, and the rules on how metals and stones may be described.

## The research gate, before any drafting

No body copy until `research/ai-content-jewelry-watches.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI jewelry product photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-jewelry-watches/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC Jewelry Guides text and the date of the last revision: eCFR 16 CFR Part 23 and the FTC's own announcement
- Any market or return-rate figure only with a stated method; otherwise cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What fails in generated jewelry and watches: reflections in polished metal, prong counts, chain links, stone cut and color, dial text, hands at an impossible time, crown and bracelet geometry
- A decision table: asset, shot, generated, mixed
- The FTC Guides for the Jewelry, Precious Metals, and Pewter Industries (16 CFR Part 23) on describing lab-grown stones and metals, from the eCFR and FTC pages
- The Elizabeth Gage case study, only as written: a heritage London jeweller; product imagery, video and social at scale; detail that survives the macro crop; years of digital catch-up compressed into months
- Luxury context, pointing to the luxury AI content piece
- The three ways to work: a heritage house usually picks Studio + app or Studio only, approving in Validation
- Disclosure when a synthetic model wears the piece, pointing to the US disclosure piece
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Present a generated stone, setting or dial as an accurate depiction of a real piece
- Name a jewelry or watch brand other than the case-study client, or any tool or agency
- Add anything to the case study beyond src/data/case-studies.ts
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Fidelity checklist table: element, what goes wrong, the check
- Decision table: asset, shot, generated, mixed
- Case-study pull from the Elizabeth Gage page
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-jewelry-watches.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Elizabeth Gage case study: `/work/elizabeth-gage`
- luxury AI content systems: `/resources/insights/luxury-ai-content-systems`
- retouching at volume: `/resources/insights/retouch-at-volume-qa-pipeline`
- eCommerce design service: `/services/design/ecommerce`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Jewelry and Watch Brands (39 chars) |
| Meta description | 152 chars | Where AI works for jewelry and watches: generate the world, keep the piece real. A macro fidelity checklist, the FTC rules on stones and metals, a case. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI generate realistic jewelry product photos?
2. Why do AI jewelry images look wrong?
3. Is it legal to use AI images for jewelry listings?
4. Can AI put my jewelry on a model?
5. How do I photograph jewelry for AI editing?
6. Can AI make watch product videos?

## Notes

Category Production. Case study: elizabeth-gage in src/data/case-studies.ts, as written.

## Definition of done

- [ ] `research/ai-content-jewelry-watches.md` written before drafting, every claim marked
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
- [ ] Any case reference taken from `src/data/case-studies.ts`, nothing invented
- [ ] File saved as `output/ai-content-jewelry-watches.md` with `template: insight`
