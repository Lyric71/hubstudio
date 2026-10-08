# hubStudio positioning and messaging (binding)

The single source for what hubstudio.ai says and how the site is organized.
Written September 29, 2026, for the site reorg around two offers. Every page,
component, meta tag, alt text and llms file follows it. When a page disagrees
with this file, the page is wrong.

## The one idea

hubStudio makes images, video and social content with AI. **Use the app and
make it yourself, or have our studio make it for you, inside the app or
outside it.** We propose both, and a customer can move between them.

Order of importance on the site: **the app comes first** (the primary action
everywhere is creating an account), **the studio comes a close second** (the
secondary action everywhere is sending a brief). Neither is an afterthought.

## The two offers

### The hubStudio app

A web app where a person or a team makes images and video with the AI engines
of several makers, edits them, turns them into posts, gets them approved, and
publishes or delivers them to clients. Self-serve, open sign-up.

- Address: `https://hubstudio.bearingbridge.com` (sign-up `/signup`, sign-in
  `/login`). Use the constants in `src/lib/links.ts`, never a hard-coded URL.
- Help center: `/help` on this site (synced from the app repo, do not edit it
  by hand).

### The hubStudio studio

The human creative production house: senior art directors, designers,
retouchers, motion designers, writers and AIGC specialists who take a brief and
deliver finished work. Twenty service lines. Brand-trained models and GPU
pipelines run by the studio team. Hong Kong headquarters; studios in Shanghai
and Changsha and a team in the Philippines; an office in Paris.

## The three ways to work (locked names)

Use these names verbatim wherever the choice is presented. Never number them.

| Name | Who makes the work | What the customer does | Primary action |
|---|---|---|---|
| **Use the app** | The customer's own team | Creates, edits, publishes in hubStudio, pays as it goes from a prepaid balance | Create your account |
| **Studio + app** | Our studio, working inside hubStudio | Reviews, comments and approves in the app (Validation, Client space), downloads, publishes | Send a brief |
| **Studio only** | Our studio, outside the app | Sends a brief, receives finished files; no account needed | Send a brief |

How **Studio + app** works, and only this (it is what the app really supports):

- **In our workspace.** The studio works in its own hubStudio team, tags the
  work "Made for" the customer, and gives the customer's people client logins.
  They see a **Client space** with only the finished work made for them: they
  download it, comment, and approve or send it back in **Validation**. They
  never see prompts, engines or costs, and they hold no balance.
- **In the customer's workspace.** The customer has its own hubStudio team and
  adds our creatives as members. We create from their workspace and their
  balance; their admins approve in Validation; everything stays in their
  History and Assets Library when the project ends.
- Versions (v1, v2 and so on) stay on one approval thread, and nothing on that
  thread can be deleted, so the record of who approved what is permanent.

There is **no "order from the studio" button inside the app**. Never claim one.
A studio engagement starts with a brief sent through `/contact`.

## Money: how to talk about it

- **Never say "credits" or "tokens".** The app is paid from a **prepaid
  balance held in real currency**: you top up, and each run is charged against
  that balance at the price shown before it runs.
- Payment: card, Alipay or WeChat Pay. Automatic top-up is optional. An invoice
  for every top-up. One shared team balance, with an optional daily spending
  limit per person.
- True and usable: no subscription, no seat fees, creating an account costs
  nothing, you pay only for what you run, the price is shown before every run,
  a failed run is never charged, the balance does not expire, the Image editor,
  the Image anonymizer, Campaigns, Validation and publishing to LinkedIn, Instagram,
  Facebook and TikTok cost nothing to use. Each post sent to X through
  hubStudio is charged, with the price shown before you send. Storage and
  downloads carry a small charge against the balance.
- Failed runs: a run that fails is not charged. One exception, stated where
  the claim is detailed (FAQ, pricing): a video clip longer than 15 seconds can
  time out after the engine has billed it, and the form warns about it. Gemini
  Omni Flash is billed after the render, so its price is not shown before.
- **No amounts, ever.** No dollar or yuan figures, no "from $X", no rate per
  image or per second, no markups, no "1 credit = 1 USD". The studio's rates are
  never published either (asset-based, project-based or retainer, quoted after
  a brief; a written proposal within 48 hours).
- **One exception, the onboarding offer** (owner decision, October 8, 2026):
  `/services/onboarding`, its booking page, its payment page and its card on
  `/solutions` print its price: 500 USD, one payment, 250 USD of it back in the
  team’s wallet (the prepaid balance). French pages show 500 € and 250 €,
  Chinese pages 3,500 CNY and 1,750 CNY (in yuan). No other amount anywhere, and the
  payment provider is never named.

## App facts you may use (and nothing beyond them)

- **Explore:** a gallery of every image and video engine, one card each, with
  search, filters by kind, maker and job, and sorting. Makers offered: OpenAI,
  Google, Black Forest Labs, ByteDance, Kling, Alibaba, xAI, MiniMax, Meta.
  Engines include ChatGPT Image 2, Nano Banana 2 and Pro, FLUX.1 Kontext Pro
  and Max, FLUX Pro 1.1 and Ultra, Seedream 4.5 and 5.0 Pro, Meta Muse, Grok
  Imagine (image); Veo 3.1 Fast, Kling 2.5 Turbo, 2.6 and 3.0, Wan 3.0, Grok
  Imagine 1.5, Seedance 1.0 Pro Fast, 2.0 and 2.5, MiniMax H3, Gemini Omni
  Flash (video). The list changes as engines ship; say "and more as they
  ship", never promise a count.
- **Image studio:** text to image, edit up to four source pictures (engine
  dependent), upscale and restore; up to 4K, 1 to 10 images a run, shape,
  format, transparent background, mask; "Improve with AI" rewrites the prompt
  for the chosen engine; several runs at once, each in its own tab.
- **Video studio:** text to video, image to video (start frame, or start and
  last frame), reference to video (pictures, clips and sound); up to 4K, up to
  30 seconds on some engines, generated sound.
- **History:** every render by you and your team, with prompt and engine;
  reuse a prompt, run a variation, tag the client.
- **Assets Library:** the team's files in folders, with tags, versions, search
  and bulk actions (files up to 50 MB). **Image editor** (free, in the
  browser): crop to network formats, light and color, looks, text, arrows and
  shapes, a logo or watermark, 60 steps of undo, save as copy or new version.
  **Image anonymizer** (free, in the browser, nothing uploaded): shows the
  hidden data in a picture (camera data, location, content credentials) and
  rebuilds it clean. Do not lead with "strips AI markers"; frame it as privacy
  and clean delivery files.
- **Campaigns** (added October 8, 2026): one launch's files under one name
  (up to 120 characters, unique in the team) and an optional brief (up to
  4,000 characters): renders, edited videos, shorts, posts, uploaded
  documents. A campaign points at Assets Library files and copies nothing; a
  file can sit in several campaigns; removing it or deleting the campaign
  leaves it in the library; a new version stays in; a file deleted from the
  library leaves every campaign. Filled from its page (Add assets), from the
  library (Actions menu or ticked rows), or from the Campaign menu of every
  creation form; listed by name in the side menu; a Campaign filter in the
  library. A LinkedIn, Facebook or X post can be drafted from a campaign: it
  reads the brief, the file list (name, type, prompt of a render) and the
  text of up to 20 documents, never the pictures themselves. No Ask, no
  agents in hubStudio. Rights row Campaigns (under Assets Library); clients
  never see Campaigns. Free to use.
- **Social publishing:** LinkedIn (profiles and company pages), Instagram
  (professional accounts: feed, Story, Reel), Facebook (pages), TikTok (Beta:
  always label it Beta), X (threads, up to four pictures). A brief goes to
  "Draft with AI" or you write the post yourself; pictures and carousels;
  publish now or schedule, up to 20 accounts per post; a queue with automatic
  retries; re-purpose one post for the other networks.
- **Skills:** reusable instructions that shape "Improve with AI" and post
  drafts: My skills, Team skills written by admins, and a Catalog (packshot,
  lifestyle scene, consistent character, text inside an image, camera moves,
  vertical video ad, a posting format per network, and more).
- **Validation:** send an image, video, post, file, text or link to a teammate
  or a client for approval; they validate or send it back with a comment;
  versions on one thread; a post waiting for approval is locked.
- **Teams and roles:** Admin, Creator, Viewer, Client. Invitations, join
  requests, a daily spending limit per creator, modules switched on or off per
  person. Working alone is simply a team of one.
- **Clients:** the team adds client companies and gives their people logins;
  work tagged "Made for" a client appears in that client's Client space.
- **Account:** email code at sign-up, optional sign-in code, trusted browsers,
  My Connections for social accounts, voice input in any text box, light or
  dark theme, a weekly digest email of what changed (and an email when a new
  AI model is added). Balance pages: top-up by card, Alipay or WeChat Pay,
  promotional codes, automatic top-up (card only, threshold, amount, daily
  limit), an invoice per top-up (view online or PDF), and a Usage log of every
  paid action (admins see the whole team).
- **Text models (writing):** wherever AI writes (post drafts, captions,
  Improve with AI), a model picker offers Quick, Balanced or Best, or any
  model from the full list; the pick is remembered per feature on that
  browser. Model benchmarks compares the text models the team allows on public
  scores (Intelligence Index, LMArena and others), each linked to its source,
  never an estimated score. My models switches engines and models off for one
  person. Never print the costs shown on those pages.
- **Languages:** the app runs in English, French and Chinese, from the sign-in
  page on; each person picks their own, and an admin chooses which ones the
  team offers. Only the interface changes: prompts, posts and files stay in
  the language they were written in. (Corrected October 8, 2026, from the
  help center: the app is no longer English only.)
- **Partners:** commercial partners open accounts for the customers they bring
  and earn a commission on what those accounts spend (no rates on the site).

Never claim for the app: brand kits, DAM or PIM connectors, an API, SSO, a
mobile app, private GPUs, custom model training, a free plan or free trial,
uptime figures, customer counts, or any feature not listed above. Those either
do not exist or belong to the studio.

## Studio facts you may use

- Senior art directors lead every brief; AIGC production underneath; some
  assets are shot, some generated, most mix both, decided asset by asset.
- Twenty service lines (see `/services/design/*`), platform work for Western
  and Chinese networks and marketplaces (see `/solutions/platforms/*`).
- Brand-trained models and GPU pipelines, run by the studio team.
- A producer reads every brief within one business day; a written proposal
  within 48 hours; provenance recorded per asset.
- Founder: Cyril Drouin, former CEO at Publicis.
- Case studies in `src/data/case-studies.ts` are the only client proof. Never
  invent a client, a quote, a number or a result.
- Never cite a count of markets or countries. Never name a competitor.

## Retired, never mention

- **hub4You.** Retired completely. No page, link, mention, schema or alt text.
  Anything it used to describe is either the hubStudio app (self-serve) or the
  studio (custom work). `/hub4you` redirects to `/app`.
- "Quotation Engine" as a public call to action (the gated tool stays internal).
- "Not software" claims in `llms.txt` and `/llm-info`: hubStudio now sells
  both an app and a studio.

## Voice and house rules

- American English, newsroom register: short sentences, plain words, concrete
  facts, contractions welcome. Second person for the app ("you make"), first
  person plural for the studio ("we make").
- Headings in sentence case, one Playfair italic accent word per headline
  (`<span class="accent">word</span>`).
- No em dash character (U+2014) anywhere, including comments. No Chinese
  characters or full-width punctuation outside `zh` content.
- No ordinal numerals in cards, steps or repeated blocks (no `01`, `02`, no
  visible `<ol>` numbers).
- Body copy at `var(--type-body)` (17px), line-height about 1.6.
- Strip AI tells: no "seamless", "leverage", "robust", "unlock", "elevate",
  "delve", "in today's fast-paced world", "it's not just X, it's Y", no stacked
  rhetorical triads, no well-turned closing line on every section.
- Every rewritten page goes through the `content-quality-us` 18-pass loop.

## Site map

| Section | URL | Role |
|---|---|---|
| Home | `/` | Both offers, app first |
| App | `/app` | App overview, sign-up |
| | `/app/create` | Explore, Image studio, Video studio, Skills |
| | `/app/publish` | The five networks, scheduling, re-purposing |
| | `/app/review` | Validation, Client space, teams and clients |
| | `/app/library` | Assets Library, with a short Campaigns section |
| | `/app/campaigns` | Campaigns |
| | `/app/image-tools` | Image editor, Image anonymizer |
| | `/app/video-tools` | Video editor, Shorts autopilot |
| | `/app/engines` | Every engine by maker |
| Studio | `/studio` | Studio overview, the three ways, the twenty services |
| | `/studio/with-the-app` | The Studio + app offer |
| | `/studio/ai-excellence` | How the studio uses AI (moved from `/the-studio/ai-excellence`) |
| | `/services/design/*` | The twenty service lines (URLs kept) |
| Solutions | `/solutions`, `/solutions/*` | Who it is for, consulting, training, AI production, platforms (URLs kept) |
| Pricing | `/pricing` | App (prepaid balance) and Studio (asset, project, retainer), no amounts |
| Work | `/work`, `/work/*` | Case studies |
| About | `/about`, `/about/team`, `/about/team/*` | Company, founder, creative talents (moved from `/the-studio/*`) |
| Partners | `/partners` | Studio referrals and app partners (moved from `/partner-program`) |
| Resources | `/resources/*`, `/help` | Insights, how-to, glossary, rights, help center |

Header: App · Studio · Solutions · Work · Pricing · Resources, with **Sign in**,
**Create account** (primary) and **Send a brief** (secondary).
