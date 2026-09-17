import { brands, formatInr, getCategory, priceSummary, type Brand } from "@/lib/brands";
import { brandFacts, channelPhrase } from "@/lib/brand-facts";
import { posts } from "@/lib/blog";
import { plainText } from "@/lib/markdown";
import { absoluteUrl, site } from "@/lib/site";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { faqGroups } from "@/content/faqs";

export const dynamic = "force-static";

function factLines(b: Brand) {
  const f = brandFacts(b);
  const where = channelPhrase(f);
  return [
    where ? `Where to use: ${where}` : "",
    f.partialRedemption !== null ? `Partial redemption: ${f.partialRedemption ? "allowed" : "not allowed (single use)"}` : "",
    f.multipleCards !== null ? `Multiple cards per bill: ${f.multipleCards ? (f.multipleCardLimit ? `yes, up to ${f.multipleCardLimit}` : "yes") : "no"}` : "",
    f.clubWithOffers === false ? "Can be combined with other offers: no" : "",
  ];
}


const plain = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

export function GET() {
  const parts = [
    `# ${site.name} — full content`,
    `> ${site.description}`,
    "## Solutions",
    ...solutions.map((s) => [`### ${s.name}`, `URL: ${absoluteUrl(`/solutions/${s.slug}`)}`, s.summary, ...s.problem, ...s.approach.map((a) => `- ${a.title}: ${a.text}`), "Programs:", ...s.programs.map((p) => `- ${p.title}: ${p.text}`), ...s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`)].join("\n")),
    "## Industries",
    ...industries.map((i) => [`### ${i.name}`, `URL: ${absoluteUrl(`/industries/${i.slug}`)}`, i.intro, ...i.useCases.map((u) => `- ${u.title}: ${u.text}`)].join("\n")),
    "## FAQs",
    ...faqGroups.flatMap((g) => [`### ${g.title}`, ...g.faqs.map((f) => `Q: ${f.q}\nA: ${plain(f.a)}`)]),
    "## Brands",
    ...brands.map((b) => [`### ${b.name}`, `URL: ${absoluteUrl(`/brands/${b.slug}`)}`, `Category: ${getCategory(b.category)?.name}`, `Value: ${priceSummary(b.price)}${b.price.denominations?.length ? ` (denominations: ${b.price.denominations.map(formatInr).join(", ")})` : ""}`, b.expiry ? `Validity: ${b.expiry}` : "", ...factLines(b)].filter(Boolean).join("\n")),
    "## Insights articles",
    ...posts.map((p) => `### ${p.title}\nURL: ${absoluteUrl(`/blog/${p.slug}`)}\nPublished: ${p.date}\nSummary: ${p.tldr}\n\n${plainText(p.body)}${p.faqs?.length ? `\n\nFAQs:\n${p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}` : ""}`),
  ];
  return new Response(parts.join("\n\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
