import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight, FileText, Layers, Mail, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { industries } from "@/content/industries";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-white/70">
      <div className="container-page">
        <div className="-translate-y-12 overflow-hidden rounded-[2rem] bg-orbit p-8 text-white sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Ready when you are</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">Plan your next rewards program or festive bulk order with Orbit.</h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact-sales" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5">
                Request a demo
              </Link>
              <Link href="/brands" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                Request catalog
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Orbit by SaverPe home" className="inline-block rounded-2xl bg-white px-4 py-2">
              <NextImage src="/full-logo.png" alt="Orbit by SaverPe" width={860} height={424} className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6">
              Orbit by SaverPe is the business gifting arm of SaverPe — bulk e-gift cards from 290+ brands for employee rewards, partner incentives, client gifting and festive programs.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Layers className="size-4 text-magenta" aria-hidden /> Multi-brand, multi-denomination orders</li>
              <li className="flex items-center gap-2"><FileText className="size-4 text-magenta" aria-hidden /> GST-ready invoicing</li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-magenta" aria-hidden /> Genuine brand-issued cards</li>
            </ul>
            <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-magenta">
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
          </div>

          <FooterCol title="What we provide">
            <FooterLink href="/solutions">Corporate Gifting</FooterLink>
            <FooterLink href="/brands">Bulk Gift Cards</FooterLink>
            <FooterLink href="/solutions/employee-rewards-recognition">Employee Rewards</FooterLink>
            <FooterLink href="/solutions/channel-partner-incentives">Channel Partner Rewards</FooterLink>
            <FooterLink href="/solutions/customer-loyalty-rewards">Customer Loyalty</FooterLink>
            <FooterLink href="/api-integration">API &amp; SDK Integration</FooterLink>
          </FooterCol>

          <FooterCol title="Industries">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>{i.name}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Resources">
            <FooterLink href="/brands">Brand catalog</FooterLink>
            <FooterLink href="/how-it-works">How it works</FooterLink>
            <FooterLink href="/case-studies">Case studies</FooterLink>
            <FooterLink href="/blog">Insights blog</FooterLink>
            <FooterLink href="/faq">FAQs</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/about-us">About Orbit</FooterLink>
            <FooterLink href="/why-orbit">Why Orbit</FooterLink>
            <FooterLink href="/contact-sales">Contact sales</FooterLink>
            <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of service</FooterLink>
            <li>
              <a href={site.consumerUrl} className="inline-flex items-center gap-1 font-semibold text-magenta hover:text-white">
                SaverPe for personal gifting <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="rounded-3xl border border-white/10 p-6 text-sm">
          <p>
            <strong className="text-white">Looking for a gift for a friend or family member?</strong> Visit{" "}
            <a href={site.consumerUrl} className="font-bold text-magenta underline underline-offset-4">SaverPe</a> — e-gift cards for birthdays, weddings, festivals and every personal occasion.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Orbit by SaverPe. All rights reserved. Brand names and logos belong to their respective owners.</p>
          <p>Built for Indian businesses</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-white">
        {children}
      </Link>
    </li>
  );
}
