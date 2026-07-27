"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";
import { LineReveal } from "@/components/motion/text-reveal";
import { categories, clientLogos } from "@/data/catalog";

export function ClientsSection() {
  return (
    <section className="border-y border-border/70 bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our clients</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">From startups to large enterprises</h2>
          <LineReveal className="mx-auto mt-4 w-24" />
        </Reveal>
        <div className="mt-10">
          <Marquee duration={26}>
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="inline-flex shrink-0 items-center rounded-full border border-border bg-muted/30 px-6 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-primary/30 hover:bg-primary/5"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Categories</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
          Choose from our versatile product categories
        </h2>
        <LineReveal className="mt-4 w-28" />
      </Reveal>

      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <StaggerItem key={category.slug}>
            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Link
                href={`/category/${category.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-border"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition group-hover:from-black/80" />
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-white transition duration-300 group-hover:translate-y-0">
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="mt-1 text-xs text-white/80">{category.productCount}+ SKUs</p>
                </div>
              </Link>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
