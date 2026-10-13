# Run log: 2026-10-14

| Field | Value |
|---|---|
| Brief | 70 (wave two, `scripts/wave2/70-x-image-video-specs.mjs`) |
| Slug | x-image-video-specs |
| Research file | research/x-image-video-specs.md |
| Output | output/x-image-video-specs.md |
| Body word count | 2,872 with tables; 1,924 prose only (brief target 1,500, a floor) |
| Body char count | 14,867 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5), the most capable model in this environment; images gpt-image-2 at high quality |

Unattended draft run, first model attempt (started 00:30 Shanghai). The tree
held no partial work: no row at researched, drafted or quality_passed, and no
output, research or hero file for any not_started row. The earliest
not_started row in publish_date order was brief 70 (publish_date 2026-10-16,
template spec), so this run took it. Nothing is published and nothing is
committed.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Seven claim groups; the multi-picture layout was the one that failed and was cut |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings; no ranking page cites an X page |
| R3 primary sources for every number | yes | 11 X pages: Help Center (6), ads creative specs (1), developer docs (2), X blog (2); hubStudio help for the app |
| R4 Chinese-language web searched first | n/a | X is a Western network; its own pages are primary (`CLAUDE.md`, Wave two) |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform rules read directly; help and docs pages undated, dated by the read |
| R6 triangulated, conflicts published as ranges | yes | Three video ceilings, WebP and media-mix conflicts printed side by side |
| R7 research file written before drafting | yes | Written and row set to researched before any body copy |
| R8 reconciled after drafting | yes | Every draft figure traced to a claims row; table in the research file |

**Gap statement, one sentence:** No ranking page cites X, so none notices that
X's help, developer docs and Premium page give three different video caps,
that WebP is in the docs but not the help, or that the multi-picture crop
ratios everyone prints are not X's.

**Research time spent:** about 1 hour 40 minutes active.

- Figures reused from the ledger: the four-media-item and 280-character rule
  (brief 65, read 2026-10-11), re-read for this piece.
- Claims cut because they could not be sourced: per-layout crop ratios for
  two, three and four pictures; 1200 x 675 as X's size; a header file cap; a
  link card size; an Android Premium cap.
- Conflicts published as a range rather than a single figure: Premium video
  (under 4 hours and 16GB, about 3 hours and 8GB, 125 minutes and 16 GB);
  default video (140 seconds and 512MB on the web, 20 minutes and 8 GB through
  the API); image files (GIF, JPEG, PNG in the help, plus WEBP in the docs);
  media per post (four mixed items in the app, four photos or one GIF or one
  video through the API).
- Captures saved to `research/x-image-video-specs/`: 11 pages at check 1 and
  11 at check 2, text of the rendered page with URL, status and time. A plain
  fetch of help.x.com returns 403, so pages were rendered logged out in
  headless Chromium with every collapsed question clicked open.

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

1. Draft from the brief and the research file: H1 with the target query, a
   55-word answer naming hubStudio once, six tables, seven FAQs, CTA.
2. Weaknesses: (a) the ads intro claimed ads "don't track" the organic rules
   and then called two lengths the same; (b) the "safe build" named MP4,
   which no organic X page names; (c) the 720p sentence drew a conclusion the
   docs don't state; (d) the API refusal message was paraphrased inside
   quotation marks; (e) the self-serve note implied every other format goes
   to an account manager, where X says account manager or support ticket;
   (f) "takes the whole channel off your hands" overstated the service line;
   (g) the opening answer began with a stiff "question" construction;
   (h) the image prompt was still to be written; (i) the intro cited only
   help and docs while the multi-picture section cites X's blog; (j) the
   safe build gave no frame rate, and the web cap is 40 fps.
3. Rewrite fixed (a) to (g): the ads intro now contrasts shape windows with
   named shapes and 512MB with 1 GB; the container is stated as MP4 from the
   ads specs with the organic pages' silence said plainly; the refusal is
   quoted verbatim; the account manager line matches X's wording; the
   service line matches the published LinkedIn guide's phrasing.
4. Production review: brief's mandatory items present (spec table with
   source column, multi-picture section, video organic and ads apart,
   profile and header, ads flagged as ads only, Reviewed date, changelog,
   hubStudio from help only, X post charged with price shown, no video to X).
5. AI-detection pass: no jargon hits; the "safe build" paragraph reworded.
6. Em dash scan: zero. Five blockquotes, each with a Source line and a date.
7. Cadence pass, house variant: no planted errors. One-line paragraphs
   ("Video is the exception.", "Two behaviors to plan for.") set against
   longer ones; lists broken into a three-item practice list and a six-item
   failure list built differently.
8. Check 2: all 11 cited pages re-rendered and searched for the 79 exact
   strings the draft relies on; every one matched. How to Post served the
   challenge twice and was read on the next attempt. R8 table written in the
   research file.
9. SEO: title "X Image and Video Specs for 2026" (32), meta from the
   amended brief (147), excerpt 23 words.
10. Second AI pass: no hollow openers or "not just X" constructions.
11. Human touch: contractions kept where a reporter would use them.
12. Visual formatting: tables aligned, five columns maximum, FAQ as H3s.
13. Five concepts: a four-window card mask over a print (chosen, it makes
    "a window, not a number" literal); hands reordering prints on a mat; a
    pinned wall of prints in mixed ratios; a cardboard frame held over a
    street; a light table with offcuts. Prompt written for a Hong Kong studio
    (the LinkedIn guide used Changsha), no named person.

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

Versions v1 to v18 kept in the session scratchpad. What changed:

- 1 and 2: the ten weaknesses: "doesn't publish a pixel size" said four
  times; the 1200 x 675 paragraph repeated the hero; the intro omitted the
  two blog posts it relies on; "someone's observation, not X's rule" read as
  a formula; the safe build lacked a frame rate; the hero ended on a triad;
  the multi-picture opener ended on a triad; the editor sentence left out
  the Header photo and Profile photo presets the header section needs;
  blockquote URLs sat inline in two quotes and on their own line in three;
  the video answer opened on a hedge.
- 3: intro names the two dated blog posts; 1200 x 675 paragraph tightened;
  "observations, with no X page behind them"; 30 frames a second added to
  the safe build (inside the 40 fps web cap and the docs' 30 or 60).
- 4 and 5: hero and multi-picture triads split; Header photo and Profile
  photo presets added from assets-library.md.
- 6: every blockquote now ends with the URL on its own line; zero em dashes.
- 7 and 10: the video answer now leads with the number, then the caveat.
- 8 and 17: 32 / 147 / 23 words, inside the house ceilings (52 / 152 / 25),
  which override the skill's 60 / 156 and its "exactly 25" excerpt.
- 11: hostile read found subheads concrete, the Reviewed date and changelog
  in place, and no price question left open beyond the rule that the app
  shows the price before each send.
- 12: two bulleted lists against eight prose sections; well under half.
- 13 and 14: no jargon or hollow openers found; no performing closers.
- 15: blockquotes identical in shape; first-person practice appears once,
  labeled as practice.
- 16: no padding added; the page already breaks every few paragraphs.
- 18: "X doesn't" had become a tic (four uses); one rewritten.
- House style kept over the skill on two points: straight quotes in the
  Markdown source and no serial comma, as in every published draft.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT
  paragraph in `output/x-image-video-specs.md` (Hong Kong studio, hands
  sliding a hand-cut black card with four windows across a street print,
  35mm at f/4, single window light, Portra-like grade, grain).
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: one attempt, accepted.
- AI-tells checklist run against the final frame: hands have five fingers
  each with natural creases; one light source with one shadow direction
  (the light reads from the left rather than the right named in the prompt,
  consistent across mug, card and hands); no readable text on prints, boxes,
  ruler or tools; no melted objects; shelf boxes irregular; grain present;
  negative space on the left third for type.
- Saved to: `public/Images/insight-x-image-video-specs.webp` (1536 x 1024,
  117,692 bytes, webp quality 78, no enlargement). PNG kept in the session
  scratchpad only.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (size guides referred to only as a category) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, ledger, watch row, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 5 of 5 |

## Sources

- New figures added to the ledger, with both check dates: 11 rows under
  "Added 2026-10-14 (ledger rows from brief 70)", checks 1 and 2 both
  2026-10-14.
- Rows added to the do-not-publish log: 5 (1200 x 675, multi-picture
  ratios, header cap, link card size, Android Premium cap).

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. hubStudio app facts come from `src/content/help/x.md` and
  `assets-library.md` only.
- Spec rows published under deviation 7 (modal value, counts, label): none.
  X is a Western network with readable pages; every row is primary, with a
  visible Reviewed date.
- Claims cut and which section is now thinner: the multi-picture section
  prints what X says and that X publishes no layout, plus a labeled
  production practice, instead of per-layout ratios; no link card row.
- Briefs amended because the research or the live site proved them wrong:
  brief 70 (module `scripts/wave2/70-x-image-video-specs.mjs` and the
  rendered `briefs/2026-10-16-x-image-video-specs.md`, kept identical to a
  fresh render): the verdict, the angle, the multi-picture must-include, the
  multi-picture asset and the meta description no longer ask for how X crops
  two, three and four pictures, because X publishes no such geometry. Later
  briefs checked: brief 72 mentions the Image editor's dashed X two-picture
  crop, a documented app feature, not X's geometry; no amendment needed.
- Live articles corrected because this piece contradicted them: none. The
  one live X row (plan-week-social-posts: 280 characters, 2 to 4 pictures,
  no video yet) agrees.
- Rows added to `watch.csv`: 2027-01-16, x-image-video-specs, quarterly
  recheck of every X row and the hubStudio help facts.
- Settled fallbacks applied: 4 (prose over the 1,500 floor, made of the
  conflicts and tables the brief requires; nothing padded, nothing cut to fit);
  12 (no showcase clip; the page reuses the help center's localized X
  captures).
- Runbook substitutions: help.x.com answers a plain fetch with a 403
  challenge, so captures are rendered text from headless Chromium rather than
  served HTML, as the Facebook spec run did for Meta's help pages. No X
  platform page exists under `/solutions/platforms/`; the asset brief lists
  the publishing page of the app and the X help article in its place, and the
  specs hub `/resources/specs` as the cluster hub.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 32 | 52 | yes |
| Meta description | 147 | 152 | yes |
| Excerpt | 23 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
