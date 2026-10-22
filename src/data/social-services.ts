import { appShots, type AppShot as AppShotMeta } from './app-shots';

export interface SocialCoverageLane {
  /** Mono label shown above the heading and under the figure */
  label: string;
  heading: string;
  lead: string;
  body: string[];
  tags: string[];
  /** Either a realistic platform/lifestyle image OR a real localized AppShot */
  image?: string;
  alt?: string;
  shot?: AppShotMeta;
  path?: string;
  caption?: string;
}

export interface SocialProofSample {
  src: string;
  alt: string;
  brand: string;
  kind: string;
  isApp?: boolean;
}

export interface SocialProcessStep {
  short: string;
  tier: string;
  title: string;
  body: string;
  image?: string;
  alt?: string;
  shot?: AppShotMeta;
  path?: string;
  caption?: string;
}

export interface SocialServiceFaq {
  q: string;
  a: string;
  link?: { match: string; href: string };
}

export interface SocialServiceData {
  slug: string;
  frSlug: string;
  group: 'Content & Pages' | 'Paid Social & Ads' | 'Advocacy & Networks';
  name: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  hero: {
    line1: string;
    line2: string;
    serifLine: string;
    tagPre: string;
    tagEm: string;
    tagPost: string;
    lead: string[];
    image: string;
    alt: string;
    chipPre: string;
    chipPost: string;
  };
  why: {
    titleLine1: string;
    titleSerif: string;
    titlePost: string;
    paragraphs: string[];
    image: string;
    alt: string;
    caption: string;
    quote: string;
    stats: {
      from: number;
      to: number;
      suffix: string;
      label: string;
      note: string;
    }[];
  };
  cover: {
    headingPre: string;
    headingSerif: string;
    headingPost: string;
    note: string;
    lanes: SocialCoverageLane[];
  };
  proof: {
    note: string;
    samples: SocialProofSample[];
  };
  source: {
    kicker: string;
    headingLine1: string;
    headingLine2Pre: string;
    headingSerif: string;
    headingLine2Post: string;
    lead: string;
    paragraphs: string[];
    quietNote: string;
    creds: string[];
    mainImage: string;
    mainAlt: string;
    insetImage: string;
    insetAlt: string;
    statNum: string;
    statCap: string;
  };
  process: {
    headingLine1: string;
    headingLine2Pre: string;
    headingSerif: string;
    headingLine2Post: string;
    lede: string;
    note: string;
    steps: SocialProcessStep[];
  };
  appOrStudio: {
    pre: string;
    accent: string;
    post: string;
    intro: string;
    inAppBody: string[];
    fromStudioBody: string[];
    shot: AppShotMeta;
    shotPath: string;
    shotCaption: string;
    links: { label: string; href: string }[];
    ways: { pre: string; accent: string; post: string };
  };
  faqs: SocialServiceFaq[];
  closing: {
    titleLine1: string;
    titleSerif: string;
    body: string;
  };
}

export const SOCIAL_SERVICES: SocialServiceData[] = [
  /* =========================================================================
   * 1. PAGE & CHANNEL MANAGEMENT
   * ========================================================================= */
  {
    slug: 'page-channel-management',
    frSlug: 'gestion-de-pages-et-de-chaines',
    group: 'Content & Pages',
    name: 'Page & channel management',
    metaTitle: 'Social Page & Channel Management Service | hubStudio',
    metaDescription:
      'We set up, refresh, and run your brand pages across LinkedIn, Instagram, Facebook, TikTok, X, YouTube, and Chinese social networks inside hubStudio.',
    serviceType: 'Social media page and channel management',
    hero: {
      line1: 'Page &',
      line2: 'Channel',
      serifLine: 'management.',
      tagPre: 'Every brand page and channel, ',
      tagEm: 'kept alive',
      tagPost: ' and consistent.',
      lead: [
        'A prospect clicks from a post to your company page in under two seconds. What they find there, the banner, the pinned post, the bio, the highlights, and the cadence of the last four weeks, decides whether you look like an active market leader or an abandoned storefront.',
        'Our social team audits, overhauls, and runs your brand pages inside hubStudio across LinkedIn, Instagram, Facebook, TikTok (Beta), X, YouTube, and China social channels, with every update validated by your team before it goes live.',
      ],
      image: '/Images/linkedin-content.jpg',
      alt: 'A 16-inch laptop on a sunlit Shanghai studio desk displaying a realistic LinkedIn company page with custom header artwork, bio, and recent posts.',
      chipPre: 'Platform UI',
      chipPost: 'LinkedIn Company Page',
    },
    why: {
      titleLine1: 'First impressions happen',
      titleSerif: 'on the page',
      titlePost: '.',
      paragraphs: [
        'Most social teams spend ninety percent of their energy on the next post and almost none on the page that hosts it. Six months after a product launch, the banner still advertises last season, the pinned post points to an expired webinar, and regional handles use three different logos.',
        'We treat your social pages as living storefronts. When a campaign launches in the hubStudio app, we update your channel banners, featured links, bio copy, and pinned posts in lockstep with the feed calendar so every network tells the same story on the same day.',
      ],
      image: '/Images/studio-on-app.webp',
      alt: 'A hubStudio producer at a sunlit desk reviewing a channel calendar on a laptop during a client call.',
      caption: 'Studio lifestyle · Channel review between Shanghai and Paris',
      quote:
        'Across brand channel overhauls run over the past year: profile-to-website click-through climbs when banners, featured slots, and weekly cadence move together.',
      stats: [
        { from: 0, to: 20, suffix: ' accts', label: 'Connected per post in the app', note: 'LinkedIn, IG, FB, TikTok (Beta), X' },
        { from: 0, to: 48, suffix: 'h', label: 'Channel audit & binding proposal', note: 'Every page, handle, and bio reviewed' },
        { from: 0, to: 100, suffix: '%', label: 'Validated before publishing', note: 'Versioned sign-off in Validation' },
      ],
    },
    cover: {
      headingPre: 'Four layers of ',
      headingSerif: 'channel care',
      headingPost: '.',
      note: 'From the first visual overhaul to the daily publishing queue, we alternate between platform-native architecture, app workflows, and studio art direction.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn & Instagram storefronts',
          heading: 'Channel architecture, banners & featured slots',
          lead: 'Every pixel above the fold built to each network’s exact safe zones.',
          body: [
            'LinkedIn company pages, Instagram professional profiles, Facebook pages, X profiles, and YouTube channels all crop headers and avatars differently between desktop and mobile. We design and test every banner, avatar, Story highlight cover, and Featured card directly against real platform layouts.',
            'We also rewrite bios, tagline hooks, and custom button links for each market so visitors know what you do and where to click next.',
          ],
          tags: ['LinkedIn banners', 'IG Story highlights', 'YouTube channel kits', 'Bio & CTA architecture', 'Safe-zone QA'],
          image: '/Images/linkedin-hero.jpg',
          alt: 'A hand holding a smartphone showing a realistic LinkedIn mobile feed and brand profile header in warm daylight.',
        },
        {
          label: 'App screenshot · Connected accounts & publishing',
          heading: 'Multi-account governance inside hubStudio',
          lead: 'Connect up to 20 social accounts per post and manage the queue in one browser tab.',
          body: [
            'Inside the hubStudio app, your regional pages and brand handles live under Connected accounts. Our producers draft and queue posts to LinkedIn profiles and company pages, Instagram professional accounts, Facebook pages, TikTok (Beta), and X, while preparing YouTube channel assets and video packages for YouTube Studio.',
            'Each connected account gets its own row in the publishing queue, temporary network errors retry automatically, and nothing goes out without your team’s approval in Validation.',
          ],
          tags: ['Up to 20 accounts per post', 'Connected accounts', 'Queue management', 'YouTube Channel tab', 'Validation threads'],
          shot: appShots.connections,
          path: '/settings/connections',
          caption: 'Connected accounts in hubStudio: link LinkedIn, Instagram, Facebook, TikTok (Beta), and X pages in one workspace.',
        },
        {
          label: 'Studio lifestyle · Editorial desk & brand stewardship',
          heading: 'Seasonal refreshes & launch takeovers',
          lead: 'Your social headers and pinned posts updated the morning a campaign drops.',
          body: [
            'A channel should never lag behind your commercial calendar. Before every product drop, trade show, or seasonal push, our art directors prepare a synchronized channel kit: updated cover visuals, a new pinned announcement, refreshed link-in-bio destinations, and matching first-comment links.',
            'Every visual is checked by a senior art director and a retoucher so typography, color grading, and product accuracy hold across every region.',
          ],
          tags: ['Launch takeovers', 'Pinned post rotation', 'Regional handle alignment', 'Art director QA', 'First-comment links'],
          image: '/Images/who-we-are-studio.jpg',
          alt: 'A sunlit hubStudio creative floor with calibrated monitors and pinned brand proofs under review.',
        },
        {
          label: 'App screenshot · YouTube Channel kit & metadata',
          heading: 'YouTube channel setup & cross-network hygiene',
          lead: 'Name, handle, description, banner, and profile picture prepared in one module.',
          body: [
            'Because YouTube restricts third-party API uploads to private unless verified per account, hubStudio gives YouTube its own dedicated workflow. The Channel tab drafts your channel name, handle, keyword-rich description, banner, and avatar to YouTube’s exact dimensions, ready to apply in YouTube Studio.',
          ],
          tags: ['YouTube Channel tab', 'Banner & avatar specs', 'Channel keywords', 'Interactive upload prep', 'Playlist structure'],
          shot: appShots.youtubeChannel,
          path: '/social/youtube/channel',
          caption: 'The YouTube Channel tab in hubStudio: prepare channel name, handle, description, banner, and profile picture.',
        },
      ],
    },
    proof: {
      note: 'A look at how our channel work alternates between real platform screens, the hubStudio app interface, and our studio floor.',
      samples: [
        {
          src: '/Images/linkedin-content.jpg',
          alt: 'Laptop showing a realistic LinkedIn company page with custom header and feed posts.',
          brand: 'LinkedIn Company Page',
          kind: 'Platform · Desktop storefront',
        },
        {
          src: appShots.connections.src,
          alt: appShots.connections.alt,
          brand: 'Connected Accounts',
          kind: 'App · Account governance',
          isApp: true,
        },
        {
          src: '/Images/who-we-are-office.webp',
          alt: 'Senior producers and art directors working together at a sunlit studio table.',
          brand: 'Channel Stewardship',
          kind: 'Studio · Daily operations',
        },
        {
          src: '/Images/soc-plat-youtube-channel.jpg',
          alt: 'Laptop on a stone desk showing a realistic YouTube brand channel page with banner and video grid.',
          brand: 'YouTube Brand Channel',
          kind: 'Platform · Channel kit',
        },
        {
          src: appShots.youtubeChannel.src,
          alt: appShots.youtubeChannel.alt,
          brand: 'YouTube Channel Tab',
          kind: 'App · Channel metadata',
          isApp: true,
        },
        {
          src: '/Images/wechat-hero.jpg',
          alt: 'Hand holding a smartphone displaying a realistic WeChat Official Account article and header.',
          brand: 'WeChat Official Account',
          kind: 'Platform · China channel',
        },
      ],
    },
    source: {
      kicker: 'West & China alignment',
      headingLine1: 'Global handles and Chinese',
      headingLine2Pre: 'official accounts, ',
      headingSerif: 'aligned',
      headingLine2Post: '.',
      lead: 'Running a global brand means your LinkedIn and Instagram pages cannot contradict your WeChat Official Account or RedNote brand page.',
      paragraphs: [
        'In Western markets, our team manages your pages directly inside the hubStudio app, queuing approved posts to LinkedIn, Instagram, Facebook, TikTok (Beta), and X. In China, where WeChat, RedNote (Xiaohongshu), Douyin, and Weibo run on separate verification and publishing rules, our Shanghai team operates your Official Accounts and enterprise pages or delivers complete channel kits ready to post.',
        'Because the same bilingual producers coordinate both sides, a headquarters announcement in Paris or New York lands on LinkedIn and WeChat with the same visual authority, adapted to each platform’s reading habits.',
      ],
      quietNote: 'Need us to manage only LinkedIn and Instagram, or add China later? We scope channel by channel.',
      creds: ['LinkedIn & Meta pages', 'TikTok (Beta) & X', 'YouTube Channel kits', 'WeChat, RedNote, Douyin & Weibo'],
      mainImage: '/Images/wechat-hero.jpg',
      mainAlt: 'A smartphone in warm window light showing a realistic WeChat Official Account editorial article.',
      insetImage: '/Images/studio-brief.webp',
      insetAlt: 'A producer reviewing a channel brief at a studio desk.',
      statNum: 'West + CN',
      statCap: 'Unified brand presence across ecosystems',
    },
    process: {
      headingLine1: 'How we take over a page',
      headingLine2Pre: 'without ',
      headingSerif: 'disrupting',
      headingLine2Post: ' your week.',
      lede: 'Moving channel management to hubStudio takes days, not months. Every step alternates between studio strategy, app setup, and live platform execution.',
      note: 'Your team keeps full ownership of every social handle and ad account at all times.',
      steps: [
        {
          short: 'Channel audit',
          tier: 'Studio · Discovery',
          title: 'Full audit of every handle, banner, and bio',
          body: 'We review every active and dormant page across your markets, checking visual consistency, mobile safe zones, pinned posts, link routing, and recent cadence.',
          image: '/Images/ms-p1-brief.jpg',
          alt: 'A strategist reviewing printed channel audit sheets at a sunlit oak desk.',
        },
        {
          short: 'Workspace setup',
          tier: 'App · Connections',
          title: 'Connect accounts & configure Brand Skills in the app',
          body: 'You link your pages in Connected accounts or invite our producers into your workspace. We encode your tone of voice, visual rules, and banned phrases into reusable Skills.',
          shot: appShots.skillsCatalog,
          path: '/skills',
          caption: 'Skills in hubStudio: lock in your brand voice and channel rules so every draft follows them.',
        },
        {
          short: 'Storefront refresh',
          tier: 'Studio · Art direction',
          title: 'New banners, highlights, and pinned announcements',
          body: 'Our art directors design a cohesive visual kit for every network, sized and tested across desktop and mobile views.',
          image: '/Images/studio-hero.webp',
          alt: 'Two art directors reviewing pinned visual proofs on a sunlit studio wall.',
        },
        {
          short: 'Validation & queue',
          tier: 'App · Review & Publish',
          title: 'Approve every update in Validation before it queues',
          body: 'Every post and channel asset lands in your Client space. Approvers review v1, v2, and final cuts on one permanent thread before anything is scheduled.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: one approval thread per piece, with every version kept on record.',
        },
        {
          short: 'Live stewardship',
          tier: 'Platform · Always-on',
          title: 'Published on schedule across your networks',
          body: 'Approved posts publish on time through the networks’ official connections, while our team monitors formatting, first comments, and seasonal refreshes.',
          image: '/Images/linkedin-sample-feed.jpg',
          alt: 'Laptop on a wooden table displaying a live LinkedIn feed post with high engagement.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Run your pages in the app, or hand us the ',
      accent: 'keys',
      post: '.',
      intro: 'The hubStudio app gives your team everything needed to run social pages in-house. When you want senior art direction, multi-market coordination, and someone else to watch the calendar, our studio team steps right into your workspace.',
      inAppBody: [
        'Connect your LinkedIn profiles and company pages, Instagram professional accounts, Facebook pages, TikTok (Beta), and X accounts. Use the Image studio and Image editor to crop banners and post visuals, prepare YouTube channel metadata in the Channel tab, and schedule posts to up to 20 accounts from a prepaid balance.',
      ],
      fromStudioBody: [
        'A dedicated producer and senior art director audit your pages, redesign every header and highlight cover, maintain your pinned posts, and run your weekly channel calendar inside your hubStudio workspace.',
        'We also manage WeChat Official Accounts, RedNote brand pages, Douyin storefronts, and Weibo enterprise profiles where the app does not publish directly.',
      ],
      shot: appShots.clientSpace,
      shotPath: '/client',
      shotCaption: 'The Client space in hubStudio: see every channel asset and scheduled post waiting for your sign-off.',
      links: [
        { label: 'How social publishing works', href: '/app/publish' },
        { label: 'Working together in the app', href: '/studio/with-the-app' },
        { label: 'Connected accounts guide', href: '/help/getting-started' },
        { label: 'LinkedIn platform solutions', href: '/solutions/platforms/linkedin' },
      ],
      ways: { pre: 'Choose who runs your ', accent: 'channels', post: '.' },
    },
    faqs: [
      {
        q: 'Do we keep ownership of our social pages and accounts?',
        a: 'Yes, always. Your company owns every handle, page, and connected account. In Studio + app, you either connect the accounts in your own hubStudio workspace and invite our producers, or review drafts in our workspace before publishing.',
        link: { match: 'Studio + app', href: '/studio/with-the-app' },
      },
      {
        q: 'Which networks can hubStudio publish to directly?',
        a: 'The hubStudio app publishes directly to LinkedIn (personal profiles and company pages), Instagram (professional accounts), Facebook pages, TikTok (Beta), and X, up to 20 accounts per post. For YouTube, the app prepares the video, title, description, and channel assets for interactive upload in YouTube Studio.',
        link: { match: 'publishes directly', href: '/app/publish' },
      },
      {
        q: 'How do you handle WeChat, RedNote, Douyin, and Weibo pages?',
        a: 'The app does not publish directly to Chinese networks. For China channels, our Shanghai studio team produces the visuals and native copy, and either delivers ready-to-post packages or operates your verified Official Accounts and brand pages directly.',
      },
      {
        q: 'Can you overhaul our existing pages without a monthly retainer?',
        a: 'Yes. Many brands start with a fixed-scope channel overhaul: we audit your handles, redesign every banner, avatar, and highlight cover, rewrite your bios, and set up your workspace Skills and templates in two weeks.',
      },
      {
        q: 'How do approvals work when your team runs our pages?',
        a: 'Every post and banner goes through Validation in the hubStudio app. Your approvers see the visual and caption, leave notes if needed, and click Approve. Every version (v1, v2, and on) stays on the thread permanently.',
        link: { match: 'Validation', href: '/app/review' },
      },
      {
        q: 'How is channel management priced?',
        a: 'We scope a written proposal within 48 hours of reading your brief. Channel overhauls are priced per project, and ongoing page management is priced on a monthly retainer. When you run posts yourself in the app, publishing is free except on X, where each post shows its price from your prepaid balance before you send.',
        link: { match: 'prepaid balance', href: '/pricing' },
      },
    ],
    closing: {
      titleLine1: 'Give every page a',
      titleSerif: 'sharp storefront.',
      body: 'Send us the links to your current social pages. Within 48 hours we return a channel audit and a written proposal covering visual refreshes, bio architecture, and weekly management.',
    },
  },

  /* =========================================================================
   * 2. WEEKLY POSTS, CAROUSELS & VIDEO
   * ========================================================================= */
  {
    slug: 'weekly-posts-carousels-video',
    frSlug: 'publications-hebdomadaires-carrousels-et-videos',
    group: 'Content & Pages',
    name: 'Weekly posts, carousels & video',
    metaTitle: 'Weekly Social Posts, Carousels & Short Video Service | hubStudio',
    metaDescription:
      'Consistent weekly social posts, multi-slide carousels, Reels, TikToks, and Shorts produced by senior creatives and scheduled inside hubStudio.',
    serviceType: 'Weekly social media content, carousels, and short video production',
    hero: {
      line1: 'Weekly Posts,',
      line2: 'Carousels &',
      serifLine: 'short video.',
      tagPre: 'A feed that ships every week, ',
      tagEm: 'without recycling',
      tagPost: ' last month’s template.',
      lead: [
        'Keeping a brand feed active across LinkedIn, Instagram, TikTok, Facebook, and X takes more than a content calendar spreadsheet. It takes hooks that earn the stop, carousels that reward every swipe, and vertical video paced for the first two seconds.',
        'Our studio team produces your weekly posts, eight-slide LinkedIn carousels, Instagram Reels, TikTok clips, and YouTube Shorts inside hubStudio, then queues them to your accounts once you approve each piece.',
      ],
      image: '/Images/sm-hero.jpg',
      alt: 'A content creator in a sunlit Shanghai studio holding a smartphone vertically while filming a short social video.',
      chipPre: 'Studio lifestyle',
      chipPost: 'Weekly feed production',
    },
    why: {
      titleLine1: 'Consistency beats',
      titleSerif: 'occasional',
      titlePost: ' brilliance.',
      paragraphs: [
        'Most brand feeds go through the same cycle: a burst of energy around a launch, followed by six quiet weeks of reposted press releases and generic stock graphics. Algorithms notice the drop in saves and watch time immediately, and your next launch starts from a cold feed.',
        'We build a weekly production rhythm that blends AI image and video generation with real creator footage and editorial design. Every Friday, next week’s batch is sitting in your hubStudio Validation queue, sized for every network and written in your brand’s voice.',
      ],
      image: '/Images/meta-ig.jpg',
      alt: 'A hand holding a smartphone over a travertine stone table displaying a realistic Instagram Reels vertical video.',
      caption: 'Platform UI · Instagram Reels vertical feed',
      quote:
        'When weekly production moves into a shared studio-and-app rhythm, teams ship three to five times more native formats per month without adding headcount.',
      stats: [
        { from: 0, to: 8, suffix: ' slides', label: 'LinkedIn & IG carousel storytelling', note: 'Designed for saves and swipe completion' },
        { from: 0, to: 5, suffix: ' days', label: 'Weekly batch turnaround', note: 'From Monday brief to Friday sign-off' },
        { from: 0, to: 6, suffix: ' networks', label: 'Adapted per weekly story', note: 'LinkedIn, IG, FB, TikTok (Beta), X, YT' },
      ],
    },
    cover: {
      headingPre: 'Every weekly format, ',
      headingSerif: 'native',
      headingPost: ' to its feed.',
      note: 'A thought-leadership carousel on LinkedIn and a fifteen-second TikTok hook require different pacing, different typography, and different safe zones.',
      lanes: [
        {
          label: 'Platform screenshot · Reels & TikTok vertical video',
          heading: 'Short vertical video with timed hooks & safe-zone captions',
          lead: 'Built for 9:16 watch time on Instagram Reels, TikTok, YouTube Shorts, and Douyin.',
          body: [
            'A vertical video lives or dies before the viewer’s thumb finishes its first upward flick. We script the opening hook first, shoot with real creators or generate motion sequences in our studio pipelines, and grade every frame to match your brand palette.',
            'Before delivery, every clip is checked against each network’s button overlays and caption zones so your message never hides behind a heart icon or a username.',
          ],
          tags: ['9:16 Reels & TikToks', 'First-2-second hooks', 'Word-by-word captions', 'Safe-zone verified', 'Hybrid AI + creator'],
          image: '/Images/soc-plat-tiktok-feed.jpg',
          alt: 'A hand holding a smartphone in golden window light displaying a realistic TikTok vertical video interface with engagement icons.',
        },
        {
          label: 'App screenshot · LinkedIn & Instagram carousels',
          heading: 'Editorial carousels & single-image posts in the app',
          lead: 'Up to eight slides on LinkedIn, ten on Facebook, and multi-ratio crops for Instagram.',
          body: [
            'Carousels drive the highest save and dwell rates on LinkedIn and Instagram when each slide earns the next swipe. Our designers lay out typographic and visual sequences where the cover frame hooks the reader and the closing slide prompts a save or comment.',
            'In the hubStudio app, every image change is tracked automatically in Picture versions (v1, v2, and on), and Re-purpose adapts a LinkedIn post into an Instagram caption or an X thread in seconds.',
          ],
          tags: ['Multi-slide carousels', 'Picture versions v1/v2', 'Cross-network Re-purpose', 'First-line hook writing', '4:5 & 1:1 feed crops'],
          shot: appShots.linkedin,
          path: '/social/linkedin/posts',
          caption: 'LinkedIn in hubStudio: draft text, single-image, or carousel posts up to eight slides with the hook above the fold.',
        },
        {
          label: 'Studio lifestyle · Art direction & hybrid production',
          heading: 'Real photography + brand-trained AI in one weekly batch',
          lead: 'Your product stays 100% accurate while backgrounds, scenes, and formats scale.',
          body: [
            'Pure AI generation often bends product labels and bottle geometry; traditional shoots alone cannot feed a daily calendar. Our studio combines both: we lock your real product packshots and brand rules, then generate seasonal environments, lifestyle scenes, and motion variants around them.',
            'A senior art director and a retoucher sign off on every single frame before it enters your weekly review.',
          ],
          tags: ['Product-locked generation', 'Studio retouching', 'Creator shoots in Shanghai', 'Brand model consistency', 'Provenance recorded'],
          image: '/Images/sv-hero.jpg',
          alt: 'A short-video creator filming on a tripod-mounted phone in a warm-lit Shanghai studio.',
        },
        {
          label: 'App screenshot · Video safe zones & Shorts autopilot',
          heading: 'Video editor Social checks & Shorts autopilot',
          lead: 'Red overlays show what the network covers before a single clip goes live.',
          body: [
            'Inside hubStudio’s Video editor, picking Instagram, TikTok, or Facebook overlays the exact red zones where network buttons sit, and automated checks flag length, file weight, and captions that fall too low. Have a long webinar or founder interview? Shorts autopilot finds the strongest standalone moments and frames them at 9:16 with timed captions.',
          ],
          tags: ['Red safe-zone overlays', 'Automated spec checks', 'Shorts autopilot', '5 caption looks', '1080p MP4 export'],
          shot: appShots.videoSocial,
          path: '/files/tools/video-editor',
          caption: 'The Video editor Social tab in hubStudio: check safe zones, length, and captions for Instagram, TikTok, and Facebook.',
        },
      ],
    },
    proof: {
      note: 'Weekly feed deliverables alternating between live platform captures, hubStudio app modules, and studio production frames.',
      samples: [
        {
          src: '/Images/soc-plat-tiktok-feed.jpg',
          alt: 'Hand holding a smartphone showing a realistic TikTok vertical video feed post.',
          brand: 'TikTok Vertical Feed',
          kind: 'Platform · 9:16 short video',
        },
        {
          src: appShots.instagram.src,
          alt: appShots.instagram.alt,
          brand: 'Instagram Composer',
          kind: 'App · Carousel & Reel flow',
          isApp: true,
        },
        {
          src: '/Images/sm-p3-shoot.jpg',
          alt: 'A studio creator filming a vertical product demonstration under warm diffused lighting.',
          brand: 'Creator + AI Shoot',
          kind: 'Studio · Hybrid production',
        },
        {
          src: '/Images/meta-ig.jpg',
          alt: 'Smartphone on a stone surface displaying a live Instagram Reel.',
          brand: 'Instagram Reels',
          kind: 'Platform · Fashion vertical',
        },
        {
          src: appShots.repurpose.src,
          alt: appShots.repurpose.alt,
          brand: 'Cross-Network Re-purpose',
          kind: 'App · One post, six feeds',
          isApp: true,
        },
        {
          src: '/Images/rednote-hero.jpg',
          alt: 'Hand holding a smartphone displaying a realistic RedNote discovery feed.',
          brand: 'RedNote Weekly Notes',
          kind: 'Platform · China lifestyle feed',
        },
      ],
    },
    source: {
      kicker: 'One story, every feed',
      headingLine1: 'Adapted for each network,',
      headingLine2Pre: 'never ',
      headingSerif: 'cross-posted',
      headingLine2Post: ' blind.',
      lead: 'Pasting the exact same square image and caption onto LinkedIn, Instagram, X, and RedNote is the fastest way to look like a bot.',
      paragraphs: [
        'When we produce a weekly theme for your brand, we build native versions for each ecosystem. On LinkedIn, the story becomes an eight-slide typographic carousel with an analytical hook. On Instagram and TikTok, it becomes a 9:16 vertical cut with word-by-word captions. On X, it becomes a crisp thread where any external link sits in the follow-up post so the opening post keeps its full reach.',
        'If your calendar also covers China, our Shanghai writers and designers rebuild the same weekly theme into 3:4 RedNote seeding notes and Douyin vertical clips that pass local originality and safe-zone rules.',
      ],
      quietNote: 'Start with one network or five. You approve every variant in one place.',
      creds: ['LinkedIn carousels', 'IG Reels & 4:5 posts', 'TikTok (Beta) scripts & clips', 'X threads & follow-up links'],
      mainImage: '/Images/soc-plat-x-thread.jpg',
      mainAlt: 'A smartphone on an oak desk displaying a realistic X multi-post thread with an embedded product photo.',
      insetImage: '/Images/sm-china-inset.jpg',
      insetAlt: 'A creator holding a skincare product to camera in a sunlit apartment.',
      statNum: '6 feeds',
      statCap: 'Native formats from one weekly brief',
    },
    process: {
      headingLine1: 'How a week of content',
      headingLine2Pre: 'moves from brief to ',
      headingSerif: 'published',
      headingLine2Post: '.',
      lede: 'No chaotic spreadsheet tabs or lost email attachments. Your weekly calendar lives inside hubStudio Campaigns and Validation.',
      note: 'Every render, edit, and upload stays saved in Picture versions so you can restore an earlier cut in one click.',
      steps: [
        {
          short: 'Weekly themes',
          tier: 'Studio · Editorial planning',
          title: 'Lock the month’s angles and weekly hooks',
          body: 'Your producer and art director map the month’s product stories, industry hooks, and format mix across your active networks.',
          image: '/Images/sm-p1-brief.jpg',
          alt: 'Two creative leads reviewing a weekly content calendar and visual references at a wooden table.',
        },
        {
          short: 'Campaign folder',
          tier: 'App · Campaigns',
          title: 'Group the week’s brief and reference files in Campaigns',
          body: 'Every weekly sprint or launch gets a Campaign in hubStudio. Draft with AI reads the campaign brief and attached documents to keep captions grounded in real product facts.',
          shot: appShots.campaignPost,
          path: '/social/linkedin/posts',
          caption: 'Posts from a campaign in hubStudio: Draft with AI reads your campaign brief and document text.',
        },
        {
          short: 'Studio craft',
          tier: 'Studio · Design & Video',
          title: 'Shoot, generate, and lay out carousels and clips',
          body: 'Our designers, motion artists, and AIGC specialists produce the visuals, cut vertical video, and time captions to each network’s safe zones.',
          image: '/Images/sm-p4-grade.jpg',
          alt: 'An art director grading vertical social video frames on a calibrated monitor.',
        },
        {
          short: 'Client sign-off',
          tier: 'App · Validation',
          title: 'Review and approve the batch in Validation',
          body: 'You inspect every post, slide, and video in your browser, request tweaks on the thread if needed, and approve the week’s lineup.',
          shot: appShots.pictureVersions,
          path: '/social/instagram/posts',
          caption: 'Picture versions in hubStudio: compare v1, v2, and later cuts side by side on the post.',
        },
        {
          short: 'Scheduled live',
          tier: 'Platform · Distribution',
          title: 'Queued to each network at the right local hour',
          body: 'Approved posts go into the hubStudio scheduler for LinkedIn, Instagram, Facebook, TikTok (Beta), and X, while YouTube and China packages are delivered ready to post.',
          image: '/Images/linkedin-sample-feed.jpg',
          alt: 'Laptop screen showing a published LinkedIn post with reactions and comments.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Make this week’s posts in the app, or let us fill the ',
      accent: 'calendar',
      post: '.',
      intro: 'Your team can produce and schedule weekly posts directly in hubStudio. When you need higher volume, multi-slide carousels, or hybrid creator-and-AI video every week, our studio runs the calendar with you.',
      inAppBody: [
        'Generate visuals in the Image and Video studios, crop to 4:5 or 9:16 in the editors, cut long videos into clips with Shorts autopilot, and schedule posts to LinkedIn, Instagram, Facebook, TikTok (Beta), and X. Re-purpose turns one finished post into drafts for the other networks.',
      ],
      fromStudioBody: [
        'Our writers, designers, and video editors produce your entire weekly slate inside your hubStudio workspace. Every carousel slide, Reel, and caption is art-directed, retouched, and placed in Validation for your one-click approval.',
        'We also produce weekly RedNote notes, Douyin vertical videos, and WeChat articles for brands operating in China.',
      ],
      shot: appShots.publishStep,
      shotPath: '/social/instagram/posts',
      shotCaption: 'Publish now or schedule in hubStudio: pick your accounts, set the day and hour, and queue the week.',
      links: [
        { label: 'Social media design service', href: '/services/design/social-media' },
        { label: 'Short video production', href: '/services/design/short-video' },
        { label: 'How publishing works in the app', href: '/app/publish' },
        { label: 'Carousel post guide', href: '/resources/how-to/carousel-post-guide' },
      ],
      ways: { pre: 'Pick who produces your weekly ', accent: 'posts', post: '.' },
    },
    faqs: [
      {
        q: 'How many posts and videos can you produce each week?',
        a: 'We scope to your cadence. Typical retainers range from three weekly LinkedIn and Instagram posts up to daily multi-network calendars combining carousels, Reels, TikTok clips, and X threads across multiple regions.',
      },
      {
        q: 'Can we mix our own phone footage with your studio production?',
        a: 'Yes. Upload raw founder clips, event photos, or product shots into your hubStudio Assets Library. Our editors cut, grade, caption, and combine them with studio-generated b-roll and motion graphics.',
        link: { match: 'Assets Library', href: '/app/library' },
      },
      {
        q: 'Why is TikTok marked (Beta) in the app?',
        a: 'TikTok publishing in the hubStudio app is currently in Beta: the Brief tab drafts the hook, timed script, on-screen text, and caption inside TikTok’s limits, and publishes video clips to connected TikTok accounts.',
        link: { match: 'TikTok', href: '/help/tiktok' },
      },
      {
        q: 'How does the app handle X links and pricing?',
        a: 'Because X reduces the reach of posts that open with an external URL, hubStudio lets you place the link automatically in a short follow-up reply. Publishing to LinkedIn, Instagram, Facebook, and TikTok (Beta) is free; each post sent to X shows its price from your prepaid balance before you send.',
        link: { match: 'X', href: '/help/x' },
      },
      {
        q: 'What if we prefer an earlier image version on a post?',
        a: 'Every render, edit, or upload on a post is saved as v1, v2, and so on under Picture versions. Clicking Use this version restores the earlier picture set immediately.',
      },
      {
        q: 'Can we start with a two-week test batch before a monthly retainer?',
        a: 'Yes. Send us a brief for one campaign or two weeks of social content. You get a written proposal within 48 hours and keep every finished file we deliver.',
      },
    ],
    closing: {
      titleLine1: 'Put your weekly feed',
      titleSerif: 'on clockwork.',
      body: 'Send us your current social links and the cadence you want to hit. Within 48 hours we return a written proposal with sample angles, deliverables, and weekly turnaround.',
    },
  },

  /* =========================================================================
   * 3. NEWSLETTERS & EDITORIAL SERIES
   * ========================================================================= */
  {
    slug: 'newsletters-editorial-series',
    frSlug: 'newsletters-et-series-editoriales',
    group: 'Content & Pages',
    name: 'Newsletters & editorial series',
    metaTitle: 'Social Newsletters & Editorial Series Service | hubStudio',
    metaDescription:
      'LinkedIn Newsletters, WeChat Official Account long-form articles, and recurring social editorial series written, illustrated, and managed by hubStudio.',
    serviceType: 'Social media newsletters and recurring editorial series production',
    hero: {
      line1: 'Newsletters &',
      line2: 'Editorial',
      serifLine: 'series.',
      tagPre: 'Long-form social publishing that ',
      tagEm: 'compounds',
      tagPost: ' subscribers every issue.',
      lead: [
        'Short posts win reach; recurring editorial series win authority. A named LinkedIn Newsletter, a weekly WeChat Official Account column, or a numbered industry teardown gives buyers a reason to subscribe and return every week.',
        'Our writers and art directors research, write, illustrate, and package your social newsletters and recurring series inside hubStudio, then spin each issue into companion carousels, threads, and short clips across your feeds.',
      ],
      image: '/Images/soc-plat-newsletter.jpg',
      alt: 'A 16-inch laptop on a walnut studio desk in morning light displaying a realistic LinkedIn Newsletter edition with masthead banner and editorial layout.',
      chipPre: 'Platform UI',
      chipPost: 'LinkedIn Newsletter edition',
    },
    why: {
      titleLine1: 'Feed posts vanish.',
      titleSerif: 'Series',
      titlePost: ' build an audience.',
      paragraphs: [
        'A standard feed post has a shelf life of roughly twenty-four hours. A LinkedIn Newsletter or WeChat Official Account series notifies every subscriber in their inbox and notification bell the moment a new issue drops, turning rented reach into a compounding subscriber base.',
        'The reason most brand newsletters stall after issue four is production friction: interviewing subject-matter experts, drafting 800 words that actually say something, creating custom header artwork and inline diagrams, and writing the teaser posts to promote it. We run that entire editorial desk for you.',
      ],
      image: '/Images/pr-newsroom.jpg',
      alt: 'An editorial writer and art director reviewing long-form layout proofs and diagrams at a sunlit desk.',
      caption: 'Studio lifestyle · Editorial desk and visual layout review',
      quote:
        'One flagship editorial issue a week can anchor five companion feed posts: a teaser carousel, an executive quote card, an X thread, a short video summary, and a newsletter edition.',
      stats: [
        { from: 0, to: 5, suffix: 'x', label: 'Feed assets spun from each issue', note: 'Carousel, thread, teaser post, short clip' },
        { from: 0, to: 48, suffix: 'h', label: 'Editorial proposal & series bible', note: 'Format, rubric, and visual system' },
        { from: 0, to: 3, suffix: ' langs', label: 'Native editorial writing', note: 'English, French, and Simplified Chinese' },
      ],
    },
    cover: {
      headingPre: 'From flagship essay to ',
      headingSerif: 'multi-feed',
      headingPost: ' distribution.',
      note: 'We treat your newsletter as an editorial publication: a recognizable visual identity, rigorous reporting, and companion assets built inside the app.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn Newsletters & WeChat articles',
          heading: 'Named LinkedIn Newsletters & WeChat Official Account columns',
          lead: 'Formatted for mobile reading, inbox notifications, and high completion rates.',
          body: [
            'We design the publication masthead, issue cover system, and recurring rubric structure for LinkedIn Newsletters (published from your company page or an executive profile) and WeChat Official Account push articles.',
            'Every edition includes custom cover artwork, clean subheads, inline charts or pull-quotes, and clear calls to action that route readers to your site, webinar, or product page.',
          ],
          tags: ['LinkedIn Newsletters', 'WeChat Official Account push', 'Cover masthead system', 'Inline diagrams & charts', 'Subscriber growth hooks'],
          image: '/Images/wechat-hero.jpg',
          alt: 'Hand holding a smartphone in warm daylight displaying a realistic WeChat Official Account long-form article with embedded photography.',
        },
        {
          label: 'App screenshot · Campaign brief & document synthesis',
          heading: 'Grounded in your research via Campaigns & Skills',
          lead: 'Draft with AI reads up to 20 source documents in your Campaign folder while our editors shape the argument.',
          body: [
            'In hubStudio Campaigns, we attach your whitepapers, product specs, interview transcripts, and market notes under one brief. When our writers build companion posts for LinkedIn, Facebook, or X, the app reads those documents directly and follows your custom editorial Skills.',
            'No generic AI filler or hallucinated stats: every claim traces back to your approved source material and passes human editorial sign-off.',
          ],
          tags: ['Up to 20 source documents', 'Custom editorial Skills', 'Campaign-linked drafting', 'Zero generic filler', 'Fact-checked copy'],
          shot: appShots.campaignPage,
          path: '/campaigns',
          caption: 'A campaign page in hubStudio: keep the editorial brief, source PDFs, cover art, and companion posts under one name.',
        },
        {
          label: 'Studio lifestyle · Custom editorial illustration & infographics',
          heading: 'Bespoke cover art, diagrams & html email editions',
          lead: 'Every issue looks like a magazine column, not a wall of plain text.',
          body: [
            'Readers judge an essay before reading the first sentence. Our art directors and illustrators create a signature visual language for your series: consistent cover treatments, data visualizations, annotated screenshots, and optional HTML email versions for your CRM list.',
          ],
          tags: ['Series visual identity', 'Data visualization', 'Editorial illustration', 'HTML newsletter companion', 'Art director sign-off'],
          image: '/Images/emd-p4-build.jpg',
          alt: 'A laptop on a studio desk showing a designed newsletter layout beside a live preview.',
        },
        {
          label: 'App screenshot · Cross-network teaser distribution',
          heading: 'Spin each edition into a full week of social posts',
          lead: 'Turn Tuesday’s flagship newsletter into Wednesday’s carousel and Thursday’s X thread.',
          body: [
            'An editorial series should never live in one tab. Using hubStudio’s publishing modules and Re-purpose workflow, we package each edition into a LinkedIn teaser post, an eight-slide summary carousel, an Instagram visual series, and an X thread where the newsletter link sits in the follow-up post.',
          ],
          tags: ['Teaser carousels', 'X thread adaptation', 'Follow-up link placement', 'Multi-account scheduling', 'Validation workflow'],
          shot: appShots.xKnobs,
          path: '/social/x/posts',
          caption: 'X in hubStudio: turn a long-form edition into a structured thread and place the newsletter link in the follow-up post.',
        },
      ],
    },
    proof: {
      note: 'Editorial series assets alternating between live platform screens, hubStudio app workflows, and studio layout rooms.',
      samples: [
        {
          src: '/Images/soc-plat-newsletter.jpg',
          alt: 'Laptop showing a realistic LinkedIn Newsletter issue on a walnut studio desk.',
          brand: 'LinkedIn Newsletter',
          kind: 'Platform · Flagship edition',
        },
        {
          src: appShots.campaignPage.src,
          alt: appShots.campaignPage.alt,
          brand: 'Editorial Campaign Hub',
          kind: 'App · Brief & source docs',
          isApp: true,
        },
        {
          src: '/Images/edr-hero.jpg',
          alt: 'An open editorial report and layout proofs on a warm walnut desk.',
          brand: 'Series Art Direction',
          kind: 'Studio · Visual system',
        },
        {
          src: '/Images/wechat-hero.jpg',
          alt: 'Smartphone displaying a realistic WeChat Official Account long-form article.',
          brand: 'WeChat Long-Form',
          kind: 'Platform · China editorial',
        },
        {
          src: appShots.xKnobs.src,
          alt: appShots.xKnobs.alt,
          brand: 'X Thread Distribution',
          kind: 'App · Companion thread',
          isApp: true,
        },
        {
          src: '/Images/pr-hero.jpg',
          alt: 'An editor reviewing a printed multi-page draft at a sunlit newsroom desk.',
          brand: 'Editorial Desk',
          kind: 'Studio · Senior writers',
        },
      ],
    },
    source: {
      kicker: 'Trilingual editorial desk',
      headingLine1: 'Written natively in English,',
      headingLine2Pre: 'French, and ',
      headingSerif: 'Chinese',
      headingLine2Post: '.',
      lead: 'A thought-leadership essay translated word-for-word by a machine reads like a manual. Our editorial series are written or transcreated by native journalists and copywriters.',
      paragraphs: [
        'Many of our clients publish an English LinkedIn Newsletter for global buyers, a French edition for Europe, and a WeChat Official Account series for Mainland China. Rather than running literal translations, our writers adapt the examples, industry references, and opening hooks to what resonates in each market.',
        'All three language streams sit inside your hubStudio workspace so headquarters can see every edition, cover visual, and companion post before publication.',
      ],
      quietNote: 'Publish weekly, bi-weekly, or monthly. We build the editorial calendar around your subject-matter experts’ availability.',
      creds: ['LinkedIn Company & Executive Newsletters', 'WeChat Official Account series', 'X & Threads essay series', 'Companion HTML email design'],
      mainImage: '/Images/soc-plat-newsletter.jpg',
      mainAlt: 'Laptop on a walnut desk showing a LinkedIn Newsletter interface.',
      insetImage: '/Images/wechat-sample-a.jpg',
      insetAlt: 'Close-up of a WeChat editorial card layout.',
      statNum: '1 -> 5',
      statCap: 'One flagship essay fuels five social formats',
    },
    process: {
      headingLine1: 'How we run a recurring',
      headingLine2Pre: 'publication ',
      headingSerif: 'every week',
      headingLine2Post: '.',
      lede: 'Your experts give us twenty minutes on a call or drop rough voice notes. We turn that into a finished publication and a week of social distribution.',
      note: 'Every edition’s cover art, diagrams, and companion posts are approved in Validation before release.',
      steps: [
        {
          short: 'Series bible',
          tier: 'Studio · Format design',
          title: 'Define the editorial angle, name, and visual masthead',
          body: 'We lock the newsletter’s premise, target reader, section rubrics, cover template system, and tone-of-voice rules.',
          image: '/Images/cs-strategy-room.jpg',
          alt: 'A strategy room wall pinned with editorial rubrics and visual masthead concepts.',
        },
        {
          short: 'Source & Skills',
          tier: 'App · Campaigns & Skills',
          title: 'Load source material into Campaigns and set voice Skills',
          body: 'Transcripts from a 20-minute expert call, research PDFs, and product notes go into a hubStudio Campaign alongside your custom writing Skill.',
          shot: appShots.mySkills,
          path: '/skills',
          caption: 'My Skills in hubStudio: store your publication’s structure, tone rules, and formatting preferences.',
        },
        {
          short: 'Draft & illustrate',
          tier: 'Studio · Writing & Art',
          title: 'Write the flagship issue and design custom cover & charts',
          body: 'A senior writer drafts the essay while an art director creates the issue cover, inline diagrams, and companion carousel slides.',
          image: '/Images/pr-newsroom.jpg',
          alt: 'A writer and designer reviewing an illustrated article draft at a sunlit desk.',
        },
        {
          short: 'Approve in app',
          tier: 'App · Validation',
          title: 'Sign off on the essay and companion posts in Validation',
          body: 'Your team reviews the article, cover artwork, and teaser posts in one Validation thread, with full version tracking.',
          shot: appShots.validationSend,
          path: '/validation',
          caption: 'Validation in hubStudio: send the issue cover and companion posts to stakeholders for sign-off.',
        },
        {
          short: 'Publish & amplify',
          tier: 'Platform · Subscriber push',
          title: 'Release the issue and schedule the week’s teaser posts',
          body: 'The newsletter goes live to subscribers on LinkedIn or WeChat while companion carousels and threads roll out across your connected feeds.',
          image: '/Images/soc-plat-newsletter.jpg',
          alt: 'Laptop displaying a published LinkedIn Newsletter edition.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Draft from your campaigns in the app, or hire our ',
      accent: 'editorial desk',
      post: '.',
      intro: 'Inside the hubStudio app, Campaigns and Skills help your team draft posts from up to 20 source documents and design cover visuals. When you want a turnkey publication written by senior editors and illustrated by art directors, our studio runs the series.',
      inAppBody: [
        'Organize research PDFs and briefs in Campaigns, encode your editorial style in Skills, generate issue covers in the Image studio, and schedule companion posts across LinkedIn, Instagram, Facebook, TikTok (Beta), and X.',
      ],
      fromStudioBody: [
        'Our writers interview your experts, write the long-form LinkedIn Newsletter or WeChat Official Account article, design bespoke cover illustrations and inline charts, and build the entire week’s companion carousels and threads.',
      ],
      shot: appShots.campaignPost,
      shotPath: '/social/linkedin/posts',
      shotCaption: 'Draft from a Campaign in hubStudio: pull context from up to 20 documents to write companion posts.',
      links: [
        { label: 'Ebooks & digital reports', href: '/services/design/ebook-digital-reports' },
        { label: 'Email design service', href: '/services/design/email-design' },
        { label: 'Campaigns in the app', href: '/app/campaigns' },
        { label: 'WeChat platform solutions', href: '/solutions/platforms/wechat' },
      ],
      ways: { pre: 'Choose who runs your ', accent: 'editorial series', post: '.' },
    },
    faqs: [
      {
        q: 'Should we publish our LinkedIn Newsletter from the company page or a founder’s profile?',
        a: 'Both work, and they serve different goals. An executive-hosted newsletter often grows subscribers faster because personal profiles carry strong feed distribution, while a company-page newsletter builds an institutional asset that outlasts any single role. We often run both or help you pick the right anchor.',
      },
      {
        q: 'How much time do our subject-matter experts need to give you?',
        a: 'About twenty minutes every two weeks. A recorded voice call or a rough bullet brief is enough for our writers to research, structure, and draft the full edition in your voice.',
      },
      {
        q: 'Can the same series run as an email newsletter and a WeChat article?',
        a: 'Yes. We frequently deliver each issue in three coordinated formats: a LinkedIn Newsletter edition, an HTML email template for your CRM, and a native WeChat Official Account article for China.',
        link: { match: 'HTML email template', href: '/services/design/email-design' },
      },
      {
        q: 'How does Draft with AI in Campaigns handle our internal documents?',
        a: 'When you link a Campaign in hubStudio, Draft with AI reads the campaign brief, the file list, and the text of up to 20 attached documents. It reads file names and prompts, never private image pixels, keeping your drafts grounded in your real materials.',
        link: { match: 'Campaign', href: '/help/campaigns' },
      },
      {
        q: 'Do you create custom charts and diagrams for each issue?',
        a: 'Yes. Every studio-produced newsletter includes a custom cover visual and inline diagrams or data cards sized for both desktop reading and mobile carousels.',
      },
      {
        q: 'What if we want to test a four-issue mini-series first?',
        a: 'A four-part editorial mini-series is one of our most popular project scopes. You get the series identity, four full issues, and twenty companion social posts without committing to an annual retainer.',
      },
    ],
    closing: {
      titleLine1: 'Launch a series worth',
      titleSerif: 'subscribing to.',
      body: 'Tell us the topic you want to own in your category. Within 48 hours we return a written proposal with series concepts, visual direction, and an issue-by-issue production plan.',
    },
  },

  /* =========================================================================
   * 4. LIVE EVENTS & WEBINARS
   * ========================================================================= */
  {
    slug: 'live-events-webinars',
    frSlug: 'evenements-en-direct-et-webinaires',
    group: 'Content & Pages',
    name: 'Live events & webinars',
    metaTitle: 'Social Live Events, Webinars & Video Repurposing Service | hubStudio',
    metaDescription:
      'End-to-end social creative and promotion for LinkedIn Live, webinars, trade shows, and Douyin/WeChat livestreams, plus post-event short video repurposing.',
    serviceType: 'Social media live events, webinars, and post-event video repurposing',
    hero: {
      line1: 'Live Events',
      line2: '& Social',
      serifLine: 'webinars.',
      tagPre: 'Fill the room before you go live. ',
      tagEm: 'Multiply',
      tagPost: ' the recording after.',
      lead: [
        'Most companies spend weeks preparing a webinar, LinkedIn Live, or trade-show keynote, promote it with two last-minute banners, and let the sixty-minute recording gather dust on an unlisted link.',
        'We run the full social arc around your live moments: pre-event registration campaigns, speaker cards, stage decks, and live graphics, followed by rapid post-event repurposing that turns one recording into ten vertical Shorts, Reels, carousels, and recap articles inside hubStudio.',
      ],
      image: '/Images/soc-plat-live-event.jpg',
      alt: 'A 27-inch studio monitor on an oak table displaying a realistic LinkedIn Live and Webinar broadcast screen with two speakers and live attendee chat.',
      chipPre: 'Platform UI',
      chipPost: 'LinkedIn Live broadcast',
    },
    why: {
      titleLine1: 'A one-hour broadcast is',
      titleSerif: 'a month',
      titlePost: ' of social fuel.',
      paragraphs: [
        'Getting two executives or a customer on camera for forty-five minutes is the hardest part of B2B and brand marketing. Yet without a pre-event countdown calendar and a post-event clipping pipeline, ninety percent of the value evaporates the moment the broadcast ends.',
        'In hubStudio, we pair studio art direction before the event with Shorts autopilot and our video editors right after it. Within 72 hours of your broadcast, the best ninety-second moments are framed at 9:16, captioned word by word, and queued across LinkedIn, Instagram Reels, TikTok (Beta), YouTube Shorts, and X.',
      ],
      image: '/Images/douyin-live.jpg',
      alt: 'A hand holding a smartphone displaying a realistic Douyin brand livestream with product card and live audience comments.',
      caption: 'Platform UI · Douyin brand livestream room',
      quote:
        'Every 45-minute webinar or live session routinely yields 8 to 12 standalone vertical clips, 2 summary carousels, and a long-form recap article.',
      stats: [
        { from: 0, to: 10, suffix: ' clips', label: 'Vertical Shorts cut per recording', note: 'Framed at 9:16 with timed captions' },
        { from: 0, to: 72, suffix: 'h', label: 'Post-event highlight turnaround', note: 'Cut, captioned, and in Validation' },
        { from: 0, to: 20, suffix: ' accts', label: 'Coordinated speaker & brand promotion', note: 'Scheduled across host and brand feeds' },
      ],
    },
    cover: {
      headingPre: 'Before, during, and ',
      headingSerif: 'after',
      headingPost: ' the broadcast.',
      note: 'We combine platform-native event pages, app-powered video clipping, and studio livestream production across Western and Chinese ecosystems.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn Live & event registration',
          heading: 'Pre-event registration kits & speaker amplification',
          lead: 'Event banners, speaker announcement cards, and countdown teasers that drive sign-ups.',
          body: [
            'A LinkedIn Live, YouTube premiere, or webinar needs a two-week runway. We design the event registration header, personalized speaker promo cards for every guest to post on their own feed, countdown video teasers, and paid social RSVP ads.',
            'All pre-event assets sit in one hubStudio Campaign so your marketing team and guest speakers can pull approved visuals and copy in one click.',
          ],
          tags: ['LinkedIn Event banners', 'Speaker promo kits', 'Countdown video teasers', 'Paid RSVP creatives', 'Host & guest post drafts'],
          image: '/Images/soc-plat-live-event.jpg',
          alt: 'Studio monitor showing a realistic LinkedIn Live broadcast page with speakers and attendee chat.',
        },
        {
          label: 'App screenshot · Shorts autopilot from long recordings',
          heading: 'Turn the recording into 9:16 Shorts in hubStudio',
          lead: 'Shorts autopilot listens to every word, picks the strongest moments, and frames the speaker at 9:16.',
          body: [
            'Drop your webinar or keynote recording into hubStudio. Shorts autopilot transcribes the talk, identifies self-contained insights, crops each clip at 9:16 around the active speaker, and adds timed captions and an on-screen hook line.',
            'Choose YouTube Shorts, TikTok, or Instagram Reels, pick 3, 5, 8, or 10 clips, and let our editors polish the final cuts and thumbnails.',
          ],
          tags: ['Shorts autopilot', 'Speaker face tracking 9:16', '3, 5, 8 or 10 clips', 'Word-by-word captions', 'Hook line overlays'],
          shot: appShots.shortsSettings,
          path: '/files/tools/shorts',
          caption: 'Shorts autopilot in hubStudio: turn a long webinar or interview into captioned 9:16 clips for Reels, TikTok, and Shorts.',
        },
        {
          label: 'Studio lifestyle · Stage decks, lower thirds & China livestreams',
          heading: 'Broadcast graphics, presentation decks & Shanghai live rooms',
          lead: 'On-screen slides and live rooms that look like a network broadcast, not a default webcam grid.',
          body: [
            'Our presentation designers and motion artists build the slide deck your speakers present on screen, custom lower-third overlays, holding slates, and short bumper videos.',
            'In China, where live social is a direct commerce and brand channel on Douyin, WeChat Channels, and RedNote, our Shanghai studio builds and operates physical brand livestream sets with lighting, multi-cam switching, and bilingual producers.',
          ],
          tags: ['Webinar slide decks', 'Broadcast lower thirds', 'Douyin & WeChat live sets', 'Shanghai studio rooms', 'Event highlight reels'],
          image: '/Images/sm-china-main.jpg',
          alt: 'A brand livestream studio set in Shanghai with softboxes, phone tripods, and a calibrated backdrop.',
        },
        {
          label: 'App screenshot · Multi-network post-event scheduling',
          heading: 'Schedule the recap wave across every network',
          lead: 'Roll out clips, quote carousels, and YouTube uploads over the following two weeks.',
          body: [
            'Once your highlight clips and recap carousels are approved in Validation, we schedule them across LinkedIn, Instagram, Facebook, TikTok (Beta), and X, and prepare the full replay and Shorts metadata in the YouTube module for YouTube Studio.',
          ],
          tags: ['Two-week recap wave', 'YouTube replay packaging', 'Recap carousels', 'Validation sign-off', 'Multi-account queue'],
          shot: appShots.youtube,
          path: '/social/youtube/posts',
          caption: 'YouTube in hubStudio: prepare the full webinar replay title, description, and Shorts for YouTube Studio.',
        },
      ],
    },
    proof: {
      note: 'Event and livestream work alternating between platform broadcast screens, hubStudio video tools, and our studio sets.',
      samples: [
        {
          src: '/Images/soc-plat-live-event.jpg',
          alt: 'Monitor showing a realistic LinkedIn Live event broadcast with two speakers.',
          brand: 'LinkedIn Live Roundtable',
          kind: 'Platform · B2B live broadcast',
        },
        {
          src: appShots.shortsSettings.src,
          alt: appShots.shortsSettings.alt,
          brand: 'Shorts Autopilot',
          kind: 'App · Long video to 9:16 clips',
          isApp: true,
        },
        {
          src: '/Images/sm-china-main.jpg',
          alt: 'Shanghai livestream studio set with lighting and camera tripods.',
          brand: 'Shanghai Live Set',
          kind: 'Studio · Broadcast floor',
        },
        {
          src: '/Images/douyin-live.jpg',
          alt: 'Smartphone showing a realistic Douyin brand livestream with product card and comments.',
          brand: 'Douyin Brand Room',
          kind: 'Platform · China livestream',
        },
        {
          src: appShots.videoSave.src,
          alt: appShots.videoSave.alt,
          brand: 'Timed Video Captions',
          kind: 'App · Five caption looks',
          isApp: true,
        },
        {
          src: '/Images/pitch-hero.jpg',
          alt: 'A speaker presenting to colleagues in a warm daylight meeting room.',
          brand: 'Keynote & Webinar Decks',
          kind: 'Studio · Stage presentation',
        },
      ],
    },
    source: {
      kicker: 'Western webinars & China live rooms',
      headingLine1: 'LinkedIn Live in the West.',
      headingLine2Pre: 'Douyin & WeChat ',
      headingSerif: 'live rooms',
      headingLine2Post: ' in China.',
      lead: 'Live social means two very different things depending on the market. Our team produces both.',
      paragraphs: [
        'For Europe and North America, live social centers on thought leadership and lead capture: LinkedIn Live panels, product launch webinars, YouTube premieres, and trade-show booth coverage clipped for social feeds.',
        'For Mainland China, live social is an interactive showroom on Douyin, WeChat Channels, and RedNote. Our Shanghai and Changsha studios build dedicated merchant broadcast rooms, script host run-of-show tables, and cut post-stream highlight clips that feed both organic discovery and paid traffic.',
      ],
      quietNote: 'Running a single quarterly webinar or a weekly livestream room? We scope to your event calendar.',
      creds: ['LinkedIn Live & YouTube Premieres', 'Webinar decks & promo kits', 'Post-event Shorts & carousels', 'Shanghai Douyin & WeChat live sets'],
      mainImage: '/Images/douyin-live.jpg',
      mainAlt: 'Hand holding a smartphone displaying a realistic Douyin livestream room.',
      insetImage: '/Images/vp-hero.jpg',
      insetAlt: 'A director of photography behind a cinema camera on a studio set.',
      statNum: '72 hrs',
      statCap: 'From live broadcast to approved social clips',
    },
    process: {
      headingLine1: 'How we turn one event into',
      headingLine2Pre: 'weeks of ',
      headingSerif: 'momentum',
      headingLine2Post: '.',
      lede: 'Every phase connects studio production with the hubStudio app so speakers, marketers, and approvers stay on one page.',
      note: 'All pre-event promos and post-event clips live under one Campaign name in the app.',
      steps: [
        {
          short: 'Event kit',
          tier: 'Studio · Pre-event creative',
          title: 'Design the registration banners, speaker cards, and stage deck',
          body: 'Two to three weeks before the event, we create the visual identity, registration graphics, speaker share cards, and presentation slides.',
          image: '/Images/presentation-design-hero.jpg',
          alt: 'An open laptop on a studio desk showing a clean keynote presentation slide.',
        },
        {
          short: 'Promo queue',
          tier: 'App · Campaigns & Publish',
          title: 'Organize speaker kits in Campaigns and queue countdown posts',
          body: 'We load every asset into a hubStudio Campaign and schedule the two-week registration push across your brand and speaker accounts.',
          shot: appShots.campaigns,
          path: '/campaigns',
          caption: 'Campaigns in hubStudio: keep all pre-event banners, speaker cards, and post-event clips under one launch.',
        },
        {
          short: 'Live broadcast',
          tier: 'Platform · Event day',
          title: 'Go live on LinkedIn, YouTube, Webinar, or China Channels',
          body: 'Your session goes live with branded lower thirds, stage slides, and real-time social quote cards drafted during the talk.',
          image: '/Images/soc-plat-live-event.jpg',
          alt: 'Monitor showing a live two-speaker LinkedIn broadcast.',
        },
        {
          short: 'Auto-clip & edit',
          tier: 'App · Shorts autopilot',
          title: 'Extract 9:16 highlights and time captions word by word',
          body: 'Immediately after the event, we run the recording through Shorts autopilot and our studio editors to cut 8 to 12 vertical clips and two summary carousels.',
          shot: appShots.videoSave,
          path: '/files/tools/video-editor',
          caption: 'Captions and save in the hubStudio Video editor: five word-by-word caption looks, exported at 1080p.',
        },
        {
          short: 'Post-event wave',
          tier: 'Platform · Always-on',
          title: 'Roll out clips, replays, and recaps across every feed',
          body: 'Once approved in Validation, the clips and carousels publish across LinkedIn, Reels, TikTok (Beta), Shorts, and X over the next two weeks.',
          image: '/Images/meta-ig.jpg',
          alt: 'Smartphone displaying a vertical video highlight clip on Instagram Reels.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Clip your webinars in the app, or have us produce the ',
      accent: 'whole event arc',
      post: '.',
      intro: 'With Shorts autopilot and the Video editor in hubStudio, your team can turn any recorded talk into captioned 9:16 clips in minutes. When you want the registration kit, speaker deck, live graphics, and post-event wave handled end to end, our studio takes the brief.',
      inAppBody: [
        'Use Shorts autopilot to cut long videos into 3, 5, 8, or 10 vertical clips framed at 9:16 around the speaker. Fine-tune trims and word-by-word captions in the free browser Video editor, group everything in a Campaign, and schedule to up to 20 accounts.',
      ],
      fromStudioBody: [
        'Our designers build the event banners, speaker share kits, and presentation decks before the broadcast, and our editors cut, grade, and package the post-event video clips, carousels, and recap articles within 72 hours.',
      ],
      shot: appShots.shortsSettings,
      shotPath: '/files/tools/shorts',
      shotCaption: 'Shorts autopilot in hubStudio: pick YouTube Shorts, TikTok, or Instagram Reels and choose how many clips to cut.',
      links: [
        { label: 'Video tools in the app', href: '/app/video-tools' },
        { label: 'Long video to Shorts guide', href: '/resources/how-to/long-video-to-shorts' },
        { label: 'Presentation design service', href: '/services/design/presentation-design' },
        { label: 'Douyin platform solutions', href: '/solutions/platforms/douyin' },
      ],
      ways: { pre: 'Pick who runs your ', accent: 'event content', post: '.' },
    },
    faqs: [
      {
        q: 'How does Shorts autopilot work on a webinar recording?',
        a: 'Shorts autopilot listens to the full audio track, selects standalone moments that work as short clips, frames the video at 9:16 around the person speaking, and adds word-by-word captions plus a hook title. It is a paid run from your prepaid balance that shows its exact price before starting.',
        link: { match: 'Shorts autopilot', href: '/help/shorts-autopilot' },
      },
      {
        q: 'Can you also design the slide deck our speakers use during the webinar?',
        a: 'Yes. Because our studio also runs Presentation Design and Motion Design, the same art director who creates your LinkedIn Event banners can design your keynote or webinar slides so the broadcast looks cohesive.',
        link: { match: 'Presentation Design', href: '/services/design/presentation-design' },
      },
      {
        q: 'How fast do we get the social clips after a live event?',
        a: 'Within 48 to 72 hours of receiving the recording, we place the first batch of vertical Shorts, quote cards, and recap carousels into your hubStudio Validation queue.',
      },
      {
        q: 'Can you prepare shareable kits for guest speakers and sponsors?',
        a: 'Yes. We create individualized speaker cards and pre-written post drafts for each guest or sponsor, organized inside a hubStudio Campaign or exported as a clean speaker pack.',
      },
      {
        q: 'Do you run physical livestreams in China?',
        a: 'Yes. Our studios in Shanghai and Changsha build and operate brand livestream rooms for Douyin, WeChat Channels, and RedNote, including set design, lighting, local hosts, and real-time moderation.',
      },
      {
        q: 'Can we hire you for a single flagship conference or product launch event?',
        a: 'Yes. Event packages are frequently scoped per project around a single trade show, webinar series, or annual user conference.',
      },
    ],
    closing: {
      titleLine1: 'Make your next live event',
      titleSerif: 'last all quarter.',
      body: 'Send us the date and topic of your next webinar, LinkedIn Live, or trade show. Within 48 hours we return a written proposal covering pre-event promotion, broadcast assets, and post-event video repurposing.',
    },
  },

  /* =========================================================================
   * 5. CAMPAIGN SETUP & FUNNELS
   * ========================================================================= */
  {
    slug: 'campaign-setup-funnels',
    frSlug: 'configuration-de-campagnes-et-tunnels',
    group: 'Paid Social & Ads',
    name: 'Campaign setup & funnels',
    metaTitle: 'Paid Social Campaign Setup & Funnel Architecture | hubStudio',
    metaDescription:
      'Full-funnel paid social campaign setup across LinkedIn Campaign Manager, Meta Ads, TikTok, X, and China ad platforms, paired with hubStudio Campaign workflows.',
    serviceType: 'Paid social campaign setup and funnel architecture',
    hero: {
      line1: 'Campaign',
      line2: 'Setup &',
      serifLine: 'funnels.',
      tagPre: 'Paid social funnels built cleanly, ',
      tagEm: 'billed straight',
      tagPost: ' to your own ad account.',
      lead: [
        'Most wasted ad spend happens before the first impression is served: messy campaign hierarchies, broken conversion events, cold traffic dropped onto generic homepages, and one fatigued creative format asked to do the job of an entire funnel.',
        'We structure and launch your paid social funnels across LinkedIn Campaign Manager, Meta Ads Manager, TikTok Ads, X, and Chinese ad platforms, while organizing every brief, landing asset, and ad creative inside hubStudio Campaigns.',
      ],
      image: '/Images/linkedin-ads.jpg',
      alt: 'An external monitor on a sunlit Shanghai studio desk displaying a realistic LinkedIn Campaign Manager creative library and media plan.',
      chipPre: 'Platform UI',
      chipPost: 'LinkedIn Campaign Manager',
    },
    why: {
      titleLine1: 'Structure decides what',
      titleSerif: 'the algorithm',
      titlePost: ' learns.',
      paragraphs: [
        'Modern social ad platforms rely on clean conversion signals and distinct funnel stages. When cold awareness, mid-funnel proof, and bottom-of-funnel lead capture are lumped into one ad set with two static banners, the delivery algorithm starves.',
        'We pair ad-account engineering with studio creative production. Your media budget stays in your own ad accounts with zero hidden margin on spend, while our strategists and art directors build the campaign hierarchy, conversion tracking, and stage-by-stage creative assets.',
      ],
      image: '/Images/ms-hero.jpg',
      alt: 'A marketing strategist working on a multi-market funnel plan at a long oak table in a sunlit Shanghai studio.',
      caption: 'Studio lifestyle · Funnel planning and media architecture',
      quote:
        'A clean three-stage funnel with distinct creative formats per stage consistently outperforms single-layer boosting on both cost per lead and downstream pipeline quality.',
      stats: [
        { from: 0, to: 3, suffix: ' stages', label: 'Top, mid & bottom-of-funnel creative', note: 'Matched to buyer intent on each feed' },
        { from: 0, to: 0, suffix: '% markup', label: 'Direct ad spend on your own accounts', note: 'You pay the networks directly' },
        { from: 0, to: 48, suffix: 'h', label: 'Funnel blueprint & written proposal', note: 'Architecture, formats, and timeline' },
      ],
    },
    cover: {
      headingPre: 'Ad-account structure meets ',
      headingSerif: 'creative',
      headingPost: ' organization.',
      note: 'We align what happens inside LinkedIn and Meta ad managers with how your assets and briefs are organized inside the hubStudio app.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn & Meta campaign hierarchies',
          heading: 'Account structure, naming taxonomy & conversion signals',
          lead: 'Clean campaign groups, pixel and CAPI verification, and UTM governance from day one.',
          body: [
            'We set up or audit your LinkedIn Campaign Manager, Meta Business Suite, and TikTok Ads Manager accounts: campaign objectives by funnel stage, clean naming conventions so reports actually make sense, UTM parameter templates, and conversion event checks.',
            'Because media is billed directly to your company’s payment method on each platform, you have total transparency over every impression and click.',
          ],
          tags: ['LinkedIn Campaign Manager', 'Meta Ads Manager', 'TikTok Spark & feed ads', 'UTM & pixel taxonomy', 'Direct ad-account billing'],
          image: '/Images/linkedin-sample-sponsored.jpg',
          alt: 'Laptop on a sunlit desk showing a realistic LinkedIn Campaign Manager ad preview and campaign setup sidebar.',
        },
        {
          label: 'App screenshot · Campaigns module in hubStudio',
          heading: 'Every launch’s brief, renders & posts under one Campaign',
          lead: 'No more hunting across folders to find which video belongs to the Q3 funnel.',
          body: [
            'Inside the hubStudio app, every launch gets its own Campaign card holding its brief, reference documents, generated images, video cuts, and social posts. Creating a campaign costs nothing and copies no files: it points directly at your Assets Library.',
            'When a file is updated to v2 in the library, the new version stays linked inside every campaign that uses it.',
          ],
          tags: ['hubStudio Campaigns', 'Brief + asset grouping', 'Campaign filter in Library', 'Version-linked assets', 'Free module in the app'],
          shot: appShots.campaigns,
          path: '/campaigns',
          caption: 'Campaigns in hubStudio: see every launch’s brief, pictures, videos, and posts counted by type.',
        },
        {
          label: 'Studio lifestyle · Full-funnel creative & landing alignment',
          heading: 'Stage-specific creative: thumb-stoppers, proof & lead capture',
          lead: 'Cold prospects get category hooks; warm prospects get case studies, demos, and offers.',
          body: [
            'A funnel only works when the message evolves. For top-of-funnel reach, our studio produces 9:16 vertical videos and bold editorial hooks. For mid-funnel consideration, we build product carousels, customer proof cards, and Thought Leader Ads. For bottom-of-funnel conversion, we design high-clarity offer creatives and native Lead Gen forms.',
          ],
          tags: ['Top-of-funnel video hooks', 'Mid-funnel proof carousels', 'Thought Leader Ad setup', 'Native Lead Gen forms', 'Landing page visual match'],
          image: '/Images/ac-hero.jpg',
          alt: 'Overhead view of a creative workspace with a smartphone showing a vertical video ad beside printed storyboards.',
        },
        {
          label: 'App screenshot · Client Validation before launch',
          heading: 'Sign off on every funnel creative in Validation',
          lead: 'Approve the exact visual, headline, and landing link before any budget is turned on.',
          body: [
            'Before our media team activates a campaign in your ad manager, every ad variant and organic companion post goes through Validation in the hubStudio app. Stakeholders comment on one thread, compare versions, and lock the final launch set.',
          ],
          tags: ['Pre-launch sign-off', 'Permanent approval trail', 'Client logins included', 'Multi-market review', 'Zero surprise launches'],
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: review and approve every ad creative and caption before the funnel goes live.',
        },
      ],
    },
    proof: {
      note: 'Paid social funnel setup alternating between real ad manager screens, hubStudio Campaign views, and studio strategy desks.',
      samples: [
        {
          src: '/Images/linkedin-ads.jpg',
          alt: 'Studio monitor showing LinkedIn Campaign Manager with active ad creatives and media plan notes.',
          brand: 'LinkedIn Funnel Setup',
          kind: 'Platform · Campaign Manager',
        },
        {
          src: appShots.campaigns.src,
          alt: appShots.campaigns.alt,
          brand: 'Campaign Overview',
          kind: 'App · Launch organization',
          isApp: true,
        },
        {
          src: '/Images/ms-p2-map.jpg',
          alt: 'Strategists mapping a cross-channel conversion funnel on a studio table.',
          brand: 'Funnel Architecture',
          kind: 'Studio · Media strategy',
        },
        {
          src: '/Images/meta-ads.jpg',
          alt: 'A media strategist reviewing a Meta Ads Manager creative grid on a desktop monitor.',
          brand: 'Meta Ads Hierarchy',
          kind: 'Platform · Ads Manager',
        },
        {
          src: appShots.campaignFilter.src,
          alt: appShots.campaignFilter.alt,
          brand: 'Library Campaign Filter',
          kind: 'App · Asset taxonomy',
          isApp: true,
        },
        {
          src: '/Images/douyin-ads.jpg',
          alt: 'A laptop screen showing a China short-video ad placement and conversion metrics.',
          brand: 'Ocean Engine & JuGuang',
          kind: 'Platform · China paid funnel',
        },
      ],
    },
    source: {
      kicker: 'Western & China paid ecosystems',
      headingLine1: 'LinkedIn & Meta in the West.',
      headingLine2Pre: 'Ocean Engine & JuGuang ',
      headingSerif: 'in China',
      headingLine2Post: '.',
      lead: 'Funnel mechanics change completely when you cross from Western feeds into Chinese super-apps.',
      paragraphs: [
        'On LinkedIn and Meta, funnels typically move from feed video and carousels into native Lead Gen forms or external landing pages. On RedNote (JuGuang), Douyin (Ocean Engine), and WeChat Ads, conversion often happens inside the ecosystem itself: search-keyword capture on RedNote, livestream or Tmall store routing on Douyin, and Mini-Program or WeCom lead capture on WeChat.',
        'Our strategists in Paris, Hong Kong, and Shanghai build native funnel architectures for each side so you never force a Western landing-page funnel onto a Chinese buyer.',
      ],
      quietNote: 'We never mark up your media spend. Our fee covers setup, creative production, and ongoing management.',
      creds: ['LinkedIn Campaign Manager', 'Meta & TikTok Ads Manager', 'RedNote JuGuang & Douyin Ocean Engine', 'WeChat Moment & Official Account Ads'],
      mainImage: '/Images/meta-ads.jpg',
      mainAlt: 'A strategist at a sunlit desk reviewing Meta Ads Manager campaigns on a widescreen monitor.',
      insetImage: '/Images/linkedin-sample-sponsored.jpg',
      insetAlt: 'Close-up of a LinkedIn Campaign Manager sponsored post preview.',
      statNum: '100%',
      statCap: 'Media billed directly to your own ad accounts',
    },
    process: {
      headingLine1: 'From blank ad account to',
      headingLine2Pre: 'a live, tracked ',
      headingSerif: 'funnel',
      headingLine2Post: '.',
      lede: 'We set up the measurement, the campaign hierarchy, the hubStudio workspace, and the creative variants in one coordinated sprint.',
      note: 'You keep admin access to every ad account, pixel, and hubStudio Campaign.',
      steps: [
        {
          short: 'Funnel blueprint',
          tier: 'Studio · Strategy',
          title: 'Map stages, offers, budgets, and conversion events',
          body: 'We audit your current ad accounts and landing flow, then design a three-stage funnel blueprint with clear KPIs per stage.',
          image: '/Images/ms-p1-brief.jpg',
          alt: 'A strategist reviewing a printed funnel blueprint and media plan at a wooden desk.',
        },
        {
          short: 'Campaign workspace',
          tier: 'App · Campaigns',
          title: 'Create the Campaign in hubStudio and load the brief',
          body: 'Every asset,landing page spec, and copy brief goes into a dedicated hubStudio Campaign so creatives and media buyers work from one source.',
          shot: appShots.campaignPage,
          path: '/campaigns',
          caption: 'A campaign’s page in hubStudio: brief on top, every creative asset and post linked below.',
        },
        {
          short: 'Creative build',
          tier: 'Studio · Production',
          title: 'Produce top, mid, and bottom-of-funnel ad sets',
          body: 'Our art directors and video editors produce the vertical hooks, proof carousels, and offer cards sized for each placement.',
          image: '/Images/ac-p3-produce.jpg',
          alt: 'An art director reviewing ad creative variants on a studio monitor.',
        },
        {
          short: 'Validation & QA',
          tier: 'App · Review',
          title: 'Approve every ad creative and link in Validation',
          body: 'Your team signs off on every visual and headline inside hubStudio Validation while our media team verifies UTMs and tracking pixels.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: lock the approved creative set before any ad spend starts.',
        },
        {
          short: 'Launch & pace',
          tier: 'Platform · Ad managers',
          title: 'Go live in LinkedIn, Meta, TikTok, or China ad managers',
          body: 'Campaigns launch inside your ad accounts with daily pacing checks, stage-by-stage frequency caps, and weekly creative rotation.',
          image: '/Images/linkedin-ads.jpg',
          alt: 'Monitor showing active campaigns inside LinkedIn Campaign Manager.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Organize your launch in the app, and let us engineer the ',
      accent: 'paid funnel',
      post: '.',
      intro: 'hubStudio Campaigns, the Image and Video studios, and Validation give your team a clean workspace to prepare launch assets. Add our studio and media specialists to build the ad-account architecture, conversion tracking, and full-funnel creative matrix.',
      inAppBody: [
        'Group all launch renders, videos, posts, and documents in Campaigns (free to use). Produce and crop visuals for every placement, check video safe zones for Instagram, TikTok, and Facebook, and collect stakeholder sign-off in Validation.',
      ],
      fromStudioBody: [
        'Our paid-social strategists and art directors configure your LinkedIn, Meta, TikTok, and China ad accounts, verify conversion events and UTMs, produce the stage-by-stage creative variants, and manage daily pacing on your own ad accounts.',
      ],
      shot: appShots.campaigns,
      shotPath: '/campaigns',
      shotCaption: 'Campaigns in hubStudio: keep every funnel’s brief, visuals, and posts organized in one place.',
      links: [
        { label: 'Campaigns in the app', href: '/app/campaigns' },
        { label: 'Ad creative service', href: '/services/design/ad-creative' },
        { label: 'Marketing strategy service', href: '/services/design/marketing-strategy' },
        { label: 'Meta platform solutions', href: '/solutions/platforms/meta' },
      ],
      ways: { pre: 'Choose how we build your ', accent: 'campaigns', post: '.' },
    },
    faqs: [
      {
        q: 'Do we pay the networks directly for media spend?',
        a: 'Yes. All ad spend is billed directly to your own credit card or invoice line inside LinkedIn Campaign Manager, Meta Ads, TikTok Ads, or your China ad accounts. We never mark up media spend.',
      },
      {
        q: 'Can you audit and fix an existing ad account instead of starting from scratch?',
        a: 'Yes. Most engagements begin by auditing your existing campaign groups, pixel/Conversions API health, audience exclusions, and creative fatigue, keeping historical pixel data intact while cleaning up the structure.',
      },
      {
        q: 'How does the Campaigns module in the hubStudio app connect to paid social?',
        a: 'In the hubStudio app, Campaigns organizes all the files, briefs, and organic posts for a launch under one name. Our team uses that same Campaign workspace to deliver and validate all paid ad creatives before uploading them to your ad managers.',
        link: { match: 'Campaigns', href: '/app/campaigns' },
      },
      {
        q: 'Do you also design or update the landing pages the ads point to?',
        a: 'Yes. If your funnel routes traffic to a web page instead of a native Lead Gen form, our Website Design team can design and build matching landing pages so visual scent and conversion rate hold.',
        link: { match: 'Website Design', href: '/services/design/website-design' },
      },
      {
        q: 'Which platforms do you set up paid funnels on?',
        a: 'We set up and run funnels on LinkedIn, Instagram, Facebook, TikTok, X, and YouTube in Western markets, as well as RedNote (JuGuang), Douyin (Ocean Engine), WeChat, and Weibo in China.',
      },
      {
        q: 'Can we hire you just for the initial campaign setup and creative pack?',
        a: 'Yes. You can scope a one-time funnel setup and launch creative pack as a fixed project, then either hand daily management to your internal team or keep us on a monthly retainer.',
      },
    ],
    closing: {
      titleLine1: 'Build a funnel where',
      titleSerif: 'every stage converts.',
      body: 'Share your product, target markets, and current ad setup. Within 48 hours we return a written funnel proposal covering account architecture, stage-by-stage creative deliverables, and timeline.',
    },
  },

  /* =========================================================================
   * 6. AUDIENCE TARGETING & RETARGETING
   * ========================================================================= */
  {
    slug: 'audience-targeting-retargeting',
    frSlug: 'ciblage-d-audience-et-reciblage',
    group: 'Paid Social & Ads',
    name: 'Audience targeting & retargeting',
    metaTitle: 'Social Audience Targeting & Retargeting Service | hubStudio',
    metaDescription:
      'Precision B2B and B2C social audience segmentation, matched account lists, retargeting pools, and persona-tailored creative built inside hubStudio.',
    serviceType: 'Social media audience targeting, retargeting, and persona creative adaptation',
    hero: {
      line1: 'Audience',
      line2: 'Targeting &',
      serifLine: 'retargeting.',
      tagPre: 'Reach the right buyer segment, and ',
      tagEm: 'change the creative',
      tagPost: ' when they come back.',
      lead: [
        'Targeting and creative are now two halves of the same lever. Even the sharpest LinkedIn account list or Meta lookalike pool burns out in ten days if every segment sees the exact same message, or if returning visitors are followed around the web by the awareness ad they already clicked.',
        'We build precision audience architectures and retargeting sequences across LinkedIn, Meta, TikTok, X, and China platforms, paired with segment-specific creative produced and validated in hubStudio.',
      ],
      image: '/Images/soc-plat-audience-retargeting.jpg',
      alt: 'A laptop on a sunlit walnut strategist desk displaying a realistic social ad manager Audience Targeting and Retargeting interface with segment filters.',
      chipPre: 'Platform UI',
      chipPost: 'Audience & Retargeting Builder',
    },
    why: {
      titleLine1: 'Retargeting fails when it',
      titleSerif: 'repeats',
      titlePost: ' the first ad.',
      paragraphs: [
        'Look inside most B2B and eCommerce ad accounts and you will find a retargeting ad set that serves the exact same top-of-funnel video to people who already visited the pricing page. Frequency climbs past eight, click-through collapses, and prospects tune the brand out.',
        'Because our media planners sit at the same table as our AIGC and design studio, every audience segment gets creative built for its exact context: role-specific hooks for cold segments, competitive proof for 50% video viewers, and concrete case studies for pricing-page visitors.',
      ],
      image: '/Images/meta-ads.jpg',
      alt: 'A strategist analyzing audience segments and creative performance on a widescreen monitor in a Shanghai studio.',
      caption: 'Platform UI · Segment-by-segment creative matrix in Ads Manager',
      quote:
        'Matching retargeting creative to what the visitor actually did (watched half a video, read a case study, or viewed a product page) lifts conversion efficiency while keeping ad frequency healthy.',
      stats: [
        { from: 0, to: 4, suffix: ' pools', label: ' sequenced retargeting windows', note: 'Video viewers, engagers, site & high-intent' },
        { from: 0, to: 100, suffix: '%', label: 'Clean audience exclusions', note: 'Stop paying to reach existing customers' },
        { from: 0, to: 3, suffix: 'x', label: 'Persona angles per core asset', note: 'Tailored in hubStudio without a new shoot' },
      ],
    },
    cover: {
      headingPre: 'Four layers of ',
      headingSerif: 'precision',
      headingPost: ' targeting.',
      note: 'From ABM company lists on LinkedIn to algorithmic seed signals on Meta and TikTok, we pair audience architecture with persona-adapted creative.',
      lanes: [
        {
          label: 'Platform screenshot · B2B ABM & consumer audience pools',
          heading: 'Matched account lists, job-function layers & broad-signal seeds',
          lead: 'Firmographic precision on LinkedIn; clean first-party signals on Meta and TikTok.',
          body: [
            'On LinkedIn, we build layered B2B segments combining uploaded ABM company lists, seniority, job function, and industry exclusions so budget concentrates on actual decision-makers and buying committees.',
            'On Meta and TikTok, where algorithmic targeting relies on first-party seeds and creative hooks, we configure clean customer-list lookalikes, high-value purchaser seeds, and strict customer exclusions.',
          ],
          tags: ['LinkedIn Matched Audiences', 'ABM company lists', 'First-party lookalikes', 'Buying-committee layers', 'Exclusion hygiene'],
          image: '/Images/soc-plat-audience-retargeting.jpg',
          alt: 'Laptop screen on a walnut desk showing a realistic social ad manager Audience Targeting and Retargeting interface.',
        },
        {
          label: 'App screenshot · Persona adaptation in the Image editor',
          heading: 'Adapt one visual for three buyer personas in hubStudio',
          lead: 'Same brand asset, tailored headline, crop, and callout for each audience segment.',
          body: [
            'A CFO, a VP of Marketing, and a technical buyer care about different numbers in the same product. Using the hubStudio Image studio and Image editor, our team adapts a core visual into persona-specific variants with tailored typography, callout boxes, and crops.',
            'Every variant is stored cleanly in the Assets Library and tagged to its target campaign so media buyers never mix up segments.',
          ],
          tags: ['Persona headline variants', 'Image editor callouts', 'Multi-ratio crops', 'Library tag organization', 'Versioned creative sets'],
          shot: appShots.editorDraw,
          path: '/files/tools/image-editor',
          caption: 'Draw and write in the hubStudio Image editor: add editable captions, callouts, and brand logos for each audience segment.',
        },
        {
          label: 'Studio lifestyle · Sequenced retargeting narratives',
          heading: 'Time-window retargeting that advances the conversation',
          lead: 'Day 1–14 sees customer proof; Day 15–30 sees an executive teardown or concrete offer.',
          body: [
            'We map your retargeting pools by behavior and recency: 50%+ video viewers, company page visitors, Lead Gen form openers who did not submit, and high-intent website visitors.',
            'For each pool, our studio produces a dedicated creative response: a case-study carousel, a founder FAQ clip, or a direct consultation offer that answers the exact objection holding the buyer back.',
          ],
          tags: ['7/14/30-day windows', 'Video viewer retargeting', 'Form-opener recovery', 'Case-study carousels', 'Frequency cap discipline'],
          image: '/Images/cs-hero.jpg',
          alt: 'A strategy wall in a Shanghai studio pinned with audience persona cards and sequential campaign frames.',
        },
        {
          label: 'App screenshot · Privacy & metadata hygiene',
          heading: 'Clean asset metadata before upload with Image anonymizer',
          lead: 'Strip hidden camera data, GPS coordinates, and stray metadata in the browser.',
          body: [
            'Before regional lifestyle photos or creator stills go into multi-market ad sets, hubStudio’s Image anonymizer inspects hidden EXIF, GPS, and camera metadata and saves a clean copy, while our studio maintains provenance records for your compliance team.',
          ],
          tags: ['Image anonymizer', 'Clean ad uploads', 'Provenance records', 'Multi-market localisation', 'EU & US disclosure ready'],
          shot: appShots.anonymizer,
          path: '/files/tools/image-anonymizer',
          caption: 'Image anonymizer in hubStudio: inspect hidden file data and rebuild a clean copy in your browser.',
        },
      ],
    },
    proof: {
      note: 'Targeting and retargeting work alternating between live ad manager audience screens, hubStudio editing tools, and studio strategy walls.',
      samples: [
        {
          src: '/Images/soc-plat-audience-retargeting.jpg',
          alt: 'Laptop showing a realistic social ad manager Audience Targeting and Retargeting screen.',
          brand: 'Matched Audience Builder',
          kind: 'Platform · Segment filters',
        },
        {
          src: appShots.editorCrop.src,
          alt: appShots.editorCrop.alt,
          brand: 'Multi-Placement Crop',
          kind: 'App · Feed, Story & Link sizes',
          isApp: true,
        },
        {
          src: '/Images/cs-hero.jpg',
          alt: 'Strategy wall pinned with audience persona briefs and visual directions.',
          brand: 'Persona Matrix',
          kind: 'Studio · Creative mapping',
        },
        {
          src: '/Images/linkedin-sample-sponsored.jpg',
          alt: 'Laptop displaying a realistic LinkedIn Sponsored Content ad preview.',
          brand: 'ABM Decision-Maker Ad',
          kind: 'Platform · LinkedIn Sponsored',
        },
        {
          src: appShots.editorDraw.src,
          alt: appShots.editorDraw.alt,
          brand: 'Segment Callouts',
          kind: 'App · Image editor overlays',
          isApp: true,
        },
        {
          src: '/Images/rednote-sample-search.jpg',
          alt: 'Smartphone showing RedNote search keyword targeting results.',
          brand: 'RedNote Search Intent',
          kind: 'Platform · China keyword targeting',
        },
      ],
    },
    source: {
      kicker: 'Intent signals across ecosystems',
      headingLine1: 'Firmographics on LinkedIn.',
      headingLine2Pre: 'Search & DMP intent ',
      headingSerif: 'in China',
      headingLine2Post: '.',
      lead: 'How you reach a niche buyer in Frankfurt is not how you reach an affluent shopper in Shanghai.',
      paragraphs: [
        'In Western B2B and consumer campaigns, we combine LinkedIn’s first-party job-title and company-list data with Meta and TikTok engagement retargeting pools. We make sure your exclusions are airtight so existing clients and teammates aren’t draining your impression budget.',
        'In China, RedNote (Xiaohongshu) acts as a primary search engine where buyers look up product routines and comparisons before opening Tmall or JD. Our Shanghai team pairs RedNote search-intent targeting and KOC note retargeting with Douyin interest clusters and WeChat lookalike pools.',
      ],
      quietNote: 'Already have an ABM list from your CRM? We can build the matched audience and persona creative around it in days.',
      creds: ['LinkedIn ABM & job-title layers', 'Meta & TikTok engagement pools', 'RedNote search-intent targeting', 'Sequential retargeting creative'],
      mainImage: '/Images/soc-plat-audience-retargeting.jpg',
      mainAlt: 'Laptop displaying an audience targeting and retargeting interface on a sunlit desk.',
      insetImage: '/Images/rednote-ads.jpg',
      insetAlt: 'Smartphone displaying a promoted note on RedNote.',
      statNum: '4 pools',
      statCap: 'Sequenced retargeting from first view to close',
    },
    process: {
      headingLine1: 'How we pair audience pools',
      headingLine2Pre: 'with tailored ',
      headingSerif: 'creative',
      headingLine2Post: '.',
      lede: 'We never set up an audience segment without building the creative that speaks to it.',
      note: 'All audience lists remain inside your own ad accounts under your full control.',
      steps: [
        {
          short: 'Segment audit',
          tier: 'Studio · Audience analysis',
          title: 'Audit current overlap, frequency, and exclusion gaps',
          body: 'We inspect your active ad sets for audience overlap, runaway retargeting frequency, and missing customer or employee exclusions.',
          image: '/Images/ms-p3-channel.jpg',
          alt: 'A media strategist analyzing audience overlap charts on a laptop at a wooden desk.',
        },
        {
          short: 'Persona matrix',
          tier: 'App · Campaigns',
          title: 'Map each buyer segment to its own angle in Campaigns',
          body: 'Inside hubStudio Campaigns, we define the hook, proof point, and visual variant for each cold persona and retargeting window.',
          shot: appShots.campaignFilter,
          path: '/files',
          caption: 'Campaign filter in the hubStudio Assets Library: filter files by launch or audience track.',
        },
        {
          short: 'Variant craft',
          tier: 'Studio · Creative adaptation',
          title: 'Produce role-specific hooks and sequential retargeting assets',
          body: 'Our studio generates and edits persona-specific visuals, video intros, and proof carousels so every segment sees a relevant angle.',
          image: '/Images/ac-p2-concept.jpg',
          alt: 'An art director laying out persona-specific ad variants on a studio desk.',
        },
        {
          short: 'Editor polish',
          tier: 'App · Image & Video editors',
          title: 'Size and caption every variant for feed, Story, and link slots',
          body: 'Each segment’s asset is cropped in the Image and Video editors for 1:1, 4:5, 9:16, and link placements, then approved in Validation.',
          shot: appShots.editorCrop,
          path: '/files/tools/image-editor',
          caption: 'Crop in the hubStudio Image editor: one-click presets for Square, Portrait 4:5, Story 9:16, and Link ads.',
        },
        {
          short: 'Live rotation',
          tier: 'Platform · Ad managers',
          title: 'Launch segmented ad sets and rotate before frequency spikes',
          body: 'We activate the matched audiences and retargeting windows in your ad managers and refresh creative before frequency crosses fatigue thresholds.',
          image: '/Images/soc-plat-audience-retargeting.jpg',
          alt: 'Laptop showing active audience segments and retargeting pools.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Tailor variants in the app, or have us run your ',
      accent: 'audience matrix',
      post: '.',
      intro: 'The hubStudio app makes it fast to crop, annotate, and version a visual for multiple buyer segments. When you want senior media planners and creatives to build your ABM lists, retargeting pools, and persona-tailored ads together, our studio runs the program.',
      inAppBody: [
        'Use the Image studio and Image editor to create persona variants, add custom captions and callouts, crop to every network ratio in one click, and organize segment files with Campaign filters in the Assets Library.',
      ],
      fromStudioBody: [
        'Our strategists build your LinkedIn Matched Audiences, Meta and TikTok lookalike and retargeting pools, and China DMP segments, while our studio produces the sequential creative that converts each pool.',
      ],
      shot: appShots.editorCrop,
      shotPath: '/files/tools/image-editor',
      shotCaption: 'The Image editor in hubStudio: crop a visual to Square, Portrait 4:5, Story 9:16, or Link format in one click.',
      links: [
        { label: 'Image tools in the app', href: '/app/image-tools' },
        { label: 'Localize visuals for markets', href: '/resources/how-to/localize-visual-for-markets' },
        { label: 'LinkedIn platform solutions', href: '/solutions/platforms/linkedin' },
        { label: 'RedNote platform solutions', href: '/solutions/platforms/rednote' },
      ],
      ways: { pre: 'Pick who manages your ', accent: 'targeting', post: '.' },
    },
    faqs: [
      {
        q: 'Can we upload our CRM target account list for LinkedIn ABM?',
        a: 'Yes. You can upload your target company or contact list directly into LinkedIn Campaign Manager as a Matched Audience (hashed in your browser by LinkedIn), and we layer job functions and seniority on top while producing creative tailored to those accounts.',
      },
      {
        q: 'How do you prevent retargeting ads from annoying our prospects?',
        a: 'Two ways: strict frequency caps per time window and sequential creative rotation. Instead of showing the same ad twenty times, prospects see a progression from brand story to customer case study to a low-friction resource or demo.',
      },
      {
        q: 'Isn’t broad targeting better than narrow targeting on Meta and TikTok now?',
        a: 'On Meta and TikTok, creative is the primary targeting signal for cold prospecting, while first-party seeds and clean retargeting exclusions still matter. We pair broad-signal prospecting (where varied creative hooks segment the audience) with structured middle and bottom-of-funnel retargeting pools.',
      },
      {
        q: 'How many creative variants do we need per audience segment?',
        a: 'For B2B LinkedIn segments, three to four distinct formats (one video, one document carousel, two single-image angles) per segment prevent fatigue. For high-spend Meta or TikTok pools, we refresh hooks every two weeks.',
      },
      {
        q: 'Can you adapt one campaign across multiple European or Asian markets?',
        a: 'Yes. Our studio localizes both the audience targeting parameters and the visual/copy elements across English, French, Chinese, and other regional markets inside one hubStudio workspace.',
        link: { match: 'localizes', href: '/resources/insights/europe-campaign-localization' },
      },
      {
        q: 'Do you handle privacy and AI disclosure rules across regions?',
        a: 'Yes. Every studio deliverable includes provenance records so your team knows which models or shoots were used, supporting EU AI Act and US FTC disclosure compliance.',
        link: { match: 'copyright and AI', href: '/resources/copyright-and-ai' },
      },
    ],
    closing: {
      titleLine1: 'Stop serving the same ad',
      titleSerif: 'to every buyer.',
      body: 'Tell us who you are trying to reach and which networks you run on. Within 48 hours we return a written targeting and retargeting proposal with persona creative tracks.',
    },
  },

  /* =========================================================================
   * 7. AD CREATIVE & VARIANT TESTING
   * ========================================================================= */
  {
    slug: 'ad-creative-variant-testing',
    frSlug: 'creations-publicitaires-et-tests-de-variantes',
    group: 'Paid Social & Ads',
    name: 'Ad creative & variant testing',
    metaTitle: 'Social Ad Creative & Variant Testing Service | hubStudio',
    metaDescription:
      'High-velocity social ad creative production and structured hook, visual, and format testing across Meta, TikTok, LinkedIn, X, and China networks.',
    serviceType: 'Social media ad creative production and structured variant testing',
    hero: {
      line1: 'Ad Creative &',
      line2: 'Variant',
      serifLine: 'testing.',
      tagPre: 'Forty to eighty tested ad variants a month, ',
      tagEm: 'guided by data',
      tagPost: ' and senior art direction.',
      lead: [
        'On Meta, TikTok, LinkedIn, and Douyin, creative fatigue is the primary ceiling on paid growth. A winning ad holds its cost per acquisition for roughly two weeks before the feed wears it out. Shipping six variants a quarter from a traditional shoot simply cannot keep up.',
        'We combine brand-trained AI pipelines, real creator footage, and the multi-engine hubStudio app to produce, test, and iterate structured batches of social ad variants every week.',
      ],
      image: '/Images/meta-ads.jpg',
      alt: 'A performance creative strategist in a sunlit Shanghai studio reviewing a grid of social ad variants in Meta Ads Manager.',
      chipPre: 'Platform UI',
      chipPost: 'Meta Ads Creative Testing',
    },
    why: {
      titleLine1: 'Creative is now the',
      titleSerif: 'biggest lever',
      titlePost: ' in paid social.',
      paragraphs: [
        'Media buyers used to win by tweaking bid caps and micro-interests. Today, the ad auction rewards whichever advertiser feeds it the broadest variety of genuinely distinct creative concepts, hooks, and visual formats.',
        'Notice the word distinct: changing a button color twenty times is not variant testing. We test real variables, three-second video hooks, creator vs. studio product framing, typographic proof vs. lifestyle scenes, and rebuild next week’s batch around the winners.',
      ],
      image: '/Images/ac-hero.jpg',
      alt: 'Overhead photograph of a studio desk with a smartphone displaying a vertical video ad alongside printed test boards.',
      caption: 'Studio lifestyle · Hook and visual variable mapping',
      quote:
        'Moving from eight ad variants a month to forty tested variants cuts creative fatigue and gives the delivery algorithm enough signal to hold ROAS as spend scales.',
      stats: [
        { from: 0, to: 40, suffix: '+', label: 'Net-new ad variants per month', note: 'Hooks, visuals, ratios, and formats' },
        { from: 0, to: 7, suffix: ' days', label: 'Weekly creative iteration loop', note: 'New batch built from live winner data' },
        { from: 0, to: 9, suffix: ' makers', label: 'AI image & video engines in Explore', note: 'OpenAI, Google, Kling, Seedream & more' },
      ],
    },
    cover: {
      headingPre: 'Structured testing across ',
      headingSerif: 'hooks, visuals',
      headingPost: ', and formats.',
      note: 'We alternate between live ad-manager split tests, multi-engine generation in the hubStudio app, and studio art direction.',
      lanes: [
        {
          label: 'Platform screenshot · Meta, TikTok & LinkedIn split tests',
          heading: 'Hypothesis-led testing matrices in your ad manager',
          lead: 'Every batch isolates a clear variable: opening hook, visual setting, format, or proof angle.',
          body: [
            'Rather than throwing random ads at the wall, we structure weekly test cells inside Meta Ads Manager, TikTok Ads, and LinkedIn Campaign Manager. One cell tests four opening three-second hooks on the same body cut; another pits a studio product shot against a creator handheld review and a document carousel.',
            'We track thumb-stop rate (3-second views / impressions), hold rate, outbound click-through, and cost per qualified action to declare winners cleanly.',
          ],
          tags: ['Thumb-stop rate tracking', 'Hook vs. body matrices', 'Format split testing', 'Winner iteration sprints', 'Meta, TikTok & LinkedIn'],
          image: '/Images/linkedin-ads.jpg',
          alt: 'Monitor on a studio desk showing a realistic LinkedIn Campaign Manager creative library with multiple ad variants.',
        },
        {
          label: 'App screenshot · Multi-engine generation in Explore & Studios',
          heading: 'Nine leading AI makers inside one workspace',
          lead: 'Compare OpenAI, Google, Black Forest Labs, ByteDance Seedream, Kling, and more without switching subscriptions.',
          body: [
            'Different ad concepts call for different engines: one model excels at crisp typography on a poster, another at photoreal skincare textures, and another at five-second camera movement. Inside hubStudio’s Explore, Image studio, and Video studio, your team and ours can run every major engine from one prepaid balance.',
            'Every render stays in History with its exact prompt and model so winning visual recipes can be reproduced across a whole product line.',
          ],
          tags: ['Explore 9 AI makers', 'Image & Video studios', 'Full History & prompt recall', 'Prepaid balance transparency', 'Zero separate tool subscriptions'],
          shot: appShots.explore,
          path: '/explore',
          caption: 'Explore in hubStudio: browse every image and video engine by maker, compare strengths, and launch a run.',
        },
        {
          label: 'Studio lifestyle · Art direction, creator shoots & retouching',
          heading: 'Human eye on every variant before it touches your brand',
          lead: 'AI gives us speed; senior art directors and retouchers give the work taste and product fidelity.',
          body: [
            'An unretouched AI render spotted by a customer in a paid feed damages brand trust immediately. In our studio, AIGC specialists work under senior art directors: real product photography is composited in, hands and labels are retouched frame by frame, and real UGC creators in Shanghai and Europe shoot authentic talking-head hooks when a human face beats generation.',
          ],
          tags: ['Senior art director sign-off', 'Frame-by-frame retouching', 'Live UGC creator hooks', 'Brand-trained LoRAs', '100% label accuracy'],
          image: '/Images/studio-hero.webp',
          alt: 'Two hubStudio art directors at a wall of pinned proofs marking visual adjustments in red pencil.',
        },
        {
          label: 'App screenshot · Safe zones & multi-ratio adaptation',
          heading: 'Every winning ad adapted to 9:16, 4:5, and 1:1 with safe-zone checks',
          lead: 'Never lose a conversion because a headline sat underneath the Reels or TikTok interface.',
          body: [
            'Once a concept proves itself, we scale it across every placement. Using the hubStudio Image editor and Video editor Social tab, we adapt the winner to 9:16 Reels/TikTok/Stories, 4:5 mobile feed, and 1:1 square, verifying red safe-zone overlays and tracking every cut in Picture versions.',
          ],
          tags: ['9:16, 4:5 & 1:1 ratios', 'Video Social safe zones', 'Picture versions v1/v2', 'Validation sign-off', 'Instant placement scaling'],
          shot: appShots.editorSocial,
          path: '/files/tools/image-editor',
          caption: 'The Image editor Social tab in hubStudio: preview how a visual fits each network’s feed and story dimensions.',
        },
      ],
    },
    proof: {
      note: 'Ad creative and variant testing alternating between real ad manager libraries, hubStudio creation tools, and studio review walls.',
      samples: [
        {
          src: '/Images/meta-ads.jpg',
          alt: 'Media strategist reviewing a grid of ad creative variants in Meta Ads Manager.',
          brand: 'Meta Variant Matrix',
          kind: 'Platform · Ads Manager grid',
        },
        {
          src: appShots.imageStudio.src,
          alt: appShots.imageStudio.alt,
          brand: 'Image Studio Variants',
          kind: 'App · Multi-engine generation',
          isApp: true,
        },
        {
          src: '/Images/ac-p4-test.jpg',
          alt: 'Creative leads comparing performance metrics across ad variants at a studio desk.',
          brand: 'Weekly Winner Review',
          kind: 'Studio · Performance loop',
        },
        {
          src: '/Images/soc-plat-tiktok-feed.jpg',
          alt: 'Hand holding a smartphone displaying a realistic TikTok vertical video ad.',
          brand: 'TikTok Hook Testing',
          kind: 'Platform · 3-second hook variants',
        },
        {
          src: appShots.editorSocial.src,
          alt: appShots.editorSocial.alt,
          brand: 'Social Ratio Check',
          kind: 'App · Safe-zone preview',
          isApp: true,
        },
        {
          src: '/Images/douyin-sample-topview.jpg',
          alt: 'Smartphone displaying a Douyin vertical ad creative.',
          brand: 'Douyin Ad Variants',
          kind: 'Platform · China paid video',
        },
      ],
    },
    source: {
      kicker: 'Cross-border variant velocity',
      headingLine1: 'Tested for Meta & TikTok.',
      headingLine2Pre: 'Rebuilt for ',
      headingSerif: 'Douyin & RedNote',
      headingLine2Post: '.',
      lead: 'A hook that wins on US Instagram Reels rarely wins unchanged on Douyin or RedNote, where pacing and visual density follow different rules.',
      paragraphs: [
        'For Western paid social, we build high-contrast visual hooks, clean typographic callouts, and creator-style vertical spots for Meta, TikTok, and LinkedIn.',
        'For China paid social, where Douyin ad lifespans can be as short as four to six days and RedNote JuGuang rewards native lifestyle notes over polished banners, our Shanghai studio produces high-frequency local variant batches that keep your cost per click and Tmall/JD store traffic steady.',
      ],
      quietNote: 'Need only creative variants for your in-house media buyers, or full media + creative? We run both.',
      creds: ['Meta & Instagram Reels ads', 'TikTok Spark & vertical variants', 'LinkedIn single-image, carousel & video ads', 'Douyin & RedNote JuGuang batches'],
      mainImage: '/Images/ac-roots.jpg',
      mainAlt: 'A studio worktable with multiple ad creative proofs and a smartphone playing a vertical video.',
      insetImage: '/Images/douyin-ads.jpg',
      insetAlt: 'Screen showing Douyin paid creative metrics.',
      statNum: '7-day',
      statCap: 'Closed loop from performance data to new variants',
    },
    process: {
      headingLine1: 'How our weekly variant',
      headingLine2Pre: 'testing ',
      headingSerif: 'flywheel',
      headingLine2Post: ' runs.',
      lede: 'Every week follows a tight loop: read last week’s data, brief new hypotheses, generate and shoot in the studio, validate in the app, and launch.',
      note: 'Every render and prompt stays in History so winning styles compound over time.',
      steps: [
        {
          short: 'Test matrix',
          tier: 'Studio · Hypothesis design',
          title: 'Define the hooks, visual angles, and formats to test',
          body: 'We review current ad fatigue and design a structured matrix isolating specific hooks, visual environments, and value propositions.',
          image: '/Images/ac-p1-brief.jpg',
          alt: 'Two creative leads mapping a variant testing matrix on a studio desk.',
        },
        {
          short: 'Engine run',
          tier: 'App · Image & Video studios',
          title: 'Generate scenes and motion across top AI models in the app',
          body: 'Using hubStudio’s Image studio, Video studio, and custom brand Skills, we generate high-variety visual foundations and motion plates.',
          shot: appShots.videoStudio,
          path: '/video',
          caption: 'The Video studio in hubStudio: generate video from words, a starting picture, or a reference clip.',
        },
        {
          short: 'Composite & cut',
          tier: 'Studio · Craft & Retouch',
          title: 'Composite real products, add creator hooks, and retouch',
          body: 'Our art directors and editors lock in your real product packshots, cut three-second hook variations, and grade every frame.',
          image: '/Images/ac-p3-produce.jpg',
          alt: 'An editor cutting vertical ad hook variations on a dual-monitor workstation.',
        },
        {
          short: 'Safe-zone & approve',
          tier: 'App · Editor & Validation',
          title: 'Verify network safe zones and approve the batch in Validation',
          body: 'Every variant is checked against Instagram, TikTok, and Facebook UI overlays in the Video editor and signed off in Validation.',
          shot: appShots.videoSocial,
          path: '/files/tools/video-editor',
          caption: 'Video editor Social checks in hubStudio: verify red UI zones before exporting ad cuts.',
        },
        {
          short: 'Split test & iterate',
          tier: 'Platform · Live learning',
          title: 'Launch in ad manager, read thumb-stop data, and scale winners',
          body: 'We push the batch live, pause underperformers early, and build next week’s iteration variations around the top two winners.',
          image: '/Images/meta-ads.jpg',
          alt: 'Monitor showing live ad creative performance in Meta Ads Manager.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Generate variants in the app, or hire our ',
      accent: 'performance studio',
      post: '.',
      intro: 'The hubStudio app gives your team direct access to the leading image and video models from OpenAI, Google, Black Forest Labs, ByteDance, Kling, Alibaba, xAI, and MiniMax in one browser tab. Add our studio when you want 40 to 80 art-directed, retouched, and performance-tested ad variants delivered every month.',
      inAppBody: [
        'Use Explore, the Image studio, and the Video studio from one prepaid balance (every run shows its price before you press). Keep every render in History, check safe zones in the editors, and approve variants in Validation.',
      ],
      fromStudioBody: [
        'Our senior art directors, AIGC specialists, retouchers, and UGC creators produce weekly batches of tested ad variants on brand-trained models, composite your real products accurately, and iterate directly off your ad-account data.',
      ],
      shot: appShots.imageStudio,
      shotPath: '/image',
      shotCaption: 'The Image studio in hubStudio: pick your model, aspect ratio, and Campaign, with the price shown before you run.',
      links: [
        { label: 'Ad creative design service', href: '/services/design/ad-creative' },
        { label: 'Create in the app', href: '/app/create' },
        { label: 'Explore AI engines', href: '/app/engines' },
        { label: 'Vertical video ad guide', href: '/resources/how-to/vertical-video-ad-from-product-image' },
      ],
      ways: { pre: 'Pick who produces your ', accent: 'ad variants', post: '.' },
    },
    faqs: [
      {
        q: 'How is this different from your Creative Assets Ad Creative page?',
        a: 'Our Creative Assets Ad Creative service focuses on producing the ad files themselves. This Social Networks service pairs that creative production directly with live ad-account variant testing, media pacing, hook-rate analysis, and weekly iteration loops across your social channels.',
        link: { match: 'Ad Creative service', href: '/services/design/ad-creative' },
      },
      {
        q: 'How do you keep AI-generated ad variants from distorting our product or logo?',
        a: 'We never let a raw generative model invent your product packaging or typography. We use brand-trained models for style and environment, composite your actual high-resolution product packshots and vector logos in post-production, and have a human retoucher inspect every asset.',
      },
      {
        q: 'Which AI models are available inside the hubStudio app?',
        a: 'The app’s Explore and creation studios include image and video engines from OpenAI, Google, Black Forest Labs, ByteDance (Seedream), Kling, Alibaba, xAI, MiniMax, and Meta, plus live Model benchmarks so you can compare speed and quality.',
        link: { match: 'Explore', href: '/app/engines' },
      },
      {
        q: 'Can our internal media buyer run the ads while your studio makes the variants?',
        a: 'Yes. Many performance teams use our studio purely as their high-velocity creative engine: we deliver weekly batches of 10 to 20 tested variants through hubStudio Validation, and your media buyer launches them.',
      },
      {
        q: 'How does pricing work in the app versus with the studio?',
        a: 'In the app, you top up a prepaid balance and every AI image or video run shows its exact price before you press. With the studio, we quote a fixed project price for a test batch or a monthly retainer for ongoing weekly variant production.',
        link: { match: 'pricing', href: '/pricing' },
      },
      {
        q: 'How quickly can we launch our first variant test batch?',
        a: 'You receive a written proposal within 48 hours of sending your brief, and the first batch of 15 to 20 multi-ratio ad variants is typically in your Validation queue within five to seven business days.',
      },
    ],
    closing: {
      titleLine1: 'Out-test creative fatigue',
      titleSerif: 'every week.',
      body: 'Send us a link to your product and your current top-performing ad. Within 48 hours we return a written proposal with our first variant testing matrix and production schedule.',
    },
  },

  /* =========================================================================
   * 8. LEAD GENERATION & REPORTING
   * ========================================================================= */
  {
    slug: 'lead-generation-reporting',
    frSlug: 'generation-de-leads-et-reporting',
    group: 'Paid Social & Ads',
    name: 'Lead generation & reporting',
    metaTitle: 'Social Lead Generation & Performance Reporting Service | hubStudio',
    metaDescription:
      'B2B and high-consideration social lead generation across LinkedIn, Meta, and WeChat, paired with clear creative-level reporting and automated AI Agents in hubStudio.',
    serviceType: 'Social media lead generation and performance reporting',
    hero: {
      line1: 'Lead Gen &',
      line2: 'Performance',
      serifLine: 'reporting.',
      tagPre: 'Qualified pipeline from social, with ',
      tagEm: 'plain-English reporting',
      tagPost: ' tied to the creative.',
      lead: [
        'Generating cheap form fills that your sales team immediately disqualifies is easy. Generating sales-accepted leads on LinkedIn, Meta, and WeChat takes high-intent lead magnets, friction-calibrated forms, and reporting that shows which exact creative angle produced real pipeline.',
        'We build and run your social lead-generation programs end to end, pairing studio-designed lead magnets and native Lead Gen forms with transparent creative reporting and hubStudio monitoring Agents.',
      ],
      image: '/Images/soc-plat-lead-report.jpg',
      alt: 'A widescreen studio monitor on a sunlit wooden desk displaying a realistic LinkedIn Campaign Manager and Meta Ads lead generation reporting dashboard.',
      chipPre: 'Platform UI',
      chipPost: 'Lead Gen & Funnel Reporting',
    },
    why: {
      titleLine1: 'Count qualified pipeline,',
      titleSerif: 'not cheap',
      titlePost: ' clicks.',
      paragraphs: [
        'Most agency reports bury you in vanity impressions while hiding the fact that ninety percent of the leads came from a single low-intent giveaway or accidental mobile taps. Worse, the media report rarely shows the actual picture or video hook behind each row of numbers.',
        'Because our studio makes the lead magnets and ad creatives and our strategists run the campaigns, our reporting connects the two: you see which headline, which carousel, and which executive post generated qualified leads, what they cost, and what we are building next week as a result.',
      ],
      image: '/Images/edr-hero.jpg',
      alt: 'A bound digital report and benchmark guide open on a warm walnut studio desk.',
      caption: 'Studio lifestyle · High-intent lead magnet and benchmark report design',
      quote:
        'Adding one qualifying question to a native LinkedIn or Meta Lead Gen form and pairing it with an executive-grade report typically cuts junk leads in half while lifting sales acceptance.',
      stats: [
        { from: 0, to: 100, suffix: '%', label: 'Creative-tied attribution', note: 'Every lead mapped to its visual and hook' },
        { from: 0, to: 48, suffix: 'h', label: 'Lead-gen proposal & funnel audit', note: 'Offers, forms, CRM flow, and creative' },
        { from: 0, to: 7, suffix: '-day', label: 'Reporting & creative action cadence', note: 'Plain language, zero vanity fluff' },
      ],
    },
    cover: {
      headingPre: 'Offers worth trading an ',
      headingSerif: 'email for',
      headingPost: ', and reports you can read.',
      note: 'We combine platform-native lead capture, studio-designed gated assets, and automated watch Agents in the hubStudio app.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn & Meta Lead Gen forms + reporting',
          heading: 'Friction-tuned native Lead Gen forms & CRM routing',
          lead: 'Capture work emails and qualifying answers without forcing a slow mobile page load.',
          body: [
            'We configure LinkedIn Lead Gen Forms, Meta Instant Forms (High Intent mode), and WeChat native lead cards with custom qualifying questions (company size, timeline, or role) so bots and students are filtered out before they hit your CRM.',
            'Every form submission carries clean UTM and creative-ID parameters into HubSpot, Salesforce, or your webhook, and our weekly performance dashboard shows cost per qualified lead alongside the exact ad visual.',
          ],
          tags: ['LinkedIn Lead Gen Forms', 'Meta High-Intent Forms', 'Custom qualifying questions', 'CRM & webhook routing', 'Cost-per-SQL tracking'],
          image: '/Images/soc-plat-lead-report.jpg',
          alt: 'Monitor on a wooden desk showing a realistic LinkedIn and Meta lead generation table and funnel chart.',
        },
        {
          label: 'App screenshot · AI Agents & Weekly Digest in hubStudio',
          heading: 'Agents that watch the networks and report what changed',
          lead: 'Automated monitoring inside hubStudio plus a plain-language Monday summary.',
          body: [
            'Inside the hubStudio app, AI Agents watch your tracked networks and topics on a schedule and report what changed, surfacing competitor moves, format shifts, and fresh angles for your next lead-gen sprint.',
            'Meanwhile, the Weekly digest emails your team every Monday with a plain-language summary of workspace updates, and Model benchmarks lets you track which AI engines lead on quality and speed.',
          ],
          tags: ['hubStudio AI Agents', 'Scheduled network watch', 'Monday Weekly digest', 'Model benchmarks', 'Actionable creative briefs'],
          shot: appShots.benchmarks,
          path: '/explore/benchmarks',
          caption: 'Model benchmarks in hubStudio: compare image and video engines side by side on quality and speed.',
        },
        {
          label: 'Studio lifestyle · High-value lead magnets & gated assets',
          heading: 'Whitepapers, calculators, and teardown decks buyers actually want',
          lead: 'Your lead-gen ad only converts as well as the asset behind the form.',
          body: [
            'Nobody trades a work email for "Subscribe to our updates" anymore. Our writers and editorial designers build substantive lead magnets in days: 12-page industry benchmark reports, interactive checklists, ROI teardown decks, and executive playbooks.',
            'We design both the gated PDF/deck and the unscrolled preview carousels that prove its value in the feed.',
          ],
          tags: ['Benchmark reports & ebooks', 'Executive playbooks', 'Preview carousel teasers', 'Document ad formatting', 'Editorial layout & charts'],
          image: '/Images/presentation-design-hero.jpg',
          alt: 'An open laptop on a sunlit desk showing a clean data chart slide from an executive report.',
        },
        {
          label: 'App screenshot · Eight browser PDF tools & Client Space',
          heading: 'Prepare gated PDFs and review performance in one workspace',
          lead: 'Compress, merge, and brand your lead-magnet PDFs right in the browser.',
          body: [
            'LinkedIn Document Ads and gated downloads have strict file-weight and page rules. hubStudio includes eight browser-based PDF tools and a dedicated Client space where your team approves every lead-magnet PDF, preview carousel, and ad variant before launch.',
          ],
          tags: ['LinkedIn Document Ads', '8 browser PDF tools', 'Client space sign-off', 'Campaign asset grouping', 'Permanent version history'],
          shot: appShots.clientSpace,
          path: '/client',
          caption: 'The Client space in hubStudio: review lead-magnet proofs, ad variants, and scheduled posts in one place.',
        },
      ],
    },
    proof: {
      note: 'Lead generation and reporting assets alternating between real analytics screens, hubStudio app modules, and studio editorial design.',
      samples: [
        {
          src: '/Images/soc-plat-lead-report.jpg',
          alt: 'Monitor showing a realistic LinkedIn and Meta lead generation reporting dashboard.',
          brand: 'Creative-Level Reporting',
          kind: 'Platform · Lead & CPL dashboard',
        },
        {
          src: appShots.benchmarks.src,
          alt: appShots.benchmarks.alt,
          brand: 'Live Benchmarks',
          kind: 'App · Data & engine tracking',
          isApp: true,
        },
        {
          src: '/Images/edr-hero.jpg',
          alt: 'Hardcover and digital report layouts open on a walnut desk.',
          brand: 'Gated Benchmark Report',
          kind: 'Studio · Lead magnet design',
        },
        {
          src: '/Images/linkedin-sample-sponsored.jpg',
          alt: 'Laptop showing a LinkedIn Sponsored Content lead generation ad preview.',
          brand: 'LinkedIn Lead Ad',
          kind: 'Platform · Native B2B capture',
        },
        {
          src: appShots.digest.src,
          alt: appShots.digest.alt,
          brand: 'Weekly Digest & Alerts',
          kind: 'App · Automated reporting',
          isApp: true,
        },
        {
          src: '/Images/wechat-miniprogram.jpg',
          alt: 'Smartphone displaying a WeChat Mini-Program lead capture screen.',
          brand: 'WeChat & WeCom Capture',
          kind: 'Platform · China B2B lead flow',
        },
      ],
    },
    source: {
      kicker: 'Global B2B & China lead capture',
      headingLine1: 'LinkedIn Lead Gen in the West.',
      headingLine2Pre: 'WeChat & WeCom ',
      headingSerif: 'in China',
      headingLine2Post: '.',
      lead: 'B2B lead capture in China does not run on email forms. It runs on WeChat Official Accounts, Mini-Programs, and WeCom.',
      paragraphs: [
        'In Europe and North America, LinkedIn Document Ads (where readers preview the first three pages of a report in the feed and click to unlock the full PDF via a native Lead Gen Form) consistently deliver the highest-quality B2B leads.',
        'In China, our Shanghai team builds the local equivalent: WeChat Official Account technical articles, Mini-Program resource unlocks, and QR-code flows that route prospects straight into your sales team’s WeCom with source tags attached.',
      ],
      quietNote: 'We connect to your existing CRM so leads arrive in real time, never in a Friday CSV attachment.',
      creds: ['LinkedIn Document & Lead Gen Ads', 'Meta High-Intent Instant Forms', 'WeChat & WeCom lead flows', 'Creative-tied weekly reporting'],
      mainImage: '/Images/soc-plat-lead-report.jpg',
      mainAlt: 'Widescreen monitor showing a social lead generation and conversion funnel report.',
      insetImage: '/Images/wechat-miniprogram.jpg',
      insetAlt: 'Smartphone displaying a WeChat Mini-Program interface.',
      statNum: 'SQLs',
      statCap: 'Optimized for sales-accepted leads, not raw clicks',
    },
    process: {
      headingLine1: 'How we build and report on',
      headingLine2Pre: 'a lead-gen ',
      headingSerif: 'engine',
      headingLine2Post: '.',
      lede: 'From designing the gated report to reading the CRM pipeline numbers, every step links creative craft to commercial outcomes.',
      note: 'Every weekly report ends with the exact creative variants we are building next.',
      steps: [
        {
          short: 'Offer & magnet',
          tier: 'Studio · Editorial & Design',
          title: 'Write and design the gated report, playbook, or calculator',
          body: 'We create a high-value downloadable asset and its in-feed preview slides so prospects have a compelling reason to share their details.',
          image: '/Images/edr-p2-structure.jpg',
          alt: 'A designer reviewing the layout of a multi-page B2B report on a studio desk.',
        },
        {
          short: 'Campaign & Agents',
          tier: 'App · Campaigns & Agents',
          title: 'Organize the launch in Campaigns and set up watch Agents',
          body: 'We group the lead magnet, ad variants, and landing copy in a hubStudio Campaign and configure AI Agents to monitor category topics.',
          shot: appShots.campaignPage,
          path: '/campaigns',
          caption: 'Campaigns in hubStudio: keep the gated PDF, preview carousels, and ad copy together.',
        },
        {
          short: 'Form & CRM setup',
          tier: 'Platform · Lead capture',
          title: 'Build native Lead Gen forms with qualifying questions',
          body: 'We set up LinkedIn and Meta native forms (or WeChat flows) with qualifying filters and verify real-time routing into your CRM.',
          image: '/Images/linkedin-sample-sponsored.jpg',
          alt: 'Laptop showing a LinkedIn Campaign Manager ad and lead form preview.',
        },
        {
          short: 'Approve in app',
          tier: 'App · Validation',
          title: 'Validate every ad variant and form flow before spend',
          body: 'Your marketing and sales leads review the gated asset and ad variants in hubStudio Validation before the campaign goes live.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: sign off on the gated report and ad creatives on one permanent thread.',
        },
        {
          short: 'Report & iterate',
          tier: 'Studio + Platform · Analytics',
          title: 'Weekly creative-tied reporting and hook iteration',
          body: 'Each week you receive a clear breakdown of spend, CPL, qualified leads by creative variant, and the new angles queued for next week.',
          image: '/Images/soc-plat-lead-report.jpg',
          alt: 'Monitor displaying a lead generation funnel and cost-per-lead report.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Use Agents and PDF tools in the app, or hire our ',
      accent: 'lead-gen team',
      post: '.',
      intro: 'Inside the hubStudio app, your team can use AI Agents to watch your category, eight PDF tools to package reports, and Campaigns to draft and validate posts. Add our studio and paid-social team to write the gated reports, build the native Lead Gen forms, and run weekly creative-attributed reporting.',
      inAppBody: [
        'Set up AI Agents to monitor networks and competitors, use the eight browser PDF tools, draft campaign posts from up to 20 source documents, and receive the plain-language Monday Weekly digest.',
      ],
      fromStudioBody: [
        'Our editorial and design teams produce your gated ebooks, benchmark reports, and preview carousels, while our paid-social specialists configure your LinkedIn, Meta, and WeChat lead forms, CRM routing, and weekly creative-level attribution reports.',
      ],
      shot: appShots.digest,
      shotPath: '/settings',
      shotCaption: 'Weekly digest in hubStudio: a plain-language Monday summary of what changed.',
      links: [
        { label: 'Agents in the help center', href: '/help/agents' },
        { label: 'Ebooks & digital reports service', href: '/services/design/ebook-digital-reports' },
        { label: 'Library & PDF tools', href: '/app/library' },
        { label: 'LinkedIn platform solutions', href: '/solutions/platforms/linkedin' },
      ],
      ways: { pre: 'Choose who runs your ', accent: 'lead generation', post: '.' },
    },
    faqs: [
      {
        q: 'Why use LinkedIn Document Ads for B2B lead generation?',
        a: 'LinkedIn Document Ads let prospects swipe through the first three to five pages of your report directly inside the feed before the Lead Gen Form opens. Because they have already read the opening insights, completion rates and lead quality are significantly higher than cold link ads.',
      },
      {
        q: 'Can you design the whitepaper or ebook that powers the campaign?',
        a: 'Yes. Our studio includes a dedicated Ebook and Digital Reports line. We research, write, illustrate, and lay out the entire gated PDF alongside the ads that promote it.',
        link: { match: 'Ebook and Digital Reports', href: '/services/design/ebook-digital-reports' },
      },
      {
        q: 'What do the AI Agents in the hubStudio app do?',
        a: 'Agents in hubStudio watch the networks and topics you configure and report what changed, giving your team and our strategists a steady stream of timely hooks and category signals.',
        link: { match: 'Agents', href: '/help/agents' },
      },
      {
        q: 'How do leads get from LinkedIn or Meta into our CRM?',
        a: 'Through your native CRM integration (HubSpot, Salesforce, Marketo, Pipedrive, or webhook) connected directly inside your LinkedIn Campaign Manager and Meta Business Suite accounts, with UTM and creative names passed on every record.',
      },
      {
        q: 'What does your weekly performance report include?',
        a: 'A clear, scannable breakdown showing spend, impressions, thumb-stop rate, click-through rate, total leads, qualified leads, and cost per qualified lead tied to each specific creative visual and headline, plus the exact actions we are taking for the coming week.',
      },
      {
        q: 'Do you charge a percentage of our ad spend?',
        a: 'No. We price our creative and management work on a clear project or monthly retainer fee, and your media spend is billed directly by the networks to your own ad accounts.',
        link: { match: 'pricing page', href: '/pricing' },
      },
    ],
    closing: {
      titleLine1: 'Turn social spend into',
      titleSerif: 'qualified pipeline.',
      body: 'Tell us your target buyer, average deal size, and current lead-gen setup. Within 48 hours we return a written proposal covering gated asset creation, form architecture, and reporting.',
    },
  },

  /* =========================================================================
   * 9. EMPLOYEE ADVOCACY PROGRAMS
   * ========================================================================= */
  {
    slug: 'employee-advocacy-programs',
    frSlug: 'programmes-d-ambassadeurs-collaborateurs',
    group: 'Advocacy & Networks',
    name: 'Employee advocacy programs',
    metaTitle: 'Employee Advocacy Program & Team Social Sharing | hubStudio',
    metaDescription:
      'Turn your sales, product, and regional teams into credible voices on LinkedIn and X with role-specific post drafts, visuals, and Skills inside hubStudio.',
    serviceType: 'Employee advocacy programs and team social publishing',
    hero: {
      line1: 'Employee',
      line2: 'Advocacy',
      serifLine: 'programs.',
      tagPre: 'Twenty teammates posting in their own voice, ',
      tagEm: 'never twenty copies',
      tagPost: ' of the same corporate paragraph.',
      lead: [
        'People trust engineers, account executives, and regional leads faster than a company logo. Yet traditional employee advocacy tools fail because they hand fifty employees the exact same robotic caption, flooding the feed with identical copy-pasted posts that buyers immediately ignore.',
        'We build and run modern employee advocacy programs inside hubStudio: role-specific Skills, varied visual kits, and pre-drafted angles so twenty teammates can share the same company milestone in twenty authentic voices.',
      ],
      image: '/Images/soc-plat-employee-advocacy.jpg',
      alt: 'Two smartphones resting side by side on a warm oak conference table showing realistic LinkedIn posts from two company teammates sharing different perspectives on a launch.',
      chipPre: 'Platform UI',
      chipPost: 'Multi-voice LinkedIn advocacy',
    },
    why: {
      titleLine1: 'Copy-paste advocacy',
      titleSerif: 'backfires',
      titlePost: ' in the feed.',
      paragraphs: [
        'When ten sales reps post the exact same paragraph and banner at 9:05 a.m. on Tuesday, two things happen: LinkedIn throttles duplicate text, and prospects realize nobody actually wrote what they are reading. Six weeks later, employee participation drops below ten percent.',
        'Our approach removes both the blank-page anxiety and the copy-paste look. For every company announcement, hire, or product release, our studio creates a Campaign pack in hubStudio containing multiple visual crops and role-specific angles (sales, product, leadership, recruiting), plus custom Team Skills so any teammate can generate a draft in their own voice in thirty seconds.',
      ],
      image: '/Images/who-we-are-hybrid.jpg',
      alt: 'A diverse team of colleagues collaborating around laptops in a sunlit modern office.',
      caption: 'Studio lifestyle · Team onboarding and role-based voice calibration',
      quote:
        'Personal profiles on LinkedIn routinely earn three to five times more organic impressions per follower than a company page sharing the same link.',
      stats: [
        { from: 0, to: 20, suffix: ' accts', label: 'Publish or schedule per post in the app', note: 'Or let each teammate post in 2 clicks' },
        { from: 0, to: 4, suffix: ' angles', label: 'Role-specific tracks per launch', note: 'Sales, Product, Leadership, Talent' },
        { from: 0, to: 100, suffix: '%', label: 'On-brand via Team Skills', note: 'Guardrails built into every AI draft' },
      ],
    },
    cover: {
      headingPre: 'Built for how real ',
      headingSerif: 'teammates',
      headingPost: ' actually post.',
      note: 'We combine multi-profile platform mechanics, hubStudio Team & Skills modules, and studio-produced advocacy packs.',
      lanes: [
        {
          label: 'Platform screenshot · Multi-angle LinkedIn & X posts',
          heading: 'One launch, distinct perspectives across your team’s feeds',
          lead: 'Your product manager talks about the build; your account executive talks about the customer problem.',
          body: [
            'When a prospect follows three people at your company, they should see three complementary stories rather than an echo chamber. We write and art-direct advocacy packs where each department gets its own hook, visual frame (carousel, product still, behind-the-scenes photo, or short clip), and conversation starter.',
            'We also coordinate comment-and-repost playbooks so early engagement lifts the flagship post during its first hour on LinkedIn and X.',
          ],
          tags: ['Role-based post angles', 'Visual variety per launch', 'First-hour engagement playbooks', 'LinkedIn & X threads', 'Zero duplicate copy'],
          image: '/Images/soc-plat-employee-advocacy.jpg',
          alt: 'Two smartphones on an oak table showing distinct LinkedIn posts from two colleagues at the same company.',
        },
        {
          label: 'App screenshot · Team Skills & shared Assets Library',
          heading: 'Custom Team Skills keep every employee draft on-brand',
          lead: 'Instructions the AI follows every time a teammate clicks Draft with AI.',
          body: [
            'In hubStudio, Skills are reusable instruction sets shared across your team. We write custom Skills for each role in your advocacy program: how a sales rep frames ROI, which customer claims are approved, which competitor names or buzzwords are off-limits, and how hooks are structured.',
            'Teammates open the Campaign folder, pick an approved visual from the Assets Library, and draft a post in their own voice with those guardrails already applied.',
          ],
          tags: ['Shared Team Skills', 'Approved claim guardrails', 'Campaign asset folders', 'Assets Library tags', '30-second drafting'],
          shot: appShots.skillsCatalog,
          path: '/skills',
          caption: 'Skills in hubStudio: shared instructions the AI follows every time your team drafts a post.',
        },
        {
          label: 'Studio lifestyle · Launch kits, onboarding & champions',
          heading: 'Monthly advocacy calendars & live champion kickoffs',
          lead: 'An advocacy program is a culture habit, not just a folder of images.',
          body: [
            'Our producers run the human side of your program: a 45-minute kickoff session to set up your champions’ LinkedIn headers and bios, a monthly content drop tied to your commercial calendar, and a lightweight leaderboard or digest celebrating the posts that sparked real buyer conversations.',
          ],
          tags: ['Employee profile makeovers', '45-minute live kickoff', 'Monthly advocacy drops', 'Recruiting & culture kits', 'Event & trade-show packs'],
          image: '/Images/training-beginner.jpg',
          alt: 'A facilitator guiding a small team around a conference table with laptops open.',
        },
        {
          label: 'App screenshot · Team management & multi-account scheduling',
          heading: 'Invite teammates or schedule across connected profiles',
          lead: 'Two ways to run it inside hubStudio: self-serve teammates or managed scheduling.',
          body: [
            'In the hubStudio app, you can invite your advocacy cohort into your Team (with role permissions and shared prepaid balance) so each person posts from their own browser, OR consenting ambassadors can connect their profiles so a social manager queues approved drafts across up to 20 accounts at staggered hours.',
          ],
          tags: ['Team invite & roles', 'Shared prepaid balance', 'Up to 20 connected accounts', 'Staggered scheduling', 'Validation option'],
          shot: appShots.teamInvite,
          path: '/team',
          caption: 'Team management in hubStudio: invite teammates, set roles, and share Campaigns and Skills.',
        },
      ],
    },
    proof: {
      note: 'Employee advocacy visuals alternating between real mobile LinkedIn feeds, hubStudio Team & Skills screens, and studio workshops.',
      samples: [
        {
          src: '/Images/soc-plat-employee-advocacy.jpg',
          alt: 'Two smartphones showing different LinkedIn posts from two colleagues on an oak table.',
          brand: 'Multi-Voice Launch',
          kind: 'Platform · LinkedIn mobile feeds',
        },
        {
          src: appShots.skillsCatalog.src,
          alt: appShots.skillsCatalog.alt,
          brand: 'Role-Based Skills',
          kind: 'App · Brand & voice guardrails',
          isApp: true,
        },
        {
          src: '/Images/training-beginner.jpg',
          alt: 'Teammates in a bright studio workshop configuring their social profiles on laptops.',
          brand: 'Champion Kickoff',
          kind: 'Studio · Team enablement',
        },
        {
          src: '/Images/linkedin-sample-feed.jpg',
          alt: 'Laptop showing a LinkedIn feed post with strong peer engagement.',
          brand: 'Sales & Product Voices',
          kind: 'Platform · Organic B2B reach',
        },
        {
          src: appShots.teamInvite.src,
          alt: appShots.teamInvite.alt,
          brand: 'Team Workspace',
          kind: 'App · Cohort management',
          isApp: true,
        },
        {
          src: '/Images/who-we-are-office.webp',
          alt: 'Colleagues reviewing visual proofs at a sunlit studio table.',
          brand: 'Advocacy Kit Curation',
          kind: 'Studio · Monthly drops',
        },
      ],
    },
    source: {
      kicker: 'Global & regional ambassadors',
      headingLine1: 'Sales & engineers on LinkedIn.',
      headingLine2Pre: 'KOCs & store associates ',
      headingSerif: 'in China',
      headingLine2Post: '.',
      lead: 'Employee advocacy works in every market when it matches how locals actually use their feeds.',
      paragraphs: [
        'In Europe, North America, and APAC B2B hubs, employee advocacy centers on LinkedIn and X: sales directors sharing customer wins, engineers explaining product architecture, and talent leads showing studio life.',
        'In Mainland China, employee and partner advocacy runs through WeChat Moments, WeCom customer circles, and RedNote (Xiaohongshu) associate accounts (KOS, Key Opinion Sales). Our Shanghai team produces daily WeChat Moments packs and RedNote KOS note kits so your retail, sales, and partner teams can share native content with one tap.',
      ],
      quietNote: 'Start with a pilot cohort of 10 to 25 ambassadors before rolling out company-wide.',
      creds: ['LinkedIn sales & engineering cohorts', 'Profile & banner makeovers', 'Custom Team Skills in hubStudio', 'China WeChat Moments & RedNote KOS kits'],
      mainImage: '/Images/soc-plat-employee-advocacy.jpg',
      mainAlt: 'Two smartphones displaying LinkedIn employee advocacy posts on an oak table.',
      insetImage: '/Images/rednote-koc.jpg',
      insetAlt: 'A creator photographing a product setup for RedNote.',
      statNum: '10–50+',
      statCap: 'Pilot cohorts scaled with zero duplicate posts',
    },
    process: {
      headingLine1: 'How we launch an employee',
      headingLine2Pre: 'advocacy cohort in ',
      headingSerif: 'two weeks',
      headingLine2Post: '.',
      lede: 'We make participation effortless for busy sales and product people while giving marketing full visibility.',
      note: 'No separate advocacy software license required: everything runs inside hubStudio.',
      steps: [
        {
          short: 'Cohort & roles',
          tier: 'Studio · Program design',
          title: 'Select your pilot ambassadors and define role tracks',
          body: 'We group your cohort into tracks (Sales, Product/Engineering, Leadership, Regional/Talent) and design matching LinkedIn profile banners for every participant.',
          image: '/Images/who-we-are-hybrid.jpg',
          alt: 'A cross-functional team meeting around laptops in a sunlit office.',
        },
        {
          short: 'Skills & Team',
          tier: 'App · Team & Skills',
          title: 'Set up your hubStudio Team and role-specific AI Skills',
          body: 'We invite your cohort into hubStudio and configure shared Skills encoding your approved product claims, tone rules, and role perspectives.',
          shot: appShots.mySkills,
          path: '/skills',
          caption: 'My Skills in hubStudio: role-specific instructions so every teammate drafts in an authentic, compliant voice.',
        },
        {
          short: 'Advocacy packs',
          tier: 'Studio · Monthly kits',
          title: 'Produce multi-angle visuals and starter drafts per campaign',
          body: 'For each launch or monthly theme, our studio places 6 to 10 distinct visuals, carousels, and role-based post drafts into a hubStudio Campaign.',
          image: '/Images/studio-brief.webp',
          alt: 'A studio producer organizing campaign visuals and briefs on a laptop.',
        },
        {
          short: 'Personalize & queue',
          tier: 'App · Publish',
          title: 'Teammates tweak their draft or approve staggered scheduling',
          body: 'Ambassadors personalize their post in seconds with Draft with AI and publish, or approve our team to schedule across connected profiles.',
          shot: appShots.publishStep,
          path: '/social/linkedin/posts',
          caption: 'Publish or schedule in hubStudio: stagger posts across connected accounts so they never drop at the exact same minute.',
        },
        {
          short: 'Momentum digest',
          tier: 'Platform · Recognition',
          title: 'Track reach, celebrate top posts, and feed the next drop',
          body: 'We review which angles sparked real buyer comments and connection requests, recognize top contributors, and refine next month’s pack.',
          image: '/Images/linkedin-sample-feed.jpg',
          alt: 'Laptop showing a high-engagement LinkedIn post from a team member.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Equip your team in the app, or let us run the ',
      accent: 'advocacy desk',
      post: '.',
      intro: 'The hubStudio app has Employee Advocacy built into its core architecture: Team workspaces, shared Campaigns, role-based Skills, and multi-account publishing. Add our studio to design the profile kits, write the monthly multi-angle packs, and coach your cohort.',
      inAppBody: [
        'Invite teammates in Team settings, share one prepaid balance, organize launch visuals in Campaigns, create shared Team Skills so AI drafts follow your rules, and publish or schedule to LinkedIn, Instagram, Facebook, TikTok (Beta), and X.',
      ],
      fromStudioBody: [
        'Our writers and art directors redesign every ambassador’s profile banner, build monthly Campaign packs with distinct visuals and drafts per department, run live kickoff workshops, and optionally manage staggered scheduling for busy leads.',
      ],
      shot: appShots.teamClients,
      shotPath: '/team',
      shotCaption: 'Your team in hubStudio: manage members, client spaces, and shared workspaces in one tab.',
      links: [
        { label: 'Your team in the help center', href: '/help/your-team' },
        { label: 'Skills in the help center', href: '/help/skills' },
        { label: 'Team onboarding service', href: '/services/onboarding' },
        { label: 'Workshops & team training', href: '/services/social/workshops-team-training' },
      ],
      ways: { pre: 'Pick how to launch ', accent: 'employee advocacy', post: '.' },
    },
    faqs: [
      {
        q: 'How do you stop 20 employees from posting the exact same text?',
        a: 'Two ways. First, our studio writes multiple distinct starter drafts per launch (for example, a technical angle, a customer-problem angle, and a culture angle) paired with different visual crops. Second, when a teammate uses Draft with AI in hubStudio with a role Skill, it generates a fresh draft grounded in the Campaign documents rather than a static template.',
      },
      {
        q: 'Do employees have to hand over their LinkedIn passwords?',
        a: 'Never. Teammates either sign into their own hubStudio account and connect their LinkedIn profile via LinkedIn’s official OAuth sign-in, or copy/publish their post manually without connecting anything.',
        link: { match: 'LinkedIn', href: '/help/linkedin' },
      },
      {
        q: 'How is the hubStudio app billed when 25 teammates use it?',
        a: 'There is no per-seat subscription fee. Your workspace shares a single prepaid balance, and publishing to LinkedIn, Instagram, Facebook, and TikTok (Beta) is free. You only pay tiny per-run amounts from the prepaid balance when someone generates an AI image, video, or draft.',
        link: { match: 'prepaid balance', href: '/pricing' },
      },
      {
        q: 'Can compliance or legal review employee posts before they go out?',
        a: 'Yes. Regulated teams in finance, healthcare, and enterprise tech use hubStudio’s Validation module so employee drafts are approved by a communications or compliance lead before publishing.',
        link: { match: 'Validation', href: '/app/review' },
      },
      {
        q: 'Do you also refresh each participant’s LinkedIn profile before starting?',
        a: 'Yes. Our advocacy kickoff includes custom LinkedIn header banners personalized for each participant, headline formulas, and Featured section setup so their profile converts visitors.',
      },
      {
        q: 'What is a RedNote KOS / WeChat Moments program in China?',
        a: 'In China, retail associates and sales reps (Key Opinion Sales, or KOS) build personal RedNote accounts and WeChat Moments feeds to advise buyers directly. Our Shanghai team produces the daily visual and copy packs they share.',
      },
    ],
    closing: {
      titleLine1: 'Turn your team into your',
      titleSerif: 'loudest channel.',
      body: 'Tell us the size of your pilot group and the next launch on your calendar. Within 48 hours we return a written advocacy proposal covering profile kits, Team Skills, and monthly content packs.',
    },
  },

  /* =========================================================================
   * 10. EXECUTIVE PERSONAL BRANDING
   * ========================================================================= */
  {
    slug: 'executive-personal-branding',
    frSlug: 'personal-branding-des-dirigeants',
    group: 'Advocacy & Networks',
    name: 'Executive personal branding',
    metaTitle: 'Executive Personal Branding & Ghostwriting Service | hubStudio',
    metaDescription:
      'Founder, CEO, and C-suite personal branding across LinkedIn, X, and video: voice-matched writing, editorial visuals, and Thought Leader Ads run inside hubStudio.',
    serviceType: 'Executive personal branding, ghostwriting, and video thought leadership',
    hero: {
      line1: 'Executive',
      line2: 'Personal',
      serifLine: 'branding.',
      tagPre: 'Your founders and C-suite publishing every week, ',
      tagEm: 'in their real voice',
      tagPost: '.',
      lead: [
        'Buyers, journalists, investors, and senior hires look up the CEO and leadership team on LinkedIn and X before they ever book a demo. An executive profile that only reposts corporate press releases signals a leader with nothing of their own to say.',
        'We turn twenty-minute voice interviews with your executives into sharp LinkedIn posts, X threads, carousels, and short talking-head videos inside hubStudio, approved by the executive in one click and optionally amplified with Thought Leader Ads.',
      ],
      image: '/Images/linkedin-thought.jpg',
      alt: 'A smartphone resting on a warm wooden desk beside a ceramic mug and leather notebook, displaying a realistic LinkedIn executive profile and high-engagement post.',
      chipPre: 'Platform UI',
      chipPost: 'Executive LinkedIn Profile',
    },
    why: {
      titleLine1: 'The founder’s voice',
      titleSerif: 'outperforms',
      titlePost: ' the brand logo.',
      paragraphs: [
        'Every B2B and enterprise benchmark shows the same shift: a concrete point of view from a CEO, CTO, or regional managing director earns five to ten times the organic reach and comment depth of the same point posted by a corporate handle. And when promoted as a LinkedIn Thought Leader Ad, it delivers lower cost per click and higher trust than standard banner ads.',
        'The bottleneck is never a lack of ideas; it is executive time and ghostwriters who sound like ChatGPT. Our senior editorial writers interview each leader, encode their exact cadence and contrarian views into a private hubStudio Skill, and pair their words with bespoke studio diagrams and photography.',
      ],
      image: '/Images/linkedin-sample-leader.jpg',
      alt: 'A smartphone on a sunlit wooden table displaying a realistic LinkedIn Thought Leader Ad from a company CEO.',
      caption: 'Platform UI · LinkedIn Thought Leader Ad from an executive profile',
      quote:
        'Thirty minutes a month on a recorded call with a senior editor is enough to publish three sharp, voice-accurate executive posts every week.',
      stats: [
        { from: 0, to: 30, suffix: ' min', label: 'Executive time required per month', note: 'Two short recorded voice interviews' },
        { from: 0, to: 3, suffix: ' posts', label: 'Weekly cadence per leader', note: 'Essays, diagrams, carousels & X threads' },
        { from: 0, to: 1, suffix: ' click', label: 'Executive sign-off in Validation', note: 'Review on mobile or desktop, no login maze' },
      ],
    },
    cover: {
      headingPre: 'Written by editors. ',
      headingSerif: 'Approved',
      headingPost: ' in seconds.',
      note: 'We alternate between platform-native executive formats, private voice Skills and Validation in the hubStudio app, and studio visual craft.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn profiles, posts & Thought Leader Ads',
          heading: 'Profile architecture, weekly essays & Thought Leader Ads',
          lead: 'Positioning that reads like a practitioner, never like a motivational poster.',
          body: [
            'We start by overhauling the executive’s LinkedIn and X presence: banner photography or typography, headline, About essay, and Featured cards pointing to key talks, articles, or product pages.',
            'Each week, we draft posts built around real operational stories, market observations, and customer lessons. Top-performing organic posts can be sponsored directly from your company’s LinkedIn Campaign Manager as Thought Leader Ads to target accounts.',
          ],
          tags: ['Executive profile overhaul', 'Practitioner essays', 'LinkedIn Thought Leader Ads', 'X threads & commentary', 'Featured section curation'],
          image: '/Images/linkedin-sample-leader.jpg',
          alt: 'Smartphone on a wooden desk displaying a realistic LinkedIn Thought Leader Ad post from a CEO.',
        },
        {
          label: 'App screenshot · Private executive voice Skills & Validation',
          heading: 'Each leader’s voice encoded in a custom Skill, signed off in Validation',
          lead: 'No one-line clichés, no banned buzzwords, and a frictionless approval link.',
          body: [
            'After our first two interviews with an executive, we build a dedicated voice Skill in hubStudio capturing their sentence rhythm, vocabulary, favorite frameworks, and strict "never say" list.',
            'When a week’s drafts and visuals are ready, we send a Validation link. The executive (or their chief of staff) opens the link on their phone, reads the post and attached visual, leaves a quick note or taps Approve, and our team schedules it.',
          ],
          tags: ['Personal voice Skills', 'One-link mobile Validation', 'Version history v1/v2', 'Chief-of-staff workflow', 'Connected profile scheduling'],
          shot: appShots.validationSend,
          path: '/validation',
          caption: 'Validation in hubStudio: send a clean review link to an executive or chief of staff for fast sign-off.',
        },
        {
          label: 'Studio lifestyle · Whiteboard diagrams, portraits & short video',
          heading: 'Signature visual systems: notebook sketches, data cards & video clips',
          lead: 'Give each executive a visual signature that readers recognize mid-scroll.',
          body: [
            'Text-only posts only go so far. Our art directors design a personal visual system for each leader: hand-drawn architectural diagrams, clean financial or engineering charts, annotated industry screenshots, and editorial portraits.',
            'When the leader records a five-minute voice or webcam take, our editors and Shorts autopilot cut it into polished 9:16 video clips with timed captions.',
          ],
          tags: ['Signature diagram style', 'Executive carousels', 'Editorial portrait direction', 'Webcam-to-Shorts editing', 'Keynote deck alignment'],
          image: '/Images/pitch-room.jpg',
          alt: 'An executive speaking across a warm wooden table in a quiet sunlit meeting room.',
        },
        {
          label: 'App screenshot · Cross-network adaptation to X & YouTube',
          heading: 'Adapt one executive point of view across LinkedIn, X, and YouTube',
          lead: 'A LinkedIn essay on Tuesday becomes an X thread on Wednesday and a YouTube Short on Thursday.',
          body: [
            'Using hubStudio’s Re-purpose workflow and X composer, we adapt each approved executive piece into native formats across networks, placing external links in the X follow-up reply so the opening post keeps full distribution.',
          ],
          tags: ['Cross-network Re-purpose', 'X thread formatting', 'Follow-up link replies', 'Multi-account scheduling', 'Bilingual EN/FR/ZH option'],
          shot: appShots.repurpose,
          path: '/social/linkedin/posts',
          caption: 'Re-purpose in hubStudio: adapt an approved LinkedIn executive post for X or Instagram in one step.',
        },
      ],
    },
    proof: {
      note: 'Executive branding work alternating between real LinkedIn and X screens, hubStudio approval workflows, and studio portrait/editorial sessions.',
      samples: [
        {
          src: '/Images/linkedin-thought.jpg',
          alt: 'Smartphone on a wooden desk showing a realistic LinkedIn executive profile and post.',
          brand: 'Founder LinkedIn Presence',
          kind: 'Platform · Profile & essay',
        },
        {
          src: appShots.validationSend.src,
          alt: appShots.validationSend.alt,
          brand: 'One-Click Sign-Off',
          kind: 'App · Executive Validation',
          isApp: true,
        },
        {
          src: '/Images/pitch-hero.jpg',
          alt: 'A founder presenting in a sunlit boardroom.',
          brand: 'Executive Positioning',
          kind: 'Studio · Editorial interview',
        },
        {
          src: '/Images/linkedin-sample-leader.jpg',
          alt: 'Smartphone showing a realistic LinkedIn Thought Leader Ad from a CEO.',
          brand: 'Thought Leader Ad',
          kind: 'Platform · Sponsored executive post',
        },
        {
          src: appShots.repurpose.src,
          alt: appShots.repurpose.alt,
          brand: 'LinkedIn to X Thread',
          kind: 'App · Cross-network adaptation',
          isApp: true,
        },
        {
          src: '/Images/soc-plat-x-thread.jpg',
          alt: 'Smartphone on an oak desk showing a realistic X thread from an executive.',
          brand: 'Executive X Thread',
          kind: 'Platform · Multi-post thread',
        },
      ],
    },
    source: {
      kicker: 'Built for global leaders',
      headingLine1: 'Led by people who know',
      headingLine2Pre: 'the ',
      headingSerif: 'boardroom',
      headingLine2Post: '.',
      lead: 'hubStudio was founded by Cyril Drouin, a former CEO at Publicis. Our editorial leads know how executives think, speak, and are judged by peers.',
      paragraphs: [
        'Junior social coordinators struggle with executive ghostwriting because they haven’t sat in a board meeting, negotiated a cross-border supply chain, or managed a P&L. Our executive program is staffed by senior editorial writers and art directors who can hold a twenty-minute peer conversation with your CEO, CFO, or VP of Engineering and pull out the insight that matters.',
        'For global leaders operating across Europe, North America, and Asia, we also publish multilingual executive streams in English, French, and Simplified Chinese (including WeChat Channels and Weibo verified executive accounts).',
      ],
      quietNote: 'Strict NDA and zero public attribution on all executive ghostwriting engagements.',
      creds: ['1-on-1 senior editorial writer', 'Custom visual & diagram system', 'LinkedIn Thought Leader Ad promotion', 'NDA & 1-click Validation'],
      mainImage: '/Images/linkedin-thought.jpg',
      mainAlt: 'Smartphone on a wooden desk beside a ceramic mug showing a LinkedIn executive profile.',
      insetImage: '/Images/who-we-are-studio.jpg',
      insetAlt: 'The hubStudio editorial and creative floor.',
      statNum: 'NDA',
      statCap: 'Discreet senior editorial partnership',
    },
    process: {
      headingLine1: 'Thirty minutes of their time.',
      headingLine2Pre: 'A full month of ',
      headingSerif: 'authority',
      headingLine2Post: '.',
      lede: 'We designed the workflow around an executive’s calendar: short recorded conversations in, finished posts and visuals out.',
      note: 'Nothing is ever published without explicit sign-off from the executive or their designated approver.',
      steps: [
        {
          short: 'Voice & positioning',
          tier: 'Studio · Editorial onboarding',
          title: 'Define the three pillars, overhaul the profile, and lock the voice',
          body: 'We conduct a deep-dive interview, rewrite the executive’s profile and banner, and define the three industry themes they will own.',
          image: '/Images/pitch-room.jpg',
          alt: 'An executive in conversation at a warm wooden meeting table.',
        },
        {
          short: 'Voice Skill',
          tier: 'App · Skills & Campaigns',
          title: 'Encode the leader’s cadence and rules into a private Skill',
          body: 'We build a dedicated voice Skill in hubStudio capturing their phrasing, perspective, and red lines, paired with a monthly Campaign folder.',
          shot: appShots.mySkills,
          path: '/skills',
          caption: 'My Skills in hubStudio: encode each executive’s voice, thesis, and banned clichés.',
        },
        {
          short: 'Bi-weekly call',
          tier: 'Studio · Writing & Art',
          title: 'Turn a 15-minute recorded call into six posts and custom visuals',
          body: 'Twice a month, our senior editor runs a 15-minute voice call with the executive and turns their raw thoughts into essays, carousels, and diagrams.',
          image: '/Images/studio-on-app.webp',
          alt: 'A senior producer on a video call with a laptop and notebook open on a sunlit desk.',
        },
        {
          short: '1-click sign-off',
          tier: 'App · Validation',
          title: 'The executive or chief of staff approves on one thread',
          body: 'Each post and visual lands in Validation. The executive reviews on mobile or desktop, requests a word tweak if needed, and taps Approve.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: clean, permanent sign-off for every executive post before it queues.',
        },
        {
          short: 'Publish & sponsor',
          tier: 'Platform · Organic + Paid',
          title: 'Scheduled at peak hours and boosted as Thought Leader Ads',
          body: 'Approved posts publish on schedule to LinkedIn and X, and top organic winners are promoted as Thought Leader Ads to target accounts.',
          image: '/Images/linkedin-sample-leader.jpg',
          alt: 'Smartphone displaying a live LinkedIn Thought Leader Ad.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Draft with custom Skills in the app, or hire our ',
      accent: 'executive editors',
      post: '.',
      intro: 'Communications teams can use hubStudio’s Skills, Validation, and multi-account scheduler to manage executive profiles in-house. When you want senior journalists and art directors to conduct the interviews, write the essays, design the diagrams, and run Thought Leader Ads, our studio handles the entire program.',
      inAppBody: [
        'Create one custom Skill per executive, draft posts from interview notes in Campaigns, route every piece through Validation for executive or legal sign-off, and schedule to connected LinkedIn and X accounts.',
      ],
      fromStudioBody: [
        'A senior writer interviews your executives twice a month, writes every LinkedIn post and X thread in their authentic voice, works with an art director on custom diagrams and carousels, and coordinates Thought Leader Ad amplification.',
      ],
      shot: appShots.linkedin,
      shotPath: '/social/linkedin/posts',
      shotCaption: 'LinkedIn in hubStudio: draft and schedule to personal executive profiles and company pages from one tab.',
      links: [
        { label: 'Consulting solutions', href: '/solutions/consulting' },
        { label: 'LinkedIn platform solutions', href: '/solutions/platforms/linkedin' },
        { label: 'Validation in the app', href: '/app/review' },
        { label: 'Social media client approval guide', href: '/resources/how-to/social-media-client-approval' },
      ],
      ways: { pre: 'Choose who runs ', accent: 'executive branding', post: '.' },
    },
    faqs: [
      {
        q: 'How do you make sure the posts actually sound like our CEO and not like AI?',
        a: 'Every executive is paired with a senior human editor who interviews them directly and writes the drafts from their real stories, numbers, and opinions. We use our hubStudio voice Skills to enforce their personal vocabulary and strip out generic social-media tropes.',
      },
      {
        q: 'Can our chief of staff or communications lead review posts before the CEO sees them?',
        a: 'Yes. We can run a two-step review in Validation: comms or legal signs off on v1 first, and the executive only sees the polished v2 for final one-click approval.',
        link: { match: 'Validation', href: '/help/validation' },
      },
      {
        q: 'What are LinkedIn Thought Leader Ads and do you run them?',
        a: 'LinkedIn Thought Leader Ads allow a company page to sponsor an organic post written on an executive’s or employee’s personal profile so it appears in the feeds of target accounts. We handle both the executive post and the Campaign Manager sponsorship.',
      },
      {
        q: 'Can you manage multiple executives (CEO, CRO, CTO) at the same time?',
        a: 'Yes. Most leadership programs cover two to five executives. We coordinate their calendars in hubStudio so their topics complement each other and they cross-comment on key company moments.',
      },
      {
        q: 'What if an executive wants to record short videos on their phone?',
        a: 'We love that. We give them three bullet prompts before they hit record on their phone or webcam, then our studio editors and Shorts autopilot trim, grade, and caption the clip for LinkedIn, X, Reels, and Shorts.',
      },
      {
        q: 'Is the engagement covered by a non-disclosure agreement?',
        a: 'Yes. Every executive personal branding engagement is strictly confidential under NDA, and we never claim authorship of an executive’s posts.',
      },
    ],
    closing: {
      titleLine1: 'Put your leadership’s',
      titleSerif: 'best thinking in the feed.',
      body: 'Tell us which executives you want to support and the markets they sell into. Within 48 hours we return a confidential proposal covering positioning, interview cadence, and weekly deliverables.',
    },
  },

  /* =========================================================================
   * 11. WORKSHOPS & TEAM TRAINING
   * ========================================================================= */
  {
    slug: 'workshops-team-training',
    frSlug: 'ateliers-et-formation-des-equipes',
    group: 'Advocacy & Networks',
    name: 'Workshops & team training',
    metaTitle: 'Social Media & AI Content Workshops & Team Training | hubStudio',
    metaDescription:
      'Hands-on workshops and team training taught by practicing hubStudio art directors and social producers on your own brand briefs inside the hubStudio app.',
    serviceType: 'Social media and AI content production workshops and team training',
    hero: {
      line1: 'Workshops &',
      line2: 'Team',
      serifLine: 'training.',
      tagPre: 'Practicing studio leads teaching your team ',
      tagEm: 'on your own briefs',
      tagPost: '.',
      lead: [
        'Generic AI webinars show impressive demos on imaginary brands, and Monday morning your social team still doesn’t know how to keep your product bottle consistent, write a hook that doesn’t sound robotic, or get a reel through client validation.',
        'Our workshops are taught live by the art directors, AIGC specialists, and social producers who run hubStudio every day. Your team works hands-on inside the hubStudio app on your actual products, social channels, and upcoming campaigns.',
      ],
      image: '/Images/training-hero.jpg',
      alt: 'A senior art director leading a hands-on workshop with marketing teammates around a sunlit studio table with laptops open.',
      chipPre: 'Studio lifestyle',
      chipPost: 'Live hands-on workshop',
    },
    why: {
      titleLine1: 'Trained by people who',
      titleSerif: 'ship',
      titlePost: ' every week.',
      paragraphs: [
        'Most corporate trainers do not run client campaigns anymore. Our instructors spend four days a week shipping social calendars, ad variants, and brand shoots in Shanghai, Hong Kong, and Paris, and the fifth teaching client teams how we do it.',
        'Every workshop ends with working infrastructure inside your hubStudio workspace: custom Team Skills written during the session, model selection playbooks, safe-zone checklists, and a real week of social posts produced by your team before the room clears.',
      ],
      image: '/Images/training-advanced.jpg',
      alt: 'Two creative specialists reviewing AI model parameters and visual outputs on a calibrated monitor during a training session.',
      caption: 'Studio lifestyle · Advanced AIGC and social workflow coaching',
      quote:
        'Teams retain what they build themselves: every participant leaves the workshop having prompted, edited, validated, and queued real campaign assets in the app.',
      stats: [
        { from: 0, to: 3, suffix: ' tracks', label: 'Foundations, Advanced & Train-the-trainer', note: 'Tailored to marketers, designers, or leads' },
        { from: 0, to: 100, suffix: '%', label: 'Taught on your own brand assets', note: 'Zero generic textbook exercises' },
        { from: 0, to: 3, suffix: ' langs', label: 'Delivered in EN, FR, or ZH', note: 'Remote live or on-site with your team' },
      ],
    },
    cover: {
      headingPre: 'Three training tracks, built ',
      headingSerif: 'around the app',
      headingPost: ' and the feeds.',
      note: 'We alternate between platform spec mastery, hands-on exercises inside the hubStudio app, and studio art-direction critiques.',
      lanes: [
        {
          label: 'Platform screenshot · Network specs, hooks & algorithm mechanics',
          heading: 'Platform mastery: LinkedIn, Instagram, TikTok, X, YouTube & China',
          lead: 'Why a post wins or dies in the first two seconds on each network.',
          body: [
            'We teach the practical mechanics of each social feed: how LinkedIn weighs dwell time on eight-slide carousels, how Instagram Reels and TikTok score three-second hook retention and safe zones, why X penalizes opening links, and how RedNote CES scoring works in China.',
            'Participants critique their own current brand pages and recent posts against real platform benchmarks before building new ones.',
          ],
          tags: ['Feed algorithm mechanics', 'Hook & carousel teardowns', 'Safe-zone rules by network', 'West & China comparisons', 'Live channel critique'],
          image: '/Images/linkedin-content.jpg',
          alt: 'Laptop on a sunlit desk showing a realistic LinkedIn company page used during a live channel critique.',
        },
        {
          label: 'App screenshot · Model selection, prompting & Skills in hubStudio',
          heading: 'Hands-on creation: Explore, Image & Video studios, and custom Skills',
          lead: 'Which AI engine to pick for product shots, lifestyle scenes, typography, or motion.',
          body: [
            'Inside the hubStudio app, we walk your team through Explore and live Model benchmarks: when to choose OpenAI, Google, Black Forest Labs, ByteDance Seedream, or Kling, and how to prompt from words, a reference image, or a starting frame.',
            'Together, we write and save your company’s custom Skills so every future image prompt and social caption follows your brand guidelines automatically.',
          ],
          tags: ['Model benchmarks walkthrough', 'Image & Video studio labs', 'Custom Team Skills authoring', 'Image & Video editor mastery', 'History & version reuse'],
          shot: appShots.modelPicker,
          path: '/image',
          caption: 'The model picker in hubStudio: learn which image or video engine fits each social format and brief.',
        },
        {
          label: 'Studio lifestyle · Art direction, retouching & provenance',
          heading: 'The studio eye: spotting AI tells, retouching, and compliance',
          lead: 'How to turn a raw generation into a finished brand asset that passes legal and creative review.',
          body: [
            'Anyone can press generate; knowing what to fix is the craft. Our art directors teach your designers and marketers how to spot lighting mismatches, label drift, and skin texture artifacts, how to combine real product photography with AI environments, and how to document asset provenance and C2PA credentials.',
          ],
          tags: ['Spotting & fixing AI tells', 'Product-locked workflows', 'Editor light & look grading', 'EU AI Act & US FTC labeling', 'Art director critique'],
          image: '/Images/training-trainers.jpg',
          alt: 'A senior creative director coaching internal team leads around pinned visual proofs.',
        },
        {
          label: 'App screenshot · Campaigns, Validation & multi-account publishing',
          heading: 'Running the weekly social routine inside hubStudio',
          lead: 'From Monday Campaign brief to Friday Validation and scheduled queue.',
          body: [
            'The final module locks in your team’s weekly operating rhythm: setting up Campaigns with source documents, running Shorts autopilot on recorded talks, routing drafts through Validation, and scheduling across up to 20 connected accounts.',
          ],
          tags: ['Weekly operating routine', 'Campaigns & Validation flow', 'Shorts autopilot lab', 'Cross-network Re-purpose', '30-day follow-up clinic'],
          shot: appShots.exploreApp,
          path: '/explore',
          caption: 'Inside the hubStudio app: every participant practices creating, editing, validating, and scheduling on real brand briefs.',
        },
      ],
    },
    proof: {
      note: 'Workshops and training sessions alternating between real platform critiques, live hubStudio app exercises, and studio classroom sessions.',
      samples: [
        {
          src: '/Images/linkedin-content.jpg',
          alt: 'Laptop showing a realistic LinkedIn company page during a channel teardown.',
          brand: 'Live Channel Teardown',
          kind: 'Platform · Feed & spec audit',
        },
        {
          src: appShots.modelPicker.src,
          alt: appShots.modelPicker.alt,
          brand: 'Engine Selection Lab',
          kind: 'App · 9 makers compared',
          isApp: true,
        },
        {
          src: '/Images/training-hero.jpg',
          alt: 'Senior art director leading a workshop around a sunlit table.',
          brand: 'Foundations Workshop',
          kind: 'Studio · Marketers & social teams',
        },
        {
          src: '/Images/soc-plat-tiktok-feed.jpg',
          alt: 'Hand holding a smartphone displaying a TikTok vertical video with safe-zone overlays.',
          brand: 'Vertical Video Lab',
          kind: 'Platform · 9:16 hook & safe zones',
        },
        {
          src: appShots.skillsCatalog.src,
          alt: appShots.skillsCatalog.alt,
          brand: 'Team Skills Authoring',
          kind: 'App · Reusable brand rules',
          isApp: true,
        },
        {
          src: '/Images/training-advanced.jpg',
          alt: 'Two designers practicing advanced prompting and grading at a studio workstation.',
          brand: 'Advanced Production Track',
          kind: 'Studio · Designers & editors',
        },
      ],
    },
    source: {
      kicker: 'Tailored to your team',
      headingLine1: 'Taught in English, French,',
      headingLine2Pre: 'or ',
      headingSerif: 'Chinese',
      headingLine2Post: ', on your schedule.',
      lead: 'Whether your team sits in one room in Paris or across four time zones between New York, London, and Shanghai, we structure the sessions around your people.',
      paragraphs: [
        'We run three core formats: a half-day Foundations workshop for social managers and marketers, a two-day Advanced production intensive for designers and video editors, and a Train-the-Trainer program for internal creative operations leads.',
        'Every workshop includes a pre-session audit of your current social feeds, custom exercises built on your own product photos and brand guidelines, and a 30-day follow-up clinic to review what your team shipped after the training.',
      ],
      quietNote: 'Looking for a quick 1-on-1 workspace setup instead of a group curriculum? See our Team onboarding page.',
      creds: ['Practicing studio instructors', 'Built on your real brand assets', 'Custom Team Skills included', '30-day follow-up review clinic'],
      mainImage: '/Images/training-hero.jpg',
      mainAlt: 'A studio instructor teaching a group of marketers around a sunlit wooden table.',
      insetImage: '/Images/training-trainers.jpg',
      insetAlt: 'Close-up of a creative critique session.',
      statNum: 'EN/FR/ZH',
      statCap: 'Live workshops delivered in three languages',
    },
    process: {
      headingLine1: 'How we prepare and run',
      headingLine2Pre: 'a team ',
      headingSerif: 'workshop',
      headingLine2Post: '.',
      lede: 'The work we do before the workshop is why your team leaves with finished assets instead of generic slide notes.',
      note: 'All custom Skills and templates built for the workshop stay in your hubStudio workspace permanently.',
      steps: [
        {
          short: 'Pre-audit',
          tier: 'Studio · Preparation',
          title: 'Audit your social channels, brand guidelines, and team roles',
          body: 'Before the session, our instructors review your recent social posts, product assets, and workflow bottlenecks to build custom exercises.',
          image: '/Images/ms-p1-brief.jpg',
          alt: 'An instructor reviewing printed brand guidelines and social feeds at a studio desk.',
        },
        {
          short: 'Workspace prep',
          tier: 'App · Team & Library',
          title: 'Load your brand assets and starter Skills into hubStudio',
          body: 'We set up your Team workspace, preload a Campaign with your product shots and briefs, and draft starter Skills for the live labs.',
          shot: appShots.teamInvite,
          path: '/team',
          caption: 'Team setup in hubStudio: every workshop participant signs in to a ready-to-use brand workspace.',
        },
        {
          short: 'Live labs',
          tier: 'Studio + App · Hands-on',
          title: 'Prompt, edit, caption, and critique real social assets together',
          body: 'Participants work through live exercises in the Image studio, Video studio, editors, and social composers with real-time coaching from our art directors.',
          image: '/Images/training-beginner.jpg',
          alt: 'Participants practicing inside the app on laptops during a live workshop.',
        },
        {
          short: 'Workflow lock',
          tier: 'App · Validation & Publish',
          title: 'Practice the approval and scheduling routine end to end',
          body: 'Your team runs their workshop creations through Validation and queues a real week of posts across your connected networks.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: practice the exact review and approval loop your team will use every week.',
        },
        {
          short: '30-day clinic',
          tier: 'Platform · Follow-up',
          title: 'Review live published work thirty days later',
          body: 'One month after the workshop, we reconvene to critique the posts your team shipped, tune your Skills, and answer advanced questions.',
          image: '/Images/linkedin-sample-feed.jpg',
          alt: 'Laptop showing live social posts published by the team after training.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Learn the app with our instructors, then call the ',
      accent: 'studio',
      post: ' when volume spikes.',
      intro: 'Our goal in every workshop is to make your team self-sufficient inside the hubStudio app for day-to-day social content. And because you are learning in the exact same workspace our studio uses, calling us in for a major launch or overflow sprint takes zero extra setup.',
      inAppBody: [
        'After the workshop, your team runs daily image generation, video clipping, safe-zone editing, Validation, and multi-network publishing on its own from your shared prepaid balance.',
      ],
      fromStudioBody: [
        'Our instructors remain available for 30-day clinics, quarterly refresher labs as new AI models ship, and hybrid Studio + app production whenever a launch exceeds your internal bandwidth.',
      ],
      shot: appShots.explore,
      shotPath: '/explore',
      shotCaption: 'Explore in hubStudio: we train your team on which engine to pick and how to keep every output on-brand.',
      links: [
        { label: 'Training solutions overview', href: '/solutions/training' },
        { label: 'Team onboarding service', href: '/services/onboarding' },
        { label: 'Discovery & tips in help center', href: '/help/discovery-and-tips' },
        { label: 'Choosing a model guide', href: '/help/choosing-a-model' },
      ],
      ways: { pre: 'Combine team training with ', accent: 'studio support', post: '.' },
    },
    faqs: [
      {
        q: 'How is this different from your Team Onboarding session?',
        a: 'Team Onboarding is a focused setup session to get your workspace, accounts, and first workflows configured. Workshops & Team Training is a structured, hands-on curriculum (half-day, full-day, or multi-session) teaching social creative craft, multi-model prompting, video editing, and channel strategy on your real briefs.',
        link: { match: 'Team Onboarding', href: '/services/onboarding' },
      },
      {
        q: 'Who teaches the workshops?',
        a: 'Practicing hubStudio senior art directors, AIGC specialists, and social leads. Never external freelance trainers who only read from slides.',
        link: { match: 'creative talents', href: '/about/team' },
      },
      {
        q: 'Do you run workshops remotely or in person?',
        a: 'Both. We run interactive live video workshops for distributed global teams and in-person sessions at your offices or in our Paris, Hong Kong, and Shanghai studios.',
      },
      {
        q: 'How many people can join a workshop?',
        a: 'To keep the labs genuinely hands-on with individual critique on each person’s prompts and posts, we recommend cohorts of 5 to 15 people per session. For larger organizations, we run multiple role-specific tracks.',
      },
      {
        q: 'Do participants need prior AI or design experience?',
        a: 'No. Our Foundations track is built for social media managers, copywriters, and brand marketers with zero technical background, while our Advanced track goes deep for graphic designers, motion artists, and video editors.',
      },
      {
        q: 'What does our team keep after the training?',
        a: 'Every participant keeps the custom Team Skills we build together, the prompt and safe-zone playbooks, the finished campaign assets created during the lab, and a 30-day follow-up review clinic.',
      },
    ],
    closing: {
      titleLine1: 'Train your team on',
      titleSerif: 'next week’s brief.',
      body: 'Tell us how many people are on your social or creative team and which networks they run. Within 48 hours we return a tailored workshop syllabus and written proposal.',
    },
  },

  /* =========================================================================
   * 12. LINKEDIN, META, TIKTOK, X & CHINA
   * ========================================================================= */
  {
    slug: 'linkedin-meta-tiktok-x-china',
    frSlug: 'linkedin-meta-tiktok-x-et-chine',
    group: 'Advocacy & Networks',
    name: 'LinkedIn, Meta, TikTok, X & China',
    metaTitle: 'Cross-Network Social Production: LinkedIn, Meta, TikTok, X & China | hubStudio',
    metaDescription:
      'One studio and one app across Western and Chinese social networks: LinkedIn, Instagram, Facebook, TikTok (Beta), X, YouTube, WeChat, RedNote, Douyin, and Weibo.',
    serviceType: 'Cross-network global and China social media production and publishing',
    hero: {
      line1: 'LinkedIn, Meta,',
      line2: 'TikTok, X &',
      serifLine: 'China.',
      tagPre: 'Ten social networks across West and East, ',
      tagEm: 'one studio',
      tagPost: ' and one workspace.',
      lead: [
        'Global brands usually end up splitting their social presence across three disconnected vendors: a B2B agency for LinkedIn, a short-video shop for Instagram and TikTok, and a separate local agency in Shanghai that never sees headquarters’ master files on time.',
        'hubStudio bridges both worlds under one roof. In the app, you publish to LinkedIn, Instagram, Facebook, TikTok (Beta), and X, and prepare YouTube uploads. Through our studios in Hong Kong, Shanghai, Changsha, and Paris, we also produce and run your WeChat, RedNote (Xiaohongshu), Douyin, and Weibo channels from the same brief.',
      ],
      image: '/Images/rednote-hero.jpg',
      alt: 'A hand holding a smartphone in warm window light displaying a realistic RedNote discovery feed.',
      chipPre: 'Platform UI',
      chipPost: 'West & China ecosystems',
    },
    why: {
      titleLine1: 'Two internet ecosystems,',
      titleSerif: 'one brand',
      titlePost: ' standard.',
      paragraphs: [
        'Running global social from a single Western checklist breaks the moment it touches China; running China in a silo leaves headquarters blind to how the brand looks on Douyin and RedNote. Meanwhile, even within Western networks, an asset built for LinkedIn’s 4:5 document reader looks awkward on X or YouTube Shorts.',
        'With offices in Paris and Hong Kong and production studios in Shanghai and Changsha, our team works natively in both ecosystems every day. You brief your campaign once inside hubStudio, approve every market’s adaptation in Validation, and ship native assets across all ten networks.',
      ],
      image: '/Images/hubstudio-shanghai-studio.webp',
      alt: 'Producers and art directors collaborating in the sunlit hubStudio Shanghai creative studio.',
      caption: 'Studio lifestyle · Cross-border production floor in Shanghai',
      quote:
        'Briefing one bilingual studio across Western and Chinese networks cuts cross-market adaptation time from six weeks to days while keeping visual quality unified.',
      stats: [
        { from: 0, to: 6, suffix: ' West', label: 'App modules: LinkedIn, IG, FB, TikTok (Beta), X, YT', note: 'Direct publishing & YouTube Studio prep' },
        { from: 0, to: 4, suffix: ' China', label: 'WeChat, RedNote, Douyin & Weibo', note: 'Produced & run by our Shanghai studio' },
        { from: 0, to: 1, suffix: ' brief', label: 'Shared Campaign & Validation workspace', note: 'EN, FR, and ZH teams under one roof' },
      ],
    },
    cover: {
      headingPre: 'How each network works ',
      headingSerif: 'in the app',
      headingPost: ' and in the studio.',
      note: 'We are transparent about what the hubStudio app publishes directly and where our studio team steps in across Western and Chinese platforms.',
      lanes: [
        {
          label: 'Platform screenshot · LinkedIn, Instagram, Facebook & X',
          heading: 'Western feed & B2B networks: LinkedIn, Instagram, Facebook & X',
          lead: 'Company pages, executive profiles, Reels, carousels, and link-safe X threads.',
          body: [
            'On LinkedIn, we produce company-page updates, eight-slide carousels, newsletters, and executive Thought Leader Ads. On Instagram and Facebook, we build 4:5 feed posts, 9:16 Reels, Stories, and clean Facebook posts where links and hashtags sit in the first comment.',
            'On X, we write single posts and four-image threads where external links go out automatically in a follow-up reply so the opening post keeps full reach.',
          ],
          tags: ['LinkedIn profiles & pages', 'Instagram Reels & carousels', 'Facebook first-comment links', 'X threads & link replies', 'Direct app publishing'],
          image: '/Images/linkedin-hero.jpg',
          alt: 'Hand holding a smartphone in warm daylight displaying a realistic LinkedIn mobile post.',
        },
        {
          label: 'App screenshot · Six dedicated network modules in hubStudio',
          heading: 'One tailored composer per network inside the app',
          lead: 'Each form starts from what that network cares about first.',
          body: [
            'Instead of a generic "post everywhere" box that lowest-common-denominators your content, hubStudio has one dedicated module per network. Instagram starts from the visual; TikTok (Beta) starts from the scripted hook and timed brief; LinkedIn keeps the opening lines above "see more"; and YouTube prepares your video, title, description, and Channel kit for interactive upload in YouTube Studio.',
            'Re-purpose lets you adapt a finished post from one network into the rules of another in seconds.',
          ],
          tags: ['6 network modules', 'TikTok (Beta) Brief tab', 'YouTube Studio interactive prep', 'Cross-network Re-purpose', 'Up to 20 accounts per post'],
          shot: appShots.tiktok,
          path: '/social/tiktok/brief',
          caption: 'TikTok (Beta) in hubStudio: the Brief tab drafts the hook, timed script, on-screen text, and caption inside TikTok’s limits.',
        },
        {
          label: 'Platform screenshot · WeChat, RedNote, Douyin & Weibo',
          heading: 'China social ecosystem: WeChat, RedNote, Douyin & Weibo',
          lead: 'Produced and operated by our native teams in Shanghai and Changsha.',
          body: [
            'The hubStudio app does not publish directly to Chinese networks. Instead, our Shanghai and Changsha studio teams produce and manage your China presence end to end: WeChat Official Account articles, Channels videos, and Mini-Program assets; RedNote (Xiaohongshu) 3:4 lifestyle notes and KOC seeding; Douyin 9:16 short videos and merchant livestream rooms; and Weibo trending topic campaigns.',
            'Every China draft and visual still passes through your hubStudio Client space and Validation so global headquarters approves everything before it goes live.',
          ],
          tags: ['WeChat Official Accounts & Channels', 'RedNote 3:4 notes & KOC', 'Douyin video & livestreams', 'Weibo topic & hero campaigns', 'HQ Validation in the app'],
          image: '/Images/weibo-hero.jpg',
          alt: 'Hand holding a smartphone in warm light displaying a realistic Weibo nine-grid photographic post.',
        },
        {
          label: 'Studio lifestyle · One global brief, transcreated for every feed',
          heading: 'One master shoot or AI pipeline adapted across ten networks',
          lead: 'Brief once in English, French, or Chinese; ship native formats everywhere.',
          body: [
            'When a global brand launches a product, our art directors build the master visual system once, then adapt the aspect ratios, safe zones, cultural casting, copy hooks, and regulatory disclosures for each network and region.',
          ],
          tags: ['Master-to-market adaptation', 'EN, FR & ZH copywriting', 'Platform spec matrices', 'China AI labeling compliance', 'EU & US disclosure ready'],
          image: '/Images/who-we-are-china-speed.jpg',
          alt: 'Creative producers reviewing multi-market social proofs at a studio table.',
        },
      ],
    },
    proof: {
      note: 'Cross-network coverage alternating between Western and Chinese platform screens, hubStudio network modules, and our international studios.',
      samples: [
        {
          src: '/Images/linkedin-hero.jpg',
          alt: 'Hand holding a smartphone showing a realistic LinkedIn mobile post.',
          brand: 'LinkedIn & X',
          kind: 'Platform · Western B2B & threads',
        },
        {
          src: appShots.tiktok.src,
          alt: appShots.tiktok.alt,
          brand: 'TikTok (Beta) Module',
          kind: 'App · Script & video flow',
          isApp: true,
        },
        {
          src: '/Images/hubstudio-shanghai-studio.webp',
          alt: 'The hubStudio creative floor in Shanghai.',
          brand: 'Shanghai & Paris Teams',
          kind: 'Studio · Cross-border desk',
        },
        {
          src: '/Images/rednote-hero.jpg',
          alt: 'Hand holding a smartphone displaying a realistic RedNote discovery feed.',
          brand: 'RedNote & Douyin',
          kind: 'Platform · China lifestyle & video',
        },
        {
          src: appShots.facebook.src,
          alt: appShots.facebook.alt,
          brand: 'Facebook & Instagram',
          kind: 'App · Meta publishing modules',
          isApp: true,
        },
        {
          src: '/Images/wechat-hero.jpg',
          alt: 'Hand holding a smartphone displaying a realistic WeChat Official Account article.',
          brand: 'WeChat & Weibo',
          kind: 'Platform · China editorial & reach',
        },
      ],
    },
    source: {
      kicker: 'Every platform page, in depth',
      headingLine1: 'Deep platform playbooks',
      headingLine2Pre: 'for ',
      headingSerif: 'every network',
      headingLine2Post: '.',
      lead: 'Each social network has its own dedicated solution page and technical specification guide on this site.',
      paragraphs: [
        'Whether you need to check 2026 safe zones for Douyin and TikTok, compare Meta Reels against RedNote notes, or understand how YouTube interactive uploads and Facebook first-comment links work in the app, our platform pages and spec guides lay out the exact rules.',
        'You can hire us for a single platform (such as LinkedIn B2B or RedNote China entry) or combine Western and Chinese networks under one retainer.',
      ],
      quietNote: 'Explore any individual platform page from the links below or in the Solutions menu.',
      creds: ['LinkedIn, Meta (IG/FB), TikTok (Beta), X, YouTube', 'WeChat, RedNote (Xiaohongshu), Douyin, Weibo', '2026 platform spec guides included', 'Hong Kong, Shanghai, Changsha & Paris'],
      mainImage: '/Images/rednote-hero.jpg',
      mainAlt: 'Hand holding a smartphone displaying a RedNote discovery feed.',
      insetImage: '/Images/meta-ig.jpg',
      insetAlt: 'Smartphone displaying an Instagram Reels vertical video.',
      statNum: '10 nets',
      statCap: 'Western and Chinese networks under one roof',
    },
    process: {
      headingLine1: 'How one global brief ships',
      headingLine2Pre: 'across ',
      headingSerif: 'ten networks',
      headingLine2Post: '.',
      lede: 'One Campaign folder in the app holds the master brief while Western and Chinese tracks run in parallel.',
      note: 'Your global headquarters sees and validates every regional asset before it goes out.',
      steps: [
        {
          short: 'Network matrix',
          tier: 'Studio · Channel selection',
          title: 'Pick the active networks and map format specs per market',
          body: 'We define which networks carry your launch in each region and map the exact aspect ratios, lengths, and copy rules required.',
          image: '/Images/ms-p3-channel.jpg',
          alt: 'A strategist mapping a cross-network distribution matrix on a laptop.',
        },
        {
          short: 'Master Campaign',
          tier: 'App · Campaigns',
          title: 'Create one master Campaign in hubStudio for all markets',
          body: 'The master brief, product packshots, and brand Skills sit in one hubStudio Campaign accessible to both Western and China producers.',
          shot: appShots.campaignPage,
          path: '/campaigns',
          caption: 'A campaign’s page in hubStudio: one central brief and asset list across every network.',
        },
        {
          short: 'Native production',
          tier: 'Studio · West & China craft',
          title: 'Produce and transcreate native assets for each ecosystem',
          body: 'Our Western and Shanghai teams produce the LinkedIn carousels, Reels, TikTok clips, RedNote notes, Douyin videos, and WeChat articles.',
          image: '/Images/who-we-are-china-speed.jpg',
          alt: 'Creative leads reviewing multi-market visual adaptations on a studio table.',
        },
        {
          short: 'Global Validation',
          tier: 'App · Validation',
          title: 'Approve every market’s posts in Validation',
          body: 'Headquarters and local market leads review and approve every piece in hubStudio Validation with full version history.',
          shot: appShots.validation,
          path: '/validation',
          caption: 'Validation in hubStudio: global and regional teams sign off on one permanent record.',
        },
        {
          short: 'Publish & deliver',
          tier: 'Platform · Live rollout',
          title: 'Scheduled via the app in the West; published or delivered in China',
          body: 'LinkedIn, IG, FB, TikTok (Beta), and X queue from the app, YouTube leaves ready for YouTube Studio, and China channels are published by our Shanghai team or delivered ready to post.',
          image: '/Images/weibo-hero.jpg',
          alt: 'Smartphone displaying a published multi-photo post on Weibo.',
        },
      ],
    },
    appOrStudio: {
      pre: 'Publish to Western networks in the app, and add our studio for ',
      accent: 'global & China scale',
      post: '.',
      intro: 'The hubStudio app gives you six dedicated network modules (LinkedIn, Instagram, Facebook, TikTok (Beta), X, and YouTube) plus cross-network Re-purpose. Add our studio when you want our team to produce the assets, run the channels, or expand your brand onto WeChat, RedNote, Douyin, and Weibo.',
      inAppBody: [
        'Draft, resize, validate, and schedule directly to LinkedIn, Instagram, Facebook, TikTok (Beta), and X (up to 20 accounts per post), prepare YouTube videos and Channel kits for YouTube Studio, and re-purpose one post across networks in seconds.',
      ],
      fromStudioBody: [
        'Our bilingual producers, writers, and art directors in Paris, Hong Kong, Shanghai, and Changsha produce native campaigns across both Western and Chinese social ecosystems, delivering ready-to-post China packages or operating your verified Chinese channels directly.',
      ],
      shot: appShots.repurpose,
      shotPath: '/social/instagram/posts',
      shotCaption: 'Re-purpose in hubStudio: turn a finished post on one network into native drafts for the others.',
      links: [
        { label: 'Social publishing in the app', href: '/app/publish' },
        { label: 'LinkedIn solutions', href: '/solutions/platforms/linkedin' },
        { label: 'Meta solutions', href: '/solutions/platforms/meta' },
        { label: 'TikTok solutions', href: '/solutions/platforms/tiktok' },
        { label: 'WeChat solutions', href: '/solutions/platforms/wechat' },
        { label: 'RedNote solutions', href: '/solutions/platforms/rednote' },
        { label: 'Douyin solutions', href: '/solutions/platforms/douyin' },
        { label: 'Weibo solutions', href: '/solutions/platforms/weibo' },
      ],
      ways: { pre: 'Pick how you run ', accent: 'every network', post: '.' },
    },
    faqs: [
      {
        q: 'Which social networks does the hubStudio app publish to directly?',
        a: 'The app publishes directly to LinkedIn (personal profiles and company pages), Instagram (professional accounts, no Facebook page required), Facebook pages, TikTok (Beta), and X, up to 20 accounts per post.',
        link: { match: 'publishes directly', href: '/app/publish' },
      },
      {
        q: 'Why does YouTube use an interactive upload to YouTube Studio?',
        a: 'YouTube restricts third-party API uploads to private unless each client project undergoes separate API verification. So hubStudio writes your title and description to YouTube’s rules, prepares your Channel assets, downloads the video, puts the title on your clipboard, and opens YouTube Studio so you can publish publicly in seconds.',
        link: { match: 'YouTube', href: '/help/youtube' },
      },
      {
        q: 'Does the hubStudio app publish directly to WeChat, RedNote, Douyin, or Weibo?',
        a: 'No. The app does not publish directly to Chinese platforms. Instead, our Shanghai and Changsha studio teams produce all visuals, videos, and native Chinese copy inside your hubStudio workspace (where you approve them in Validation) and either deliver files ready to post or operate your Chinese accounts as a managed service.',
      },
      {
        q: 'How is publishing priced inside the hubStudio app?',
        a: 'Publishing and scheduling to LinkedIn, Instagram, Facebook, and TikTok (Beta) is free. The only exception is X, which charges per post: hubStudio shows the exact price from your prepaid balance before you send.',
        link: { match: 'balance and payments', href: '/help/balance-and-payments' },
      },
      {
        q: 'Can we hire you only for China social, or only for Western networks?',
        a: 'Yes. About half our clients hire us specifically for Western B2B/consumer social, a third hire us to enter or scale in China on RedNote, Douyin, and WeChat, and the rest run unified global retainers across both.',
      },
      {
        q: 'Where can we find the exact image and video dimensions for each network?',
        a: 'Our Platform Specifications library covers 2026 image sizes, aspect ratios, video lengths, and safe zones for Instagram, LinkedIn, TikTok, Facebook, X, YouTube, Douyin, RedNote, WeChat, and Weibo.',
        link: { match: 'Platform Specifications', href: '/resources/specs' },
      },
    ],
    closing: {
      titleLine1: 'Run West and China from',
      titleSerif: 'one brief.',
      body: 'Tell us which networks matter to your brand this quarter. Within 48 hours we return a written proposal covering channel scope, creative deliverables, and how your team and ours work together in the app.',
    },
  },
];

export const SOCIAL_SERVICES_BY_SLUG: Record<string, SocialServiceData> = Object.fromEntries(
  SOCIAL_SERVICES.map((s) => [s.slug, s]),
);
