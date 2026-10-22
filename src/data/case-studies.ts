/**
 * Case study data for `/work` and `/work/[slug]`.
 *
 * Content is hubStudio's own client work, rewritten from the legacy
 * use-cases pages into the studio's editorial voice. Images live in
 * `public/Images/work/` (downloaded from the source site, then resized and
 * converted to webp per the image-optimization rule).
 *
 * `results` figures are data display (unit attached), not ordinal numerals,
 * so they sit outside the no-numbers-in-cards rule.
 */

export interface ApproachItem {
  title: string;
  desc: string;
}

export interface ResultStat {
  /** Short headline figure or phrase. */
  value: string;
  /** What the figure means. */
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface CaseVideo {
  /** Web-optimized H.264 MP4 source. */
  mp4: string;
  /** VP9 WebM source, served first where supported. */
  webm: string;
  /** Poster frame (WebP) shown before playback. */
  poster: string;
  /** Accessible description of the clip. */
  alt: string;
  /** Natural aspect ratio as a CSS `aspect-ratio` value, e.g. '16 / 9'. */
  aspect: string;
}

export type WorkDiscipline =
  | 'Social media'
  | 'AI content & merchandising'
  | 'Video & launch films'
  | 'Custom platforms & studios';

export interface CaseStudy {
  discipline: WorkDiscipline;
  slug: string;
  client: string;
  /** Card and hero headline. */
  title: string;
  /** Short tag shown on the index card and detail eyebrow. */
  category: string;
  industry: string;
  region: string;
  /** One-sentence summary: index card body + meta description. */
  summary: string;
  hero: { src: string; alt: string };
  /** The brief, two or three paragraphs. */
  challenge: string[];
  /** One-line lead into the approach items. */
  approachLead: string;
  approach: ApproachItem[];
  /** What shipped. */
  delivered: string[];
  /** Outcomes band. */
  results: ResultStat[];
  /** Service chips. */
  services: string[];
  gallery: GalleryImage[];
  /** Web-optimized campaign clips, shown in the "in motion" section. */
  videos?: CaseVideo[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'iflytek-anypin',
    discipline: 'Video & launch films',
    client: 'iFlytek',
    title: 'A global AI wearable launch, produced in one hybrid build',
    category: 'Product launch video',
    industry: 'Consumer electronics',
    region: 'Global',
    summary:
      'iFlytek launched its Anypin AI wearable pin globally. We produced one hybrid film mixing live shooting, CGI and AIGC, then cut it for every channel.',
    hero: {
      src: '/Images/work/iflytek-hero.webp',
      alt: 'A frame from the iFlytek Anypin launch film showing the AI wearable pin clipped to a jacket in a cinematic product moment.',
    },
    challenge: [
      'iFlytek was launching Anypin, a wearable AI pin that listens, records and acts as a personal assistant clipped to a jacket or a shirt. The film had to introduce the product to people who had never seen one, explain what it does in daily life, and build enough trust to turn a curious viewer into a buyer.',
      'The brief called for hybrid production. Real product footage, because viewers can tell when a launch film does not have a single frame of the actual device. CGI for the interface, the signals and the way Anypin responds to a voice or a tap. AIGC for the world around the product, from a morning commute to a parent in a kitchen or a traveler picking something up at a market.',
      'A traditional workflow would have split the job across three vendors and a sequential timeline of three to four months end to end. For a global launch with a fixed window, that math does not work.',
    ],
    approachLead:
      'We ran it as one production from the first storyboard: three disciplines, one creative direction, one editorial team holding the cut together.',
    approach: [
      {
        title: 'One visual grammar across three disciplines',
        desc: 'Live footage, CGI and AIGC scenes shared the same lighting, color palette and camera language. Setting those rules early was the only way to keep the seams hidden.',
      },
      {
        title: 'Live shooting for the product hero',
        desc: 'A two-day shoot covered the product moments on set: macro work, packaging, the pin in hand and the pin on a jacket.',
      },
      {
        title: 'CGI for the intelligence of the device',
        desc: 'A small CGI team built the interface and the way the AI responds in a scene, so the product speaks visually without screen captures or static mockups.',
      },
      {
        title: 'AIGC for the world around the product',
        desc: 'Our AIGC pipeline generated the contextual scenes: several markets and several lifestyle moments at different times of day, with no crews flown to multiple locations.',
      },
      {
        title: 'Modular from the start',
        desc: 'The hero film was storyboarded so the short cuts came out of the same shoot and the same renders. No reframing, no version-two passes after the fact.',
      },
    ],
    delivered: [
      'A 90-second hero film for the website and eCommerce product pages',
      'Six use case vignettes, each running 15 to 30 seconds',
      'Vertical 9:16, square 1:1 and horizontal 16:9 versions of every cut',
      'Platform-specific edits for Meta, TikTok, YouTube, Douyin and RedNote',
      'Localized voiceovers and on-screen text in English, Simplified Chinese and Spanish',
      'A modular asset library the iFlytek team can re-cut for future campaigns',
    ],
    results: [
      { value: '3 techniques', label: 'Live shooting, CGI and AIGC under one creative direction' },
      { value: '22 cuts', label: 'Hero film, use case vignettes and platform edits' },
      {
        value: 'Weeks, not months',
        label: 'A sequential three-vendor workflow would have run three to four times longer',
      },
    ],
    services: [
      'Hybrid creative direction',
      'Storyboarding',
      'Live action shoot',
      'CGI interface design',
      'AIGC environments',
      'Editorial & localization',
    ],
    gallery: [],
    videos: [
      {
        mp4: '/Video/iflytek-1.mp4',
        webm: '/Video/iflytek-1.webm',
        poster: '/Video/iflytek-1-poster.webp',
        alt: 'iFlytek Anypin hybrid launch film, mixing live shooting, CGI and AIGC.',
        aspect: '16 / 9',
      },
    ],
  },
  {
    slug: 'noyz-mylk-de-parfum',
    discipline: 'Video & launch films',
    client: 'Noyz',
    title: 'A fragrance that turns to milk on the skin',
    category: 'Product launch video',
    industry: 'Fragrance',
    region: 'Product launch',
    summary:
      'Noyz needed its milk-based perfume to read on screen. We trained a model on fluid physics so the signature mist-to-milk transformation looked real, then cut it for every channel.',
    hero: {
      src: '/Images/work/noyz-hero.webp',
      alt: 'A diffused spray of perfume mist softening into a creamy milk texture against a warm neutral backdrop for the Noyz Mylk de Parfum launch.',
    },
    challenge: [
      'Noyz had built something genuinely new: a milk de parfum that shifts from a fine mist to a creamy milk the moment it meets skin. The product is the story, and the story only lands if you can see that change happen. A still photograph cannot carry it.',
      'The hard part was the physics. Mist particles condensing into a milk texture is a fluid behaviour, and generic generation models do not understand fluid behaviour. The transformation had to read as real, not as a visual effect, and the same master had to travel from the website to Instagram, TikTok and pre-roll without losing the moment.',
    ],
    approachLead:
      'We treated the transformation as a simulation problem, not a styling problem.',
    approach: [
      {
        title: 'Trained for fluid physics',
        desc: 'We trained a model specifically on how a mist condenses and how a liquid moves, so the mist-to-milk change obeyed real dynamics rather than guessing at them.',
      },
      {
        title: 'One master film',
        desc: 'A single launch film carries the signature effect at full quality, built to hold up as hero content on the site and the product page.',
      },
      {
        title: 'Cut for every feed',
        desc: 'From that master we cut vertical TikTok, Instagram feed and stories, and YouTube pre-roll and mid-roll, each paced for how that platform is watched.',
      },
    ],
    delivered: [
      'Hero launch film built around the mist-to-milk transformation',
      'eCommerce product-page video showing the formula in use',
      'Instagram feed and stories cutdowns',
      'Vertical TikTok edit built for the texture moment',
      'YouTube pre-roll and mid-roll advertising cuts',
    ],
    results: [
      { value: '5+', label: 'Channels cut from a single master film' },
      { value: 'Mist→milk', label: 'Transformation trained on real fluid physics' },
      { value: 'Launch-ready', label: 'Hero content for web, eCommerce and social' },
    ],
    services: ['Launch film', 'AIGC', 'Fluid simulation', 'Social cutdowns'],
    gallery: [],
    videos: [
      {
        mp4: '/Video/noyz-1.mp4',
        webm: '/Video/noyz-1.webm',
        poster: '/Video/noyz-1-poster.webp',
        alt: 'Noyz Mylk de Parfum launch film built around the signature mist-to-milk transformation.',
        aspect: '4 / 5',
      },
    ],
  },
  {
    slug: 'mexicash',
    discipline: 'Video & launch films',
    client: 'Mexicash',
    title: 'A five-platform video campaign, briefed and shipped in five days',
    category: 'Video advertising',
    industry: 'Financial services',
    region: 'Mexico',
    summary:
      'Mexicash needed a full micro-credit video campaign across five platforms in five days. We built the concepts, the trust cues and every cut without an agency timeline.',
    hero: {
      src: '/Images/work/mexicash-hero.webp',
      alt: 'A frame from the Mexicash micro-credit video campaign showing a confident everyday subject in warm directional light.',
    },
    challenge: [
      'Mexicash, a micro-credit lender promoted by KN Group, needed a complete campaign in five days: concept, copy and finished video across Instagram, TikTok, YouTube, Facebook and Google Display. A traditional agency would still have been scoping the brief.',
      'Micro-credit is a trust category. The creative had to read Mexican borrower psychology, establish financial credibility in the first three to five seconds, and do it across four video lengths in both vertical and horizontal ratios. The budget ruled out a conventional production workflow, so the work needed agency-grade thinking at a different speed.',
    ],
    approachLead:
      'We built the campaign platform by platform, around how each audience actually decides.',
    approach: [
      {
        title: 'Concepts tuned to trust drivers',
        desc: 'Each platform got a creative concept built on the specific trust cues and credit behaviours that move a Mexican micro-credit audience.',
      },
      {
        title: 'Lengths for every placement',
        desc: 'Six, eight, twelve and fifteen-second cuts, sized for pre-roll attention spans through to fuller storytelling, with the hook landing inside the first seconds.',
      },
      {
        title: 'Vertical and horizontal from one build',
        desc: 'Mobile-first 9:16 and desktop 16:9 versions came out of the same production, so nothing was reframed as an afterthought.',
      },
    ],
    delivered: [
      'Platform-specific creative concepts for five channels',
      'Video cuts at six, eight, twelve and fifteen seconds',
      'Vertical 9:16 and horizontal 16:9 versions of each',
      'Micro-credit copy written for a Mexican audience',
    ],
    results: [
      { value: '5 days', label: 'Concept to finished campaign' },
      { value: '5 platforms', label: 'Instagram, TikTok, YouTube, Facebook, Display' },
      { value: '8 cuts', label: 'Lengths and aspect ratios shipped' },
    ],
    services: ['Creative concepting', 'Performance video', 'Platform cutdowns', 'Copywriting'],
    gallery: [
      {
        src: '/Images/work/mexicash-1.webp',
        alt: 'Mexicash campaign frame composed for a vertical mobile feed.',
      },
      {
        src: '/Images/work/mexicash-2.webp',
        alt: 'Mexicash campaign frame with on-screen messaging built around financial credibility.',
      },
      {
        src: '/Images/work/mexicash-3.webp',
        alt: 'Mexicash campaign frame cut for a horizontal desktop placement.',
      },
    ],
    videos: [
      {
        mp4: '/Video/mexicash-1.mp4',
        webm: '/Video/mexicash-1.webm',
        poster: '/Video/mexicash-1-poster.webp',
        alt: 'Mexicash micro-credit campaign video, horizontal cut for desktop and in-feed placements.',
        aspect: '1942 / 1080',
      },
      {
        mp4: '/Video/mexicash-2.mp4',
        webm: '/Video/mexicash-2.webm',
        poster: '/Video/mexicash-2-poster.webp',
        alt: 'Mexicash micro-credit campaign video, vertical cut for mobile feeds.',
        aspect: '9 / 16',
      },
      {
        mp4: '/Video/mexicash-3.mp4',
        webm: '/Video/mexicash-3.webm',
        poster: '/Video/mexicash-3-poster.webp',
        alt: 'Mexicash micro-credit campaign video, vertical cut for TikTok and stories.',
        aspect: '9 / 16',
      },
      {
        mp4: '/Video/mexicash-4.mp4',
        webm: '/Video/mexicash-4.webm',
        poster: '/Video/mexicash-4-poster.webp',
        alt: 'Mexicash micro-credit campaign video, horizontal 16:9 cut for YouTube and Display.',
        aspect: '1942 / 1080',
      },
    ],
  },
  {
    slug: 'elizabeth-gage',
    discipline: 'AI content & merchandising',
    client: 'Elizabeth Gage',
    title: 'Closing the digital gap for a heritage British jeweller',
    category: 'Digital content',
    industry: 'Fine jewellery',
    region: 'United Kingdom',
    summary:
      'A legacy London jeweller had decades of prestige and a digital lag to match. We generated product imagery, video and social content at scale, compressing years of catch-up into months.',
    hero: {
      src: '/Images/work/elizabeth-gage-hero.webp',
      alt: 'A model wearing a statement piece from the heritage British jeweller, photographed in soft directional light.',
    },
    challenge: [
      'Elizabeth Gage is a heritage London jewellery house with decades of craftsmanship behind it, and a digital presence that had not kept pace. To compete with digitally native brands it needed a real volume of product photography and video for Instagram and TikTok.',
      'Jewellery photography is one of the most demanding and expensive categories there is: specialist lighting, macro detail, meticulous styling, shoot after shoot. With cost targets to hit and deadlines that did not move, the conventional route could not produce enough assets to matter.',
    ],
    approachLead:
      'We built an AIGC production line for the brand and ran years of digital catch-up through it.',
    approach: [
      {
        title: 'Detail that survives the macro crop',
        desc: 'Generated product imagery holds the stones, the settings and the metalwork at the level a jewellery buyer expects to scrutinise.',
      },
      {
        title: 'Built for the feed',
        desc: 'Social content was shaped for Instagram feed and stories and adapted to TikTok, rather than retrofitted from print.',
      },
      {
        title: 'Seasonal and lifestyle context',
        desc: 'Campaign visuals support collection launches, and lifestyle imagery places each piece in an aspirational, giftable setting.',
      },
    ],
    delivered: [
      'Product imagery showing detail and craftsmanship',
      'Product demonstration video for design and wear',
      'Instagram feed and stories content',
      'TikTok creative adapted to platform trends',
      'Seasonal campaign visuals for collection launches',
      'Lifestyle imagery for aspiration and gifting',
    ],
    results: [
      { value: 'Months', label: 'Digital catch-up compressed from years' },
      { value: '2 feeds', label: 'Instagram and TikTok supplied at volume' },
      { value: 'Heritage intact', label: 'Craftsmanship holds at every frame' },
    ],
    services: ['Product imagery', 'Social content', 'AIGC at scale', 'Seasonal campaigns'],
    gallery: [
      {
        src: '/Images/work/elizabeth-gage-1.webp',
        alt: 'Close product study of an Elizabeth Gage piece showing stone setting and metalwork.',
      },
      {
        src: '/Images/work/elizabeth-gage-2.webp',
        alt: 'A second Elizabeth Gage product study composed for an eCommerce product page.',
      },
      {
        src: '/Images/work/elizabeth-gage-3.webp',
        alt: 'A seasonal Elizabeth Gage campaign visual styled for gifting.',
      },
    ],
    videos: [
      {
        mp4: '/Video/elizabeth-gage-1.mp4',
        webm: '/Video/elizabeth-gage-1.webm',
        poster: '/Video/elizabeth-gage-1-poster.webp',
        alt: 'Elizabeth Gage product video holding a jewellery piece in macro detail.',
        aspect: '1446 / 1080',
      },
      {
        mp4: '/Video/elizabeth-gage-2.mp4',
        webm: '/Video/elizabeth-gage-2.webm',
        poster: '/Video/elizabeth-gage-2-poster.webp',
        alt: 'Elizabeth Gage product video styled for Instagram feed and stories.',
        aspect: '1446 / 1080',
      },
      {
        mp4: '/Video/elizabeth-gage-3.mp4',
        webm: '/Video/elizabeth-gage-3.webm',
        poster: '/Video/elizabeth-gage-3-poster.webp',
        alt: 'Elizabeth Gage vertical product video adapted for TikTok and stories.',
        aspect: '1080 / 1446',
      },
    ],
  },
  {
    slug: 'hisense',
    discipline: 'Custom platforms & studios',
    client: 'HiSense',
    title: 'A self-serve content platform, live in eight weeks',
    category: 'Platform deployment',
    industry: 'Consumer electronics',
    region: 'North America',
    summary:
      'HiSense needed its teams and agencies to generate thousands of assets a week for North America. We built them a self-serve content platform with custom-trained models and had it live before retail season.',
    hero: {
      src: '/Images/work/hisense-hero.webp',
      alt: 'A HiSense television staged in a contemporary living room, lit for a North American retail audience.',
    },
    challenge: [
      'HiSense, the world’s second-largest TV brand, was pushing hard into North America. To compete across thousands of retail touchpoints it needed asset velocity its existing setup could not give: separate product shoots, an agency briefed for every campaign, and approval cycles that ran long.',
      'The ask was a self-serve content platform, built for HiSense, so internal teams and outside agencies could independently produce thousands of weekly assets. It had to understand HiSense products, brand visuals and North American taste, and it had to be operational within two months to support major retail partnerships.',
    ],
    approachLead:
      'We built the platform for HiSense alone, not a generic tool with a logo on it.',
    approach: [
      {
        title: 'Models trained per product line',
        desc: 'Dedicated LoRA models for each category keep generated assets accurate to the actual product, never an approximation of it.',
      },
      {
        title: 'Brand and market built in',
        desc: 'The platform learned HiSense visual language and had North American consumer preference research trained into it, so output resonates by default.',
      },
      {
        title: 'Custom agents inside the platform',
        desc: 'Specialised AIGC agents and workflows go beyond the standard feature set, matching HiSense’s exact production needs.',
      },
      {
        title: 'Context from minimal input',
        desc: 'Teams start from very little: the platform supplies the brand understanding, so a brief becomes finished assets fast.',
      },
    ],
    delivered: [
      'A self-serve content platform hubStudio built for HiSense',
      'Product-specific LoRA models per category',
      'Custom AIGC agents and production workflows',
      'Brand-trained generation tuned to North American preferences',
      'Self-serve access for internal teams and external agencies',
    ],
    results: [
      { value: '8 weeks', label: 'Platform live and ready for retail season' },
      { value: '1000s/week', label: 'Brand assets produced after launch' },
      { value: 'Day one', label: 'Teams generating with no ramp-up' },
    ],
    services: ['Custom content platform', 'Custom model training', 'AIGC agents', 'Workflow design'],
    gallery: [],
  },
  {
    slug: 'diy-european-retailer',
    discipline: 'AI content & merchandising',
    client: 'European DIY retailer',
    title: 'Contextualising thousands of products, made economically possible',
    category: 'AI merchandising',
    industry: 'Home improvement retail',
    region: 'Europe',
    summary:
      'A European home improvement retailer had thousands of SKUs and basic product shots. We turned them into seasonal lifestyle imagery across catalog, eCommerce and store.',
    hero: {
      src: '/Images/work/diy-retailer-hero.webp',
      alt: 'A home improvement product shown in a realistic renovated-room setting, generated from a basic catalog shot.',
    },
    challenge: [
      'A large European DIY retailer faced a merchandising problem that did not scale. Thousands of SKUs each needed contextualised imagery for catalogues, eCommerce pages and seasonal in-store promotions, and the starting point was basic product shots, many of them low resolution.',
      'Every product needed lifestyle context across the retail calendar: Christmas displays, spring gardening, summer outdoor living, back to school. Traditional photography at that scale was simply not affordable. Studio shoots per context, separate sessions per season, heavy post-production: none of it fits a continuous promotional cycle.',
    ],
    approachLead:
      'We used AIGC to make per-SKU contextual imagery viable, and built it to amplify the merchandising team rather than replace it.',
    approach: [
      {
        title: 'Basic shots into lifestyle imagery',
        desc: 'Low-resolution product shots became rich visuals showing the product in workshops, renovated rooms and outdoor spaces.',
      },
      {
        title: 'Seasonal assets on demand',
        desc: 'Promotional imagery is generated to match the retail calendar without booking shoots months ahead.',
      },
      {
        title: 'Consistent across every channel',
        desc: 'Print catalogues, eCommerce product pages and in-store displays share one visual standard.',
      },
    ],
    delivered: [
      'Thousands of contextualised product images from basic shots',
      'Seasonal promotional visuals for in-store merchandising',
      'eCommerce product imagery showing real-world use',
      'Catalog-ready lifestyle photography across categories',
      'Product usage and installation video',
    ],
    results: [
      { value: '1000s', label: 'SKUs given lifestyle context' },
      { value: '4 seasons', label: 'Promotional calendars covered without reshoots' },
      { value: 'Omnichannel', label: 'Catalog, eCommerce and store kept consistent' },
    ],
    services: ['AIGC merchandising', 'Lifestyle imagery', 'Seasonal assets', 'Omnichannel content'],
    gallery: [],
  },
  {
    slug: 'camper',
    discipline: 'AI content & merchandising',
    client: 'Camper',
    title: 'Mediterranean character, reimagined for China’s Gen Z',
    category: 'Localized content',
    industry: 'Footwear',
    region: 'China market',
    summary:
      'Camper needed its Mediterranean identity to land with China’s Gen Z. We turned a limited global library into a full China-ready set of images and video.',
    hero: {
      src: '/Images/work/camper-hero.webp',
      alt: 'Camper footwear styled within a contemporary Chinese setting that reads to a Gen Z audience.',
    },
    challenge: [
      'Camper, the Spanish contemporary footwear brand, needed localized content for China’s Gen Z that kept its Mediterranean heritage while genuinely resonating locally. It was working from a limited library of global assets.',
      'It needed product imagery, lifestyle visuals set in Chinese contexts, and engaging video. Location shoots in China with local crews, separate sessions per content type, heavy post: at the volume required, the maths did not work for consistent monthly output.',
    ],
    approachLead:
      'We reimagined the brand rather than translating it, generating until the visuals genuinely resonated.',
    approach: [
      {
        title: 'Cultural reimagining',
        desc: 'Starting from Camper’s Mediterranean imagery, we generated visuals that place the shoes in Chinese contexts a Gen Z audience recognises.',
      },
      {
        title: 'Brand voice in local codes',
        desc: 'Lifestyle imagery and video express Camper’s personality through Chinese aesthetic codes, with dozens of variations per concept until it landed.',
      },
      {
        title: 'A full library, fast',
        desc: 'Product shots, lifestyle imagery and video came out at a scale that would take dozens of traditional production days, delivered in days.',
      },
    ],
    delivered: [
      'Product imagery localized to Chinese cultural contexts',
      'Lifestyle visuals for Gen Z-relevant scenarios',
      'Brand video carrying Mediterranean character through a Chinese lens',
      'Animated product showcases optimized for mobile',
      'Seasonal campaign assets adapting the global brand language',
    ],
    results: [
      { value: 'China-ready', label: 'Global library localized for Gen Z' },
      { value: 'Days', label: 'Turnaround per concept, not weeks' },
      { value: 'Dozens', label: 'Variations explored for each visual' },
    ],
    services: ['Cultural adaptation', 'Lifestyle imagery', 'Video & animation', 'Social content'],
    gallery: [
      {
        src: '/Images/work/camper-1.webp',
        alt: 'Camper product visual composed for a Chinese social feed.',
      },
      {
        src: '/Images/work/camper-2.webp',
        alt: 'Camper lifestyle visual placing the footwear in a Gen Z-relevant Chinese scene.',
      },
      {
        src: '/Images/work/camper-3.webp',
        alt: 'Camper campaign visual carrying Mediterranean character through Chinese aesthetic codes.',
      },
    ],
  },
  {
    slug: 'age20',
    discipline: 'AI content & merchandising',
    client: 'age20',
    title: 'One K-beauty brand, every market’s language',
    category: 'Campaign localization',
    industry: 'K-beauty',
    region: 'Asia-Pacific',
    summary:
      'age20 needed hyper-localized campaign content across Asian markets on aggressive timelines. We turned product photography into on-model campaigns in hours, brand DNA intact.',
    hero: {
      src: '/Images/work/age20-hero.webp',
      alt: 'An age20 beauty campaign visual with an on-model styled look in clean editorial light.',
    },
    challenge: [
      'age20 works in fast-moving K-beauty, where campaigns have to deploy across markets from Korea to Southeast Asia while holding a youthful, distinct brand identity. Each market needs hyper-localized variations that reflect regional beauty standards and cultural moments, all on aggressive timelines.',
      'Gen Z audiences spot generic or culturally tone-deaf messaging immediately. Traditional production forced a choice no brand wants to make: separate creative per region, multiple shoots and long post cycles that miss the trending moment, or geographic reach at the cost of creative quality.',
    ],
    approachLead:
      'We built an AIGC system that collapses the timeline without collapsing the brand.',
    approach: [
      {
        title: 'Photography into campaigns in hours',
        desc: 'Product photography becomes styled, on-model campaign assets in hours rather than weeks.',
      },
      {
        title: 'Cultural customisation per market',
        desc: 'Brand campaign assets carry the customisation each market needs, with hyper-local variations for regional beauty aesthetics.',
      },
      {
        title: 'Social-first, platform-native',
        desc: 'Content libraries are built for Instagram, TikTok and regional platforms, with motion designed for feeds where the opening seconds decide everything.',
      },
    ],
    delivered: [
      'Multi-market brand campaign assets with cultural customisation',
      'Social-first content library for Instagram, TikTok and local platforms',
      'Animated product showcases for platform-native consumption',
      'Hyper-localized variations for regional beauty aesthetics',
      'Rapid-turnaround campaign adaptations on the promotional calendar',
    ],
    results: [
      { value: 'Hours', label: 'Product shot to on-model campaign' },
      { value: 'Seoul→Singapore', label: 'Markets served from one brand system' },
      { value: 'Days', label: 'Campaign deployment, in time for the moment' },
    ],
    services: ['Campaign localization', 'On-model imagery', 'Motion content', 'Social libraries'],
    gallery: [
      {
        src: '/Images/work/age20-1.webp',
        alt: 'An age20 campaign variation adapted for a regional beauty aesthetic.',
      },
      {
        src: '/Images/work/age20-2.webp',
        alt: 'An age20 social-first content frame built for a platform feed.',
      },
      {
        src: '/Images/work/age20-3.webp',
        alt: 'An age20 product showcase still composed for mobile viewing.',
      },
    ],
  },
  {
    slug: 'global-fashion-brand',
    discipline: 'Custom platforms & studios',
    client: 'Global fashion brand',
    title: 'An in-house AI content studio for a global fashion brand',
    category: 'AI content studio',
    industry: 'Fashion retail',
    region: 'Global',
    summary:
      'An international fashion retailer needed thousands of assets a month without the cost of constant shoots. We built an in-house AI studio and trained the team to run it.',
    hero: {
      src: '/Images/work/global-fashion-hero.webp',
      alt: 'A styled on-model fashion look generated for a global brand, shot as editorial imagery.',
    },
    challenge: [
      'Traditional fashion content means model casting, premium studio rental, hair and makeup teams, professional retouchers and multiple shoot days. For a brand that needs thousands of assets a month across demographics and seasons, that cost structure stops being sustainable.',
      'It also creates dependency. Every campaign routes through outside vendors, which slows agility and pushes timelines past the point of market relevance. The brand was stuck with the usual impossible choice: premium visuals, or content volume, not both.',
    ],
    approachLead:
      'We built a complete AI content studio inside the brand and handed it over.',
    approach: [
      {
        title: 'A custom virtual model library',
        desc: 'Virtual models represent the brand’s target demographics, so authentic representation no longer depends on casting logistics.',
      },
      {
        title: 'Product shots into styled looks',
        desc: 'An automated workflow turns flat product shots into styled, on-model imagery.',
      },
      {
        title: 'Agents that know fashion',
        desc: 'Bespoke AIGC agents are trained on seasonal aesthetics and brand standards, and understand color stories, fabric draping and styling conventions.',
      },
      {
        title: 'A team trained to run it',
        desc: 'Multi-phase training leaves creative teams able to generate content independently, with ongoing capability refinement.',
      },
    ],
    delivered: [
      'Custom virtual model library for target demographics',
      'Automated look-generation workflow',
      'A content platform integrated and customized for the brand',
      'Bespoke AIGC agents trained on brand standards',
      'Multi-phase internal team training',
    ],
    results: [
      { value: '1000s/month', label: 'Assets generated in-house' },
      { value: 'Hours', label: 'Product shot to styled imagery' },
      { value: 'In-house', label: 'Teams produce without outside studios' },
    ],
    services: ['Virtual model library', 'Custom content platform', 'AIGC agents', 'Team training'],
    gallery: [
      {
        src: '/Images/work/global-fashion-1.webp',
        alt: 'A styled on-model look generated for the brand’s seasonal campaign.',
      },
      {
        src: '/Images/work/global-fashion-2.webp',
        alt: 'A second on-model fashion look produced through the in-house studio workflow.',
      },
      {
        src: '/Images/work/global-fashion-3.webp',
        alt: 'An editorial fashion frame generated from a flat product shot.',
      },
    ],
  },
  {
    slug: 'shiseido-rq-pyology',
    discipline: 'AI content & merchandising',
    client: 'Shiseido',
    title: 'Pharmaceutical rigour meets luxury beauty for RQ PYOLOGY',
    category: 'Medical beauty content',
    industry: 'Medical aesthetics',
    region: 'China',
    summary:
      'Shiseido launched RQ PYOLOGY into China’s medical aesthetics market. We produced campaign visuals and brand video that satisfy clinical credibility and luxury appeal at once.',
    hero: {
      src: '/Images/work/shiseido-hero.webp',
      alt: 'An RQ PYOLOGY model-driven beauty visual, lit to read as clinical and aspirational at once.',
    },
    challenge: [
      'Shiseido Group launched RQ PYOLOGY as a high-end medical aesthetics brand for post-procedure care and clinical-grade skincare in China. It needed an uncommon fusion: the rigour of pharmaceutical branding with the emotion of luxury cosmetics.',
      'Campaign key visuals, a brand video and an extensive model-driven asset library all had to appeal to medical professionals and consumers at the same time. Premium production, top-tier models, studio rental, hair and makeup, professional retouching, plus medical advisor coordination, was financially prohibitive for an unproven market brand.',
    ],
    approachLead:
      'We deployed AIGC to satisfy clinical approval and luxury standards in the same frame.',
    approach: [
      {
        title: 'Clinical credibility with beauty aesthetics',
        desc: 'Visuals clear pharmaceutical-grade approval and meet luxury beauty standards simultaneously, with no compromise either way.',
      },
      {
        title: 'Authentic model diversity',
        desc: 'The asset library represents varied skin types, ages and beauty standards without the logistical barriers of casting.',
      },
      {
        title: 'Iteration under exacting standards',
        desc: 'We explored lighting, skin-tone calibration and composition freely while holding Shiseido’s exacting brand standard.',
      },
      {
        title: 'One language across touchpoints',
        desc: 'A consistent visual language carries from hospital and clinical channels through to consumer platforms.',
      },
    ],
    delivered: [
      'Campaign key visuals with model-driven hero imagery',
      'Brand launch video blending clinical and aspirational storytelling',
      'Extensive asset library with diverse model representation',
      'Product-focused beauty shots for digital and clinical environments',
      'Variations adaptable for medical-partner and consumer channels',
    ],
    results: [
      { value: 'Clinic + IG', label: 'One visual language across both contexts' },
      { value: 'No six-figure', label: 'Premium look without the photography budget' },
      { value: 'Diverse', label: 'Skin types and ages, free of casting limits' },
    ],
    services: ['Campaign key visuals', 'Brand video', 'Beauty imagery', 'AIGC direction'],
    gallery: [],
  },
  {
    slug: '1834-gin',
    discipline: 'Video & launch films',
    client: '1834 Gin',
    title: 'A premium gin launch built from zero assets',
    category: 'Brand video production',
    industry: 'Premium spirits',
    region: 'Philippines',
    summary:
      '1834 Gin launched with a 46-second brand film made with AIGC and CGI. From no imagery and no footage to omnichannel content in three weeks.',
    hero: {
      src: '/Images/work/gin-1834-hero.webp',
      alt: 'A cinematic frame from the 1834 Gin brand film, a premium bottle lit against an atmospheric tropical environment.',
    },
    challenge: [
      '1834 Gin, a new premium Philippine spirit, needed to announce its arrival with impact. The brand wanted long and short-format video for every channel: social, TV, eCommerce and offline retail. The catch was that it had nothing to start from. No brand imagery, no footage library, just a product, a heritage story and a compressed timeline to launch before competitors claimed attention.',
      'Conventional video production would have meant pre-production planning, location scouting across the Philippines, talent casting, crew bookings, equipment rental, multiple shoot days and post. For a resource-limited launch, that path forces a choice between quality and speed, and broadcast-level production value would have consumed the whole budget before the first bottle reached a shelf.',
    ],
    approachLead:
      'We combined AIGC with CGI to build an entire visual world that did not exist before.',
    approach: [
      {
        title: 'A visual world, no location needed',
        desc: 'AIGC environments and CGI product work captured Philippine craftsmanship and tropical sophistication without location scouts, weather delays or scheduling conflicts.',
      },
      {
        title: 'Explore before you commit',
        desc: 'We tested dozens of visual directions and storytelling approaches up front, something impossible when each iteration would mean a reshoot.',
      },
      {
        title: 'Broadcast quality on a startup budget',
        desc: 'The hybrid pipeline delivered broadcast-grade cinematography, lighting and motion design within launch economics.',
      },
      {
        title: 'One production, every format',
        desc: 'Long and short versions work across TV, social, eCommerce and retail with a consistent premium presence.',
      },
    ],
    delivered: [
      'A 46-second premium long-format brand film',
      'Short-format adaptations for social, TV, eCommerce and retail',
      'Key visual stills extracted for multi-channel marketing',
    ],
    results: [
      { value: '46 sec', label: 'Premium brand film, AIGC and CGI' },
      { value: '3 weeks', label: 'Zero assets to omnichannel launch' },
      { value: 'Broadcast', label: 'Production value within a startup budget' },
    ],
    services: ['Brand film', 'AIGC + CGI', 'Multi-format cutdowns', 'Key visuals'],
    gallery: [],
  },
  {
    slug: 'linfuseur',
    discipline: 'AI content & merchandising',
    client: "L'infuseur",
    title: 'Seasonal content at scale for a French artisan tea house',
    category: 'Seasonal content',
    industry: 'Tea & wellness',
    region: 'France',
    summary:
      "L'infuseur needed a premium visual presence for quarterly seasonal launches. We trained the system on its aesthetic codes and delivered a full library in two weeks.",
    hero: {
      src: '/Images/work/linfuseur-hero.webp',
      alt: "A L'infuseur tea product styled in a refined French interior with soft natural light.",
    },
    challenge: [
      "L'infuseur, a French artisan tea brand, needed a consistent premium presence across social and eCommerce for quarterly seasonal blend launches. Each launch called for dozens of lifestyle and product images that hold the brand’s refined French aesthetic.",
      'Timelines were tight and budgets were limited. Traditional photography, with studio days, prop sourcing, stylist fees, location scouting and model bookings, made ongoing content creation financially unsustainable for a growing brand.',
    ],
    approachLead:
      "We trained the system on L'infuseur’s aesthetic codes, with creative direction holding the bar.",
    approach: [
      {
        title: 'Trained on the brand’s codes',
        desc: 'The system learned the brand’s aesthetic codes, so visual consistency held across every seasonal set.',
      },
      {
        title: 'Art direction, not automation',
        desc: 'Creative professionals art-directed and refined the work. AIGC amplified human creativity here, it did not substitute for it.',
      },
      {
        title: 'Seasons that scale without restarts',
        desc: 'Future seasonal collections now scale without a production restart each quarter.',
      },
    ],
    delivered: [
      'Lifestyle product images for Instagram, Facebook and the website',
      'Seasonal context visuals: tea moments, wellness settings, ingredient showcases',
      'eCommerce product detail shots optimized for product pages',
    ],
    results: [
      { value: '2 weeks', label: 'Full seasonal library delivered' },
      { value: '3 channels', label: 'Instagram, Facebook and product pages' },
      { value: 'Quarterly', label: 'Seasonal launches scale without restarts' },
    ],
    services: ['AIGC imagery', 'Art direction', 'Seasonal content', 'eCommerce visuals'],
    gallery: [
      {
        src: '/Images/work/linfuseur-1.webp',
        alt: "A L'infuseur tea moment styled as an indoor wellness scene.",
      },
      {
        src: '/Images/work/linfuseur-2.webp',
        alt: "A L'infuseur product detail shot composed for an eCommerce page.",
      },
      {
        src: '/Images/work/linfuseur-3.webp',
        alt: "A L'infuseur seasonal visual set in an outdoor context.",
      },
    ],
  },
  {
    slug: 'premium-suv',
    discipline: 'AI content & merchandising',
    client: 'Premium automotive manufacturer',
    title: 'A premium SUV, shown in fifteen markets without shipping a car',
    category: 'Automotive content',
    industry: 'Automotive',
    region: 'Global, 15 markets',
    summary:
      'A luxury manufacturer needed launch imagery for a new SUV across fifteen countries. We generated 20+ environments and cut the budget by 70% with no vehicle logistics.',
    hero: {
      src: '/Images/work/premium-suv-hero.webp',
      alt: 'A premium SUV staged in a dramatic desert dune landscape under golden-hour light.',
    },
    challenge: [
      'A luxury vehicle manufacturer needed marketing imagery for a new SUV rolling out across fifteen countries. Each market wanted locally appropriate visuals: German autobahns, Japanese mountain routes, American city centres, Middle Eastern dunes.',
      'Doing that traditionally means physically shipping vehicles between countries, managing logistics across every zone, absorbing unpredictable weather and coordinating international crews against different regulatory requirements. The cost and the calendar were both prohibitive.',
    ],
    approachLead:
      'We generated the full global set with AIGC, every environment built rather than travelled to.',
    approach: [
      {
        title: '20+ environments, no travel',
        desc: 'Mountains, cities, deserts, coastlines and forests, each market’s context built rather than reached by shipping a vehicle there.',
      },
      {
        title: 'Scenarios tuned to each market',
        desc: 'Suburban family drives, urban professional commutes, outback expeditions, matched to how each market sees the vehicle.',
      },
      {
        title: 'Weather and light on command',
        desc: 'Snow, rain, clear skies, autumn color, plus golden hour, blue hour and midday, all consistent and all controlled.',
      },
      {
        title: 'Every format from one set',
        desc: 'Print ads, social, website graphics and digital campaigns come out of the same production.',
      },
    ],
    delivered: [
      '20+ distinct geographic environments',
      'Market-tailored driving scenarios',
      'Multiple seasonal and weather presentations',
      'A full range of lighting conditions',
      'Assets formatted for print, social, web and digital campaigns',
    ],
    results: [
      { value: '70%', label: 'Budget cut versus location photography' },
      { value: '3 weeks', label: 'Global assets, versus six months traditionally' },
      { value: '15 markets', label: '20+ environments, zero vehicle shipping' },
    ],
    services: ['AIGC environments', 'Campaign imagery', 'Localization', 'Multi-format delivery'],
    gallery: [
      {
        src: '/Images/work/premium-suv-1.webp',
        alt: 'The premium SUV staged in an urban market environment.',
      },
      {
        src: '/Images/work/premium-suv-2.webp',
        alt: 'The premium SUV shown in a mountain-route landscape.',
      },
      {
        src: '/Images/work/premium-suv-3.webp',
        alt: 'The premium SUV composed in a coastal driving scenario.',
      },
    ],
  },
  {
    slug: 'viessmann',
    discipline: 'Social media',
    client: 'Viessmann',
    title: 'How social drove eCommerce growth in China',
    category: 'Social commerce',
    industry: 'Climate systems',
    region: 'China',
    summary:
      'Viessmann needed social media in China to drive eCommerce sales. We built a connected system across Douyin, RedNote and WeCom that turned thin storefront traffic into steady month-over-month revenue growth.',
    hero: {
      src: '/Images/work/viessmann-hero.webp',
      alt: 'A Viessmann home climate solution staged in a warm contemporary interior.',
    },
    challenge: [
      'Viessmann has been building heating technology since 1917. Now part of Carrier, the brand sells heating, water, air quality and renewable energy systems across dozens of markets.',
      'China was the hard part. Flagship stores on Tmall and JD were already live and stocked, yet traffic was thin. In China, where consumers discover and research high-consideration home appliances on social networks before visiting a storefront, thin store traffic is a social media problem. Viessmann needed content and community operations that moved buyers from discovery to checkout.',
    ],
    approachLead:
      'We built a three-platform social commerce funnel connecting content discovery directly to Viessmann’s Tmall and JD storefronts.',
    approach: [
      {
        title: 'Douyin for top-of-funnel traffic',
        desc: 'Short videos framed heating around everyday home comfort rather than engineering specs: warmer winters and lower energy bills, paired with product demos and livestreams that sent viewers straight to Tmall.',
      },
      {
        title: 'RedNote for high-intent research',
        desc: 'Heating systems are a major purchase, so buyers research heavily on RedNote. We ran KOL campaigns, seeded KOC reviews and published installation guides and homeowner stories so every search returned proof.',
      },
      {
        title: 'WeCom for real-time consultation and service',
        desc: 'Our local team answered floor-plan and sizing questions in Chinese through WeCom before purchase, then kept the same thread open for installation support, maintenance bookings and long-term care.',
      },
      {
        title: 'Operated on the ground in China',
        desc: 'Native-speaking social managers ran every channel week by week, tuning creative and livestream cadence to what was converting in real time.',
      },
    ],
    delivered: [
      'Always-on Douyin short-video production and livestream commerce sessions',
      'RedNote KOL campaigns, KOC seeding and homeowner installation guides',
      'WeCom private-domain consultation and post-purchase service workflows',
      'Tmall and JD flagship store visual merchandising and membership flows',
      'Offline distributor and service-partner integration into the social funnel',
    ],
    results: [
      { value: '3 platforms', label: 'Douyin, RedNote and WeCom linked to Tmall and JD' },
      { value: '24 months', label: 'Consistent month-over-month online revenue growth' },
      { value: 'Full funnel', label: 'Discovery, research, consultation and after-sales in one loop' },
    ],
    services: [
      'Social commerce',
      'Douyin & RedNote',
      'KOL & KOC campaigns',
      'Livestreaming',
      'WeCom CRM',
      'eCommerce visuals',
    ],
    gallery: [
      {
        src: '/Images/work/viessmann-1.webp',
        alt: 'Viessmann Tmall flagship store product page designed for social commerce traffic.',
      },
      {
        src: '/Images/work/viessmann-2.webp',
        alt: 'Viessmann Tmall store membership and customer service flow.',
      },
      {
        src: '/Images/work/viessmann-3.webp',
        alt: 'Viessmann brand heritage and product storytelling on Tmall.',
      },
    ],
  },
  {
    slug: 'jaguar-land-rover',
    discipline: 'Social media',
    client: 'Jaguar Land Rover',
    title: 'Reaching younger luxury consumers through social in China',
    category: 'Social content & UGC',
    industry: 'Luxury automotive',
    region: 'China',
    summary:
      'Jaguar Land Rover needed to connect with younger luxury buyers in China. We built a social strategy across Douyin, RedNote and WeChat combining local vertical video with owner-led UGC.',
    hero: {
      src: '/Images/work/jaguar-land-rover-hero.webp',
      alt: 'A Jaguar Land Rover luxury vehicle photographed in dramatic light for China social channels.',
    },
    challenge: [
      'Jaguar Land Rover builds some of the most recognizable vehicles in the world, with over a century of British design behind its luxury SUVs and performance cars.',
      'In China, the challenge was generational. The brand held strong recognition among established, older buyers, while younger luxury consumers in their twenties and thirties were scarcely engaging on social channels. Jaguar Land Rover needed to show up where that next generation of buyers spends its time, with content made natively for Chinese feeds rather than adapted from global campaigns.',
    ],
    approachLead:
      'We combined locally shot vertical video, narrative storytelling and owner-generated content across Douyin, RedNote and WeChat.',
    approach: [
      {
        title: 'Vertical video made in China',
        desc: 'Cinematic, fast-paced short videos and image series were shot and edited in China specifically for how automotive content performs on Douyin and RedNote.',
      },
      {
        title: 'Modern luxury storytelling',
        desc: 'Mini-documentaries, heritage series and lifestyle pieces connected the vehicles to innovation, adventure and how a younger generation thinks about driving.',
      },
      {
        title: 'Owner-led UGC challenges',
        desc: 'Hashtag challenges and contests invited real owners and fans to share road trips, city drives and weekend moments, generating authentic posts that outperformed polished brand ads.',
      },
      {
        title: 'On-the-ground community management',
        desc: 'Our local team handled production, community management, KOL coordination and weekly creative adjustments across all three platforms.',
      },
    ],
    delivered: [
      'Cinematic vertical short videos shot in China for Douyin and RedNote',
      'Range Rover centenary series and Jaguar heritage social calendars',
      'Mini-documentaries and behind-the-scenes storytelling on WeChat',
      'Hashtag challenges and UGC campaigns with vehicle owners',
      'Daily community management and KOL coordination across three platforms',
    ],
    results: [
      { value: '3 feeds', label: 'Engagement and follower growth across Douyin, RedNote and WeChat' },
      { value: 'Owner UGC', label: 'Steady stream of organic posts from younger luxury drivers' },
      { value: 'Next-gen reach', label: 'Shifted brand perception from recognized to culturally relevant' },
    ],
    services: [
      'Social strategy',
      'Vertical video production',
      'UGC campaigns',
      'KOL management',
      'WeChat & Douyin',
      'Community management',
    ],
    gallery: [
      {
        src: '/Images/work/jaguar-land-rover-1.webp',
        alt: 'Jaguar Land Rover social content series including the Range Rover centenary and Jaguar heritage calendar.',
      },
      {
        src: '/Images/work/jaguar-land-rover-2.webp',
        alt: 'Jaguar Land Rover Douyin short videos showcasing vehicles in action.',
      },
      {
        src: '/Images/work/jaguar-land-rover-3.webp',
        alt: 'Jaguar Land Rover Douyin feed featuring Defender, Discovery and heritage models.',
      },
    ],
    videos: [
      {
        mp4: '/Video/jlr-1.mp4',
        webm: '/Video/jlr-1.webm',
        poster: '/Video/jlr-1-poster.webp',
        alt: 'Jaguar Land Rover vertical Douyin video shot and edited for the Chinese market.',
        aspect: '9 / 16',
      },
      {
        mp4: '/Video/jlr-2.mp4',
        webm: '/Video/jlr-2.webm',
        poster: '/Video/jlr-2-poster.webp',
        alt: 'Jaguar Land Rover vertical social video showcasing modern luxury driving.',
        aspect: '9 / 16',
      },
    ],
  },
  {
    slug: 'jac-motors',
    discipline: 'Social media',
    client: 'JAC Motors',
    title: 'Building a social community for a Chinese auto giant',
    category: 'Social community & AI',
    industry: 'Automotive & EV',
    region: 'China & global',
    summary:
      'JAC Motors had over 10 million vehicles on the road and quiet social channels. We rebuilt its presence on WeChat, RedNote and Weibo with AI-powered content and an Olympic mascot campaign that crossed over globally.',
    hero: {
      src: '/Images/work/jac-motors-hero.webp',
      alt: 'JAC Motors E30X social campaign visual featuring athlete collaboration.',
    },
    challenge: [
      'With more than thirty years in manufacturing and over 10 million passenger cars, EVs and commercial vehicles sold worldwide, JAC Motors is one of China’s largest automakers.',
      'Its social channels did not reflect that scale. Posts went out regularly on WeChat, RedNote and Weibo, yet engagement stayed low: few comments, few shares and no real sense of community. JAC wanted to move from corporate broadcasts to a social presence automotive fans actively follow and share.',
    ],
    approachLead:
      'We rebuilt the content strategy from scratch around automotive knowledge, human stories and AI-powered visual production.',
    approach: [
      {
        title: 'Platform-native content architecture',
        desc: 'We differentiated every channel: long-form technical breakdowns and global expansion stories on WeChat, lifestyle and owner spotlights on RedNote, and real-time conversation on Weibo.',
      },
      {
        title: 'AI-accelerated visual production',
        desc: 'Using hubStudio, our creative team generated personalized visuals at a pace traditional production could not match, adjusting creative within the same week based on platform analytics.',
      },
      {
        title: 'The Olympic J-Bot mascot campaign',
        desc: 'We used AI to redesign JAC’s J-Bot mascot into six Olympic-themed characters for WeChat, RedNote and Weibo, sparking immediate organic sharing well beyond existing followers.',
      },
      {
        title: 'Organic global crossover',
        desc: 'International JAC teams spotted the J-Bot campaign performing on Chinese social networks and organically adopted the assets across global Facebook and Instagram channels.',
      },
    ],
    delivered: [
      'Full social content overhaul across WeChat, RedNote and Weibo',
      'Six AI-designed Olympic J-Bot mascot editions and campaign visuals',
      'Technical breakdowns, manufacturing stories and owner spotlights',
      'Global launch and athlete collaboration social content',
      'Weekly AI-assisted performance tracking and creative iteration',
    ],
    results: [
      { value: '3 platforms', label: 'Active community built across WeChat, RedNote and Weibo' },
      { value: '6 mascots', label: 'AI-designed Olympic J-Bot editions shared organically' },
      { value: 'Global reach', label: 'Chinese social creative picked up by international markets' },
    ],
    services: [
      'Social community',
      'AI content production',
      'WeChat & RedNote',
      'Campaign creative',
      'Performance analytics',
    ],
    gallery: [
      {
        src: '/Images/work/jac-motors-1.webp',
        alt: 'JAC J-Bot mascot in six Olympic-themed versions created with AI.',
      },
      {
        src: '/Images/work/jac-motors-2.webp',
        alt: 'JAC Motors global Facebook post featuring the J-Bot Olympic campaign.',
      },
      {
        src: '/Images/work/jac-motors-3.webp',
        alt: 'JAC Motors international market launch event shared across social channels.',
      },
    ],
  },
  {
    slug: 'iguzzini',
    discipline: 'Social media',
    client: 'iGuzzini',
    title: 'How social built a luxury lighting brand in China',
    category: 'Luxury social & eCommerce',
    industry: 'Architectural lighting',
    region: 'China',
    summary:
      'iGuzzini was known to architects in China but invisible to consumers. Over 24 months on WeChat, RedNote, Weibo and Tmall, we turned a B2B trade name into a recognized luxury home brand.',
    hero: {
      src: '/Images/work/iguzzini-hero.webp',
      alt: 'iGuzzini Whisper lamp campaign visual styled for luxury consumers in China.',
    },
    challenge: [
      'Founded in 1959, iGuzzini is a benchmark in architectural lighting, specified by name for museums, hotels, galleries and high-end residences worldwide.',
      'In China, that reputation was confined to trade circles. Architects knew iGuzzini, while homeowners and design-conscious consumers did not. Nobody scrolls social feeds looking for pendant fixtures, and most buyers rely on contractors or interior designers. To grow direct eCommerce sales on Tmall, we first had to make consumers care about architectural light in their own living spaces.',
    ],
    approachLead:
      'We used WeChat, RedNote, Weibo and livestreams to show what architectural lighting does to a room before asking anyone to visit Tmall.',
    approach: [
      {
        title: 'WeChat as the design editorial hub',
        desc: 'Project showcases, designer collaborations and residential stories showed iGuzzini fixtures inside real hotels, galleries and private homes rather than isolated on catalog pages.',
      },
      {
        title: 'RedNote KOLs and interior designers',
        desc: 'We partnered with interior designers, architects and renovation KOLs alongside design micro-influencers, creating reference posts that homeowners bookmarked and sent to their contractors.',
      },
      {
        title: 'Livestreams in real rooms',
        desc: 'Because lighting only reveals its quality when switched on in a space, our live sessions demonstrated fixtures in real rooms, walking through the design thinking and answering questions live.',
      },
      {
        title: 'AI-supported visual pipeline',
        desc: 'hubStudio kept the multi-platform pipeline supplied with product visuals, lifestyle scenes and social formats across all three networks simultaneously.',
      },
    ],
    delivered: [
      '24-month social operation across WeChat, RedNote and Weibo',
      'Interior designer and renovation KOL partnerships on RedNote',
      'In-room livestream demonstrations and live Q&A sessions',
      'Tmall flagship store visuals and luxury product launch campaigns',
      'Continuous product and lifestyle imagery produced with hubStudio',
    ],
    results: [
      { value: '24 months', label: 'From B2B trade specifier name to consumer luxury recognition' },
      { value: '4 channels', label: 'WeChat, RedNote, Weibo and Tmall working as one system' },
      { value: 'Steady growth', label: 'Month-over-month rise in designer engagement and Tmall sales' },
    ],
    services: [
      'Luxury social strategy',
      'WeChat & RedNote',
      'Interior design KOLs',
      'Livestream commerce',
      'Tmall flagship content',
    ],
    gallery: [
      {
        src: '/Images/work/iguzzini-1.webp',
        alt: 'iGuzzini Portonovo wireless table lamp range presented for Chinese social and eCommerce channels.',
      },
      {
        src: '/Images/work/iguzzini-2.webp',
        alt: 'iGuzzini Sinolo wireless table lamp showcase produced for WeChat and RedNote.',
      },
      {
        src: '/Images/work/iguzzini-3.webp',
        alt: 'iGuzzini Conero pendant lamp product visual for social feeds.',
      },
    ],
  },
  {
    slug: 'camper-social',
    discipline: 'Social media',
    client: 'Camper',
    title: 'Growing a Mallorca design brand on China’s social networks',
    category: 'Social community & KOLs',
    industry: 'Footwear',
    region: 'China',
    summary:
      'Camper needed social growth in China without diluting its design identity. Over 18 months on RedNote, WeChat and Weibo, we grew followers more than fourfold and lifted same-store sales by 31%.',
    hero: {
      src: '/Images/work/camper-social-hero.webp',
      alt: 'Camper footwear campaign visual for China social media channels.',
    },
    challenge: [
      'Camper has been making unconventional footwear in Mallorca since 1975, built on Mediterranean craftsmanship and design independence.',
      'In China, its WeChat, Weibo and RedNote accounts held a combined 43,000 followers with a 1.2% engagement rate, and social channels were not driving foot traffic into tier-one city stores. The brand wanted meaningful growth among design-conscious professionals aged 28 to 45 without resorting to discount campaigns or generic fashion-influencer posts.',
    ],
    approachLead:
      'We built editorial content and creative-community partnerships that treated Camper as a design object, not a commodity.',
    approach: [
      {
        title: 'Architecture and design KOLs on RedNote',
        desc: 'Instead of broad fashion influencers, we partnered with micro-influencers in architecture, interiors and visual arts to unpack materials, construction and design intent.',
      },
      {
        title: 'Mallorca workshop stories on WeChat',
        desc: 'Long-form articles and mini-documentaries went inside how Camper designs and builds shoes, giving subscribers substantive editorial reasons to stay.',
      },
      {
        title: 'High-debate threads on Weibo',
        desc: 'Discussion prompts around design philosophy, such as whether shoes should be built for how they feel or how they look, sparked multi-day threads with thousands of comments.',
      },
    ],
    delivered: [
      '18-month social management across RedNote, WeChat and Weibo',
      'Collaborations with architecture, interior and creative KOLs',
      'WeChat editorial articles on Mallorca craftsmanship and designer partnerships',
      'Community discussion campaigns on Weibo',
      'Social-to-retail and eCommerce traffic attribution',
    ],
    results: [
      { value: '43K → 187K', label: 'Combined followers across platforms in 18 months' },
      { value: '4.7%', label: 'Engagement rate, up from 1.2%' },
      { value: '+31%', label: 'Same-store sales growth year over year, with 38% of eCommerce traffic from RedNote' },
    ],
    services: [
      'Social media management',
      'RedNote & WeChat',
      'Creative KOL partnerships',
      'Editorial storytelling',
      'Community growth',
    ],
    gallery: [
      {
        src: '/Images/work/camper-social-1.webp',
        alt: 'Camper Pix London campaign on RedNote with creative KOL content.',
      },
      {
        src: '/Images/work/camper-social-2.webp',
        alt: 'Camper official RedNote account profile and community posts.',
      },
      {
        src: '/Images/work/camper-social-3.webp',
        alt: 'Camper collaboration article published on WeChat.',
      },
    ],
  },
  {
    slug: 'mission-foods',
    discipline: 'Social media',
    client: 'Mission Foods',
    title: 'Launching corn chips in China through social',
    category: 'Social launch & campaigns',
    industry: 'Food & beverage',
    region: 'China',
    summary:
      'Mission Foods needed to introduce corn chips to Chinese Gen Z consumers who had never tried them. We used local food-pairing content and seasonal social campaigns on WeChat, RedNote and Weibo to turn an unfamiliar snack into a community staple.',
    hero: {
      src: '/Images/work/mission-foods-hero.webp',
      alt: 'Mission Foods corn chips styled in a vibrant social campaign visual for the Chinese market.',
    },
    challenge: [
      'Mission Foods is one of the world’s largest tortilla and Mexican food producers. When it set out to launch corn chips in China, it faced a category problem rather than a brand problem: corn chips were not part of local snacking habits.',
      'Most Chinese consumers had never tasted tortilla chips, and the target audience was Gen Z. For the launch to stick, social content had to stop the product from feeling foreign and answer the immediate question every shopper had: how do I eat these?',
    ],
    approachLead:
      'We paired corn chips with Chinese flavors and built always-on social moments around how Gen Z actually snacks.',
    approach: [
      {
        title: 'Chinese food-pairing content',
        desc: 'We showed corn chips alongside hotpot, local dipping sauces and familiar Chinese recipes, respecting local food culture while making the crunch immediately relatable.',
      },
      {
        title: 'Gen Z snacking moments',
        desc: 'Fast, playful visuals focused on late-night cravings, dorm hangouts and sharing food with friends, built to be saved and forwarded in group chats.',
      },
      {
        title: 'RedNote KOLs and KOC seeding',
        desc: 'Creators filmed genuine reactions in real kitchens and everyday snacking situations, normalizing corn chips as a regular grocery pick.',
      },
      {
        title: 'Breakout seasonal campaigns',
        desc: 'A Halloween party-snack campaign tapped into China’s fast-growing Gen Z Halloween culture with themed platters and setups, driving a sharp spike in followers while WeChat sustained momentum between peaks.',
      },
    ],
    delivered: [
      'Always-on social content across WeChat, RedNote and Weibo',
      'Chinese flavor-pairing recipe series and snacking guides',
      'RedNote KOL collaborations and high-volume KOC seeding',
      'Halloween Gen Z party campaign and seasonal activations',
      'Weekly performance reviews and cultural adaptation from our China team',
    ],
    results: [
      { value: '3 networks', label: 'WeChat, RedNote and Weibo grown in tandem' },
      { value: 'Category built', label: 'Turned an unfamiliar snack into an everyday Gen Z choice' },
      { value: 'Always-on', label: 'Sustained week-over-week audience growth between campaign spikes' },
    ],
    services: [
      'Social launch strategy',
      'WeChat, RedNote & Weibo',
      'Recipe & pairing content',
      'KOL & KOC seeding',
      'Seasonal campaigns',
    ],
    gallery: [
      {
        src: '/Images/work/mission-foods-1.webp',
        alt: 'Mission Foods social media visuals showing corn chip pairings with Chinese dishes.',
      },
      {
        src: '/Images/work/mission-foods-2.webp',
        alt: 'Mission Foods Gen Z snacking campaign posts for RedNote and WeChat.',
      },
    ],
  },
  {
    slug: 'marriott',
    discipline: 'Social media',
    client: 'Marriott International',
    title: 'A Super Brand Day campaign that drove millions on Tmall',
    category: 'Social & eCommerce campaign',
    industry: 'Hospitality & travel',
    region: 'China',
    summary:
      'Marriott’s first Alibaba Super Brand Day in China needed every channel to land at once. We connected WeChat, Weibo, travel KOLs and Tmall around an exclusive Black Card offer, generating millions in sales and hundreds of thousands of new Bonvoy members.',
    hero: {
      src: '/Images/work/marriott-hero.webp',
      alt: 'Marriott International Super Brand Day key visual for the China campaign.',
    },
    challenge: [
      'Marriott International operates more than 9,000 properties across 30 brands worldwide. In China, it competes intensely for affluent travelers alongside ambitious domestic hotel groups.',
      'To drive direct bookings, Marriott Bonvoy loyalty enrollments and stronger positioning with high-spending travelers, the brand committed to its first Alibaba Super Brand Day. With high visibility and a single campaign window, there is no soft launch: social buzz, media, KOLs and the Tmall storefront all had to convert on day one.',
    ],
    approachLead:
      'Instead of running an abstract awareness push, we anchored the entire social and media funnel on a concrete, high-desire product: an exclusive Marriott Black Card.',
    approach: [
      {
        title: 'The exclusive Black Card offer',
        desc: 'We structured the campaign around a limited-edition Marriott Black Card carrying global privileges, complimentary stays and fine dining at flagship properties, giving affluent travelers something immediate to buy.',
      },
      {
        title: 'Weeks of social warm-up on WeChat and Weibo',
        desc: 'WeChat stories, Weibo campaigns, celebrity endorsements and travel KOLs built anticipation weeks ahead of launch, highlighting both card privileges and the on-property experience.',
      },
      {
        title: 'One transaction for purchase and loyalty',
        desc: 'Every social post, KOL review, PR placement and Alibaba ecosystem ad pointed to a single Tmall destination where buyers purchased the card and enrolled in Marriott Bonvoy in one step.',
      },
    ],
    delivered: [
      'End-to-end Super Brand Day campaign strategy and creative direction',
      'Limited-edition Marriott Black Card concept and promotional assets',
      'WeChat, Weibo and travel KOL warm-up and launch-day activation',
      'Alibaba ecosystem media placements, celebrity PR and offline events',
      'High-converting Tmall campaign page integrating Bonvoy signup',
    ],
    results: [
      { value: 'Millions', label: 'Generated in Tmall sales during Super Brand Day' },
      { value: '100,000s', label: 'New Marriott Bonvoy loyalty members enrolled' },
      { value: 'Day-one peak', label: 'Social, KOLs, PR and Tmall synchronized on launch day' },
    ],
    services: [
      'Super Brand Day campaign',
      'WeChat & Weibo',
      'Travel KOL activation',
      'Tmall eCommerce',
      'Media & PR',
    ],
    gallery: [
      {
        src: '/Images/work/marriott-1.webp',
        alt: 'Marriott Super Brand Day Tmall campaign creative.',
      },
      {
        src: '/Images/work/marriott-2.webp',
        alt: 'Marriott Black Card promotional visual for Super Brand Day.',
      },
      {
        src: '/Images/work/marriott-3.webp',
        alt: 'Marriott social and media campaign assets for Chinese travelers.',
      },
    ],
  },
  {
    slug: 'master-martini',
    discipline: 'Social media',
    client: 'Master Martini',
    title: 'Building a professional chef community across five Asian markets',
    category: 'B2B social community',
    industry: 'Foodservice & B2B ingredients',
    region: 'Southeast Asia & Hong Kong',
    summary:
      'Master Martini needed to reach professional pastry chefs across Malaysia, Hong Kong, Singapore, Indonesia and Thailand. We turned its Instagram and Facebook channels into a technical culinary hub that drove real ingredient orders.',
    hero: {
      src: '/Images/work/master-martini-hero.webp',
      alt: 'Master Martini professional pastry creation photographed for Asian social channels.',
    },
    challenge: [
      'Since 1982, Master Martini has supplied professional bakers and pastry chefs with commercial chocolates, creams, margarines and semi-finished ingredients.',
      'Growing a social audience across Malaysia, Hong Kong, Singapore, Indonesia and Thailand posed a classic B2B problem: professional chefs do not scroll Instagram looking for ingredient suppliers, and when they do follow a trade brand, they expect real pastry technique rather than polished corporate ads.',
    ],
    approachLead:
      'We localized every market’s feed around working pastry technique: step-by-step recipes, live chef demonstrations, workshops and peer UGC.',
    approach: [
      {
        title: 'Production-grade recipe content',
        desc: 'Step-by-step pastry recipes paired strong photography and video with exact ratios, temperatures and timing that a working chef could put into production the next morning.',
      },
      {
        title: 'Live demos and workshops with respected chefs',
        desc: 'Acclaimed local pastry chefs demonstrated techniques live using Master Martini ingredients, answering technical questions in real time and introducing chefs to products they had not tried.',
      },
      {
        title: 'Chef UGC contests',
        desc: 'Branded hashtag contests invited working pastry chefs to submit creations made in their own kitchens, building peer credibility that no brand post could replicate.',
      },
      {
        title: 'Localized for five culinary cultures',
        desc: 'Indonesia, Malaysia, Hong Kong, Singapore and Thailand each got distinct languages, local culinary traditions and regional chef ambassadors rather than a single recycled feed.',
      },
    ],
    delivered: [
      'Multi-market Instagram and Facebook management across five territories',
      'Step-by-step professional recipe photography and video series',
      'Live pastry demonstrations and technical workshops with local chefs',
      'Branded UGC competitions for commercial bakers and pastry chefs',
      'Market-specific localization across languages and baking traditions',
    ],
    results: [
      { value: '5 markets', label: 'Malaysia, Hong Kong, Singapore, Indonesia and Thailand' },
      { value: 'B2B orders', label: 'Direct rise in distributor inquiries and ingredient orders' },
      { value: 'Regional reach', label: 'Chef-to-chef sharing expanded awareness into neighbouring markets' },
    ],
    services: [
      'B2B social strategy',
      'Instagram & Facebook',
      'Recipe photo & video',
      'Live chef demos',
      'Multi-market localization',
    ],
    gallery: [
      {
        src: '/Images/work/master-martini-1.webp',
        alt: 'Master Martini recipe photography and chef demonstration visuals across Asian markets.',
      },
      {
        src: '/Images/work/master-martini-2.webp',
        alt: 'Master Martini UGC campaign featuring professional pastry chefs.',
      },
    ],
  },
  {
    slug: 'blue-insurance',
    discipline: 'Social media',
    client: 'Blue Insurance',
    title: 'Digital launch and social growth for Hong Kong’s first online life insurer',
    category: 'Digital launch & social',
    industry: 'Insurance & fintech',
    region: 'Hong Kong',
    summary:
      'Blue launched as Hong Kong’s first digital life insurer with no agents and no paperwork. We built its bilingual website and social launch campaign, winning 10,000 followers in month one and 3,000+ signups in week one.',
    hero: {
      src: '/Images/work/blue-insurance-hero.webp',
      alt: 'Blue Insurance digital launch campaign and bilingual website in Hong Kong.',
    },
    challenge: [
      'Blue is Hong Kong’s first digital life insurer: no agents, no meetings and no paperwork. Customers answer a few questions online and get instant coverage.',
      'Launching into a market where legacy insurers were already spending heavily on digital channels meant “digital-first” was not enough on its own. Blue needed a bilingual website that felt effortlessly simple on mobile, paired with a social and paid launch campaign that built trust and captured leads immediately.',
    ],
    approachLead:
      'We built the bilingual web experience, search architecture and social launch campaign as a single coordinated release in Hong Kong.',
    approach: [
      {
        title: 'A bilingual, mobile-first product site',
        desc: 'Designed in Traditional Chinese and English, the site stripped away walls of policy jargon so every screen moved mobile visitors cleanly toward an instant quote or signup.',
      },
      {
        title: 'Search architecture from day one',
        desc: 'Information architecture, metadata and bilingual content hierarchy were engineered before launch so Blue competed immediately on high-intent Hong Kong insurance queries.',
      },
      {
        title: 'Social campaign targeting insurance friction',
        desc: 'Social content and paid media went live the same week, speaking directly to consumers tired of agent meetings, long forms and fine print.',
      },
    ],
    delivered: [
      'Bilingual Traditional Chinese and English responsive website',
      'Quote-and-signup conversion flows optimized for mobile research',
      'Foundational SEO architecture for Hong Kong insurance search terms',
      'Social media launch campaign and paid acquisition creative',
    ],
    results: [
      { value: '10,000', label: 'New social followers in the first month' },
      { value: '3,000+', label: 'Newsletter and lead signups in the first week' },
      { value: 'Bilingual', label: 'Chinese and English web and social presence live simultaneously' },
    ],
    services: [
      'Social launch campaign',
      'Bilingual website design',
      'Paid social media',
      'SEO architecture',
      'Lead generation',
    ],
    gallery: [
      {
        src: '/Images/work/blue-insurance-1.webp',
        alt: 'Blue Insurance bilingual website experience across desktop and mobile.',
      },
      {
        src: '/Images/work/blue-insurance-2.webp',
        alt: 'Blue Insurance digital launch campaign driving followers and signups in Hong Kong.',
      },
    ],
  },
  {
    slug: 'age20s',
    discipline: 'Social media',
    client: 'AGE 20’s',
    title: 'The Little Milk Brick social campaign on Douyin and RedNote',
    category: 'Social campaign & KOLs',
    industry: 'Beauty & cosmetics',
    region: 'China',
    summary:
      'To launch AGE 20’s cushion foundation in China’s crowded beauty market, we built a four-phase social campaign on Douyin and RedNote around the “Little Milk Brick” nickname, beating Douyin targets nearly fourfold.',
    hero: {
      src: '/Images/work/age20s-hero.webp',
      alt: 'AGE 20’s Little Milk Brick cushion foundation campaign key visual.',
    },
    challenge: [
      'Korean beauty brand AGE 20’s was launching a new cushion foundation in China designed for working women: a milky-matte finish, eight-hour wear and dessert-inspired rectangular packaging.',
      'China’s foundation category is one of the most crowded consumer markets in the world. AGE 20’s needed a social campaign on RedNote and Douyin that positioned the compact as a professional daily essential rather than just another cushion launch, while establishing a recurring annual campaign identity.',
    ],
    approachLead:
      'We centered a four-phase RedNote and Douyin campaign on a sticky consumer nickname: the Little Milk Brick.',
    approach: [
      {
        title: 'A nickname built to travel organically',
        desc: 'We anchored the visual and verbal identity on “Little Milk Brick”, turning the product’s packaging and milky-matte texture into a shorthand consumers remembered and repeated.',
      },
      {
        title: 'Four phases from warm-up to sustain',
        desc: 'Official channel teasers seeded the look, workplace launch content proved eight-hour wear at desks and on commutes, KOL activations captured peak shopping windows, and customer UGC sustained momentum.',
      },
      {
        title: 'Distinct roles for RedNote and Douyin',
        desc: 'RedNote carried detailed application tutorials and before-and-after wear tests, while Douyin delivered fast workplace touch-up clips and professional beauty tips.',
      },
      {
        title: 'High-velocity asset production with hubStudio',
        desc: 'hubStudio kept the social pipeline supplied with product visuals and creative variations so the campaign never slowed down across phases.',
      },
    ],
    delivered: [
      'Little Milk Brick campaign identity and visual system',
      'Four-phase social rollout across RedNote and Douyin',
      'KOL conversion wave timed to peak eCommerce shopping windows',
      'Before-and-after tutorials, workplace video cuts and UGC amplification',
      'AI-accelerated product visuals and social variations via hubStudio',
    ],
    results: [
      { value: '3.87M', label: 'Douyin impressions against a 1M target (nearly 4x goal)' },
      { value: '750K', label: 'RedNote impressions against a 300K target' },
      { value: '3.3% ROI', label: 'Above category benchmark, with the nickname adopted organically' },
    ],
    services: [
      'Douyin & RedNote campaign',
      'KOL & UGC activation',
      'Creative identity',
      'Social video & tutorials',
      'AIGC asset pipeline',
    ],
    gallery: [
      {
        src: '/Images/work/age20s-1.webp',
        alt: 'AGE 20’s KOL campaign posts and user-generated content results on RedNote and Douyin.',
      },
      {
        src: '/Images/work/age20s-2.webp',
        alt: 'AGE 20’s Little Milk Brick social campaign visual.',
      },
    ],
  },
  {
    slug: 'langnese',
    discipline: 'Social media',
    client: 'Langnese',
    title: 'Repositioning Germany’s leading honey brand for social growth in China',
    category: 'Social strategy & consulting',
    industry: 'Food & beverage',
    region: 'China',
    summary:
      'After a century in business and established retail distribution in China, Langnese needed its next stage of growth. We ran tier-one and tier-two consumer research and built a nine-pillar repositioning and social strategy across RedNote, Douyin, WeChat and Tmall.',
    hero: {
      src: '/Images/work/langnese-hero.webp',
      alt: 'Langnese honey product range staged for the Chinese market.',
    },
    challenge: [
      'With over 100 years of heritage, Langnese is Germany’s leading honey brand. In China, import distribution and retail shelf space were already in place, yet growth had plateaued.',
      'Our consumer and competitor audit across tier-one and tier-two cities showed why. In tier-one cities, generic wellness messaging no longer stood out against agile domestic competitors with sharper social content. In tier-two cities, shoppers saw no clear reason to pay twice the price of local honey based on country-of-origin claims alone.',
    ],
    approachLead:
      'We built an execution-ready nine-pillar growth framework spanning consumer occasions, product formats and platform-by-platform social strategy.',
    approach: [
      {
        title: 'New consumer cohorts and daily occasions',
        desc: 'We shifted targeting toward three underserved groups: young professionals sweetening morning coffee and smoothies, parents seeking natural alternatives for children, and home bakers.',
      },
      {
        title: 'Use-case positioning over origin claims',
        desc: 'Instead of leaning on “German quality” in the abstract, creative highlighted concrete functional advantages: how the flavor profile pairs with specific recipes and how the texture behaves in hot drinks.',
      },
      {
        title: 'Platform-specific social roles',
        desc: 'RedNote anchored daily recipe integration and morning routines, Douyin demonstrated quick use cases and livestream tastings, and WeChat carried brand heritage storytelling.',
      },
      {
        title: 'Trial formats and channel expansion',
        desc: 'We recommended smaller trial jars, single-serve office formats and refreshed shelf packaging alongside distribution into previously untapped regions.',
      },
    ],
    delivered: [
      'Tier-one and tier-two city consumer research and competitive social audit',
      'Nine-pillar repositioning and channel growth framework',
      'Platform-by-platform social strategy for RedNote, Douyin, WeChat and Tmall',
      'Douyin livestream commerce and recipe demonstration concepts',
      'Product format, trial sizing and packaging recommendations',
    ],
    results: [
      { value: '9 pillars', label: 'Repositioning framework aligned across brand and distributor' },
      { value: '4 platforms', label: 'RedNote, Douyin, WeChat and Tmall rebuilt around daily occasions' },
      { value: 'New channels', label: 'Expanded regional distribution and retail sell-through' },
    ],
    services: [
      'Market research & consulting',
      'Brand repositioning',
      'RedNote, Douyin & WeChat',
      'Livestream strategy',
      'Tmall positioning',
    ],
    gallery: [
      {
        src: '/Images/work/langnese-1.webp',
        alt: 'Langnese Douyin livestream session showcasing honey recipes and daily uses.',
      },
      {
        src: '/Images/work/langnese-2.webp',
        alt: 'Langnese Tmall flagship store page with repositioned branding.',
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
