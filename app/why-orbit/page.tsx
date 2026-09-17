import Link from "next/link";
import { ArrowRight, BadgeCheck, ChartColumn, Check, Code, FileText, Layers, Lock, Minus, ShieldCheck, UserCheck, Users, Zap } from "lucide-react";
import Image from "@/components/Image";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Why Orbit — Enterprise-Ready Corporate Gifting",
  description: "Why companies choose Orbit by SaverPe: 290+ brands, multi-brand bulk orders, custom denomination slabs, GST-ready invoicing, dedicated support and secure fulfilment.",
  path: "/why-orbit",
});

const comparison = [
  { f: "Recipient choice", orbit: "290+ brands", hampers: "One fixed box", cash: "Full, but feels like salary" },
  { f: "Remote & multi-city delivery", orbit: "Digital, same day", hampers: "Courier-dependent", cash: "Payroll cycle" },
  { f: "Multi-brand, multi-value orders", orbit: true, hampers: false, cash: false },
  { f: "Logistics & warehousing", orbit: "None", hampers: "Heavy", cash: "None" },
  { f: "Memorable recognition", orbit: true, hampers: "Sometimes", cash: false },
  { f: "Consolidated invoicing", orbit: true, hampers: "Varies by vendor", cash: "N/A" },
];

export default function WhyOrbitPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Why Orbit", path: "/why-orbit" }]}
        eyebrow="Why Orbit"
        title={<>The gifting partner <span className="text-gradient">your CFO and CHRO</span> both approve</>}
        intro="Orbit combines the choice employees love with the control procurement, finance and IT teams need — without the logistics nightmare of physical gifting."
        aside={<Image GeminiPrompt="Isometric 3D illustration of an enterprise gifting dashboard with charts, a stack of colourful gift cards, a shield icon for security and an invoice document, purple and magenta gradient palette on soft lavender background | 4:3 | 1600x1200" alt="Enterprise gifting platform illustration" priority />}
      />

      <section className="container-page mt-16">
        <SectionHeading align="center" eyebrow="Enterprise pillars" title="Built for scale, control and delight" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, t: "Custom denomination slabs", d: "Set different values for different tiers — ₹500 spot awards to ₹50,000 leadership gifts — all in one program." },
            { icon: FileText, t: "Procurement-friendly", d: "Consolidated quotes, GST-ready invoices and clear order documentation for audits." },
            { icon: UserCheck, t: "Dedicated account management", d: "A named contact who helps plan programs and coordinates fulfilment." },
            { icon: ShieldCheck, t: "Security & compliance", d: "Authorised card issuance, controlled code handling and data minimisation. Detailed certifications to be confirmed during onboarding." },
            { icon: ChartColumn, t: "Reporting & analytics", d: "Order summaries by brand, denomination and recipient group — with deeper analytics on the roadmap." },
            { icon: Code, t: "API-ready roadmap", d: "Automated reward fulfilment via API is planned for HRMS and CRM integrations." },
          ].map((x) => (
            <div key={x.t} className="card p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-orbit text-white"><x.icon className="size-6" aria-hidden /></span>
              <h3 className="mt-5 font-display text-xl font-bold">{x.t}</h3>
              <p className="mt-2 leading-7 text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Compare" title="Orbit vs hampers vs cash bonuses" intro="How digital multi-brand gift cards stack up against traditional corporate gifting options." />
        <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="bg-sand">
                <th className="px-6 py-4 font-bold">Factor</th>
                <th className="px-6 py-4 font-bold text-brand-700">Orbit gift cards</th>
                <th className="px-6 py-4 font-bold">Physical hampers</th>
                <th className="px-6 py-4 font-bold">Cash bonus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {comparison.map((row) => (
                <tr key={row.f}>
                  <td className="px-6 py-4 font-semibold">{row.f}</td>
                  {[row.orbit, row.hampers, row.cash].map((v, i) => (
                    <td key={i} className={`px-6 py-4 ${i === 0 ? "bg-brand-50/60 font-semibold" : "text-muted"}`}>
                      {v === true ? <Check className="size-5 text-mint" aria-label="Yes" /> : v === false ? <Minus className="size-5 text-muted" aria-label="No" /> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Image GeminiPrompt="Professional Indian procurement manager and HR director reviewing a consolidated gifting quote on a large monitor in a glass-walled meeting room, confident collaborative mood, purple accent lighting, corporate photography | 4:3 | 1600x1200" alt="Procurement and HR reviewing a gifting quote" />
        <div>
          <SectionHeading eyebrow="For every stakeholder" title="One platform, many happy teams" />
          <ul className="mt-8 space-y-5">
            {[
              { icon: Users, t: "HR & People teams", d: "Run recognition, onboarding and festive programs without logistics." },
              { icon: FileText, t: "Procurement & Finance", d: "Single vendor, consolidated quotes, clear invoices." },
              { icon: Zap, t: "Sales & Channel teams", d: "Launch incentive schemes quickly and reward partners fast." },
              { icon: Lock, t: "IT & Security", d: "Digital-first fulfilment with minimal data sharing." },
              { icon: BadgeCheck, t: "Employees & partners", d: "Real choice from brands they already use." },
            ].map((x) => (
              <li key={x.t} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand"><x.icon className="size-5" aria-hidden /></span>
                <span><strong className="block font-display">{x.t}</strong><span className="text-muted">{x.d}</span></span>
              </li>
            ))}
          </ul>
          <Link href="/contact-sales" className="btn-primary mt-8">Talk to sales <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      <CtaBand title="See Orbit in action" text="Book a walkthrough and get a sample brand mix for your next program." primary={{ href: "/contact-sales", label: "Request a demo" }} secondary={{ href: "/case-studies", label: "Case studies" }} />
    </>
  );
}
