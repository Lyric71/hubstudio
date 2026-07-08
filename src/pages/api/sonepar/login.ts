/**
 * Sonepar password gate (`POST /api/sonepar/login`).
 * Validates the shared password and, on success, sets the signed httpOnly
 * session cookie before returning the visitor to /sonepar. A wrong password
 * sends them back to /sonepar?error=1 with no cookie. Server-rendered on
 * demand (Vercel function); the rest of the site stays static.
 */
import type { APIRoute } from 'astro';
import { checkPassword, sessionCookie } from '../../../lib/sonepar';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect('/sonepar?error=1', 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect('/sonepar?error=1', 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: '/sonepar',
      'Set-Cookie': await sessionCookie(),
    },
  });
};
