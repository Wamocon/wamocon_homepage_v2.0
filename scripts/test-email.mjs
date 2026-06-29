// Local test for the /api/lead email sender.
// Usage: node scripts/test-email.mjs
// Make sure a .env file exists in the project root with the Graph credentials.

process.loadEnvFile('.env');

const { default: handler } = await import('../api/lead.js');

function createRes() {
  let statusCode = 200;
  return {
    setHeader() {},
    status(code) {
      statusCode = code;
      return {
        json(body) {
          console.log(`Response: ${statusCode}`, body);
        },
      };
    },
  };
}

const req = {
  method: 'POST',
  body: {
    type: 'test',
    lang: 'de',
    name: 'Local Test User',
    phone: '+49 123 456789',
    email: 'test@example.com',
    comment: 'This is a local test of the WAMOCON contact-form email.',
    consent: true,
  },
};

console.log('Sending test submission...');
handler(req, createRes());
