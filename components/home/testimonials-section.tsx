"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/data/catalog";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[index];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold">Client satisfaction makes us happier</h2>
      </Reveal>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-muted/20 p-8 md:p-12">
        <Quote className="size-10 text-primary/30" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.name}
            initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -24, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/90 md:text-xl"
          >
            “{active.quote}”
            <footer className="mt-6 text-base">
              <p className="font-semibold">{active.name}</p>
              <p className="text-sm text-muted-foreground">{active.company}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
            <ChevronRight className="size-4" />
          </Button>
          <div className="ml-3 flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
