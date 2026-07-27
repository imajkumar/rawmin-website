/** Custom cosmetics page — structure inspired by industry spec-to-product flows, RAWMIN SKINOLOGY voice. */

export const customCosmeticsHero = {
  line1: "Be different.",
  line2: "Be a cut above the rest.",
  sub: "Serving your brand with products that are customized, personalized, and unique.",
} as const;

export const customPageStats = [
  { value: 200, suffix: "+", label: "Satisfied brand partners", note: "Our partner base grows every quarter." },
  { value: 4000, suffix: "kg", label: "Production capacity", note: "Scale batches with consistent quality." },
  { value: 55, suffix: "K sq.ft", label: "Manufacturing area", note: "Room for large-scale programs." },
  { value: 150, suffix: "+", label: "Dedicated specialists", note: "R&D, QA, and production under one roof." },
] as const;

export const customAbout = {
  eyebrow: "About custom cosmetics",
  title: "From formula development to packaging choices—products as unique as your brand",
  body: "For years we have turned client concepts into finished skin care and cosmetic lines. Whether you are launching or scaling, pick your category and we build the best version for your market.",
  cta: "Enquire today",
} as const;

export const customBenefits = {
  eyebrow: "Benefits",
  title: "What are the benefits of customized products?",
  intro:
    "Third-party manufacturing with formula and packaging support, plus contract manufacturing against your approved brief—we translate your vision into viable SKUs.",
  items: [
    "Unique products",
    "Brand-specific formulations",
    "Zero manufacturing capex",
    "Specialised consultation",
    "Personalised packaging",
    "Wide format options",
    "Consistent quality",
    "Cost-efficient scale-up",
  ],
} as const;

export type CustomProcessStep = {
  step: number;
  title: string;
  summary: string;
  bullets?: string[];
};

export const customProcessSteps: CustomProcessStep[] = [
  {
    step: 1,
    title: "Understanding your requirements",
    summary:
      "We align on your market, specifications, and positioning. You may bring a formulation brief, benchmark sample, INCI list, USPs, packaging concept, new category idea, or target price band.",
    bullets: [
      "Formulation or benchmark sample",
      "Ingredient list & marketing claims",
      "Packaging concept & price targets",
    ],
  },
  {
    step: 2,
    title: "Brainstorming & feasibility",
    summary:
      "Our technical team reviews regulatory fit, production scale, material availability, and market success factors—so the path forward is realistic before lab work begins.",
  },
  {
    step: 3,
    title: "Product formula development",
    summary:
      "Lab samples are prepared for your evaluation. We iterate on feedback until you approve a final formula ready for stability and scale-up.",
  },
  {
    step: 4,
    title: "Product packaging selection",
    summary:
      "In parallel, we shortlist packs that suit viscosity, usage, and brand aesthetics—and coordinate reliable suppliers on your behalf.",
  },
  {
    step: 5,
    title: "Cost estimations & approval",
    summary:
      "You receive costing against finalized formula and packaging so you can validate margin and market fit before committing to bulk production.",
  },
  {
    step: 6,
    title: "Product feasibility study",
    summary:
      "Pack compatibility checks (leak, drop, transit) confirm formulation and pack work together before detailed feasibility after order confirmation.",
  },
  {
    step: 7,
    title: "Order confirmation",
    summary:
      "Once costing and specs are approved, advance payment triggers systematic commercial production planning and material procurement.",
  },
];

export const customProcessIntro = {
  eyebrow: "Process",
  title: "The custom manufacturing process",
  body: "A complete spec-to-product approach—from formula development to finished goods at your warehouse.",
} as const;
