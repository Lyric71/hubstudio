/**
 * What changed in the hubStudio app, newest first: the entries of
 * changelog.json, written by `npm run changelog:sync` from the app
 * repository's hubstudio-site/changelog.md, with the public edits of
 * changelog-edits.json applied. Never edit changelog.json by hand.
 * Rendered by /app/whats-new and the "What's new" band of the home page.
 */
import data from './changelog.json';

export type ChangeKind = 'new' | 'improved' | 'fixed';

/** A paragraph, or a bullet list. Inline **bold** is the only markup. */
export type ChangeBlock = { text: string } | { list: string[] };

export interface Change {
  /** Stable anchor on /app/whats-new: `<dateISO>-<title slug>`. */
  id: string;
  title: string;
  dateISO: string;
  kind: ChangeKind;
  blocks: ChangeBlock[];
}

export const changes = data as Change[];

export const KIND_LABEL: Record<ChangeKind, string> = {
  new: 'New',
  improved: 'Improved',
  fixed: 'Fixed',
};

/** "2026-10-08" to "October 8, 2026", the site's date style. */
export function changeDate(dateISO: string): string {
  return new Date(`${dateISO}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** One line of changelog Markdown as HTML: escaped, with **bold** kept. */
export function changeHtml(md: string): string {
  return md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** The entries grouped by release day, newest day first. */
export function changesByDay(): { dateISO: string; items: Change[] }[] {
  const days: { dateISO: string; items: Change[] }[] = [];
  for (const c of changes) {
    const last = days[days.length - 1];
    if (last && last.dateISO === c.dateISO) last.items.push(c);
    else days.push({ dateISO: c.dateISO, items: [c] });
  }
  return days;
}
