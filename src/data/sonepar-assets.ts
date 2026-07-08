/**
 * Sonepar project assets (hidden review page at /sonepar).
 *
 * Visual concepts for an outdoor pole-top LED luminaire, staged across eight
 * Nordic settings. Each concept is ONE card: the same visual delivered in up
 * to three formats (square, wide banner). The card previews one format and
 * lets the reviewer switch; comments attach to the concept, not the format.
 *
 * Comments are NOT stored here, they live in Vercel KV and are keyed by `id`
 * (see src/lib/sonepar.ts). `id` must be unique, lowercase, hyphen-separated:
 * it is the storage key for that concept's comments, so never reuse or rename
 * it once comments exist.
 *
 * Source files live in public/sonepar-full/, deliberately OUTSIDE
 * public/Images/ so the image optimizer never touches them: the page serves
 * and downloads the untouched originals.
 */

export interface SoneparFormat {
  /** Short label on the format switch, e.g. 'Square', 'Banner'. */
  label: string;
  /** Root-relative path under /sonepar-full/. */
  file: string;
  /** Technical definition shown as a caption: format, pixel size. */
  spec: string;
}

export interface SoneparAsset {
  /** Unique, stable, lowercase-kebab. Also the KV key for this concept's comments. */
  id: string;
  /** Concept title shown on the card. */
  title: string;
  /** Alt text for the preview image (accessibility + when the file fails to load). */
  alt: string;
  /** Body description, one or more sentences. */
  description: string;
  /** Delivery formats of the same visual; the first one is the default preview. */
  formats: SoneparFormat[];
}

export const soneparAssets: SoneparAsset[] = [
  {
    id: 'residential',
    title: 'Residential street in snowfall',
    alt: 'Snow-capped pole-top LED luminaires lighting a snowy path between red and yellow wooden houses at blue hour, snow falling.',
    description:
      'The luminaire lining a snowed-in residential lane of red and yellow wooden houses at blue hour, snow falling through the beam. The banner variants reframe the same scene: A keeps the houses on the left half, B runs the lit path up the centre.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/residential/residential-1254x1254.jpg',
        spec: 'JPG · 1254 × 1254',
      },
      {
        label: 'Banner A',
        file: '/sonepar-full/residential/residential-banner-a-2172x724.jpg',
        spec: 'JPG · 2172 × 724',
      },
      {
        label: 'Banner B',
        file: '/sonepar-full/residential/residential-banner-b-2172x724.jpg',
        spec: 'JPG · 2172 × 724',
      },
    ],
  },
  {
    id: 'frozen-lakeside',
    title: 'Frozen lakeside promenade',
    alt: 'Frost-covered pole-top luminaires along a lakeside boardwalk railing at dawn, frozen lake and pink sky beyond.',
    description:
      'Frost-covered luminaires along a boardwalk railing over a frozen lake, hoarfrost on every surface and a pastel pink dawn on the horizon.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/frozen-lakeside/frozen-lakeside-800x800.jpg',
        spec: 'JPG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/frozen-lakeside/frozen-lakeside-1920x555.jpg',
        spec: 'JPG · 1920 × 555',
      },
    ],
  },
  {
    id: 'town-square',
    title: 'Historic town square',
    alt: 'Pole-top luminaire standing alone on a granite square at dusk, neoclassical town hall with warm uplit columns behind.',
    description:
      'A single luminaire on a granite square in front of a floodlit neoclassical town hall at dusk, the warm facade against a deep blue sky.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/town-square/town-square-800x800.png',
        spec: 'PNG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/town-square/town-square-1920x555.png',
        spec: 'PNG · 1920 × 555',
      },
    ],
  },
  {
    id: 'arctic-aurora',
    title: 'Arctic aurora',
    alt: 'Snow-capped pole-top luminaire lighting a curving snowy path, starry sky and green-violet aurora over a snow-laden spruce forest.',
    description:
      'A lone snow-capped luminaire on a forest path under a green and violet aurora, its warm pool of light holding the foreground against the starfield.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/arctic-aurora/arctic-aurora-800x800.png',
        spec: 'PNG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/arctic-aurora/arctic-aurora-1920x555.png',
        spec: 'PNG · 1920 × 555',
      },
    ],
  },
  {
    id: 'waterfront-boardwalk',
    title: 'Modern waterfront boardwalk',
    alt: 'Row of pole-top luminaires lighting a wet harbour promenade at night, walkers ahead and the city skyline across the water.',
    description:
      'A row of luminaires along a city harbour promenade at night: warm pools of light on wet pavers, planters at the edge, the skyline glittering across the water.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/waterfront-boardwalk/waterfront-boardwalk-800x800.jpg',
        spec: 'JPG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/waterfront-boardwalk/waterfront-boardwalk-1920x555.jpg',
        spec: 'JPG · 1920 × 555',
      },
    ],
  },
  {
    id: 'park-avenue',
    title: 'Tree-lined urban park avenue',
    alt: 'Symmetrical tree-lined park avenue at night, rows of pole-top luminaires lighting the paved walk, city apartment blocks on the horizon.',
    description:
      'A symmetrical night avenue through a new urban park: young trees and ornamental grasses either side of a paved walk, the lamp rows carrying the eye to the city at the far end.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/park-avenue/park-avenue-800x800.jpg',
        spec: 'JPG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/park-avenue/park-avenue-1920x555.jpg',
        spec: 'JPG · 1920 × 555',
      },
    ],
  },
  {
    id: 'stockholm-courtyard',
    title: 'Stockholm courtyard',
    alt: 'Pole-top luminaire beside a timber-clad apartment wall in a residential courtyard at dusk, curving path and frosted grasses below.',
    description:
      'The luminaire in a residential courtyard at dusk: timber-clad and brick apartment blocks around a curving path, frosted planting catching the light.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/stockholm-courtyard/stockholm-courtyard-800x800.png',
        spec: 'PNG · 800 × 800',
      },
    ],
  },
  {
    id: 'eco-district',
    title: 'Sustainable eco-district at twilight',
    alt: 'Pole-top luminaires lighting a brick path beside a planted stream in a timber eco-district at twilight, bikes parked at right.',
    description:
      'Timber housing with green roofs and solar panels around a planted stream, the luminaires lighting a brick path in the sunset afterglow, footbridge and parked bikes grounding the everyday feel.',
    formats: [
      {
        label: 'Square',
        file: '/sonepar-full/eco-district/eco-district-800x800.jpg',
        spec: 'JPG · 800 × 800',
      },
      {
        label: 'Banner',
        file: '/sonepar-full/eco-district/eco-district-1920x555.jpg',
        spec: 'JPG · 1920 × 555',
      },
    ],
  },
];
