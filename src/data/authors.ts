/**
 * Authors: the people who can carry a byline.
 *
 * Infrastructure item 6 from the search spec. Every article gets a byline
 * pointing at a real person with a real page, so the entity graph has
 * somewhere to resolve to. `src/data/insights.ts` carries `author` as a
 * display name; `authorBySlug` and `findAuthorByName` map between the two.
 *
 * Two rosters live here. The sixteen creatives carry portraits and quotes and
 * feed the creative-talents page. The editorial bench (`editorial: true`) are
 * studio directors who carry bylines but do not sit on that index. Both get a
 * per-author page, so every byline resolves to one entity.
 *
 * IMPORTANT, read before editing. Every field below is either already
 * published on the site or is structural (a slug, a URL). Nothing here is
 * invented. `markets` and `credits` are deliberately left empty on the
 * creatives: the spec asks for "real markets and credits" and those have not
 * been supplied, so the pages render without them rather than carrying
 * plausible-looking fiction about real people. Fill them from the people
 * themselves, never from inference.
 */

export interface Author {
  /** URL segment under /the-studio/creative-talents/ */
  slug: string;
  name: string;
  role: string;
  /** Nationality as published on the creative-talents page. */
  nationality?: string;
  /** The line each creative is quoted saying on the index page. */
  quote?: string;
  /** Portrait under /public/Images. */
  image?: string;
  /** Longer bio. Empty until a real one is supplied. */
  bio?: string;
  /** Markets this person actually works in. Empty until supplied. */
  markets?: string[];
  /** Named credits. Empty until cleared. Never infer these. */
  credits?: string[];
  /** External profiles, for schema `sameAs`. */
  sameAs?: string[];
  /**
   * Public LinkedIn profile, rendered as a visible link on the author page
   * and next to the article byline. Only set for people who have actually
   * given us their profile: never guess a LinkedIn slug for a real person.
   */
  linkedin?: string;
  /** True for people who carry article bylines today. */
  bylines?: boolean;
  /**
   * Studio directors on the editorial bench. They carry bylines and get an
   * author page, but they are not part of the sixteen on creative-talents.
   */
  editorial?: boolean;
}

export const authors: Author[] = [
  {
    slug: 'cyril-drouin',
    name: 'Cyril Drouin',
    role: 'Founder and CEO',
    nationality: 'French',
    bio: 'Founder of hubStudio, which he started in 2024. Previously CEO of Publicis Commerce for China and North Asia. Writes most of what appears under Insights.',
    linkedin: 'https://www.linkedin.com/in/cyril-d-68835729/',
    sameAs: ['https://www.linkedin.com/in/cyril-d-68835729/'],
    bylines: true,
    editorial: true,
  },
  {
    slug: 'echo-peng',
    name: 'Echo Peng',
    role: 'Senior Director and Partner',
    nationality: 'Chinese',
    bio: 'Eighteen years running eCommerce and digital for global brands in China. Former operations director at Publicis China. Owns the platforms and the day to day on every account.',
    linkedin: 'https://www.linkedin.com/in/echo-peng-aa241751/',
    sameAs: ['https://www.linkedin.com/in/echo-peng-aa241751/'],
    bylines: true,
    editorial: true,
  },
  {
    slug: 'liyan-ye',
    name: 'Liyan Ye',
    role: 'Senior Director',
    nationality: 'Chinese',
    linkedin: 'https://www.linkedin.com/in/liyanye/',
    sameAs: ['https://www.linkedin.com/in/liyanye/'],
    bylines: true,
    editorial: true,
  },
  {
    slug: 'marcus-sullivan',
    name: 'Marcus Sullivan',
    nationality: 'American',
    role: 'Creative Director',
    quote: 'I design brand worlds that feel lived-in before they launch.',
    image: '/Images/talent-marcus-sullivan.webp',
    bylines: true,
  },
  {
    slug: 'lea-moreau',
    name: 'Léa Moreau',
    nationality: 'French',
    role: 'Art Director',
    quote: "Luxury isn't what you show. It's what you suggest.",
    image: '/Images/talent-lea-moreau.webp',
  },
  {
    slug: 'james-whitmore',
    name: 'James Whitmore',
    nationality: 'British',
    role: 'Copywriter',
    quote: 'The best ideas survive the meeting room and the pub test.',
    image: '/Images/talent-james-whitmore.webp',
  },
  {
    slug: 'diego-martinez',
    name: 'Diego Martinez',
    nationality: 'American',
    role: 'Creative Director',
    quote: "Culture isn't a trend to tap. It's a truth to honor.",
    image: '/Images/talent-diego-martinez.webp',
  },
  {
    slug: 'nina-hoffmann',
    name: 'Nina Hoffmann',
    nationality: 'German',
    role: 'Brand Creative',
    quote: "Precision and poetry aren't opposites. They're partners.",
    image: '/Images/talent-nina-hoffmann.webp',
  },
  {
    slug: 'erik-lindstrom',
    name: 'Erik Lindström',
    nationality: 'Swedish',
    role: 'Film Director',
    quote: 'Minimalism with a pulse. Function that makes you feel.',
    image: '/Images/talent-erik-lindstrom.webp',
    bylines: true,
  },
  {
    slug: 'wei-lin-tan',
    name: 'Wei Lin Tan',
    nationality: 'Singaporean',
    role: 'Brand Designer',
    quote: "East meets West isn't a cliché when you've lived both truths.",
    image: '/Images/talent-wei-lin-tan.webp',
  },
  {
    slug: 'sofia-andersen',
    name: 'Sofia Andersen',
    nationality: 'Danish',
    role: 'Visual Designer',
    quote: "Hygge isn't an aesthetic. It's emotional architecture.",
    image: '/Images/talent-sofia-andersen.webp',
  },
  {
    slug: 'jason-liu',
    name: 'Jason Liu',
    nationality: 'Chinese',
    role: 'Digital Art Director',
    quote: 'I turn five thousand years of aesthetics into pixels that sell.',
    image: '/Images/talent-jason-liu.webp',
    bylines: true,
  },
  {
    slug: 'aisha-rahman',
    name: 'Aisha Rahman',
    nationality: 'Malaysian',
    role: 'Content Strategist',
    quote: 'I translate heritage into language Gen Z actually wants to hear.',
    image: '/Images/talent-aisha-rahman.webp',
    bylines: true,
  },
  {
    slug: 'sophie-brennan',
    name: 'Sophie Brennan',
    nationality: 'Australian',
    role: 'Social Creative',
    quote: 'Bold enough to stop the scroll. Real enough to start a conversation.',
    image: '/Images/talent-sophie-brennan.webp',
  },
  {
    slug: 'maya-patel',
    name: 'Maya Patel',
    nationality: 'American',
    role: 'Creative Systems Lead',
    quote: 'I build systems that scale creativity, not just content.',
    image: '/Images/talent-maya-patel.webp',
    bylines: true,
  },
  {
    slug: 'nara-suwan',
    name: 'Nara Suwan',
    nationality: 'Thai',
    role: 'Color & Design Specialist',
    quote: "Color isn't decoration. It's emotion with a wavelength.",
    image: '/Images/talent-nara-suwan.webp',
  },
  {
    slug: 'olivier-dubois',
    name: 'Olivier Dubois',
    nationality: 'French',
    role: 'Creative Director',
    quote: 'Provocation without purpose is just noise.',
    image: '/Images/talent-olivier-dubois.webp',
  },
  {
    slug: 'isabella-rossi',
    name: 'Isabella Rossi',
    nationality: 'Italian',
    role: 'Production Designer',
    quote: "Craft isn't slow. It's intentional.",
    image: '/Images/talent-isabella-rossi.webp',
  },
  {
    slug: 'finn-korhonen',
    name: 'Finn Korhonen',
    nationality: 'Finnish',
    role: 'Motion Designer',
    quote: 'Less drama, more impact. That is the Nordic way.',
    image: '/Images/talent-finn-korhonen.webp',
  },
];

/** The sixteen creatives, without the editorial bench. Used by the index page. */
export const creatives = authors.filter((a) => !a.editorial);

/** Everyone who carries a byline, in the order bylines should be listed. */
export const bylineAuthors = authors.filter((a) => a.bylines);

export function authorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

/**
 * Resolve a byline string from insights.ts to an author record.
 * Returns undefined when the name is not on the roster, so the byline
 * renders as plain text rather than linking somewhere that does not exist.
 */
export function findAuthorByName(name: string): Author | undefined {
  const wanted = name.trim().toLocaleLowerCase();
  return authors.find((a) => a.name.toLocaleLowerCase() === wanted);
}

export function authorPath(author: Author): string {
  return `/the-studio/creative-talents/${author.slug}`;
}
