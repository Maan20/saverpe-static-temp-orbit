import { Suspense } from "react";
import Link from "next/link";
import { FileText, Layers, ShoppingCart } from "lucide-react";
import BrandCatalog, { type CatalogBrand } from "@/components/BrandCatalog";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { brands, brandsInCategory, categories, getCategory, priceSummary } from "@/lib/brands";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Bulk Gift Card Catalog — 290+ Brands for Corporate Gifting",
  description: "Browse 290+ brands available for bulk corporate gifting — marketplaces, food, fashion, electronics, travel and jewellery. Add brands, denominations and quantities to your quote.",
  path: "/brands",
});

const faqs = [
  { q: "Can I request a full brand catalog?", a: "Yes. Browse the catalog here, or [contact sales](/contact-sales) and we'll share a catalog tailored to your program and budget." },
  { q: "How do I add brands to a quote?", a: "Click “Add to quote” on any brand card, or open a brand to choose specific denominations and quantities. Review everything on the Contact Sales page before submitting." },
  { q: "Are denominations fixed or flexible?", a: "It depends on the brand. Some brands issue fixed slabs (for example ₹500, ₹1,000, ₹2,000) while others allow any value within a range. Each brand page shows what's available." },
];

export default function BrandsPage() {
  const catalog: CatalogBrand[] = brands.map((b) => ({ slug: b.slug, name: b.name, logo: b.logo, category: b.category, categoryName: getCategory(b.category)?.name ?? "", categories: b.categories, popular: b.popular, priceLabel: priceSummary(b.price), price: b.price }));
  const cats = categories.map((c) => ({ ...c, count: brandsInCategory(c.id).length })).filter((c) => c.count > 0);

  return (
    <>
      <JsonLd data={itemListJsonLd("Orbit bulk gift card brands", brands.map((b) => ({ name: `${b.name} bulk gift cards`, path: `/brands/${b.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Brands", path: "/brands" }]}
        eyebrow={`${brands.length} brands available for bulk redemption`}
        title={<>Build your <span className="text-gradient">brand mix</span></>}
        intro="Every brand here is available for bulk corporate orders. Add brands to your quote with a click, fine-tune denominations and quantities, and request a consolidated quote."
        aside={
          <ul className="grid gap-3">
            {[
              { icon: ShoppingCart, t: "Add to quote", d: "Build a multi-brand list as you browse." },
              { icon: Layers, t: "Mix denominations", d: "Different values and quantities per brand." },
              { icon: FileText, t: "One consolidated quote", d: "GST-ready invoicing for the full order." },
            ].map((x) => (
              <li key={x.t} className="card flex items-center gap-4 p-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-orbit text-white"><x.icon className="size-5" aria-hidden /></span>
                <span><span className="block font-display font-bold">{x.t}</span><span className="text-sm text-muted">{x.d}</span></span>
              </li>
            ))}
          </ul>
        }
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-sales" className="btn-primary">Request catalog</Link>
          <Link href="/contact-sales#quote" className="btn-ghost">Review my quote</Link>
        </div>
      </PageHero>
      <section className="container-page py-10">
        <Suspense fallback={<p className="py-10 text-center text-muted">Loading brands…</p>}>
          <BrandCatalog brands={catalog} categories={cats} />
        </Suspense>
      </section>
      <section className="container-page mt-12 max-w-4xl">
        <h2 className="h-section mb-8">Catalog FAQs</h2>
        <FaqList faqs={faqs} />
      </section>
      <CtaBand title="Need help choosing brands?" text="Our team recommends brand menus based on your audience, budget and occasion." primary={{ href: "/contact-sales", label: "Request catalog" }} secondary={{ href: "/solutions", label: "Explore solutions" }} />
    </>
  );
}
