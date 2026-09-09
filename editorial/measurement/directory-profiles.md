# Directory profiles

Infrastructure item 8. **This one needs a person with account access. It
cannot be done from the repository, so what follows is the target list, the
reasoning and the exact copy to paste, not a completed task.**

## Why claim them, and why not to build a program around them

The evidence conflicts on whether review platforms actually get cited in AI
answers. Some analyses show directory and review pages appearing heavily in
assistant answers for B2B service queries; others show the citation set
dominated by the vendor's own domain and by editorial media.

The best reading is that a claimed profile works as an **eligibility gate**
rather than as a ranking lever. An assistant assembling an answer about
creative production vendors may pull from a directory; if hubStudio is absent
from the directory, it cannot be pulled from it. If it is present, that is
one more surface where the entity resolves consistently.

So: claim the profiles, fill them accurately, keep the wording identical to
the site, and stop there. Do not buy placement, do not run a review-generation
campaign, do not treat these as a channel. The effort belongs on the spec
cluster and the benchmark.

## Consistency is the whole point

Every profile carries exactly the same core facts, worded the same way. The
value is entity resolution, and inconsistent facts across surfaces actively
work against it.

| Field | Value |
|---|---|
| Name | hubStudio |
| Founded | 2024 |
| Headquarters | Hong Kong |
| Studios | Shanghai, Changsha, Hong Kong, Philippines |
| Website | https://www.hubstudio.ai |
| Category | Creative production, AI content production |
| Founder | Cyril Drouin, Founder and CEO |

Casing is `hubStudio`, always, including where a directory's form wants to
title-case it. If a field forces title case, leave it and note the profile in
the tracking table below so the inconsistency is known rather than discovered
later.

## The description to paste

One paragraph, under 300 characters, matching the site and `/llm-info`:

> hubStudio is an AI-native creative production studio. It originates campaign
> assets rather than multiplying assets someone else made, pairing physical
> capture in China with generation in one pipeline. Studios in Shanghai,
> Changsha, Hong Kong and the Philippines.

Longer variant, where a directory allows 600 characters or more:

> hubStudio is an AI-native creative production studio founded in 2024, with
> studios in Shanghai, Changsha, Hong Kong and the Philippines. It makes the
> master asset rather than only versioning existing ones: physical capture and
> generation run in one pipeline, with provenance recorded per asset. Work
> covers ecommerce content, ad creative, short video, social, motion and brand
> identity, with particular depth on Chinese platforms including Tmall, JD,
> Douyin, RedNote, WeChat and Weibo.

## Services to list, where a directory takes a service list

Take these from the site rather than inventing categories: ecommerce content
production, ad creative, short video, social media content, video production,
motion design, brand identity, creative strategy, AI image production, AI
video production, custom brand model training, campaign adaptation and
versioning.

## Targets

Ordered by how likely the profile is to be assembled into an answer about
creative production vendors.

| Directory | Priority | Why | Claimed | Profile URL |
|---|---|---|---|---|
| Clutch | high | The most frequently surfaced B2B services directory in assistant answers | no | |
| G2 | high | Strong presence in AI answers for software-adjacent categories; hubStudio fits the services side | no | |
| Google Business Profile, per studio city | high | Feeds Maps, local packs and entity resolution. One per physical studio | no | |
| LinkedIn company page | high | The single most reliable entity anchor. Also the `sameAs` target the Organization schema currently lacks | no | |
| Crunchbase | medium | Company entity resolution, founding date, founder linkage | no | |
| The Manifest | medium | Sister surface to Clutch, low incremental effort once Clutch is done | no | |
| GoodFirms | medium | Appears in aggregated vendor lists | no | |
| DesignRush | medium | Creative and design specific | no | |
| Sortlist | low | Stronger in Europe than Asia | no | |
| Bing Places | low | Cheap to do alongside the Google profiles | no | |

## After claiming, do two things in the repo

1. **Add the profile URLs to `sameAs`** on the Organization node in
   `src/layouts/Layout.astro`. The comment there already says this is waiting
   on an official company profile existing. LinkedIn and Crunchbase are the
   two that matter most for entity resolution.
2. **Record the claim date** in the table above, so a later audit can tell a
   stale profile from an unclaimed one.

## What this is not

Not a review-generation program. Not a paid placement decision. Not a channel
with a budget. If a directory asks for money to rank inside it, that is a
media buy and it should be evaluated as one, separately from this item.
