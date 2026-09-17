import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight, Building } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import MobileMenu from "@/components/MobileMenu";
import QuotePill from "@/components/QuotePill";

export default function SiteHeader() {
  return (
    <>
      <div className="bg-orbit text-white">
        <div className="container-page flex h-10 items-center justify-between gap-4 text-xs font-medium">
          <p className="flex items-center gap-2 truncate">
            <Building className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">Corporate Gifting · Bulk Gift Cards · Employee & Channel Rewards · Customer Loyalty · API & SDK</span>
          </p>
          <a href={site.consumerUrl} className="hidden shrink-0 items-center gap-1 font-bold text-white/90 hover:text-white sm:inline-flex">
            Personal gifting: SaverPe <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-xl">
        <div className="container-page flex items-center justify-between gap-6 py-3">
          <Link href="/" className="shrink-0" aria-label="Orbit by SaverPe home">
            <NextImage src="/full-logo.png" alt="Orbit by SaverPe" width={860} height={424} priority className="h-11 w-auto sm:h-12" />
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-brand-50 hover:text-brand-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <QuotePill />
            <Link href="/contact-sales" className="btn-primary !px-5 !py-2.5">
              Request a demo
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
