"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverLift, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";

const services = [
  {
    title: "Custom cosmetics",
    href: "/custom-cosmetics",
    description:
      "Complete spec-to-product development—from formula and stability testing to finished goods at your warehouse.",
  },
  {
    title: "Private label solutions",
    href: "/private-label",
    description:
      "Launch faster with proven stock formulas, your branding, and packaging tailored to your market positioning.",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionIntro
        eyebrow="Our services"
        title="Solutions as per your demands"
        titleClassName="font-serif"
        description="Whether you need customised cosmetic products or a ready private label range, RAWMIN SKINOLOGY supports each stage of your brand journey."
      />

      <Stagger className="mt-10 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <HoverLift>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-gradient-to-br from-background to-muted/30 p-8 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-xl"
              >
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
