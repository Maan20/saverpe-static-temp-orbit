import Link from "next/link";
import type { Metadata } from "next";
import { BadgeCheck, BookOpen, RefreshCw, Scale, SearchCheck, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { author, posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { organizationId, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Editorial Policy: How Orbit Researches Insights",
  description: "How the Orbit Insights Team researches, reviews and updates corporate gifting playbooks, brand information and compliance guidance.",
  path: "/editorial-policy",
});

const principles = [
  { icon: SearchCheck, title: "Primary sources", text: "Brand details come from the terms each brand publishes. Tax, GST and regulatory references point to official sources, and we flag where companies should confirm with their own advisors." },
  { icon: BadgeCheck, title: "Reviewed before publishing", text: "Playbooks are reviewed for accuracy and practicality before they go live, with attention to how HR, procurement and finance teams actually run programs." },
  { icon: RefreshCw, title: "Kept current", text: "We revisit guides ahead of peak seasons like Diwali and year-end, and whenever brand catalogs or regulations change. Updated articles show their revision date." },
  { icon: Scale, title: "Clearly labelled examples", text: "Case studies and program scenarios marked as illustrative are composites designed to show how programs can be structured — not claims about specific customers." },
  { icon: ShieldCheck, title: "Responsible guidance", text: "We don't give tax or legal advice. Where rules affect employees or partners — like perquisite tax on gifts — we explain the concept and recommend professional confirmation." },
  { icon: BookOpen, title: "Built for Indian businesses", text: "Insights use Indian festivals, rupee budgets, GST workflows and the realities of distributed teams across cities." },
];

export default function EditorialPolicyPage() {
  const url = absoluteUrl("/editorial-policy");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "Orbit by SaverPe editorial policy", url, inLanguage: "en-IN", about: { "@id": organizationId }, publisher: { "@id": organizationId } }} />
      <PageHero
        breadcrumbs={[{ name: "Editorial policy", path: "/editorial-policy" }]}
        eyebrow="Trust & accuracy"
        title="Our editorial policy"
        intro={<>Rewards programs involve budgets, approvals and compliance. Our insights have to be accurate enough to act on. Here&apos;s how the {author.name} works.</>}
      />
      <section className="container-page mt-12">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50"><Icon className="size-6 text-brand-700" aria-hidden /></span>
              <h2 className="mt-4 font-display text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-page mt-16 max-w-3xl">
        <div className="prose-article">
          <h2>About the {author.name}</h2>
          <p>{author.bio} The team has published {posts.length} insights on employee rewards, festive gifting, procurement, channel incentives, HR culture and client loyalty.</p>
          <h2>Corrections</h2>
          <p>If something is outdated or incorrect, email <a href={`mailto:${site.email}`}>{site.email}</a>. We review every report and update the page with a revision date.</p>
          <h2>Brand terms and your advisors come first</h2>
          <p>Brands can change gift card terms at any time, and tax treatment depends on your specific situation. See our <Link href="/terms-of-service">terms of service</Link> and <Link href="/faq">FAQs</Link> for how Orbit works.</p>
        </div>
      </section>
      <CtaBand title="Explore the playbooks" text="Practical guidance for rewards, incentives and festive programs." primary={{ href: "/blog", label: "Read insights" }} secondary={{ href: "/glossary", label: "Gifting glossary" }} />
    </>
  );
}
