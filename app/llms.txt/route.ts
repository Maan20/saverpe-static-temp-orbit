import { brands, categories, getCategory } from "@/lib/brands";
import { blogCategories, posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { faqGroups } from "@/content/faqs";

export const dynamic = "force-static";

const plain = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

// llms.txt (https://llmstxt.org): concise, link-rich map of Orbit for LLMs and answer engines.
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Orbit by SaverPe is an Indian B2B corporate gifting platform and the business arm of SaverPe (${site.consumerUrl}). Businesses order bulk digital gift cards from ${brands.length} brands across ${categories.length} categories, combining multiple brands, denominations and quantities in one consolidated quote with GST-ready invoicing. There is currently no self-serve checkout: companies request quotes via Contact Sales. Contact: ${site.email}.`,
    "",
    "## Key pages",
    `- [Contact sales / request a quote](${absoluteUrl("/contact-sales")}): multi-brand quote builder`,
    `- [Brand catalog](${absoluteUrl("/brands")}): all brands available for bulk orders`,
    `- [How it works](${absoluteUrl("/how-it-works")}): ordering process and timelines`,
    `- [Why Orbit](${absoluteUrl("/why-orbit")}): enterprise features and comparison with hampers and cash`,
    `- [FAQs](${absoluteUrl("/faq")}): ordering, billing, GST and employee gift tax`,
    `- [Case studies](${absoluteUrl("/case-studies")}): illustrative program examples`,
    `- [Full content for LLMs](${absoluteUrl("/llms-full.txt")})`,
    "",
    "## Solutions",
    ...solutions.map((s) => `- [${s.name}](${absoluteUrl(`/solutions/${s.slug}`)}): ${s.summary}`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.name}](${absoluteUrl(`/industries/${i.slug}`)}): ${i.headline}`),
    "",
    "## Brands available for bulk orders",
    ...brands.map((b) => `- [${b.name}](${absoluteUrl(`/brands/${b.slug}`)}): ${getCategory(b.category)?.name}`),
    "",
    ...blogCategories.flatMap((c) => {
      const list = posts.filter((p) => p.category === c.id);
      return list.length ? [`## Insights: ${c.name}`, ...list.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`), ""] : [];
    }),
    "## FAQs",
    ...faqGroups.flatMap((g) => g.faqs.map((f) => `- ${f.q} ${plain(f.a)}`)),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
