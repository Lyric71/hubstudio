# Research: europe-campaign-localization

| Field | Value |
|---|---|
| Brief | 64 (wave two, `editorial/scripts/wave2/64-europe-campaign-localization.mjs`) |
| Target query | campaign localization Europe |
| Gap statement (one sentence) | No ranking page takes one campaign asset by asset through France, Germany, Spain and Italy with the dated legal text (the 30-day prior-price rule, the generic green-claim ban that applies from September 27, 2026, the French retouching and language lines) and the official sales calendar next to each creative decision. |
| Research time spent | About 2 hours 30 minutes across three parallel research passes (EU layer and France; Germany, Spain and Italy; SERP and platform formats), plus reading and cross-checking the captures |
| Written | 2026-10-10 |

Check 1 for every row below: 2026-10-10 (the capture timestamp). Check 2:
2026-10-10, in iteration 8, results in the R8 section.

## Sourcing note: which surfaces answered

- **EUR-Lex was down on 2026-10-10.** It returned HTTP 202 with an empty body
  (a WAF challenge) to curl and WebFetch, and a headless browser showed "EUR-Lex
  is temporarily not fully available". The Official Journal texts were read on
  the Publications Office of the European Union's own server
  (`publications.europa.eu/resource/celex/<CELEX>`), which returns the OJ XHTML.
  That is the EU's official publisher, so it is treated as primary. The
  2019/2161 text matches word for word the EUR-Lex capture of 2026-10-08
  (`research/holiday-content-calendar-2026/eurlex-2019-2161-2026-10-08.txt`).
- **Legifrance blocks curl and headless browsers (HTTP 403).** It answered
  WebFetch, which passes the page through an extraction model asked to copy the
  text verbatim; paraphrased paragraphs were requested again word for word.
  The French quotes are high fidelity, not raw dumps. Where a French label is
  printed on the page ("Photographie retouchée", "Images retouchées", "Images
  virtuelles"), the original JORF text (2023) and the current consolidated text
  (2024 ordonnance) agree, which is the cross-check.
- **economie.gouv.fr returned 403** to curl and WebFetch. The French sales rule
  was read on Legifrance (Code de commerce L310-3, arrêté of 27 May 2019) and
  Service Public.
- **gesetze-im-internet.de, recht.bund.de, boe.es, normattiva.it** and the
  Italian regional sites answered curl with a browser user agent.
- The EU texts use British spelling ("recognised", "labelling"). The house
  checker fails British spellings in publishable copy, so blockquotes on the page
  are close paraphrases in American spelling attributed to the instrument, not
  quotations. French labels are printed verbatim in French with accents, as the
  brief asks.

## R2. SERP map

Method and limit: six queries run 2026-10-10 with the session's web search tool
(US index), nine results each. Pages judged from title and summary, three opened
to measure length and tables. None is a source and none is cited. Full notes in
`europe-campaign-localization/2026-10-10-serp-map.txt`.

Query: campaign localization Europe

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | neilpatel.com | Marketer blog | Why localize, specialists, conversions | No law, no dates, no market walk, no 2024/825 | 2016, updated 2026-07 |
| 2 | elevationb2b.com | B2B agency blog | Global-to-local strategy | No legal text, no country walk | unknown |
| 3 | veracontent.com | Translation agency blog | Language and culture tips, one brand case | No law, tables or sales dates | 2019-04 |
| 4 | veracontent.com | Same vendor | Europe localization tips | Same gaps | unknown |
| 5 | lokalise.com | Localization software blog | Ad localization strategy | No law; examples US and Asia | 2024-09 |
| 6 | marketingsherpa.com | Case-study site | International email tactics | Email only | 2010s |
| 7 | wiki.tinrate.com | Q&A wiki | When to localize | Thin | unknown |
| 8 | searchengineland.com | Trade news | Google Ads account structure by market | Search ads only | 2025 |
| 9 | gwi.com | Research vendor listicle | Localized campaign examples | Examples, no method | unknown |

Query: localize marketing campaign for France Germany Spain Italy

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | veracontent.com | Agency blog | As above | No law, no sales dates | 2019-04 |
| 2 | deepl.com | Machine translation product page | AI translation for marketers | Sales pitch | current |
| 3 | veracontent.com | Agency blog | As above | Same gaps | unknown |
| 4 | veracontent.com | Agency listicle | Six campaign examples | Examples only | unknown |
| 5 | veracontent.com | Agency blog | Localization focus "in 2023" | Out of date | 2023 |
| 6 | marketingsherpa.com | Case-study site | Email tactics | Email only | 2010s |
| 7 | ad-astrainc.com | Translation vendor blog | Role of localization | Generic | unknown |
| 8 | motionpoint.com | Website translation vendor | Entering Europe via site translation | Websites only, no ads, no law | unknown |
| 9 | veracontent.com | Agency guide | Localization strategy basics | Generic | unknown |

Query: advertising rules by country Europe

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | en.wikipedia.org | Encyclopedia | TV ad minutes by country | TV only | living |
| 2 | nibusinessinfo.co.uk | Government business advice | European marketing overview | No 2024/825, no dates | pre-2020 |
| 3 | gradschools.com | Education listicle | Ad norms by era | Off topic | unknown |
| 4 | en.wikipedia.org | Encyclopedia | EU political ads rules | Political ads only | living |
| 5 | en.wikipedia.org | Encyclopedia | Duplicate of 4 | Same | living |
| 6 | eur-lex.europa.eu | EU document (2012) | Misleading marketing, B2B | Predates 2019/2161 and 2024/825 | 2012 |
| 7 | appharbr.com | Ad-tech vendor | Gambling ad rules | Gambling only | 2026 |
| 8 | adluxy.com | Outdoor ad vendor | Outdoor rules | Outdoor only | unknown |
| 9 | arthurmarin.com | Consulting site | Regulated sectors | No campaign walk | unknown |

Query: transcreation vs translation advertising

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | crowdin.com | Localization software blog | Definitions | No law, no country walk | 2023 to 2025 |
| 2 | smartling.com | Translation platform blog | Six differences | Same | unknown |
| 3 | acolad.com | Translation agency service page | When to buy which | Sales page | current |
| 4 | phrase.com | Localization software blog | Transcreation explained | No law | unknown |
| 5 | idisc.com | Translation agency blog | Which one you need | Generic | unknown |
| 6 | bellweather.agency | Agency blog | The difference | Generic | unknown |
| 7 | smartcat.com | Translation platform blog | Examples | No law | unknown |
| 8 | languagedepartment.com | Translation agency blog | Translation or transcreation | Generic | unknown |
| 9 | assemblestudio.com | Agency blog | Which one a brand needs | Generic | unknown |

Query: EU price reduction rule 30 days advertising

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | noerr.com | Law firm | Court ruling on strikethrough prices | One rule, no creative, no calendar | 2024 |
| 2 | lexology.com | Law-firm aggregator | Price reduction requirements | One rule | 2022 |
| 3 | 7learnings.com | Pricing software blog | Omnibus Directive for retailers | Vendor angle | 2022 |
| 4 | eur-lex.europa.eu | Commission guidance | Price Indication Directive guidance | Legal text only | 2021-12 |
| 5 | talon.one | Promotions software blog | Compliance | Vendor angle | unknown |
| 6 | twobirds.com | Law firm | Framework and market practice | Legal only | 2025 |
| 7 | tgndata.com | Pricing data vendor | Proving the 30-day price | Vendor angle | 2025 to 2026 |
| 8 | legalclarity.org | Legal explainer | Meaning of the rule | Generic | unknown |
| 9 | legalclarity.org | Legal explainer | EU and US rules | Same | unknown |

Query: green claims directive advertising 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | dcycle.io | ESG software blog | Green claims rules 2026 | Confuses the stalled Green Claims proposal with 2024/825 | 2025 to 2026 |
| 2 | shippypro.com | Shipping software blog | Obligations from September 27, 2026 | Calls 2024/825 "Green Claims Directive"; no creative walk | 2026 |
| 3 | passportglobal.com | Cross-border ecommerce vendor | What merchants must do | Same mix-up | 2026 |
| 4 | mygreenlab.org | Nonprofit | The directive for labs | Not ads | unknown |
| 5 | usetappr.com | Vendor guide | Green claims for brands | Same mix-up | unknown |
| 6 | senken.io | Sustainability vendor | Proposal status | Status only | 2025 |
| 7 | greenclaims-scanner.com | Compliance tool blog | Compliance guide | No national transposition | 2026 |
| 8 | greenclaims-scanner.com | Same | Near-duplicate | Same | 2026 |
| 9 | greenwashing-checker.com | Compliance tool blog | What businesses must know | Tool pitch | 2026 |

**The bar:** the localization pages run about 1,800 words with no tables and
three to six H2s, all principles and anecdotes. The legal pages cover one rule
each with nothing on the creative or the calendar. Several 2026 green-claim
pages mislabel Directive (EU) 2024/825 as "the Green Claims Directive". A page
with an answer table, a legal-line table and a sales-calendar table, dated
legal text per market and the transposition status, clears the bar at the
brief's 2,300 body words.

**The gap, in one sentence:** see the header.

## R1 and R5. Claims table

R1 claim map, written before any lookup: the EU prior-price rule and its date;
national versions in each market; the EU generic green-claim ban, its date and
whether each market has written it into law; the French language rule for
advertising; the French retouched-photo label; the French influencer labels;
the French sales calendar and the one-month stock rule; the German unit-price
rule and misleading-omission rule; whether Germany has fixed sales periods; the
Spanish general advertising law and sales rule; the Italian language rule and
sales calendar; the AI Act Article 50 date; whether ad formats vary by country;
the language rules of the ad platforms; the app facts for Campaigns and
Validation. Cut before writing: any "Germans prefer" or national-character
claim (no dated survey with a method was sought or found); any fine amount
beyond the statutory ones read at source; any count of markets.

Who paid: every legal row is a legislature, government or regional authority
publishing its own instrument; no party sells the thing the claim flatters.
Platform rows are the platform describing its own rules. App rows are
first-party facts from `hubstudio-positioning.md` and the help center.

### EU layer

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C1 | Any announcement of a price reduction indicates the prior price; prior price = lowest price applied by the trader in a period not shorter than 30 days before the reduction (Art. 6a(1), (2) of 98/6/EC as inserted by 2019/2161 Art. 2) | publications.europa.eu/resource/celex/32019L2161; EUR-Lex capture 2026-10-08 | Directive 27 Nov 2019; applied from 28 May 2022 (Art. 7) | n/a | Instrument text | EU | primary |
| C2 | Member-state options: different rules for perishable goods (6a(3)); shorter period for products on the market under 30 days (6a(4)); progressive reductions measured from the price before the first reduction (6a(5)) | Same | Same | n/a | Instrument text | EU | primary |
| C3 | Directive (EU) 2024/825: member states adopt by 27 March 2026 and apply the measures from 27 September 2026 (Art. 4(1)) | publications.europa.eu/resource/celex/32024L0825 | Directive 28 Feb 2024, OJ 6.3.2024 | n/a | Instrument text | EU | primary |
| C4 | Annex I blacklist adds: 2a sustainability label not based on a certification scheme or not set up by public authorities; 4a generic environmental claim without demonstrable recognized excellent environmental performance; 4b claim about the whole product or business when it concerns one aspect; 4c claims of neutral, reduced or positive impact based on offsetting; 10a presenting legal requirements as a distinctive feature | Same, Art. 1 and Annex | Same | n/a | Instrument text | EU | primary |
| C5 | "Generic environmental claim" = environmental claim in written or oral form, including audiovisual media, not on a sustainability label, whose specification is not given in clear and prominent terms on the same medium | Same, Art. 1(1), new Art. 2(p) of 2005/29/EC | Same | n/a | Instrument text | EU | primary |
| C6 | Recital 9 examples of generic claims: "environmentally friendly", "eco-friendly", "green", "nature's friend", "ecological", "climate friendly", "biodegradable" and similar; "climate-friendly packaging" is generic, "100 % of energy used to produce this packaging comes from renewable sources" is specific; specification "on the same medium, such as the same advertising spot" | Same, recital 9; capture 2026-10-10-eu-directive-2024-825-recital-9.txt | Same | n/a | Instrument text (recital) | EU | primary |
| C7 | New Art. 6(2)(d): future environmental performance claims need clear, public, verifiable commitments in a detailed implementation plan with measurable, time-bound targets, verified by an independent third-party expert | Same | Same | n/a | Instrument text | EU | primary |
| C8 | The separate Green Claims Directive proposal COM(2023) 166 is not adopted: Commission page "Pending"; Parliament Legislative Train (updated 20/09/2026) "Blocked", Commission announced intent to withdraw on 20 June 2025, listed as pending in the 2026 work programme | ec.europa.eu (DG ENV), oeil.secure.europarl.europa.eu, europarl.europa.eu legislative train | read 2026-10-10 | n/a | Institutions' own procedure records | EU | primary |
| C9 | AI Act applies from 2 August 2026 (Art. 113); Art. 111(4): providers of generative systems placed on the market before that date comply with Art. 50(2) by 2 December 2026 | ai-act-service-desk.ec.europa.eu, articles 113 and 111 | consolidated 2026-07-27 | n/a | Instrument text on the Commission's service desk | EU | primary (matches the 2026-10-08 research for eu-ai-act-labeling-brand-content) |

### France

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C10 | Loi 94-665 Art. 2: French obligatory in the designation, offer, presentation and description of goods and services; "Les mêmes dispositions s'appliquent à toute publicité écrite, parlée ou audiovisuelle"; not applicable to typical products and specialties with a foreign name known to the widest public; trademark law does not prevent applying the rule to mentions and messages registered with the mark | legifrance.gouv.fr, loi 94-665 consolidated "en vigueur au 09/10/2026" | Law 4 Aug 1994 | n/a | Instrument text via WebFetch | French state | primary |
| C11 | Loi 94-665 Art. 4 al. 2: where these mentions carry translations, the French version must be "aussi lisible, audible ou intelligible" as the foreign-language version | Same | Same | n/a | Same | French state | primary |
| C12 | Code de la santé publique L2133-2: commercial photos of models whose body appearance was modified by image software to slim or thicken the silhouette carry the mention "Photographie retouchée"; penalty 37,500 euros, which may rise to 30 percent of the advertising spend | legifrance.gouv.fr, CSP L2133-2 | in force 1 Oct 2017 (Décret 2017-738 of 4 May 2017, Art. 2) | n/a | Instrument text via WebFetch | French state | primary |
| C13 | Décret 2017-738 (CSP R2133-4 to R2133-6): applies to ads by poster, online public communication, press, advertising mail and printed advertising; mention accessible, easily legible, clearly set apart from the message; the advertiser checks whether bought photos were altered | Same, R2133-4, -5, -6 | Same | n/a | Same | French state | primary |
| C14 | Loi 2023-451 Art. 5 I (current, since 8 Nov 2024, Ordonnance 2024-978): content from persons doing paid commercial influence with images modified to slim or thicken a silhouette or change a face carries "Images retouchées"; images produced by AI to represent a face or silhouette carry "Images virtuelles"; mentions clear, legible, understandable on every medium; breach punishable by one year in prison and a 4,500 euro fine (5 III). Labels plural in the 2023 original and the current text | legifrance.gouv.fr LEGIARTI000050468897; JORFTEXT000047663185; JORFTEXT000050456412 | Law 9 June 2023; ordonnance 6 Nov 2024 | n/a | Instrument text via WebFetch, original and current agree on the labels | French state | primary |
| C15 | Loi 2023-451 Art. 1: commercial influence = persons who, for payment, use their standing with an audience to communicate content online promoting goods, services or a cause | JORFTEXT000047663185 | 2023-06-10 | n/a | Same | French state | primary |
| C16 | Code de commerce L310-3: two sales periods a year, three to six weeks each, dates set by order of the economy minister; goods announced as on sale must have been offered for sale and paid for at least a month before the period starts | legifrance.gouv.fr LEGIARTI000038586528 | version since 2019-11-01 | n/a | Instrument text via WebFetch | French state | primary |
| C17 | Arrêté of 27 May 2019: winter sales begin the second Wednesday of January at 8 a.m., moved to the first Wednesday when the second falls after the 12th; summer sales the last Wednesday of June at 8 a.m., moved to the second-to-last when the last falls after the 28th; four weeks each; some departments (54, 55, 57, 88 in winter; 2A, 2B in summer; overseas) run other dates | legifrance.gouv.fr JORFTEXT000038523234 | in force 2020-01-01, annex amended 2023-04-21 | n/a | Instrument text | French state | primary |
| C18 | Derived: winter sales 2027 open Wednesday Jan. 6, 2027, 8 a.m., and run four weeks to Tuesday Feb. 2; summer 2027 opens Wednesday June 23, 2027 (last Wednesday is the 30th, after the 28th). No official 2027 notice on service-public.gouv.fr, entreprises.gouv.fr or Legifrance on 2026-10-10 | Arithmetic on C17; ledger row (brief 49) derived the same Jan. 6 date | 2026-10-10 | n/a | Calendar arithmetic on the published rule | n/a | derived, labeled on the page |
| C19 | Code de la consommation L112-1-1: the prior price is the lowest price the trader charged all consumers in the 30 days before the reduction; successive reductions use the price before the first; perishables excluded; France did not use the shorter period for new products | legifrance.gouv.fr, L112-1-1 | version since 2022-05-28 | n/a | Instrument text via WebFetch | French state | primary |
| C20 | France had not transposed 2024/825 on 2026-10-10: Code de la consommation L121-2 to L121-4 still in their 28/05/2022 versions; Legifrance lists no transposing text; the "DDADUE" bill (Sénat n° 118, 2025-2026, Articles 20 and 21) passed the Sénat 18 Feb 2026 and went to the Assemblée nationale 20 Feb 2026 (n° 2518) with no later stage shown | legifrance.gouv.fr; senat.fr (page updated 2026-09-04); assemblee-nationale.fr | read 2026-10-10 | n/a | Statute book and both chambers' procedure pages | French state | primary for "not transposed on October 10, 2026" |

### Germany

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C21 | PAngV § 4(1): a trader offering or advertising goods by weight, volume, length or area with a price states the unit price (Grundpreis) alongside the total price, unambiguous, clearly recognizable and easily legible; not needed when identical to the total price | gesetze-im-internet.de/pangv_2022 | 12 Nov 2021, in force 28 May 2022, last amended 12 May 2026 | n/a | Instrument text | German federation | primary |
| C22 | PAngV § 5(1): unit is 1 kilogram, 1 liter, 1 cubic meter, 1 meter or 1 square meter | Same | Same | n/a | Same | Same | primary |
| C23 | PAngV § 11(1): every announced price reduction states the lowest total price charged to consumers in the 30 days before the reduction | Same | Same | n/a | Same | Same | primary |
| C24 | UWG § 5a(1): misleading by withholding essential information the consumer needs for an informed decision; § 5b(1) lists essential information in an offer: main characteristics, identity and address of the trader, total price | gesetze-im-internet.de/uwg_2004 | consolidated, read 2026-10-10 | n/a | Instrument text | Same | primary |
| C25 | Germany transposed 2024/825 by the Third Act amending the UWG, 12 Feb 2026, BGBl. 2026 I Nr. 43, in force 27 Sept 2026 (one item 19 June 2026); UWG now defines "allgemeine Umweltaussage" and "Nachhaltigkeitssiegel" and its annex bans an unprovable generic environmental claim (Nr. 4a), plus 2a, 4b, 4c | recht.bund.de/bgbl/1/2026/43; gesetze-im-internet.de/uwg_2004 | 2026-02-19 publication | n/a | Federal Law Gazette and consolidated act | Same | primary |
| C26 | Germany abolished its statutory end-of-season sales rules (Schlussverkäufe) in the 2004 UWG reform: the government's draft states the rules on Schlussverkäufe "fallen ganz weg" and are abolished "sowohl im Hinblick auf den Zeitrahmen als auch im Hinblick auf das Sortiment" | dserver.bundestag.de/btd/15/014/1501487.pdf | Drucksache 15/1487, 22 Aug 2003 | n/a | Government bill explanation in the Bundestag record | Same | primary (the UWG in force carries no sales-period rule, C24 capture) |

### Spain

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C27 | Ley 34/1988 General de Publicidad Art. 3: unlawful advertising includes misleading, unfair and aggressive advertising, which are acts of unfair competition under the Ley de Competencia Desleal (Art. 3 e)) | boe.es BOE-A-1988-26156 | last update published 2023-03-01 | n/a | Consolidated text | Spanish state | primary |
| C28 | Ley 7/1996 Art. 20.1: the prior price is the lowest applied to identical products in the preceding 30 days (wording by RDL 24/2021, in force 28 May 2022) | boe.es BOE-A-1996-1072 | Same | n/a | Same | Same | primary |
| C29 | Ley 7/1996 Art. 25: sales (rebajas) may run in the seasons of greatest commercial interest "según el criterio de cada comerciante", and each trader decides the length freely (wording by RDL 20/2012, in force 15 July 2012) | Same | Same | n/a | Same | Same | primary |
| C30 | TRLGDCU Art. 18.3: mandatory labeling and presentation information of goods and services sold in Spain appears at least in Castilian, the official Spanish language of the state | boe.es BOE-A-2007-20555 | updated 2026-02-28 | n/a | Same | Same | primary (labeling and presentation, not advertising as such) |
| C31 | Spain had not transposed 2024/825 on 2026-10-10: consolidated Ley 3/1991 and TRLGDCU carry no green-claim terms; BOE lists no transposing measure; the government approved the draft "Ley de Consumo Sostenible", which says it transposes the directive, at first reading on 1 July 2025 | boe.es; ministry press note 2025-07-01 | read 2026-10-10 | n/a | Statute book plus the ministry's own note | Same | primary for "not transposed on October 10, 2026" |

### Italy

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C32 | Codice del consumo Art. 9: all information for consumers is given at least in Italian; where given in several languages, Italian too, with visibility and legibility no lower than the other languages; foreign expressions in common use allowed | normattiva.it, D.Lgs. 206/2005 art. 9 | last update shown 2026-05-15 | n/a | Consolidated text | Italian state | primary |
| C33 | Codice del consumo Art. 17-bis(2): the prior price is the lowest the trader applied to consumers in general in the 30 days before the reduction (inserted by D.Lgs. 26/2023) | normattiva.it art. 17-bis | in force 2023-04-02 | n/a | Same | Same | primary |
| C34 | Codice del consumo Art. 20(1): unfair commercial practices are banned; Art. 21(1) lists misleading actions, now including environmental or social characteristics | normattiva.it arts. 20, 21 | 2026-05-15 | n/a | Same | Same | primary |
| C35 | Italy transposed 2024/825 by D.Lgs. 20 Feb 2026 n. 30 (GU n. 56, 9 March 2026, in force 24 March 2026), applying from 27 Sept 2026 (Art. 2); new definitions "asserzione ambientale generica" and "etichetta di sostenibilità" | normattiva.it / gazzettaufficiale.it | 2026-03-09 | n/a | Gazette and consolidated code | Same | primary |
| C36 | Sales periods are set by each region (D.Lgs. 114/1998 art. 15(6)); the regions' common rule of 24 March 2011 starts winter sales on the first working day before Epiphany and summer sales on the first Saturday of July (integrated 7 July 2016: a Monday start moves to the Saturday) | normattiva.it D.Lgs. 114/1998 art. 15; Regione Toscana Delibera 607 of 18/05/2026; Regione Lombardia page updated 2026-05-27 | Same | n/a | Statute plus two regional authorities restating the rule | Italian regions | primary |
| C37 | Regione Siciliana (D.A. 2763 of 14/10/2025) has published 2027: winter sales Jan. 5 to March 15, summer July 3 to Sept. 15; Alto Adige (Bolzano chamber of commerce) ran its own 2026 dates (Jan. 8, tourist towns March 7); no other 2027 regional dates found | regione.sicilia.it; camcom.bz.it | 2025-10-15; 2026 | n/a | Regional authorities' own pages | Same | primary |
| C38 | Derived: under the common rule, winter sales 2027 start Tuesday Jan. 5, 2027 and summer sales Saturday July 3, 2027 | Arithmetic on C36, matches Sicily's published C37 | 2026-10-10 | n/a | Calendar arithmetic | n/a | derived, confirmed by one region |

### Platforms and app

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C39 | Meta Ads Guide publishes one set of specs with no country selector: Facebook Feed image 4:5, 1440 x 1800; Instagram Reels 9:16, 1440 x 2560, keep 14 percent top, 35 percent bottom, 6 percent each side free of text and logos | facebook.com/business/ads-guide (feed image, Instagram Reels) | read 2026-10-10 | n/a | Platform spec pages | Meta | primary; also in ledger (brief 32) |
| C40 | TikTok in-feed: 9:16 at 540 x 960 or more; the only regional split is the Arabic-region safe-zone file (right-to-left), not a country variant | ads.tiktok.com/help/article/video-ads-specifications | updated 2026-06 | n/a | Platform spec page | TikTok | primary |
| C41 | LinkedIn single image: 1.91:1 1200 x 628, 1:1 1200 x 1200, 4:5 720 x 900; no country variant | linkedin.com/help/lms/answer/a426534 | updated about 2026-08 | n/a | Platform help | LinkedIn | primary |
| C42 | TikTok ad policy: for France, Germany, Italy and Spain the advertiser decides whether to use the target market's language and must comply with local law; the ad review checklist requires the text, spoken words and subtitles to match an acceptable language in every country targeted in the ad group | ads.tiktok.com/help (ad format and functionality, updated 2026-04; ad review checklist ad language, updated 2026-08) | Same | n/a | Platform policy | TikTok | primary |
| C43 | LinkedIn: "Ad creative and landing page language should match the audience language selected in ad set audience settings"; the language cannot be changed after launch, a new ad set is needed | linkedin.com/help/lms/answer/a468679; a427089 | updated 2025-11 and 2026-08 | n/a | Platform help | LinkedIn | primary |
| C44 | App facts: Campaigns hold one launch's files under one name (up to 120 characters) with an optional brief (up to 4,000 characters); a campaign points at Assets Library files and copies nothing; a new version stays in. Validation sends an image, video, post, file, text or link to a teammate or a client for approval; versions on one thread; a post waiting for approval is locked. The app interface runs in English, French and Chinese, each person picking their own | hubstudio-positioning.md; src/content/help/campaigns.md; validation.md; your-team.md | 2026-10-08 | n/a | Binding positioning file and help center | hubStudio | first-party, allowed facts |
| C45 | No dated, method-stated survey of national ad preferences was sought for the page; the brief forbids national-character generalizations without one | Brief 64, Do not | 2026-10-10 | n/a | Editorial rule | n/a | rule, no claim made |
| C46 | AI Act Art. 50(4): deployers of a system generating or manipulating image, audio or video content constituting a deep fake disclose that it is artificially generated or manipulated. Commission guidelines on Article 50 (C(2026) 5054, July 20, 2026): deep fake examples include an AI video of a celebrity influencer in an ad, a realistic synthetic avatar, and an AI image of a product in advertising that can mislead about its appearance, characteristics or use; "persons" includes realistic AI-generated human avatars (para 113); a real product against an AI-generated background is not a deep fake as long as the ad does not mislead (box after 116) | Reused from research/eu-ai-act-labeling-brand-content.md (guidelines read 2026-10-08, check 2 2026-10-08) | 2026-07-20 | n/a | Commission guidelines | European Commission | primary, reused |
| C47 | Studio facts: a producer reads every brief within one business day; a written proposal within 48 hours | hubstudio-positioning.md, studio facts | 2026-09-29 | n/a | Binding positioning file | hubStudio | first-party, allowed facts |

## Cleared for use

> Any announcement of a price reduction must show the prior price, the lowest
> price the trader charged in a period of at least 30 days before the
> reduction.
> Source: Directive (EU) 2019/2161, Article 6a of Directive 98/6/EC, applied
> from May 28, 2022. Instrument text, read October 10, 2026.

> From September 27, 2026, a generic environmental claim the trader cannot back
> with recognized excellent environmental performance is banned outright, along
> with sustainability labels that rest on no certification scheme or public
> authority and climate-neutral claims based on offsetting.
> Source: Directive (EU) 2024/825, Article 4 and the Annex I points it adds to
> Directive 2005/29/EC, February 28, 2024. Instrument text, read October 10,
> 2026.

> The directive's own examples of generic claims include "eco-friendly,"
> "green," "nature's friend," "climate friendly" and "biodegradable." A claim
> stops being generic when its specification sits, clear and prominent, on the
> same medium, such as the same ad spot.
> Source: Directive (EU) 2024/825, recital 9, February 28, 2024.

> « Photographie retouchée » must accompany a commercial photo of a model whose
> silhouette was slimmed or thickened with image software, on posters, online,
> in the press and in printed advertising. The fine is 37,500 euros, or up to
> 30 percent of the advertising spend.
> Source: French Public Health Code, Article L2133-2, and Decree 2017-738, in
> force since October 1, 2017. Statute text on Legifrance, read October 10,
> 2026.

> Paid influencers must label images with a reshaped silhouette or face
> « Images retouchées » and images made by AI to depict a face or a silhouette
> « Images virtuelles ».
> Source: French Law 2023-451 of June 9, 2023, Article 5, as rewritten by
> Ordinance 2024-978 of November 6, 2024. Statute text on Legifrance, read
> October 10, 2026.

> French winter sales start the second Wednesday of January at 8 a.m., moved
> to the first Wednesday when the second falls after the 12th, and run four
> weeks.
> Source: French ministerial order of May 27, 2019, under Commercial Code
> Article L310-3. Statute text on Legifrance, read October 10, 2026.

> Every announced price reduction in Germany must state the lowest total price
> charged to consumers in the 30 days before it, and any price per weight,
> volume, length or area needs the unit price beside the total.
> Source: German Price Indication Ordinance (PAngV) of November 12, 2021,
> sections 4, 5 and 11, as amended May 12, 2026. Statute text, read October
> 10, 2026.

> Spanish retailers choose their own sale seasons and decide how long each
> runs.
> Source: Spain's Retail Trade Act, Ley 7/1996, Article 25, as amended in
> 2012. Consolidated text on the Official State Gazette, read October 10, 2026.

> Italy's regions start winter sales on the first working day before Epiphany
> and summer sales on the first Saturday of July, under a common rule agreed
> in 2011.
> Source: Tuscany regional resolution 607 of May 18, 2026, and Lombardy's sales
> page, updated May 27, 2026.

## Do not publish

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| "Germans value accuracy, Spaniards like social proof" and any national-character line | Ranking localization blogs | No dated survey with a method; the brief bans it | 2026-10-10 |
| Calling Directive 2024/825 "the Green Claims Directive" | Several 2026 vendor pages | Wrong: that is the separate proposal COM(2023) 166, not adopted (C8) | 2026-10-10 |
| German unit price "in unmittelbarer Nähe des Gesamtpreises" and a 250 g / 250 ml exception | Recalled wording from older PAngV versions | Not in the current § 4 or § 5 (C21, C22) | 2026-10-10 |
| "Image retouchée" / "Image virtuelle" in the singular | Common rendering | The law says "Images retouchées", "Images virtuelles" (C14) | 2026-10-10 |
| Official French winter sales 2027 dates | Not published on 2026-10-10 | Only the derived date runs, labeled as derived; watch row added | 2026-10-10 |
| Lazio, Lombardy and Valle d'Aosta 2027 sales dates | Not published or not reached | Only Sicily's published dates and the common rule run | 2026-10-10 |
| A Spanish EU infringement procedure on 2024/825 (May 2026) | Non-primary search results only | Primary not reached | 2026-10-10 |
| Summer 2026 French sales extension to July 28, 2026 (heatwave order of July 3, 2026) | Legifrance | True but past and not needed | 2026-10-10 |
| Departmental 2026 winter dates for Moselle and neighbors | Two Service Public pages that disagree (Jan. 2 and Jan. 3) | Sources conflict; the page states only that four eastern departments start on the first working day of January, from the order's annex | 2026-10-10 |
| Any fine figure for 2024/825 breaches | Not specified in the directive; national penalty schedules not researched | Not needed; not read at source | 2026-10-10 |
| The 2019/2161 penalty ceiling (4 percent of turnover) | Not read at source in this run | Not needed | 2026-10-10 |

## Screenshot inventory

Text captures, all in `research/europe-campaign-localization/`, captured
2026-10-10:

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| 2026-10-10-eu-directive-2019-2161-prior-price.txt | Art. 6a(1) to (5), Art. 7 dates | 2026-10-10 | publications.europa.eu (OJ XHTML) |
| 2026-10-10-eu-directive-2024-825-green-transition.txt | Art. 4 dates, definitions, Annex I points 2a to 23j, Art. 6(2)(d) | 2026-10-10 | publications.europa.eu |
| 2026-10-10-eu-directive-2024-825-recital-9.txt | Generic-claim examples | 2026-10-10 | publications.europa.eu |
| 2026-10-10-eu-green-claims-directive-status.txt | COM(2023) 166 status | 2026-10-10 | Commission and Parliament pages |
| 2026-10-10-eu-ai-act-article-50-dates.txt | Arts. 113 and 111(4) | 2026-10-10 | AI Act Service Desk |
| 2026-10-10-fr-loi-toubon-art2-art4.txt | Toubon Arts. 2 and 4 | 2026-10-10 | Legifrance (WebFetch) |
| 2026-10-10-fr-photographie-retouchee-csp-l2133-2.txt | L2133-2, R2133-4 to -6, decree in force date | 2026-10-10 | Legifrance (WebFetch) |
| 2026-10-10-fr-loi-2023-451-influence-art5.txt | Art. 5 current and original, Art. 1, ordonnance, 2026 decree | 2026-10-10 | Legifrance (WebFetch) |
| 2026-10-10-fr-soldes-dates.txt | L310-3, arrêté 27 May 2019, Service Public pages | 2026-10-10 | Legifrance, Service Public |
| 2026-10-10-fr-code-conso-l112-1-1-prix-anterieur.txt | French prior-price article | 2026-10-10 | Legifrance (WebFetch) |
| 2026-10-10-fr-transposition-2024-825.txt | Transposition status | 2026-10-10 | Legifrance, senat.fr, assemblee-nationale.fr |
| 2026-10-10-de-pangv.txt | PAngV §§ 4, 5, 11 | 2026-10-10 | gesetze-im-internet.de |
| 2026-10-10-de-uwg.txt | UWG §§ 2, 3, 5, 5a, 5b, Annex | 2026-10-10 | gesetze-im-internet.de |
| 2026-10-10-de-bgbl-2026-i-43-uwg-amendment.txt | Third UWG amendment act, entry into force | 2026-10-10 | recht.bund.de |
| 2026-10-10-de-sales-periods-btd-15-1487.txt | 2004 abolition of Schlussverkäufe | 2026-10-10 | dserver.bundestag.de |
| 2026-10-10-es-ley-34-1988-publicidad.txt | Ley General de Publicidad Arts. 3, 6 | 2026-10-10 | boe.es |
| 2026-10-10-es-ley-7-1996-comercio-minorista.txt | Arts. 20, 25 | 2026-10-10 | boe.es |
| 2026-10-10-es-trlgdcu-art-18.txt | Art. 18.3 language | 2026-10-10 | boe.es |
| 2026-10-10-es-2024-825-transposition-status.txt | Spain transposition status | 2026-10-10 | boe.es, ministry note |
| 2026-10-10-it-codice-consumo.txt | Arts. 9, 17-bis, 18, 20, 21, 23 | 2026-10-10 | normattiva.it |
| 2026-10-10-it-dlgs-30-2026.txt | Italian transposition act | 2026-10-10 | normattiva.it / gazzettaufficiale.it |
| 2026-10-10-it-saldi.txt | Regional sales rule and 2027 dates | 2026-10-10 | normattiva.it, regional sites |
| 2026-10-10-platform-specs-meta.txt | Meta feed and Reels specs | 2026-10-10 | facebook.com/business/ads-guide |
| 2026-10-10-platform-specs-tiktok.txt | TikTok in-feed specs | 2026-10-10 | ads.tiktok.com |
| 2026-10-10-platform-specs-linkedin.txt | LinkedIn single image specs | 2026-10-10 | linkedin.com/help |
| 2026-10-10-tiktok-ad-language-policy.txt | TikTok language policy and checklist | 2026-10-10 | ads.tiktok.com |
| 2026-10-10-serp-map.txt | R2 notes | 2026-10-10 | web search |

## R8. Reconciliation (filled after drafting)

Check 2, 2026-10-10: all 27 cited surfaces re-fetched in a separate pass (curl,
or WebFetch where curl is blocked), every one OK and unchanged. Results, method
and timestamps in `europe-campaign-localization/2026-10-10-check2.txt`.

Every number and dated fact in the draft, traced to this file:

| Draft item | Claim |
|---|---|
| 30 days, prior price, May 28, 2022 | C1, C19, C23, C28, C33 |
| French, German, Spanish and Italian article numbers for the 30-day rule | C19, C23, C28, C33 |
| Sept. 27, 2026; Feb. 28, 2024; banned practices; generic-claim definition | C3, C4, C5 |
| Recital examples and the climate-friendly packaging pair | C6 |
| Transposition table (Feb. 12, 2026; Feb. 20, 2026; Feb. 18, 2026; July 1, 2025) | C20, C25, C31, C35 |
| Green Claims proposal blocked, September 2026 | C8 |
| Toubon 1994, Articles 2 and 4, the trademark clause | C10, C11 |
| Photographie retouchée, 37,500 euros, 30 percent, Oct. 1, 2017, advertiser checks | C12, C13 |
| Images retouchées, Images virtuelles, one year, 4,500 euros, June 9, 2023, Nov. 6, 2024 | C14, C15 |
| PAngV Nov. 12, 2021, amended May 12, 2026; units; UWG sections 5a and 5b | C21, C22, C23, C24 |
| Germany: no legal sale periods since 2004 | C26 |
| Ley 34/1988 Art. 3; TRLGDCU Art. 18.3; Ley 7/1996 Art. 25, 2012 | C27, C29, C30 |
| Italy Arts. 9, 20 and 21 | C32, C34 |
| Italian regional rule 2011; Tuscany 607 of May 18, 2026; Lombardy May 27, 2026 | C36 |
| French sales: second Wednesday rule, 8 a.m., four weeks, one-month stock rule, eastern departments | C16, C17 |
| Jan. 6 to Feb. 2, 2027; June 23, 2027 (derived, labeled) | C18 |
| Jan. 5 and July 3, 2027 (rule); Sicily Jan. 5 to March 15 and July 3 to Sept. 15; Bolzano Jan. 8 and March 7, 2026 | C37, C38 |
| Meta 4:5 1440 x 1800; 9:16 1440 x 2560; 14, 35 and 6 percent | C39 |
| TikTok right-to-left safe-zone split; LinkedIn no country variant | C40, C41 |
| LinkedIn language quote, no change after launch; TikTok checklist | C42, C43 |
| Aug. 2, 2026; deployer disclosure; guideline examples | C9, C46 |
| Campaigns, Assets Library, Validation, versions on one thread, app in French | C44 |
| One business day; 48 hours | C47 |
| "9:16" and "30 percent off" in the worked example; "400 ml bottle" | illustrative inputs, not claims |

Removed during drafting because nothing here supported it: "the firmest of the
four on language" (Italy, an evaluative comparison), "the usual way to break
it" (Germany, an unsupported frequency), an invented example price, a remark
about other publishers mislabeling the directive (a third-party allusion), and
a CTA promise that the proposal includes the change list (not a studio fact).
No section was thinned by these cuts.
