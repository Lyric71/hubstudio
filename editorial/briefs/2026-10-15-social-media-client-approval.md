---
brief_id: 68
publish_date: 2026-10-15
week: 01
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 68: How to get client approval on social content without the email chain

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
| Working H1 | How to get client approval on social content without the email chain |
| Slug | `/resources/how-to/social-media-client-approval/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/social-media-client-approval.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/social-media-client-approval.md` |
| Research file | `research/social-media-client-approval.md` |
| Hero image | `public/Images/howto-social-media-client-approval.webp`, referenced as `/Images/howto-social-media-client-approval.webp` |
| Primary query | `social media client approval workflow` |
| Secondary queries | `social media approval process for agencies`, `how to get client sign off on social media posts`, `content approval workflow template`, `client approval portal for social media` |
| SERP verdict | VENDOR-HEAVY. Most results are scheduler vendors selling their own approval feature with a five-step listicle; they cover stages and deadlines but not the two things that cause disputes: which version was approved, and whether the approved post can still be changed before it goes out. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Approval breaks on two questions, 'which version did they approve?' and 'did anyone change it after?'. The fix is a record that cannot be edited and a post that cannot move while it waits. This guide sets up that loop for an agency and its clients in the hubStudio app: client logins that see only their work, one thread per piece with every version on it, and a post locked until the client decides.

## The research gate, before any drafting

No body copy until `research/social-media-client-approval.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `social media client approval workflow` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/social-media-client-approval/` with a date. For a China platform, the
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

- No market statistic is needed; if one is used (time lost to approval rounds), it must come from a published survey with a stated method and sample, attributed by category and date, or be cut
- Every app behavior from validation.md, client-space.md and your-team.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The two failure points of email approval, stated in the first screen, with a table: email chain versus one approval thread
- Set-up: add the client company under Clients, invite its people with the Client role; work tagged Made for that client appears in its Client space
- What a client login sees: only the finished work made for its company, grouped by day, with Download; never prompts, engines or costs; no balance
- Sending: Send for validation from the image studio, the video studio or the publishing step of a post; name a teammate or one of the client's people
- The thread: v1, v2 and so on on one page; Validate, or Send back with a comment (required to send back); every comment and decision emailed
- The lock: a post waiting for validation cannot be changed, deleted or published; approved, it can go out; sent back, it returns to draft
- The record: no request, thread, version or comment can be deleted; an admin can decide in the validator's place
- Validation costs nothing and involves no AI
- Studio + app in two lines: when our studio makes the work inside hubStudio, the client approves in the same Validation and Client space

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any scheduler, proofing tool or competitor
- Invent hours-saved or approval-time figures
- Claim deadlines, reminders or multi-stage approval chains: the help documents one named validator per thread
- Print a hubStudio amount
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: email chain versus one approval thread (version, change after approval, who saw what, audit trail)
- Table: who can do what (send, comment, validate, change the validator) by role: Admin, Creator, Viewer, Client
- Existing help captures: validation-page, validation-send-dialog, client-space-home
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-social-media-client-approval.webp`.
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

- Review and approval in the hubStudio app: `/app/review`
- Studio + app: `/studio/with-the-app`
- hubStudio for agencies: `/solutions/agencies`
- Validation help: `/help/validation`
- Client space help: `/help/client-space`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Client Approval for Social Content Without Email (48 chars) |
| Meta description | 152 chars | Client sign-off for social posts on one thread: client logins that see only their work, every version kept, posts locked until the client decides. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do agencies get client approval on social media posts?
2. How do I stop a post being changed after the client approved it?
3. Can a client approve posts without seeing our other clients' work?
4. What happens when a client sends a post back?
5. Can the client see what the content cost or how it was made?
6. Can I delete an approval thread?

## Notes

Agency reader. Roles: Admin, Creator, Viewer, Client. Viewers can be named validator but cannot record a decision: say so in the roles table.

## Definition of done

- [ ] `research/social-media-client-approval.md` written before drafting, every claim marked
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
- [ ] File saved as `output/social-media-client-approval.md` with `template: howto`
