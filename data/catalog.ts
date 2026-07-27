export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inStock: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
  images: string[];
  videoUrl?: string;
  variants: { id: string; label: string; value: string }[];
  ingredients: string[];
  benefits: string[];
  usage: string[];
  faqs: { question: string; answer: string }[];
  tags: string[];
  featured?: boolean;
  bestSeller?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export type Faq = {
  question: string;
  answer: string;
};

import { UNSPLASH, unsplashUrl } from "@/lib/images";

const img = unsplashUrl;

export const categories: Category[] = [
  {
    slug: "skincare",
    name: "Skin Care & Skin Protection",
    description: "Serums, moisturizers, and protective formulations for every skin type.",
    image: img(UNSPLASH.skincare),
    productCount: 48,
  },
  {
    slug: "skin-cleansers",
    name: "Skin Cleansers",
    description: "Gentle foaming, gel, and cream cleansers for daily rituals.",
    image: img(UNSPLASH.serum),
    productCount: 22,
  },
  {
    slug: "haircare",
    name: "Hair Care & Hair Protection",
    description: "Oils, masks, and leave-in treatments engineered for strength and shine.",
    image: img(UNSPLASH.hair),
    productCount: 36,
  },
  {
    slug: "hair-cleansers",
    name: "Hair Cleansers",
    description: "Sulfate-free shampoos and co-washes for scalp health.",
    image: img(UNSPLASH.hairSalon),
    productCount: 18,
  },
  {
    slug: "oral-care",
    name: "Toothpaste & Oral Care",
    description: "Herbal and fluoride formulations for complete oral wellness.",
    image: img(UNSPLASH.oral),
    productCount: 14,
  },
  {
    slug: "mens-grooming",
    name: "Men's Grooming & Shaving",
    description: "Beard, shave, and skin care lines tailored for modern grooming.",
    image: img(UNSPLASH.mensGrooming),
    productCount: 26,
  },
  {
    slug: "kids-care",
    name: "Kids Care",
    description: "Mild, tear-free products safe for young skin and hair.",
    image: img(UNSPLASH.kids),
    productCount: 12,
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    description: "Dermatologist-tested baby lotions, oils, and washes.",
    image: img(UNSPLASH.baby),
    productCount: 16,
  },
  {
    slug: "herbal",
    name: "Herbal Products",
    description: "Ayurvedic-inspired actives with transparent sourcing.",
    image: img(UNSPLASH.herbal),
    productCount: 30,
  },
];

const baseProduct = (overrides: Partial<Product> & Pick<Product, "id" | "slug" | "name">): Product => ({
  shortDescription: "Spec-to-product cosmetic manufacturing with ISO-certified quality.",
  description:
    "Developed in our GMP-compliant facility with full traceability from raw material to finished goods. Ideal for private label and custom brand programs.",
  categorySlug: "skincare",
  categoryName: "Skin Care & Skin Protection",
  price: 899,
  compareAtPrice: 1199,
  sku: "RAW-001",
  inStock: true,
  stock: 120,
  rating: 4.8,
  reviewCount: 124,
  images: [img(UNSPLASH.serum), img(UNSPLASH.skincare)],
  variants: [
    { id: "v1", label: "Size", value: "30ml" },
    { id: "v2", label: "Size", value: "50ml" },
  ],
  ingredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide", "Aloe Vera Extract"],
  benefits: ["Brightens dull skin", "Boosts hydration", "Supports even tone"],
  usage: ["Apply 2–3 drops on cleansed skin", "Follow with moisturizer", "Use SPF in the morning"],
  faqs: [
    {
      question: "Is this suitable for sensitive skin?",
      answer: "Yes. The formula is dermatologically tested and free from common irritants.",
    },
  ],
  tags: ["vegan", "cruelty-free"],
  ...overrides,
});

export const products: Product[] = [
  baseProduct({
    id: "1",
    slug: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    categorySlug: "skincare",
    categoryName: "Skin Care & Skin Protection",
    price: 1299,
    sku: "RAW-VC-30",
    featured: true,
    bestSeller: true,
    images: [img(UNSPLASH.serum), img(UNSPLASH.skincare), img(UNSPLASH.herbal)],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  }),
  baseProduct({
    id: "2",
    slug: "face-serum",
    name: "Hydrating Face Serum",
    categorySlug: "skincare",
    categoryName: "Skin Care & Skin Protection",
    price: 999,
    sku: "RAW-HS-30",
    featured: true,
    images: [img(UNSPLASH.skincare), img(UNSPLASH.serum)],
  }),
  baseProduct({
    id: "3",
    slug: "herbal-hair-oil",
    name: "Herbal Hair Growth Oil",
    categorySlug: "haircare",
    categoryName: "Hair Care & Hair Protection",
    price: 649,
    sku: "RAW-HO-100",
    bestSeller: true,
    images: [img(UNSPLASH.hair), img(UNSPLASH.herbal)],
  }),
  baseProduct({
    id: "4",
    slug: "gentle-face-wash",
    name: "Gentle pH Face Wash",
    categorySlug: "skin-cleansers",
    categoryName: "Skin Cleansers",
    price: 449,
    sku: "RAW-FW-150",
    images: [img(UNSPLASH.serum)],
  }),
  baseProduct({
    id: "5",
    slug: "mens-beard-oil",
    name: "Men's Beard Conditioning Oil",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming & Shaving",
    price: 799,
    sku: "RAW-BO-50",
    images: [img(UNSPLASH.mensGrooming)],
  }),
  baseProduct({
    id: "6",
    slug: "herbal-toothpaste",
    name: "Herbal Whitening Toothpaste",
    categorySlug: "oral-care",
    categoryName: "Toothpaste & Oral Care",
    price: 199,
    sku: "RAW-TP-100",
    images: [img(UNSPLASH.oral)],
  }),
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We have been associated with RAWMIN SKINOLOGY for 16 years. Peace of mind in terms of quality, ethics, terms & conditions, and price.",
    name: "Illesh Khakhkhar",
    company: "UBIK Solutions Pvt. Ltd.",
  },
  {
    quote:
      "Their dedication to developing products is evident in every stage—from formula to packaging and delivery.",
    name: "Bhavini Khakhkhar",
    company: "Lely's",
  },
  {
    quote:
      "Team RAWMIN SKINOLOGY has repeatedly proven themselves as a reliable company for consistency and quality.",
    name: "Mr. Pankil",
    company: "Avoden Pvt. Ltd.",
  },
  {
    quote:
      "Our decision to choose RAWMIN SKINOLOGY as our manufacturer was 100% correct for quality-conscious grooming products.",
    name: "Mr. Kaushik",
    company: "India Grooming Club Pvt. Ltd.",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "How will RAWMIN SKINOLOGY assure quality defects and help us handle consumer complaints?",
    answer:
      "We follow strict QC/QA in compliance with ISO 22716 and ISO 9001, catching defects before dispatch and supporting clients on complaint handling.",
  },
  {
    question: "Who will select suppliers and source raw materials & packaging?",
    answer:
      "Our assessed supplier network procures RM & PM at high standards; we can also source from your nominated suppliers after assessment.",
  },
  {
    question: "Will you provide regulatory documents for export registration?",
    answer:
      "Yes—we supply COA, specs, MSDS, and support additional country-specific documentation and samples where required.",
  },
  {
    question: "Can our team or a third-party inspector be present during manufacturing?",
    answer:
      "Absolutely. We welcome transparency and can also provide professional process videos for your brand storytelling.",
  },
  {
    question: "Do you provide documented certifications for products manufactured under our brand?",
    answer:
      "Yes. We supply GMP-related certificates, MSDS, specifications, COA, and free-sale documentation where applicable—plus support for country-specific registration packs.",
  },
  {
    question: "What filling and packaging capabilities does RAWMIN SKINOLOGY offer?",
    answer:
      "Automatic tube and bottle lines, labeling, coding, shrink wrapping, and assorted primary packaging formats—selected to match your SKU and viscosity.",
  },
  {
    question: "What are your custom formulation capabilities?",
    answer:
      "Experienced chemists, broad naturals library, fragrance options, stability testing, and iterative sampling until your brief is met.",
  },
  {
    question: "Is packaging design included in contract manufacturing?",
    answer:
      "We collaborate on label artwork, dielines, and pack engineering. You can bring agency files or brief our team for production-ready assets.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "science-behind-ingredient-percentages",
    title: "The Science Behind Ingredient Percentages",
    excerpt: "Why active percentages matter in cosmetic efficacy and label claims.",
    category: "Formulation",
    date: "2026-03-12",
    readTime: "6 min",
    image: img(UNSPLASH.blogLab, 1200, 700),
  },
  {
    slug: "manufacturing-vs-quality-myths",
    title: "Manufacturing Teams vs Quality Teams: 5 Myths",
    excerpt: "Breaking barriers between production and QA for faster, safer launches.",
    category: "Operations",
    date: "2026-02-28",
    readTime: "8 min",
    image: img(UNSPLASH.blogFactory, 1200, 700),
  },
  {
    slug: "small-mistakes-weaken-beauty-brands",
    title: "The Small Mistakes That Slowly Weaken Beauty Brands",
    excerpt: "Packaging, claims, and supply chain gaps that erode consumer trust.",
    category: "Brand Strategy",
    date: "2026-02-10",
    readTime: "5 min",
    image: img(UNSPLASH.blogBrand, 1200, 700),
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}

export const certifications = ["ISO 22716", "ISO 9001", "FDCA GMP"] as const;

export const clientLogos = [
  "Lely's",
  "DentoShine",
  "IGC",
  "UBIK",
  "Novateor",
  "Avoden",
] as const;
