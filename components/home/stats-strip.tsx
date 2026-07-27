"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { impactStats } from "@/data/company-content";
import { easeOutExpo } from "@/lib/motion";

export function StatsStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const reduceMotion = useReducedMotion();
  const stats = impactStats;

  return (
    <section ref={ref} className="border-y border-border bg-brand-mint-deep/35 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label} className="text-center">
              <motion.p
                className="font-serif text-3xl font-semibold tabular-nums text-primary sm:text-4xl md:text-5xl"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                animate={inView && !reduceMotion ? { opacity: 1, scale: 1 } : undefined}
                transition={{ delay: index * 0.07, duration: 0.55, ease: easeOutExpo }}
              >
                {inView ? (
                  <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} separator="," useEasing enableScrollSpy={false} />
                ) : (
                  `0${stat.suffix}`
                )}
              </motion.p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
