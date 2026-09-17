import Link from "next/link";
import { ArrowRight, Boxes, CircleCheck, CodeXml, KeyRound, PlugZap, ShieldCheck, Webhook, Workflow } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gift Card API & SDK Integration — Early Access",
  description: "Automate gift card rewards from your HRMS, CRM, loyalty platform or app with Orbit's gift card API and SDKs. Join early access for catalog, ordering and webhooks.",
  path: "/api-integration",
  keywords: ["gift card API India", "rewards API", "gift card SDK", "HRMS rewards integration", "loyalty rewards API", "bulk gift card API"],
});

// Early-access programme: capabilities are described as planned, not live (see CONTENT-TODO.md).
const capabilities = [
  { icon: Boxes, title: "Catalog API", text: "Fetch brands, categories, denominations and terms to power your own rewards catalog." },
  { icon: Workflow, title: "Order API", text: "Place single or bulk orders across multiple brands, denominations and quantities." },
  { icon: Webhook, title: "Webhooks", text: "Receive order and delivery status updates in your systems automatically." },
  { icon: CodeXml, title: "SDKs", text: "Client libraries to speed up integration in popular server-side languages." },
  { icon: KeyRound, title: "Sandbox & keys", text: "Test safely in a sandbox with scoped API keys before going live." },
  { icon: ShieldCheck, title: "Security controls", text: "Authenticated requests, access controls and audit-friendly records." },
];

const useCases = [
  { title: "HRMS & recognition platforms", text: "Trigger rewards automatically for anniversaries, awards and milestones." },
  { title: "Loyalty & referral programs", text: "Let customers redeem points or referral rewards for brand gift cards." },
  { title: "Sales & channel platforms", text: "Pay out incentives the moment partners hit a slab or contest target." },
  { title: "Survey & research tools", text: "Deliver participant incentives instantly on completion." },
  { title: "Fintech & banking apps", text: "Offer gift card rewards inside cashback or engagement journeys." },
  { title: "Event & marketing tools", text: "Automate attendee thank-yous and campaign prizes." },
];

const faqs = [
  { q: "Is the Orbit gift card API available now?", a: "The API and SDKs are in early access. Register interest through Contact Sales and our team will share availability, documentation and onboarding steps." },
  { q: "What can the API be used for?", a: "It is designed for catalog access, multi-brand ordering and order status updates so you can automate rewards from your own platforms." },
  { q: "Can we use Orbit without integrating the API?", a: "Yes. Most companies start with the quote builder and consolidated orders, and move to API automation as programs scale." },
  { q: "Which systems can integrate with Orbit?", a: "Any platform that can make secure HTTPS requests — HRMS, CRM, loyalty engines, survey tools or your own app." },
];

export default function ApiIntegrationPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gift card API & SDK integration",
          description: "Early-access API and SDKs to automate gift card rewards from business systems.",
          url: absoluteUrl("/api-integration"),
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "India" },
        }}
      />
      <PageHero
        breadcrumbs={[{ name: "API & SDK Integration", path: "/api-integration" }]}
        eyebrow="Early access"
        title={<>Gift card rewards, <span className="text-gradient">built into your product</span></>}
        intro="Automate reward delivery from your HRMS, CRM, loyalty platform or app. Orbit's API and SDKs are in early access — tell us what you're building and we'll bring you on board."
        aside={
          <div className="overflow-hidden rounded-3xl bg-ink p-6 font-mono text-sm text-white shadow-[0_40px_80px_-40px_rgba(58,29,110,0.7)]">
            <div className="mb-4 flex gap-1.5" aria-hidden>
              <span className="size-3 rounded-full bg-magenta" />
              <span className="size-3 rounded-full bg-gold" />
              <span className="size-3 rounded-full bg-mint" />
            </div>
            <p className="text-white/50">{"// Illustrative request (early access)"}</p>
            <pre className="mt-2 overflow-x-auto whitespace-pre text-[13px] leading-6">
              <code>
                {`POST /v1/orders
{
  "reference": "diwali-2026",
  "items": [
    { "brand": "amazon-shopping-voucher-gift-card",
      "denomination": 1000, "quantity": 250 },
    { "brand": "swiggy-food-gift-card",
      "denomination": 500, "quantity": 400 }
  ],
  "delivery": "direct_to_recipient"
}`}
              </code>
            </pre>
          </div>
        }
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact-sales" className="btn-primary">
            Request early access <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link href="/brands" className="btn-ghost">Browse the catalog</Link>
        </div>
      </PageHero>

      <section className="container-page mt-16">
        <SectionHeading align="center" eyebrow="Capabilities" title="Everything you need to automate rewards" intro="Planned capabilities for early-access partners — shaped together with the teams building on Orbit." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="card p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-orbit text-white"><c.icon className="size-6" aria-hidden /></span>
              <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 leading-7 text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-ink py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow !border-white/10 !bg-white/5 !text-magenta"><PlugZap className="size-3.5" aria-hidden /> Use cases</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold">Where teams plug Orbit in</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {useCases.map((u) => (
                <li key={u.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="flex items-center gap-2 font-display font-bold"><CircleCheck className="size-4 text-magenta" aria-hidden /> {u.title}</p>
                  <p className="mt-1 text-sm text-white/65">{u.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image GeminiPrompt="Isometric 3D illustration of an HRMS dashboard, a CRM screen and a mobile loyalty app connected by glowing API lines to a central gift card hub that sends digital gift cards to employees and customers, purple and magenta tech palette on dark navy background | 4:3 | 1600x1200" alt="Business systems connected to a gift card API" />
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="How early access works" title="From conversation to first automated reward" />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {["Share your use case and expected volumes", "Review documentation and sandbox access", "Build and test your integration", "Go live with support from our team"].map((step, i) => (
            <li key={step} className="card p-6">
              <span className="grid size-10 place-items-center rounded-full bg-orbit font-display font-extrabold text-white">{i + 1}</span>
              <p className="mt-4 font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20 max-w-4xl">
        <h2 className="h-section mb-8">API &amp; SDK FAQs</h2>
        <FaqList faqs={faqs} />
      </section>

      <CtaBand title="Building a rewards experience?" text="Tell us about your platform, recipients and volumes — we'll set you up with early access." primary={{ href: "/contact-sales", label: "Request early access" }} secondary={{ href: "/solutions", label: "Explore solutions" }} />
    </>
  );
}
