import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { extendedCategoryLabels } from "@/data/company-content";
import { Button } from "@/components/ui/button";

export function CategoryPillsSection() {
  return (
    <section className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Categories</p>
          <h2 className="mt-3 text-3xl font-semibold">Manufacturing programs across personal care</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Expand your line with naturals-friendly processes and deadline-driven production—without running your own plant.
          </p>
        </Reveal>

        <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
          {extendedCategoryLabels.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className="inline-flex rounded-full border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                {cat.name}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/products">View formulation catalog</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
