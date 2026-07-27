"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { customPageStats } from "@/data/custom-cosmetics-content";

export function CustomPageStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="border-b border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {customPageStats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-4xl font-semibold tabular-nums text-primary md:text-5xl">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} separator="," useEasing />
              ) : (
                `0${stat.suffix}`
              )}
            </p>
            <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
