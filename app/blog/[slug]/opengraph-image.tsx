import { getCategory, getPost, posts } from "@/lib/blog";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Orbit Insights article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogCard({ eyebrow: getCategory(post?.category ?? "")?.name ?? "Blog", title: post?.title ?? "Orbit Insights", footer: `${post?.readingMinutes ?? 5} min read · Orbit Insights` });
}
