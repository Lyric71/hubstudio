/**
 * The hubStudio help center: the articles of src/content/help/ (copied from
 * the app's repository by `npm run help:sync`), in the reading order and the
 * groups that index.md gives them.
 */
import type { MarkdownHeading } from 'astro';
import indexRaw from '../content/help/index.md?raw';

interface Frontmatter {
  title: string;
  seoTitle?: string;
  description: string;
  excerpt?: string;
  order: number;
  updated?: string;
  audience?: string;
}

interface MarkdownModule {
  frontmatter: Frontmatter;
  Content: any;
  getHeadings: () => MarkdownHeading[];
}

export interface HelpArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  order: number;
  updated: string | null;
  audience: string | null;
  group: string;
  Content: any;
  headings: MarkdownHeading[];
}

export interface HelpGroup {
  title: string;
  articles: HelpArticle[];
}

const modules = import.meta.glob<MarkdownModule>('../content/help/*.md', { eager: true });

export const helpHome = modules['../content/help/index.md'];

/** Group of each article, read from the "## Group" headings of index.md. */
function groupsFromIndex(): Map<string, string> {
  const out = new Map<string, string>();
  let group = '';
  for (const line of indexRaw.split('\n')) {
    const h = /^##\s+(.+?)\s*$/.exec(line);
    if (h) group = h[1];
    const link = /\]\(\/help\/([\w-]+)[)#]/.exec(line);
    if (link && group && !out.has(link[1])) out.set(link[1], group);
  }
  return out;
}

const groupOf = groupsFromIndex();

export const helpArticles: HelpArticle[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.md'))
  .map(([path, m]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const fm = m.frontmatter;
    return {
      slug,
      title: fm.title,
      seoTitle: fm.seoTitle ?? `${fm.title} | hubStudio Help`,
      description: fm.description,
      excerpt: fm.excerpt ?? fm.description,
      order: fm.order ?? 99,
      updated: fm.updated ? String(fm.updated).slice(0, 10) : null,
      audience: fm.audience ?? null,
      group: groupOf.get(slug) ?? 'More',
      Content: m.Content,
      headings: m.getHeadings(),
    };
  })
  .sort((a, b) => a.order - b.order);

export const helpGroups: HelpGroup[] = helpArticles.reduce<HelpGroup[]>((acc, a) => {
  const g = acc.find((x) => x.title === a.group);
  if (g) g.articles.push(a);
  else acc.push({ title: a.group, articles: [a] });
  return acc;
}, []);

/** The intro paragraph of index.md: its first plain paragraph. */
export const helpIntro: string =
  indexRaw
    .replace(/^---[\s\S]*?---/, '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('#') && !/^\d+\./.test(p)) ?? '';

export function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
