# Research: automotive-content-without-shipping-a-car

| Field | Value |
|---|---|
| Brief | 038 |
| Target query | cgi car advertising without photoshoot |
| Secondary queries | ai generated car advertising; automotive cgi vs photography; car ad rules depicting driving |
| Gap statement (one sentence) | The pages ranking for making car ads without a shoot are published by sellers of CGI, AI tools or photography and cite no advertising code, ruling or fuel-information instrument, while the regulator pages that carry the motoring rules never address a generated vehicle, so nobody tells a producer which rules still bind an image that no camera took. |
| Research time spent | About 75 minutes active. The session's shared web search budget ran out partway (200 of 200); every later lookup was a direct fetch of a known URL, and seven planned searches were not run (see "Searches not run") |
| Written | 2026-09-10 |

## Constraint banner, read before drafting

1. No competitor reaches the page. The SERP tables name domains because the
   spec's table shape requires it. None of those domains, studios, CGI houses,
   configurator vendors or tools may appear in the article. A car brand may be
   named only as a public regulator ruling names it.
2. No hubStudio rate, price or dollar figure. The case study's 70 percent is a
   percentage published on the case page and runs only in the case page's own
   words.
3. The automotive client stays unnamed. The case page calls it a "Premium
   automotive manufacturer" and "a luxury manufacturer".
4. This is a rights and rules piece in part: it must say plainly that it
   describes production practice, not legal advice (SPEC.md structure rule 10).

## R0. First-party: what the premium SUV case page publishes, verbatim

Source: `src/data/case-studies.ts`, entry `slug: 'premium-suv'` (lines 829 to
893), rendered at `/work/premium-suv` by `src/pages/work/[slug].astro`. Read
2026-09-10. Only what is listed here may run, attributed to the case page. The
page spells some words the British way ("centres", "colour", "Localisation");
cleared quotes below paraphrase those in American English rather than quoting
them.

### Figures (the results band, rendered under "The outcome")

| Value as published | Label as published | Reading |
|---|---|---|
| 70% | Budget cut versus location photography | A percentage with no absolute behind it. The page publishes no base budget, no currency and no scope. Say so if the figure is blockquoted |
| 3 weeks | Global assets, versus six months traditionally | Duration against a stated traditional comparison of six months. The page does not say how the six months was estimated |
| 15 markets | 20+ environments, zero vehicle shipping | Market count plus environment count plus zero shipping |

### Claims elsewhere on the page

| Field | Verbatim text |
|---|---|
| client | "Premium automotive manufacturer" |
| title | "A premium SUV, shown in fifteen markets without shipping a car" |
| category / industry / region | "Automotive content" / "Automotive" / "Global, 15 markets" |
| summary | "A luxury manufacturer needed launch imagery for a new SUV across fifteen countries. We generated 20+ environments and cut the budget by 70% with no vehicle logistics." |
| challenge 1 | "A luxury vehicle manufacturer needed marketing imagery for a new SUV rolling out across fifteen countries. Each market wanted locally appropriate visuals: German autobahns, Japanese mountain routes, American city centres, Middle Eastern dunes." |
| challenge 2 | "Doing that traditionally means physically shipping vehicles between countries, managing logistics across every zone, absorbing unpredictable weather and coordinating international crews against different regulatory requirements. The cost and the calendar were both prohibitive." |
| approachLead | "We generated the full global set with AIGC, every environment built rather than travelled to." |
| approach 1 | "20+ environments, no travel": "Mountains, cities, deserts, coastlines and forests, each market's context built rather than reached by shipping a vehicle there." |
| approach 2 | "Scenarios tuned to each market": "Suburban family drives, urban professional commutes, outback expeditions, matched to how each market sees the vehicle." |
| approach 3 | "Weather and light on command": "Snow, rain, clear skies, autumn colour, plus golden hour, blue hour and midday, all consistent and all controlled." |
| approach 4 | "Every format from one set": "Print ads, social, website graphics and digital campaigns come out of the same production." |
| delivered | "20+ distinct geographic environments"; "Market-tailored driving scenarios"; "Multiple seasonal and weather presentations"; "A full range of lighting conditions"; "Assets formatted for print, social, web and digital campaigns" |
| services | "AIGC environments", "Campaign imagery", "Localisation", "Multi-format delivery" |

### What the case page does NOT say (do not add)

- How the vehicle itself was rendered (photographed once, built from CAD, or
  generated). The page says the environments were generated. Do not state the
  source of the vehicle model.
- Which fifteen countries. Only four example contexts are named.
- Any approval, compliance review, fuel or CO2 information, plates, driving
  side, or advertising-rule handling.
- Any absolute budget, currency, crew size or number of assets.
- The client's name. It stays unnamed.

### Tension with other site copy (site wins, flag only)

`src/pages/services/design/ecommerce.astro:212` says "for categories where it
really matters (luxury, beauty hero shots, anything with reflective or
transparent surfaces) we still shoot. Hybrid is the working model, not
full-stack generation." A car is luxury and reflective. The case page says the
full global set was generated. These can both be true (environments generated
around a vehicle whose source the page does not state), and the article must
not resolve the tension by inventing how the vehicle was made. The generate or
capture table should treat the vehicle body as the capture-or-source question
and the environment as the generation question, which is consistent with both
pages.

`src/pages/solutions/manufacturers.astro:83` publishes the adjacent pattern for
industrial products: "Show the same product authentically in aerospace
facilities, automotive plants, medical-device workshops, without transporting
equipment anywhere." Usable as an internal reference, carries no figure.

## R2. SERP map

Searched 2026-09-10 in English. Result sets returned six to nine organic
results per query rather than ten; counts are what came back. Pages were then
fetched where reachable to record age, publisher type and whether they cite
any rule. "Not read" means the page 403'd, 404'd or was not fetched; its
publisher type is taken from the domain and title only.

Query: **cgi car advertising without photoshoot**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | thedigitalbunch.com | CGI studio blog | CGI against photography for automotive campaigns (title) | Not read: 404 on fetch | Unknown |
| 2 | techspot.com | Tech news feature | How commercials are filmed with an adjustable stand-in rig instead of the car, about 450 words | No rules, no AI generation, no accuracy list, no figures | 2016-06-24 |
| 3 | maverickframe.com | CGI studio blog | What automotive CGI is, one CGI against photography table, about 2,800 words | No regulator, code or ruling; no accuracy checklist; no sourced statistic | 2026-06-26, updated 2026-07-04 |
| 4 | pixready.com | 3D rendering vendor blog | CGI advertising in general, one automotive use case (one car in five countries), about 2,500 to 3,000 words | No regulator; only statistic is an unsourced satisfaction score | 2025-11-25 |
| 5 | blog.nightwolves.studio | CGI studio blog | Why automotive CGI, one comparison table, about 1,800 words | No regulator, no checklist, no sourced statistic | 2025-05-21 |
| 6 | autoads.co.za | Automotive advertising trade news | Whether the traditional car shoot is dead (title) | Not read: 403 | Unknown |
| 7 | theoz.studio | CGI studio blog | How brands use CGI for car ads, about 1,000 words, no tables | No regulator, no checklist, no statistics; ends on a consultation CTA | "Mar 3", year not printed |
| 8 | heyauto.com | Automotive consumer blog | How car commercials are made (title) | Not read: 403 | Unknown |
| 9 | imagine.art | AI image tool industry landing page | Automotive use of an AI image tool | Not read; tool landing page | Unknown |

Query: **ai generated car advertising**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | flexclip.com | Video template tool landing page | Car ad templates | Not read; tool page | Unknown |
| 2 | simplified.com (blog) | AI design tool vendor blog | How to create car ads with AI tools, about 3,500 words | No advertising rule; vehicle accuracy not addressed; only statistics are software review ratings | 2025-04-25 |
| 3 | simplified.com (generator) | AI tool landing page | Car ad generator | Not read; tool page | Unknown |
| 4 | phyron.com | Automotive retail AI content platform homepage | Inventory photos and video automated for dealers | Not read; vendor homepage | Unknown |
| 5 | quickads.ai | AI ad tool vendor blog | AI for dealership ads (title) | Not read: 404 | Unknown |
| 6 | reelmind.ai | AI video tool vendor blog | AI marketing for used cars (title) | Not read | Unknown |

Query: **automotive cgi vs photography**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | thedigitalbunch.com | CGI studio blog | Same as query 1 | Not read: 404 | Unknown |
| 2 | maverickframe.com | CGI studio blog | Same as query 1 | Same gaps | 2026-07-04 |
| 3 | redlineadvantage.com | Dealership photography vendor blog | Claims buyers want real photos, "300+ people" surveyed in the US | No recruitment, instrument or fielding date; publisher sells the photography its survey favors. See do not publish | Undated |
| 4 | blog.nightwolves.studio | CGI studio blog | Same as query 1 | Same gaps | 2025-05-21 |
| 5 | izmostudio.com | Automotive imaging vendor article | CGI for auto businesses (title) | Not read | Unknown |
| 6 | bmproduccions.com | CGI studio blog | Automotive CGI process and use cases, about 2,000 words, no tables | No regulator, no checklist, no sourced statistic | 2026-08-29 |
| 7 | izmofx.com | Digital imaging vendor article | Photography against CGI, about 800 words | No regulator; speed claims with no source | 2019-06-21 |
| 8 | autoads.co.za | Automotive advertising trade news | Same as query 1 | Not read: 403 | Unknown |

Query: **car ad rules depicting driving**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | pistonheads.com | Enthusiast forum thread | Why fast-driving ads are banned, opinion | Not read; forum | Undated |
| 2 | asa.org.uk (news) | Regulator guidance article | CAP Code 19.2 and 19.4, overtaking, weaving, seatbelts, blurred lights, dust clouds, fantastical scenarios, ten rulings | Nothing on generated or AI vehicle imagery; UK only; no fuel or CO2 information | 2023-11-09 |
| 3 | asa.org.uk (advice) | Regulator advice page | Speed as main message, blurred imagery, virtual or CGI environments judged as if real (the 2012 sports coupe ruling), safety claims | Twelve years old; no AI; UK only | 2014-07-16 |
| 4 | cal.streetsblog.org | Advocacy news site | UK, Australia and US compared | Same article as #5 | 2019-05-28 |
| 5 | usa.streetsblog.org | Advocacy news and opinion | UK bans, Australian code, no US regulation | No primary instrument text; no image accuracy; seven years old | 2019-05-28 |
| 6 | asa.org.uk (news) | Regulator guidance article | Refresh of the 2023 article, seven rulings | Same gaps as #2 | 2026-07-09 |
| 7 | asa.org.uk (news) | Regulator guidance article | In-car technology, hands-free, driver in control | No generated imagery; 2020 | 2020-08-13 |
| 8 | codot.gov | US state transport department news | Relays the May 2026 insurance-funded study on performance themes in car ads | No rules; secondary to the study | 2026-07 |
| 9 | democracy.york.gov.uk | Local council committee annex (PDF) | Local advertising policy (inferred) | Not read; off-intent | Unknown |

**Publisher-type counts across 32 result slots (28 unique URLs).**

| Publisher type | Q1 | Q2 | Q3 | Q4 | Total |
|---|---|---|---|---|---|
| Seller of CGI, 3D rendering or imaging | 5 | 0 | 6 | 0 | 11 |
| Seller of AI generation or ad tools | 1 | 6 | 0 | 0 | 7 |
| Seller of photography | 0 | 0 | 1 | 0 | 1 |
| News, trade or consumer media | 3 | 0 | 1 | 2 | 6 |
| Advertising regulator | 0 | 0 | 0 | 4 | 4 |
| Government (non-advertising) | 0 | 0 | 0 | 2 | 2 |
| Forum | 0 | 0 | 0 | 1 | 1 |
| **Slots** | 9 | 6 | 8 | 9 | 32 |

19 of 32 slots belong to a company selling CGI, AI generation or
photography. All 4 regulator results sit on the rules query. Of the 8 pages on
the three production queries that were read in full, 0 cite an advertising
code, a regulator, a ruling or a fuel-information instrument, and 0 carry an
accuracy checklist for a generated vehicle. Of the 4 regulator pages, 1 (the
2014 advice) mentions a virtual or CGI world, and 0 addresses AI-generated
vehicle imagery.

**R4, Chinese-language SERP.** Two Chinese searches ran on the rules side
(汽车广告 违法 案例 市场监管 处罚 2025; 工信部 智能网联汽车 宣传 禁止 自动驾驶
智驾 用语 通知 2025), both before the English production queries were
supplemented. A Chinese production-side SERP (汽车广告 AI生成 CGI 拍摄 替代 实拍)
was attempted and refused by the exhausted search budget. The Chinese SERP for
the production question is therefore **not mapped**. Do not claim anything
about how Chinese pages treat the topic.

**The bar:** production pages run roughly 1,000 to 3,500 words with zero or one
table, no dated citation, no rule, and in several cases no date on the page. The
regulator pages are short, dated and rule-numbered but UK-only and silent on
generation. Beating both takes about 1,800 words, three tables (generate or
capture by asset, an accuracy checklist, a rules table of code, rule and date),
every rule carrying its number and date across at least four jurisdictions, and
the first-party case figures attributed to their page.

**The gap, in one sentence:** Nobody ranking connects the decision to generate a
vehicle image with the motoring codes, rulings and fuel-information rules that
apply to that image regardless of how it was made.

**H1 consequence.** The working H1 "Automotive content without shipping a car"
does not carry the primary query's words (CGI, car advertising). SPEC.md
structure rule 1 requires the H1 to carry the target query. See Notes for the
writer for a flagged alternative. The title and meta in the brief are approved;
changing the H1 is flagged, not made.

## R1. Claims the page needs, resolved

Listed before lookup, resolved after. "Holds" means cleared with the source in
the claims table. "Breaks" means the source says something different and the
claim as first framed must not run. "Cut" means no source clears it.

| # | Claim the outline wanted | Resolution |
|---|---|---|
| 1 | Car ads may use CGI or AI-generated imagery | Holds. No code or ruling read bans it. The UK code is media-neutral (ASA guidance, June 2026), and the UK regulator has judged fully CGI and virtual-world car ads under the ordinary motoring rules (2014 advice, 2018 and 2023 rulings) |
| 2 | A CGI, virtual or fantastical setting exempts the driving shown from the rules | Breaks. Upheld against a substantially CGI ad (2018), a fully CGI poster (2023) and a fantastical chase (2025). The narrower true claim: a scenario so clearly fantastical that viewers would not read it as a real demonstration is more likely to be acceptable (ASA news, 2019 and 2023, citing a not-upheld 2018 ruling) |
| 3 | Speed may not be the main message; blur and dust cues read as excessive speed | Holds. CAP 19.4, BCAP 20.4; ASA news November 2023 |
| 4 | Occupants must be shown wearing seatbelts | Holds for UK guidance (ASA news November 2023). No rule number attaches; write it as regulator guidance |
| 5 | Safety features may not be shown as licence to drive faster or less carefully | Holds. BCAP 20.5, CAP 19.5; Nissan ruling October 2018 |
| 6 | Showing vehicles driving through natural terrain without purpose can breach social responsibility | Holds. Toyota ruling 22 November 2023, CAP 1.3 |
| 7 | "Zero emissions" on an EV needs qualification | Holds. ASA advice July 2024 summarizing three February 2024 rulings |
| 8 | EU promotional material for new cars must carry official fuel consumption and CO2 data | Holds, from the European Commission's own summary of Directive 1999/94/EC. The instrument text and its article number were not reached |
| 9 | The EU rule is being replaced | Holds as a proposal only. COM/2025/995, tabled 16 December 2025, would repeal the directive. Not adopted. The successor's advertising duties are not cleared |
| 10 | US federal rules govern fuel economy claims in vehicle ads | Holds. FTC Guide, 16 CFR Part 259, including the bar on applying one model type's figures to an ad depicting a different model type |
| 11 | The US has a federal code on depicting driving in car ads | Breaks. None found. A US insurance-funded safety institute states broadcasters, not regulators, set those standards. Single-source, attributed |
| 12 | China's Advertising Law bars misleading content and requires sourced data | Holds. Articles 4, 9(7), 11, 28 |
| 13 | China has penalized a car ad for an unsourced range figure | Holds. Longyan case, October 2023, published by the Fujian provincial regulator May 2024 |
| 14 | China restricts how driver assistance is named and promoted | Partly holds. The February 2025 MIIT and SAMR notice requires firms to standardize marketing. A 16 April 2025 ministry meeting told firms not to exaggerate or make false claims. The specific naming clause and banned-word list did not clear |
| 15 | China has a specific rule against depicting dangerous driving in ads | Cut. Not found in the searches run; the search budget ran out before a dedicated search. Only the general public-order and good-morals clause is cleared |
| 16 | Generated imagery carried in China needs an explicit AI label | Holds, ledger reuse (CAC Measures) |
| 17 | Generated images fail on physical realism, reflections in particular | Holds, ledger reuse (image editing physical-realism benchmark, October 2025), scoped to editing models |
| 18 | A method-stated study documents vehicle-specific generation failures (paint, badges, wheels, plates, driving side) | Cut. None found. The accuracy checklist is labeled production practice |
| 19 | A vehicle logistics or location shoot costs X | Cut. No method-stated figure on any page read |
| 20 | X percent of automotive marketing now uses CGI | Cut. No method-stated source. The one survey found is published by a seller of photography with no method |
| 21 | Buyers trust real photos more than CGI | Cut. Same seller survey |
| 22 | The premium SUV case figures | Holds under the first-party exception, exactly as R0 lists them |
| 23 | Generated automotive content takes N weeks | Holds only as the case page's "3 weeks ... versus six months traditionally". No market figure |

## R1 and R5. Claims table

Confidence: primary, triangulated, single-source, unverified, or first-party.
Unverified is cut.

### United Kingdom

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| CAP Code Section 19 Motoring. Principle: marketing communications "should not condone or encourage unsafe or inconsiderate driving practices." 19.1 no anti-social behaviour; 19.2 "must not condone or encourage unsafe or irresponsible driving", no depiction likely to encourage a breach of Highway Code legal requirements if it seems to be on a public road or public space, capabilities may be shown on a track obviously not a public highway; 19.3 no depiction of speed that might encourage irresponsible or unlawful driving; 19.4 "Marketers must not make speed or acceleration the main message"; 19.5 safety claims must not exaggerate, no absolute safety claims without evidence | asa.org.uk/type/non_broadcast/code_section/19.html | Page undated; Edition 12 per the 2025 ruling below | n/a, code text | Rule text read at source 2026-09-10 | Self-regulatory code, written by the Committee of Advertising Practice | primary |
| BCAP Code Section 20 Motoring. Principle: ads "should not contribute to a culture of dangerous, irresponsible or inconsiderate driving or motorcycling, especially among young drivers." 20.1 no dangerous, competitive, inconsiderate or irresponsible driving, and no suggestion that driving safely is staid or boring; 20.2 no breach of Highway Code legal requirements; 20.3 no demonstration of power, acceleration or handling except in a clear context of safety; 20.4 speed or acceleration claims must not be the main selling message; 20.5 no exaggeration of safety features and no suggestion features let a vehicle be driven faster or in complete safety | asa.org.uk/type/broadcast/code_section/20.html | Page undated | n/a | Rule text read at source 2026-09-10 | Broadcast Committee of Advertising Practice | primary |
| Motoring advice: ads set in virtual or CGI environments face scrutiny if the driving depicted would be dangerous in reality, citing the Toyota GT86 case; blurred images and speed-led headlines warned against | asa.org.uk/advice-online/motoring.html | 2014-07-16 | n/a | Published regulator advice; the underlying 14 November 2012 ruling was not read at source (search budget exhausted, URL unknown) | Regulator | primary for the advice, ruling unread |
| Guidance: sharp overtaking, competitive driving and weaving "even in a somewhat fantastical context" risk breach; "Seatbelts should be shown being worn"; "blurred lights or other blurred images and dust clouds should also be avoided"; a "very clearly fantastical" scenario, or one highly unlikely in everyday driving, "is more likely to be considered acceptable", which "can, however, be a difficult line to tread" | asa.org.uk/news/strap-in-for-some-useful-advice-on-motoring-ads.html | 2023-11-09 | Ten rulings referenced | Published regulator guidance article read in full | Regulator | primary |
| Same guidance refreshed, seven rulings referenced | asa.org.uk/news/on-the-road-to-motoring-ads-compliance.html | 2026-07-09 | Seven rulings | Published regulator guidance | Regulator | primary |
| Toyota (GB) plc ruling A23-1191673: poster showing "Around 50 identical SUVs" on rocky terrain "had been created completely by computer generated imagery (CGI)"; video showed a swarm crossing a plain "causing dust to rise"; advertiser argued the scenes were "fantastical" given the volume of cars; ASA: the ads "presented and condoned the use of vehicles in a manner that disregarded their impact on nature and the environment"; must not appear again in the form complained of. CAP rule 1.3 | asa.org.uk/rulings/toyota--gb--plc-a23-1191673-toyota--gb--plc.html | 2023-11-22 | One complaint, from a campaign group | Published ruling read at source | Regulator | primary |
| Fiat Chrysler Automobiles UK Ltd ruling A18-449228: YouTube pre-roll, cars racing through fantastical elevated roads, spiral ramps and underwater tunnels, advertiser said it used substantial CGI to emulate toy cars, on-screen text "PROFESSIONAL DRIVERS ON CLOSED COURSE: DO NOT ATTEMPT"; ASA: "speed was the main message of the ad", many scenes resembled real driving, the disclaimer did not mitigate. CAP 19.2, 19.3, 19.4 | asa.org.uk/rulings/fiat-chrysler-automobiles-uk-ltd-a18-449228.html | 2018-10-24 | One ad | Published ruling read at source | Regulator | primary |
| Mars Wrigley Confectionery UK Ltd ruling G25-1285557: a non-motoring advertiser; a car chase with handbrake turns and a barrier crash, then a physics-defying stacked-car sequence; advertiser argued a "separate world that was absurd, fantastical and removed from reality"; ASA: the chase, its speed and the manoeuvres "would be dangerous and irresponsible if emulated in real life", distinguishing the realistic opening road scenes. BCAP 20.1, 20.2; CAP 19.2, 19.3 | asa.org.uk/rulings/mars-wrigley-confectionery-uk-ltd-g25-1285557-mars-wrigley-confectionery-uk-ltd.html | 2025-06-11 | Five complainants | Published ruling read at source | Regulator | primary |
| Nissan Motor (GB) Ltd ruling A18-452330: TV ad for emergency braking; ASA found the elements created the impression the driver could "navigate at speed in a rushed or distracted manner and ultimately could rely on" the braking system. BCAP 20.1, 20.5 | asa.org.uk/rulings/nissan-motor--gb--ltd-a18-452330.html | 2018-10-24 | One ad | Published ruling read at source | Regulator | primary |
| Suzuki GB plc A18-410698 not upheld because the fantastical context made clear the manoeuvres were not real-life situations | asa.org.uk/news/avoid-the-asa-putting-the-brakes-on-your-advertising.html | 2019-11-22 | One ruling, summarized | Regulator's own summary; the ruling page itself was not read | Regulator | primary for the summary |
| Zero emissions claims: likely acceptable for pure EVs where it is clear the claim applies while driving and to powertrain emissions; BMW (UK) Ltd and MG Motor UK Ltd breached, Ford Motor Company Ltd compliant, all 7 February 2024, from proactive investigations | asa.org.uk/advice-online/motoring-zero-emissions-claims.html | 2024-07-09 | Three rulings | Published regulator advice; the three ruling pages were not read | Regulator | primary for the advice |
| In-car technology: show the driver in full control; do not promote technology as a substitute for attention to driving | asa.org.uk/news/driven-to-distraction-in-car-technology-and-the-ad-codes.html | 2020-08-13 | Four rulings | Published regulator guidance | Regulator | primary |
| The Code "is media-neutral, meaning the rules apply regardless of how the content was created"; "If an AI tool produces something problematic, the advertiser remains responsible for any output used in their ads" | asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html | 2026-06-11 | n/a | Regulator guidance, ledger row re-fetched 2026-09-10 (check 2) | Regulator | primary |
| "Images of products must not mislead about the product(s) that customers will actually receive"; images must not be altered in a way which exaggerates what the product can do | asa.org.uk/news/a-picture-says-a-thousand-words-avoiding-misleading-imagery-in-ads.html | 2025-09-11 | n/a | Regulator guidance article; no vehicle ruling referenced | Regulator | primary |
| UK regulator upheld 22 complaints: real or AI-generated puppy footage implied a robot toy was highly realistic; CAP 3.1, 3.7, 3.11 | asa.org.uk/rulings/uab-commercecore-g25-1321974-uab-commercecore.html | 2026-03-25 | 22 complaints | Ledger row, not re-fetched this session | Regulator | primary (ledger) |

### European Union

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Directive 1999/94/EC requires "All promotional literature to contain the official fuel consumption and CO2 emissions data for the car models to which it refers", alongside a label at the point of sale, a poster or display, and a yearly guide | climate.ec.europa.eu/areas-action/transport-decarbonisation/road-transport/car-labelling_en | Page updated 2025-12-19; directive 1999 | n/a | The European Commission's own summary page read 2026-09-10. Instrument text NOT reached: EUR-Lex returned an empty body three times, legislation.gov.uk returned 403 twice. Directive existence and 1999 date confirmed at iea.org/policies/1031 | EU | primary as the Commission's statement; article number unverified |
| The December 2025 proposal would harmonize label design on the energy-label format, add electric consumption and range for zero-emission and plug-in hybrid vehicles, extend scope to new vans and second-hand cars and vans, and replace the paper poster and guide with a product database | Same Commission page | 2025-12-19 | n/a | Commission summary | EU | primary |
| COM/2025/995 final, tabled 16 December 2025, amends Regulation (EU) 2019/631, adds new vehicle labelling provisions including definitions of "point of sale, promotional material, and vehicle model", and repeals Directive 1999/94/EC. Status: tabled | europarl.europa.eu/legislative-train/package-automotive-package/file-co2-emission-standards-for-new-light-duty-vehicles-and-labelling | Page updated 2026-08-01 | n/a | European Parliament legislative tracker read 2026-09-10 | EU | primary for status and scope |
| The proposal inserts Articles 15a and 15b, and online configurators must show the CO2 and fuel consumption change for each element selected | noerr.com insight, 2025-12-23 | 2025-12-23 | n/a | Law firm reading; proposal text not read | Law firm | single-source. Not cleared as a rule (see do not publish) |

### United States

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| 16 CFR Part 259, "Guide Concerning Fuel Economy Advertising for New Automobiles", authority 15 U.S.C. 41-58, source 82 FR 43687, 19 September 2017. 259.1: the Guide contains administrative interpretations of Section 5 of the FTC Act, "provides the basis for voluntary compliance", and practices inconsistent with it "may result in corrective action" | law.cornell.edu/cfr/text/16/part-259 and /259.1 | Source line 2017-09-19 | n/a | CFR text via the Legal Information Institute mirror; ecfr.gov redirected to a bot block. 259.1 read verbatim | Federal regulator | primary |
| 259.4: no misrepresentation of fuel economy or driving range (a); a general fuel economy claim requires disclosure of the EPA estimate (b); the estimate must match the driving mode claimed (c); figures identified as EPA estimates (d) with EPA identified as the source (e); fuel economy figures from one model type may not be applied to an ad depicting a different model type (h); "up to" claims limited to the model type (i); range claims need the EPA range estimate (k); strict disclosure where non-EPA figures are used (l) | law.cornell.edu/cfr/text/16/259.4 | Part source 2017-09-19 | n/a | Section read through a summarizing fetch, so wording above is paraphrase. Quote nothing from 259.4 in quotation marks until check 2 reads the text verbatim | Federal regulator | primary, paraphrase only |
| "In the United States, broadcasters, rather than regulators, set standards, but they are ambiguous and easily circumvented" | iihs.org/news/detail/more-car-ads-promote-vehicle-performance-despite-dangers-of-speed | 2026-05-12 | n/a, a statement | Institute's news release; no instrument cited for the absence | US highway safety research institute funded by auto insurers | single-source, attribute as the institute's statement |
| Content analysis of 2,938 automobile ads on TV, digital and social media in 2018 (539), 2020 (1,186) and 2022 (1,213): vehicle performance a theme in 42.7 percent, speed in 16.3 percent, safety in 8.1 percent; speed-focused ads rose from 14 to 19 percent and traction from 20 to 38 percent while safety fell from 11 to 3 percent, 2018 to 2022 | iihs.org/research-areas/bibliography/ref/2367 and the news release above | 2026-05 (release 2026-05-12) | 2,938 ads | Ten university coders trained for three hours coded primary and secondary themes against 23 predefined themes; results weighted by ad spending data. Authors Woods and Farmer | Same institute, wholly supported by auto insurers | primary |

### China

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| 中华人民共和国广告法（2021修正）第四条：广告不得含有虚假或者引人误解的内容，不得欺骗、误导消费者。广告主应当对广告内容的真实性负责。 (Advertising Law Art. 4: no false or misleading content; the advertiser is responsible for truthfulness) | policy.mofcom.gov.cn/claw/clawContent.shtml?id=90361 | Amended 2021-04-29 | n/a | Statute text read at source 2026-09-10 (same host as ledger row for Arts. 9(3) and 57) | Legislature | primary |
| 第九条（七）妨碍社会公共秩序或者违背社会良好风尚 (Art. 9(7): ads may not disrupt public order or violate good social morals) | Same | 2021-04-29 | n/a | Same | Legislature | primary |
| 第十一条：广告使用数据、统计资料、调查结果、文摘、引用语等引证内容的，应当真实、准确，并表明出处 (Art. 11: cited data, statistics and survey results must be true, accurate and show their source) | Same, and quoted verbatim in the Fujian notice below | 2021-04-29 | n/a | Two surfaces agree on the text | Legislature | primary |
| 第二十八条：以虚假或者引人误解的内容欺骗、误导消费者的广告，构成虚假广告 (Art. 28 defines a false advertisement, with five listed situations) | Same | 2021-04-29 | n/a | Statute text | Legislature | primary |
| A car dealership showed "购买理由：520KM实际续航里程行车无忧" (reason to buy: 520 km real driving range, worry-free) on its showroom board without stating the data's source; Art. 11; ordered to stop and fined 30,000 RMB by the Longyan municipal market regulator, October 2023 | scjgj.fj.gov.cn/zw/tzgg/202406/t20240603_6459455.htm | Notice 2024-05-20, penalty 2023-10 | One case (case 7 of the batch) | Provincial regulator's published typical-case notice read at source | Regulator | primary |
| 宁夏宁达捷瑞汽车销售服务有限公司: promoting cars on internet platforms with vulgar content violating good social morals; 100,000 RMB, July 2024, Yinchuan Xingqing district branch | yjj.sh.gov.cn/zjyw/20241205/662feac054f847d1aa58a69a91bc584e.html (SAMR release reposted) | 2024-12-05 | One case | National regulator's typical-case release | Regulator | primary. Tangential: content taste, not vehicle depiction. Not cleared as a quote |
| SAMR's ten typical cases of 17 January 2025 include no car, driving or vehicle case | yjj.sh.gov.cn/zjyw/20250117/e9ebc3d76a4146d2aa2cc5b2a5035918.html | 2025-01-17 | Ten cases | Release read in full | Regulator | primary, as an absence in that batch |
| 工业和信息化部 市场监管总局关于进一步加强智能网联汽车产品准入、召回及软件在线升级管理的通知，工信部联通装〔2025〕45号，成文 2025年2月25日。第（九）条：企业"规范营销宣传行为，健全产品售后服务管理体系" (MIIT and SAMR notice No. 45 of 2025: firms must standardize marketing and promotion) | gov.cn/zhengce/zhengceku/202503/content_7009422.htm ; ncsti.gov.cn/zcfg/zcwj/202503/t20250303_197224.html | 2025-02-25 | n/a | Two official copies read; both searched for the naming clause, neither contains it | Regulators | primary for the (九) wording |
| 工业和信息化部装备工业一司 智能网联汽车产品准入及软件在线升级管理工作推进会，4月16日晚：企业"不得进行夸大和虚假宣传，严格履行告知义务" (ministry meeting, 16 April 2025: no exaggerated or false promotion, fulfil disclosure duties) | news.bjd.com.cn/2025/04/17/11134350.shtml | 2025-04-17 | n/a | Beijing Daily (state-owned municipal press) report read in full; the same line appears in the nbd.com.cn headline of the same day in search results | Press reporting a ministry meeting | triangulated |
| Notice text bars naming or promoting driver-assistance in terms implying it can be used as an autonomous system, and bars false or exaggerated claims of system capability | cls.cn/detail/1957527 | 2025-02-28 | n/a | Financial press quoting the notice | Press | contested: not present in two official copies of the notice body. Cut |
| Banned promotional terms 自动驾驶, 高阶智驾, 智驾, 代客泊车, 一键召唤, 远程遥控; describe as "L2辅助驾驶" | news.bjd.com.cn, as above | 2025-04-17 | n/a | The report itself labels these "根据流传的具体要求" (according to circulating requirements) | Press | unverified. Cut |
| False autonomous-driving promotion exposed to 5 to 10 times the ad fee and up to two years' imprisonment | Search summaries of nbd.com.cn and sina.com.cn | 2025-04-17 to 18 | n/a | Commentary attributed to a public security research centre, not an instrument; not read at source | Press | unverified. Cut |
| Car ad absolute-term fines: 200,000 RMB (2017), 600,000 RMB (2021), 200,000 RMB (2022) against named car sellers | allbrightlaw.com/CN/10475/2b99e3a651fcd0ae.aspx | 2023-05-18 | Three cases | Law firm article; penalty decisions not read | Law firm | single-source secondary. Cut |
| CAC Measures for Labeling AI-Generated Synthetic Content: explicit user-perceivable label on generated image and video, implicit metadata label, exported copies keep the visible label; in force 1 September 2025 | cac.gov.cn/2025-03/14/c_1743654685899683.htm | 2025-03-14 | n/a | Ledger row, not re-fetched | Regulators | primary (ledger) |

### Generated imagery accuracy

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Image-editing physical-realism benchmark: 900 cases across optics, mechanics and state transition, human-annotated reflection surfaces and contact points, 11 models, every open-source model below 60 | arxiv.org/html/2510.17681v1 | 2025-10-20 | 900 cases, 11 models | Ledger row, reused with its logged caveat: editing models, name no model | Academic preprint | single-source (ledger) |
| Generated images can be perceptually convincing without being physically plausible; 2022-era generators, structural point only | pmc.ncbi.nlm.nih.gov/articles/PMC13001837/ | 2026-03-16 | 32 materials; observers 45, 35, 40 | Ledger row, scope-limited | Peer-reviewed journal | primary (ledger), scope-limited |
| Chinese marketplace AI fake-image rule: material or style mismatch, distorted or exaggerated effects, cutout look, bodies or scenes breaking physical laws | jjckb.xinhuanet.com/20250327/db1aeefb30ba4603b6415560e604ed1e/c.html | 2025-03-27 | Platform-wide | Ledger row | Platform announcement | triangulated (ledger) |
| Text-to-image hallucinations fall into object, attribute and relation categories | arxiv.org/abs/2509.21257 | 2025-09-25, v2 2025-11-07 | Not read (abstract only) | Taxonomy paper, benchmark size not reached | Academic preprint | single-source, method unread. Not cleared |
| Rendered text looks clear while current models frequently produce semantic errors | arxiv.org/abs/2606.04479 | 2026-06-03 | Not disclosed in abstract | Non-archival workshop paper about reasoning text, not badges or plates | Academic | single-source, scope mismatch. Cut |
| Traffic scene generation suffers low visual fidelity and poor text-image alignment | arxiv.org/abs/2511.12932 | 2025-11-17 | No metrics in abstract | Authors' problem statement for their own method | Academic | single-source, motivation not measurement. Cut |
| A method-stated study of vehicle-specific failures in generated imagery (paint, reflections on bodywork, badges, wheels, plates, driving side) | none found | 2026-09-10 | n/a | One English academic search plus reading of three abstracts; no automotive-specific evaluation surfaced; further searching blocked by the budget | n/a | unverified as existing. Checklist rows for these items are production practice |

### Costs, adoption, audience

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Any vehicle logistics, shipping or location shoot cost figure | none | 2026-09-10 | n/a | Eight production-query pages read in full carry no sourced cost figure; the dedicated cost search was refused by the exhausted budget | n/a | unverified. Cut |
| Any share of automotive marketing using CGI or AI | none | 2026-09-10 | n/a | No method-stated source on any page read; adoption search not run | n/a | unverified. Cut |
| Buyers 65 percent more confident with real photos; tell real from CGI 84 percent of the time; real photos add 542.22 dollars of perceived value | redlineadvantage.com/blog/redline-research-cgi-vs-real-photos/ | Undated | "300+ people within the US" | No recruitment, instrument, stimuli or fielding date | Seller of dealership photography | unverified. Cut |

### First-party

| Claim | Source | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| 70% budget cut versus location photography | /work/premium-suv, `src/data/case-studies.ts` results | Read 2026-09-10 | One engagement | None published. First-party exception | hubStudio | first-party |
| 3 weeks for global assets, versus six months traditionally | Same | Read 2026-09-10 | One engagement | None published | hubStudio | first-party |
| 15 markets, 20+ environments, zero vehicle shipping | Same | Read 2026-09-10 | One engagement | None published | hubStudio | first-party |
| Environments, scenarios, weather, light and formats as listed in R0 | Same | Read 2026-09-10 | One engagement | Descriptive copy | hubStudio | first-party |

## R6. Where sources conflict

| Conflict | The range or the two readings | Why, and what runs |
|---|---|---|
| China driver-assistance naming clause | cls.cn (2025-02-28) quotes notice No. 45 as barring names implying autonomy and exaggerated capability; two official copies of the notice (gov.cn, ncsti.gov.cn) carry only "规范营销宣传行为" in item (九) | The clause may sit in an attachment the fetch did not render, or in a separate technical guideline the press conflated with the notice. Run only the (九) wording and the 16 April 2025 meeting line. Never attribute the naming clause to the notice |
| Outcome of the 2023 Toyota ruling | The regulator's environmental-claims advice page (2024-07-02), as read, labeled it "Not upheld" while describing a breach; the ruling page orders the ad not to appear again | The ruling page is the primary record. Treat it as upheld. The advice-page label is most likely a reading error in the fetch and must not be quoted |
| Fantastical settings | Not upheld where the context was clearly fantastical (Suzuki, 2018, per the regulator's 2019 summary); upheld where the advertiser argued fantasy but scenes resembled real driving (Fiat 2018, Toyota 2023, Mars Wrigley 2025) | Not a contradiction but a line the regulator itself calls "a difficult line to tread". Publish the test (would viewers read it as real driving, and does the realistic part carry the ad), never "fantasy is safe" |
| IIHS headline figures | News release: 43 percent performance, "only 8%" safety; bibliography abstract: 42.7 and 8.1 percent | Rounding. Use the abstract's decimals or the release's rounding, not both |
| Site copy on reflective products | Ecommerce FAQ: reflective and luxury categories are still shot; case page: the full global SUV set was generated | Different scopes (catalog hero shots against campaign environments), and the case page does not say how the vehicle was sourced. Do not resolve it by inventing a method; frame generate or capture per asset |
| EU successor scope | Current directive: "promotional literature"; proposal: new definitions of "promotional material"; a law firm reads configurator duties into Articles 15a and 15b | Proposal text not read and not adopted. Publish the current duty and the fact of the proposal; describe no successor advertising duty |
| US status of Part 259 | It is a guide ("administrative interpretations", "basis for voluntary compliance"), not a rule, yet enforced through Section 5 | Write "FTC guidance" that "may result in corrective action", never "federal law requires" |

## Cleared for use

Blockquote-ready, American English, attribution exactly as written. No
competitor is named. Car brands appear only as a regulator ruling names the
advertiser. No Han characters inside any quote. Where a Source line carries no
URL, the source is hubStudio's own page.

### UK codes and rulings

> UK advertising rules bar car ads from condoning or encouraging unsafe or
> irresponsible driving, from showing speed in a way that might encourage
> motorists to drive irresponsibly or break the law, and from making speed or
> acceleration the main message.
> Source: UK non-broadcast advertising code (CAP Code, Edition 12), Section 19,
> rules 19.2 to 19.4, read September 2026. Rule text read at source on the UK
> advertising regulator's site.
> https://www.asa.org.uk/type/non_broadcast/code_section/19.html

> UK broadcast rules go further: a motoring ad must not demonstrate power,
> acceleration or handling except in a clear context of safety, must not
> suggest that driving safely is staid or boring, and must not suggest that a
> vehicle's safety features let it be driven faster or in complete safety.
> Source: UK broadcast advertising code (BCAP Code), Section 20, rules 20.1,
> 20.3 and 20.5, read September 2026. Rule text read at source on the UK
> advertising regulator's site.
> https://www.asa.org.uk/type/broadcast/code_section/20.html

> The UK advertising regulator's motoring advice warns that ads set in virtual
> or computer-generated environments still face scrutiny if the driving they
> show would be dangerous in reality.
> Source: UK advertising regulator (ASA and CAP) advice on motoring, July 2014.
> Published advice read at source, which draws on a November 2012 ruling
> against an ad set in an animated virtual city.
> https://www.asa.org.uk/advice-online/motoring.html

> In November 2023 the UK advertising regulator ruled against a Toyota (GB) plc
> campaign whose poster of SUVs on rocky terrain had been created completely by
> computer-generated imagery, rejected the argument that the scenes were
> fantastical, and found the ads condoned using vehicles in a way that
> disregarded their impact on nature and the environment.
> Source: UK advertising regulator ruling on Toyota (GB) plc, 22 November 2023,
> ruling A23-1191673. An upheld investigation of a poster and a paid social
> video under the code's social responsibility rule, read at source.
> https://www.asa.org.uk/rulings/toyota--gb--plc-a23-1191673-toyota--gb--plc.html

> A 2018 UK ruling found that a car ad its advertiser described as fantastical
> and built with substantial CGI still made speed its main message and condoned
> unsafe driving, because many scenes resembled real driving, and a
> closed-course disclaimer on screen did not cure it.
> Source: UK advertising regulator ruling on Fiat Chrysler Automobiles UK Ltd,
> 24 October 2018, ruling A18-449228. An upheld investigation of a YouTube
> pre-roll ad under CAP Code rules 19.2, 19.3 and 19.4, read at source.
> https://www.asa.org.uk/rulings/fiat-chrysler-automobiles-uk-ltd-a18-449228.html

> In June 2025 the UK regulator ruled that a car chase in a chocolate bar ad
> would be dangerous and irresponsible if emulated in real life, even though
> the advertiser argued the ad was set in an absurd, fantastical world and its
> finale defied physics.
> Source: UK advertising regulator ruling on Mars Wrigley Confectionery UK Ltd,
> 11 June 2025, ruling G25-1285557. An upheld investigation of TV and
> video-on-demand ads under BCAP Code rules 20.1 and 20.2 and CAP Code rules
> 19.2 and 19.3, read at source.
> https://www.asa.org.uk/rulings/mars-wrigley-confectionery-uk-ltd-g25-1285557-mars-wrigley-confectionery-uk-ltd.html

> UK regulator guidance says sharp overtaking, competitive driving and weaving
> between lanes risk breaching the rules even in a somewhat fantastical
> context, that seatbelts should be shown being worn, and that blurred lights,
> other blurred images and dust clouds should be avoided as indications of
> excessive speed.
> Source: UK advertising regulator (ASA and CAP) guidance on motoring ads,
> 9 November 2023, refreshed 9 July 2026. Published guidance read at source,
> drawing on ten rulings.
> https://www.asa.org.uk/news/strap-in-for-some-useful-advice-on-motoring-ads.html

> The same guidance says a scenario so clearly fantastical that viewers are
> unlikely to see it as a real demonstration of speed or handling is more
> likely to be acceptable, and calls that a difficult line to tread.
> Source: UK advertising regulator (ASA and CAP) guidance on motoring ads,
> 9 November 2023. Published guidance read at source.
> https://www.asa.org.uk/news/strap-in-for-some-useful-advice-on-motoring-ads.html

> A 2018 UK ruling found that a TV ad for automatic emergency braking gave the
> impression a driver could navigate at speed in a rushed or distracted manner
> and rely on the braking system to prevent a collision.
> Source: UK advertising regulator ruling on Nissan Motor (GB) Ltd, 24 October
> 2018, ruling A18-452330. An upheld investigation under BCAP Code rules 20.1
> and 20.5, read at source.
> https://www.asa.org.uk/rulings/nissan-motor--gb--ltd-a18-452330.html

> UK regulator advice says a zero emissions claim is likely acceptable for a
> purely electric vehicle when the ad makes clear it applies while driving and
> to powertrain emissions; two February 2024 rulings found unqualified zero
> emissions claims misleading, while a third ad was compliant because its
> accompanying claims supplied that context.
> Source: UK advertising regulator (ASA and CAP) advice on zero emissions
> claims, 9 July 2024. Published advice read at source, summarizing three
> proactive investigations ruled on 7 February 2024.
> https://www.asa.org.uk/advice-online/motoring-zero-emissions-claims.html

> The UK advertising code is media-neutral: the rules apply regardless of how
> the content was created, and the advertiser remains responsible for any AI
> output used in its ads.
> Source: UK advertising regulator guidance, June 2026. Published guidance on
> AI and deepfakes, read at source on 9 and 10 September 2026.
> https://www.asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html

> UK regulator guidance holds that images of products must not mislead about
> the product customers will actually receive, and must not be altered in a way
> that exaggerates what the product can do.
> Source: UK advertising regulator (ASA and CAP) guidance on misleading
> imagery, 11 September 2025. Published guidance read at source; it cites no
> vehicle ruling.
> https://www.asa.org.uk/news/a-picture-says-a-thousand-words-avoiding-misleading-imagery-in-ads.html

### EU

> In the EU, all promotional literature for a new car must contain the official
> fuel consumption and CO2 emissions data for the models it refers to,
> alongside a label at the point of sale, a showroom poster or display, and a
> yearly guide.
> Source: European Commission summary of the car labelling directive,
> Directive 1999/94/EC, page updated December 2025. The Commission's own
> description of the directive's requirements, read at source; the directive
> text itself was not reached.
> https://climate.ec.europa.eu/areas-action/transport-decarbonisation/road-transport/car-labelling_en

> A European Commission proposal tabled on 16 December 2025 would repeal the
> car labelling directive and move vehicle labeling into the EU's CO2 standards
> regulation, with new definitions of point of sale and promotional material;
> as of August 2026 it was still a proposal.
> Source: European Parliament Legislative Train Schedule entry for COM/2025/995,
> updated August 2026. The Parliament's own legislative tracker, read at
> source.
> https://www.europarl.europa.eu/legislative-train/package-automotive-package/file-co2-emission-standards-for-new-light-duty-vehicles-and-labelling

### United States

> Federal Trade Commission guidance says an ad making a general fuel economy
> claim for a new car should disclose the EPA estimate, identify it as an
> estimate with the EPA test as its source, and not apply the figures for one
> model type to an ad that depicts a different model type.
> Source: FTC Guide Concerning Fuel Economy Advertising for New Automobiles,
> 16 CFR Part 259, source 82 FR 43687, 19 September 2017. Guidance text read
> through the Legal Information Institute's reproduction of the Code of Federal
> Regulations; practices inconsistent with it may result in FTC action under
> Section 5 of the FTC Act.
> https://www.law.cornell.edu/cfr/text/16/259.4

> A US highway safety research institute says that in the United States,
> broadcasters rather than regulators set standards for car ads, and describes
> those standards as ambiguous and easily circumvented.
> Source: Insurance Institute for Highway Safety news release, 12 May 2026. The
> institute's own statement accompanying its content analysis; the institute is
> funded by auto insurers.
> https://www.iihs.org/news/detail/more-car-ads-promote-vehicle-performance-despite-dangers-of-speed

> Vehicle performance was a theme in 42.7 percent of 2,938 automobile ads aired
> or posted in 2018, 2020 and 2022, speed appeared in 16.3 percent and safety in
> 8.1 percent, and between 2018 and 2022 speed-focused ads rose from 14 to 19
> percent while safety-focused ads fell from 11 to 3 percent.
> Source: Insurance Institute for Highway Safety content analysis, May 2026.
> Ten trained coders classified TV, digital and social ads against 23
> predefined themes, weighted by ad spending; the institute is funded by auto
> insurers. https://www.iihs.org/research-areas/bibliography/ref/2367

### China

> China's Advertising Law bars false or misleading content, makes the
> advertiser responsible for truthfulness, and requires any data, statistics or
> survey results an ad cites to be true, accurate and sourced.
> Source: Advertising Law of the People's Republic of China, 2021 amendment,
> Articles 4 and 11, read September 2026. Statute text read at source in
> Chinese. http://policy.mofcom.gov.cn/claw/clawContent.shtml?id=90361

> A Chinese city regulator fined a car dealership 30,000 yuan in October 2023
> for a showroom ad promising 520 km of real driving range without stating
> where the figure came from.
> Source: Fujian Provincial Administration for Market Regulation typical-case
> notice, 20 May 2024, reporting a penalty by the Longyan municipal regulator
> under Article 11 of the Advertising Law. Published enforcement notice read at
> source in Chinese. https://scjgj.fj.gov.cn/zw/tzgg/202406/t20240603_6459455.htm

> China's industry ministry and market regulator told carmakers in February
> 2025 to standardize how they market their products, and at an April 2025
> meeting the ministry told them not to make exaggerated or false claims and to
> meet their duty to inform buyers.
> Source: Ministry of Industry and Information Technology and State
> Administration for Market Regulation notice No. 45 of 2025, dated 25 February
> 2025, read in two official copies; and Beijing Daily's report of the
> ministry's 16 April 2025 meeting on intelligent connected vehicles, published
> 17 April 2025, read in Chinese.
> https://www.gov.cn/zhengce/zhengceku/202503/content_7009422.htm and
> https://news.bjd.com.cn/2025/04/17/11134350.shtml

> China's labeling measures for AI-generated synthetic content require an
> explicit, user-perceivable label on generated images and video, an implicit
> label in the file's metadata, and a visible label that stays on exported or
> downloaded copies.
> Source: Measures for Labeling AI-Generated Synthetic Content, issued 14 March
> 2025 by the Cyberspace Administration of China, the Ministry of Industry and
> Information Technology, the Ministry of Public Security and the National Radio
> and Television Administration, in force 1 September 2025. Instrument text as
> logged in the source ledger, read at source September 2026.
> https://www.cac.gov.cn/2025-03/14/c_1743654685899683.htm

### Generated imagery

> Physical realism, not semantic accuracy, is where current image generation
> still breaks: a 900-case benchmark covering optics, mechanics and state
> transition scored eleven image editing models against human-annotated
> reflection surfaces and contact points, and every open-source model scored
> below 60, with only two closed systems slightly above it.
> Source: PICABench, image editing physical-realism benchmark, October 2025. A
> human-annotated benchmark preprint, reused from the source ledger.
> https://arxiv.org/html/2510.17681v1

> A Chinese marketplace's rule on AI fake product images names four failure
> categories: product material or style that does not match the real item,
> distorted or exaggerated product effects, an obvious cutout and paste look,
> and bodies or scenes that break physical laws.
> Source: Economic Information Daily, March 2025, reporting the platform's own
> rule announcement and its detection-model enforcement.
> http://jjckb.xinhuanet.com/20250327/db1aeefb30ba4603b6415560e604ed1e/c.html

### First-party, premium SUV case page

> On hubStudio's premium SUV case study, launch imagery for a new SUV across 15
> markets was produced with more than 20 generated environments and zero
> vehicle shipping, with the budget cut by 70 percent against location
> photography and global assets delivered in 3 weeks against six months
> traditionally.
> Source: hubStudio premium SUV case study page, read September 2026.
> First-party figures as the case page publishes them, run under the
> first-party exception; the page publishes no base budget, currency or method,
> so the 70 percent has no absolute behind it.
> https://www.hubstudio.ai/work/premium-suv

> The same case page lists what the generated set covered: mountains, cities,
> deserts, coastlines and forests; snow, rain, clear skies and autumn color;
> golden hour, blue hour and midday; and print, social, web and digital
> campaign formats from one production.
> Source: hubStudio premium SUV case study page, read September 2026.
> First-party descriptive copy, paraphrased into American spelling.
> https://www.hubstudio.ai/work/premium-suv

## Do not publish

| Claim | Where it came from | Why it was cut |
|---|---|---|
| The notice No. 45 of 2025 bars names implying a driver-assistance system is autonomous and bars exaggerated claims of system capability | Financial press, 2025-02-28 | Not in the notice body in two official copies read 2026-09-10. Possibly an attachment or a separate guideline. Never attribute it to the notice |
| Banned Chinese promotional terms (autonomous driving, advanced smart driving, smart driving, valet parking, one-tap summon, remote control) and the "L2 assisted driving" naming form | Beijing Daily, 2025-04-17 | The report itself calls them circulating requirements. No instrument read |
| False autonomous-driving promotion exposed to 5 to 10 times the ad fee and up to two years in prison | Search summaries of Chinese business press, April 2025 | Commentary attributed to a research centre, not an instrument, not read at source. Also a penalty figure outside this brief |
| Car ad absolute-term fines of 200,000 RMB (2017), 600,000 RMB (2021) and 200,000 RMB (2022) against named sellers | Chinese law firm article, 2023-05-18 | Single secondary source; penalty decisions not read; brand names would come from a law firm, not a ruling read |
| Any Chinese rule specifically barring the depiction of dangerous driving in ads | Brief territory | Not found in two Chinese searches; further search blocked by the budget. Use only Advertising Law Art. 9(7), and do not say it covers driving scenes |
| The vulgar-content car promotion case (Ningxia, 100,000 RMB, July 2024) as evidence about vehicle depiction | National regulator typical-case release, 2024-12-05 | Primary, but it concerns taste, not how a car or driving is shown. Would mislead as an example |
| The directive article number for the EU promotional literature duty | Recall | Directive text not reached (EUR-Lex empty body three times, legislation.gov.uk 403). Attribute to the Commission summary only |
| The EU successor would require configurators to show CO2 and fuel changes per option, under new Articles 15a and 15b | Law firm insight, 2025-12-23 | Single-source reading of a proposal not read and not adopted |
| EU food law on pictorial representations (Regulation 1169/2011) or the cosmetics honesty criterion (655/2013) applied to vehicle imagery | Sibling research reuse | Both instruments are scoped to food and cosmetics. Stretching them to cars would be false |
| Any text of 16 CFR 259.4 inside quotation marks | Summarizing fetch of the LII page | The fetch returned paraphrase. Read verbatim at check 2 before quoting |
| The UK regulator's 2012 sports coupe ruling details: a police helicopter chase, bursting through a glass barrier, two complaints | Car press, 2012 | Ruling page not read (URL not found, search budget exhausted). The 2014 advice summary is what runs |
| The 2023 Toyota ruling as "the first car ad banned on environmental grounds" | Trade and car press, November 2023 | Press characterization, not in the ruling |
| The Toyota 2023 outcome as "not upheld" | The regulator's environmental-claims advice page as read | Contradicted by the ruling page, which orders withdrawal. Reading error, see R6 |
| 11,288 speed-related US deaths in 2024, 29 percent of road deaths | IIHS release | Relayed crash statistic, not read at its primary source, and off the brief's question |
| 45 percent of US car commercials showed dangerous behavior (2005); performance mentioned three times more than safety (2018) | Advocacy news, 2019 | Linked studies not read at source; seven to twenty years old; superseded by the May 2026 content analysis |
| Australia's motor vehicle advertising code bans menacing, reckless, speeding or illegal off-road driving | Advocacy news, 2019 | Code not read at source (search budget exhausted). Strong lead for a later pass |
| Buyers 65 percent more confident with real photos, tell real from CGI 84 percent of the time, 92 percent would submit leads, 542.22 dollars of perceived value | Dealership photography vendor blog, undated | "300+ people", no recruitment, stimuli, instrument or date, published by a seller of the photography it favors |
| CGI images take about an hour once the 3D model exists; a full CGI project took one month | Imaging vendor article, 2019; search summary | Seller claims, no method, no definition |
| CGI is usually cheaper than a full photoshoot at scale; assets in days, not weeks | CGI studio blogs and search summaries | Seller claims, no sample, no absolute |
| Named carmakers that "embraced CGI" for commercials | Search summary of vendor pages | Unverified, and naming brands from a vendor page breaks the house rule on what may be named |
| A camera-rigged stand-in vehicle used to film commercials without the car | Tech news, 2016 | Describes one company's commercial product. Alluding to it is competitor commentary |
| Object, attribute and relation hallucination as a measured failure rate | Preprint abstract, 2025 | Taxonomy only; benchmark size and results not read |
| Generated text looks clear but carries semantic errors, applied to badges or plates | Workshop paper, 2026 | About reasoning text, non-archival, no figures read. Scope mismatch |
| Traffic-scene generation has low fidelity and poor alignment | Preprint abstract, 2025 | The authors' motivation for their own method, not a measurement |
| Any vehicle logistics, shipping, crew or location shoot cost figure | Brief statistics list | No method-stated figure on any page read; dedicated search not run. A missing number beats an unsourced one |
| Any share of automotive marketing produced with CGI or AI | Brief territory | No method-stated source found |
| The case page's 70 percent restated with a base, a currency, a scope or as an average | Temptation when blockquoting | The case page publishes none of these |
| How the premium SUV vehicle itself was rendered or sourced | Temptation when writing the generate or capture table | The case page does not say. Only the environments are stated as generated |
| The ecommerce catalog ratio (about 70 percent generated, 30 percent shot) applied to automotive work | Site copy, ecommerce design service page | Different scope: catalogs, not campaign imagery. Would also collide confusingly with the case page's 70 percent budget figure |
| The "$500 to $2,000 per traditional image" line | Site copy on /solutions/ai-production/image | Already on the ledger's do-not-publish list; the page is a link target here, so the risk of lifting it is higher. Link the page, never quote the figure |
| Any claim about how Chinese-language pages cover CGI or AI car advertising | R4 | The Chinese production-side SERP was not mapped |

**Quarantined domains** (never cited, never named, never described on the page):
thedigitalbunch.com, maverickframe.com, pixready.com, blog.nightwolves.studio,
theoz.studio, bmproduccions.com, izmofx.com, izmostudio.com, imagine.art,
flexclip.com, simplified.com, phyron.com, quickads.ai, reelmind.ai,
redlineadvantage.com. Techspot's 2016 feature is not quarantined as a
publisher, but its subject (a named commercial rig) is.

### Searches not run

The session's shared web search budget hit 200 of 200 during research. These
were planned and refused; every one is a lead for check 2 or a later pass, not
a finding:

1. Chinese production-side SERP: 汽车广告 AI生成 CGI 拍摄 替代 实拍 车企.
2. Vehicle logistics or location shoot cost with a stated method.
3. Adoption share of CGI or AI in automotive marketing with a stated method.
4. Australia's voluntary motor vehicle advertising code at source.
5. The ministry's own release of the 16 April 2025 meeting.
6. 轻型汽车燃料消耗量标示管理规定 (China's light vehicle fuel consumption labeling rules) and whether they reach advertising.
7. The UK ruling pages for the three February 2024 zero emissions investigations and the 2012 virtual-city ruling.

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| (none) | | | |

Nothing was captured. No platform spec is involved, so R3 capture is not
required for the rules. The brief's slot requirement asks for an annotated
screenshot: candidates, not captured, are (a) the CAP Code Section 19 page with
rules 19.2 and 19.4 marked, and (b) the Toyota (GB) plc ruling page header with
ruling number and date marked. Both are public regulator pages. Do not annotate
the premium SUV case gallery images without checking with the site owner, since
that is a new use of client work.

## Ledger rows to append

Append under "Industry and regulatory" (or a new "Automotive advertising rules,
brief 38" block) in the ledger's format.

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| CAP Code Section 19 Motoring: 19.2 no unsafe or irresponsible driving and no depiction likely to encourage a breach of Highway Code legal requirements on a public road or space, track demonstrations allowed; 19.3 no speed depicted to encourage irresponsible or unlawful driving; 19.4 speed or acceleration not the main message; 19.5 no exaggerated or unsubstantiated absolute safety claims | "UK non-broadcast advertising code (CAP Code, Edition 12), Section 19, by rule number" | asa.org.uk/type/non_broadcast/code_section/19.html | page undated, read 2026-09-10 | primary | 2026-09-10 | | 38 |
| BCAP Code Section 20 Motoring: 20.1 no dangerous, competitive, inconsiderate or irresponsible driving, safe driving not staid or boring; 20.2 no Highway Code breach; 20.3 power, acceleration or handling only in a clear context of safety; 20.4 speed not the main selling message; 20.5 no exaggerated safety features | "UK broadcast advertising code (BCAP Code), Section 20, by rule number" | asa.org.uk/type/broadcast/code_section/20.html | page undated, read 2026-09-10 | primary | 2026-09-10 | | 38 |
| Ads set in virtual or CGI environments face scrutiny if the driving would be dangerous in reality | "UK advertising regulator (ASA and CAP) advice on motoring, July 2014" | asa.org.uk/advice-online/motoring.html | 2014-07-16 | primary for the advice; 2012 ruling unread | 2026-09-10 | | 38 |
| Sharp overtaking, competitive driving and weaving risk breach even in a somewhat fantastical context; seatbelts shown worn; avoid blurred lights, blurred images and dust clouds; clearly fantastical scenarios more likely acceptable, "a difficult line to tread" | "UK advertising regulator (ASA and CAP) guidance on motoring ads, 9 November 2023, refreshed 9 July 2026" | asa.org.uk/news/strap-in-for-some-useful-advice-on-motoring-ads.html; asa.org.uk/news/on-the-road-to-motoring-ads-compliance.html | 2023-11-09; 2026-07-09 | primary | 2026-09-10 | | 38 |
| Toyota (GB) plc A23-1191673: poster created completely by CGI; fantastical argument rejected; ads condoned vehicle use disregarding impact on nature and the environment; CAP 1.3; must not appear again | "UK advertising regulator ruling on Toyota (GB) plc, 22 November 2023" | asa.org.uk/rulings/toyota--gb--plc-a23-1191673-toyota--gb--plc.html | 2023-11-22 | primary | 2026-09-10 | | 38 |
| Fiat Chrysler Automobiles UK Ltd A18-449228: substantial CGI and a fantastical toy-car concept; speed the main message; scenes resembled real driving; closed-course disclaimer inadequate; CAP 19.2, 19.3, 19.4 | "UK advertising regulator ruling on Fiat Chrysler Automobiles UK Ltd, 24 October 2018" | asa.org.uk/rulings/fiat-chrysler-automobiles-uk-ltd-a18-449228.html | 2018-10-24 | primary | 2026-09-10 | | 38 |
| Mars Wrigley Confectionery UK Ltd G25-1285557: car chase dangerous if emulated in real life despite a fantastical-world argument; BCAP 20.1, 20.2; CAP 19.2, 19.3; five complainants | "UK advertising regulator ruling on Mars Wrigley Confectionery UK Ltd, 11 June 2025" | asa.org.uk/rulings/mars-wrigley-confectionery-uk-ltd-g25-1285557-mars-wrigley-confectionery-uk-ltd.html | 2025-06-11 | primary | 2026-09-10 | | 38 |
| Nissan Motor (GB) Ltd A18-452330: emergency braking ad implied the driver could drive at speed rushed or distracted and rely on the system; BCAP 20.1, 20.5 | "UK advertising regulator ruling on Nissan Motor (GB) Ltd, 24 October 2018" | asa.org.uk/rulings/nissan-motor--gb--ltd-a18-452330.html | 2018-10-24 | primary | 2026-09-10 | | 38 |
| Zero emissions claims acceptable for pure EVs only with while-driving and powertrain context; BMW (UK) Ltd and MG Motor UK Ltd breached, Ford Motor Company Ltd compliant, 7 February 2024 | "UK advertising regulator (ASA and CAP) advice on zero emissions claims, 9 July 2024" | asa.org.uk/advice-online/motoring-zero-emissions-claims.html | 2024-07-09 | primary for the advice; ruling pages unread | 2026-09-10 | | 38 |
| Images of products must not mislead about the product customers will receive, and must not be altered to exaggerate what the product can do | "UK advertising regulator (ASA and CAP) guidance on misleading imagery, 11 September 2025" | asa.org.uk/news/a-picture-says-a-thousand-words-avoiding-misleading-imagery-in-ads.html | 2025-09-11 | primary | 2026-09-10 | | 38 |
| Directive 1999/94/EC: all promotional literature for new cars contains official fuel consumption and CO2 data for the models referred to, plus label, poster or display, yearly guide | "European Commission summary of Directive 1999/94/EC, page updated December 2025", never an article number | climate.ec.europa.eu/areas-action/transport-decarbonisation/road-transport/car-labelling_en. Directive text unreached (EUR-Lex empty, legislation.gov.uk 403) | 2025-12-19 | primary as the Commission's statement | 2026-09-10 | | 38 |
| COM/2025/995 final, tabled 16 December 2025: amends Regulation (EU) 2019/631, new vehicle labelling provisions with definitions of point of sale and promotional material, repeals Directive 1999/94/EC; status tabled | "European Parliament Legislative Train Schedule, updated August 2026" | europarl.europa.eu legislative-train entry for the file | 2026-08-01 | primary for status | 2026-09-10 | | 38 |
| FTC Guide Concerning Fuel Economy Advertising for New Automobiles, 16 CFR Part 259, source 82 FR 43687 (19 September 2017): administrative interpretations of Section 5, basis for voluntary compliance; 259.4 EPA estimate disclosed with general fuel economy claims, identified as estimate and EPA as source, no applying one model type's figures to an ad depicting another | "FTC guidance, 16 CFR Part 259", paraphrase only until verbatim check | law.cornell.edu/cfr/text/16/part-259, /259.1, /259.4 (ecfr.gov bot-blocked) | 2017-09-19 | primary, paraphrase for 259.4 | 2026-09-10 | | 38 |
| US: "broadcasters, rather than regulators, set standards" for car ads, "ambiguous and easily circumvented" | "Insurance Institute for Highway Safety news release, 12 May 2026", with the funding note | iihs.org/news/detail/more-car-ads-promote-vehicle-performance-despite-dangers-of-speed | 2026-05-12 | single-source statement | 2026-09-10 | | 38 |
| 2,938 automobile ads (2018 n=539, 2020 n=1,186, 2022 n=1,213): performance theme 42.7 percent, speed 16.3, safety 8.1; speed-focused 14 to 19 percent and traction 20 to 38 percent while safety 11 to 3 percent, 2018 to 2022 | "Insurance Institute for Highway Safety content analysis, May 2026, ten trained coders, 23 themes, weighted by ad spend; institute funded by auto insurers" | iihs.org/research-areas/bibliography/ref/2367 | 2026-05 | primary | 2026-09-10 | | 38 |
| Advertising Law (2021 amendment) Art. 4 no false or misleading content, advertiser responsible; Art. 9(7) public order and good morals; Art. 11 cited data true, accurate, sourced; Art. 28 false advertising defined | the statute, by article number | policy.mofcom.gov.cn/claw/clawContent.shtml?id=90361 | 2021-04-29 | primary | 2026-09-10 | | 38 |
| Longyan municipal regulator fined a car dealership 30,000 RMB, October 2023, for a showroom ad claiming 520 km real range without a source, Art. 11 | "Fujian Provincial Administration for Market Regulation typical-case notice, 20 May 2024" | scjgj.fj.gov.cn/zw/tzgg/202406/t20240603_6459455.htm | 2024-05-20 | primary | 2026-09-10 | | 38 |
| MIIT and SAMR notice 工信部联通装〔2025〕45号, dated 25 February 2025, item (九): enterprises standardize marketing and promotion. The naming clause reported by financial press is NOT in the body text of either official copy | the instrument, by name and number, (九) wording only | gov.cn/zhengce/zhengceku/202503/content_7009422.htm; ncsti.gov.cn/zcfg/zcwj/202503/t20250303_197224.html | 2025-02-25 | primary | 2026-09-10 | | 38 |
| MIIT Equipment Industry Department No. 1 meeting, 16 April 2025: no exaggerated or false promotion, fulfil disclosure duties | "Beijing Daily report of the ministry meeting, 17 April 2025" | news.bjd.com.cn/2025/04/17/11134350.shtml, matched by the nbd.com.cn headline the same day | 2025-04-17 | triangulated | 2026-09-10 | | 38 |
| Search-results audit: four buyer phrasings for making car ads without a shoot returned 32 slots (28 unique URLs); 19 belong to sellers of CGI, AI generation or photography; the 4 regulator results all sit on the rules query; 0 of 8 production-query pages read in full cite a code, regulator, ruling or fuel-information instrument, and 0 carry a vehicle accuracy checklist | "search-results audit run 10 September 2026, publisher type recorded for every result, no domain named" | R2 in research/automotive-content-without-shipping-a-car.md | 2026-09-10 | primary observation, re-countable | 2026-09-10 | | 38 |
| No method-stated study of vehicle-specific failures in generated imagery (paint, bodywork reflections, badges, wheels, plates, driving side) was found | "publish as none found, September 2026, never as none exists"; checklist labeled production practice | One academic search and three abstracts read; search budget exhausted before a wider pass | 2026-09-10 | primary as a partial absence | 2026-09-10 | | 38 |

**Check 2 to record on an existing row:** the UK regulator AI and deepfakes
guidance row (June 2026) was re-fetched 2026-09-10 and still carries both
sentences. Enter 2026-09-10 in its Check 2 column.

**Do-not-publish rows to append:**

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| China notice No. 45 of 2025 bars autonomy-implying names and exaggerated capability claims | Financial press 2025-02-28, brief 38 | Not in the notice body in two official copies. Attribute nothing beyond item (九) | 2026-09-10 |
| Banned Chinese driver-assistance promotional terms and the "L2 assisted driving" naming form | Beijing Daily 2025-04-17, brief 38 | The report labels them circulating requirements; no instrument | 2026-09-10 |
| 5 to 10 times the ad fee and up to two years in prison for false autonomous-driving promotion | Search summaries, April 2025, brief 38 | Commentary, not an instrument, not read at source | 2026-09-10 |
| Chinese car ad absolute-term fines of 200,000, 600,000 and 200,000 RMB against named sellers | Law firm article 2023-05-18, brief 38 | Single secondary source, decisions unread | 2026-09-10 |
| An article number for the EU promotional literature duty; successor configurator duties under Articles 15a and 15b | Recall; law firm insight 2025-12-23, brief 38 | Directive and proposal texts not reached | 2026-09-10 |
| Regulation 1169/2011 or 655/2013 applied to vehicle imagery | Brief 27 reuse temptation, brief 38 | Food and cosmetics instruments; they do not reach cars | 2026-09-10 |
| Buyers 65 percent more confident with real photos; 84 percent tell real from CGI; 542.22 dollars perceived value | Dealership photography vendor blog, undated, brief 38 | 300+ respondents, no method, seller of the favored option | 2026-09-10 |
| Any vehicle logistics or location shoot cost figure; any CGI adoption share in automotive marketing | Brief 38 statistics list | No method-stated source found; searches incomplete | 2026-09-10 |
| The 2023 Toyota ruling as the first environmental car ad ban; the 2012 virtual-city ruling details | Trade and car press, brief 38 | Press characterization; 2012 ruling unread | 2026-09-10 |
| Australia's motor vehicle advertising code content | Advocacy news 2019, brief 38 | Not read at source. Lead | 2026-09-10 |

## Notes for the writer

**Frame.** This is a rules-and-practice piece. SPEC.md structure rule 10: state
plainly, once and early, that it describes production practice, not legal
advice. The spec-page slot means a visible "Reviewed" date. No China platform
spec value is used, so the China spec disclaimer block is not required.

**H1 and meta.** Flag, do not change silently: the working H1 "Automotive
content without shipping a car" omits the primary query's words. A compliant
H1 could read "CGI car advertising without a photoshoot: the rules that still
apply". The approved title (41 characters) and meta description (147
characters) stay accurate against this research and need no change. The meta's
"where a real shoot still wins" must be delivered from site copy, not from an
external source (none cleared), so keep that section short.

**Outline mapped to the must-includes.**

1. Hero H1 plus a one-sentence answer: generation is allowed, and the motoring
   rules apply to the image whatever made it.
2. First H2 restating the query, 40 to 60 words naming hubStudio once, then
   **the generate or capture table by asset** (must-include 1). Label it
   production practice. Build it from site copy only: environments and market
   variants generated (premium SUV case page); reflective, luxury hero and
   material close-ups shot (ecommerce design FAQ, line 212); talent in the
   vehicle hybrid (who-we-are and ai-excellence copy logged in the brief 27
   research file); any image carrying a fuel, CO2 or range figure either way,
   but the model depicted must match the figures. Do not state how the case
   vehicle was made.
3. H2 "What are the rules for showing driving in car ads?" with **the rules
   table: code, rule, date** (must-include 3). Rows: CAP 19.2, 19.3, 19.4, 19.5;
   BCAP 20.1, 20.3, 20.5; EU car labelling directive (Commission summary,
   December 2025) and the 16 December 2025 repeal proposal; FTC 16 CFR Part
   259 (2017); China Advertising Law Arts. 4 and 11 (2021); MIIT and SAMR
   notice No. 45 item (nine) (25 February 2025); CAC labeling measures (in force
   1 September 2025). Add one line that the US has no federal code on driving
   depiction, attributed to the institute.
4. H2 "Does a CGI or AI setting change how the rules apply?" The strongest
   section and the SERP gap. Toyota 2023 (fully CGI poster), Fiat 2018
   (substantial CGI plus disclaimer), Mars Wrigley 2025 (fantasy argument),
   2014 advice on virtual worlds, June 2026 media-neutral guidance, the
   "difficult line" on clearly fantastical scenarios. The brief's slot asks for
   "rejection reasons": deliver a table of ruling, date, what was shown, why it
   failed, drawn from the five UK rulings. There is no platform rejection
   notice; do not imply one.
5. H2 "What must be accurate in generated automotive imagery?" **The accuracy
   checklist** (must-include 2). Two evidence tiers, labeled in a column:
   - Sourced: model shown matches the model type whose fuel economy or range
     figures run (FTC 259.4); EU promotional material carries official fuel and
     CO2 data; China range or efficiency figures carry their source (Art. 11,
     Longyan case); zero emissions wording qualified (UK advice 2024);
     occupants belted (UK guidance 2023); no blur or dust speed cues on road
     scenes (UK guidance 2023); lane discipline, no sharp overtaking or weaving
     (CAP 19.2, UK guidance); off-road scenes only with evident purpose (Toyota
     2023); safety and assistance features never shown as licence to drive
     faster or less attentively (Nissan 2018, BCAP 20.5, 2020 in-car guidance);
     no exaggerated or false driver-assistance claims in China (April 2025
     meeting); generated images labeled where China's measures apply;
     reflections and contact points physically consistent (PICABench, scoped to
     editing models); no cutout look, no physics-breaking scene (Chinese
     marketplace rule, as an analogous standard).
   - Production practice, no method-stated source: paint color and finish
     match the market's production color; badges, model script and grille
     reproduced exactly; wheel design and spoke count consistent across angles;
     plates in the market's format and non-identifying; steering wheel side,
     driving side, road markings and signage language match the market;
     reflections in paint and glass agree with one light source and the
     environment's geometry.
6. H2 "When does an automotive shoot still need a real car?" Short. From site
   copy (reflective and luxury categories shot; hybrid for talent). No external
   figure cleared. Do not claim any rule forces capture: none read does.
7. H2 on the premium SUV case (must-include 4): the two first-party quotes,
   attributed to the case page, client unnamed, with the no-absolute note on
   the 70 percent.
8. FAQ, the brief's five:
   - Can car ads use CGI or AI-generated images? Yes; media-neutral guidance;
     the rulings.
   - What must be accurate? Checklist summary, both tiers named.
   - When does a shoot still need a real car? Site copy only.
   - What are the rules for showing driving? CAP 19, BCAP 20, and one line each
     for EU, US, China.
   - How long does generated automotive content take? **Only** the case page's
     "3 weeks ... versus six months traditionally", attributed, stated as one
     engagement. No market figure exists in this file.
9. CTA: "Brief a vehicle launch".

**Must-includes that cannot be fully met, and why.**

- The accuracy checklist cannot be sourced end to end: no method-stated study
  of vehicle-specific generation failures was found. The vehicle-specific rows
  run labeled production practice.
- The slot's annotated screenshot does not exist; nothing was captured. See the
  screenshot inventory for two public regulator pages that could be captured.
- The slot's "rejection reasons" have no platform source; the regulator ruling
  table substitutes.
- China has no cleared rule on depicting dangerous driving; say only what
  Articles 4, 9(7) and 11 and the 2025 notice and meeting say.
- No vehicle logistics cost and no adoption figure. Cut, per the brief.

**Tables available:** generate or capture by asset; rules table (code, rule,
date); ruling reasons (ruling, date, what was shown, why it failed); accuracy
checklist with an evidence column. Four, five columns maximum each.

**Internal link targets, verified in `src/pages` on 2026-09-10.**

| Anchor idea | URL | File |
|---|---|---|
| premium SUV case study | /work/premium-suv | src/pages/work/[slug].astro with slug `premium-suv` in src/data/case-studies.ts |
| manufacturers solutions page | /solutions/manufacturers | src/pages/solutions/manufacturers.astro |
| AI image production | /solutions/ai-production/image | src/pages/solutions/ai-production/image.astro (link it; never quote its unsourced per-image price line) |
| Platform page (SPEC rule 9 needs one; the brief lists none) | /solutions/platforms/meta, /solutions/platforms/tiktok or /solutions/platforms/douyin | all three exist under src/pages/solutions/platforms/ |
| Insights hub | /resources/insights | src/pages/resources/insights/index.astro |
| Sibling: shoot or generate | /resources/insights/shoot-it-or-generate-it | exists |
| Sibling: China AI labeling | /resources/insights/china-ai-labeling-rules-production-workflow | exists |
| Sibling: disclosure audit trail | /resources/insights/disclosure-audit-trail-per-asset | exists |

The "Playbook" cluster hub named in the brief frontmatter was not located as a
page; use the insights hub unless the publish step knows otherwise.

**Before drafting, run check 2** on every cited URL, and read 16 CFR 259.4
verbatim on the LII page (or ecfr.gov if it unblocks) before quoting any of
its wording.

## R8. Reconciliation (filled after drafting)
