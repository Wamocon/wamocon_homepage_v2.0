// Generate browser-preview HTML files for the two email templates
// without actually sending anything. Useful for reviewing the design.
// Usage: node scripts/preview-emails.mjs

import { writeFileSync } from 'fs';
import { resolve } from 'path';

process.loadEnvFile('.env');

const { default: handler } = await import('../api/lead.js');

const payloads = [
  { type: 'cooperation', lang: 'de', name: 'Daniel Moretz' },
  { type: 'cooperation', lang: 'de', name: 'Daniel Moretz' },
];

let captured = 0;
const originalFetch = globalThis.fetch;

globalThis.fetch = async (url, init) => {
  // Let the token request through normally.
  if (!url.includes('graph.microsoft.com/v1.0/users')) {
    return originalFetch(url, init);
  }

  const body = JSON.parse(init.body);
  const filename =
    captured === 0 ? 'email-preview-internal.html' : 'email-preview-visitor.html';
  writeFileSync(resolve(filename), body.message.body.content, 'utf8');
  captured++;

  // Fake a successful Graph sendMail response.
  return new Response(null, { status: 202 });
};

async function run() {
  for (let i = 0; i < payloads.length; i++) {
    const payload = {
      ...payloads[i],
      phone: '+49 123 4567890',
      email: 'daniel.moretz@wamocon.com',
      comment:
        payloads[i].lang === 'de'
          ? 'Ich interessiere mich für eine Zusammenarbeit mit WAMOCON.'
          : 'I am interested in cooperating with WAMOCON.',
      consent: true,
    };

    const req = { method: 'POST', body: payload };
    const res = {
      setHeader() {},
      status(code) {
        return {
          json(body) {
            console.log(`${payloads[i].lang} ${i === 0 ? 'internal' : 'visitor'}: ${code}`, body);
          },
        };
      },
    };

    await handler(req, res);
  }

  console.log('\nPreview files written:');
  console.log('  email-preview-internal.html');
  console.log('  email-preview-visitor.html');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
