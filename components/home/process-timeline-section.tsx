"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";
import { manufacturingSteps } from "@/data/company-content";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProcessTimelineSection() {
  const [active, setActive] = useState(0);
  const current = manufacturingSteps[active];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionIntro
        eyebrow="How it works"
        title="One partner from formulation to packaging to dispatch"
        description="We make manufacturing easy—you focus on brand and growth."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Stagger className="flex flex-col gap-2">
          {manufacturingSteps.map((step, index) => (
            <StaggerItem key={step.step}>
              <motion.button
                type="button"
                onClick={() => setActive(index)}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "flex w-full items-start gap-4 rounded-xl border px-4 py-4 text-left transition-colors",
                  active === index
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/20",
                )}
              >
                <span className="font-mono text-sm font-bold text-primary">{step.step}</span>
                <span className="font-medium">{step.title}</span>
              </motion.button>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="scaleIn" className="lg:sticky lg:top-[calc(var(--header-offset,5rem)+1rem)]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.38, ease: easeOutExpo }}
              >
                <p className="font-mono text-sm font-bold text-primary">{current.step}</p>
                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{current.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{current.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
