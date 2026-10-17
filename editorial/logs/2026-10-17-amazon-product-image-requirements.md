# Run log: 2026-10-17

| Field | Value |
|---|---|
| Brief | 77 |
| Slug | amazon-product-image-requirements |
| Research file | research/amazon-product-image-requirements.md |
| Output | output/amazon-product-image-requirements.md |
| Body word count | 3,189 with tables; 1,843 prose only (check-draft) against a 1,500 floor |
| Body char count | 18,060 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5) for research, drafting and the quality loop; gpt-image-2 at high quality for the image |

Scheduled draft run of 12:30 (Shanghai). Row 75 was already at image_ready
from the 10:08 run; brief 77 was the earliest not_started row in
publish_date order (2026-10-23). A publish run started at the same minute and
was publishing row 75 in the same working tree; this run touched none of its
files, and its one shared file, `src/data/howtos.ts`, carries only this run's
`dateModifiedISO` line on a different entry (still present at the end of the
run).

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | 28 Amazon claims and 6 app facts in the claims table |
| R2 SERP mapped, four phrasings minimum | yes | five phrasings, four English and one Chinese; three ranking pages opened |
| R3 primary sources for every number | yes | ten Seller Central help articles rendered logged out, plus Amazon's 2018 Quick Start PDF |
| R4 Chinese-language web searched first | yes, as a check | a US marketplace is not China-related; one Chinese SERP phrasing and Amazon's own Chinese-locale page were read anyway |
| R5 every figure interrogated (date, sample, method, who paid) | yes | every row is Amazon's own rule text, page undated, dated by the read |
| R6 triangulated, conflicts published as ranges | yes | three conflicts between Amazon's own pages printed |
| R7 research file written before drafting | yes | written before the first line of body copy |
| R8 reconciled after drafting | yes | four unsupported phrasings cut; the rest matches |

**Gap statement, one sentence:** the ranking pages paraphrase Amazon without
linking it, print numbers no Amazon page carries, and none quotes Amazon's
suppression table, the new "may also modify images" line, the
contains-synthetic-performer tag, or the places where Amazon's own pages
disagree.

**Research time spent:** about 70 minutes active.

- Figures reused from the ledger: the brief 31 readings of the Product image guide and Technical image file requirements, re-read and confirmed.
- Claims cut because they could not be sourced: 2,000 px recommended, 1,600 px zoom, a 10 MB cap, sRGB, nine images, the "ghost mannequin" apparel main, an "auto-replacement" rule from a Chinese trade report, 72 and 1,000 dpi, infographics and size charts as image types.
- Conflicts published as a range rather than a single figure: 500 px on the longest side (three pages) against the shortest side (error codes page); PNG accepted (three pages) against omitted (error codes page); 85 percent (help articles) against 80 percent (2018 Quick Start guide).
- Captures saved to `research/amazon-product-image-requirements/`: 12 check 1 text captures (ten articles, the Chinese-locale guide, the PDF text), 10 check 2 captures, 2 full-page screenshots.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification
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

- 1: full draft from the research file: answer table, main image, files, additional images, categories, rejections, hubStudio, changelog, FAQ.
- 2: weaknesses found: the hero claimed every guide gets three facts right (false: some print 1,600 for zoom); "older" for the error codes page (undated, unsupported); a derived "92 percent of width" reading of the area rule (not in the research file); "less than most sellers assume" (no source); "in any setting" for additional images (Amazon names product in use only); "polices hardest" (opinion, replaced by the 11-of-14 count from the suppression table); "drop out of search entirely" (Amazon says may temporarily remove); the answer block ran 64 words; the size guide numbers that Amazon does not print were not addressed; the changelog miscounted the help articles.
- 3 and 4: all ten fixed; the size guide paragraph added (category level, no source named); answer block cut to 56 words.
- 5 and 10: AI-tell sweep: no banned words in the body ("seamless" appears only as the photographic term in the image prompt), tidy section-closing aphorism on the "may modify" passage replaced with a fact from the same page.
- 6: zero em dashes; four blockquotes, each with a Source line, a date and the method stated as "read from Amazon's own help article" or "two dated captures compared".
- 7: ran as the cadence variant, not the planted-error variant. One-line paragraphs ("Build to 85. It passes both."), a long conflict paragraph next to it, the suppression intro and the upload paragraph re-cut, the repeated "whole, once and as one unit" triad varied three ways.
- 8: check 2: the ten cited articles re-rendered the same day, every body text identical to check 1; the PDF re-fetched byte-identical; a script found all 28 quoted strings in the check 2 text. R8 written in the research file.
- 9: title 42, meta 148, excerpt 23 words (brief values kept; excerpt written).
- 11 and 12: tables aligned, five columns maximum, no ordinal in any repeated block.
- 13: five concepts (a single shoe set facing left at 45 degrees on a sweep; a gray card on white seamless; a loupe over a contact sheet; a colorimeter on paper; a retoucher's corner check), the first chosen because it stages Amazon's most specific rule by a real hand in a Changsha studio.

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

Changes made in place (versions v0, v3 and v18 kept in the session
scratchpad): the "which is why the guide marks naming optional" clause cut
(causal claim not on Amazon's page); the "whole, once and as one unit" triad
varied in the answer block and the first FAQ; the suppression section intro
rewritten so the practice column is labeled as ours; "Not every failure waits
for review" added as the one mid-page transition; "Improve with AI rewrites
your prompt with it". Hostile-reader checks: no pricing question applies to an
Amazon spec page and no amount appears; the Reviewed date sits under the first
H2 and the changelog at the foot. Curly quotes: straight quotes kept to match
every draft in `output/` (the publish step renders them). SEO fields were not
loosened: 42 / 148 / 23 words.

## Image

- Prompt used: the IMAGE PROMPT block of the draft, verbatim (attempt 2 text: the tape roll line reads "a roll of plain matte black gaffer tape with a bare unprinted cardboard core").
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: attempt 1 had a faint logo-like mark inside the tape core; two local patches left visible rectangles, so it was rejected and the prompt amended. Attempt 2 kept.
- AI-tells checklist run against the final frame: hands anatomically right (five fingers each, knuckle creases, short nails), one softbox and one shadow, no text, logo or pseudo-writing anywhere (tape core blank), sneaker unbranded, paper with real creases and specks, no bokeh halos.
- Saved to: `public/Images/insight-amazon-product-image-requirements.webp` (1536 x 1024, 62 KB, webp quality 78).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (ranking pages appear in the research file by page type only) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, ledger, watch.csv) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none, file ends on the CTA |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none in the draft |
| Statistics in blockquotes with source, date and method | four blockquotes, all sourced and dated |

## Sources

- New figures added to the ledger, with both check dates: section "Added 2026-10-17 (ledger rows from brief 77)", eleven rows, check 1 and check 2 both 2026-10-17.
- Rows added to the do-not-publish log: five.

## Closed in this run

- First-party figures used: none. App facts from `src/content/help/create-an-image.md`, `skills.md` and `assets-library.md`.
- Spec rows published under deviation 7: none; Amazon's help is readable and primary.
- Claims cut and which section is now thinner: the dpi line (files table has no resolution row); the "auto-replacement" report (the rejections section carries Amazon's own "may modify" wording instead); infographics and size charts (the additional images section names Amazon's variant codes only).
- Briefs amended because the research or the live site proved them wrong: brief 77 (module `scripts/wave2/77-amazon-product-image-requirements.mjs` and the brief file): ChatGPT Image 2 has no transparent background (create-an-image.md: Transparent is on the 2.5 engines only), and no Amazon page lists infographics or size charts as image types. Brief 83 (module and brief file) repeated the transparent error and now says the 2.5 engines only. `generate-briefs.mjs --check` renders both identically to the files on disk.
- Live articles corrected because this piece contradicted them: the AI white-background packshot how-to said in its FAQ that neither platform says how fill is measured; Amazon's clothing page counts the total image area. The FAQ answer (page body and FAQ schema) now names the clothing page's area rule; the French and Chinese dictionary entries were re-keyed and translated in three passes (pass 1 literal, pass 2 native rewrite, pass 3 finish: FR "seule la page d'Amazon consacrée aux vêtements retient la surface, et pour eux seuls"; ZH a native parenthetical on the clothing page's area rule); its draft in `output/` updated; `dateModifiedISO` 2026-10-17 in `src/data/howtos.ts`; `npm run i18n:guard` passes.
- Rows added to `watch.csv`: 2027-01-23, amazon-product-image-requirements, the quarterly recheck of every article cited and of the error codes conflict.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its hero and, if the publish step wants app captures, the existing localized help captures named in the asset brief).
- Runbook substitutions: the hero path follows the spec family (`insight-<slug>.webp`), as the brief says; Seller Central pages are rendered in a headless browser because a plain fetch returns only the application shell (ledger, brief 31).

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 42 chars | 52 | yes |
| Meta description | 148 chars | 152 | yes |
| Excerpt | 23 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
