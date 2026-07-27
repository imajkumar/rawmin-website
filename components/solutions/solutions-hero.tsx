"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { solutionsHero } from "@/data/solutions-content";
import { easeOutExpo } from "@/lib/motion";

export function SolutionsHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: easeOutExpo }}
          className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl"
        >
          {solutionsHero.line1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55, ease: easeOutExpo }}
          className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl"
        >
          {solutionsHero.line2}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="mt-8"
        >
          <Button asChild size="lg">
            <Link href="/contact">
              Let&apos;s Connect
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
