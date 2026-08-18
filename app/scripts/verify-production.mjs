import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const siteUrl = "https://sachkov.dev/";
const files = await Promise.all([
  readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
  readFile(new URL("../dist/robots.txt", import.meta.url), "utf8"),
  readFile(new URL("../dist/sitemap.xml", import.meta.url), "utf8"),
  readFile(new URL("../dist/healthz", import.meta.url), "utf8"),
]);
const [html, robots, sitemap, health] = files;

const requiredHtml = [
  `<link rel="canonical" href="${siteUrl}">`,
  `<meta property="og:url" content="${siteUrl}">`,
  `<meta property="og:image" content="${siteUrl}assets/og.png">`,
  `<meta name="twitter:image" content="${siteUrl}assets/og.png">`,
  `<meta name="robots" content="index, follow, max-image-preview:large">`,
  `"@context":"https://schema.org"`,
];

for (const value of requiredHtml) {
  assert(html.includes(value), `Missing production metadata: ${value}`);
}

assert(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), "robots.txt must reference the production sitemap");
assert(sitemap.includes(`<loc>${siteUrl}</loc>`), "sitemap.xml must contain the production URL");
assert.equal(health.trim(), "ok", "healthz must contain ok");

console.log("Production metadata and static endpoints verified.");
