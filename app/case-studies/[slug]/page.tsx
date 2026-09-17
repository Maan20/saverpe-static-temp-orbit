import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CircleCheck, Info, Quote } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getIndustry } from "@/content/industries";
import { getSolution } from "@/content/solutions";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return pageMeta({ title: c.title.length > 60 ? `${c.title.slice(0, 57)}…` : c.title, description: c.summary, path: `/case-studies/${slug}`, type: "article" });
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const industry = getIndustry(c.industry);
  const solution = getSolution(c.solution);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: c.title, description: c.summary, url: absoluteUrl(`/case-studies/${slug}`), publisher: { "@id": `${site.url}/#organization` }, author: { "@type": "Organization", name: site.name } }} />
      <PageHero breadcrumbs={[{ name: "Case studies", path: "/case-studies" }, { name: industry?.name ?? "Example", path: `/case-studies/${slug}` }]} eyebrow="Illustrative example" title={c.title} intro={c.summary} aside={<Image GeminiPrompt={c.image.prompt} alt={c.image.alt} file={`case-${c.slug}`} priority />} />
      <div className="container-page mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
        <article className="prose-article">
          <p className="flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm !leading-6">
            <Info className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
            This is an illustrative composite example that shows a typical program structure. It does not describe a specific named client.
          </p>
          <h2>The challenge</h2>
          {c.challenge.map((p, i) => <p key={i}>{p}</p>)}
          <h2>The approach</h2>
          <ol>{c.approach.map((a) => <li key={a}>{a}</li>)}</ol>
          <h2>Brand mix</h2>
          <table>
            <thead><tr><th>Category</th><th>Share of program</th></tr></thead>
            <tbody>{c.brandMix.map((b) => <tr key={b.category}><td>{b.category}</td><td>{b.share}</td></tr>)}</tbody>
          </table>
          <h2>Outcomes</h2>
          <ul className="!list-none !pl-0">{c.outcomes.map((o) => <li key={o} className="flex gap-3"><CircleCheck className="mt-1.5 size-5 shrink-0 text-mint" aria-hidden /> {o}</li>)}</ul>
          <blockquote className="flex gap-3"><Quote className="size-6 shrink-0 text-magenta" aria-hidden /><span>{c.quote.text}<span className="mt-2 block text-sm not-italic text-muted">— {c.quote.by}</span></span></blockquote>
        </article>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="card p-6">
            <dl className="space-y-4 text-sm">
              <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">Organisation</dt><dd className="font-semibold">{c.client}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">Industry</dt><dd><Link href={`/industries/${c.industry}`} className="font-semibold text-brand-700 underline">{industry?.name}</Link></dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">Solution</dt><dd><Link href={`/solutions/${c.solution}`} className="font-semibold text-brand-700 underline">{solution?.name}</Link></dd></div>
            </dl>
          </div>
          <div className="rounded-3xl bg-orbit p-6 text-white">
            <p className="font-display text-lg font-bold">Plan a similar program</p>
            <p className="mt-2 text-sm text-white/80">Get a tailored brand mix and quote.</p>
            <Link href="/contact-sales" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-700">Contact sales</Link>
          </div>
        </aside>
      </div>
      <CtaBand title="Build your own success story" text="Tell us about your program — we'll help you design it." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/case-studies", label: "More examples" }} />
    </>
  );
}
