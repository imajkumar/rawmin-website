"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** Animate on mount (hero) vs only when specified externally */
  animateOnMount?: boolean;
};

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  animateOnMount = true,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag className={cn("block", className)} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={animateOnMount ? { y: "110%", opacity: 0, rotate: 2 } : false}
            animate={animateOnMount ? { y: 0, opacity: 1, rotate: 0 } : undefined}
            whileInView={animateOnMount ? undefined : { y: 0, opacity: 1, rotate: 0 }}
            viewport={animateOnMount ? undefined : { once: true, margin: "-60px" }}
            transition={{
              delay: delay + index * 0.045,
              duration: 0.62,
              ease: easeOutExpo,
            }}
            {...(animateOnMount
              ? {}
              : { initial: { y: "110%", opacity: 0, rotate: 2 } as const })}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

type LineRevealProps = {
  className?: string;
  delay?: number;
};

export function LineReveal({ className, delay = 0 }: LineRevealProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={cn("h-px w-16 bg-primary/40", className)} />;

  return (
    <motion.div
      className={cn("h-px origin-left bg-gradient-to-r from-primary to-primary/0", className)}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.8, ease: easeOutExpo }}
    />
  );
}
