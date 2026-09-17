import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { industries } from "@/content/industries";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Corporate Gifting by Industry — IT, BFSI, Retail & More",
  description: "Industry-specific corporate gifting and incentive programs for IT, BFSI, retail & FMCG, manufacturing, startups and healthcare with bulk e-gift cards.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd("Industries served by Orbit", industries.map((i) => ({ name: i.name, path: `/industries/${i.slug}` })))} />
      <PageHero breadcrumbs={[{ name: "Industries", path: "/industries" }]} eyebrow={`${industries.length} industries`} title="Gifting programs shaped for your industry" intro="Every industry rewards people differently — distributed engineers, bank relationship managers, dealers, plant teams, founders and care staff. Explore programs designed around how you work." />
      <section className="container-page mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-brand">
            <Image GeminiPrompt={ind.image.prompt} alt={ind.image.alt} file={`industry-${ind.slug}`} rounded="rounded-none" sizes="(min-width:1024px) 33vw, 100vw" />
            <div className="p-6">
              <h2 className="font-display text-2xl font-extrabold">{ind.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{ind.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-brand-700 group-hover:gap-2">Explore <ArrowRight className="size-4" aria-hidden /></span>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand title="Don't see your industry?" text="Orbit works for any business that rewards people. Tell us about yours." primary={{ href: "/contact-sales", label: "Contact sales" }} />
    </>
  );
}
