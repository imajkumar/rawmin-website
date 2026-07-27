import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { instagramFeed, unsplashUrl } from "@/lib/images";

function ProductRow({
  title,
  subtitle,
  filter,
}: {
  title: string;
  subtitle: string;
  filter: (p: (typeof products)[number]) => boolean;
}) {
  const list = products.filter(filter).slice(0, 4);
  if (!list.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{subtitle}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">{title}</h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/products">View full catalog</Link>
        </Button>
      </Reveal>
      <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((product, i) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} priority={i < 2} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function FeaturedProductsSection() {
  return (
    <>
      <ProductRow
        title="Featured formulations"
        subtitle="Private label catalog"
        filter={(p) => Boolean(p.featured)}
      />
      <ProductRow title="Popular with brand partners" subtitle="Manufacturing ready" filter={(p) => Boolean(p.bestSeller)} />
    </>
  );
}

export function DoctorRecommendationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <Reveal className="grid gap-8 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-secondary/10 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Doctor recommendation</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Formulations built with clinical rigor</h2>
          <p className="mt-4 text-muted-foreground">
            Our R&D team collaborates with dermatologists and trichologists to validate actives, stability, and consumer
            safety—so your brand launches with confidence.
          </p>
        </div>
        <ul className="grid gap-3 text-sm md:grid-cols-2">
          {[
            "Dermatologically tested base formulas",
            "Transparent INCI and claim support",
            "Stability & microbiological testing",
            "Regulatory documentation for exports",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-border/70 bg-card/90 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function BeforeAfterSection() {
  const pairs = [
    { before: "Dull, uneven tone", after: "Brighter, even-looking skin in 4 weeks*" },
    { before: "Dry, frizzy hair", after: "Smoother, stronger strands with herbal oil program*" },
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Before / After</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Results your customers can see</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pairs.map((pair) => (
            <div key={pair.before} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Before</p>
                  <p className="mt-2">{pair.before}</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-4">
                  <p className="text-xs font-semibold uppercase text-primary">After</p>
                  <p className="mt-2">{pair.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">*Representative brand outcomes. Individual results may vary.</p>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Instagram</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold">Behind the production floor</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {instagramFeed.map((photoId, index) => (
          <div key={photoId} className="relative aspect-square overflow-hidden rounded-xl border border-border">
            <Image
              src={unsplashUrl(photoId, 400, 400)}
              alt={`RAWMIN SKINOLOGY production highlight ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 33vw, 16vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Newsletter</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold">Subscribe for manufacturing insights</h2>
        <p className="mt-3 text-muted-foreground">
          Trending ingredients, packaging tech, and beauty industry updates—no hard selling.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="h-11 flex-1 rounded-full border border-input px-4 text-sm"
          />
          <Button type="submit" className="rounded-full px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
