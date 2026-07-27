import type { MetadataRoute } from "next";
import { blogPosts, categories, products } from "@/data/catalog";
import { SITE } from "@/lib/constants";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/private-label",
  "/custom-cosmetics",
  "/solutions",
  "/blog",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${SITE.url}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...categories.map((category) => ({
      url: `${SITE.url}/category/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
