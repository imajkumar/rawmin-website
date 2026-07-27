"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { easeOutExpo, revealVariants, staggerContainer, staggerItem, type RevealVariant } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** Viewport threshold 0–1 */
  threshold?: number;
};

export function Reveal({ children, className, delay = 0, variant = "fadeUp", threshold = 0.12 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const base = revealVariants[variant];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: base.hidden,
    visible: {
      ...base.visible,
      transition: {
        ...(typeof base.visible === "object" && base.visible !== null && "transition" in base.visible
          ? base.visible.transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  threshold = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/** Subtle lift + press for cards and tiles */
export function HoverLift({
  children,
  className,
  lift = 6,
}: {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift, transition: { duration: 0.28, ease: easeOutExpo } }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.div>
  );
}
