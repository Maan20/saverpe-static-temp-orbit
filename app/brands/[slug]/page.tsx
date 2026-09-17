import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarClock, ChevronDown, CircleCheck, Layers, Tag, Wallet } from "lucide-react";
import AddToQuote from "@/components/AddToQuote";
import BrandCard, { BrandLogo } from "@/components/BrandCard";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { brandImage, brands, formatInr, getBrand, getCategory, priceSummary, relatedBrands } from "@/lib/brands";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = getBrand(slug);
  if (!b) return {};
  const title = `${b.name} Gift Cards in Bulk for Corporate Gifting`;
  return pageMeta({
    title: title.length > 60 ? `${b.name} Bulk Gift Cards for Business` : title,
    description: `Order ${b.name} e-gift cards in bulk for employee rewards, incentives and client gifting. ${priceSummary(b.price)} denominations, GST-ready invoicing.`.slice(0, 158),
    path: `/brands/${slug}`,
    keywords: [`${b.name} bulk gift cards`, `${b.name} corporate gift vouchers`, `${b.name} gift card for employees`, "corporate gifting"],
  });
}

export default async function BrandPage({ params }: PageProps<"/brands/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  const category = getCategory(brand.category);
  const related = relatedBrands(brand, 6);
  const denoms = brand.price.denominations ?? [];
  const about = brand.description ? brand.description.split("\n").slice(0, 6) : [`${brand.name} gift cards are a popular choice for corporate programs in the ${category?.name.toLowerCase()} category, letting recipients pick exactly what they want.`];
  const faqs = [
    { q: `Can we order ${brand.name} gift cards in bulk?`, a: `Yes. Add ${brand.name} to your quote with the denominations and quantities you need, or contact our sales team for large programs.` },
    { q: `What denominations are available for ${brand.name}?`, a: brand.price.type === "slab" ? `Fixed denominations: ${denoms.map(formatInr).join(", ") || "as offered by the brand"}.` : `Any value ${brand.price.min && brand.price.max ? `between ${formatInr(brand.price.min)} and ${formatInr(brand.price.max)}` : "within the brand's range"}.` },
    { q: `What is the validity of ${brand.name} gift cards?`, a: brand.expiry ? `Validity is ${brand.expiry.replace(/\.$/, "")}, as per the brand's terms.` : "Validity is set by the brand and shared with your quote." },
    { q: `Can we combine ${brand.name} with other brands in one order?`, a: "Absolutely. Orbit lets you mix any number of brands, denominations and quantities in a single consolidated quote." },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: `${brand.name} bulk gift cards`, url: absoluteUrl(`/brands/${slug}`), about: { "@type": "Brand", name: brand.name }, isPartOf: { "@id": `${site.url}/#website` }, primaryImageOfPage: absoluteUrl(brandImage(brand)) }} />
      <section className="border-b border-line bg-[radial-gradient(circle_at_85%_20%,var(--color-brand-100),transparent_40%)]">
        <div className="container-page py-10">
          <Breadcrumbs items={[{ name: "Brands", path: "/brands" }, { name: brand.name, path: `/brands/${slug}` }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start xl:grid-cols-[300px_1fr_380px]">
            <div className="mx-auto w-full max-w-xs">
              <div className="rotate-[-2deg] rounded-[2rem] bg-orbit p-3 shadow-[0_40px_80px_-40px_rgba(58,29,110,0.6)]">
                <BrandLogo brand={brand} className="aspect-[10/11] w-full rounded-[1.5rem]" />
              </div>
            </div>
            <div>
              <Link href={`/brands?category=${brand.category}`} className="eyebrow">{category?.name}</Link>
              <h1 className="h-display mt-4">{brand.name} gift cards for business</h1>
              <p className="mt-4 text-lg leading-8 text-muted">Order {brand.name} e-gift cards in bulk for employee rewards, channel incentives, client gifting and festive programs — combined with any other brands in one consolidated quote.</p>
              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="card p-4"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><Wallet className="size-4" aria-hidden /> Value</dt><dd className="mt-1 font-display font-bold">{priceSummary(brand.price)}</dd></div>
                <div className="card p-4"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><Layers className="size-4" aria-hidden /> Pricing</dt><dd className="mt-1 font-display font-bold">{brand.price.type === "slab" ? "Fixed slabs" : "Flexible range"}</dd></div>
                <div className="card p-4"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><CalendarClock className="size-4" aria-hidden /> Validity</dt><dd className="mt-1 font-display font-bold">{brand.expiry ?? "Per brand terms"}</dd></div>
              </dl>
              {denoms.length > 0 && (
                <div className="mt-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted"><Tag className="size-4" aria-hidden /> Denominations</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">{denoms.map((d) => <li key={d} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-bold">{formatInr(d)}</li>)}</ul>
                </div>
              )}
            </div>
            <div className="lg:col-span-2 xl:sticky xl:top-28 xl:col-span-1">
              <AddToQuote brand={{ slug: brand.slug, name: brand.name, logo: brand.logo, category: brand.category, price: brand.price }} />
            </div>
          </div>
        </div>
      </section>

      <div className="container-page mt-14 grid gap-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-12">
          <section>
            <h2 className="h-section">About {brand.name} gift cards</h2>
            <div className="prose-article">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
          </section>
          <section>
            <h2 className="h-section">Great for these programs</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Employee rewards & recognition", "Festive & bulk gifting", "Channel partner incentives", "Client & customer gifting"].map((p) => (
                <li key={p} className="card flex items-center gap-3 p-4 font-semibold"><CircleCheck className="size-5 text-mint" aria-hidden /> {p}</li>
              ))}
            </ul>
          </section>
          {brand.terms.length > 0 && (
            <details className="group card overflow-hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <h2 className="font-display text-2xl font-extrabold">{brand.name} terms &amp; conditions</h2>
                <ChevronDown className="size-5 transition group-open:rotate-180" aria-hidden />
              </summary>
              <ul className="space-y-3 border-t border-line p-6 text-sm leading-6 text-ink-soft">
                {brand.terms.map((t, i) => <li key={i} className="flex gap-3"><CircleCheck className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden /> <span>{t}</span></li>)}
              </ul>
            </details>
          )}
          <section>
            <h2 className="h-section mb-6">{brand.name} bulk order FAQs</h2>
            <FaqList faqs={faqs} />
          </section>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-ink p-6 text-white">
            <h2 className="font-display text-lg font-bold">Planning a large program?</h2>
            <p className="mt-2 text-sm text-white/70">Talk to our team about custom denominations, scheduled delivery and invoicing.</p>
            <Link href="/contact-sales" className="btn-primary mt-4 w-full">Contact sales</Link>
            <a href={`mailto:${site.email}`} className="mt-3 block text-center text-sm font-bold text-magenta">{site.email}</a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="h-section">Pair {brand.name} with</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{related.map((b) => <li key={b.slug}><BrandCard brand={b} /></li>)}</ul>
        </section>
      )}

      <CtaBand title="Ready to request your quote?" text="Review your brand mix, add company details and get a consolidated quote within one business day." primary={{ href: "/contact-sales#quote", label: "Review quote" }} secondary={{ href: "/brands", label: "Add more brands" }} />
    </>
  );
}
