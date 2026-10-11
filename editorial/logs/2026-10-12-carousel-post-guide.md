# Run log: 2026-10-12

Scheduled draft run of 2026-10-12 00:30 (`runs/2026-10-12-draft.txt`). The
working tree held no partial work: no row stood at researched, drafted or
quality_passed. The run took row 67, the earliest `not_started` row in
`publish_date` order (2026-10-14).

| Field | Value |
|---|---|
| Brief | 67 |
| Slug | carousel-post-guide |
| Research file | research/carousel-post-guide.md |
| Output | output/carousel-post-guide.md |
| Body word count | 2,177 prose only; 2,571 with tables (floor 1,700) |
| Body char count | 13,692 (check-draft.mjs, body without frontmatter and comments) |
| Status reached | image_ready |
| Model used at every step | claude-opus-5-5 (research, drafting, quality loop, review); gpt-image-2 high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | From the brief, the help articles instagram, linkedin, facebook and assets-library, and the two live spec pages |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, 41 ranking pages recorded |
| R3 primary sources for every number | yes | Instagram Help Center, Instagram Platform docs, LinkedIn Help only; 8 captures |
| R4 Chinese-language web searched first | n/a | Nothing China-related in the piece |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Network documentation read directly; app facts first-party |
| R6 triangulated, conflicts published as ranges | yes | Instagram 20 in the app against 10 through a publishing tool, LinkedIn 5 MB in the composer against 10 MB through hubStudio: both printed |
| R7 research file written before drafting | yes | 2026-10-12, before iteration 1 |
| R8 reconciled after drafting | yes | Every number traced, see the research file |

**Gap statement, one sentence:** the ranking pages are carousel-maker and
scheduler pages that teach their own editor, call every LinkedIn carousel a
PDF or cap LinkedIn picture posts at 9 when LinkedIn's help says 20, print
engagement multiples with no method, and none ties the swipe to the rule
both networks publish: the first item sets the frame for every slide behind
it.

**Research time spent:** about 70 minutes.

- Figures reused from the ledger: Instagram carousel 20 and one orientation,
  resolution 1.91:1 to 3:4, publishing interface 10 items, first-image crop,
  JPEG, 8 MB, 4:5 to 1.91:1 (brief 54); LinkedIn 20 photos, first-image
  layout, 4:5, 5 MB, documents 100 MB and 300 pages, WEBP accepted by
  LinkedIn (brief 63). All re-read on 2026-10-12 (third read).
- Claims cut because they could not be sourced: engagement multiples for
  document carousels, "up to 9 images" on LinkedIn, a carousel video length,
  an ideal slide count, swipe behavior of LinkedIn documents and picture
  posts (all in the research file's do-not-publish list).
- Conflicts published as a range rather than a single figure: Instagram's
  item count by route (20 in the app, 10 through a publishing tool);
  LinkedIn's photo weight by route (5 MB in the composer, 10 MB through
  hubStudio), with the advice to export under 5 MB.
- Captures saved to `research/carousel-post-guide/`: ig-help-carousel,
  ig-help-image-resolution, meta-dev-content-publishing,
  meta-dev-ig-user-media, li-a527229, li-a518909, li-a523054, li-a564109
  (HTML plus extracted text, 2026-10-12). The long dash in the two Meta
  captures was replaced by a spaced hyphen, per the settled capture rule.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification (write the list out)
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- 1: draft from the claims table: answer table, swipe logic, slide plan,
  Instagram rules, the LinkedIn split, the app steps with a prompt example,
  the Social panel, checklist, six FAQs, CTA.
- 2: weaknesses listed: unsourced "five to eight slides" (contradicted the
  research file), "eight words or fewer" cover rule, "tap the plus" not in the
  captured help, "likes count for" not the help's wording, "holds photos
  only" overstated for LinkedIn, the Text panel blurred into the Social steps,
  plus wrapping and FAQ phrasing.
- 3: all fixed; the slide count became "stop when the story ends".
- 4: three appended blocks added; "it doesn't page like a document" cut
  (LinkedIn's help does not describe the document feed display).
- 5 and 6: AI tells scanned (none of the positioning file's banned words);
  zero em dashes; five blockquotes in one format with source and date.
- 7: ran as the cadence variant, no planted errors: sentence lengths varied,
  the version paragraph opened with a short line, the Reel line restructured.
- 8: check 2, all eight cited pages re-fetched after drafting (HTTP 200),
  every quoted string found again; R8 reconciliation written.
- 9: approved brief SEO values kept (48, 149); excerpt written at 21 words.
- 10 to 12: second AI pass, human pass, formatting: three captures placed as
  figures, the prompt in a fenced prompt block, steps and checklist as lists.
- 13: five concepts (folded prints, a wall of pinned matching prints, a
  concertina strip being unfolded, a phone held over a row of prints, a
  contact sheet with one frame circled); the concertina strip was chosen as
  the carousel made physical, distinct from the trimmed and folded prints of
  the two latest social how-to heroes, and set in Hong Kong to rotate the
  setting.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : pause, second AI-undetectable pass
[x] Iteration 10 : second human touch pass
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check
[x] Final        : fold the SEO content into the markdown
```

- 2: ten weaknesses: lede repeating the answer, weak table bridge, a cause
  asserted as fact, two neat punchlines ("two half-read slides", "Pick one."),
  a "same, same, same" triad, no freshness cue, a clunky LinkedIn sentence,
  subheads missing the buyer words "size" and "PDF", the cost line placement.
- 3 and 4: lede rewritten, the table now says the limits are as the help
  pages put them on October 12, 2026, subheads renamed to "What size and how
  many slides does Instagram allow?" and "Should a LinkedIn carousel be a PDF
  or pictures?".
- 11: hostile read: a behavioral claim about readers cut back to advice
  ("a second idea gets its own slide").
- 12: no bold-label templates in the piece; prose dominant.
- 13: two triads broken (cover examples, LinkedIn visual sets).
- 16: one transition added before the app section.
- 17: title 48, meta 149, excerpt 21 words (house ceiling 25 wins over the
  skill's "exactly 25"); one H1, nine H2, six H3; zero em dashes; US spelling.
- 18: one "say," and one "for instance", no repeated humanizer.
- Quotes stay straight in the markdown source, as in every earlier draft;
  the publish step sets the page typography.
- Versions v0, v3 and v13 kept in the session scratchpad, not in the repo.

## Image

- Prompt used (verbatim from the feature-image block): the concertina strip
  of matching portrait prints of a navy rain jacket, unfolded by a young
  Chinese art director's hands in a Hong Kong production office, window light
  from camera left, 50mm at f/4, warm color-negative grade, no text.
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: one attempt, accepted.
- AI-tells checklist run against the final frame: single window light, one
  shadow direction; hands with five fingers each, natural knuckles, short
  nails; no text, numbers or logos; uniform print shapes in sequence; no
  bokeh halos, no glossy skin, books unaligned, lived-in background.
- Saved to: public/Images/howto-carousel-post-guide.webp (1536 x 1024,
  160 KB, sharp webp quality 78, no enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (tools appear only as the category "a scheduling or publishing tool") |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, ledger, watch.csv) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 5 of 5 |

## Sources

- New figures added to the ledger, with both check dates: brief 67 block
  appended by `append-ledger.mjs` (Instagram feed and profile display, Reels
  not allowed in carousels, and the third read of the brief 54 and 63 rows),
  check 1 and check 2 both 2026-10-12.
- Rows added to the do-not-publish log: four (engagement multiples, 9 images,
  carousel video length, swipe behavior on LinkedIn).

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: Carousel of 2 to 8 slides when rendered, JPEG on the way out, 2,200
  characters (/help/instagram); carousel of 2 to 8 slides, JPG, PNG and GIF
  up to 10 MB not WebP, 3,000 characters, no video to LinkedIn yet
  (/help/linkedin); Feed portrait and Post, portrait at 1080 x 1350 marked
  Best (/help/assets-library).
- Spec rows published under deviation 7: none (Western platforms, primary
  help pages).
- Claims cut and which section is now thinner: see the research gate list;
  the slide plan section carries guidance by role instead of a count.
- Briefs amended because the research or the live site proved them wrong:
  none needed. The brief's app facts match the help center, and no later
  brief repeats a wrong figure.
- Live articles corrected because this piece contradicted them: none. The
  guide agrees with instagram-post-sizes-2026 (20 against 10, 4:5 to 1.91:1)
  and linkedin-post-specs (20 photos, 5 MB against 10 MB, no document format
  in the app).
- Rows added to `watch.csv`: one, due 2027-01-12, the quarterly recheck of
  the network limits and the help center facts the guide prints.
- Settled fallbacks applied: 4 (prose over the 1,700 floor, made of the
  mandated FAQ, blockquotes and steps, not padded); 12 (no showcase clip, the
  existing localized captures instead).
- Runbook substitutions: none. The how-to hero follows the brief and the
  publish script (`public/Images/howto-<slug>.webp`).

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 48 | 52 | yes |
| Meta description | 149 | 152 | yes |
| Excerpt | 21 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/howtos.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
