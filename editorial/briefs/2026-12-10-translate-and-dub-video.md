---
brief_id: 120
publish_date: 2026-12-10
week: 09
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 120: How to translate and dub a video into other languages

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
| Working H1 | How to translate and dub a video into other languages |
| Slug | `/resources/how-to/translate-and-dub-video/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/translate-and-dub-video.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/translate-and-dub-video.md` |
| Research file | `research/translate-and-dub-video.md` |
| Hero image | `public/Images/howto-translate-and-dub-video.webp`, referenced as `/Images/howto-translate-and-dub-video.webp` |
| Primary query | `AI video dubbing` |
| Secondary queries | `translate a video into another language`, `AI dubbing for marketing videos`, `subtitles vs voice-over vs dubbing`, `dub a video with lip sync` |
| SERP verdict | Dubbing tool vendors rank with one-click demos and language counts; none helps the reader choose the right level (subtitles, voice-over, lip-synced dub) for each video and market, or covers the steps that decide quality: a corrected transcript, a translation adapted by a native speaker, a voice the brand has the rights to, timing, and review. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Not every video needs a dub. Pick the level per video and market: subtitles for most social clips, a voice-over for explainers, a lip-synced dub where a face carries the message. Then run the same line every time: a clean transcript, a translation adapted by a native speaker, a voice you have the rights to, timing against the picture, a native review, and a label where the voice is synthetic. The transcript and captions come from the app; the dub and the lip sync come from the studio.

## The research gate, before any drafting

No body copy until `research/translate-and-dub-video.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI video dubbing` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/translate-and-dub-video/` with a date. For a China platform, the
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

- Lip-sync failure modes: the peer-reviewed papers logged in the ledger, quoted as logged; no cross-language lip-sync benchmark exists in the sources reviewed, so none is cited
- EU AI Act Article 50: official text, dated
- YouTube multi-language audio: YouTube Help, dated
- App behavior: assets-library.md (Captions, Sound) in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: video type (social clip, product explainer, testimonial, founder message, training) against subtitles, voice-over and lip-synced dub, with the reason
- Step one in the app: captions in the Video editor transcribe the words in the language spoken (Detect it, or pick it), timed word by word, free in the browser or fast and billed; correct every line, then Download as SRT as the source transcript for translators
- Translation as adaptation: a native speaker adapts idiom, units, claims and calls to action; pointing to the transcreation piece
- Voice: a licensed voice actor or a synthetic voice made with written consent; the rights checklist (term, territory, media, the right to edit)
- Timing: translated lines run longer or shorter than the original; rewrite to fit rather than speed the voice up; a native review against the picture
- Lip sync: when it matters, what the research says about its failure modes, pointing to the lip-sync piece; the studio runs lip-synced adaptation
- Disclosure of a synthetic voice or altered face: the EU AI Act transparency duty (Article 50), from the official text
- Distribution: YouTube's option to add audio tracks in other languages, from YouTube Help, if live on the research date; a separate cut per market otherwise
- A QA list before release: names and product terms pronounced right, numbers and prices localized, claims legal in the market, captions matching the dub

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim the app translates captions, dubs, clones voices or lip syncs
- Name a dubbing, voice or translation tool vendor
- Give a language count or a cost saving figure from a vendor
- Give a text-expansion percentage unless a published localization study with its method is found
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Decision table by video type and level
- Workflow table: step, who does it, what is checked
- QA list before release
- Existing localized capture video-editor-tools.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-translate-and-dub-video.webp`.
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

- lip sync across languages: `/resources/insights/lip-sync-across-languages`
- transcreation as a production line: `/resources/insights/transcreation-as-a-production-line`
- word-by-word video captions: `/resources/how-to/word-by-word-video-captions`
- localize one visual for several markets: `/resources/how-to/localize-visual-for-markets`
- Video editor and tools: `/app/video-tools`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Translate and Dub a Video (32 chars) |
| Meta description | 152 chars | Translate and dub a video: subtitles, voice-over or lip-synced dub per market, then transcript, adaptation, voice rights and a native review. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I dub a video into another language with AI?
2. Should I use subtitles, a voice-over or dubbing?
3. Can AI keep the same voice in another language?
4. Do I need permission to clone a voice for dubbing?
5. How do I make the lips match a dubbed video?
6. Do I need to disclose an AI-dubbed voice?

## Notes

How-to taught as a production method. The app supplies the transcript and captions (Video editor, Download as SRT) only; dubbing and lip sync are the studio's, hence Send a brief rather than the family's Create your account. Distinct from lip-sync-across-languages and transcreation-as-a-production-line: link both.

## Definition of done

- [ ] `research/translate-and-dub-video.md` written before drafting, every claim marked
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
- [ ] File saved as `output/translate-and-dub-video.md` with `template: howto`
