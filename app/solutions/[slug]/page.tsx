import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CircleCheck } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import BlogCard from "@/components/BlogCard";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { solutionIcons } from "@/components/icons";
import { brandsInCategory, getCategory } from "@/lib/brands";
import { posts } from "@/lib/blog";
import { getSolution, solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/solutions/${slug}`, keywords: [s.name.toLowerCase(), `${s.shortName.toLowerCase()} gift cards`, "corporate gifting India", "bulk gift cards"] });
}

const blogMap: Record<string, string> = {
  "employee-rewards-recognition": "employee-rewards",
  "festive-bulk-gifting": "festive-gifting",
  "channel-partner-incentives": "channel-incentives",
  "onboarding-kits": "hr-culture",
  "client-gifting": "client-loyalty",
  "customer-loyalty-rewards": "client-loyalty",
};

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();
  const Icon = solutionIcons[s.icon];
  const brandPicks = s.recommendedCategories.flatMap((c) => brandsInCategory(c).filter((b) => b.logo).slice(0, 2)).filter((b, i, arr) => arr.findIndex((x) => x.slug === b.slug) === i).slice(0, 12);
  const related = posts.filter((p) => p.category === blogMap[slug]).slice(0, 3);
  const relatedIndustries = industries.filter((i) => i.recommendedSolutions.includes(slug));
  const story = caseStudies.find((c) => c.solution === slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    url: absoluteUrl(`/solutions/${slug}`),
    serviceType: "Corporate gifting",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <PageHero
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: s.shortName, path: `/solutions/${slug}` }]}
        eyebrow={s.name}
        title={s.headline}
        intro={s.summary}
        aside={<Image GeminiPrompt={s.image.prompt} alt={s.image.alt} file={`solution-${s.slug}`} priority />}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact-sales" className="btn-primary">Request a demo <ArrowRight className="size-4" aria-hidden /></Link>
          <Link href="/brands" className="btn-ghost">Build your brand mix</Link>
        </div>
      </PageHero>

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <span className="grid size-14 place-items-center rounded-2xl bg-orbit text-white"><Icon className="size-7" aria-hidden /></span>
          <h2 className="h-section mt-5">The challenge</h2>
          <div className="prose-article">{s.problem.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {s.approach.map((a) => (
            <div key={a.title} className="card p-6">
              <CircleCheck className="size-6 text-mint" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-ink py-20 text-white">
        <div className="container-page">
          <h2 className="font-display text-4xl font-extrabold">Programs you can run</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.programs.map((p, i) => (
              <div key={p.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-sm font-extrabold text-magenta">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Recommended brands" title={`Popular brands for ${s.shortName.toLowerCase()}`} intro={`Categories that work well: ${s.recommendedCategories.map((c) => getCategory(c)?.name).join(", ")}.`} action={{ href: "/brands", label: "Full catalog" }} />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brandPicks.map((b) => <li key={b.slug}><BrandCard brand={b} /></li>)}
        </ul>
      </section>

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Getting started" title="How to launch in days, not months" />
          <ol className="mt-8 space-y-4">
            {s.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orbit font-display font-extrabold text-white">{i + 1}</span>
                <span className="pt-2 font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        {story && (
          <Link href={`/case-studies/${story.slug}`} className="card group flex flex-col justify-between bg-brand-50 p-8 transition hover:border-brand">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-magenta">Illustrative example</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug">{story.title}</h3>
              <p className="mt-3 text-muted">{story.summary}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 font-bold text-brand-700 group-hover:gap-2">Read the story <ArrowRight className="size-4" aria-hidden /></span>
          </Link>
        )}
      </section>

      {relatedIndustries.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="font-display text-xl font-bold">Popular in these industries</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {relatedIndustries.map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-brand">{i.name}</Link></li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="h-section">Related insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        </section>
      )}

      <section className="container-page mt-20 max-w-4xl">
        <h2 className="h-section mb-8">{s.name} FAQs</h2>
        <FaqList faqs={s.faqs} />
      </section>

      <section className="container-page mt-16">
        <h2 className="font-display text-lg font-bold">Other solutions</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {solutions.filter((x) => x.slug !== slug).map((x) => (
            <li key={x.slug}><Link href={`/solutions/${x.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-brand">{x.name}</Link></li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Launch your ${s.shortName.toLowerCase()} program`} text="Share your goals, headcount and timeline. We'll send a tailored brand mix and consolidated quote." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/brands", label: "Browse brands" }} />
    </>
  );
}
