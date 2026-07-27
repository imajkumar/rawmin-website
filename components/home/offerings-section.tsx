import Link from "next/link";
import { ArrowRight, Beaker, Box, Factory, FlaskConical } from "lucide-react";
import { HoverLift, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";
import { offerings, valueProposition } from "@/data/company-content";
import { Button } from "@/components/ui/button";

const icons = [Factory, FlaskConical, Beaker, Box] as const;

export function OfferingsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionIntro eyebrow="What we offer" title={valueProposition.title} description={valueProposition.body}>
        <p className="mt-3 text-sm font-medium text-foreground/80">{valueProposition.trustLine}</p>
      </SectionIntro>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {offerings.map((item, index) => {
          const Icon = icons[index] ?? Factory;
          return (
            <StaggerItem key={item.title}>
              <HoverLift className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Explore
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </HoverLift>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <Button asChild variant="outline">
          <Link href="/contact">Submit enquiry</Link>
        </Button>
      </Reveal>
    </section>
  );
}
