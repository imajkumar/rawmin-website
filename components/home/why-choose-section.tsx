import { Award, Globe2, Layers3, ShieldCheck } from "lucide-react";
import { HoverLift, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";

const items = [
  {
    icon: ShieldCheck,
    title: "Value driven & quality conscious",
    description: "ISO-aligned processes with batch-level traceability and QA checkpoints.",
  },
  {
    icon: Award,
    title: "15+ years of expertise",
    description: "Proven formulation, filling, and packaging capabilities across categories.",
  },
  {
    icon: Globe2,
    title: "Strong export network",
    description: "Documentation support and reliable logistics for global brand owners.",
  },
  {
    icon: Layers3,
    title: "Extensive product range",
    description: "Skin, hair, oral, grooming, baby, kids, herbal, and combo kits.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-muted/40 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Why choose us"
          title="Comprehensive spec-to-product management across your entire development cycle"
          titleClassName="font-serif max-w-4xl"
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <HoverLift className="h-full">
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
