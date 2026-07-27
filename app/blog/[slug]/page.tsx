import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { blogPosts, getBlogBySlug } from "@/data/catalog";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "cosmetics manufacturing", "beauty blog"],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{post.category}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · {post.readTime} read
        </p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>
        <div className="prose prose-neutral mt-8 max-w-none leading-relaxed text-muted-foreground">
          <p>{post.excerpt}</p>
          <p>
            This article preview is from the {SITE.name} blog. Full CMS-driven content, author bios, and related
            posts will be wired when the backend is implemented.
          </p>
        </div>
      </article>
    </>
  );
}
