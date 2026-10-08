---
brief_id: 122
publish_date: 2026-12-11
week: 09
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 122: AI content for travel and hospitality brands

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
| Working H1 | AI content for travel and hospitality brands |
| Slug | `/resources/insights/ai-content-travel-hospitality/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-travel-hospitality.md` |
| Research file | `research/ai-content-travel-hospitality.md` |
| Hero image | `public/Images/insight-ai-content-travel-hospitality.webp`, referenced as `/Images/insight-ai-content-travel-hospitality.webp` |
| Primary query | `AI hotel marketing images` |
| Secondary queries | `AI generated hotel photos`, `AI images for travel marketing`, `can hotels use AI images in ads`, `AI destination marketing content`, `hotel social media content AI` |
| SERP verdict | Hotel-tech vendors and prompt galleries rank, selling generated room shots and destination scenes; none draws the line a guest cares about, between mood that sells a stay and a picture of a room, view or amenity the property does not have, or cites the consumer-protection and listing rules that sit on that line. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

In travel the picture is the promise: a guest books the room, the view and the pool they were shown. So generate around the property, never instead of it: the season, the light, the people, the destination mood, the ad variants for each source market; photograph what a guest will actually get. With the consumer-protection rules in the US, the UK and the EU, and what the listing platforms ask of property photos.

## The research gate, before any drafting

No body copy until `research/ai-content-travel-hospitality.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI hotel marketing images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-travel-hospitality/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC pages on deceptive advertising and on the fees rule as it applies to short-term lodging, each with its date
- EUR-Lex text of 2005/29/EC; the CAP Code section on misleading advertising on asa.org.uk, dated
- Google Business Profile photo policy and each booking platform's partner photo guideline, read and dated
- Any figure on how much photos weigh in a booking decision only from a study with sample and method; if a party that sells photography or listings published it, label it a market claim

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table by asset: rooms and suites, views, pool and amenities, food and beverage, destination and experience scenes, seasonal campaign visuals, social and ad variants; against shoot, generate, mixed
- The misrepresentation line: generated context around real photography is fine; a generated or edited room, view, amenity or size a guest will not find is a misleading picture, whether or not AI made it
- US: section 5 of the FTC Act on deceptive advertising, from ftc.gov; the FTC rule on unfair or deceptive fees, named only for what it covers for short-term lodging (how the price is shown), never presented as an image rule
- EU: the Unfair Commercial Practices Directive 2005/29/EC from EUR-Lex, and the AI Act transparency duty as the EU AI Act page covers it; UK: the CAP Code rules on misleading advertising, from asa.org.uk
- Listing platforms: the Google Business Profile photo and content policies, and the partner photo guidelines the large booking platforms publish for properties, each read on its own help page, and quoted only where it says something about edited or generated images
- Source markets as one dimension: one property shown to guests from several markets, with the people, the season and the copy adapted per market; China as one source market among several
- Case studies, only as written in src/data/case-studies.ts: premium-suv (every environment generated rather than travelled to, no vehicle logistics) and 1834 Gin (a visual world, no location needed); say plainly that neither is a hotel
- The three ways to work: the studio for a launch, a renovation or a reopening; the app for seasonal and social variants (Image studio edits from up to four source pictures, engine dependent; the Lifestyle product scene and Consistent character across images skills)
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Show or describe a room, view, amenity, facility or distance the property does not have
- Name a hotel group, a booking platform outside its own policy page, or any tool vendor
- Print the count of markets from the premium-suv case, or any count of markets
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, shoot, generate, mixed
- Rules table by market: the rule, the page, what it means for a picture
- Case-study strip with two links
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-travel-hospitality.webp`.
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

- premium SUV case study: `/work/premium-suv`
- 1834 Gin case study: `/work/1834-gin`
- shoot it or generate it: `/resources/insights/shoot-it-or-generate-it`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`
- localize a visual for several markets: `/resources/how-to/localize-visual-for-markets`
- social media design service: `/services/design/social-media`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Travel and Hospitality Brands (44 chars) |
| Meta description | 152 chars | Where AI fits in hotel and travel marketing: generate the season, light and mood, photograph the room and the view, and the rules on misleading images. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can hotels use AI-generated images in marketing?
2. Is it legal to use AI photos of a hotel room?
3. Do booking sites allow AI-generated property photos?
4. How do travel brands use AI for destination content?
5. Do I need to disclose AI images in travel ads?
6. What hotel content should still be photographed?

## Notes

Category Production. Regulators' and platforms' own pages only; case studies premium-suv and 1834-gin as written, neither presented as hospitality work.

## Definition of done

- [ ] `research/ai-content-travel-hospitality.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-travel-hospitality.md` with `template: insight`
