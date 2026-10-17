# Run log: 2026-10-17

| Field | Value |
|---|---|
| Brief | 75 (wave two, how-to) |
| Slug | word-by-word-video-captions |
| Research file | research/word-by-word-video-captions.md |
| Output | output/word-by-word-video-captions.md |
| Body word count | 2,223 prose only (blockquotes, FAQ and figure alt text included); 2,660 with tables. Target 1,700 is a floor |
| Body char count | 15,006 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5), the first model of the runner's chain, for research, drafting and both quality loops; gpt-image-2 at high quality for the image. No cheaper path was offered or taken |

Queue: 75 rows published, 67 not_started, none at researched, drafted,
quality_passed or image_ready when the run started. Brief 75 (publish_date
2026-10-22) was the earliest not_started row. The run log under
`logs/runs/2026-10-17-draft.txt` showed a fresh start, so nothing was resumed.
Uncommitted edits already in the tree (editorial/CLAUDE.md, check-queue.mjs,
notify-publish.mjs, run-daily.ps1, the 2026-10-16 publish run log) are not
this run's and were left as they were.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Listed in the research file above the claims table |
| R2 SERP mapped, four phrasings minimum | yes | Five queries: add captions to video; word by word / karaoke captions; auto captions for reels and tiktok; how to make an SRT file; captions safe zone tiktok |
| R3 primary sources for every number | yes | W3C (WCAG 2.2 and Understanding 1.2.2), YouTube Help, LinkedIn Help, TikTok Newsroom; app facts from the help center only |
| R4 Chinese-language web searched first | n/a | No China claim: the piece covers Instagram, TikTok, Facebook, YouTube and LinkedIn |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Claims table |
| R6 triangulated, conflicts published as ranges | yes | No conflicting figure; every third-party pixel or viewing figure cut instead |
| R7 research file written before drafting | yes | Written before the draft; row set to researched first |
| R8 reconciled after drafting | yes | Table in the research file; six sentences rewritten or cut |

**Gap statement, one sentence:** The ranking pages are caption-generator
landing pages that sell upload, transcribe and export, quote viewing
statistics with no method, and skip placement against the network's buttons,
correcting names and numbers, burned-in captions against a subtitle file, and
keeping the audio on your own computer.

**Research time spent:** about 60 minutes.

- Figures reused from the ledger: YouTube automatic captions warning (brief
  53 row, re-fetched); the TikTok template and Meta safe-zone rows (briefs 32
  and 57) for the words-only sentence on where the network's interface sits.
- Claims cut because they could not be sourced: every sound-off and
  engagement statistic, vendor accuracy percentages, third-party TikTok pixel
  insets, the Facebook SRT naming rule (Facebook Help and Meta Business Help
  returned HTTP 400), Instagram caption behavior (help.instagram.com serves a
  shell), the languages the speech models recognize.
- Conflicts published as a range rather than a single figure: none.
- Captures saved to `research/word-by-word-video-captions/`: wcag22.html and
  understanding-1-2-2.html (long dashes replaced by a spaced hyphen per the
  2026-10-08 rule), source-text-2026-10-17.md (verbatim text of the YouTube,
  LinkedIn, TikTok newsroom and TikTok ads pages; their raw HTML ran to 1.5 MB
  each and was not kept).

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

- 1: draft from the brief, research file and the two help articles, ten H2s,
  three tables, three existing localized captures, one prompt block.
- 2: weaknesses found: an unsourced time in the lede ("takes a minute"); "no
  subtitle file can carry" a word highlight (too broad); "captions placed on
  a wide frame move" (not in the help); "a brand name comes out as the
  nearest ordinary words" and "numbers written as words" (no source); the
  W3C note attributed to the WCAG 2.2 glossary instead of the Understanding
  page; "the first thing the standard asks" (1.2.2 is not the first
  criterion); the LinkedIn page age phrased awkwardly; an over-long FAQ line;
  the TikTok auto captions fact unused where it answers the burned-in
  question; excerpt over 25 words.
- 3: each fixed: rewritten to what the sources print, the help's own fact
  (zones show once the video is framed) used for the framing step, the TikTok
  2021 launch post added.
- 4: production review: every app fact traced to assets-library.md or
  shorts-autopilot.md; "Usage" used, never "Credits"; TikTok labeled Beta;
  no claim that the Video editor publishes to YouTube or LinkedIn.
- 5 and 10: AI-tell scans (seamless, leverage, robust, delve and the rest):
  none. 
- 6: zero em dashes; six blockquotes, each with a source, a date and a
  method or scope.
- 7: ran as the cadence variant, not the planted-error variant. No
  deliberate errors. Sentence lengths varied, single-line paragraphs added
  ("Where a platform takes a file, send one."), the triads in the corrections
  paragraph and the service line broken.
- 8: source check 2 re-fetched all six cited URLs on 2026-10-17 and found
  every quoted string verbatim (the WCAG SC text after stripping its inline
  link). R8 reconciliation written in the research file.
- 9: title 43, meta 147 (both the brief's approved values), excerpt rewritten
  to 23 words.
- 11 and 12: hand read; tables aligned to five columns at most.
- 13: five concepts considered (a phone with a lit caption line; an editor at
  a monitor touching the caption band; a corrected transcript still life; a
  presenter seen from behind the camera; a hand and pencil at a monitor
  bezel). Chosen: the editor touching the blurred caption band, the human
  check the article argues for, set in Changsha (the previous how-to was
  Shanghai).

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
[x] Final        : fold the SEO content into the markdown
```

- 2 and 3: ten weaknesses, all fixed: "The two routes give the same
  captions" was inaccurate (different models), rewritten as the same panel,
  looks and corrections; the burned-in section opened on "It depends", now
  opens on the answer; the TikTok sentence was tangled; the tuning paragraph
  was one long list, split; the free-route "best for" cell was a triad;
  "names, product terms and numbers" repeated four times, varied; the
  checklist line on Checks named the wrong place; the studio line read as
  "people", now first person plural per the positioning; the closing line of
  the burned-in section performed, cut back; the corrections paragraph
  opened with an imperative triad.
- 11: hostile read: subheads all questions a buyer types; credibility anchors
  are W3C, YouTube, LinkedIn and TikTok's own pages; cost is answered without
  an amount (free route, or billed with the price shown first).
- 12: bold-label structure only in the step list (a slot requirement); the
  rest is prose.
- 13: broke three patterns: the punchline "a line nobody reads", the service
  triad, the "Pick by what the video does, not by habit" contrast.
- 16: one aside added (Shorts autopilot works best on several minutes of
  someone speaking, from its help article).
- 17: title 43, meta 147, excerpt 23 words (the house ceilings 52, 152 and
  25 override the skill's 60 and 156 and its "exactly 25"); one H1, ten H2s,
  seven H3s in the FAQ; zero em dashes; American spelling. Quote marks stay
  straight ASCII, as in every draft in `output/`: the publish step escapes
  them.
- 18: no repeated humanizer.

Versions v0, v3 and the final were kept in the session scratchpad, not in the
repo.

## Image

- Prompt used (verbatim from the feature-image block): the block in
  `output/word-by-word-video-captions.md`, as amended after attempt 1.
- Confirmed the prompt names no real person: yes, no name of any kind.
- Attempts and what was wrong with rejected ones: attempt 1 carried a
  logo-like mark on the headphone band and near-text scribbles in the
  notebook; the prompt was amended (plain headphones with no markings, a
  blank notebook page) and attempt 2 kept. Attempt 2 had a faint scribble on
  the wall above the monitor that read as pseudo-characters; it was removed
  by cloning a clean wall patch from the same wall with a feathered edge, and
  checked at 1:1.
- AI-tells checklist run against the final frame: one window light from the
  left, one shadow direction; hand on the screen anatomically sound (five
  fingers, natural knuckles); skin textured, flyaway hairs present; no
  legible text, logo or watermark (the caption band and the phone screen are
  blurred light); pothos leaves attached to stems; no duplicated reflections.
- Saved to: `public/Images/howto-word-by-word-video-captions.webp`, 1536 by
  1024 (no enlargement), webp quality 78, 73 KB.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (YouTube, LinkedIn, TikTok, Instagram, Facebook appear only as destinations and as sources of their own rules; the SERP is recorded by publisher type) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, ledger, watch row, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none, file ends on the CTA plus the blocks |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | six blockquotes, all sourced and dated |

`node editorial/scripts/check-draft.mjs editorial/output/word-by-word-video-captions.md`:
all hard checks passed.

## Sources

- New figures added to the ledger, with both check dates: the brief 75 block
  in `sources/verified-sources.md` (WCAG 2.2 SC 1.2.2 and definition;
  Understanding 1.2.2; YouTube 2734698; YouTube 6373554 re-checked; LinkedIn
  a552177; TikTok auto captions launch post), all checked 2026-10-17 twice.
- Rows added to the do-not-publish log: sound-off and engagement statistics,
  vendor accuracy percentages, third-party TikTok caption insets, the
  Facebook SRT naming rule.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: speech models about 40, 80 and 250 MB, a few seconds to a minute per
  minute of speech, 2 GB, 1080p or 720p (/help/assets-library); free
  listening best under 20 minutes, shorts at 1080 by 1920
  (/help/shorts-autopilot).
- Spec rows published under deviation 7: none (no China spec).
- Claims cut and which section is now thinner: Facebook's caption file rule
  (the burned-in or file section names YouTube and LinkedIn only); Instagram's
  own caption feature (not described); measured TikTok insets (the placement
  section points to the TikTok video specs and Instagram Reels and Stories
  specs pages, which print sourced values).
- Briefs amended because the research or the live site proved them wrong:
  none; the brief matched the help center.
- Live articles corrected because this piece contradicted them: none. The
  live Long video to shorts guide and the /app/video-tools page say the same
  things about burned-in captions, the five looks and the SRT download.
- Rows added to `watch.csv`: 2027-01-22, word-by-word-video-captions,
  quarterly recheck of the YouTube, LinkedIn, W3C and TikTok caption facts
  and the two help articles, plus a retry of the Facebook caption help.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its
  hero and the existing localized captures).
- Runbook substitutions: the hero follows the how-to convention
  `public/Images/howto-<slug>.webp` (brief and publish-draft.mjs) rather than
  the insight path in the runbook. No new app capture: the help center has
  none of the Captions panel itself, so the three existing localized
  captures named in the brief are used.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 43 | 52 | yes |
| Meta description | 147 | 152 | yes |
| Excerpt | 23 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/howtos.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Email queued:
