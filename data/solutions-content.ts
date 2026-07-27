/** Solutions page — service paths and add-ons, RAWMIN SKINOLOGY voice. */

export const solutionsHero = {
  line1: "Customer-first manufacturer of cosmetic products",
  line2: "Catering effective solutions for every specific need of your brand",
} as const;

export const solutionsIntro = {
  eyebrow: "Our services",
  title: "Expertise in offering fool-proof, customized solutions for brands",
  body: "RAWMIN SKINOLOGY develops custom formulations across categories and applications—ingredients and proportions shaped by an experienced R&D team to match your brand and market.",
} as const;

export type ServicePath = {
  id: "custom" | "private-label";
  title: string;
  steps: string[];
  href: string;
  cta: string;
};

export const servicePaths: ServicePath[] = [
  {
    id: "custom",
    title: "Custom cosmetics",
    steps: [
      "Understanding your requirements",
      "Product formula development",
      "Product packaging selection",
      "Cost estimations and approval",
      "Product feasibility study",
      "Order confirmation",
    ],
    href: "/custom-cosmetics",
    cta: "Know more",
  },
  {
    id: "private-label",
    title: "Private label solutions",
    steps: [
      "Understanding your requirements",
      "Product selection from available stock products",
      "Sample evaluation with minor customizations",
      "Cost estimations and approval",
      "Order confirmation",
    ],
    href: "/private-label",
    cta: "Know more",
  },
];

export type SolutionAddon = {
  title: string;
  body: string;
  bullets?: string[];
};

export const solutionAddons: SolutionAddon[] = [
  {
    title: "Packaging consulting",
    body: "Beyond manufacturing, we help elevate your brand with guidance on materials, design, and labelling—regulatory-ready and market-relevant from first brief to launch.",
  },
  {
    title: "Packaging design",
    body: "Research-backed design support so your packs stand out on shelf and online. We align creative direction with your category, claims, and fill format.",
  },
  {
    title: "Logistics and transportation support",
    body: "Planning, storage, handling, and dispatch coordination—with tracking so finished goods reach your warehouse or 3PL safely and on schedule.",
  },
  {
    title: "Legal and regulatory compliance",
    body: "Operations aligned with applicable cosmetic and quality norms. We work ethically and transparently so partners and consumers benefit from responsible manufacturing.",
  },
  {
    title: "Quality assurance and product feasibility study",
    body: "Quality risks are addressed before dispatch so you can rely on manufacturing integrity. Deeper feasibility checks confirm pack–formula fit once physical samples exist.",
  },
  {
    title: "Regulatory compliance guidance",
    body: "Manufacturing and selling cosmetics involve shared responsibilities between manufacturer and brand owner—especially labelling and claims.",
    bullets: [
      "We follow compliances within the manufacturer’s scope.",
      "Our team guides you through development, packaging, and artwork so brand-owner obligations are clear.",
      "Claim and label reviews help reduce market and regulatory risk.",
    ],
  },
  {
    title: "Export procedures and documentation support",
    body: "Dedicated support for export documentation and Indian customs requirements, plus assistance for importers registering products abroad.",
    bullets: [
      "Export paperwork and clearance aligned with Indian regulations.",
      "COA, specs, MSDS, and samples for overseas registration when needed.",
      "Coordination with your import team for hassle-free inbound logistics.",
    ],
  },
];
