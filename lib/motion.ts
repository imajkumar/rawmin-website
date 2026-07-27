export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const springSnappy = { type: "spring" as const, stiffness: 260, damping: 22 };

export const springSoft = { type: "spring" as const, stiffness: 120, damping: 20 };

export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const revealVariants = {
  fadeUp,
  fadeUpSoft,
  fadeInRight,
  fadeInLeft,
  scaleIn,
} as const;

export type RevealVariant = keyof typeof revealVariants;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.52, ease: easeOutExpo },
  },
};
