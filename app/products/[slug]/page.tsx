import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProductDetailClient } from "@/components/products/product-detail-client";
import { JsonLd } from "@/components/seo/json-ld";
import { getProductBySlug, products } from "@/data/catalog";
import { buildMetadata, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    keywords: [product.categoryName, ...product.tags, "cosmetic manufacturer"],
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          productJsonLd({
            name: product.name,
            description: product.shortDescription,
            slug: product.slug,
            price: product.price,
            image: product.images[0],
            sku: product.sku,
            inStock: product.inStock,
            rating: product.rating,
            reviewCount: product.reviewCount,
          }),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <ProductDetailClient product={product} />
    </>
  );
}
