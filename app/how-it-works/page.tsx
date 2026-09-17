import Link from "next/link";
import { ArrowRight, CalendarClock, CreditCard, FileText, Layers, Mail, Search, Send } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { faqGroups } from "@/content/faqs";
import { absoluteUrl } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How Orbit Works — Bulk Gift Card Ordering in 5 Steps",
  description: "How corporate gift card ordering works with Orbit: build a multi-brand mix, request a quote, approve and pay against a GST invoice, and deliver digitally on schedule.",
  path: "/how-it-works",
});

const steps = [
  { icon: Search, t: "Explore brands & build your mix", d: "Browse 290+ brands and add them to your quote. For each brand, choose denominations and quantities — as many combinations as your program needs.", prompt: "Close-up of a laptop screen showing a colourful grid of brand gift cards with 'Add to quote' buttons and a quote sidebar listing multiple brands and quantities, clean modern UI, purple accents | 4:3 | 1600x1200", alt: "Building a multi-brand quote on a laptop" },
  { icon: Send, t: "Share your requirement", d: "Submit your brand mix with company details, occasion, recipient groups and timelines through Contact Sales.", prompt: "HR manager at a desk submitting an online form on a laptop with a checklist of recipients and dates, sticky notes and coffee, bright modern office with purple accents, lifestyle photography | 4:3 | 1600x1200", alt: "HR manager submitting a gifting requirement" },
  { icon: Layers, t: "Receive a consolidated quote", d: "Our team validates brand availability and denominations, and sends a single quote for the entire program.", prompt: "Elegant digital quote document on a tablet showing brand line items, quantities and a total, with a stylus and notebook on a desk, purple and magenta branding, product photography | 4:3 | 1600x1200", alt: "Consolidated gifting quote on a tablet" },
  { icon: FileText, t: "Approve & pay", d: "Approve the quote, receive a GST-ready invoice, and complete payment through your standard procurement process.", prompt: "Finance professional reviewing and approving a GST invoice on a monitor with a green approved stamp icon, calculator and documents on desk, clean corporate photography with purple accent | 4:3 | 1600x1200", alt: "Finance team approving a GST invoice" },
  { icon: CalendarClock, t: "Delivered on your schedule", d: "E-gift cards are delivered digitally on your chosen date — to recipients directly or to your team for distribution.", prompt: "Collage of diverse Indian employees in different cities and home offices smiling at phones receiving gift card notifications at the same moment, connected by glowing lines on a map of India, purple gradient | 4:3 | 1600x1200", alt: "Employees across India receiving gift cards simultaneously" },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "HowTo", name: "How to order bulk corporate gift cards with Orbit", step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d, url: absoluteUrl(`/how-it-works#step-${i + 1}`) })) }} />
      <PageHero breadcrumbs={[{ name: "How it works", path: "/how-it-works" }]} eyebrow="Ordering process" title="From brief to delivered — in five simple steps" intro="Orbit replaces vendor chasing, hamper logistics and spreadsheets with one clear workflow." />
      <section className="container-page mt-16 space-y-20">
        {steps.map((s, i) => (
          <div key={s.t} id={`step-${i + 1}`} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-3">
                <span className="grid size-14 place-items-center rounded-2xl bg-orbit font-display text-2xl font-extrabold text-white">{i + 1}</span>
                <s.icon className="size-7 text-brand" aria-hidden />
              </span>
              <h2 className="h-section mt-5">{s.t}</h2>
              <p className="mt-4 text-lg leading-8 text-muted">{s.d}</p>
            </div>
            <Image GeminiPrompt={s.prompt} alt={s.alt} />
          </div>
        ))}
      </section>
      <section className="mt-24 bg-sand py-20">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Timelines" title="Typical program timelines" intro="Indicative planning windows — share your deadline and we'll work backwards." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Mail, t: "Spot rewards & small orders", d: "Plan a few days ahead for quote, approval and delivery." },
              { icon: CreditCard, t: "Quarterly & incentive programs", d: "Allow one to two weeks to finalise tiers, brands and approvals." },
              { icon: CalendarClock, t: "Diwali & large festive programs", d: "Start four to six weeks before the festival for a stress-free rollout." },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <x.icon className="size-7 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQs" title="Ordering questions" />
          <Link href="/brands" className="btn-primary mt-6">Start your brand mix <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
        <FaqList faqs={faqGroups[1].faqs} />
      </section>
      <CtaBand title="Ready to start?" text="Build your brand mix now or talk to our team first." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/brands", label: "Browse brands" }} />
    </>
  );
}
