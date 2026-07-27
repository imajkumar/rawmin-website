"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { servicePaths, solutionsIntro } from "@/data/solutions-content";
import { cn } from "@/lib/utils";

export function SolutionsPathsSection() {
  const [activeId, setActiveId] = useState<(typeof servicePaths)[number]["id"]>("custom");
  const active = servicePaths.find((p) => p.id === activeId) ?? servicePaths[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{solutionsIntro.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{solutionsIntro.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{solutionsIntro.body}</p>
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-2">
        {servicePaths.map((path) => (
          <button
            key={path.id}
            type="button"
            onClick={() => setActiveId(path.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              activeId === path.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary/30",
            )}
          >
            {path.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {servicePaths.map((path) => (
          <HoverLift key={path.id} lift={4}>
          <article
            className={cn(
              "rounded-2xl border p-6 transition md:p-8",
              activeId === path.id ? "border-primary/40 bg-primary/[0.03] shadow-sm" : "border-border bg-muted/15 opacity-90",
            )}
          >
            <h3 className="text-xl font-semibold">{path.title}</h3>
            <ol className="mt-6 space-y-3">
              {path.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm md:text-base">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Check className="hidden size-4 shrink-0 text-primary sm:block" aria-hidden />
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <Button asChild variant={activeId === path.id ? "default" : "outline"} className="mt-8">
              <Link href={path.href}>
                {path.cta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </article>
          </HoverLift>
        ))}
      </div>

      <p className="sr-only">Currently highlighted: {active.title}</p>
    </section>
  );
}
