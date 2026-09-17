import Link from "next/link";
import { Rss } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { blogCategories, posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insights — Corporate Gifting, Rewards & Incentives",
  description: "Playbooks for HR, procurement and sales leaders on employee rewards, festive corporate gifting, channel incentives, compliance and client appreciation.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Orbit Insights",
          url: absoluteUrl("/blog"),
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}`), datePublished: p.date })),
        }}
      />
      <PageHero
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
        eyebrow={`${posts.length} articles`}
        title="Orbit Insights"
        intro="Practical playbooks on employee recognition, festive bulk gifting, channel incentives, procurement and client relationships — written for the teams who run them."
      >
        <a href="/blog/rss.xml" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-ink"><Rss className="size-4" aria-hidden /> Subscribe via RSS</a>
      </PageHero>

      <nav aria-label="Blog categories" className="container-page mt-10">
        <ul className="flex gap-2 overflow-x-auto pb-2">
          <li><span className="inline-block shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">All</span></li>
          {blogCategories.map((c) => (
            <li key={c.id} className="shrink-0">
              <Link href={`/blog/category/${c.id}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-bold hover:border-ink">{c.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-page mt-8">
        {featured && <BlogCard post={featured} featured />}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>

      <CtaBand title="Turn insight into a program" text="Share your goals and get a tailored brand mix and quote." primary={{ href: "/contact-sales", label: "Contact sales" }} secondary={{ href: "/solutions", label: "Explore solutions" }} />
    </>
  );
}
