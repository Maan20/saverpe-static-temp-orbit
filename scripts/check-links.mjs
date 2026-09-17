// Verifies every internal markdown/href link in content, app and components resolves to a real Orbit route.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brands = JSON.parse(fs.readFileSync(path.join(root, "data/brands.json"), "utf8"));
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
const files = [...walk(path.join(root, "content")), ...walk(path.join(root, "app")), ...walk(path.join(root, "components"))].filter((f) => /\.(ts|tsx)$/.test(f));

const slugsFrom = (file, re) => [...read(file).matchAll(re)].map((m) => m[1]);
const blogSlugs = walk(path.join(root, "content/blog")).flatMap((f) => [...fs.readFileSync(f, "utf8").matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]));
const solutionSlugs = slugsFrom("content/solutions.ts", /^\s{4}slug: "([^"]+)"/gm);
const industrySlugs = slugsFrom("content/industries.ts", /^\s{4}slug: "([^"]+)"/gm);
const caseSlugs = slugsFrom("content/case-studies.ts", /^\s{4}slug: "([^"]+)"/gm);
const blogCats = slugsFrom("lib/blog.ts", /\{ id: "([^"]+)", name:/g);

const valid = new Set([
  "/", "/solutions", "/industries", "/brands", "/why-orbit", "/api-integration", "/how-it-works", "/case-studies", "/about-us", "/faq", "/contact-sales", "/blog", "/privacy-policy", "/terms-of-service", "/blog/rss.xml", "/llms.txt", "/llms-full.txt",
  ...brands.map((b) => `/brands/${b.slug}`), ...blogSlugs.map((s) => `/blog/${s}`), ...solutionSlugs.map((s) => `/solutions/${s}`), ...industrySlugs.map((s) => `/industries/${s}`), ...caseSlugs.map((s) => `/case-studies/${s}`), ...blogCats.map((c) => `/blog/category/${c}`),
]);

let bad = 0;
for (const f of files) {
  for (const m of fs.readFileSync(f, "utf8").matchAll(/\]\((\/[^)\s#?]*)|href="(\/[^"#?]*)"/g)) {
    const link = (m[1] ?? m[2]).replace(/\/$/, "") || "/";
    if (!valid.has(link)) { bad++; console.log(`${path.relative(root, f)}: ${link}`); }
  }
}
console.log(`${blogSlugs.length} posts, ${solutionSlugs.length} solutions, ${industrySlugs.length} industries, ${bad} broken links`);
process.exit(bad ? 1 : 0);
