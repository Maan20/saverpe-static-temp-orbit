import { ArrowUpRight, Compass, Eye, Handshake, Heart, Layers, ShieldCheck } from "lucide-react";
import Image from "@/components/Image";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { brands } from "@/lib/brands";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Orbit by SaverPe — The B2B Arm of SaverPe",
  description: "Orbit by SaverPe brings SaverPe's brand gift card catalog to businesses — helping Indian companies reward employees, partners and clients at scale.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "About us", path: "/about-us" }]}
        eyebrow="About Orbit"
        title={<>Everything that orbits your business <span className="text-gradient">deserves recognition</span></>}
        intro="Orbit is the business arm of SaverPe. We help companies thank the people who power them — employees, partners, clients and customers — with gift cards from brands they genuinely love."
        aside={<Image GeminiPrompt="Conceptual illustration of a central glowing gift box with employees, partners, clients and customers orbiting around it on elliptical paths, connected by light trails, purple to magenta gradient, modern flat 3D style | 1:1 | 1200x1200" alt="People orbiting around a gift representing Orbit" priority />}
      />

      <section className="container-page mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="prose-article">
          <p className="eyebrow">Our story</p>
          <h2 className="!mt-4">From personal gifting to business programs</h2>
          <p>SaverPe started with a simple belief: <strong>the best gift is the freedom to choose.</strong> Thousands of personal gifts later, businesses began asking for the same thing — for Diwali gifts, employee awards, dealer schemes and client thank-yous.</p>
          <p>But business gifting has different needs: hundreds or thousands of recipients, different values for different groups, multiple brands in one order, invoices for finance and timelines that can&apos;t slip. Orbit was built to meet those needs.</p>
          <p>Today, Orbit brings SaverPe&apos;s catalog of {brands.length}+ brands to companies across industries, with a consolidated ordering workflow designed for HR, procurement and sales teams.</p>
        </div>
        <Image GeminiPrompt="Modern Indian office team of diverse professionals brainstorming around a whiteboard covered with gift card program sketches, laptops and coffee, collaborative energy, purple and magenta accent decor, candid photography | 4:3 | 1600x1200" alt="The Orbit team planning gifting programs" />
      </section>

      <section className="container-page mt-20 grid gap-5 md:grid-cols-2">
        <div className="card bg-ink p-8 text-white">
          <Compass className="size-8 text-magenta" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-extrabold">Mission</h2>
          <p className="mt-3 leading-7 text-white/75">To make recognition effortless for every Indian business — so no employee, partner or client goes unthanked.</p>
        </div>
        <div className="card bg-orbit p-8 text-white">
          <Eye className="size-8" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-extrabold">Vision</h2>
          <p className="mt-3 leading-7 text-white/85">To become India&apos;s most trusted platform for corporate rewards, incentives and gifting.</p>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading align="center" eyebrow="What we stand for" title="Our principles" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "People first", d: "Every program exists to make a real person feel valued." },
            { icon: Layers, t: "Choice over clutter", d: "Brands recipients use, not items they store away." },
            { icon: ShieldCheck, t: "Trust by default", d: "Genuine cards, clear terms, careful handling." },
            { icon: Handshake, t: "Partnership", d: "We plan programs with you, not just fulfil orders." },
          ].map((v) => (
            <div key={v.t} className="card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand"><v.icon className="size-6" aria-hidden /></span>
              <h3 className="mt-4 font-display text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="card grid gap-8 overflow-hidden p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Part of the SaverPe family</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold">Gifting for yourself or your family?</h2>
            <p className="mt-3 text-muted">SaverPe is our consumer platform for birthdays, weddings, festivals and every personal occasion — the same brands, made for individuals.</p>
          </div>
          <div className="lg:text-right">
            <a href={site.consumerUrl} className="inline-flex items-center gap-2 rounded-full bg-[#ffb800] px-6 py-3 font-bold text-[#121212] transition hover:-translate-y-0.5">
              Visit SaverPe <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <CtaBand title="Let's work together" text={`Reach our business team at ${site.email} or request a demo.`} primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/why-orbit", label: "Why Orbit" }} />
    </>
  );
}
