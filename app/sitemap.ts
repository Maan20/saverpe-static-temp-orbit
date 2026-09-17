import type { MetadataRoute } from "next";
import { brands } from "@/lib/brands";
import { blogCategories, posts } from "@/lib/blog";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { absoluteUrl } from "@/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: Freq, lastModified: Date = now) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });
  return [
    page("/", 1, "weekly"),
    page("/solutions", 0.9, "monthly"),
    page("/industries", 0.8, "monthly"),
    page("/brands", 0.9, "weekly"),
    page("/why-orbit", 0.8, "monthly"),
    page("/api-integration", 0.8, "monthly"),
    page("/how-it-works", 0.7, "monthly"),
    page("/case-studies", 0.7, "monthly"),
    page("/about-us", 0.6, "monthly"),
    page("/faq", 0.7, "monthly"),
    page("/contact-sales", 0.9, "yearly"),
    page("/blog", 0.8, "weekly"),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-of-service", 0.2, "yearly"),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.9, "monthly")),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8, "monthly")),
    ...caseStudies.map((c) => page(`/case-studies/${c.slug}`, 0.6, "monthly")),
    ...brands.map((b) => ({ ...page(`/brands/${b.slug}`, b.popular ? 0.7 : 0.5, "weekly"), ...(b.logo ? { images: [absoluteUrl(b.logo)] } : {}) })),
    ...blogCategories.map((c) => page(`/blog/category/${c.id}`, 0.5, "weekly")),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.7, "monthly", new Date(p.updated ?? p.date))),
  ];
}
