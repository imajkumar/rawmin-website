"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { customProcessIntro, customProcessSteps } from "@/data/custom-cosmetics-content";
import { cn } from "@/lib/utils";

export function CustomSevenStepProcess() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const index = nodes.indexOf(visible.target as HTMLElement);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{customProcessIntro.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{customProcessIntro.title}</h2>
        <p className="mt-4 text-muted-foreground">{customProcessIntro.body}</p>
        <Button asChild className="mt-6">
          <Link href="/contact">Let&apos;s Connect</Link>
        </Button>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative">
            <ol className="space-y-1 border-l-2 border-border pl-4">
              {customProcessSteps.map((step, index) => (
                <li key={step.step}>
                  <button
                    type="button"
                    onClick={() => stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className={cn(
                      "group flex w-full items-center gap-3 py-2 text-left text-sm transition",
                      active === index ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition",
                        active === index
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card group-hover:border-primary/40",
                      )}
                    >
                      {step.step}
                    </span>
                    <span className="line-clamp-2">{step.title}</span>
                  </button>
                </li>
              ))}
            </ol>
            <motion.div
              className="pointer-events-none absolute left-0 top-0 w-0.5 origin-top bg-primary"
              animate={{ height: `${((active + 1) / customProcessSteps.length) * 100}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
            </div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {customProcessSteps.map((step, index) => (
            <article
              key={step.step}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={cn(
                "scroll-mt-28 rounded-2xl border p-6 transition md:p-8",
                active === index ? "border-primary/40 bg-primary/[0.03] shadow-sm" : "border-border bg-card",
              )}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Step {step.step}</p>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{step.summary}</p>
              {step.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {step.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
