// Vercel serverless function: receives lead/contact form submissions.
//
// Runtime: Node.js (auto-detected by Vercel for files in /api).
// Works alongside the static Astro build — no adapter required.
//
// Today it validates the payload and logs it (visible in the Vercel
// "Functions" logs). When the email service is ready, set the RESEND_API_KEY
// environment variable in Vercel and uncomment the Resend block below.

const RECIPIENT = process.env.LEAD_RECIPIENT || 'info@wamocon.com';
const SENDER = process.env.LEAD_SENDER || 'WAMOCON Website <onboarding@resend.dev>';

function readBody(req) {
  // Vercel parses application/json and x-www-form-urlencoded into req.body.
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }
  return {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);
  const name = (body.name || '').toString().trim();
  const phone = (body.phone || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const comment = (body.comment || '').toString().trim();
  const type = (body.type || 'lead').toString().trim();
  const lang = (body.lang || 'de').toString().trim();
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on';

  // The consent checkbox is mandatory.
  if (!consent) {
    return res.status(400).json({ ok: false, error: 'Consent is required.' });
  }
  // Require a name plus at least one way to reach the person.
  if (!name || (!phone && !email)) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }

  const submission = {
    type,
    lang,
    name,
    phone,
    email,
    comment,
    receivedAt: new Date().toISOString(),
  };

  // Always log so submissions are never silently lost (Vercel → Functions logs).
  console.log('[lead] new submission', JSON.stringify(submission));

  // ---------------------------------------------------------------------------
  // EMAIL (Resend) — enable later by setting RESEND_API_KEY in Vercel env vars
  // and running `npm install resend`.
  //
  // import { Resend } from 'resend';
  // if (process.env.RESEND_API_KEY) {
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: SENDER,
  //     to: RECIPIENT,
  //     reply_to: email || undefined,
  //     subject: `Neue Anfrage (${type}) von ${name}`,
  //     text: [
  //       `Typ: ${type}`,
  //       `Sprache: ${lang}`,
  //       `Name: ${name}`,
  //       `Telefon: ${phone || '-'}`,
  //       `E-Mail: ${email || '-'}`,
  //       `Nachricht: ${comment || '-'}`,
  //       `Eingegangen: ${submission.receivedAt}`,
  //     ].join('\n'),
  //   });
  // }
  // ---------------------------------------------------------------------------

  return res.status(200).json({ ok: true });
}
