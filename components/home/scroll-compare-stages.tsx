"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, type MotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type CompareStage = {
  id: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  subtitle?: string;
  node: React.ReactNode;
};

type CompareStagesViewProps = {
  stages: CompareStage[];
  from: number;
  reveal: number;
  onRevealChange: (v: number) => void;
  className?: string;
  enableDrag?: boolean;
  panelClassName?: string;
  captionClassName?: string;
  stepLabelsClassName?: string;
};

type ScrollCompareStagesProps = Omit<CompareStagesViewProps, "from" | "reveal" | "onRevealChange"> & {
  progress: MotionValue<number>;
};

type TouchCompareStagesProps = Omit<CompareStagesViewProps, "from" | "reveal" | "onRevealChange">;

export function ScrollCompareStages({
  progress,
  stages,
  className,
  enableDrag = true,
  panelClassName,
  captionClassName,
  stepLabelsClassName,
}: ScrollCompareStagesProps) {
  const reduceMotion = useReducedMotion();
  const segmentCount = Math.max(stages.length - 1, 1);

  const [from, setFrom] = useState(0);
  const [reveal, setReveal] = useState(0);

  useMotionValueEvent(progress, "change", (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    const t = clamped * segmentCount;
    const index = Math.min(Math.floor(t), segmentCount - 1);
    const local = Math.min(Math.max(t - index, 0), 1);
    setFrom(index);
    setReveal(local);
  });

  useEffect(() => {
    const clamped = Math.min(1, Math.max(0, progress.get()));
    const t = clamped * segmentCount;
    const index = Math.min(Math.floor(t), segmentCount - 1);
    const local = Math.min(Math.max(t - index, 0), 1);
    setFrom(index);
    setReveal(local);
  }, [progress, segmentCount]);

  if (reduceMotion) {
    return (
      <StaticCompareFallback
        stages={stages}
        className={className}
        captionClassName={captionClassName}
      />
    );
  }

  return (
    <CompareStagesView
      stages={stages}
      from={from}
      reveal={reveal}
      onRevealChange={setReveal}
      className={className}
      enableDrag={enableDrag}
      panelClassName={panelClassName}
      captionClassName={captionClassName}
      stepLabelsClassName={stepLabelsClassName}
    />
  );
}

/** Drag + step controls for phone/tablet (no scroll-scrub). */
export function TouchCompareStages({
  stages,
  className,
  enableDrag = true,
  panelClassName,
  captionClassName,
  stepLabelsClassName,
}: TouchCompareStagesProps) {
  const reduceMotion = useReducedMotion();
  const segmentCount = Math.max(stages.length - 1, 1);
  const [from, setFrom] = useState(0);
  const [reveal, setReveal] = useState(0.4);

  if (reduceMotion) {
    return (
      <StaticCompareFallback
        stages={stages}
        className={className}
        captionClassName={captionClassName}
      />
    );
  }

  const goPrev = () => {
    if (from <= 0) {
      setReveal(0);
      return;
    }
    setFrom((i) => i - 1);
    setReveal(0.35);
  };

  const goNext = () => {
    if (from >= segmentCount - 1) {
      setReveal(1);
      return;
    }
    setFrom((i) => i + 1);
    setReveal(0.35);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <CompareStagesView
        stages={stages}
        from={from}
        reveal={reveal}
        onRevealChange={setReveal}
        enableDrag={enableDrag}
        panelClassName={panelClassName}
        captionClassName={captionClassName}
        stepLabelsClassName={stepLabelsClassName}
      />
      <div className="flex items-center justify-between gap-2">
        <Button type="button" variant="outline" size="sm" onClick={goPrev} disabled={from === 0 && reveal <= 0.05}>
          <ChevronLeft className="size-4" />
          Prev
        </Button>
        <span className="text-center text-xs font-medium text-muted-foreground">
          Step {from + 1} of {segmentCount}
        </span>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={goNext}
          disabled={from >= segmentCount - 1 && reveal >= 0.95}
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

function StaticCompareFallback({
  stages,
  className,
  captionClassName,
}: {
  stages: CompareStage[];
  className?: string;
  captionClassName?: string;
}) {
  const last = stages[stages.length - 1];
  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      {last.node}
      <StageCaption
        stageKey={last.id}
        title={last.title}
        subtitle={last.subtitle}
        className={captionClassName}
      />
    </div>
  );
}

function CompareStagesView({
  stages,
  from,
  reveal,
  onRevealChange,
  className,
  enableDrag = true,
  panelClassName,
  captionClassName,
  stepLabelsClassName,
}: CompareStagesViewProps) {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const segmentCount = Math.max(stages.length - 1, 1);
  const to = Math.min(from + 1, stages.length - 1);
  const beforeStage = stages[from];
  const afterStage = stages[to];

  const activeCaption = useMemo(() => {
    const stage = reveal >= 0.5 ? afterStage : beforeStage;
    return { title: stage.title, subtitle: stage.subtitle, key: stage.id };
  }, [afterStage, beforeStage, reveal]);

  return (
    <div ref={ref} className={cn("relative w-full max-w-lg select-none sm:max-w-xl lg:max-w-none", className)}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
        animate={inView || reduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 14 }}
        transition={{ duration: 0.62, ease: easeOutExpo }}
        className={cn(
          "relative aspect-[4/5] max-h-[min(72dvh,520px)] w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg shadow-brand-blue/10 sm:max-h-none",
          panelClassName,
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4 pb-4 pt-9 sm:px-6 sm:pt-10 md:px-10 md:pt-12">
          {beforeStage.node}
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden px-4 pb-4 pt-9 sm:px-6 sm:pt-10 md:px-10 md:pt-12"
          style={{ clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)` }}
        >
          {afterStage.node}
        </motion.div>

        <CompareHandle
          reveal={reveal}
          enableDrag={enableDrag}
          onRevealChange={onRevealChange}
          beforeLabel={afterStage.beforeLabel}
          afterLabel={afterStage.afterLabel}
        />
      </motion.div>

      <div
        className={cn(
          "mt-3 grid grid-cols-[1fr_auto_1fr] gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:mt-4 sm:text-[11px] sm:tracking-wider",
          stepLabelsClassName,
        )}
      >
        <span className="truncate">{beforeStage.beforeLabel}</span>
        <span className="text-primary">
          Step {from + 1}/{segmentCount}
        </span>
        <span className="truncate text-right">{afterStage.afterLabel}</span>
      </div>

      <StageCaption
        stageKey={activeCaption.key}
        title={activeCaption.title}
        subtitle={activeCaption.subtitle}
        className={captionClassName}
      />
    </div>
  );
}

function StageCaption({
  stageKey,
  title,
  subtitle,
  className,
}: {
  stageKey: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stageKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        className={cn(
          "mt-3 min-h-[3.25rem] rounded-xl border border-border/80 bg-white/80 px-3 py-3 text-center shadow-sm sm:mt-4 sm:px-4",
          className,
        )}
      >
        <p className="text-sm font-semibold text-primary">{title}</p>
        {subtitle ? <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{subtitle}</p> : null}
      </motion.div>
    </AnimatePresence>
  );
}

function CompareHandle({
  reveal,
  enableDrag,
  onRevealChange,
  beforeLabel,
  afterLabel,
}: {
  reveal: number;
  enableDrag: boolean;
  onRevealChange: (v: number) => void;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-primary shadow-[0_0_12px_rgba(58,123,213,0.45)]"
        style={{ left: `${reveal * 100}%` }}
        aria-hidden
      />
      <motion.div
        className="absolute top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
        style={{ left: `${reveal * 100}%` }}
      >
        <div
          className={cn(
            "flex size-11 touch-manipulation items-center justify-center rounded-full border-2 border-primary bg-white shadow-md sm:size-10",
            enableDrag && "cursor-ew-resize active:scale-95",
          )}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(reveal * 100)}
          aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
          onPointerDown={
            enableDrag
              ? (e) => {
                  e.preventDefault();
                  const bar = (e.currentTarget.parentElement?.parentElement as HTMLElement) ?? null;
                  if (!bar) return;

                  const update = (clientX: number) => {
                    const rect = bar.getBoundingClientRect();
                    const next = (clientX - rect.left) / rect.width;
                    onRevealChange(Math.min(1, Math.max(0, next)));
                  };

                  update(e.clientX);
                  const move = (ev: PointerEvent) => update(ev.clientX);
                  const up = () => {
                    window.removeEventListener("pointermove", move);
                    window.removeEventListener("pointerup", up);
                  };
                  window.addEventListener("pointermove", move);
                  window.addEventListener("pointerup", up);
                }
              : undefined
          }
        >
          <span className="text-[10px] font-bold text-primary">◀ ▶</span>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute left-2 top-2 rounded-md bg-white/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground shadow-sm sm:left-3 sm:top-3 sm:text-[10px]">
        Before
      </div>
      <div className="pointer-events-none absolute right-2 top-2 rounded-md bg-primary px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm sm:right-3 sm:top-3 sm:text-[10px]">
        After
      </div>
    </>
  );
}
