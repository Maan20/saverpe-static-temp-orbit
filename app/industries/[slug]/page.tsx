import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CircleAlert, CircleCheck } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import Image from "@/components/Image";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { solutionIcons } from "@/components/icons";
import { brandsInCategory } from "@/lib/brands";
import { getIndustry, industries } from "@/content/industries";
import { getSolution } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMeta({ title: `Corporate Gifting for ${ind.name}`, description: ind.metaDescription, path: `/industries/${slug}`, keywords: [`corporate gifting ${ind.name}`, `${ind.name} employee rewards`, `${ind.name} incentives gift cards`] });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const brandPicks = ind.recommendedCategories.flatMap((c) => brandsInCategory(c).filter((b) => b.logo).slice(0, 3)).filter((b, i, arr) => arr.findIndex((x) => x.slug === b.slug) === i).slice(0, 12);
  const story = caseStudies.find((c) => c.industry === slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${slug}` }]}
        eyebrow={ind.name}
        title={ind.headline}
        intro={ind.intro}
        aside={<Image GeminiPrompt={ind.image.prompt} alt={ind.image.alt} file={`industry-${ind.slug}`} priority />}
      >
        <Link href="/contact-sales" className="btn-primary mt-8">Talk to an industry specialist <ArrowRight className="size-4" aria-hidden /></Link>
      </PageHero>

      <section className="container-page mt-16 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-display text-2xl font-extrabold">Common challenges</h2>
          <ul className="mt-5 space-y-3">
            {ind.challenges.map((c) => <li key={c} className="flex gap-3"><CircleAlert className="mt-0.5 size-5 shrink-0 text-magenta" aria-hidden /> {c}</li>)}
          </ul>
        </div>
        <div className="card bg-brand-50 p-8">
          <h2 className="font-display text-2xl font-extrabold">How Orbit helps</h2>
          <ul className="mt-5 space-y-4">
            {ind.useCases.map((u) => (
              <li key={u.title} className="flex gap-3">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-mint" aria-hidden />
                <span><strong>{u.title}</strong> — {u.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Recommended solutions" title={`Programs popular in ${ind.name}`} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ind.recommendedSolutions.map((id) => {
            const s = getSolution(id);
            if (!s) return null;
            const Icon = solutionIcons[s.icon];
            return (
              <Link key={id} href={`/solutions/${id}`} className="card group p-6 transition hover:-translate-y-1 hover:border-brand">
                <span className="grid size-12 place-items-center rounded-2xl bg-orbit text-white"><Icon className="size-6" aria-hidden /></span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Brand menu ideas" title={`Brands that resonate in ${ind.name}`} action={{ href: "/brands", label: "Full catalog" }} />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brandPicks.map((b) => <li key={b.slug}><BrandCard brand={b} /></li>)}
        </ul>
      </section>

      {story && (
        <section className="container-page mt-20">
          <Link href={`/case-studies/${story.slug}`} className="card group grid gap-8 overflow-hidden p-6 transition hover:border-brand lg:grid-cols-2 lg:items-center lg:p-10">
            <Image GeminiPrompt={story.image.prompt} alt={story.image.alt} file={`case-${story.slug}`} />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-magenta">Illustrative example</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold">{story.title}</h2>
              <p className="mt-3 text-muted">{story.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 font-bold text-brand-700 group-hover:gap-2">Read the story <ArrowRight className="size-4" aria-hidden /></span>
            </div>
          </Link>
        </section>
      )}

      <CtaBand title={`Rewards built for ${ind.name}`} text="Tell us about your teams, partners and goals — we'll design a program and brand menu that fits." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/solutions", label: "All solutions" }} />
    </>
  );
}
