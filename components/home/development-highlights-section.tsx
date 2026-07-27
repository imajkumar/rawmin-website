import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";
import { developmentHighlights } from "@/data/company-content";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DevelopmentHighlightsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionIntro
          align="center"
          className="max-w-3xl"
          eyebrow="Product development"
          title="Bring distinctive formulations to market"
          description="Laboratory-backed development so you can introduce first-to-market or claim-led products with confidence."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developmentHighlights.map((item) => (
            <StaggerItem key={item.title}>
              <HoverLift className="h-full">
                <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center" delay={0.08}>
          <Button asChild>
            <Link href="/custom-cosmetics">Explore product development</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
