"use client";

import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Button } from "@/components/ui/button";
import { certificationBadges } from "@/data/company-content";

export function CertificationsCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden bg-brand-deep py-16 text-white">
        <motion.div
          className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-brand-mint/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold">Quality without compromise—standards you can audit</h2>
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {certificationBadges.map((cert) => (
              <StaggerItem key={cert}>
                <motion.span
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium"
                >
                  <BadgeCheck className="size-4 text-brand-mint" />
                  {cert}
                </motion.span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10"
          animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <TextReveal
              as="h2"
              animateOnMount={false}
              className="font-serif text-3xl font-semibold md:text-4xl"
              text="Unmatched quality and reliability for your business growth"
            />
            <p className="mt-4 text-muted-foreground">Trusted for beauty, globally certified.</p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Request a call back</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="tel:+919876543210">Call now</Link>
              </Button>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
