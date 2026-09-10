---
brief_id: 38
publish_date: 2026-11-17
week: 10
slot: B
slot_job: the spec page
cluster: Playbook
content_type: Spec page
status: not_started
---

# BRIEF 38: Automotive content without shipping a car

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
| Working H1 | Automotive content without shipping a car |
| Slug | `/resources/insights/automotive-content-without-shipping-a-car/` |
| Output file | `output/automotive-content-without-shipping-a-car.md` |
| Research file | `research/automotive-content-without-shipping-a-car.md` |
| Primary query | `cgi car advertising without photoshoot` |
| Secondary queries | `ai generated car advertising`, `automotive cgi vs photography`, `car ad rules depicting driving` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

Launch imagery for a vehicle without moving it: what a generated or CGI environment has to get right (paint, reflections, trim, wheels, badges, plates, driving side), what advertising rules say about depicting a vehicle and how it is driven, and where a physical shoot still wins. The premium SUV case study figures run attributed to the case page under the first-party exception.

## The research gate, before any drafting

No body copy until `research/automotive-content-without-shipping-a-car.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `cgi car advertising without photoshoot` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/automotive-content-without-shipping-a-car/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Case figures only as the premium SUV case page publishes them
- Advertising codes and rulings read at source with dates
- Any vehicle logistics cost figure needs a stated method, or it is cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A generate or capture table by asset
- An accuracy checklist for generated vehicle imagery
- Advertising rules on depicting vehicles and driving, from primary codes and instruments
- The premium SUV case figures, attributed to the case page

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name the automotive client; the case study does not.
- Add a case figure the case page does not publish.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Generate or capture table
- Accuracy checklist
- Rules table: code, rule, date
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

- Premium SUV case study: `/work/premium-suv`
- Manufacturers solutions page: `/solutions/manufacturers`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Brief a vehicle launch**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Automotive Content Without Shipping a Car (41 chars) |
| Meta description | 152 chars | Car launch imagery without moving the car: what generated scenes must get right, where a real shoot still wins, and the rules on depicting driving. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can car ads use CGI or AI-generated images?
2. What must be accurate in generated automotive imagery?
3. When does an automotive shoot still need a real car?
4. What are the rules for showing driving in car ads?
5. How long does generated automotive content take?

## Definition of done

- [ ] `research/automotive-content-without-shipping-a-car.md` written before drafting, every claim marked
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
- [ ] File saved as `output/automotive-content-without-shipping-a-car.md`
