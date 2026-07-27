import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { customAbout, customBenefits } from "@/data/custom-cosmetics-content";

export function CustomAboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{customAbout.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">{customAbout.title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{customAbout.body}</p>
        <Button asChild className="mt-8">
          <Link href="/contact">{customAbout.cta}</Link>
        </Button>
      </Reveal>
    </section>
  );
}

export function CustomBenefitsSection() {
  return (
    <section className="border-y border-border bg-muted/25 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{customBenefits.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{customBenefits.title}</h2>
          <p className="mt-4 text-muted-foreground">{customBenefits.intro}</p>
        </Reveal>
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {customBenefits.items.map((item) => (
            <StaggerItem
              key={item}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm"
            >
              {item}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
