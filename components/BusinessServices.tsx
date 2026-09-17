import Link from "next/link";
import { ArrowRight, Building, CodeXml, Handshake, HeartHandshake, Layers, Trophy, type LucideIcon } from "lucide-react";

export const businessServices: { icon: LucideIcon; title: string; text: string; href: string; points: string[]; badge?: string }[] = [
  { icon: Building, title: "Corporate Gifting", text: "Festive, client and milestone gifting programs managed end to end.", href: "/solutions", points: ["Diwali & year-end", "Client appreciation"] },
  { icon: Layers, title: "Bulk Gift Cards", text: "290+ brands with any mix of denominations and quantities in one order.", href: "/brands", points: ["Multi-brand orders", "GST-ready invoicing"] },
  { icon: Trophy, title: "Employee Rewards", text: "Recognition that lands — spot awards, anniversaries, onboarding and more.", href: "/solutions/employee-rewards-recognition", points: ["Spot & service awards", "Remote-friendly"] },
  { icon: Handshake, title: "Channel Partner Rewards", text: "Slab schemes, contests and loyalty tiers for dealers and distributors.", href: "/solutions/channel-partner-incentives", points: ["Dealer schemes", "Fast fulfilment"] },
  { icon: HeartHandshake, title: "Customer Loyalty", text: "Referral, loyalty, survey and promotional rewards at campaign scale.", href: "/solutions/customer-loyalty-rewards", points: ["Referral rewards", "Campaign prizes"] },
  { icon: CodeXml, title: "API & SDK Integration", text: "Automate reward delivery from your HRMS, CRM, loyalty platform or app.", href: "/api-integration", points: ["REST API & SDKs", "Webhooks"], badge: "Early access" },
];

export default function BusinessServices({ heading = true }: { heading?: boolean }) {
  return (
    <section aria-labelledby={heading ? "what-we-provide" : undefined} className="container-page mt-24">
      {heading && (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">What we provide</p>
            <h2 id="what-we-provide" className="h-section mt-3">
              Six ways Orbit powers <span className="text-gradient">gifting &amp; rewards</span>
            </h2>
            <p className="mt-3 text-lg text-muted">From one-off festive orders to fully automated reward programs — one partner, one catalog, one invoice.</p>
          </div>
          <Link href="/contact-sales" className="btn-primary shrink-0">
            Request a demo <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      )}
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {businessServices.map((s, i) => (
          <li key={s.title}>
            <Link
              href={s.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-[0_30px_60px_-30px_rgba(106,42,166,0.45)]"
            >
              <span className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-50 transition group-hover:scale-150" aria-hidden />
              <span className="relative flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-orbit text-white shadow-lg transition group-hover:rotate-6">
                  <s.icon className="size-7" aria-hidden />
                </span>
                <span className="font-display text-4xl font-extrabold text-brand-100">0{i + 1}</span>
              </span>
              <span className="relative mt-5 flex flex-wrap items-center gap-2 font-display text-xl font-bold">
                {s.title}
                {s.badge && <span className="rounded-full bg-magenta-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-magenta">{s.badge}</span>}
              </span>
              <span className="relative mt-2 flex-1 leading-7 text-muted">{s.text}</span>
              <span className="relative mt-4 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <span key={p} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink-soft">{p}</span>
                ))}
              </span>
              <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 group-hover:gap-2">
                Explore <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
