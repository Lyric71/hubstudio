---
brief_id: 117
publish_date: 2026-12-08
week: 09
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 117: How to make an AI avatar explainer video from a script

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | How-to (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to make an AI avatar explainer video from a script |
| Slug | `/resources/how-to/ai-avatar-explainer-video-from-script/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/ai-avatar-explainer-video-from-script.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/ai-avatar-explainer-video-from-script.md` |
| Research file | `research/ai-avatar-explainer-video-from-script.md` |
| Hero image | `public/Images/howto-ai-avatar-explainer-video-from-script.webp`, referenced as `/Images/howto-ai-avatar-explainer-video-from-script.webp` |
| Primary query | `AI avatar video from script` |
| Secondary queries | `script to avatar video`, `how to write a script for an AI avatar video`, `AI presenter explainer video steps`, `AI avatar product explainer` |
| SERP verdict | Avatar software vendors own the results with their own sign-up flows as the tutorial; none teaches the parts that decide whether the video works and can be published: a script written for the ear, the rights to the face and the voice, the cutaways that show the product, captions, disclosure and a review before release. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

The avatar is the easy part. An explainer stands or falls on the script, the rights and the edit: write for the ear and time it aloud, secure a license for any real face and voice, cut away to the product whenever the words describe it, caption every line, label what is synthetic, and get the cut approved. Taught as a production method that works whatever renders the presenter; the avatar itself comes from a licensed avatar service or the studio, the product cutaways and captions from the app.

## The research gate, before any drafting

No body copy until `research/ai-avatar-explainer-video-from-script.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI avatar video from script` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-avatar-explainer-video-from-script/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- EU AI Act Article 50 and New York General Business Law section 396-b: official texts, with dates
- Any trust or completion figure for avatar video only from a peer-reviewed or preregistered study with sample and method
- App behavior: create-a-video.md, assets-library.md (Captions) and validation.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Steps: brief and message, script for the ear (short sentences, one idea each, read aloud and timed), presenter choice (a stock avatar under its license, or a custom likeness with written consent), voice (licensed or cloned with consent), render, cutaways, captions, disclosure, review
- A script template the reader can copy: hook, problem, the product shown, proof, the call to action, with where each cutaway lands
- A rights checklist: likeness and voice consent in writing, term, territory, media, the right to change the script later; pointing to the brand ambassadors piece
- Cutaways made in the app: image to video from a packshot in the Video studio (start frame, or start and last frame on the engines that take both), so the product on screen is the real one
- Captions in the Video editor, timed word by word, free in the browser or fast and billed, with Download as SRT; Validation to get the cut approved, versions on one thread
- Disclosure: the EU AI Act transparency duty (Article 50) and New York's synthetic performer law, from the official texts, pointing to the EU and US disclosure pieces
- A QA list before release: lip sync on the hard words, product names pronounced right, every claim backed, captions corrected, the label in place
- A plain line on what the app does not do: it does not render talking avatars or lip sync; the studio runs avatar programs with their contracts

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim the app makes talking avatars, lip sync or voice clones
- Name an avatar, voice or video tool vendor
- Give a words-per-minute figure unless a published speech-rate study with its method is found
- Give legal advice: say the piece describes production practice
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Script template with cutaway marks
- Rights checklist table
- QA list before release
- Existing localized capture create-a-video-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-ai-avatar-explainer-video-from-script.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A step sequence, a prompt example, a checklist the reader can use today. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- AI avatar or real presenter: `/resources/insights/ai-avatar-vs-real-presenter`
- AI avatars in brand content: `/resources/insights/ai-avatars-brand-content`
- AI brand ambassadors: what you sign: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- word-by-word video captions: `/resources/how-to/word-by-word-video-captions`
- vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- video production service: `/services/design/video-production`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Avatar Explainer Video From a Script (39 chars) |
| Meta description | 152 chars | Make an AI avatar explainer that can be published: a script for the ear, rights to face and voice, product cutaways, captions, disclosure and review. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I turn a script into an AI avatar video?
2. How long should an AI avatar explainer script be?
3. Do I need permission to make an avatar of a real person?
4. Do I need to disclose an AI avatar in a video?
5. How do I show my product in an avatar video?
6. Can an AI avatar pronounce brand and product names correctly?

## Notes

How-to taught as a production method. The app supplies cutaways (Video studio), captions (Video editor) and approval (Validation) only; avatar rendering is the studio's, hence Send a brief rather than the family's Create your account. Distinct from ai-avatar-vs-real-presenter (the decision) and ai-avatars-brand-content: link both.

## Definition of done

- [ ] `research/ai-avatar-explainer-video-from-script.md` written before drafting, every claim marked
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
- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center
- [ ] File saved as `output/ai-avatar-explainer-video-from-script.md` with `template: howto`
