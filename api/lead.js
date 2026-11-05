// Vercel serverless function: receives all js-lead-form submissions.
// Sends an internal notification to info@wamocon.com and a confirmation
// email to the visitor (when an email address was provided).
// Type "portfolio" instead mails the portfolio PDF (DE or EN) to the visitor;
// its only required field is the email address.
//
// Supports two Microsoft Graph auth flows (use the one you have):
//   1. Client credentials (application permission):
//      GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET
//   2. Delegated / refresh-token flow:
//      GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_REFRESH_TOKEN
//      If the app registration is a public client (mobile/desktop), set
//      GRAPH_PUBLIC_CLIENT=true so no client_secret is sent.
//
// Optional env vars:
//   GRAPH_SENDER            (defaults to info@wamocon.com)
//   LEAD_RECIPIENT          (defaults to info@wamocon.com)
//   GRAPH_PUBLIC_CLIENT     (true/false, defaults to false)
//   TURNSTILE_SECRET_KEY    (Cloudflare Turnstile; verified only when set. In
//                            production, portfolio PDF requests are refused
//                            without it, see the handler.)
//
// The client secret and refresh token must NEVER be committed to git.

import { readFileSync } from 'node:fs';

const TENANT_ID = process.env.GRAPH_TENANT_ID;
const CLIENT_ID = process.env.GRAPH_CLIENT_ID;
const CLIENT_SECRET = process.env.GRAPH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GRAPH_REFRESH_TOKEN;
const PUBLIC_CLIENT = process.env.GRAPH_PUBLIC_CLIENT === 'true';
const GRAPH_SENDER = process.env.GRAPH_SENDER || 'info@wamocon.com';
const RECIPIENT = process.env.LEAD_RECIPIENT || 'info@wamocon.com';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Portfolio one-pager, sent as an attachment for type "portfolio". The files
// sit next to this function and are bundled through vercel.json (functions →
// includeFiles). To publish a new version, overwrite them under the same name.
// The literal URLs also let Vercel's file tracer find them.
const PORTFOLIO_PDFS = {
  de: { name: 'WAMOCON_Portfolio_DE.pdf', url: new URL('./_portfolio/WAMOCON_Portfolio_DE.pdf', import.meta.url) },
  en: { name: 'WAMOCON_Portfolio_EN.pdf', url: new URL('./_portfolio/WAMOCON_Portfolio_EN.pdf', import.meta.url) },
};
const portfolioCache = new Map();

function portfolioAttachment(pdfLang) {
  const pdf = PORTFOLIO_PDFS[pdfLang];
  if (!portfolioCache.has(pdfLang)) {
    try {
      portfolioCache.set(pdfLang, readFileSync(pdf.url).toString('base64'));
    } catch (err) {
      console.error('[lead] portfolio pdf missing', pdf.name, err.code || err.message);
      err.stage = 'pdf';
      throw err;
    }
  }
  return {
    '@odata.type': '#microsoft.graph.fileAttachment',
    name: pdf.name,
    contentType: 'application/pdf',
    contentBytes: portfolioCache.get(pdfLang),
  };
}

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

// Error messages from Graph or Entra ID may quote an address; keep those out of
// the logs, keep the rest (status, AADSTS code, Graph error code) for diagnosis.
function redact(message) {
  return String(message || '')
    .replace(/[^\s@"'<>,;:()[\]]+@[^\s@"'<>,;:()[\]]+/g, '[address]')
    .slice(0, 600);
}

// Returns { ok, reason }. reason is Cloudflare's first error code, e.g.
// invalid-input-secret (the secret in Vercel is wrong), invalid-input-response
// (token not valid for this secret) or timeout-or-duplicate (token reused or expired).
async function verifyTurnstile(token) {
  if (!TURNSTILE_SECRET) return { ok: true };
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token }),
    });
    const data = await res.json();
    if (data.success === true) return { ok: true };
    const codes = Array.isArray(data['error-codes']) ? data['error-codes'].map(String) : [];
    console.error('[lead] Turnstile rejected the token', codes.join(',') || 'no reason given');
    return { ok: false, reason: codes[0] || 'rejected' };
  } catch (err) {
    console.error('[lead] Turnstile verification error', err.message || err);
    return { ok: false, reason: 'unreachable' };
  }
}

async function fetchToken(params) {
  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  const res = await fetch(url, { method: 'POST', body: params });
  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(
      `Graph token request failed: ${res.status} ${data.error_description || data.error || res.statusText}`
    );
  }

  return data;
}

async function getAccessToken() {
  if (!TENANT_ID || !CLIENT_ID) {
    throw new Error('Missing Graph tenant/client environment variables.');
  }

  // Prefer delegated flow when a refresh token is provided.
  if (REFRESH_TOKEN) {
    const makeParams = (withSecret) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', CLIENT_ID);
      if (withSecret && CLIENT_SECRET) params.append('client_secret', CLIENT_SECRET);
      params.append('refresh_token', REFRESH_TOKEN);
      params.append('scope', 'https://graph.microsoft.com/Mail.Send');
      return params;
    };

    try {
      const data = await fetchToken(makeParams(!PUBLIC_CLIENT));
      if (data.refresh_token && data.refresh_token !== REFRESH_TOKEN) {
        console.log('[lead] refresh token rotated — update GRAPH_REFRESH_TOKEN in Vercel');
      }
      return data.access_token;
    } catch (err) {
      // Already opted into public-client mode — no point retrying with a secret.
      if (PUBLIC_CLIENT) throw err;
      // A public-client refresh token cannot include a client_secret.
      const isPublicClientError =
        err.message &&
        (/AADSTS9002313|AADSTS700025/.test(err.message) ||
          err.message.toLowerCase().includes('public so neither'));
      if (CLIENT_SECRET && isPublicClientError) {
        console.log('[lead] retrying refresh without client_secret (public client)');
        const data = await fetchToken(makeParams(false));
        if (data.refresh_token && data.refresh_token !== REFRESH_TOKEN) {
          console.log('[lead] refresh token rotated — update GRAPH_REFRESH_TOKEN in Vercel');
        }
        return data.access_token;
      }
      throw err;
    }
  }

  // Fallback to client credentials (application permission) — requires a secret.
  if (!CLIENT_SECRET) {
    throw new Error('Missing GRAPH_CLIENT_SECRET for client credentials.');
  }
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('scope', 'https://graph.microsoft.com/.default');

  const data = await fetchToken(params);
  return data.access_token;
}

async function graphSendMail(accessToken, message) {
  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER)}/sendMail`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, saveToSentItems: false }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Graph sendMail failed: ${res.status} ${text}`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatReceived(iso, lang) {
  const date = new Date(iso);
  const locale =
    lang === 'de' ? 'de-DE' : lang === 'tr' ? 'tr-TR' : lang === 'kk' ? 'kk-KZ' : 'en-GB';
  return date.toLocaleString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // Vercel runs in UTC; the team reading these mails is in Germany.
    timeZone: 'Europe/Berlin',
  });
}

function typeLabel(type, lang) {
  const labels = {
    de: {
      career: 'Karriere',
      cooperation: 'Zusammenarbeit',
      lead: 'Kontakt',
      testimonial: 'Bewertung',
      'it-tester': 'IT-Tester',
      'barber-inquiry': 'Berber-Anfrage',
      portfolio: 'Portfolio-PDF',
    },
    en: {
      career: 'Career',
      cooperation: 'Cooperation',
      lead: 'Contact',
      testimonial: 'Testimonial',
      'it-tester': 'IT tester',
      'barber-inquiry': 'Barber inquiry',
      portfolio: 'Portfolio PDF',
    },
    tr: {
      career: 'Kariyer',
      cooperation: 'İşbirliği',
      lead: 'İletişim',
      testimonial: 'Referans',
      'it-tester': 'IT Test Uzmanı',
      'barber-inquiry': 'Berber Talebi',
      portfolio: 'Portföy PDF',
    },
    kk: {
      career: 'Мансап',
      cooperation: 'Ынтымақтастық',
      lead: 'Байланыс',
      testimonial: 'Пікір',
      'it-tester': 'IT тестілеуші',
      'barber-inquiry': 'Шаштараз сұрауы',
      portfolio: 'Портфолио PDF',
    },
  };
  return (labels[lang] || labels.de)[type] || type;
}

// Keys as they arrive from the forms (see src/i18n/config.ts leadSource).
const SOURCE_LABELS = {
  de: {
    google: 'Google-Suche',
    referral: 'Empfehlung',
    linkedin: 'LinkedIn',
    event: 'Veranstaltung oder Vortrag',
    known: 'Wir kennen uns bereits',
    other: 'Sonstiges',
  },
  en: {
    google: 'Google search',
    referral: 'Recommendation',
    linkedin: 'LinkedIn',
    event: 'Event or talk',
    known: 'We already know each other',
    other: 'Other',
  },
};

function sourceLabel(submission, isDe) {
  if (!submission.source) return '';
  const labels = isDe ? SOURCE_LABELS.de : SOURCE_LABELS.en;
  const base = labels[submission.source] || submission.source;
  return submission.sourceOther ? `${base}: ${submission.sourceOther}` : base;
}

// Small red text on the dark mail card. CI red #f40e0e reaches only 4.2:1 there;
// the site's --color-accent-text reaches 5.6:1 and so meets WCAG AA.
const SMALL_RED = '#ff5252';

// eyebrow: the small red line above the title. footerLine: replaces the
// standard footer sentence, e.g. when the body already explains how to reply.
function emailLayout({ title, lang, body, eyebrow = 'WAMOCON GmbH', footerLine: customFooter }) {
  const footerLine =
    customFooter ||
    (lang === 'de'
      ? 'Diese E-Mail wurde automatisch versendet. Bei Fragen antworten Sie einfach auf diese Nachricht.'
      : lang === 'tr'
        ? 'Bu e-posta otomatik olarak gönderilmiştir. Sorularınız için bu mesajı yanıtlamanız yeterlidir.'
        : lang === 'kk'
          ? 'Бұл хат автоматты түрде жіберілді. Сұрағыңыз болса, осы хатқа жауап жазсаңыз болғаны.'
          : 'This email was sent automatically. If you have any questions, simply reply to this message.');
  // § 35a GmbHG: a mail to a named recipient is a business letter and has to
  // state legal form, registered office, register court and number, and the
  // managing director. Wording as in the imprint of each language.
  const legalLine = {
    de: 'WAMOCON GmbH · Sitz: Eschborn · Registergericht: Amtsgericht Frankfurt am Main, HRB 103893 · Geschäftsführer: Dipl.-Ing. Waleri Moretz',
    en: 'WAMOCON GmbH · Registered office: Eschborn · Register court: Local Court Frankfurt am Main, HRB 103893 · Managing Director: Dipl.-Ing. Waleri Moretz',
    tr: 'WAMOCON GmbH · Şirket merkezi: Eschborn · Sicil mahkemesi: Frankfurt am Main Sulh Mahkemesi, HRB 103893 · Genel Müdür: Dipl.-Ing. Waleri Moretz',
    kk: 'WAMOCON GmbH · Тіркелген орны: Eschborn · Тіркеуші сот: Майндағы Франкфурт учаскелік соты, HRB 103893 · Басқарушы директор: Dipl.-Ing. Waleri Moretz',
  }[lang] || 'WAMOCON GmbH · Sitz: Eschborn · Registergericht: Amtsgericht Frankfurt am Main, HRB 103893 · Geschäftsführer: Dipl.-Ing. Waleri Moretz';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#101010;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:#181818;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
          <tr><td style="height:5px;background-color:#f40e0e;font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr>
            <td style="padding:36px 32px 24px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${SMALL_RED};font-family:'Poppins',Arial,sans-serif;">${escapeHtml(eyebrow)}</p>
              <h1 style="margin:0;font-size:23px;font-weight:700;color:#ffffff;line-height:1.25;font-family:'Poppins',Arial,sans-serif;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 36px;color:rgba(255,255,255,0.78);font-family:'Poppins',Arial,sans-serif;font-size:15px;line-height:1.65;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding-top:18px;color:rgba(255,255,255,0.45);font-size:12px;line-height:1.55;font-family:'Poppins',Arial,sans-serif;">
                    ${footerLine}<br>
                    <a href="https://www.wamocon.com" style="color:#ff5252;text-decoration:none;">www.wamocon.com</a><br>
                    <span style="display:inline-block;margin-top:10px;">${legalLine}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailTable(submission, lang) {
  const isDe = lang === 'de';
  const isTr = lang === 'tr';
  const isKk = lang === 'kk';
  const t = {
    heading: isDe ? 'Ihre angegebenen Daten' : isTr ? 'Verdiğiniz bilgiler' : isKk ? 'Көрсеткен деректеріңіз' : 'Your details',
    name: isDe ? 'Name' : isTr ? 'Ad Soyad' : isKk ? 'Аты-жөні' : 'Name',
    phone: isDe ? 'Telefon' : isTr ? 'Telefon' : isKk ? 'Телефон' : 'Phone',
    company: isDe ? 'Unternehmen' : isTr ? 'İşletme' : isKk ? 'Компания' : 'Company',
    packageChoice: isDe ? 'Paket' : isTr ? 'Paket' : isKk ? 'Пакет' : 'Package',
  };
  const extraRows = [
    submission.shopName
      ? `<p style="margin:0 0 8px;"><strong style="color:#ffffff;">${t.company}:</strong> ${escapeHtml(submission.shopName)}</p>`
      : '',
    submission.packageChoice
      ? `<p style="margin:0 0 8px;"><strong style="color:#ffffff;">${t.packageChoice}:</strong> ${escapeHtml(submission.packageChoice)}</p>`
      : '',
  ].join('');
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
  <tr><td style="padding:22px;">
    <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#ff5252;text-transform:uppercase;letter-spacing:0.05em;">${t.heading}</h2>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">${t.name}:</strong> ${escapeHtml(submission.name)}</p>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">${t.phone}:</strong> ${escapeHtml(submission.phone)}</p>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">E-Mail:</strong> <a href="mailto:${escapeHtml(submission.email)}" style="color:#ff5252;text-decoration:none;">${escapeHtml(submission.email)}</a></p>
    ${extraRows}
  </td></tr>
</table>`;
}

function internalEmail(submission) {
  // The internal notification always renders in German or English (WAMOCON's
  // own working languages), regardless of the submitter's language — a 'tr'
  // or 'kk' submission still needs to be quickly readable by the team.
  const isDe = submission.lang !== 'en';
  const label = typeLabel(submission.type, submission.lang);
  const subject = isDe
    ? `Neue ${label}-Anfrage von ${submission.name}`
    : `New ${label} inquiry from ${submission.name}`;
  const title = isDe ? `Neue Anfrage: ${label}` : `New inquiry: ${label}`;
  const langNames = { de: 'Deutsch', en: 'English', tr: 'Türkçe', kk: 'Қазақша' };
  const langName = langNames[submission.lang] || submission.lang;

  const extraRows = [
    submission.shopName
      ? `<p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Unternehmen' : 'Company'}:</strong> ${escapeHtml(submission.shopName)}</p>`
      : '',
    submission.packageChoice
      ? `<p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Paket' : 'Package'}:</strong> ${escapeHtml(submission.packageChoice)}</p>`
      : '',
    submission.testimonialConsent
      ? `<p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Referenz-Einwilligung' : 'Testimonial consent'}:</strong> ${isDe ? 'Ja — darf als Kundenstimme veröffentlicht werden' : 'Yes — may be published as a testimonial'}</p>`
      : '',
    sourceLabel(submission, isDe)
      ? `<p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Aufmerksam geworden über' : 'Heard about us via'}:</strong> ${escapeHtml(sourceLabel(submission, isDe))}</p>`
      : '',
    submission.comment
      ? `<p style="margin:14px 0 0;"><strong style="color:#ffffff;">${isDe ? 'Nachricht' : 'Message'}:</strong><br>${escapeHtml(submission.comment).replace(/\n/g, '<br>')}</p>`
      : '',
  ].join('');

  const body = `
<p style="margin:0 0 18px;">${isDe ? 'Eine neue Anfrage wurde über die Website übermittelt.' : 'A new inquiry has been submitted via the website.'}</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
  <tr><td style="padding:22px;">
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Typ' : 'Type'}:</strong> ${escapeHtml(label)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Sprache' : 'Language'}:</strong> ${escapeHtml(langName)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Name' : 'Name'}:</strong> ${escapeHtml(submission.name)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Telefon' : 'Phone'}:</strong> ${escapeHtml(submission.phone)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">E-Mail:</strong> <a href="mailto:${escapeHtml(submission.email)}" style="color:#ff5252;text-decoration:none;">${escapeHtml(submission.email)}</a></p>
    ${extraRows}
  </td></tr>
</table>
<p style="margin:18px 0 0;color:rgba(255,255,255,0.55);font-size:13px;">${isDe ? 'Eingegangen am' : 'Received at'}: ${formatReceived(submission.receivedAt, submission.lang)}</p>
`;

  const message = {
    subject,
    body: { contentType: 'HTML', content: emailLayout({ title, lang: isDe ? 'de' : 'en', body }) },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
  };
  if (submission.email) {
    message.replyTo = [{ emailAddress: { address: submission.email } }];
  }
  return message;
}

function confirmationEmail(submission) {
  const isDe = submission.lang === 'de';
  const isTr = submission.lang === 'tr';
  const isKk = submission.lang === 'kk';
  const subject = isDe
    ? 'Vielen Dank für Ihre Anfrage bei WAMOCON'
    : isTr
      ? 'WAMOCON\'a başvurunuz için teşekkürler'
      : isKk
        ? 'WAMOCON-ға жолдаған сұрауыңыз үшін рақмет'
        : 'Thank you for your inquiry to WAMOCON';
  const title = isDe
    ? 'Vielen Dank für Ihre Anfrage'
    : isTr
      ? 'Başvurunuz için teşekkürler'
      : isKk
        ? 'Сұрауыңыз үшін рақмет'
        : 'Thank you for your inquiry';
  const greeting = isDe ? 'Hallo' : isTr ? 'Merhaba' : isKk ? 'Сәлеметсіз бе' : 'Hi';

  const intro = isDe
    ? 'Vielen Dank für Ihre Anfrage bei <strong style="color:#ffffff;">WAMOCON</strong>. Wir haben Ihre Nachricht erhalten und freuen uns, von Ihnen zu hören!'
    : isTr
      ? '<strong style="color:#ffffff;">WAMOCON</strong>\'a başvurunuz için teşekkür ederiz. Mesajınızı aldık ve sizden haber almaktan mutluluk duyduk!'
      : isKk
        ? '<strong style="color:#ffffff;">WAMOCON</strong>-ға хабарласқаныңыз үшін рақмет. Хабарыңызды алдық, сізден хабар келгеніне қуаныштымыз!'
        : 'Thank you for reaching out to <strong style="color:#ffffff;">WAMOCON</strong>. We have received your message and are happy to hear from you!';

  const followUp = isDe
    ? 'Ein Mitglied unseres Teams wird sich innerhalb von <strong style="color:#ffffff;">48 Stunden</strong> bei Ihnen melden.'
    : isTr
      ? 'Ekibimizden biri <strong style="color:#ffffff;">48 saat içinde</strong> sizinle iletişime geçecek.'
      : isKk
        ? 'Командамыздың бір мүшесі <strong style="color:#ffffff;">48 сағат ішінде</strong> сізбен байланысады.'
        : 'A member of our team will get back to you within <strong style="color:#ffffff;">48 hours</strong>.';

  const testimonialNote = submission.testimonialConsent
    ? `<p style="margin:0 0 16px;">${
        isDe
          ? 'Vielen Dank auch für Ihre Zustimmung, Ihr Feedback als Kundenstimme zu verwenden — wir melden uns dazu gesondert bei Ihnen.'
          : isTr
            ? 'Geri bildiriminizin referans olarak kullanılmasına verdiğiniz onay için de teşekkür ederiz — bu konuda ayrıca sizinle iletişime geçeceğiz.'
            : isKk
              ? 'Пікіріңізді клиент пікірі ретінде пайдалануға келісім бергеніңіз үшін де рақмет. Бұл жөнінде сізбен бөлек хабарласамыз.'
              : 'Thank you also for agreeing to let us use your feedback as a testimonial — we will follow up with you separately about this.'
      }</p>`
    : '';

  const urgent = isDe
    ? 'Bei dringenden Anliegen antworten Sie einfach auf diese E-Mail oder schreiben Sie uns an <a href="mailto:info@wamocon.com" style="color:#ff5252;text-decoration:none;">info@wamocon.com</a>.'
    : isTr
      ? 'Acil durumlar için bu e-postayı yanıtlayabilir veya <a href="mailto:info@wamocon.com" style="color:#ff5252;text-decoration:none;">info@wamocon.com</a> adresine yazabilirsiniz.'
      : isKk
        ? 'Мәселе шұғыл болса, осы хатқа жауап жазыңыз немесе <a href="mailto:info@wamocon.com" style="color:#ff5252;text-decoration:none;">info@wamocon.com</a> мекенжайына жіберіңіз.'
        : 'If your matter is urgent, simply reply to this email or write to us at <a href="mailto:info@wamocon.com" style="color:#ff5252;text-decoration:none;">info@wamocon.com</a>.';

  const signoff = isDe ? 'Mit freundlichen Grüßen' : isTr ? 'Saygılarımızla' : isKk ? 'Ізгі тілекпен' : 'Best regards';
  const teamName = isDe
    ? 'Ihr WAMOCON-Team'
    : isTr
      ? 'WAMOCON Ekibiniz'
      : isKk
        ? 'WAMOCON командаңыз'
        : 'Your WAMOCON Team';

  const body = `
<p style="font-size:17px;color:#ffffff;margin:0 0 16px;font-weight:600;">${greeting} ${escapeHtml(submission.name)} 👋</p>
<p style="margin:0 0 16px;">${intro}</p>
<p style="margin:0 0 24px;">${followUp}</p>
${detailTable(submission, submission.lang)}
${testimonialNote}
<p style="margin:24px 0 0;">${urgent}</p>
<p style="margin:24px 0 0;">${signoff},<br><strong style="color:#ffffff;">${teamName}</strong></p>
`;

  return {
    subject,
    body: { contentType: 'HTML', content: emailLayout({ title, lang: submission.lang, body }) },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: submission.email } }],
  };
}

// The mail that carries the portfolio PDF. It contains no text the visitor
// typed, only fixed copy and the attachment: whoever enters someone else's
// address cannot use this mail to deliver a message of their own.
function portfolioEmail(submission) {
  const isDe = submission.pdfLang === 'de';
  const strong = (text) => `<strong style="color:#ffffff;">${text}</strong>`;
  // The two companies appear as one brand, "WAMOCON Group". The legal footer
  // still names WAMOCON GmbH, the company that actually sends the mail (§ 35a GmbHG).
  // The mail follows the one-page PDF: it opens with the PDF's headline and
  // names every main topic under the PDF's own section names and figures, so
  // mail and attachment read alike (forwarded mails included). It describes the
  // attachment; the only offer is the reply line, because the mail answers a
  // request and must not turn into advertising (§ 7 UWG). A new PDF version may
  // need new figures here.
  const subject = isDe ? 'Das Portfolio der WAMOCON Group' : 'The WAMOCON Group portfolio';
  const greeting = isDe ? 'Guten Tag,' : 'Hello,';
  const intro = isDe
    ? `vielen Dank für Ihr Interesse. Das Portfolio der WAMOCON Group finden Sie als PDF im Anhang. Es beginnt mit unserem Grundsatz: ${strong('KI prüft. Der Mensch entscheidet.')}`
    : `Thank you for your interest. You will find the WAMOCON Group portfolio attached as a PDF. It opens with our principle: ${strong('AI checks. Humans decide.')}`;
  const sections = isDe
    ? [
        ['Der Kern', 'Built-in Governance: Vier KI-Agenten prüfen gegen 13 Prüfpunkte, freigeben kann nur ein Mensch.'],
        ['Drei Bereiche', 'KI-Lösungen &amp; Branchen-Software, IT-Consulting &amp; SAP sowie Training &amp; Enablement, für regulierte Konzerne in DACH und Zentralasien.'],
        ['Erfahrung und Nachweise', 'Über 100 Projekte seit 2007 in mehr als 15 Branchen und sechs Ländern, über 50 eigene Systeme, mehr als 500 Kursteilnehmende, über sieben Jahre Governance in Konzern-IT. Ausgezeichnet als „KI-Innovator 2025“, AZAV-zertifiziert und ISTQB-akkreditiert.'],
        ['Ihr Einstieg', 'Live-Demo und Governance-Check, dann ein Pilot in zwei Monaten zum Festpreis, danach Skalierung und Partnering.'],
      ]
    : [
        ['The core', 'Built-in Governance: four AI agents check against 13 checkpoints, and only a human can sign off.'],
        ['Three areas', 'AI solutions &amp; industry-specific software, IT consulting &amp; SAP, and training &amp; enablement, for regulated corporations in the DACH region and Central Asia.'],
        ['Experience and credentials', 'More than 100 projects since 2007 across over 15 sectors and six countries, over 50 in-house systems, more than 500 course participants and over seven years of governance in corporate IT. Awarded ‘AI Innovator 2025’, AZAV-certified and ISTQB-accredited.'],
        ['Your first steps', 'A live demo and governance check, then a two-month pilot at a fixed price, followed by scaling and partnering.'],
      ];
  const reply = isDe
    ? 'Wenn Sie Fragen haben oder eine Live-Demo sehen möchten, antworten Sie einfach auf diese E-Mail.'
    : 'If you have any questions or would like to see a live demo, simply reply to this email.';
  // DIN 5008: no comma after the German closing formula. British English
  // (as in the English PDF) signs off with "Kind regards," and "The … team".
  const signoff = isDe ? `Mit freundlichen Grüßen<br>${strong('Ihr WAMOCON-Team')}` : `Kind regards,<br>${strong('The WAMOCON team')}`;
  const why = isDe
    ? 'Sie erhalten diese E-Mail, weil auf www.wamocon.com unser Portfolio für diese Adresse angefordert wurde. Weitere E-Mails schicken wir Ihnen nicht.'
    : 'You are receiving this email because our portfolio was requested for this address on www.wamocon.com. We will not send you any further emails.';
  // The body already says how to reply, so the footer only states the fact.
  const footerLine = isDe ? 'Diese E-Mail wurde automatisch verschickt.' : 'This email was sent automatically.';

  const body = `
<p style="margin:0 0 16px;">${greeting}</p>
<p style="margin:0;">${intro}</p>
${sections
  .map(
    ([title, text]) => `<p role="heading" aria-level="2" style="margin:22px 0 4px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${SMALL_RED};">${title}</p>
<p style="margin:0;">${text}</p>`
  )
  .join('\n')}
<p style="margin:24px 0 0;">${reply}</p>
<p style="margin:24px 0 0;">${signoff}</p>
<p style="margin:24px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">${why}</p>
`;

  return {
    subject,
    body: {
      contentType: 'HTML',
      content: emailLayout({ title: subject, lang: isDe ? 'de' : 'en', body, eyebrow: 'WAMOCON Group', footerLine }),
    },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: submission.email } }],
    attachments: [portfolioAttachment(submission.pdfLang)],
  };
}

function portfolioInternalEmail(submission) {
  // Same rule as internalEmail: German unless the page itself was English.
  const isDe = submission.lang !== 'en';
  const langNames = { de: 'Deutsch', en: 'English', tr: 'Türkçe', kk: 'Қазақша' };
  const pdfName = submission.pdfLang === 'de' ? (isDe ? 'Deutsch' : 'German') : isDe ? 'Englisch' : 'English';
  const subject = isDe
    ? `Portfolio-PDF (${pdfName}) angefordert von ${submission.email}`
    : `Portfolio PDF (${pdfName}) requested by ${submission.email}`;
  const title = isDe ? 'Portfolio-PDF angefordert' : 'Portfolio PDF requested';
  const row = (label, value) =>
    `<p style="margin:0 0 10px;"><strong style="color:#ffffff;">${label}:</strong> ${value}</p>`;
  const email = escapeHtml(submission.email);

  const body = `
<p style="margin:0 0 18px;">${
    isDe
      ? 'Über die Portfolio-Seite wurde das PDF angefordert und automatisch verschickt.'
      : 'The PDF was requested on the portfolio page and has been sent automatically.'
  }</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
  <tr><td style="padding:22px;">
    ${row(isDe ? 'Typ' : 'Type', escapeHtml(typeLabel('portfolio', isDe ? 'de' : 'en')))}
    ${row(isDe ? 'PDF-Sprache' : 'PDF language', escapeHtml(pdfName))}
    ${row(isDe ? 'Seitensprache' : 'Page language', escapeHtml(langNames[submission.lang] || submission.lang))}
    ${row('E-Mail', `<a href="mailto:${email}" style="color:#ff5252;text-decoration:none;">${email}</a>`)}
  </td></tr>
</table>
<p style="margin:18px 0 0;">${
    isDe
      ? 'Die Person hat nur das PDF angefordert. Werbe-E-Mails brauchen ihre ausdrückliche Einwilligung (§ 7 UWG). Meldet sie sich selbst, ist eine Antwort jederzeit in Ordnung.'
      : 'This person only asked for the PDF. Marketing emails need their explicit consent (Section 7 UWG). If they get in touch themselves, replying is always fine.'
  }</p>
<p style="margin:18px 0 0;color:rgba(255,255,255,0.55);font-size:13px;">${isDe ? 'Eingegangen am' : 'Received at'}: ${formatReceived(submission.receivedAt, submission.lang)}</p>
`;

  return {
    subject,
    body: { contentType: 'HTML', content: emailLayout({ title, lang: isDe ? 'de' : 'en', body }) },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
    replyTo: [{ emailAddress: { address: submission.email } }],
  };
}

async function sendEmails(submission) {
  if (!TENANT_ID || !CLIENT_ID || !(CLIENT_SECRET || REFRESH_TOKEN)) {
    if (submission.type === 'portfolio') {
      // Load the PDF anyway, so a broken bundle also shows up on previews.
      portfolioAttachment(submission.pdfLang);
      // In production the popup must not say "the PDF is on its way" when
      // nothing was sent; fail instead (local and preview keep working).
      if (process.env.VERCEL_ENV === 'production') {
        throw Object.assign(new Error('Mail delivery is not configured.'), { stage: 'config' });
      }
    }
    console.log('[lead] Graph env vars missing — skipping email');
    return;
  }

  let accessToken;
  try {
    accessToken = await getAccessToken();
  } catch (err) {
    // AADSTS700082 / invalid_grant: the stored refresh token has expired or was
    // revoked. Fix: run scripts/graph-auth.mjs and put the new token into Vercel.
    if (/AADSTS700082|AADSTS70008|AADSTS50173|invalid_grant/.test(err.message || '')) {
      console.error('[lead] GRAPH_REFRESH_TOKEN expired or revoked: renew it with scripts/graph-auth.mjs and update Vercel');
    }
    err.stage = 'token';
    throw err;
  }
  // Tags a failed Graph call, so the response tells token, PDF and send apart.
  const send = async (message) => {
    try {
      await graphSendMail(accessToken, message);
    } catch (err) {
      err.stage = err.stage || 'send';
      throw err;
    }
  };

  if (submission.type === 'portfolio') {
    // The visitor asked for the PDF, so that mail goes first. A failed internal
    // notification must not turn an already delivered PDF into an error the
    // visitor sees (and then retries, receiving the PDF twice).
    await send(portfolioEmail(submission));
    console.log('[lead] portfolio pdf sent', { pdfLang: submission.pdfLang });
    try {
      await send(portfolioInternalEmail(submission));
      console.log('[lead] internal notification sent');
    } catch (err) {
      console.error('[lead] internal notification failed', redact(err.message));
    }
    return;
  }

  // 1. Internal notification
  await send(internalEmail(submission));
  console.log('[lead] internal notification sent');

  // 2. Visitor confirmation
  if (submission.email) {
    await send(confirmationEmail(submission));
    console.log('[lead] visitor confirmation sent');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);

  // Honeypot: bots tend to fill hidden fields. Silently accept (200) so the bot
  // believes it succeeded, but never process or log the submission.
  // NOTE: "company" is a honeypot trap name, not a real field — any legitimate
  // form needing a business/shop name must use a different field name (e.g.
  // "shopName", as the barber inquiry form does) or every real submission with
  // that field filled in would be silently dropped here.
  if ((body.company || body.website || body.url || '').toString().trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  // Cap every field so a malicious client can't flood logs or memory.
  const cap = (value, max) => value.toString().trim().slice(0, max);
  const name = cap(body.name || '', 200);
  const phone = cap(body.phone || '', 60);
  const email = cap(body.email || '', 320);
  const comment = cap(body.comment || '', 5000);
  const type = cap(body.type || 'lead', 40);
  // Optional self-reported origin ("How did you hear about us?"). Never gates
  // submission — an empty answer is a perfectly valid answer.
  const source = cap(body.source || '', 40);
  const sourceOther = cap(body.sourceOther || '', 120);
  const lang = cap(body.lang || 'de', 5);
  const shopName = cap(body.shopName || '', 200);
  const packageChoice = cap(body.packageChoice || '', 60);
  // Optional publication permission; it never gates submission.
  const testimonialConsent =
    body.testimonialConsent === true || body.testimonialConsent === 'true' || body.testimonialConsent === 'on';

  const isPortfolio = type === 'portfolio';
  // PDF language of a portfolio request: German or English only. Anything
  // else falls back to the page language (German page → German PDF).
  const requestedPdfLang = cap(body.pdfLang || '', 5);
  const pdfLang = requestedPdfLang === 'de' || requestedPdfLang === 'en' ? requestedPdfLang : lang === 'de' ? 'de' : 'en';

  if (isPortfolio) {
    // A deliverable address is all a portfolio request needs.
    if (!email || !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ ok: false, error: 'A valid email address is required.' });
    }
  } else {
    // Data minimisation: name plus one reachable contact channel is sufficient.
    if (!name || (!phone && !email)) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }
    if (email && !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email address.' });
    }
    if (phone && (!/[\d]/.test(phone) || !/[\d\s\+\-\(\)\/]{6,}$/.test(phone))) {
      return res.status(400).json({ ok: false, error: 'Invalid phone number.' });
    }
  }

  if (isPortfolio) {
    // Only the site's own script may trigger the PDF mail. It sends JSON, which
    // a foreign page cannot do cross-origin without a CORS preflight this
    // endpoint never answers; form-encoded or text/plain posts from other
    // sites are turned away here.
    const contentType = String(req.headers?.['content-type'] || '');
    if (!/^application\/json\b/i.test(contentType)) {
      return res.status(415).json({ ok: false, error: 'JSON expected.' });
    }
    // Mailing a PDF to whatever address was typed in must never run unprotected
    // in production: without Turnstile anyone could make info@wamocon.com send
    // mail to arbitrary addresses. Fail closed until the secret is configured.
    if (!TURNSTILE_SECRET && process.env.VERCEL_ENV === 'production') {
      console.error('[lead] TURNSTILE_SECRET_KEY missing, portfolio request refused');
      return res.status(503).json({ ok: false, error: 'Temporarily unavailable.' });
    }
  }

  // Cloudflare Turnstile bot protection (optional, enabled when the secret is set).
  if (TURNSTILE_SECRET) {
    const turnstileToken = cap(body['cf-turnstile-response'] || body.turnstileToken || '', 2048);
    if (!turnstileToken) {
      return res.status(400).json({ ok: false, error: 'CAPTCHA token missing.' });
    }
    const turnstile = await verifyTurnstile(turnstileToken);
    if (!turnstile.ok) {
      // The code is shown in the form's error message, so a failed attempt can be
      // diagnosed from a screenshot without browser tools or server logs.
      return res
        .status(403)
        .json({ ok: false, error: 'CAPTCHA verification failed.', code: `403-${turnstile.reason}` });
    }
  }

  // A portfolio request keeps only the address and the two languages. Anything
  // else a client sends along (name, message, ...) is dropped, so it can never
  // end up in a mail.
  const submission = isPortfolio
    ? {
        type,
        lang,
        pdfLang,
        email,
        name: '',
        phone: '',
        comment: '',
        receivedAt: new Date().toISOString(),
      }
    : {
        type,
        lang,
        name,
        phone,
        email,
        comment,
        shopName,
        packageChoice,
        source,
        sourceOther,
        testimonialConsent,
        receivedAt: new Date().toISOString(),
      };

  // Operational log without names, contact details or free-text content.
  console.log('[lead] submission received', {
    type,
    lang,
    hasEmail: Boolean(email),
    hasPhone: Boolean(submission.phone),
    ...(isPortfolio ? { pdfLang } : {}),
  });

  // Send notification + optional visitor confirmation.
  try {
    await sendEmails(submission);
  } catch (err) {
    // stage: token (Graph sign-in), pdf (attachment missing), send (Graph refused
    // the mail) or config (Graph not set up). Logged without any address.
    const stage = err.stage || 'unknown';
    console.error('[lead] email delivery failed', stage, redact(err.message));
    return res.status(502).json({ ok: false, error: 'Message delivery failed.', code: `502-${stage}` });
  }

  return res.status(200).json({ ok: true });
}
