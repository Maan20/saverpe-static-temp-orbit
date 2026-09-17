import Link from "next/link";
import { Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { faqGroups } from "@/content/faqs";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Corporate Gifting FAQs — Ordering, Billing & Tax",
  description: "Answers for HR, procurement and finance teams about Orbit: bulk ordering, multi-brand quotes, delivery, GST invoicing, employee gift tax and program support.",
  path: "/faq",
});

export default function FaqPage() {
  const all = faqGroups.flatMap((g) => g.faqs);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <PageHero
        breadcrumbs={[{ name: "FAQs", path: "/faq" }]}
        eyebrow={`${all.length} answers`}
        title="Frequently asked questions"
        intro="Everything procurement, HR and finance teams ask about ordering bulk gift cards with Orbit."
      />
      <div className="container-page mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
        <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col">
            {faqGroups.map((g) => (
              <li key={g.id} className="shrink-0">
                <a href={`#${g.id}`} className="block rounded-2xl border border-line bg-white px-4 py-3 text-sm font-bold hover:border-ink">{g.title}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden rounded-3xl bg-ink p-6 text-white lg:block">
            <Mail className="size-6 text-magenta" aria-hidden />
            <p className="mt-3 font-display font-bold">Still need help?</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-semibold text-magenta">{site.email}</a>
          </div>
        </nav>
        <div className="space-y-14">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="h-section mb-6">{g.title}</h2>
              <FaqList faqs={g.faqs} withSchema={false} />
            </section>
          ))}
          <p className="text-muted">
            Planning a program? See <Link href="/how-it-works" className="font-bold text-ink underline decoration-magenta">how ordering works</Link> or explore our <Link href="/solutions" className="font-bold text-ink underline decoration-magenta">solutions</Link>.
          </p>
        </div>
      </div>
      <CtaBand title="Didn't find your answer?" text="Our business team replies within one business day." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/how-it-works", label: "How it works" }} />
    </>
  );
}
