/**
 * Contact form endpoint (`POST /api/contact`).
 * Receives the project brief from /contact, sends it to the studio inbox via
 * Resend. Server-rendered on demand (Vercel function), so the rest of the
 * site stays static. JS submits with `Accept: application/json` and reads the
 * JSON reply; a plain form post (no JS) is answered with a 303 to /thank-you.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const TO = 'cyril.drouin@outlook.com';
const FROM = 'hubStudio Contact <onboarding@resend.dev>';

/** Escape values before they land in the notification email's HTML. */
function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

  const ok = () =>
    wantsJson
      ? new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      : redirect('/thank-you', 303);

  const fail = (status: number, error: string) =>
    wantsJson
      ? new Response(JSON.stringify({ ok: false, error }), {
          status,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(error, { status });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'We could not read the form. Please try again.');
  }

  // Honeypot: a hidden field people never see. If it is filled, drop the
  // message and report success so the bot learns nothing.
  if (((form.get('company_url') as string) ?? '').trim() !== '') {
    return ok();
  }

  const val = (key: string) => ((form.get(key) as string) ?? '').trim();
  const firstName = val('firstName');
  const lastName = val('lastName');
  const email = val('email');
  const company = val('company');
  const website = val('website');
  const clientType = val('clientType');
  const subscription = val('subscription');
  const budget = val('budget');
  const message = val('message');
  // Access to the gated quotation calculator is granted by hand, so this ask has
  // to be impossible to miss: it rides in the subject line too.
  const quotationEngine = val('quotationEngine') === 'yes';
  const services = form
    .getAll('services')
    .map((s) => String(s).trim())
    .filter(Boolean);

  if (!firstName || !lastName || !email || !company || !message) {
    return fail(422, 'Please fill in your name, work email, company, and project details.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail(422, 'That email address does not look right.');
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return fail(
      500,
      'The contact form is not configured yet. Email hello@bearingbridge.com directly.',
    );
  }

  const blank = 'Not provided';
  const rows: [string, string][] = [
    ['Name', `${firstName} ${lastName}`],
    ['Work email', email],
    ['Company', company],
    ['Website', website || blank],
    ['Client type', clientType || blank],
    ['Services', services.length ? services.join(', ') : blank],
    ['Design subscription', subscription || blank],
    ['Budget', budget || blank],
    ['Quotation Engine', quotationEngine ? 'Requesting access' : 'No'],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0a0a14;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:18px">New project brief</h2>
      <p style="margin:0 0 18px;color:#6b6b73;font-size:13px">Submitted via hubstudio.ai/contact</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:7px 12px 7px 0;color:#6b6b73;vertical-align:top;white-space:nowrap">${esc(
                k,
              )}</td><td style="padding:7px 0;font-weight:600">${esc(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:22px 0 6px;font-size:14px">Project</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: quotationEngine
        ? `Quotation Engine access: ${company} (${firstName} ${lastName})`
        : `New brief: ${company} (${firstName} ${lastName})`,
      html,
    });
    if (error) {
      return fail(
        502,
        'We could not send your message. Email hello@bearingbridge.com and we will pick it up.',
      );
    }
  } catch {
    return fail(
      502,
      'We could not send your message. Email hello@bearingbridge.com and we will pick it up.',
    );
  }

  return ok();
};
