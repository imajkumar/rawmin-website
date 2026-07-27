"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LineReveal } from "@/components/motion/text-reveal";
import { ScrollCompareStages, TouchCompareStages } from "@/components/home/scroll-compare-stages";
import {
  ManufacturingStage4,
  STORY_COMPARE_STAGES,
} from "@/components/home/manufacturing-bottle-stages";
import { useIsCompactViewport } from "@/hooks/use-media-query";
import { easeOutExpo } from "@/lib/motion";

const comparePanel = "bg-white shadow-md shadow-black/5";
const compareCaption = "bg-white";

export function StorySection() {
  const reduceMotion = useReducedMotion();
  const isCompact = useIsCompactViewport();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const compare =
    reduceMotion || isCompact ? (
      <TouchCompareStages
        stages={STORY_COMPARE_STAGES}
        className="mx-auto w-full"
        enableDrag
        panelClassName={comparePanel}
        captionClassName={compareCaption}
      />
    ) : (
      <ScrollCompareStages
        progress={scrollYProgress}
        stages={STORY_COMPARE_STAGES}
        className="mx-auto w-full"
        enableDrag
        panelClassName={comparePanel}
        captionClassName={compareCaption}
      />
    );

  const copy = <StoryCopy />;

  if (reduceMotion || isCompact) {
    return (
      <section className="border-b border-border/60 bg-section-light">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
          <div className="order-2 lg:order-1">{compare}</div>
          <div className="order-1 lg:order-2">{copy}</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[200vh] border-b border-border/60 bg-section-light sm:h-[220vh]">
      <div className="sticky top-0 flex min-h-[100dvh] items-start bg-section-light py-10 sm:items-center sm:py-12 lg:min-h-screen">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-0">
          <div className="flex items-center justify-center bg-section-light p-4 sm:p-6 md:p-10 lg:border-r lg:border-border/60 lg:p-10">
            {compare}
          </div>
          <div className="flex flex-col justify-center bg-section-light px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-24">
            {copy}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryCopy() {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
        className="inline-flex w-fit rounded-full bg-slate-200/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.18em]"
      >
        Our story
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06, duration: 0.55, ease: easeOutExpo }}
        className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:mt-5 sm:text-3xl md:text-4xl"
      >
        Your idea, our solution
      </motion.h2>

      <LineReveal className="mt-4 w-full max-w-xs sm:mt-5" delay={0.1} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.55 }}
        className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg"
      >
        <p>
          RAWMIN SKINOLOGY is a skin care and cosmetic products manufacturer in India that specialises in making products that
          represent your brand the best.
        </p>
        <p>
          We offer private labeling products tailor-made according to your brand&apos;s requirements. Apart from being a private
          labeling manufacturer, we are also a manufacturer of cosmetic products with herbal formulas. Let&apos;s onboard your brand
          with RAWMIN SKINOLOGY!
        </p>
        <p className="text-sm font-medium text-foreground/80">
          We manufacture for you—you own the brand, labels, and go-to-market. Not a direct-to-consumer store.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22, duration: 0.5 }}
        className="mt-8 sm:mt-10"
      >
        <Button asChild size="xl" className="w-full min-w-0 sm:w-auto">
          <Link href="/contact" className="text-center">
            <span className="line-clamp-2 sm:line-clamp-none">Get started with RAWMIN SKINOLOGY</span>
            <ArrowUpRight className="size-4 shrink-0" />
          </Link>
        </Button>
      </motion.div>
    </>
  );
}
