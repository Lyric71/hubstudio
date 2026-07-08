/**
 * Shared server logic for the hidden Sonepar review page (/sonepar).
 * Same pattern as src/lib/debeers.ts: a password gate backed by an
 * HMAC-signed, httpOnly session cookie (Web Crypto), plus comments stored in
 * Vercel KV (Upstash Redis REST) with plain fetch, one Redis list per asset.
 *
 * Configure in the Vercel project (or .env for local dev):
 *   SONEPAR_PASSWORD         the shared access password (falls back to the
 *                            documented default if unset).
 *   SONEPAR_SESSION_SECRET   secret used to sign session cookies. SET THIS in
 *                            production, the fallback is public in source.
 *   KV_REST_API_URL          Upstash REST URL (added by the Vercel KV /
 *   KV_REST_API_TOKEN        Upstash integration). Comments are read-only-empty
 *                            and posting is disabled until both are present.
 */

const PASSWORD = import.meta.env.SONEPAR_PASSWORD ?? 'hubstudio888+';
const SECRET =
  import.meta.env.SONEPAR_SESSION_SECRET ?? 'sonepar-fallback-secret-change-me-2026';

const COOKIE_NAME = 'sonepar_session';
const MAX_AGE_S = 60 * 60 * 24 * 7; // 7 days

/* --- base64url helpers -------------------------------------------------- */

function toBase64Url(bytes: ArrayBuffer): string {
  let bin = '';
  const view = new Uint8Array(bytes);
  for (let i = 0; i < view.length; i++) bin += String.fromCharCode(view[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/* --- HMAC session token ------------------------------------------------- */

async function sign(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return toBase64Url(sig);
}

/** Timing-safe-ish constant-length string compare. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** True when the submitted password matches. */
export function checkPassword(pw: string): boolean {
  return typeof pw === 'string' && safeEqual(pw, PASSWORD);
}

/** A `Set-Cookie` value that establishes a fresh signed session. */
export async function sessionCookie(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_S;
  const payload = String(exp);
  const token = `${payload}.${await sign(payload)}`;
  return [
    `${COOKIE_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Max-Age=${MAX_AGE_S}`,
  ].join('; ');
}

/** A `Set-Cookie` value that clears the session (used on logout). */
export function clearCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie');
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return rest.join('=');
  }
  return null;
}

/** Verify the session cookie: correct signature and not expired. */
export async function isAuthed(request: Request): Promise<boolean> {
  const token = readCookie(request, COOKIE_NAME);
  if (!token) return false;
  const dot = token.lastIndexOf('.');
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!safeEqual(sig, await sign(payload))) return false;
  const exp = Number(payload);
  return Number.isFinite(exp) && exp > Math.floor(Date.now() / 1000);
}

/* --- Comments (Vercel KV / Upstash Redis REST) -------------------------- */

const KV_URL = import.meta.env.KV_REST_API_URL;
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN;

export interface Comment {
  id: string;
  name: string;
  body: string;
  /** ISO 8601 timestamp. */
  ts: string;
}

/** Comments are available only once the KV integration is connected. */
export function kvConfigured(): boolean {
  return Boolean(KV_URL && KV_TOKEN);
}

async function kv(command: (string | number)[]): Promise<unknown> {
  const res = await fetch(KV_URL as string, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`KV ${res.status}`);
  const json = (await res.json()) as { result: unknown };
  return json.result;
}

function key(assetId: string): string {
  return `sonepar:comments:${assetId}`;
}

/** All comments for one asset, oldest first. Empty when KV is unconfigured. */
export async function getComments(assetId: string): Promise<Comment[]> {
  if (!kvConfigured()) return [];
  try {
    const raw = (await kv(['LRANGE', key(assetId), 0, -1])) as string[];
    return (raw ?? [])
      .map((s) => {
        try {
          return JSON.parse(s) as Comment;
        } catch {
          return null;
        }
      })
      .filter((c): c is Comment => c !== null);
  } catch {
    return [];
  }
}

/** Append one comment to an asset. Returns the stored record. */
export async function addComment(
  assetId: string,
  name: string,
  body: string,
): Promise<Comment> {
  const comment: Comment = {
    id: crypto.randomUUID(),
    name,
    body,
    ts: new Date().toISOString(),
  };
  await kv(['RPUSH', key(assetId), JSON.stringify(comment)]);
  return comment;
}
