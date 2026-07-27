"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";
import { exportNarrative, facilityPillars, plantNarrative } from "@/data/company-content";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FacilityPlantSection() {
  const [tab, setTab] = useState<(typeof facilityPillars)[number]["id"]>(facilityPillars[0].id);
  const active = facilityPillars.find((p) => p.id === tab) ?? facilityPillars[0];

  return (
    <section className="bg-section-light py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionIntro eyebrow="Manufacturing plant" title={plantNarrative.title} description={plantNarrative.body} />

            <Reveal delay={0.12} variant="fadeUpSoft">
              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">{exportNarrative.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{exportNarrative.body}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{exportNarrative.highlight}</p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeInRight" delay={0.06}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Inside our facility</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {facilityPillars.map((pillar) => (
                  <motion.button
                    key={pillar.id}
                    type="button"
                    onClick={() => setTab(pillar.id)}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      tab === pillar.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {pillar.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-6 min-h-[5rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.32, ease: easeOutExpo }}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {active.body}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
