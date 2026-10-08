---
brief_id: 65
publish_date: 2026-10-13
week: 01
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 65: How to plan and schedule a week of social posts in one afternoon

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
| Working H1 | How to plan and schedule a week of social posts in one afternoon |
| Slug | `/resources/how-to/plan-week-social-posts/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/plan-week-social-posts.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/plan-week-social-posts.md` |
| Research file | `research/plan-week-social-posts.md` |
| Hero image | `public/Images/howto-plan-week-social-posts.webp`, referenced as `/Images/howto-plan-week-social-posts.webp` |
| Primary query | `plan a week of social media posts` |
| Secondary queries | `how to batch social media content`, `schedule social media posts for the week`, `weekly social media content plan template`, `how to repurpose one post for multiple platforms` |
| SERP verdict | GENERIC. Scheduler blogs and creator posts promise a week in an hour, then stop at a content-mix list and a calendar grid; none deals with the real afternoon killers (making the visuals, adapting one idea to five networks, getting sign-off, and each network's daily posting caps). |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

The calendar is the easy part. What eats the afternoon is making the pictures and clips, rewriting one idea for five networks and waiting for approval. This guide runs the afternoon in four blocks (plan, make, adapt, schedule) and shows each one in the hubStudio app, with the networks' own limits stated where they bite.

## The research gate, before any drafting

No body copy until `research/plan-week-social-posts.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `plan a week of social media posts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/plan-week-social-posts/` with a date. For a China platform, the
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

- Instagram daily post limit and TikTok daily cap: quote from the hubStudio help (instagram.md, tiktok.md) and confirm on Instagram's and TikTok's own developer or help pages
- Character limits per network (LinkedIn 3,000, Instagram 2,200, TikTok 2,200): from the hubStudio help, confirmed on each network's help page
- No third-party engagement or frequency statistic unless it comes from the network's own business page, dated

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A one-screen plan: the week as a table (day, network, idea, visual, status) built from one campaign brief
- Block one, plan: put the week's files and brief in a Campaign; a LinkedIn, Facebook or X post can be drafted from a campaign (it reads the brief, the file list and the text of up to 20 documents, never the pictures)
- Block two, make: Draft with AI or write it yourself; render pictures, carousels or clips in the post itself, with the price on the button before you press; Shorts autopilot for clips cut from one long video
- Block three, adapt: Re-purpose for other networks (Manually, Draft at once, or Publish automatically); each network's own format skill shapes every draft
- Block four, approve and schedule: Send for validation locks the post until the validator decides; then Schedule with a day and time or a chip, up to 20 accounts per post, read in your own time zone, a queue checked every five minutes with automatic retries
- The networks hubStudio publishes to: LinkedIn, Instagram, Facebook, TikTok (Beta) and X; YouTube is published by hand in YouTube Studio
- Network caps that shape a week: Instagram allows 100 posts a day per account (a carousel counts as one), TikTok caps an account at about 15 a day, X posts sent through hubStudio are charged with the price shown before you send
- What costs nothing: Write it myself, the Image editor, Validation, Campaigns, publishing to LinkedIn, Instagram, Facebook and TikTok

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any scheduler, design tool or competitor
- Print any hubStudio amount, or call the money anything but a prepaid balance in real currency
- Publish a 'best time to post' or posting-frequency figure unless a network's own help or business page states it
- Forget the Beta label on TikTok
- Claim hubStudio publishes to YouTube automatically, or to any network not listed
- Use an em dash or a numbered card

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Week plan table: day, network, idea, visual, status
- Afternoon timeline table: block, what you do, where in hubStudio, what it costs (free or priced before you run)
- Network limits table: network, caption limit, pictures per post, daily cap, how hubStudio publishes
- Existing help captures only (linkedin-brief, facebook-brief, x-brief, instagram-picture); no new capture
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-plan-week-social-posts.webp`.
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

- Publishing in the hubStudio app: `/app/publish`
- Campaigns: `/app/campaigns`
- Social media design service: `/services/design/social-media`
- Holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Plan a Week of Social Posts in One Afternoon (44 chars) |
| Meta description | 152 chars | Plan, make, adapt and schedule a week of posts for LinkedIn, Instagram, Facebook, TikTok and X in one sitting, with approval built in and caps stated. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I plan a week of social media posts?
2. How far in advance can I schedule social posts?
3. How do I turn one post into posts for every network?
4. How many posts a day can I publish on Instagram?
5. Can a client approve posts before they are scheduled?
6. Can I schedule YouTube videos from the same place?

## Notes

Help sources: linkedin.md, instagram.md, facebook.md, x.md, tiktok.md, youtube.md, campaigns.md, validation.md, shorts-autopilot.md. Steps as a sequence of blocks, never numbered cards.

## Definition of done

- [ ] `research/plan-week-social-posts.md` written before drafting, every claim marked
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
- [ ] File saved as `output/plan-week-social-posts.md` with `template: howto`
