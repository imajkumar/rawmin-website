import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/catalog";
import { MANUFACTURING_COPY } from "@/lib/brand-visuals";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Explore RAWMIN SKINOLOGY manufacturing categories—private label and third-party skin care and cosmetic formulations.",
  path: "/products",
  keywords: ["private label catalog", "third party cosmetics", "contract manufacturing formulations"],
});

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Manufacturing catalog</p>
        <h1 className="mt-2 text-4xl font-semibold">Product categories & sample formulations</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">{MANUFACTURING_COPY.catalogNote}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </div>
      </div>
    </>
  );
}
