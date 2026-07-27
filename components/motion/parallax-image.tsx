"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ParallaxImage({
  src,
  alt,
  priority,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? (["0%", "0%"] as const) : (["-6%", "6%"] as const),
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ([1, 1, 1] as const) : ([1.06, 1, 1.04] as const),
  );

  return (
    <div ref={ref} className={className}>
      <motion.div className="relative size-full" style={{ y, scale }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}
