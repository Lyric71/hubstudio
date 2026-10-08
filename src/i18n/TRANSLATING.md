# Translating hubstudio.ai into French and Chinese

Every English page of this site ships in French (`/fr/<native slug>`) and
Simplified Chinese (`/zh/<English path>`). This guide is binding for every
change that adds or edits an English page: an editorial publish run, a help
sync, a changelog sync, a page built by hand. Nothing goes live in English
only.

The glossaries next to this file, `glossary/fr.md` and `glossary/zh.md`, hold
the terms already settled in the shared dictionary. Read the one for your
language before translating anything.

## How the site is translated

- The English `.astro` pages are the only page sources. A French or Chinese
  page is the English page rendered, then rewritten by the middleware from a
  dictionary keyed by the English text (`src/i18n/core.ts`).
- Dictionaries: `src/i18n/dict/<fr|zh>/pages/<page-id>.json` per page
  (`home`, `pricing`, `resources/insights/<slug>`...), `common.json` for a
  sentence found on three pages or more (header, footer, menus, shared
  blocks), and the hand-written `js.json` (strings the client scripts ask for)
  and `server.json` (API answers).
- `src/i18n/routes.ts` gives every English page its French address. A page
  missing there has no French or Chinese version at all.
- Opt a subtree out with `data-no-i18n` (a name, a code, a quoted English
  source). Use it sparingly: it is never a way to skip a translation.

## The steps, for every new or changed page

Run from the repository root.

1. **French address.** Add the page to `src/i18n/routes.ts`: an insight to
   `ARTICLES`, a how-to to `HOWTOS`, a help article to `HELP`, a design
   service to `DESIGN`, a platform page to `PLATFORMS`, anything else to
   `FR_PATHS` directly; case studies and team pages keep their slug (`WORK`,
   `TEAM`). Keep each map in alphabetical order. The slug is native French,
   written the way a French editor would title the page, not a word-for-word
   rendering of the English slug: lowercase, words joined by hyphens, accents
   stripped (é to e, ç to c, œ to oe), apostrophes become hyphens
   (`l-erreur-d-adobe-sur-l-ia`), sixty characters at most. Brand and platform
   names stay as they are (`douyin-specifications-video-...`). **A French slug
   never changes once it is live**; if one ever must, add a 301 from the old
   address in `vercel.json` in the same commit.
2. **Extract.** `npm run i18n:local -- extract --context .i18n-work/ctx`
   It reads every English page from a dev server of this checkout (started by
   the command when none runs, stopped at the end), signs the gate cookies so
   the password-gated pages are read signed in as well, adds every new
   sentence to the dictionaries as an empty entry, drops the sentences gone
   from the pages, and writes the translator's context (reading order, tags)
   to `.i18n-work/` (ignored by git). Always extract every page, not `--only`:
   a new article also shows on the home page, the insights index and the
   insights layers, and those pages get new cards to translate too. Give the
   command up to ten minutes. If it reports that the dev server started before
   the last `.env` change, run it again with `--restart`. In Git Bash, prefix
   any command that passes a path (`--only /about`) with `MSYS_NO_PATHCONV=1`.
3. **See what is left.** `npm run i18n:tx -- pending fr` and
   `npm run i18n:tx -- pending zh` list every dictionary with an empty entry.
4. **Translate every pending dictionary** with the three passes below, one
   language at a time per translator. French and Chinese may run in parallel
   (two subagents), each touching only its own language.
5. **Check.** `npm run i18n:local -- check` must print
   `✓ every page is translated in French and Chinese`, and
   `npm run i18n:guard` must print its ✓ line. The guard also runs before
   every build: it fails on an English page without a French address, a
   non-native slug, an empty dictionary entry or a missing localized capture.
6. **Screenshots** (see below) when the page shows the app.
7. **One commit** holds the English page and everything its translation
   touched: `src/i18n/routes.ts`, `src/i18n/dict/`, any `.fr`/`.zh` capture and
   `src/i18n/localized-images.json`.

## If the translation cannot be finished

The change does not ship. A run that cannot extract (no dev server), cannot
translate, or cannot get `check` to pass stops before the commit and says why
in its log: an editorial row stays at `image_ready` and its email reports the
failure. Never commit an English page whose French and Chinese are not done,
never paste the English into a dictionary to make the check pass, never leave
a placeholder or a marker in a dictionary. The no-TODO rule
(`editorial/CLAUDE.md`, "No TODO leaves a run") applies to translations.

## The three passes

The method is the `/deep-translate` skill
(`~/.claude/skills/deep-translate/SKILL.md`, with `HUMANIZER.md` for the
AI-writing tells to strip). In an unattended run its "show and pause" steps
are replaced by the pass files and `changes.md` described here.

Target: a native business journalist wrote the page from scratch. French at
the level of Les Echos or Le Monde Économie, Chinese at the level of 财经,
36氪 or 晚点 LatePost. Written register, never spoken, never chatty, never
"translated".

For each pending dictionary (`<id>` as printed by `pending`):

1. `npm run i18n:tx -- show <id> <fr|zh>` prints the units still empty,
   numbered in reading order with their tag (`h1`, `p`, `li`, `a`, `button`,
   `title`, `meta`, `json-ld`...) and attribute (`alt` is an image
   description, `aria-label` a screen-reader label, `content` an SEO meta,
   `data-*` text a script shows). Run it without the locale to read the whole
   page first: translate the meaning in context, never unit by unit. For the
   shared dictionary the id is `common` and the locale is required.
2. Write the passes into `.i18n-work/passes/<fr|zh>/<id>/` as
   `{"<index>": "<translation>"}`, values only, never the English keys:
   - `pass1.json`: Step 1, a full native rewrite of every listed unit from
     scratch (re-author; use the English only for what to say). A long page
     may be split: `pass1-a.json`, `pass1-b.json`...
   - `pass2.json`: Step 2, worked from pass 1 alone, without looking at the
     English: restructure, stronger native verbs and idioms, rhythm, no
     English-shaped clauses or noun chains. Only the units it changes.
   - `pass3.json`: Step 3, the native editor's finish on pass 2: hunt every
     last trace of translation, stiff transitions, flat phrasing. Only the
     units it changes.
   - `changes.md`: 10 to 40 lines of the main before/after across the passes,
     by section (`[section] pass1 -> pass3: ... / why: ...`).
   Do the passes for real: on a page written in one go, Steps 2 and 3
   normally change a large share of the units.
3. `npm run i18n:tx -- build <fr|zh> <id>` merges the passes (pass1 < pass2 <
   pass3) into the dictionary, leaving every other entry as it is, and checks
   the whole file against the house rules. Fix each reported problem by
   writing the corrected unit into `pass3.json` (same index) and build again
   until it prints ✓.
4. Re-read the final dictionary once as a native reader: unaccented French, a
   half-width comma in Chinese, a placeholder in the wrong place, a changed
   number, a translated brand, an English word left behind. Fix and rebuild.

A changed page keeps its translations: only the sentences whose English
changed come back empty (the key is the English text). Translate those, reuse
the page's existing wording where the meaning holds, and do not rewrite the
entries around them. `js.json` and `server.json` are filled by hand in the
JSON file itself.

In an editorial run, copy each `changes.md` into the run log under the
article.

## Placeholders

Inline markup is written as numbered placeholders: pairs like `<a1>...</a1>`,
`<strong2>...</strong2>`, `<span3>...</span3>` (translate the text inside;
the pair may move wherever the grammar needs it) and atoms like `<svg4/>`,
`<img5/>`, `<br6/>` (keep, place sensibly). Every placeholder of the key
appears exactly once in the translation, same name and number, properly
nested. Never add a placeholder or any other HTML. An empty pair
`<span1></span1>` is a decoration: keep it where it was. HTML entities in a
key (`&amp;`, `&rarr;`) may stay as they are; everything else is written as
real characters (é, «, 。), never `\u` escapes.

## What stays as is

- hubStudio, its canonical casing, everywhere. Third-party and platform names:
  Google, Meta, OpenAI, Claude, Gemini, Amazon, Shopify, TikTok, LinkedIn...
  In Chinese, Chinese platforms take their Chinese name: 小红书 (RedNote),
  微信, 京东, 天猫, 抖音, 微博. In French they stay RedNote, WeChat, JD, Tmall,
  Douyin, Weibo.
- Numbers, prices, dates, percentages and facts: exact, never rounded, added
  or dropped, but formatted for the locale (below).
- URLs, e-mail addresses, code, file names, model names (gpt-image-2, Veo 3).

## Interface labels match the app

When the copy names something in the hubStudio app (a menu, a module, a
button, a tab, a setting), use the app's own French or Chinese label, so the
text matches the localized screenshots. The glossaries carry the settled
ones. The app's full dictionaries, English-keyed, are in the BearingBridge
repository on this machine:
`C:\Users\cyril\Project\BearingBridgeIntelligence\reporting-site\src\locales\fr.json`
and `zh.json` (search `"Assets Library":` and the like). A term in neither:
choose the one a native professional of the field would use and keep it
consistent across the page.

## House rules

Both languages:

- No em dash, no en dash, no hyphen used as a dash between words. Rephrase
  with a comma, a colon, parentheses or a new sentence. Hyphenated words and
  ranges (10-20) are fine.
- No exclamation mark unless the English has one. No invented claim, no added
  adjective. No competitor named, as in English (`editorial/CLAUDE.md`).
- SEO units (title, meta description, og:*, twitter:*, json-ld name, headline,
  description) are rewritten natively like body copy: title at most 60
  characters (Chinese 30), meta description at most 155 (Chinese 80).
- Alt text: a natural description of the image in the target language.

French:

- Vouvoiement. Sentence case in headings and buttons, never Title Case.
  Buttons and calls to action in the infinitive ("Envoyer un brief").
- Typographic apostrophe ’, never '. Guillemets « » with U+00A0 inside.
- U+00A0 (non-breaking space) before ; : ! ? and %, and inside numbers:
  `1 350`, `12,5 %`.
- Decimal comma; currency after the number: `25 $`, `25 USD` where
  the English writes USD. Dates: 3 octobre 2026, 1er avril 2026. Times:
  `19 h 00`.
- No anglicism where a standard French term exists, no calque ("faire du
  sens", "adresser un problème", "délivrer de la valeur").

Chinese (Simplified, mainland usage):

- Full-width punctuation in Chinese sentences: ，。、：；！？“”‘’（）《》. No
  half-width , . ; : ! ? ( ) next to Chinese characters.
- One half-width space between Chinese characters and Latin letters or digits
  (使用 AI 生成 3 张图片), none next to full-width punctuation.
- Money as 25 美元, 7.25 元人民币; dates 2026 年 10 月 3 日.
- Concise 书面语, short verb-object buttons. No politeness padding, no 吧/呢/哦,
  no 赋能/抓手/闭环 jargon unless the English is that kind of jargon.
- Han characters and full-width punctuation exist only in the Chinese
  dictionaries, never in English or French copy.

## Glossaries

`glossary/fr.md` and `glossary/zh.md` are the settled terms. When a
translation settles a new term a later page will reuse (a new app module, a
new service line), add it to the glossary in the same commit. Never change a
settled term in one page only: change it everywhere or not at all.

## Screenshots

A screenshot of the app on a French or Chinese page shows the app in that
language. Every capture is a real one, taken again with the app's language
cookie and saved beside the English file (`x.webp`, `x.fr.webp`,
`x.zh.webp`); the middleware swaps the file on `/fr` and `/zh` pages when
`src/i18n/localized-images.json` lists it. The tools are in
`scripts/captures/` (see the header of `lib.mjs`). They need the hubStudio app
running from the BearingBridge repository
(`C:\Users\cyril\Project\BearingBridgeIntelligence\reporting-site`,
`npm run dev:hubstudio`, port 4324).

- Help center captures: taken by `node scripts/captures/help.mjs` into the
  BearingBridge repository's `hubstudio-site/help/images`, then carried here
  by `npm run help:sync`, which lists them.
- Captures of app pages on this site (`public/Images/app`, `AppShot.astro`):
  add the shot to `scripts/captures/app.mjs`, then
  `node scripts/captures/app.mjs --only <name>`, which lists them.
- Insight hero images are generated and carry no text, so they have no
  localized variant. Any other image with words in it (a chart, a labelled
  diagram) gets French and Chinese files the same way, or its words move into
  the HTML, where the dictionaries translate them.

A page whose localized capture cannot be taken does not ship the capture in
English on the French and Chinese pages: the change waits, like an
unfinished translation.
