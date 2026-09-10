/**
 * Insights: single source of truth for the /resources/insights index and
 * every article page. Each article page imports ArticleLayout and passes its
 * slug; the layout reads meta from here. Order: newest first, and the array
 * order must stay in sync with dateISO: the index takes the first entry as its
 * featured lead and the home page takes the first four.
 *
 * `author` is a display name that must match a `name` in src/data/authors.ts,
 * so the byline resolves to an author page. The insights index also builds its
 * topic and author filters from these two fields, so a typo drops an article
 * out of a filter rather than failing the build.
 */

export type InsightTone = 'orange' | 'navy';

export interface Insight {
  /** URL segment under /resources/insights/ */
  slug: string;
  /** Short topic label shown as the eyebrow / card tag. */
  category: string;
  /** Accent treatment for the card tag and hero rule. */
  tone: InsightTone;
  /** On-page H1 and card headline. */
  title: string;
  /** One-line standfirst under the title. */
  deck: string;
  /** Human-readable publish date. */
  date: string;
  /** ISO publish date for schema + <time>. */
  dateISO: string;
  /** ISO last-modified date for schema; falls back to dateISO when unset. */
  dateModifiedISO?: string;
  /** e.g. "6 min read" */
  readingTime: string;
  author: string;
  /** <title> for the article page. */
  metaTitle: string;
  metaDescription: string;
  /** Hero / card image path under /public. */
  image: string;
  /** Descriptive alt text for the image. */
  imageAlt: string;
}

export const insights: Insight[] = [
  {
    slug: 'campaign-adaptation-cost-per-market',
    image: '/Images/insight-campaign-adaptation-cost-per-market.webp',
    imageAlt:
      'One large print of a ceramic vase pinned under brass weights at the head of a layout table, with many smaller derived versions fanned out below it, ranging from simple recrops to a hand-traced outline and a fully collaged rebuild.',
    category: 'Cost',
    tone: 'orange',
    title: 'Campaign Adaptation Cost per Market',
    deck: 'Across forty-nine results, one page prices an adaptation and says what the price includes. The word covers five different jobs, so here is the ladder.',
    date: 'September 10, 2026',
    dateISO: '2026-09-10',
    readingTime: '12 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Campaign Adaptation Cost per Market | hubStudio',
    metaDescription:
      'One master, N markets, M formats. The unit definition, a rate structure by format family, and where adaptation cost stops scaling linearly.',
  },
  {
    slug: 'all-in-cost-of-ai-video',
    image: '/Images/insight-all-in-cost-of-ai-video.webp',
    imageAlt:
      'A film cutting bench with one short strip of developed film hanging clipped and lit above a deep metal bin overflowing with discarded strips that spill across the floor.',
    category: 'Cost',
    tone: 'navy',
    title: 'The All-In Cost of AI Video',
    deck: 'Generation is the one line anyone prices. The number that actually decides the bill, how many generations a usable shot takes, has no benchmark.',
    date: 'September 10, 2026',
    dateISO: '2026-09-10',
    readingTime: '12 min read',
    author: 'Cyril Drouin',
    metaTitle: 'The All-In Cost of AI Video | hubStudio',
    metaDescription:
      'A line-by-line build of a 30-second AI-assisted brand film: what generation actually costs, and what the dollar-an-ad math leaves out.',
  },
  {
    slug: 'product-photography-cost-per-sku',
    image: '/Images/insight-product-photography-cost-per-sku.webp',
    imageAlt:
      'One plain ceramic mug lit on a paper sweep at a studio shooting table, with a long queue of identical unshot mugs receding into shadow beside it and a hand reaching for the next one.',
    category: 'Cost',
    tone: 'orange',
    title: 'Product Photography Cost per SKU',
    deck: 'Published volume discounts stop at 30 percent off list. Past that point, a tenfold rise in volume moves the unit price about six percent.',
    date: 'September 10, 2026',
    dateISO: '2026-09-10',
    readingTime: '13 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Product Photography Cost per SKU | hubStudio',
    metaDescription:
      'A real per-SKU cost curve from 50 to 5,000 SKUs, what a day rate hides at volume, and where studio capture plus generation beats pure photography.',
  },
  {
    slug: 'production-roster-review-questions',
    image: '/Images/insight-production-roster-review-questions.webp',
    imageAlt:
      'A long studio table covered end to end with overlapping contact sheets and printed layouts in low window light, a person standing at the far end looking down at them, with the Shanghai skyline faint through the window.',
    category: 'Buying models',
    tone: 'navy',
    title: '14 Questions for a Production Roster Review',
    deck: 'Production supply is consolidating. Here are the fourteen questions to ask every partner on your roster, in four groups, with a scoring table.',
    date: 'September 10, 2026',
    dateISO: '2026-09-10',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: '14 Questions for a Production Roster Review | hubStudio',
    metaDescription:
      'Production is consolidating into centralized units. The 14 questions to ask every partner on your roster, grouped, with a copyable scoring table.',
  },
  {
    slug: 'ai-brand-ambassadors-what-you-sign',
    image: '/Images/insight-ai-brand-ambassadors-what-you-sign.webp',
    imageAlt:
      'A semicircular rig of small cameras standing in an empty studio facing a worn T-shaped tape mark on the concrete floor where a person would have stood, with a handwritten page and a pen resting on a metal stool in the foreground.',
    category: 'Rights',
    tone: 'orange',
    title: 'AI Brand Ambassadors: What You Sign',
    deck: 'One standard form exists, it runs three pages, and it has no field for term, territory, compensation, deletion or sunset. Here is the clause map.',
    date: 'August 27, 2026',
    dateISO: '2026-08-27',
    readingTime: '13 min read',
    author: 'Liyan Ye',
    metaTitle: 'AI Brand Ambassadors: What You Sign | hubStudio',
    metaDescription:
      'The clause map for an AI ambassador release: scope, term, retraining rights, revocation, sunset and deletion, and how synthetic talent changes it.',
  },
  {
    slug: 'content-credentials-c2pa-in-production',
    image: '/Images/insight-content-credentials-c2pa-in-production.webp',
    imageAlt:
      'Five identical prints of the same grey stone laid in a row on a scratched workbench, each with its paper tag progressively more detached, from neatly tied at one end to a bare print with no tag at the other.',
    category: 'Rights',
    tone: 'navy',
    title: 'Where C2PA Survives in a Real Pipeline',
    deck: 'The survival tables circulating for Content Credentials come from announcements, not tests. Here is what has been measured, and the bench test to run.',
    date: 'August 14, 2026',
    dateISO: '2026-08-14',
    readingTime: '11 min read',
    author: 'Liyan Ye',
    metaTitle: 'Where C2PA Survives in a Real Pipeline | hubStudio',
    metaDescription:
      'Content Credentials tested stage by stage: capture, retouch, export, DAM, platform upload. Where they survive, where they strip, and whether to adopt.',
  },
  {
    slug: 'in-house-studio-vs-outsourced-production',
    image: '/Images/insight-in-house-studio-vs-outsourced-production.webp',
    imageAlt:
      'A long shared studio desk with four identical workstations under task lamps, only the nearest one showing signs of use with an open notebook and a mug, the other three sitting empty with chairs pushed in.',
    category: 'Cost',
    tone: 'navy',
    title: 'In-House Studio or Outsourced Production',
    deck: 'Every page on this decision uses a benefits multiplier nobody sources. Here is the published one, and the eight cost lines with no benchmark.',
    date: 'July 27, 2026',
    dateISO: '2026-07-27',
    readingTime: '13 min read',
    author: 'Cyril Drouin',
    metaTitle: 'In-House Studio or Outsourced Production | hubStudio',
    metaDescription:
      'The fully loaded annual model for an in-house creative studio, the costs nobody books, the utilization question, and when in-house is genuinely right.',
  },
  {
    slug: 'questions-to-ask-ai-production-partner',
    image: '/Images/insight-questions-to-ask-ai-production-partner.webp',
    imageAlt:
      'Three identical stacks of prints of the same ceramic jar laid out in a row on a scratched steel table for comparison, beside a handwritten checklist with pencil tick boxes and a hand pointing at one of them.',
    category: 'Buying models',
    tone: 'orange',
    title: '12 Questions for an AI Production Partner',
    deck: 'Twelve questions and a scoring table you can copy, including two nobody in the category has benchmarked, and the one we answer awkwardly.',
    date: 'July 14, 2026',
    dateISO: '2026-07-14',
    readingTime: '14 min read',
    author: 'Cyril Drouin',
    metaTitle: '12 Questions for an AI Production Partner | hubStudio',
    metaDescription:
      'A procurement instrument for scoring AI production vendors: twelve questions, what a good answer sounds like, and a scoring table you can copy.',
  },
  {
    slug: 'cost-to-localize-a-campaign-for-china',
    image: '/Images/insight-cost-to-localize-a-campaign-for-china.webp',
    imageAlt:
      'A wide landscape photographic print on a scored cutting mat with a tall black card mask laid over it, the discarded side portions of the picture visible beyond the mask and two cut offcut strips lying above it.',
    category: 'Cost',
    tone: 'orange',
    title: 'Cost to Localize a Campaign for China',
    deck: 'Every page holding this query prices words. The work is a re-shoot and a re-layout. Here is the whole stack, with each line sourced separately.',
    date: 'June 29, 2026',
    dateISO: '2026-06-29',
    readingTime: '13 min read',
    author: 'Echo Peng',
    metaTitle: 'Cost to Localize a Campaign for China | hubStudio',
    metaDescription:
      'China localization is a re-shoot and re-layout problem, not a translation one. The full cost stack, what a translation quote leaves out, two examples.',
  },
  {
    slug: 'china-or-india-for-creative-production',
    image: '/Images/insight-china-or-india-for-creative-production.webp',
    imageAlt:
      'A product photography setup in a working studio, an unbranded bottle on a paper sweep in the foreground, with an open shipping carton of identical bottles in pulp trays on a trolley behind it.',
    category: 'Buying models',
    tone: 'navy',
    title: 'China or India for Creative Production',
    deck: 'A regional comparison that concedes India\'s advantages first, names four things nobody can compare with public data, and shows the arithmetic behind the rest.',
    date: 'June 17, 2026',
    dateISO: '2026-06-17',
    readingTime: '15 min read',
    author: 'Echo Peng',
    metaTitle: 'China or India for Creative Production | hubStudio',
    metaDescription:
      'An honest regional comparison: cost, English fluency, studio capacity, category proximity, IP and data. Where India wins, stated first.',
  },
  {
    slug: 'shoot-it-or-generate-it',
    image: '/Images/insight-shoot-it-or-generate-it.webp',
    imageAlt:
      'A dark green glazed bottle standing on a paper sweep in a working photo studio, lit by one softbox from the left, with a color checker, tweezers and a lens cloth on the bench beside it.',
    category: 'Production',
    tone: 'navy',
    title: 'Shoot It or Generate It: The Decision Rule',
    deck: 'Four conditions force a real camera. Everything else is a judgment call. The rule a working studio uses, published, asset by asset.',
    date: 'June 2, 2026',
    dateISO: '2026-06-02',
    readingTime: '9 min read',
    author: 'Maya Patel',
    metaTitle: 'Shoot It or Generate It: The Decision Rule | hubStudio',
    metaDescription:
      'The rule a working studio uses, asset by asset: the four conditions that force capture, when generation wins, and what getting it wrong costs.',
  },
  {
    slug: 'china-ai-labeling-rules-production-workflow',
    image: '/Images/insight-china-ai-labeling-rules-production-workflow.webp',
    imageAlt:
      'Two pairs of hands passing a taped hard drive across a dark edit suite desk, lit by a single warm source, with a color grading panel and monitor out of focus behind them.',
    category: 'Rights',
    tone: 'orange',
    title: 'China AI Labeling Rules for Production',
    deck: 'China labels AI content in two layers. Only one survives a normal production pipeline. Here is where it breaks and what to record.',
    date: 'May 19, 2026',
    dateISO: '2026-05-19',
    readingTime: '12 min read',
    author: 'Liyan Ye',
    metaTitle: 'China AI Labeling Rules for Production | hubStudio',
    metaDescription:
      'What China\'s AI labeling rules mean for a production workflow: where each label attaches, where it gets stripped, and what a handover pack must carry.',
  },
  {
    slug: 'disclosure-audit-trail-per-asset',
    image: '/Images/insight-disclosure-audit-trail-per-asset.webp',
    imageAlt:
      'Seven identical prints of the same amber bottle laid out on a worn wooden archive table, one of them with a handwritten index card tied to its corner by thread, a hand resting on the card.',
    category: 'Rights',
    tone: 'orange',
    title: 'The AI Disclosure Audit Trail per Asset',
    deck: 'Three regimes now ask different questions about the same generated asset. Here is the per-asset record that answers all of them from a single row.',
    date: 'April 30, 2026',
    dateISO: '2026-04-30',
    readingTime: '10 min read',
    author: 'Liyan Ye',
    metaTitle: 'The AI Disclosure Audit Trail per Asset | hubStudio',
    metaDescription:
      'What a production pipeline records per asset to survive a disclosure audit: the record schema, retention, and the three regimes it has to satisfy.',
  },
  {
    slug: 'what-a-finished-brand-asset-costs',
    image: '/Images/insight-what-a-finished-brand-asset-costs.webp',
    imageAlt:
      'An amber glass bottle photographed from above on a scratched metal table, surrounded by prints of the same bottle at deliberately different sizes and finishes, one hand reaching in from the frame edge.',
    category: 'Cost',
    tone: 'navy',
    title: 'What a Brand Asset Costs in 2026',
    deck: 'Nobody publishes what one finished asset costs. This page defines the unit first, then gives absolute bands from published cards, each carrying its collection date.',
    date: 'April 17, 2026',
    dateISO: '2026-04-17',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: 'What a Brand Asset Costs in 2026 | hubStudio',
    metaDescription:
      'Absolute cost bands per finished brand asset, with the method stated and no email gate: images, social cuts, brand films and campaign adaptations.',
  },
  {
    slug: 'automation-platform-or-production-partner',
    image: '/Images/insight-automation-platform-or-production-partner.webp',
    imageAlt:
      'A single freshly pulled print held flat on a printmaker\'s bench beside a tall stack of identical copies, ink-stained hands resting at its edge in window light.',
    category: 'Buying models',
    tone: 'orange',
    title: 'Automation Platform or Production Partner',
    deck: 'Automation multiplies what exists. Its own standard proves it: a missing asset is a fallback condition, never a request to make one.',
    date: 'April 1, 2026',
    dateISO: '2026-04-01',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Automation Platform or Production Partner | hubStudio',
    metaDescription:
      'Automation multiplies assets you already have. It cannot originate the master. Where the handoff sits, what each layer costs, and how to decide.',
  },
  {
    slug: 'subscription-or-managed-production',
    image: '/Images/insight-subscription-or-managed-production.webp',
    imageAlt:
      'A long studio bench under window light with three shallow metal trays holding open jobs at the near end, and a tall stack of unopened job envelopes and rolled prints waiting behind them.',
    category: 'Buying models',
    tone: 'orange',
    title: 'Subscription or Managed Production',
    deck: 'One model sells you hours and lanes. The other sells you finished assets. Published cards show which is which, and where the mid-market falls through.',
    date: 'March 19, 2026',
    dateISO: '2026-03-19',
    readingTime: '12 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Subscription or Managed Production | hubStudio',
    metaDescription:
      'A subscription prices access to designers. Production prices delivered assets. What that distinction changes, and where each model actually fits.',
  },
  {
    slug: 'ai-content-quality-argument-over',
    image: '/Images/insight-ai-content-quality-argument-over.webp',
    imageAlt:
      'A convoy of red delivery trucks strung with warm lights moving along a snow-covered rural road at dusk, photographed from the roadside in soft blue evening light.',
    category: 'Production',
    tone: 'orange',
    title: 'AI Content Quality: The Argument Is Over',
    deck: 'Brands stopped asking whether the output was good enough. What they should be asking instead is harder, and most rosters cannot answer it.',
    date: 'March 4, 2026',
    dateISO: '2026-03-04',
    readingTime: '6 min read',
    author: 'Marcus Sullivan',
    metaTitle: 'AI Content Quality: The Argument Is Over | hubStudio',
    metaDescription:
      'AI content quality stopped being the constraint in 2026. Cannes now judges it as craft. Here is what actually limits brands instead.',
  },
  {
    slug: 'what-aigc-production-actually-is',
    image: '/Images/insight-what-aigc-production-actually-is.webp',
    imageAlt:
      'A senior art director in a dim studio leaning toward a warm-lit monitor filled with a dense grid of near-identical product visuals, one subtly highlighted, her face half in amber light and half in shadow.',
    category: 'Production',
    tone: 'navy',
    title: 'What AIGC Production Actually Is',
    deck: 'Two capabilities separate a viral demo from a shipped campaign. Here is what each one looks like when real brands run it.',
    date: 'February 18, 2026',
    dateISO: '2026-02-18',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'What AIGC Production Actually Is | hubStudio',
    metaDescription:
      'Past the demo, AI content production is two things: mass individualization and versioning at scale. Here is how it really works.',
  },
  {
    slug: 'your-ai-content-is-about-to-introduce-itself',
    image: '/Images/insight-your-ai-content-is-about-to-introduce-itself.webp',
    imageAlt:
      'An AI content-production workstation glowing in a dark studio: one monitor shows a grid of generated product-shot variations, another a node-based generation workflow, a third the selected frame in a color-grading suite, a GPU tower glowing beneath the desk.',
    category: 'Content Rights',
    tone: 'orange',
    title: 'Your AI content is about to introduce itself',
    deck: "Provenance stopped being a detection problem. It's a procurement one now.",
    date: 'February 2, 2026',
    dateISO: '2026-02-02',
    readingTime: '6 min read',
    author: 'Liyan Ye',
    metaTitle: 'Your AI Content Is About to Introduce Itself | hubStudio',
    metaDescription:
      'SynthID, C2PA, and Article 50 land August 2. What provenance rules mean for brands, agencies, and procurement teams.',
  },
  {
    slug: 'ai-content-production-beyond-the-prompt',
    image: '/Images/insight-ai-content-production-beyond-the-prompt.webp',
    imageAlt:
      'A senior art director leaning toward a color-graded monitor in a dim studio, warm screen light across her focused face.',
    category: 'Production',
    tone: 'orange',
    title: 'AI Content Production: Beyond the Prompt',
    deck: 'A good prompt gets you an image, not a usable brand asset. Here is the real gap between AI generation and directed content production work.',
    date: 'January 21, 2026',
    dateISO: '2026-01-21',
    readingTime: '6 min read',
    author: 'Maya Patel',
    metaTitle: 'AI Content Production: Beyond the Prompt | hubStudio',
    metaDescription:
      'Prompts make images. Brands need direction. Why AI content production takes more than a good prompt, and what actually gets you brand-grade work.',
  },
  {
    slug: 'ai-search-content-systems',
    image: '/Images/insight-ai-search-content-systems.webp',
    imageAlt:
      'A flattened stack of cream paper beside a single upright folded paper form casting a long shadow on raw concrete.',
    category: 'AI Search',
    tone: 'orange',
    title: 'If your content can be summarized, it will lose',
    deck: 'Why AI search is forcing a new content system, and what content leaders should build instead.',
    date: 'December 24, 2025',
    dateISO: '2025-12-24',
    readingTime: '6 min read',
    author: 'Aisha Rahman',
    metaTitle: 'Why AI Search Is Forcing a New Content System | hubStudio',
    metaDescription:
      'AI search is rewriting SEO. As Google prioritizes video, tools, and structured content, brands must shift from text-heavy pages to AI-ready content systems.',
  },
  {
    slug: 'luxury-ai-content-systems',
    image: '/Images/insight-luxury-ai-content-systems.webp',
    imageAlt:
      'A matte navy ovoid resting on a cream plinth, half-revealed from behind a draped panel of cream linen.',
    category: 'Luxury & AI',
    tone: 'navy',
    title: "Luxury's quiet AI phase is ending",
    deck: 'Content systems are the real test of creative intelligence, and luxury will move on its own terms.',
    date: 'December 24, 2025',
    dateISO: '2025-12-24',
    readingTime: '6 min read',
    author: 'Marcus Sullivan',
    metaTitle: "Luxury's Quiet AI Phase Is Ending | hubStudio",
    metaDescription:
      'Luxury brands are not slow on AI, they are selective. The real test is building AI-native content systems that protect brand equity, creativity, and control.',
  },
  {
    slug: 'promptable-3d-content-operations',
    image: '/Images/insight-promptable-3d-content-operations.webp',
    imageAlt:
      'A solid burnt-orange faceted polyhedron beside a calm grid of flat cream paper cut-outs of the same shape.',
    category: '3D & Spatial',
    tone: 'orange',
    title: 'Promptable 3D is here, and content operations are about to go spatial',
    deck: 'When 3D becomes a reusable master asset, the winners build the QA and creative direction that scale.',
    date: 'December 13, 2025',
    dateISO: '2025-12-13',
    readingTime: '8 min read',
    author: 'Jason Liu',
    metaTitle: 'Promptable 3D and the Spatial Shift in Content Operations | hubStudio',
    metaDescription:
      'Promptable 3D shifts production from one-off assets to reusable 3D objects. The winners build the QA and creative direction that scale.',
  },
  {
    slug: 'where-language-ai-delivers',
    image: '/Images/insight-where-language-ai-delivers.webp',
    imageAlt:
      'A burnt-orange block fitted precisely into a deep navy recess among carved cream plaster blocks.',
    category: 'Language AI',
    tone: 'navy',
    title: 'Beyond the hype: where language AI actually delivers',
    deck: 'Language models were oversold as universal solutions. Pointed at the right work, they transform content teams.',
    date: 'December 7, 2025',
    dateISO: '2025-12-07',
    readingTime: '7 min read',
    author: 'Aisha Rahman',
    metaTitle: 'Where Language AI Actually Delivers for Content Teams | hubStudio',
    metaDescription:
      'Language models have been oversold as universal solutions. Applied to the right creative challenges, AI transforms content teams through focused execution.',
  },
  {
    slug: 'ai-sound-for-video',
    image: '/Images/insight-ai-sound-for-video.webp',
    imageAlt:
      'Concentric rings of cream paper rippling outward from a small navy sphere, like a sound wave frozen in place.',
    category: 'AI Video',
    tone: 'orange',
    title: 'Turning AI video up to 10: how AI video learns to sound alive',
    deck: 'AI video looks sharp but often sounds flat. New audio models let us add Foley-grade sound to AIGC at scale.',
    date: 'November 21, 2025',
    dateISO: '2025-11-21',
    readingTime: '6 min read',
    author: 'Erik Lindström',
    metaTitle: 'Foley-Grade Audio for AI Video at Scale | hubStudio',
    metaDescription:
      'AI video looks good but often sounds flat. New AI sound models let hubStudio add Foley-grade audio to AIGC at production scale.',
  },
  {
    slug: 'geo-vs-seo',
    image: '/Images/insight-geo-vs-seo.webp',
    imageAlt:
      'Scattered cream pebbles and a single navy stone on a plinth, joined by one burnt-orange line drawn in sand.',
    category: 'Search & GEO',
    tone: 'navy',
    title: "The search revolution you're not preparing for",
    deck: 'Traditional SEO ranked for clicks. GEO optimizes for AI recommendation and trust.',
    date: 'November 17, 2025',
    dateISO: '2025-11-17',
    readingTime: '6 min read',
    author: 'Aisha Rahman',
    metaTitle: 'GEO vs SEO: How AI Search Rewrites the Rules | hubStudio',
    metaDescription:
      'Google search is fading fast. ChatGPT, Perplexity, and AI Overviews now control visibility. GEO optimizes for AI recommendation and trust.',
  },
  {
    slug: 'three-years-of-genai-ecommerce',
    image: '/Images/insight-three-years-of-genai-ecommerce.webp',
    imageAlt:
      'Three plinths in a row holding a raw clay lump, a half-formed navy shape, and a finished burnt-orange object.',
    category: 'eCommerce',
    tone: 'orange',
    title: 'Three years of GenAI: how eCommerce transformed',
    deck: 'GenAI democratised the tools but not the expertise, and creative intelligence matters more than ever.',
    date: 'November 16, 2025',
    dateISO: '2025-11-16',
    readingTime: '7 min read',
    author: 'Echo Peng',
    metaTitle: 'Three Years of GenAI: How eCommerce Transformed | hubStudio',
    metaDescription:
      'Three years after ChatGPT launched, eCommerce content production transformed completely. GenAI democratised the tools but not the expertise.',
  },
  {
    slug: 'aigc-adoption-curve',
    image: '/Images/insight-aigc-adoption-curve.webp',
    imageAlt:
      'An ascending ramp of stacked cream plaster blocks rising to a single burnt-orange block at the top.',
    category: 'Production',
    tone: 'navy',
    title: 'The AIGC adoption curve: why creative leaders are rethinking production',
    deck: 'How brands produce 7x more content at 60% of previous budgets, without compromising quality.',
    date: 'November 10, 2025',
    dateISO: '2025-11-10',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'The AIGC Adoption Curve for Content Leaders | hubStudio',
    metaDescription:
      "Traditional production can't keep pace with modern marketing. How brands use AIGC strategy to produce 7x more content at 60% of previous budgets.",
  },
  {
    slug: 'without-creatives-aigc-is-nothing',
    image: '/Images/insight-without-creatives-aigc-is-nothing.webp',
    imageAlt:
      'A human hand placing a burnt-orange block among an arrangement of cream and navy blocks on concrete.',
    category: 'Creative Strategy',
    tone: 'orange',
    title: 'Without creatives, AIGC is nothing',
    deck: 'Platforms provide the tools. Creatives provide the meaning. Creative strategy always comes first.',
    date: 'November 7, 2025',
    dateISO: '2025-11-07',
    readingTime: '5 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Without Creatives, AIGC Is Nothing | hubStudio',
    metaDescription:
      'Platforms provide the tools. Creatives provide the meaning. AI can format and publish instantly, but it cannot decide what truly matters.',
  },
  {
    slug: 'adobe-ai-mistake',
    image: '/Images/insight-adobe-ai-mistake.webp',
    imageAlt:
      'A toppled cream plaster classical column fragment beside an upright, clean burnt-orange monolithic block.',
    category: 'Industry',
    tone: 'navy',
    title: "Why Adobe didn't miss the AI revolution, it just chose the wrong side",
    deck: 'Adobe chose aggregation over innovation. AI-native production changed the architecture of content creation.',
    date: 'October 14, 2025',
    dateISO: '2025-10-14',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Adobe, AI, and the End of the Creative Suite Era | hubStudio',
    metaDescription:
      'Adobe chose aggregation over innovation. AI-native production rebuilt content creation from first principles, and the architecture has shifted.',
  },
  {
    slug: 'ai-avatars-brand-content',
    image: '/Images/insight-ai-avatars-brand-content.webp',
    imageAlt:
      'A grid of portraits, each face split between a smiling human likeness and a chrome robotic head.',
    category: 'AI Avatars',
    tone: 'orange',
    title: 'AI avatars: how businesses are transforming brand content',
    deck: 'Avatars moved from novelty to infrastructure. The ways brands use them now, and what separates a smart deployment from a gimmick.',
    date: 'September 14, 2025',
    dateISO: '2025-09-14',
    readingTime: '5 min read',
    author: 'Erik Lindström',
    metaTitle: 'How AI Avatars Are Transforming Brand Content | hubStudio',
    metaDescription:
      'How businesses use AI avatars for scalable content creation, global localization, personalized outreach, and consistent brand representation.',
  },
  {
    slug: 'diffusion-models-explained',
    image: '/Images/insight-diffusion-models-explained.webp',
    imageAlt:
      'A pale blue-white macro render of countless soft textured spheres of varying sizes drifting in shallow focus.',
    category: 'AI Foundations',
    tone: 'navy',
    title: "Understanding diffusion models: the science behind your brand's AI visuals",
    deck: 'The technology behind every AI image tool your team uses, and why understanding it changes how you brief and judge the work.',
    date: 'August 19, 2025',
    dateISO: '2025-08-19',
    readingTime: '6 min read',
    author: 'Jason Liu',
    metaTitle: 'Diffusion Models: The Science Behind AI Visuals | hubStudio',
    metaDescription:
      'How diffusion models power AI image generation for brands: the technology behind tools like Midjourney, and the custom AIGC workflows built on it.',
  },
  {
    slug: 'custom-aigc-workflows',
    image: '/Images/insight-custom-aigc-workflows.webp',
    imageAlt:
      'A desktop monitor on a purple backdrop showing a content-library interface, a grid of interior and lifestyle image thumbnails.',
    category: 'Production',
    tone: 'orange',
    title: 'How we build custom AIGC workflows for every client',
    deck: "Generic AI tools cannot hold a brand. The real power is workflow architecture tuned to each brand's creative DNA.",
    date: 'August 4, 2025',
    dateISO: '2025-08-04',
    readingTime: '6 min read',
    author: 'Echo Peng',
    metaTitle: 'Building Custom AIGC Workflows for Every Client | hubStudio',
    metaDescription:
      "Generic AI tools cannot capture a brand's creative DNA. How hubStudio architects custom AIGC workflows around each client's creative territories.",
  },
  {
    slug: 'agentic-ai-creative-data',
    image: '/Images/insight-agentic-ai-creative-data.webp',
    imageAlt:
      'An abstract black, white, and orange collage of close-up human eyes among geometric fragments, spheres, and fine line work.',
    category: 'Agentic AI',
    tone: 'navy',
    title: 'How agentic AI is reshaping data work for creative teams',
    deck: "Autonomous agents now handle the analytics grind. The analyst's job shifts from spreadsheets to brand intelligence.",
    date: 'July 27, 2025',
    dateISO: '2025-07-27',
    readingTime: '5 min read',
    author: 'Maya Patel',
    metaTitle: 'How Agentic AI Is Reshaping Creative Data Work | hubStudio',
    metaDescription:
      'How autonomous AI agents reshape creative analytics, the insights they surface automatically, and how analysts become brand intelligence architects.',
  },
  {
    slug: 'veo-3-studio-review',
    image: '/Images/insight-veo-3-studio-review.webp',
    imageAlt:
      'A glowing neon outline of a video play-button icon hovering over still water amid soft pink and teal clouds.',
    category: 'AI Video',
    tone: 'orange',
    title: "Veo 3 deep dive: an AIGC studio's honest assessment",
    deck: "We ran Google's video model through a real production pipeline. Where it earns its place, and where it does not.",
    date: 'July 4, 2025',
    dateISO: '2025-07-04',
    readingTime: '9 min read',
    author: 'Erik Lindström',
    metaTitle: "Veo 3 Review: An AIGC Studio's Honest Assessment | hubStudio",
    metaDescription:
      'A professional AIGC studio assesses Veo 3: video quality, brand applications, cost, and where it fits in a real production workflow.',
  },
  {
    slug: 'cloudflare-pay-per-crawl',
    image: '/Images/insight-cloudflare-pay-per-crawl.webp',
    imageAlt:
      'A desktop monitor on a white surface with paper documents and clippings bursting outward from a cluttered on-screen feed.',
    category: 'Content Rights',
    tone: 'navy',
    title: 'Cloudflare changed the AIGC game: why pay per crawl protects brand content',
    deck: 'Default AI scrapers now hit a paywall. For brands, original content turns from free training data into a protected asset.',
    date: 'July 3, 2025',
    dateISO: '2025-07-03',
    readingTime: '7 min read',
    author: 'Aisha Rahman',
    metaTitle: 'Cloudflare Pay Per Crawl and AIGC Content Protection | hubStudio',
    metaDescription:
      "Cloudflare's pay-per-crawl model blocks default AI scrapers and forces platforms to pay for access, turning original brand content into a protected asset.",
  },
  {
    slug: 'data-driven-aigc',
    image: '/Images/insight-data-driven-aigc.webp',
    imageAlt:
      'A dark digital corridor of streaming green, blue, and red data receding into the distance.',
    category: 'Performance',
    tone: 'orange',
    title: 'Beyond prompts: how data-driven AIGC transforms brand content at scale',
    deck: 'Prompt-and-pray does not scale. A feedback loop that trains models on performance data does.',
    date: 'June 30, 2025',
    dateISO: '2025-06-30',
    readingTime: '7 min read',
    author: 'Echo Peng',
    metaTitle: 'Data-Driven AIGC: Scaling Brand Content That Performs | hubStudio',
    metaDescription:
      'Most brands still prompt and pray. Data-driven AIGC turns performance data into a feedback loop that trains models, scales content, and lifts conversions.',
  },
];

/** Look up a single insight by slug. Throws at build time if missing. */
export function getInsight(slug: string): Insight {
  const found = insights.find((i) => i.slug === slug);
  if (!found) throw new Error(`Unknown insight slug: ${slug}`);
  return found;
}

/** The next `count` insights after the given slug, wrapping around the list. */
export function relatedInsights(slug: string, count = 3): Insight[] {
  const index = insights.findIndex((i) => i.slug === slug);
  const rest = [...insights.slice(index + 1), ...insights.slice(0, index)];
  return rest.slice(0, count);
}
