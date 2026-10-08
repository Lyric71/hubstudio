/**
 * RSS 2.0 feed of every resource hubStudio publishes: the insights and the
 * how-to guides, merged newest first. One feed per locale:
 *
 *   https://www.hubstudio.ai/resources/rss.xml           English
 *   https://www.hubstudio.ai/fr/ressources/rss.xml       French
 *   https://www.hubstudio.ai/zh/resources/rss.xml        Chinese
 *
 * Built from src/data/insights.ts and src/data/howtos.ts, so a resource
 * enters the feeds the moment it is added there. The French and Chinese
 * titles, decks and categories come from the same dictionaries that
 * translate the pages (src/i18n/dict), and the links from the French
 * addresses in src/i18n/routes.ts: a feed item reads exactly like the page
 * it points to. Built by hand (no @astrojs/rss) to honour the self-host rule.
 *
 * The older insights-only feed (/resources/insights/rss.xml) stays as it is:
 * the LinkedIn auto-poster reads it.
 */
import { insights } from '../data/insights';
import { howtos } from '../data/howtos';
import { dictionaryFor, pathIn, HTML_LANG, type Locale } from '../i18n/index';

const SITE = 'https://www.hubstudio.ai';

/** Address of each locale's feed, also used by the autodiscovery link. */
export const RESOURCES_FEED: Record<Locale, string> = {
  en: '/resources/rss.xml',
  fr: '/fr/ressources/rss.xml',
  zh: '/zh/resources/rss.xml',
};

/** Feed title per locale, for the channel and the autodiscovery link. */
export const RESOURCES_FEED_TITLE: Record<Locale, string> = {
  en: 'hubStudio Resources',
  fr: 'Ressources hubStudio',
  zh: 'hubStudio 资源',
};

const DESCRIPTION: Record<Locale, string> = {
  en: 'Every insight and how-to guide hubStudio publishes, newest first: AI content production, platform specs, engines and working methods.',
  fr: 'Analyses et guides pratiques de hubStudio, au fil de leur parution : production de contenus par IA, formats des plateformes, moteurs et méthodes de travail.',
  zh: 'hubStudio 发布的每一篇洞察与实操指南，按发布时间由新到旧：AI 内容生产、各平台规格、生成引擎与工作方法。',
};

/** Escape the five XML predefined entities for use in element text. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Text as Astro renders it into the page: the form the dictionary keys take. */
function htmlEscape(value: string): string {
  return value
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** A dictionary value back to plain text: placeholders dropped, entities read. */
function plain(value: string): string {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/** ISO date (YYYY-MM-DD) to an RFC-822 date string, as RSS pubDate wants. */
function rfc822(dateISO: string): string {
  return new Date(`${dateISO}T00:00:00Z`).toUTCString();
}

/** MIME type for an enclosure, inferred from the file extension. */
function imageType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  if (ext === 'png') return 'image/png';
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
  if (ext === 'avif') return 'image/avif';
  return 'image/webp';
}

interface Resource {
  enPath: string;
  title: string;
  deck: string;
  category: string;
  author: string;
  dateISO: string;
  image: string;
}

/** Insights and how-to guides together, newest first. */
function resources(): Resource[] {
  const all: Resource[] = [
    ...insights.map((i) => ({ ...i, enPath: `/resources/insights/${i.slug}` })),
    ...howtos.map((h) => ({ ...h, enPath: `/resources/how-to/${h.slug}` })),
  ];
  // Stable sort: on the same day, the order of each data file holds.
  return all.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

/**
 * One resource's text in `locale`, read from its own page's dictionary (the
 * shared one as a fallback). A sentence the dictionaries do not hold throws:
 * the build stops rather than ship English in a French or Chinese feed.
 */
function translator(locale: Locale, enPath: string): (en: string) => string {
  if (locale === 'en') return (en) => en;
  const lookup = dictionaryFor(locale, enPath);
  return (en) => {
    const hit = lookup(htmlEscape(en));
    if (!hit) {
      throw new Error(
        `[resources feed] ${enPath}: no ${locale} translation for "${en.slice(0, 60)}". Translate the page first (src/i18n/TRANSLATING.md).`,
      );
    }
    return plain(hit);
  };
}

/** The whole feed document for one locale. */
export function resourcesFeed(locale: Locale): string {
  const list = resources();
  const hub = `${SITE}${pathIn('/resources', locale)}`;
  const self = `${SITE}${RESOURCES_FEED[locale]}`;
  const title = RESOURCES_FEED_TITLE[locale];
  const lastBuild = list.length ? rfc822(list[0].dateISO) : new Date(0).toUTCString();

  const items = list
    .map((r) => {
      const path = pathIn(r.enPath, locale);
      if (!path) throw new Error(`[resources feed] ${r.enPath} has no ${locale} address in src/i18n/routes.ts`);
      const t = translator(locale, r.enPath);
      const url = `${SITE}${path}`;
      const image = new URL(r.image, SITE).href;
      return `    <item>
      <title>${esc(t(r.title))}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${rfc822(r.dateISO)}</pubDate>
      <category>${esc(t(r.category))}</category>
      <dc:creator>${esc(r.author)}</dc:creator>
      <description>${esc(t(r.deck))}</description>
      <enclosure url="${esc(image)}" type="${imageType(r.image)}" length="0" />
      <media:content url="${esc(image)}" medium="image" type="${imageType(r.image)}" />
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${esc(title)}</title>
    <link>${esc(hub)}</link>
    <atom:link href="${esc(self)}" rel="self" type="application/rss+xml" />
    <description>${esc(DESCRIPTION[locale])}</description>
    <language>${HTML_LANG[locale]}</language>
    <copyright>hubStudio</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <image>
      <url>${SITE}/logo/hubstudio-logo.png</url>
      <title>${esc(title)}</title>
      <link>${esc(hub)}</link>
    </image>
${items}
  </channel>
</rss>
`;
}

/** The HTTP answer for one locale's feed. */
export function resourcesFeedResponse(locale: Locale): Response {
  return new Response(resourcesFeed(locale), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
