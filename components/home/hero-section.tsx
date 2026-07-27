"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollCompareStages, TouchCompareStages } from "@/components/home/scroll-compare-stages";
import { MANUFACTURING_COMPARE_STAGES, ManufacturingStage4 } from "@/components/home/manufacturing-bottle-stages";
import { useIsCompactViewport } from "@/hooks/use-media-query";
import { MANUFACTURING_COPY } from "@/lib/brand-visuals";
import { easeOutExpo } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const isCompact = useIsCompactViewport();

  if (isCompact === null) {
    return <HeroSectionStatic touchCompare />;
  }

  if (reduceMotion || isCompact) {
    return <HeroSectionStatic touchCompare={!reduceMotion} showStaticArt={Boolean(reduceMotion)} />;
  }

  return <HeroSectionScroll />;
}

function HeroSectionStatic({
  touchCompare,
  showStaticArt,
}: {
  touchCompare?: boolean;
  showStaticArt?: boolean;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 md:gap-10 lg:grid-cols-2 lg:py-20">
        <HeroCopy />
        {showStaticArt ? (
          <div className="relative flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-card/80 p-4 sm:min-h-[360px] sm:p-6">
            <ManufacturingStage4 />
          </div>
        ) : touchCompare ? (
          <TouchCompareStages stages={MANUFACTURING_COMPARE_STAGES} className="mx-auto w-full" enableDrag />
        ) : null}
      </div>
    </section>
  );
}

function HeroSectionScroll() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[280vh] border-b border-border bg-background sm:h-[300vh] lg:h-[320vh]">
      <div className="sticky top-0 flex min-h-[100dvh] items-start py-10 sm:items-center sm:py-12 lg:h-screen lg:overflow-hidden lg:py-0">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10">
            <HeroCopy />
            <motion.p style={{ opacity: scrollHintOpacity }} className="mt-4 text-xs text-muted-foreground sm:mt-6">
              {MANUFACTURING_COPY.heroHint}
            </motion.p>
          </div>
          <ScrollCompareStages
            progress={scrollYProgress}
            stages={MANUFACTURING_COMPARE_STAGES}
            className="mx-auto w-full justify-self-center lg:justify-self-auto"
            enableDrag
          />
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="text-xs text-muted-foreground sm:text-sm"
      >
        Third-party & private label manufacturer · India
      </motion.p>

      <TextReveal
        as="h1"
        delay={0.08}
        className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl lg:text-[2.85rem]"
        text="Expertly crafted cosmetic manufacturing solutions for industry excellence"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: easeOutExpo }}
        className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg"
      >
        {MANUFACTURING_COPY.heroSub}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.55, ease: easeOutExpo }}
        className="mt-6 sm:mt-8"
      >
        <Button asChild size="lg" className="group w-full sm:w-auto">
          <Link href="/contact">
            Let&apos;s Connect
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </motion.div>
    </>
  );
}
