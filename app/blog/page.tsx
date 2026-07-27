import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { blogPosts } from "@/data/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Cosmetics manufacturing insights, formulation science, and brand growth articles from RAWMIN SKINOLOGY.",
  path: "/blog",
  keywords: ["cosmetics blog", "manufacturing insights", "beauty industry"],
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="font-serif text-4xl font-semibold">Informative blogs</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Read what&apos;s trending in cosmetic manufacturing and brand building.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-border">
              <div className="relative aspect-[16/10]">
                <Image src={post.image} alt={post.title} fill className="object-cover transition group-hover:scale-105" sizes="33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-primary">{post.category}</p>
                <h2 className="mt-2 text-lg font-medium group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
