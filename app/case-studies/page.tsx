import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import Image from "@/components/Image";
import { CtaBand, PageHero } from "@/components/ui";
import { caseStudies } from "@/content/case-studies";
import { getIndustry } from "@/content/industries";
import { getSolution } from "@/content/solutions";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Corporate Gifting Case Studies & Program Examples",
  description: "Illustrative examples of how companies run Diwali gifting, dealer incentives and onboarding kits with Orbit by SaverPe's multi-brand gift card platform.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ name: "Case studies", path: "/case-studies" }]} eyebrow="Program examples" title="How teams run gifting with Orbit" intro="Explore how different organisations could structure festive gifting, channel incentives and onboarding programs using multi-brand gift cards." />
      <section className="container-page mt-10">
        <p className="flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm text-ink-soft">
          <Info className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
          These case studies are illustrative composite examples designed to show common program structures. They do not describe specific named clients. Verified client stories will be published here soon.
        </p>
      </section>
      <section className="container-page mt-8 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand">
            <Image GeminiPrompt={c.image.prompt} alt={c.image.alt} file={`case-${c.slug}`} rounded="rounded-none" sizes="(min-width:1024px) 33vw, 100vw" />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">{getIndustry(c.industry)?.name}</span>
                <span className="rounded-full bg-magenta-soft px-2.5 py-1 text-magenta">{getSolution(c.solution)?.shortName}</span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold leading-snug">{c.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{c.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 font-bold text-brand-700 group-hover:gap-2">Read more <ArrowRight className="size-4" aria-hidden /></span>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand title="Want results like these?" text="Share your program goals and we'll design a brand mix and rollout plan." primary={{ href: "/contact-sales", label: "Contact sales" }} />
    </>
  );
}
