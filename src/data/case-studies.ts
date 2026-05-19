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

export interface CaseStudy {
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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'noyz-mylk-de-parfum',
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
  },
  {
    slug: 'mexicash',
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
  },
  {
    slug: 'elizabeth-gage',
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
  },
  {
    slug: 'hisense',
    client: 'HiSense',
    title: 'A self-serve content platform, live in eight weeks',
    category: 'Platform deployment',
    industry: 'Consumer electronics',
    region: 'North America',
    summary:
      'HiSense needed its teams and agencies to generate thousands of assets a week for North America. We deployed hub4You with custom-trained models and had it live before retail season.',
    hero: {
      src: '/Images/work/hisense-hero.webp',
      alt: 'A HiSense television staged in a contemporary living room, lit for a North American retail audience.',
    },
    challenge: [
      'HiSense, the world’s second-largest TV brand, was pushing hard into North America. To compete across thousands of retail touchpoints it needed asset velocity its existing setup could not give: separate product shoots, an agency briefed for every campaign, and approval cycles that ran long.',
      'The ask was a deployment of hub4You, our SaaS platform, customised so internal teams and outside agencies could independently produce thousands of weekly assets. It had to understand HiSense products, brand visuals and North American taste, and it had to be operational within two months to support major retail partnerships.',
    ],
    approachLead:
      'We delivered hub4You as a bespoke platform, not a generic tool with a logo on it.',
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
      'hub4You SaaS platform, customised for HiSense',
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
    services: ['hub4You platform', 'Custom model training', 'AIGC agents', 'Workflow design'],
    gallery: [],
  },
  {
    slug: 'diy-european-retailer',
    client: 'European DIY retailer',
    title: 'Contextualising thousands of products, made economically possible',
    category: 'AI merchandising',
    industry: 'Home improvement retail',
    region: 'Europe',
    summary:
      'A European home improvement retailer had thousands of SKUs and basic product shots. We turned them into seasonal lifestyle imagery across catalogue, eCommerce and store.',
    hero: {
      src: '/Images/work/diy-retailer-hero.webp',
      alt: 'A home improvement product shown in a realistic renovated-room setting, generated from a basic catalogue shot.',
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
      'Catalogue-ready lifestyle photography across categories',
      'Product usage and installation video',
    ],
    results: [
      { value: '1000s', label: 'SKUs given lifestyle context' },
      { value: '4 seasons', label: 'Promotional calendars covered without reshoots' },
      { value: 'Omnichannel', label: 'Catalogue, eCommerce and store kept consistent' },
    ],
    services: ['AIGC merchandising', 'Lifestyle imagery', 'Seasonal assets', 'Omnichannel content'],
    gallery: [],
  },
  {
    slug: 'camper',
    client: 'Camper',
    title: 'Mediterranean character, reimagined for China’s Gen Z',
    category: 'Localised content',
    industry: 'Footwear',
    region: 'China market',
    summary:
      'Camper needed its Mediterranean identity to land with China’s Gen Z. We turned a limited global library into a full China-ready set of images and video.',
    hero: {
      src: '/Images/work/camper-hero.webp',
      alt: 'Camper footwear styled within a contemporary Chinese setting that reads to a Gen Z audience.',
    },
    challenge: [
      'Camper, the Spanish contemporary footwear brand, needed localised content for China’s Gen Z that kept its Mediterranean heritage while genuinely resonating locally. It was working from a limited library of global assets.',
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
      'Product imagery localised to Chinese cultural contexts',
      'Lifestyle visuals for Gen Z-relevant scenarios',
      'Brand video carrying Mediterranean character through a Chinese lens',
      'Animated product showcases optimised for mobile',
      'Seasonal campaign assets adapting the global brand language',
    ],
    results: [
      { value: 'China-ready', label: 'Global library localised for Gen Z' },
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
    client: 'age20',
    title: 'One K-beauty brand, every market’s language',
    category: 'Campaign localisation',
    industry: 'K-beauty',
    region: 'Asia-Pacific',
    summary:
      'age20 needed hyper-localised campaign content across Asian markets on aggressive timelines. We turned product photography into on-model campaigns in hours, brand DNA intact.',
    hero: {
      src: '/Images/work/age20-hero.webp',
      alt: 'An age20 beauty campaign visual with an on-model styled look in clean editorial light.',
    },
    challenge: [
      'age20 works in fast-moving K-beauty, where campaigns have to deploy across markets from Korea to Southeast Asia while holding a youthful, distinct brand identity. Each market needs hyper-localised variations that reflect regional beauty standards and cultural moments, all on aggressive timelines.',
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
      'Hyper-localised variations for regional beauty aesthetics',
      'Rapid-turnaround campaign adaptations on the promotional calendar',
    ],
    results: [
      { value: 'Hours', label: 'Product shot to on-model campaign' },
      { value: 'Seoul→Singapore', label: 'Markets served from one brand system' },
      { value: 'Days', label: 'Campaign deployment, in time for the moment' },
    ],
    services: ['Campaign localisation', 'On-model imagery', 'Motion content', 'Social libraries'],
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
        desc: 'Bespoke AIGC agents are trained on seasonal aesthetics and brand standards, and understand colour stories, fabric draping and styling conventions.',
      },
      {
        title: 'A team trained to run it',
        desc: 'Multi-phase training leaves creative teams able to generate content independently, with ongoing capability refinement.',
      },
    ],
    delivered: [
      'Custom virtual model library for target demographics',
      'Automated look-generation workflow',
      'hub4You platform integration with brand customisation',
      'Bespoke AIGC agents trained on brand standards',
      'Multi-phase internal team training',
    ],
    results: [
      { value: '1000s/month', label: 'Assets generated in-house' },
      { value: 'Hours', label: 'Product shot to styled imagery' },
      { value: 'In-house', label: 'Teams produce without outside studios' },
    ],
    services: ['Virtual model library', 'hub4You platform', 'AIGC agents', 'Team training'],
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
      'eCommerce product detail shots optimised for product pages',
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
        desc: 'Snow, rain, clear skies, autumn colour, plus golden hour, blue hour and midday, all consistent and all controlled.',
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
    services: ['AIGC environments', 'Campaign imagery', 'Localisation', 'Multi-format delivery'],
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
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
