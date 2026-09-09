# Research: content-credentials-c2pa-in-production

| Field | Value |
|---|---|
| Brief | 025 |
| Target query | c2pa content credentials for brands |
| Gap statement (one sentence) | Every page ranking for this territory prints a platform-by-platform survival table with no dated upload test behind it, and the only current, method-stated tests measure whether a platform reads provenance and applies its own label, never whether the signed manifest is still inside the file a viewer downloads, so nobody has published the stage-by-stage pipeline result a production team actually needs. |
| Research time spent | About 85 minutes active, primary sources and dated tests first |
| Written | 2026-09-09 |

Scope note for the writer, to be stated on the page in the article's own
voice: this describes production practice, not legal advice.

## Scope decisions settled before research, so the writer does not have to guess

1. **Distribution platforms may be named. Tools and vendors may not.** The brief
   requires a table of platforms that preserve credentials and platforms that do
   not, and the site already names Douyin, RedNote, Tmall, TikTok and Meta as
   surfaces it produces for. A distribution surface is the subject matter, not a
   market figure and not a competitor. Every other category stays unnamed:
   generative models, editing software, asset management systems, metadata
   tooling, detection services, image hosts. Describe the role, never the
   product. Carried from brief 024.
2. **Every platform row carries what was measured, not just a verdict.** There
   are two different questions and the ranking set collapses them into one. Did
   the platform read the provenance and show its own label? Did the signed
   manifest survive into the file a viewer downloads? A row that answers the
   first says so. A row with no test behind it is marked untested.
3. **No claim that C2PA satisfies any legal requirement.** No instrument
   researched for brief 024 names C2PA. Carried forward unchanged.
4. **Nothing in the article says a credential survives a stage unless a dated
   test with a stated method says so.** Brief 024 blocked every metadata
   survival claim outright. That block is only partly lifted here, and the lift
   is narrow. See "What the brief 024 block becomes".

## R2. SERP map

Query: `c2pa content credentials for brands`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | deep-image.ai | Tool vendor blog | Why ecommerce brands should care about provenance | Vendor page, no pipeline, no test, no platform behavior | 2025 |
| 2 | fotoware.com | Asset management vendor blog | What C2PA is, definition level | No survival data, sells the adjacent product | 2025 to 2026 |
| 3 | onlinebrandambassadors.com | Marketing blog | Deepfakes and ethical advertising framing | No production stages, no dates, no tests | 2025 to 2026 |
| 4 | layer3labs.io | Vendor guide | Provenance explained, standards overview | Explainer only, no workflow, no test | 2025 to 2026 |
| 5 | sammapix.com | Tool blog | A "2026 guide" to Content Credentials | Undated claims, no method anywhere | 2026 |
| 6 | rewarx.com | Ecommerce vendor blog | Credentials on product listings | No platform table, no test, promotional | 2026 |
| 7 | contentcredentials.org | Standards body consumer site | The verify tool and what a credential shows | Consumer surface, not a producer workflow | Current |
| 8 | contentauthenticity.org | Coalition site | How the standard works, adoption news | Published by the parties promoting it, no survival testing | Current |
| 9 | c2pa.org | Standards body site | Specifications, conformance, FAQ | Specification, not practice. Says nothing about what platforms actually do | Current |
| 10 | en.wikipedia.org | Encyclopedia | History and adoption of Content Credentials | Encyclopedic, no production stages | Current |

Query: `do content credentials survive social media`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | medium.com (self-published) | Personal post | One practitioner's routine for keeping credentials visible | Self-published, one person, no stated sample, no per-platform dates | 2025 to 2026 |
| 2 | community.adobe.com | Vendor forum thread | User reports of credentials disappearing | Forum posts. Not evidence, and the host is an interested party | 2024 to 2026 |
| 3 | makeinfluence.com | Marketing platform academy page | How platforms label AI-assisted content | No test, no dates, no download-side check | 2025 to 2026 |
| 4 | contentauthenticity.org | Coalition blog | The Durable Content Credentials concept | Written by the promoting coalition. A design answer, not a measurement | 2024 to 2026 |
| 5 | softwareseni.com | Content-farm style vendor blog | Repeats the durable-credentials framing at length | No primary source, no test, no author accountability | 2026 |
| 6 | glyndewis.com | Photographer blog | A working photographer's take | Opinion, no method, no per-platform test | 2025 |
| 7 | aimetadataremover.org | Blog attached to a metadata removal tool | Claims a six-platform survival table | Published by a business that sells metadata removal. R5 fails on who paid | 2026 |
| 8 | toolsmint.com | Aggregator guide | Broad 2026 overview of labels and verification | No method statement anywhere | 2026 |
| 9 | lumethic.com | Vendor article | What happens to credentials on social platforms | No test, no dates, promotional | 2026 |
| 10 | aiimagedetectorapi.com | Detection API vendor blog | The standard explained for 2026 | Sells detection. No test, no method | 2026 |

Query: `c2pa survives platform upload`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | makeinfluence.com | Marketing academy page | Platform labeling behavior, summarized | Summarized from announcements, not tested | 2025 to 2026 |
| 2 | medium.com (self-published) | Personal post | Same practitioner post as above | Same limits | 2025 to 2026 |
| 3 | softwareseni.com | Vendor blog series | "Verification reality" in 2026 | Long, unsourced, no test | 2026 |
| 4 | aimetadataremover.org | Metadata removal tool blog | "What survives an upload to 6 platforms" | Interested party sells removal. No method | 2026 |
| 5 | truescreen.io | Verification vendor article | The standard and its real limits | Useful framing, vendor authored, no test | 2025 to 2026 |
| 6 | bigbluemarble.com | Agency-style vendor post | How the standard protects authenticity | Promotional, no test | 2025 to 2026 |
| 7 | lpic.cc | Image host blog | Claims a seven-platform survival table | Says plainly the data comes from announcements and community reports, "not per-image upload tests", and the page sells the host as the surface that preserves credentials | 2026 |
| 8 | metaclean.app | Metadata removal tool blog | What credentials are and how to remove them | Sells removal | 2026 |
| 9 | eyesift.com | Detection vendor FAQ | Adoption status in 2026 | Sells detection, no method | 2026 |
| 10 | metastrip.app | Metadata removal tool blog | How to remove credentials | Sells removal | 2026 |

Query: `content credentials production workflow`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | business.adobe.com | Software vendor blog | Attaching credentials across enterprise campaigns | Product announcement. Vendor, not testable practice | 2025 to 2026 |
| 2 | medium.com (self-published) | Personal essay | That credentials do not survive the edit today | The closest piece in the whole set to this brief's angle. Self-published, no test table, no dates | 2025 to 2026 |
| 3 | blog.pageproof.com | Review tool vendor blog | Why credentials matter in approvals | Product framing, no stages | 2025 to 2026 |
| 4 | helpx.adobe.com | Vendor documentation | How credentials work inside one product | Single product, no pipeline, no platform behavior | Current |
| 5 | contentauthenticity.org | Coalition explainer | How it works end to end, in principle | In principle. No measured stage where it fails | Current |
| 6 | opensource.contentauthenticity.org | Open-source tooling docs | How to sign and verify from the command line | Genuinely useful implementation docs. No production workflow, no survival data | Current |
| 7 | contentcredentials.org | Consumer verify site | Checking one file | One file at a time, not a pipeline | Current |
| 8 | glyndewis.com | Photographer blog | Capture-side practice | Capture only, stops before distribution | 2025 |
| 9 | influencers-time.com | Marketing blog | How approval workflows must adapt | Speculative, no source, no test | 2026 |
| 10 | c2pa.org, Deployment Guidance 1.0, 2026-07-08 | Standards body guidance | What to ask a vendor, how to deploy | The standards body's own deployment document publishes no platform survival data at all. That absence is the story | 2026-07-08 |

**The bar:** the ranking set runs roughly 800 to 2,000 words, is almost entirely
vendor or coalition authored, and carries either no table or a survival table
with nothing behind it. Two of the highest-ranking pages for the survival query
are published by businesses that sell metadata removal, which is the opposite
commercial interest. Across forty results, not one page states a test date, a
file type and a tool version in the same row. The bar to beat is 2,200 words
with a stage-by-stage table where every row says what was measured, when, and on
what, and where the untested rows say untested.

**The gap, in one sentence:** Every page ranking for this territory prints a
platform-by-platform survival table with no dated upload test behind it, and the
only current, method-stated tests measure whether a platform reads provenance
and applies its own label, never whether the signed manifest is still inside the
file a viewer downloads, so nobody has published the stage-by-stage pipeline
result a production team actually needs.

**H1 consequence:** the H1 is the pipeline, not the standard. The ranking pages
explain the standard well enough. None of them tells a producer which stage
breaks it.

## The central question, and the honest answer

The brief asks where Content Credentials survive and where they break, tested
rather than assumed. Brief 024 blocked every metadata survival claim because
nothing current and methodical existed. This file went looking for that missing
test. Here is exactly what was searched and exactly what came back.

**Searches run, 9 September 2026.**

| Query | What it was meant to surface | Result |
|---|---|---|
| `do content credentials survive social media upload` | A dated platform test | Ten vendor pages, two of them selling metadata removal. No test |
| `c2pa survives platform upload` | A dated platform test | Same genre. The one page claiming a seven-platform table states it did not run per-image upload tests |
| `"c2pa" manifest stripped upload test methodology platforms 2026` | A methodology statement | Content farms, plus the conformance explorer. No methodology |
| `downloaded image from platform still has C2PA manifest verify test study 2026 controlled experiment` | A download-side check | Verification tool guides only. Nothing measuring a downloaded file |
| `IPTC social media photo metadata test results 2026 C2PA` | The standing industry test | Found the standing test. It is eleven years stale and does not cover C2PA. See below |
| `arxiv C2PA provenance manifest survival study empirical evaluation platforms` | Academic measurement | Two relevant papers. Neither tests platform uploads. See below |
| `C2PA metadata platform upload stripping implicit label Douyin RedNote test`, in Chinese | A Chinese-language platform test | Explainers, plus tool pages selling label removal. No test on Chinese platforms of C2PA specifically |

**Finding 1. The standing industry metadata test is eleven years old and does
not cover C2PA.** The Embedded Metadata Initiative, run by the photo metadata
working group of the IPTC, publishes a social media metadata test procedure and
a results grid. The procedure is genuinely method-stated: upload a file with
known fields, check the web interface, save the image locally, then use the
platform's own download feature and inspect the file. The results grid covers
fourteen sites. Its most recent round was run in late 2015. C2PA appears nowhere
in either document. This is the closest thing the industry has to a standing,
repeatable, published test of exactly the question this article asks, and it has
not been run against Content Credentials.

**Finding 2. The standards body's own deployment guidance publishes no survival
data.** Content Credentials: Deployment Guidance, version 1.0, dated 8 July
2026, is the coalition's own document for organizations adopting the standard.
It warns generically that re-exporting a file through tools that remove metadata
can strip the embedded credentials, and it tells buyers to make vendors
demonstrate the actual workflow they use rather than an idealized one. It
publishes no platform table, no test, and no measurement. The party with the
strongest interest in showing that credentials survive has not published a
number.

**Finding 3. The academic work that runs experiments explicitly did not test
platforms.** The one 2026 paper that runs a robustness experiment on signed
assets applied JPEG compression, crop and resize, and a screenshot simulation to
500 generated images, and validated results against a web verification tool. Its
own limitations section says real-world platform testing was partial and that it
did not test against platform-level moderation pipelines. The other relevant
2026 paper is a formal security analysis of the specifications, not a survival
test.

**Finding 4. What does exist is two dated, method-stated upload tests, and both
measure a different thing.** Both measure whether a platform reads provenance
and applies its own label. Neither measures whether the manifest is still inside
the file a viewer downloads. That distinction is the article's spine, and the
ranking set does not make it once.

**What the brief 024 block becomes.** Brief 024 blocked any claim that metadata
survives platform upload, format conversion or re-encoding. That block stands
for survival. It is narrowed here in one direction only: the article may now say,
with dates and stated methods, what platforms did with provenance metadata at
the reading stage, because two dated tests measured it. The article still may
not assert that a manifest survives to the downloader on any platform, because
no dated test of that was found and the standards body has not published one.
The correct sentence on the page is that this is the untested half, and the fix
is that a production team tests its own path.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified.
Anything marked unverified is cut from the outline before writing.

### The standard itself, primary

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| C2PA technical specification version 2.4, published April 2026, is the current version | spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html | 2026-04 | n/a | Specification text | The coalition, an interested party as to adoption but authoritative as to its own text | primary |
| A hard binding is one or more cryptographic hashes that uniquely identifies either the entire asset or a portion thereof | Same | 2026-04 | n/a | Specification text, definitions | Same | primary |
| A soft binding is a content identifier that is either not statistically unique, such as a fingerprint, or embedded as an invisible watermark in the identified digital content | Same | 2026-04 | n/a | Specification text, definitions | Same | primary |
| A Durable Content Credential is a Content Credential for which there exists one or more soft bindings that enable its discovery in a manifest repository | Same | 2026-04 | n/a | Specification text, definitions | Same | primary |
| The specification acknowledges the failure directly: an asset can become separated from its C2PA Manifest due to removal or corruption of asset metadata, and a fingerprint of the digital content could be used to search a database to recover the asset with an intact manifest | Same | 2026-04 | n/a | Specification text | Same | primary |
| A manifest starts with an opened or created action, and actions assertions cannot be redacted | Reused from brief 024, same specification, version 2.4 | 2026-04 | n/a | Specification text | Same | primary |
| Content Credentials: Deployment Guidance version 1.0, dated 8 July 2026, warns that re-exporting a file through tools that remove metadata can strip the embedded Content Credentials, and tells adopters to require vendor demonstrations that reflect the actual workflow in use, not idealized or one-off scenarios | c2pa.org/wp-content/uploads/sites/33/2026/07/Content-Credentials-Deployment-Guidance.pdf | 2026-07-08 | n/a | The coalition's own deployment document | The coalition | primary |
| The Deployment Guidance publishes no platform-by-platform survival data | Same | 2026-07-08 | n/a | Read in full on 9 September 2026 looking for a platform table or a survival measurement. None is present | The coalition | primary, by absence |
| A conformance program exists, launched mid-2025, certifying generator products, validator products and certification authorities, with a publicly accessible conforming products list | c2pa.org/conformance/ | Page last updated 2026-08-10 | n/a | The coalition's own program page | The coalition | primary |

### Dated upload tests that do exist

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| An independent platform audit published 18 March 2026 created more than 200 AI-generated images and videos with three generators and posted them across five platforms, then checked whether each platform applied its own AI label | indicator.media/p/ai-labeling-is-still-very-much-a-work-in-progress | 2026-03-18 | More than 200 assets, five platforms, three generators | Controlled upload, then observation of the platform's own label. Per-platform label rates published. Exact split per generator not published | Independent subscription publication covering digital deception. No vendor funding disclosed, and none of the tested platforms is the publisher | primary as to the test, single-source as to the numbers |
| In that audit, two platforms labeled roughly two thirds of the AI content, one labeled about half, one about a third, and one labeled 15 of 105 images | Same | 2026-03-18 | As above | As above | As above | single-source |
| The same audit found that all platforms except one increased the share of AI content they correctly labeled compared with the previous round in October 2025 | Same | 2026-03-18 | As above | Repeat of an earlier round by the same publisher | As above | single-source |
| The audit reports that one AI provider signals generated content through the IPTC Digital Source Type property in the XMP header rather than through a C2PA manifest, while two others assert digital source type inside a C2PA manifest, and that platforms differ in which of the two they read | iptc.org/news/ai-disclosure-on-social-media-a-work-in-progress/ | 2026-03-18 | As above | Standards body's own write-up of the audit, adding the metadata mechanism behind each result | IPTC, a standards body, not a vendor | triangulated with the audit itself |
| In a September 2025 test, AI videos from two Chinese generation tools were uploaded to six Chinese platforms, both with and without the tool's visible watermark and with no manual declaration. One platform flagged every clip, one flagged only the watermarked versions, and four flagged none | m.bjnews.com.cn/detail/1758587508129909.html | 2025-09 | Six platforms, two content categories, watermarked and stripped variants | A Beijing daily's own controlled upload test | The newspaper | primary, reused from brief 023 where it passed check 1 |

### The regulator's own evidence that export strips metadata

Reused from brief 023, verified on the instrument and enforcement pages. Not
re-researched here.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| A November 2025 enforcement round found generation services adding no visible label, omitting the label when files were exported, and failing to embed metadata identifying the producer and the content, and found distribution services failing to verify implicit labels, failing to show a prominent notice, and failing to add distribution metadata | cac.gov.cn/2025-11/25/c_1765795550841819.htm | 2025-11-25 | Not disclosed | Regulator's own enforcement report | Issuing body | primary |
| Article 4 of the Measures for Labeling of AI-Generated Synthetic Content: when a service provider offers download, copy or export functions, it must ensure the file contains a conforming explicit label | cac.gov.cn/2025-03/14/c_1743654684782215.htm | 2025-03-14 | n/a | Instrument text | Issuing bodies | primary |
| Article 5: the implicit label sits in the file metadata and carries content attribute information, the service provider name or code, and a content ID | Same | 2025-03-14 | n/a | Instrument text | Issuing bodies | primary |
| Article 6: a distribution platform adds a prominent notice in three cases, including where the implicit label in the metadata confirms the content is generated | Same | 2025-03-14 | n/a | Instrument text | Issuing bodies | primary |
| A February 2026 campaign report lists the sale of tutorials and software for removing AI labels among the categories acted on | cac.gov.cn/2026-02/12/c_1772636033171974.htm | 2026-02-12 | Not disclosed | Regulator's own campaign report | Issuing body | primary |

### Independent security analysis of the specification

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| An independent academic security analysis dated 23 April 2026 reports the first formal-methods analysis of the coalition's core protocols across specification versions 2.2 to 2.4 and concludes the specifications fail to achieve their claimed security goals, adding that the standard should not yet be relied upon for high-stakes uses such as financial disclosures, journalism or legal evidence | arxiv.org/abs/2604.24890 | 2026-04-23, listed 2026-04-27 | n/a, formal analysis plus implementation review | Formal-methods protocol analysis and review of implementations | Authors at a university cyber defense lab, an independent forensics researcher and a US government laboratory. No vendor funding disclosed. Not a party selling provenance tooling | primary as to the analysis, single-source as to the conclusion |
| The same analysis notes that version 2.3 of January 2026 incorporated some of its suggestions and that version 2.4 of April 2026 does not address its remaining concerns | arxiv.org/html/2604.24890v1 | 2026-04 | n/a | Same | Same | single-source |
| Among its recommendations: protect the entire file including non-C2PA metadata rather than selected portions, mandate consistency across validation tools, and establish independent security audits for certified products | Same | 2026-04 | n/a | Same | Same | single-source |
| A March 2026 paper demonstrates an integrity clash in which an asset carries a cryptographically valid manifest asserting human authorship while its pixels carry a watermark identifying it as AI-generated, both passing their own checks. Its experiments used 500 generated images under three perturbations, and it states that it validated against a web verification tool but did not test against platform-level moderation pipelines | arxiv.org/html/2603.02378v1 | 2026-03-02 | 500 images, three perturbations | Perturbation experiments before signing, verified against a public verification site | Authors at two universities. No vendor funding disclosed | primary as to the experiment, and the limitation is the citable part |

### The adoption and value question

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| An online experiment with 6,114 participants across six news sources in the United States, the United Kingdom and Norway found that presenting provenance metadata significantly improved perceptions of an image's transparency and credibility and increased trust in the news source shown. Each participant evaluated six news article previews, with a provenance label at three levels of detail or none | ojs.aaai.org/index.php/ICWSM/article/view/42749 | 2026, conference proceedings volume 20 | 6,114 participants | Randomized online experiment, label present or absent, three detail levels | Two university research centres. Funder not disclosed on the record page. No provenance vendor is an author | primary |
| A platform announced on 9 May 2024 that it was the first video sharing platform to put Content Credentials into practice, that it was starting to read Content Credentials to auto-label content created elsewhere, and that over the coming months it would also start attaching Content Credentials to its own content, which would remain on content when downloaded | newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy | 2024-05-09 | n/a | The platform's own announcement | The platform | primary as to what was announced, unverified as to whether the download behavior shipped |

## The stage table, with what actually backs each row

The brief requires a stage-by-stage table marked survives, degrades or strips.
Almost none of those cells can be filled from published evidence. This is the
honest version, and the fourth column is the one the ranking set leaves out.
The writer builds the article's table from this, keeping the evidence column.

| Stage | What the evidence supports | Evidence behind it | If nothing backs it |
|---|---|---|---|
| Capture | Signing at capture is defined in the specification and certified through the conformance program. Whether a given body signs is a device question, not a standard question | Specification 2.4, conformance program page updated 10 August 2026 | Do not name devices. Say the capability exists and has to be checked per body |
| Ingest and transfer | Untested. No published test of copy, sync or transfer tooling | none found | Mark untested. Tell the reader to verify one file end to end |
| Retouch and edit | The specification says a manifest starts with an opened or created action and that actions assertions cannot be redacted, so an editing chain is expressible. Whether a given application writes it is a product question | Specification 2.4 | Mark untested per application. Never name the application |
| Export and re-save | The coalition's own deployment guidance warns that re-exporting through tools that remove metadata can strip the embedded credentials. A regulator's November 2025 enforcement round found generation services omitting the label when files were exported | Deployment Guidance 1.0, 8 July 2026; enforcement report, 25 November 2025 | This is the strongest sourced break point in the whole pipeline. Lead with it |
| Screenshot | The coalition's own guidance names screenshotting as a way credentials are lost | Deployment Guidance 1.0, 8 July 2026 | Cleared. Say it plainly |
| Asset management and versioning | Untested. No published test | none found | Mark untested |
| Platform upload, reading side | Two dated tests measured whether platforms read provenance and applied their own label. Results differ by platform and by which metadata mechanism the generator used | Independent platform audit, 18 March 2026; a Beijing daily's controlled upload test, September 2025 | Cleared with dates. Say what was measured |
| Platform download, survival side | No dated, method-stated public test found | none found, see the search log above | This is the article's headline finding. Say the absence out loud, then give the reader the test to run |
| Social re-encode | Untested in any published, dated form. The mechanism is plausible and universally asserted, but assertion is not measurement | none found | Do not assert. Frame as the reason to test your own path |
| Recovery after a break | The specification defines soft bindings, watermarks and fingerprints, and a manifest repository lookup, as the recovery path when an asset is separated from its manifest | Specification 2.4 | Cleared as a design answer. Never as a measured outcome |

## Cleared for use

Blockquote-ready. Use these exact attributions. Every one carries a date and a
one-sentence method.

> The C2PA technical specification, version 2.4, published April 2026, defines a
> hard binding as one or more cryptographic hashes that uniquely identifies
> either the entire asset or a portion thereof, and a soft binding as a content
> identifier that is either not statistically unique, such as a fingerprint, or
> embedded as an invisible watermark in the identified digital content.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.
> https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

> The specification concedes the failure mode in its own words: an asset can
> become separated from its C2PA Manifest due to removal or corruption of asset
> metadata, and a fingerprint of the digital content of the asset could be used
> to search a database to recover the asset with an intact C2PA Manifest.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.
> https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

> A Durable Content Credential, in the specification's own definition, is a
> Content Credential for which there exists one or more soft bindings that
> enable its discovery in a manifest repository. Durability is a lookup, not a
> property of the file.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.
> https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

> The standards body's own deployment guidance, version 1.0 of 8 July 2026,
> tells adopters to avoid screen-shotting or re-exporting a file through tools
> that remove metadata, because that can strip the embedded Content Credentials,
> and to require any vendor demonstration to reflect the actual workflow in use
> rather than an idealized or one-off scenario.
> Source: Content Credentials: Deployment Guidance, version 1.0, 8 July 2026,
> read in full 9 September 2026.
> https://c2pa.org/wp-content/uploads/sites/33/2026/07/Content-Credentials-Deployment-Guidance.pdf

> The same deployment guidance, the standards body's own document for
> organizations adopting the standard, publishes no platform-by-platform
> survival data: no table, no test, no measurement of what reaches a viewer.
> Source: Content Credentials: Deployment Guidance, version 1.0, 8 July 2026,
> read in full on 9 September 2026 looking for a platform table or a survival
> measurement. None is present.
> https://c2pa.org/wp-content/uploads/sites/33/2026/07/Content-Credentials-Deployment-Guidance.pdf

> The photo industry's standing social media metadata test, the one published
> procedure that uploads a file with known fields, saves it back through the
> platform's own download and inspects it, last published a results round in
> late 2015 and covers fourteen sites. It does not test Content Credentials at
> all.
> Source: Embedded Metadata Initiative test procedure and results grid,
> maintained by the photo metadata working group of the IPTC, results round late
> 2015, both pages read 9 September 2026.
> https://www.embeddedmetadata.org/social-media-test-results.php

> An independent platform audit published 18 March 2026 generated more than 200
> AI images and videos with three different generative systems and posted them
> to five platforms, then checked whether each platform applied its own
> AI-generated label. Every platform but one had improved its labeling rate
> since the same publisher's previous round in October 2025.
> Source: an independent digital-deception publication's own controlled upload
> audit, March 2026, more than 200 assets, three generators, five platforms.
> https://indicator.media/p/ai-labeling-is-still-very-much-a-work-in-progress

> That audit exposed a split in the plumbing. One generative system signals AI
> origin through the IPTC Digital Source Type property in the file's XMP header,
> while two others assert the same vocabulary inside a C2PA manifest, and
> platforms differ in which of the two they read. One platform read the XMP
> property and labeled that system's images while missing the manifest-based
> signal from another; two platforms labeled all of one system's images and
> videos correctly and missed the XMP property entirely.
> Source: IPTC's own write-up of the March 2026 audit, published 18 March 2026,
> read 9 September 2026.
> https://iptc.org/news/ai-disclosure-on-social-media-a-work-in-progress/

> In a September 2025 test, AI videos from two Chinese generation tools were
> uploaded to six Chinese platforms, both with and without the tool's visible
> watermark and with no manual declaration. One platform flagged every clip, one
> flagged only the watermarked versions, and four flagged none.
> Source: a Beijing daily's own controlled upload test, September 2025, six
> platforms, two content categories, watermarked and stripped variants.
> https://m.bjnews.com.cn/detail/1758587508129909.html

> A November 2025 enforcement round found generation services adding no visible
> label, omitting the label when files were exported, and failing to embed
> metadata identifying the producer and the content, and found distribution
> services failing to verify implicit labels, failing to show a prominent
> notice, and failing to add distribution metadata.
> Source: Cyberspace Administration of China, 25 November 2025.
> https://www.cac.gov.cn/2025-11/25/c_1765795550841819.htm

> Article 4 of the Measures for Labeling of AI-Generated Synthetic Content says
> that when a service provider offers download, copy or export functions for
> generated synthetic content, it must ensure the file contains a conforming
> explicit label. Article 5 puts the implicit label in the file metadata,
> carrying content attribute information, the service provider name or code, and
> a content ID.
> Source: Cyberspace Administration of China, March 2025, instrument text.
> https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm

> An independent academic security analysis dated 23 April 2026, the first
> formal-methods analysis of the coalition's core protocols across specification
> versions 2.2 to 2.4, concluded that the current specifications fail to achieve
> their claimed security goals and that the standard should not yet be relied
> upon for high-stakes uses such as financial disclosures, journalism or legal
> evidence.
> Source: an independent university and government-laboratory security analysis,
> April 2026, formal-methods protocol analysis plus implementation review, no
> vendor funding disclosed.
> https://arxiv.org/abs/2604.24890

> Among that analysis's recommendations to the coalition: protect the entire
> file, including non-C2PA metadata, rather than selected portions; mandate
> consistency across validation tools; and establish independent security audits
> for certified products.
> Source: an independent university and government-laboratory security analysis,
> April 2026.
> https://arxiv.org/html/2604.24890v1

> A March 2026 paper demonstrates what it calls an integrity clash: an asset
> carrying a cryptographically valid manifest that asserts human authorship
> while its pixels carry a watermark identifying it as AI-generated, with both
> signals passing their own checks in isolation. Its experiments ran 500
> generated images through JPEG compression at quality 80, a ten percent center
> crop with resize, and a screenshot simulation. The authors state plainly that
> they validated against a public verification site and did not test against
> platform-level moderation pipelines.
> Source: an academic robustness and provenance paper, March 2026, 500 generated
> images, three perturbations, no platform uploads.
> https://arxiv.org/html/2603.02378v1

> An online experiment with 6,114 participants across six news sources in the
> United States, the United Kingdom and Norway found that showing provenance
> metadata significantly improved perceptions of an image's transparency and
> credibility and increased trust in the source shown. Each participant
> evaluated six article previews, with a provenance label at one of three levels
> of detail or with none.
> Source: peer-reviewed conference proceedings, 2026, randomized online
> experiment, 6,114 participants, three label detail levels against a no-label
> control.
> https://ojs.aaai.org/index.php/ICWSM/article/view/42749

Statement of absence. This is the article's most valuable line and it is
sourced by the search log above, not by a page.

> No dated, method-stated public test of whether a signed manifest survives into
> the file a viewer downloads was found on any platform. The standards body's
> own deployment guidance does not publish one. The photo industry's standing
> metadata test has not been run against Content Credentials and last published
> results in 2015. The academic paper that runs the nearest experiment states it
> did not test platform pipelines. Every page in the search results that prints
> a survival table sources it to announcements and community reports, and the
> one page that states its method says it ran no per-image upload tests.
> Source: searches run 9 September 2026 across four query phrasings plus a
> Chinese-language pass, forty ranked results reviewed, primary standards and
> academic sources read directly.

Platform announcement. Usable only in this hedged shape, never as a tested
behavior.

> One video platform announced on 9 May 2024 that it had become the first video
> sharing platform to put Content Credentials into practice, that it was
> beginning to read Content Credentials in order to auto-label content generated
> elsewhere, and that over the coming months it would also start attaching
> Content Credentials to its own content, which would remain on content when
> downloaded. That download behavior is the platform's own statement of intent
> from 2024. No dated independent test of it was found.
> Source: the platform's own newsroom announcement, 9 May 2024, read 9 September
> 2026.
> https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy

## Do not publish

### Hard blocks carried over

| Item | Reason it is blocked |
|---|---|
| Any claim that C2PA or Content Credentials satisfies a legal requirement | No instrument researched for brief 024 names C2PA. It is a specification a producer may adopt. Carried forward unchanged |
| Any tool, model, editing-software, asset-management, metadata-tooling or detection vendor name | Standing rule. Distribution platforms are the exception and only where a dated test names them. Describe the role, never the product |
| Any competitor named, described, compared to or alluded to | Standing rule |
| Any hubStudio rate, monthly figure or per-item price | Standing rule. Search the finished draft for the dollar sign and check every hit. There is no cleared dollar figure in this file at all |
| Any fine or penalty figure under the Chinese labeling Measures | The Measures create no new penalty schedule. No number, no range, no "up to" |
| The allocation of labeling duties between brand, agency and tool vendor under the Measures | Law-firm interpretation, not a regulator statement. Write "generally treated as", never "requires" |
| Han characters and full-width punctuation | Settled 2026-09-09. Romanize or translate. Nothing in this file's cleared section carries any |

### Failed the bar for this article

| Claim | Where it came from | Why it is cut |
|---|---|---|
| Any platform-by-platform survival table for the download side | Seven separate pages in the SERP print one | None of them ran a test. The two that state a method state they did not run per-image upload tests. Two are published by businesses selling metadata removal, one by an image host positioning itself as the surface that preserves credentials. R5 fails on method and on who paid |
| "Manifest robustness above 95 percent survival after social media transcoding" | Surfaced as a summary of a March 2026 paper | The paper does not contain that metric or that number. Read directly, it says the opposite: it did not test platform pipelines. A fabricated figure that looked authoritative in a search summary. Do not let it back in |
| Any statement that a named platform strips, preserves or degrades a manifest | Every vendor page in the set asserts this confidently | No dated test supports it for any platform. The mechanism is plausible and universally repeated, and repetition is not evidence. The article says the download side is untested and hands the reader the test |
| "TikTok has labeled over 3 billion pieces of content as AI-generated" | The coalition's own press release, 27 July 2026 | Published by the party promoting adoption, no method, no period, no definition of a labeled piece. A market claim, not evidence. Also reported as 1.3 billion elsewhere in the same period, which is the second reason to cut it |
| Any count of conforming products or companies | A search summary quoted 54 products from 31 companies as of 14 May 2026 | The coalition's own conformance page publishes no count and the explorer page returned no readable listing on 9 September 2026. Unverified. Say a conformance program exists and is dated, or say nothing |
| "Social platforms strip all embedded metadata as a standard automatic step in their upload pipeline" | Repeated verbatim across at least five SERP pages | No source under it anywhere. It reads as one AI-written paragraph copied across a content-farm cluster. Cut the sentence, keep the underlying advice to test your own path |
| Forum threads reporting that credentials disappeared | A software vendor's community forum | User reports, no method, no file, no version. Brief 023 already cut an adjacent forum claim about export dialogs for the same reason |
| Anything from the metadata-removal tool blogs | Four separate domains in the top ten | They sell the removal of the thing this article is about. The most conflicted possible source |
| Per-platform label percentages from the March 2026 audit | The audit page, read through a fetch on 9 September 2026 | Conditionally cleared only. The qualitative per-platform findings are confirmed by the standards body's own write-up and are cleared. The specific percentages came back only through one fetch of the publication's own page and are not confirmed on a second surface. Check 2 must re-read the audit page. If the page is gated or the figures do not match, drop the percentages and keep the qualitative finding, which stands on its own |
| Any claim that a downloaded file from a named platform carries that platform's own credentials | A content-farm page asserting it from "testing" | No named tester, no date, no file, no tool. Cut |
| Any assertion about Douyin or RedNote handling of C2PA specifically | Chinese-language search, 9 September 2026 | Chinese platform coverage is about the domestic labeling regime, not about C2PA manifests. The September 2025 Beijing daily test measured platform flagging of AI video, which is the reading side. Nothing tests C2PA manifest survival on a Chinese platform. Mark untested, do not infer from the Western pages |
| "C2PA is the industry standard for proving an image is real" | The framing of most of the ranking set | The April 2026 independent security analysis says the specifications fail their claimed security goals and should not yet be relied on for high-stakes uses. A page that publishes the survival gap and then repeats the trust framing contradicts itself |

## Screenshot inventory

Nothing captured yet. R3 captures worth taking before drafting, saved to
`research/content-credentials-c2pa-in-production/` with the date in the
filename.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| c2pa-spec-2-4-soft-binding-definitions.png | The hard binding and soft binding definitions, and the version and date | not yet | spec.c2pa.org, specification 2.4 |
| c2pa-spec-2-4-separated-manifest.png | The sentence conceding that an asset can become separated from its manifest, and the fingerprint recovery path | not yet | spec.c2pa.org, specification 2.4 |
| c2pa-deployment-guidance-strip-warning.png | The screenshot and re-export warning, with the document version and 8 July 2026 date visible | not yet | c2pa.org deployment guidance PDF |
| iptc-emi-results-grid-2015.png | The results grid with the late 2015 round date visible, and the absence of any C2PA column | not yet | embeddedmetadata.org |
| indicator-audit-march-2026.png | The audit's sample statement and the per-platform results, for check 2 | not yet | indicator.media |
| iptc-writeup-march-2026.png | The standards body's write-up naming which platforms read which metadata mechanism | not yet | iptc.org news |
| arxiv-2603-limitations.png | The limitations sentence saying platform-level moderation pipelines were not tested | not yet | arxiv.org |
| cac-enforcement-2025-11-export.png | The November 2025 finding that labels were omitted on export | not yet | cac.gov.cn |

The capture that separates this page from the ranking set is not a standards
page. It is the studio's own bench test: one master file, signed, walked through
capture, retouch, export, asset management and upload, with the verification
readout at each stage and a final check of the file a viewer actually
downloads. Nobody has published that. Running it on even three platforms with
the date, the file type and the tool version stated would make this the only
page in the territory with evidence under its table, and it would turn the
untested rows into measured ones. That is the recommendation to carry into the
asset brief.

## R8. Reconciliation (filled after drafting)
