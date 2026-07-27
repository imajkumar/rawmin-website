"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Link2, Share2 } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/catalog";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/catalog";
import { MANUFACTURING_COPY } from "@/lib/brand-visuals";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RECENT_KEY = "rawmin_recently_viewed";

function saveRecent(slug: string) {
  try {
    const existing = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]") as string[];
    const next = [slug, ...existing.filter((s) => s !== slug)].slice(0, 6);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

function loadRecent(currentSlug: string) {
  try {
    const slugs = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]") as string[];
    return slugs.filter((s) => s !== currentSlug).slice(0, 4);
  } catch {
    return [];
  }
}

type ProductDetailClientProps = {
  product: Product;
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [variant, setVariant] = useState(product.variants[0]?.value ?? "");
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    saveRecent(product.slug);
    setRecentSlugs(loadRecent(product.slug));
  }, [product.slug]);

  const related = useMemo(
    () => products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4),
    [product.categorySlug, product.id],
  );

  const recentProducts = useMemo(
    () =>
      recentSlugs
        .map((slug) => products.find((p) => p.slug === slug))
        .filter((p): p is Product => Boolean(p)),
    [recentSlugs],
  );

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: product.name, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} videoUrl={product.videoUrl} />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Sample formulation · Private label</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Reference code: {product.sku}</p>

          <p className="mt-5 rounded-xl border border-border bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
            {MANUFACTURING_COPY.catalogNote} Request MOQ, packaging, and label artwork when you inquire.
          </p>

          <p className="mt-4 text-muted-foreground">{product.shortDescription}</p>

          <div className="mt-6">
            <p className="text-sm font-medium">Available pack sizes (indicative)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.value)}
                  className={`rounded-full border px-4 py-2 text-sm ${variant === v.value ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
                >
                  {v.value}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Manufacturing capacity is planned per batch. Share forecast and launch timeline for production slots.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/contact">Request sample / manufacturing quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Share:</span>
            <Button type="button" size="icon" variant="outline" onClick={share} aria-label="Share product">
              <Share2 className="size-4" />
            </Button>
            <Button type="button" size="icon" variant="outline" aria-label="Copy link" onClick={share}>
              <Link2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="font-serif text-2xl font-semibold">Description</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{product.description}</p>
          <h3 className="mt-6 font-medium">Key benefits</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            {product.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <h3 className="mt-6 font-medium">How to use</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted-foreground">
            {product.usage.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold">Ingredients</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span key={ing} className="rounded-full border border-border px-3 py-1 text-sm">
                {ing}
              </span>
            ))}
          </div>

          <h2 className="mt-8 text-2xl font-semibold">Partner feedback</h2>
          <div className="mt-4 space-y-4">
            {[
              { name: "Brand partner — skincare", text: "Excellent texture and stable batches for our private label launch." },
              { name: "Brand partner — export", text: "Consistent documentation and QA support for international registration." },
            ].map((review) => (
              <div key={review.name} className="rounded-xl border border-border p-4">
                <p className="font-medium">{review.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-2xl font-semibold">Product FAQ</h2>
        <Accordion type="single" collapsible className="mt-4 rounded-xl border border-border px-4">
          {product.faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`pfaq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {related.length ? (
        <section className="mt-16">
          <h2 className="font-semibold text-2xl">Related formulations</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}

      {recentProducts.length ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Recently viewed formulations</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
