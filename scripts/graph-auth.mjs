// Device-code OAuth helper for Microsoft Graph.
// Run: node scripts/graph-auth.mjs
// It prints a code and URL. Open the URL, enter the code as info@wamocon.com,
// and the script will receive a refresh token and write it to .env.

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

process.loadEnvFile('.env');

const TENANT_ID = process.env.GRAPH_TENANT_ID;
const CLIENT_ID = process.env.GRAPH_CLIENT_ID;

if (!TENANT_ID || !CLIENT_ID) {
  console.error('Missing GRAPH_TENANT_ID or GRAPH_CLIENT_ID in .env');
  process.exit(1);
}

const SCOPE = 'https://graph.microsoft.com/Mail.Send offline_access';

async function requestDeviceCode() {
  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/devicecode`;
  const params = new URLSearchParams();
  params.append('client_id', CLIENT_ID);
  params.append('scope', SCOPE);

  const res = await fetch(url, { method: 'POST', body: params });
  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(`Device code request failed: ${data.error_description || data.error || res.statusText}`);
  }
  return data;
}

async function pollForToken(deviceCode, interval, expiresIn) {
  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append('grant_type', 'urn:ietf:params:oauth:grant-type:device_code');
  params.append('client_id', CLIENT_ID);
  params.append('device_code', deviceCode);

  const deadline = Date.now() + expiresIn * 1000;

  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, interval * 1000));

    const res = await fetch(url, { method: 'POST', body: params });
    const data = await res.json();

    if (data.error === 'authorization_pending') {
      process.stdout.write('.');
      continue;
    }
    if (data.error) {
      throw new Error(`Token polling failed: ${data.error_description || data.error}`);
    }
    return data;
  }

  throw new Error('Device code expired before authentication was completed.');
}

function updateEnv(refreshToken) {
  const envPath = resolve('.env');
  let content = '';
  try {
    content = readFileSync(envPath, 'utf8');
  } catch {
    // no existing .env
  }

  const key = 'GRAPH_REFRESH_TOKEN';
  const line = `${key}=${refreshToken}`;
  const regex = new RegExp(`^${key}=.*$`, 'm');

  if (regex.test(content)) {
    content = content.replace(regex, line);
  } else {
    content = content.trimEnd() + '\n' + line + '\n';
  }

  writeFileSync(envPath, content);
}

async function main() {
  console.log('Requesting device code...');
  const device = await requestDeviceCode();

  console.log('\n--------------------------------------------------');
  console.log('Open this URL in your browser:');
  console.log(device.verification_uri);
  console.log('\nAnd enter this code:');
  console.log(device.user_code);
  console.log('--------------------------------------------------\n');
  console.log('Waiting for you to authenticate...');

  const token = await pollForToken(device.device_code, device.interval, device.expires_in);

  console.log('\nAuthentication successful!');
  console.log('Refresh token saved to .env');

  updateEnv(token.refresh_token);
}

main().catch((err) => {
  console.error('\nError:', err.message);
  process.exit(1);
});
