"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { LineReveal, TextReveal } from "@/components/motion/text-reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  titleClassName?: string;
  children?: React.ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  titleClassName,
  children,
}: SectionIntroProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)} variant="fadeUpSoft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <TextReveal
        as="h2"
        animateOnMount={false}
        className={cn("mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl", titleClassName)}
        text={title}
      />
      <LineReveal className={cn("mt-4 w-24", align === "center" && "mx-auto")} delay={0.06} />
      {description ? <p className="mt-4 text-muted-foreground">{description}</p> : null}
      {children}
    </Reveal>
  );
}
