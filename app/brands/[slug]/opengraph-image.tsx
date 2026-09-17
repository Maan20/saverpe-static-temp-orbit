import { brands, getBrand, getCategory, priceSummary } from "@/lib/brands";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Bulk brand gift cards on Orbit";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  return ogCard({ eyebrow: getCategory(brand?.category ?? "")?.name ?? "Gift card", title: `${brand?.name ?? "Brand"} gift cards for business`, footer: brand ? `${priceSummary(brand.price)} · Bulk orders · GST-ready invoicing` : "Bulk orders · GST-ready invoicing" });
}
