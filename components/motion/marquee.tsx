"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, duration = 28, pauseOnHover = true }: MarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn("flex flex-wrap gap-4", className)}>{children}</div>;
  }

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <motion.div
        className="flex w-max min-w-full items-center gap-8 pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        <div className={cn("flex shrink-0 items-center gap-8", pauseOnHover && "group-hover:[animation-play-state:paused]")}>
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
