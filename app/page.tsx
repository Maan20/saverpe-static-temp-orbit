import Link from "next/link";
import NextImage from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, CalendarClock, ChartColumn, CircleCheck, Code, FileText, Globe, Layers, Mail, Quote, ShieldCheck, ShoppingCart, UserCheck, Zap } from "lucide-react";
import Image from "@/components/Image";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, SectionHeading } from "@/components/ui";
import { categoryIcons, categoryTints, solutionIcons } from "@/components/icons";
import { brands, brandsInCategory, categories, popularBrands } from "@/lib/brands";
import { posts } from "@/lib/blog";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { homeFaqs } from "@/content/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Orbit by SaverPe — Corporate Gifting & Bulk E-Gift Cards in India" },
  description: "Bulk e-gift cards from 290+ brands for employee rewards, channel incentives, client gifting and Diwali corporate gifts. Multi-brand orders, GST-ready invoicing.",
  alternates: { canonical: site.url },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate gifting and bulk e-gift cards",
  serviceType: "Corporate gifting",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "BusinessAudience", audienceType: "HR, procurement, sales and marketing teams" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate gifting solutions",
    itemListElement: solutions.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/solutions/${s.slug}` } })),
  },
};

export default function HomePage() {
  const logos = popularBrands(24).concat(brands.filter((b) => b.logo && !b.popular)).slice(0, 30);
  const orbitCards = popularBrands(8);

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,var(--color-brand-100),transparent_40%),radial-gradient(circle_at_20%_90%,var(--color-magenta-soft),transparent_40%)]" />
        <div className="container-page grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-20">
          <div className="animate-fade-up">
            <p className="eyebrow">For HR, procurement &amp; sales leaders</p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Corporate gifting, <span className="text-gradient">at scale.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Reward employees, motivate channel partners and delight clients with bulk e-gift cards from <strong className="text-ink">290+ brands</strong>. Mix brands, denominations and quantities in one order — we handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-sales" className="btn-primary !px-7 !py-3.5 text-base">
                Request a demo <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/brands" className="btn-ghost !px-7 !py-3.5 text-base">
                Build your brand mix
              </Link>
            </div>
            <ul className="mt-8 grid max-w-xl gap-2 text-sm font-semibold text-ink-soft sm:grid-cols-2">
              {["Multi-brand, multi-denomination orders", "GST-ready invoicing", "Dedicated account management", "Digital delivery across India"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CircleCheck className="size-4 text-mint" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Orbit visual: brand cards circling a gift */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
            <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-brand-200" />
            <div className="absolute inset-[28%] rounded-full border border-brand-200" />
            <div className="absolute inset-[34%] grid place-items-center rounded-full bg-orbit shadow-[0_30px_80px_-20px_rgba(106,42,166,0.7)]">
              <NextImage src="/logo.png" alt="" width={1456} height={1933} className="h-1/2 w-auto brightness-0 invert" priority />
            </div>
            <div className="absolute inset-0 animate-orbit">
              {orbitCards.map((b, i) => {
                const angle = (i / orbitCards.length) * 2 * Math.PI;
                const x = 50 + 42 * Math.cos(angle);
                const y = 50 + 42 * Math.sin(angle);
                return (
                  <div key={b.slug} className="absolute w-[19%] -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className="animate-[orbit_30s_linear_infinite_reverse] overflow-hidden rounded-xl border-[3px] border-white bg-white shadow-lg">
                      <div className="relative aspect-[10/11]">
                        <NextImage src={b.logo!} alt="" fill sizes="110px" className="object-cover" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute -left-2 top-[8%] flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold shadow-xl">
              <Layers className="size-5 text-brand" /> 12 brands · 4,800 cards
            </div>
            <div className="absolute -right-2 bottom-[10%] flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-bold text-white shadow-xl">
              <FileText className="size-5 text-magenta" /> GST invoice ready
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section aria-label="Brands available on Orbit" className="border-y border-line bg-white py-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">Gift cards from 290+ brands your people already love</p>
        <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-4">
            {[...logos, ...logos].map((b, i) => (
              <li key={`${b.slug}-${i}`} aria-hidden={i >= logos.length} className="relative h-20 w-[72px] shrink-0 overflow-hidden rounded-xl border border-line bg-white">
                <NextImage src={b.logo!} alt={i < logos.length ? b.name : ""} fill sizes="72px" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container-page mt-24">
        <SectionHeading align="center" eyebrow="Why companies choose Orbit" title="Everything a modern gifting program needs" intro="From a 20-person startup to a 20,000-person enterprise — Orbit removes the logistics so you can focus on the people." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, t: "Bulk denominations, any mix", d: "Order many brands in one request — each with its own denominations and quantities. Fixed slabs or flexible values, as each brand allows." },
            { icon: FileText, t: "GST-ready invoicing", d: "One consolidated quote and invoice for your entire program, with the documentation finance and procurement teams expect." },
            { icon: UserCheck, t: "Dedicated account management", d: "A single point of contact to plan programs, recommend brand menus and coordinate fulfilment." },
            { icon: Zap, t: "Digital delivery, pan-India", d: "No warehousing, packing or couriers. Rewards reach office, hybrid and remote employees on the same day." },
            { icon: ShieldCheck, t: "Genuine brand-issued cards", d: "Every card is issued by the brand or its authorised gift card program partner, with brand terms clearly documented." },
            { icon: Code, t: "API-ready roadmap", d: "An API for automated reward fulfilment is on our roadmap — register interest to get early access." },
          ].map((f) => (
            <div key={f.t} className="card group p-7 transition hover:-translate-y-1 hover:border-brand">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand transition group-hover:bg-orbit group-hover:text-white">
                <f.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.t}</h3>
              <p className="mt-2 leading-7 text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mt-24 bg-ink py-20 text-white">
        <div className="container-page">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow !border-white/10 !bg-white/5 !text-magenta">Solutions</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">One platform, every gifting use case</h2>
              <p className="mt-3 text-lg text-white/70">Purpose-built programs for the moments that matter across your organisation and ecosystem.</p>
            </div>
            <Link href="/solutions" className="inline-flex items-center gap-1.5 font-bold text-magenta hover:gap-2.5">All solutions <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const Icon = solutionIcons[s.icon];
              return (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-magenta hover:bg-white/10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-orbit"><Icon className="size-6" aria-hidden /></span>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/70">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-magenta group-hover:gap-2">Explore <ArrowRight className="size-4" aria-hidden /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE BUILDER TEASER */}
      <section className="container-page mt-24 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow"><ShoppingCart className="size-3.5" aria-hidden /> The Orbit quote builder</p>
          <h2 className="h-section mt-4">Different brands. Different values. Different quantities. One request.</h2>
          <p className="mt-4 text-lg leading-8 text-muted">Real programs are never one-size-fits-all. Add 500 marketplace cards at ₹1,000 for your workforce, 40 electronics cards at ₹5,000 for managers and 10 hotel cards for leadership — all in the same quote.</p>
          <ol className="mt-8 space-y-4">
            {["Browse the catalog and add brands to your quote", "Set denominations and quantities for each brand", "Submit once — get a consolidated quote and invoice"].map((t, i) => (
              <li key={t} className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orbit font-display font-extrabold text-white">{i + 1}</span>
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/brands" className="btn-primary">Start building <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/how-it-works" className="btn-ghost">How it works</Link>
          </div>
        </div>
        <div className="card overflow-hidden shadow-[0_40px_80px_-40px_rgba(58,29,110,0.45)]" aria-hidden>
          <div className="flex items-center justify-between border-b border-line bg-sand/60 px-6 py-4">
            <p className="font-display font-bold">Diwali program — sample quote</p>
            <span className="rounded-full bg-mint-soft px-3 py-1 text-xs font-bold text-mint">Draft</span>
          </div>
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-line">
              {popularBrands(12).slice(0, 5).map((b, i) => {
                const denom = [1000, 500, 2000, 1000, 5000][i];
                const qty = [500, 800, 120, 250, 40][i];
                return (
                  <tr key={b.slug}>
                    <td className="px-6 py-3">
                      <span className="flex items-center gap-3">
                        <span className="relative size-9 overflow-hidden rounded-lg bg-brand-50"><NextImage src={b.logo!} alt="" fill sizes="36px" className="object-cover object-top" /></span>
                        <span className="font-bold">{b.name}</span>
                      </span>
                    </td>
                    <td className="px-3 py-3 text-muted">₹{denom.toLocaleString("en-IN")}</td>
                    <td className="px-3 py-3 text-muted">× {qty}</td>
                    <td className="px-6 py-3 text-right font-bold">₹{(denom * qty).toLocaleString("en-IN")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-between bg-orbit px-6 py-4 text-white">
            <span className="text-sm font-semibold">5 brands · 1,710 cards</span>
            <span className="font-display text-xl font-extrabold">₹17,50,000</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Brand catalog" title="Brands for every reward and every recipient" intro="Build brand menus your employees, partners and clients will actually use." action={{ href: "/brands", label: "Explore 290+ brands" }} />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.slice(0, 12).map((c) => {
            const Icon = categoryIcons[c.id] ?? Layers;
            const count = brandsInCategory(c.id).length;
            return (
              <li key={c.id}>
                <Link href={`/brands?category=${c.id}`} className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-brand">
                  <span className={`grid size-11 place-items-center rounded-2xl ${categoryTints[c.id]}`}><Icon className="size-5" aria-hidden /></span>
                  <span className="font-display text-sm font-bold leading-tight">{c.name}</span>
                  <span className="mt-auto text-xs font-semibold text-muted">{count} {count === 1 ? "brand" : "brands"}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* INDUSTRIES */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Industries" title="Trusted patterns for every industry" intro="Programs designed around how your industry works — from distributed tech teams to dealer networks." action={{ href: "/industries", label: "All industries" }} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-brand">
              <Image GeminiPrompt={ind.image.prompt} alt={ind.image.alt} file={`industry-${ind.slug}`} rounded="rounded-none" sizes="(min-width:1024px) 33vw, 100vw" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{ind.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{ind.headline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700 group-hover:gap-2">See programs <ArrowRight className="size-4" aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-24 bg-sand py-20">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="How it works" title="From brief to delivered in four steps" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, t: "Share your brief", d: "Tell us the occasion, recipients, budget and timeline — or build your brand mix directly." },
              { icon: Layers, t: "Get a tailored quote", d: "Our team confirms brands, denominations, quantities and a consolidated quote." },
              { icon: FileText, t: "Approve & invoice", d: "Approve the quote, receive a GST-ready invoice and complete payment." },
              { icon: CalendarClock, t: "Delivered on schedule", d: "Codes are delivered digitally on your chosen date." },
            ].map((s, i) => (
              <li key={s.t} className="card relative p-6">
                <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-brand-100">{i + 1}</span>
                <s.icon className="size-7 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Case studies" title="How teams run gifting with Orbit" intro="Illustrative program examples showing how companies structure rewards, incentives and festive gifting." action={{ href: "/case-studies", label: "All case studies" }} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand">
              <Image GeminiPrompt={c.image.prompt} alt={c.image.alt} file={`case-${c.slug}`} rounded="rounded-none" sizes="(min-width:1024px) 33vw, 100vw" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-magenta">Illustrative example</p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug">{c.title}</h3>
                <blockquote className="mt-4 flex gap-2 border-l-2 border-brand-200 pl-3 text-sm italic text-muted">
                  <Quote className="size-4 shrink-0 text-brand" aria-hidden /> {c.quote.text}
                </blockquote>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-brand-700 group-hover:gap-2">Read the story <ArrowRight className="size-4" aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="container-page mt-24">
        <div className="grid gap-6 rounded-[2.5rem] border border-line bg-white p-8 lg:grid-cols-4 lg:p-12">
          <div className="lg:col-span-1">
            <h2 className="font-display text-3xl font-extrabold">Built for enterprise confidence</h2>
            <p className="mt-3 text-muted">The controls procurement, finance and IT teams look for.</p>
          </div>
          {[
            { icon: BadgeCheck, t: "Authorised issuance", d: "Cards issued by brands or authorised program partners." },
            { icon: ShieldCheck, t: "Secure handling", d: "Encrypted delivery and access-controlled code handling." },
            { icon: ChartColumn, t: "Program reporting", d: "Order summaries by brand, denomination and quantity for your records." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl bg-brand-50 p-6">
              <x.icon className="size-7 text-brand" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-bold">{x.t}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Insights" title="Playbooks for HR, procurement & sales leaders" intro="Research-backed guides on rewards, incentives, festive gifting and compliance." action={{ href: "/blog", label: "Read insights" }} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page mt-24 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQs" title="Questions from procurement & HR teams" />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/faq" className="btn-ghost">All FAQs <ArrowRight className="size-4" aria-hidden /></Link>
            <a href={`mailto:${site.email}`} className="btn-ghost"><Globe className="size-4" aria-hidden /> {site.email}</a>
          </div>
        </div>
        <FaqList faqs={homeFaqs} />
      </section>

      <CtaBand title="Let's plan your next gifting program" text="Share your requirement — brands, quantities, timelines — and get a consolidated quote from our team within one business day." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/brands", label: "Browse brands" }} />
    </>
  );
}
