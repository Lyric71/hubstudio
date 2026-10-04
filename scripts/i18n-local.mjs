/**
 * Run scripts/i18n.mjs (extract or check) against a dev server of this
 * checkout, starting one when none runs, so an unattended run (the editorial
 * publish job, a night run) never depends on a server someone left open.
 *
 *   npm run i18n:local -- extract --context .i18n-work/ctx
 *   npm run i18n:local -- check
 *   npm run i18n:local -- check --restart   (see "Password-gated pages")
 *
 * Any option of scripts/i18n.mjs passes through (--only, --context).
 *
 * Which server:
 * - I18N_URL when it is set (it must be this checkout's server);
 * - else the server astro records for this checkout in .astro/dev.json, when
 *   its process is alive and it answers: that one is used and left running;
 * - else `astro dev` is started from this checkout on the port of the
 *   default address of scripts/i18n.mjs (read from that file). When another
 *   checkout holds that port, astro takes the next free one; the address used
 *   is the one astro writes in .astro/dev.json for the process started here,
 *   never a server that merely answers on the port. Its output goes to
 *   .i18n-work/dev-server.log; it is stopped when the command ends.
 *
 * Password-gated pages: when I18N_COOKIE is not set, the gate cookies are
 * signed here the way the gates sign them (src/lib/*.ts holding a COOKIE_NAME
 * and a *_SESSION_SECRET; the secret from the environment, then .env, then the
 * gate's own fallback), so an extract never drops the signed-in sentences. A
 * gate whose token is not the known `<exp>.<HMAC-SHA256 base64url>` shape
 * stops the command: set I18N_COOKIE by hand then. When there are gates, a
 * running server started before the last .env change still holds the old
 * secrets: the command stops and says so; run it again with --restart to
 * replace that server.
 *
 * Exit code: the one of scripts/i18n.mjs, or 1 when no server could be had.
 * Same file in the other site's repository (hubstudio / BearingBridgeCOM):
 * keep the two in step.
 */
import { spawn, spawnSync } from 'node:child_process';
import { createHmac } from 'node:crypto';
import { existsSync, mkdirSync, openSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const RESTART = process.argv.includes('--restart');
const args = process.argv.slice(2).filter((a) => a !== '--restart');
if (!['extract', 'check'].includes(args[0])) {
  console.error('Usage: npm run i18n:local -- extract|check [--context <dir>] [--only /a,/b]');
  process.exit(2);
}

/* ---------------- environment ---------------- */

function dotenv() {
  const env = {};
  // Vite's order: later files win.
  for (const f of ['.env', '.env.development', '.env.local', '.env.development.local']) {
    const file = join(root, f);
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
      if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  }
  return env;
}
const fileEnv = dotenv();
const envValue = (name) => process.env[name] ?? fileEnv[name];

const i18nSource = readFileSync(join(root, 'scripts', 'i18n.mjs'), 'utf8');
const DEFAULT_URL = (/process\.env\.I18N_URL\s*\?\?\s*'([^']+)'/.exec(i18nSource)?.[1] ?? 'http://127.0.0.1:4321').replace(/\/$/, '');

/* ---------------- gate cookies ---------------- */

function gateCookies() {
  const libDir = join(root, 'src', 'lib');
  if (!existsSync(libDir)) return '';
  const cookies = [];
  for (const f of readdirSync(libDir).filter((n) => n.endsWith('.ts'))) {
    const src = readFileSync(join(libDir, f), 'utf8');
    const name = /const COOKIE_NAME\s*=\s*'([^']+)'/.exec(src)?.[1];
    const secret = /import\.meta\.env\.([A-Z0-9_]+_SESSION_SECRET)\s*\?\?\s*'([^']+)'/.exec(src);
    if (!name || !secret) continue;
    if (!/const payload = String\(exp\);/.test(src) || !src.includes('`${payload}.${await sign(payload)}`')) {
      console.error(`✗ src/lib/${f}: its session token is not the known shape; set I18N_COOKIE by hand (see scripts/i18n.mjs).`);
      process.exit(1);
    }
    const key = envValue(secret[1]) ?? secret[2];
    const exp = String(Math.floor(Date.now() / 1000) + 60 * 60 * 6);
    const sig = createHmac('sha256', key).update(exp).digest('base64url');
    cookies.push(`${name}=${exp}.${sig}`);
  }
  return cookies.join('; ');
}

/* ---------------- dev server ---------------- */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function answers(url) {
  try {
    const res = await fetch(`${url}/`, { signal: AbortSignal.timeout(20000) });
    return res.status < 500;
  } catch {
    return false;
  }
}
function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return err.code === 'EPERM';
  }
}
/** The dev server astro records for this checkout: {pid, url} or null. */
function lockFile() {
  const file = join(root, '.astro', 'dev.json');
  if (!existsSync(file)) return null;
  try {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    return data.pid && data.url
      ? { pid: data.pid, url: String(data.url).replace(/\/$/, ''), startedAt: Date.parse(data.startedAt ?? '') || 0 }
      : null;
  } catch {
    return null;
  }
}

let server = null;
function stopServer() {
  if (!server || server.exitCode !== null) return;
  // Synchronous: this also runs from the 'exit' handler.
  if (process.platform === 'win32') spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill('SIGTERM');
}
process.on('exit', stopServer);
for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => process.exit(130));

async function startServer() {
  const astro = join(root, 'node_modules', 'astro', 'bin', 'astro.mjs');
  if (!existsSync(astro)) {
    console.error('✗ node_modules/astro is missing: run npm install first.');
    process.exit(1);
  }
  const { hostname, port } = new URL(process.env.I18N_URL ?? DEFAULT_URL);
  mkdirSync(join(root, '.i18n-work'), { recursive: true });
  const log = openSync(join(root, '.i18n-work', 'dev-server.log'), 'w');
  console.log(`starting astro dev on ${hostname}:${port} (log: .i18n-work/dev-server.log)`);
  server = spawn(process.execPath, [astro, 'dev', '--host', hostname, '--port', port], {
    cwd: root,
    stdio: ['ignore', log, log],
    env: process.env,
  });
  const deadline = Date.now() + 180000;
  while (Date.now() < deadline && server.exitCode === null) {
    await sleep(2000);
    const lock = lockFile();
    const url = process.env.I18N_URL ? process.env.I18N_URL.replace(/\/$/, '') : lock?.pid === server.pid ? lock.url : null;
    if (url && (await answers(url))) return url;
  }
  console.error(`✗ the dev server started here did not answer within 3 minutes (see .i18n-work/dev-server.log).`);
  process.exit(1);
}

// Signed before the server is chosen: a running server only has to be
// replaced when gates need its .env values.
const COOKIES = process.env.I18N_COOKIE ? '' : gateCookies();

let BASE;
if (process.env.I18N_URL) {
  BASE = process.env.I18N_URL.replace(/\/$/, '');
  if (await answers(BASE)) console.log(`using the dev server at ${BASE} (I18N_URL)`);
  else BASE = await startServer();
} else {
  const lock = lockFile();
  if (lock && alive(lock.pid) && (await answers(lock.url))) {
    // A server started before the last .env change still holds the old
    // values (the gate secrets among them): its gates would refuse the
    // cookies signed here and the signed-in sentences would be dropped.
    const envChanged = Math.max(
      0,
      ...['.env', '.env.development', '.env.local', '.env.development.local']
        .map((f) => join(root, f))
        .filter(existsSync)
        .map((f) => statSync(f).mtimeMs),
    );
    if (COOKIES && lock.startedAt && envChanged > lock.startedAt) {
      if (!RESTART) {
        console.error(
          `✗ this checkout's dev server (${lock.url}, pid ${lock.pid}) started before the last .env change and still runs on the old values.
` +
            '  Run the same command with --restart: it stops that server (astro dev stop) and starts a fresh one for this command.',
        );
        process.exit(1);
      }
      console.log(`stopping the dev server started before the last .env change (pid ${lock.pid})`);
      spawnSync(process.execPath, [join(root, 'node_modules', 'astro', 'bin', 'astro.mjs'), 'dev', 'stop'], { cwd: root, stdio: 'inherit' });
      BASE = await startServer();
    } else {
      BASE = lock.url;
      console.log(`using this checkout's dev server at ${BASE} (pid ${lock.pid})`);
    }
  } else {
    BASE = await startServer();
  }
}
console.log(`dev server: ${BASE}`);

/* ---------------- run ---------------- */

const env = { ...process.env, I18N_URL: BASE };
if (COOKIES) {
  env.I18N_COOKIE = COOKIES;
  console.log(`gate cookies signed for: ${COOKIES.split('; ').map((p) => p.split('=')[0]).join(', ')}`);
}
const child = spawn(process.execPath, ['--experimental-strip-types', '--no-warnings', join(root, 'scripts', 'i18n.mjs'), ...args], {
  cwd: root,
  stdio: 'inherit',
  env,
});
const code = await new Promise((r) => child.on('exit', (c) => r(c ?? 1)));
stopServer();
process.exit(code);
