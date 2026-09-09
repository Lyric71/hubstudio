# Tracked queries and buyer prompts

Infrastructure item 7. Two instruments, measuring two different things.

**Rank tracking** answers "where do we sit in classic search". Sixty queries,
tracked weekly, listed below. Any rank tracker does this; the value is that
the list is fixed and matches the editorial plan, so movement is attributable
to a piece rather than to noise.

**AI-answer monitoring** answers "are we named or cited when a buyer asks an
assistant". There is no rank tracker for this. It has to be done by running
the prompts and logging the answers, because brand mentions and cited domains
overlap by as little as 30 percent on some platforms, and being named without
being linked is a different outcome that still moves deals.

Run the prompts monthly across five surfaces: ChatGPT, Google AI Overviews,
Google AI Mode, Perplexity, Claude. Log every run with
`node editorial/scripts/log-ai-answer.mjs`, which appends to
`editorial/measurement/ai-answers.csv`.

Baseline note, 2026-09-09: non-branded search presence is zero. Ten category
searches were run against hubstudio.ai on 8 and 9 September 2026 and the
domain returned no results in any of them. Every number below starts from
nothing, which makes the first movement easy to see.

---

## The sixty tracked queries

Grouped by the cluster that is supposed to win them, so a flat ranking export
can be read against the editorial calendar.

### Cluster 1: China platform specs (18 queries)

| # | Query | Piece | SERP verdict at audit |
|---|---|---|---|
| 1 | tmall product image requirements | 01 | VACANT |
| 2 | tmall image size | 01 | VACANT |
| 3 | tmall main image dimensions | 01 | VACANT |
| 4 | tmall global image rules | 01 | VACANT |
| 5 | tmall white background image rules | 02 | VACANT |
| 6 | baidi tu requirements | 02 | VACANT |
| 7 | tmall flagship store banner size specifications | 03 | VACANT |
| 8 | tmall store decoration size | 03 | VACANT |
| 9 | jd.com product image requirements | 04 | VACANT |
| 10 | jd vs tmall image requirements | 04 | VACANT |
| 11 | douyin video specifications aspect ratio safe zone | 05 | VACANT |
| 12 | douyin safe zone | 05 | VACANT |
| 13 | douyin ad creative specs 2026 | 06 | WEAK |
| 14 | douyin topview specs | 06 | WEAK |
| 15 | xiaohongshu image size note cover dimensions | 07 | CONTESTED |
| 16 | rednote cover size | 07 | CONTESTED |
| 17 | wechat official account article image size specs | 08 | WEAK |
| 18 | weibo image and video specs | 09 | WEAK |

### Cluster 2: cost and economics (14 queries)

| # | Query | Piece | SERP verdict at audit |
|---|---|---|---|
| 19 | cost per creative asset benchmark | 11 | VACANT |
| 20 | brand content cost per asset | 11 | VACANT |
| 21 | how much does one ad creative cost | 11 | VACANT |
| 22 | creative production cost benchmark 2026 | 11 | VACANT |
| 23 | how much does ecommerce product photography cost per SKU | 12 | WEAK at volume |
| 24 | product photography cost per sku | 12 | WEAK at volume |
| 25 | bulk product photography cost | 12 | WEAK at volume |
| 26 | cost to localize a global campaign for China | 13 | VACANT |
| 27 | china campaign localization cost | 13 | VACANT |
| 28 | AI video production cost for brands | 14 | CONTESTED |
| 29 | ai video ad cost | 14 | CONTESTED |
| 30 | in-house creative studio cost vs outsourcing | 15 | WEAK |
| 31 | in-house agency cost model | 15 | WEAK |
| 32 | campaign adaptation cost per market | 16 | VACANT |

### Cluster 3: buying models and evaluation (12 queries)

| # | Query | Piece | SERP verdict at audit |
|---|---|---|---|
| 33 | production agency roster review checklist | 17 | WEAK |
| 34 | production partner review questions | 17 | WEAK |
| 35 | creative roster consolidation | 17 | WEAK |
| 36 | creative automation platform vs production studio | 18 | VACANT |
| 37 | who makes the master creative | 18 | VACANT |
| 38 | china vs india offshore creative production | 19 | VACANT |
| 39 | offshore creative production comparison | 19 | VACANT |
| 40 | offshore creative production china | 20 | WEAK |
| 41 | design subscription vs production partner | 21 | WEAK |
| 42 | managed creative production model | 21 | WEAK |
| 43 | how to evaluate an AI content production partner | 22 | VACANT |
| 44 | ai production vendor questions | 22 | VACANT |

### Cluster 4: rights, provenance and disclosure (8 queries)

| # | Query | Piece | SERP verdict at audit |
|---|---|---|---|
| 45 | china ai content labeling rules for brands | 23 | Operational tail |
| 46 | china ai labeling workflow | 23 | Operational tail |
| 47 | gb 45438-2025 requirements | 23 | Operational tail |
| 48 | ai content disclosure audit trail production | 24 | VACANT |
| 49 | what to log per ai generated asset | 24 | VACANT |
| 50 | c2pa content credentials for brands | 25 | WEAK |
| 51 | do content credentials survive social media | 25 | WEAK |
| 52 | ai avatar likeness rights talent release | 26 | VACANT |

### Cluster 5: how the work is made (8 queries)

| # | Query | Piece | SERP verdict at audit |
|---|---|---|---|
| 53 | when to shoot vs generate product images | 27 | VACANT |
| 54 | ai generated vs photographed product images | 27 | VACANT |
| 55 | china ecommerce content pack deliverables | 28 | VACANT |
| 56 | custom brand model training aigc approval rate | 29 | WEAK |
| 57 | singles day 618 content production timeline | 30 | VACANT |
| 58 | china social media creative asset variants | 10 | VACANT |
| 59 | how many assets for china launch | 10 | VACANT |
| 60 | china ecommerce content production | cluster | contested |

---

## The twenty-five buyer prompts

Run monthly on all five surfaces. These are phrased the way a buyer talks to
an assistant, not the way they type into a search box, which is the whole
point: the wording is longer, more situational, and carries constraints.

Log three things per run, because they are three different outcomes:

- **Named**: hubStudio appears in the answer text.
- **Cited**: hubstudio.ai appears as a linked source.
- **Neither**: the answer exists and hubStudio is absent.

### Cost and budgeting

1. How much should I budget for producing creative assets for a new product launch in China?
2. What does one finished brand image actually cost in 2026?
3. Is a design subscription cheaper than hiring a production studio?
4. How much does it cost to shoot 500 product SKUs?
5. What is a realistic cost per asset for social ad creative at volume?
6. How much does it cost to adapt a global campaign for the Chinese market?

### Choosing a model of buying

7. Should I build an in-house creative studio or outsource production?
8. What is the difference between a creative automation platform and a production studio?
9. Should I offshore creative production to China or India?
10. What questions should I ask before hiring an AI content production partner?
11. My production roster is consolidating. What should I be asking my agencies?
12. Who can produce ecommerce content at high volume for Chinese platforms?

### China platform production

13. What are the image requirements for a Tmall product listing?
14. Can I reuse my TikTok videos on Douyin?
15. What image sizes do I need for JD and Tmall?
16. What do I need to produce for a RedNote brand account?
17. How many creative assets does a China product launch actually need?
18. When do Singles Day assets need to be finished?

### Rights, disclosure and provenance

19. What do China's AI labeling rules require for brand content?
20. What records should I keep for AI-generated marketing assets?
21. Do Content Credentials survive being uploaded to social platforms?
22. What do I need to sign to use an AI brand ambassador?

### Craft and capability

23. When should I photograph a product instead of generating the image?
24. Can AI generate product photography good enough for a marketplace listing?
25. Who does AI-native creative production with real studios in China?

---

## Pass marks

From Part 6 of the search spec.

| When | What to check | Pass mark |
|---|---|---|
| Before week 1 | Instrumentation live | 60 queries tracked, 25 prompts logged across five surfaces, retrieval-bot fetch test passing, crawl logs split by bot |
| Week 4 | Indexation and crawl | 16 of 16 indexed inside 7 days each. Retrieval bots seen in logs on new URLs |
| Week 8 | First rankings on the vacant cluster | 4 or more China spec queries in the top 20. First AI-answer citation on any of the 25 prompts |
| Week 12 | Commercial layer working | First page-one position. Calculator live and converting. Benchmark published with 5 or more external citations |
| Week 16 | Lagging measures | Non-branded organic sessions, calculator completions, attributable enquiries, referring domains to the benchmark |

## What this cannot do by itself

The rank-tracking half needs a tracker with an API key, and the AI-answer half
needs a person or a scheduled job to actually run the twenty-five prompts and
paste the answers in. Neither is wired to a paid service here on purpose:
the instrument, the query set and the log format are the part worth keeping in
the repository, and they outlive whichever tool is subscribed to this quarter.
