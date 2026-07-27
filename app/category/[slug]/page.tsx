import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProductCard } from "@/components/products/product-card";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/data/catalog";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/category/${category.slug}`,
    keywords: [category.name, "cosmetic category", "private label"],
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.name, path: `/category/${category.slug}` },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="font-serif text-4xl font-semibold">{category.name}</h1>
            <p className="mt-4 text-muted-foreground">{category.description}</p>
            <p className="mt-2 text-sm text-muted-foreground">{category.productCount}+ formulations available</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
            <Image src={category.image} alt={category.name} fill className="object-cover" sizes="50vw" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.length ? (
            categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="text-muted-foreground sm:col-span-2">
              Sample products for this category will appear here once the catalog is connected to the CMS.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
