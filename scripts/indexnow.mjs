/**
 * IndexNow URL submission script.
 *
 * Runs post-deploy in CI. Reads the live sitemap.xml and submits all URLs
 * to IndexNow (Bing, Yandex). Google crawls IndexNow-submitted URLs via
 * its own pipeline.
 *
 * Prerequisites:
 *   1. Register a key at https://www.indexnow.org/
 *   2. Set INDEXNOW_KEY in GitHub Actions secrets
 *   3. Place public/<key>.txt containing only the key value
 *
 * Usage: node scripts/indexnow.mjs
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";
const KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

if (!KEY) {
  console.error("INDEXNOW_KEY env var is not set — skipping submission.");
  process.exit(0);
}

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return [...matches].map((m) => m[1]);
}

async function submit(urls) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(
      `IndexNow: submitted ${urls.length} URLs (status ${res.status})`,
    );
  } else {
    const text = await res.text();
    console.error(`IndexNow: submission failed (${res.status}): ${text}`);
    process.exit(1);
  }
}

const urls = await fetchSitemapUrls();
if (urls.length === 0) {
  console.log("IndexNow: no URLs found in sitemap — skipping.");
  process.exit(0);
}

// IndexNow accepts up to 10,000 URLs per request.
await submit(urls);
