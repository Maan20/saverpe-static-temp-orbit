import { Clock, FileText, Layers, Mail, UserCheck } from "lucide-react";
import ContactSalesForm from "@/components/ContactSalesForm";
import JsonLd from "@/components/JsonLd";
import { FaqList, PageHero } from "@/components/ui";
import { brands } from "@/lib/brands";
import { faqGroups } from "@/content/faqs";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Sales — Request a Corporate Gifting Quote",
  description: "Request a demo or a bulk gift card quote. Add multiple brands with denominations and quantities, share your requirement and hear back within one business day.",
  path: "/contact-sales",
});

export default function ContactSalesPage() {
  const lite = brands.map((b) => ({ slug: b.slug, name: b.name, logo: b.logo, category: b.category, price: b.price }));
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Orbit sales", url: absoluteUrl("/contact-sales"), mainEntity: { "@id": `${site.url}/#organization` } }} />
      <PageHero
        breadcrumbs={[{ name: "Contact sales", path: "/contact-sales" }]}
        eyebrow="Request a demo or quote"
        title={<>Let&apos;s build your <span className="text-gradient">gifting program</span></>}
        intro="Add the brands you're considering — each with its own denominations and quantities — tell us about your company, and our team will send a consolidated quote."
      />
      <section className="container-page mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ContactSalesForm brands={lite} />
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-5 transition hover:border-brand">
            <span className="grid size-12 place-items-center rounded-2xl bg-orbit text-white"><Mail className="size-5" aria-hidden /></span>
            <span><span className="block text-xs font-bold uppercase tracking-wider text-muted">Email sales</span><span className="font-display font-bold">{site.email}</span></span>
          </a>
          <div className="card space-y-4 p-6">
            <h2 className="font-display text-lg font-bold">What happens next?</h2>
            {[
              { icon: Clock, t: "Reply within 1 business day", d: "An account specialist reviews your requirement." },
              { icon: Layers, t: "Brand mix confirmed", d: "We validate brands, denominations and availability." },
              { icon: FileText, t: "Consolidated quote", d: "Pricing and GST-ready invoice details in one document." },
              { icon: UserCheck, t: "Dedicated support", d: "One point of contact through fulfilment." },
            ].map((x) => (
              <div key={x.t} className="flex gap-3">
                <x.icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                <div><p className="text-sm font-bold">{x.t}</p><p className="text-xs text-muted">{x.d}</p></div>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className="container-page mt-20 max-w-4xl">
        <h2 className="h-section mb-6">Ordering FAQs</h2>
        <FaqList faqs={faqGroups[1].faqs} />
      </section>
    </>
  );
}
