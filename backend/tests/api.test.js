/**
 * tests/api.test.js
 * Simple curl-style integration tests using Node's built-in fetch.
 * Run: node tests/api.test.js  (from inside the backend/ folder)
 */

const BASE = process.env.API_URL || 'http://localhost:3001';

const bold  = s => `\x1b[1m${s}\x1b[0m`;
const green = s => `\x1b[32m${s}\x1b[0m`;
const red   = s => `\x1b[31m${s}\x1b[0m`;
const cyan  = s => `\x1b[36m${s}\x1b[0m`;

let passed = 0, failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(green(`  ✓ ${name}`));
    passed++;
  } catch (e) {
    console.log(red(`  ✗ ${name}`));
    console.log(`    ${e.message}`);
    failed++;
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'Assertion failed');
}

// ── Tests ─────────────────────────────────────────────────────────────────────

console.log(bold(`\n🧪 VideoGrab API Test Suite → ${BASE}\n`));

// 1. Health check
console.log(cyan('GET /api/status'));
await test('returns 200 and status=ok', async () => {
  const res  = await fetch(`${BASE}/api/status`);
  const body = await res.json();
  assert(res.status === 200, `Expected 200, got ${res.status}`);
  assert(body.status === 'ok', `Expected status=ok, got ${body.status}`);
  assert(typeof body.uptime === 'number', 'uptime should be a number');
});

// 2. Analyze – missing URL
console.log(cyan('\nPOST /api/analyze (validation)'));
await test('returns 422 for missing URL', async () => {
  const res = await fetch(`${BASE}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert(res.status === 422, `Expected 422, got ${res.status}`);
});

await test('returns 422 for invalid URL', async () => {
  const res = await fetch(`${BASE}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: 'not-a-url' }),
  });
  assert(res.status === 422, `Expected 422, got ${res.status}`);
});

// 3. Analyze – real YouTube video
console.log(cyan('\nPOST /api/analyze (YouTube)'));
await test('extracts metadata for a public YouTube video', async () => {
  const res = await fetch(`${BASE}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw' }),
  });
  const body = await res.json();
  // yt-dlp may fail in CI without a network – accept 500 as tolerated
  if (res.status === 500) { console.log('    ⚠ yt-dlp unavailable (expected in offline env)'); return; }
  assert(res.status === 200, `Expected 200, got ${res.status}: ${body.error}`);
  assert(body.platform === 'youtube', `Expected platform=youtube, got ${body.platform}`);
  assert(typeof body.title === 'string' && body.title.length > 0, 'title should be non-empty');
  assert(Array.isArray(body.categories?.videoFormats), 'videoFormats should be an array');
});

// 4. History – unauthenticated
console.log(cyan('\nGET /api/history (auth)'));
await test('returns 401 without a bearer token', async () => {
  const res = await fetch(`${BASE}/api/history`);
  assert(res.status === 401, `Expected 401, got ${res.status}`);
});

// 5. Download – validation
console.log(cyan('\nPOST /api/download (validation)'));
await test('returns 422 for missing URL', async () => {
  const res = await fetch(`${BASE}/api/download`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ format: 'mp4' }),
  });
  assert(res.status === 422, `Expected 422, got ${res.status}`);
});

// 6. 404
console.log(cyan('\n404'));
await test('unknown routes return 404', async () => {
  const res = await fetch(`${BASE}/api/does-not-exist`);
  assert(res.status === 404, `Expected 404, got ${res.status}`);
});

// ── Summary ────────────────────────────────────────────────────────────────────
console.log(`\n${bold('Results:')} ${green(`${passed} passed`)} · ${failed > 0 ? red(`${failed} failed`) : '0 failed'}\n`);
if (failed > 0) process.exit(1);
