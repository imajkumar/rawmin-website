import type { Metadata } from "next";
import { SITE } from "./constants";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og-default.jpg",
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords.join(", ") : undefined,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.facebook.com/",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  price: number;
  currency?: string;
  image: string;
  sku: string;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/products/${product.slug}`,
      priceCurrency: product.currency ?? "INR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    ...(product.rating && product.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
        }
      : {}),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
