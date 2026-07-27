/**
 * RAWMIN SKINOLOGY manufacturing narrative — themes aligned with industry leaders,
 * rewritten in our voice (not copied from third-party sites).
 */

export const valueProposition = {
  eyebrow: "Strategic manufacturing partner",
  title: "Help vision-led brands scale beauty & wellness products with precision",
  body: "From first-time founders to established FMCG names, RAWMIN SKINOLOGY turns concepts into shelf-ready skin care lines—private label, contract manufacturing, and custom formulation under one spec-to-product roof.",
  trustLine: "Trusted by startups and enterprises across India and export markets",
} as const;

export const offerings = [
  {
    title: "Private label",
    href: "/private-label",
    summary: "Launch faster with proven bases, your artwork, and flexible MOQs.",
  },
  {
    title: "Contract manufacturing",
    href: "/solutions",
    summary: "End-to-end production against your approved formula and quality brief.",
  },
  {
    title: "Custom formulation",
    href: "/custom-cosmetics",
    summary: "R&D-led development with stability testing and claim-ready documentation.",
  },
  {
    title: "Custom packaging",
    href: "/contact",
    summary: "Primary & secondary packaging, labels, and design support for your brand identity.",
  },
] as const;

export const developmentHighlights = [
  {
    title: "Automated filling lines",
    description: "Tube, bottle, and jar lines tuned for consistent weights and clean finishes.",
  },
  {
    title: "Global ingredient library",
    description: "Thousands of naturals and actives vetted for cosmetic and herbal programs.",
  },
  {
    title: "Launch-aligned logistics",
    description: "Production planning built around your go-live dates and replenishment cycles.",
  },
  {
    title: "Climate-stable formulas",
    description: "Stability protocols so products perform across heat, humidity, and cold chain.",
  },
  {
    title: "Differentiated actives",
    description: "Innovation support to help your SKU stand out—not look like every white label.",
  },
  {
    title: "Audit-ready facilities",
    description: "GMP-aligned operations with documentation for domestic and export partners.",
  },
] as const;

export const impactStats = [
  { value: 200, suffix: "+", label: "Brand partners served" },
  { value: 40, suffix: "+", label: "Export & domestic markets" },
  { value: 2500, suffix: "+", label: "Formulations in our library" },
  { value: 50000, suffix: "+", label: "Sq. ft. manufacturing footprint" },
  { value: 150, suffix: "+", label: "Production & QA specialists" },
] as const;

export const manufacturingSteps = [
  {
    step: "01",
    title: "Choose your range",
    description:
      "Share your category, positioning, and must-have actives. We map options from our catalog or custom brief.",
  },
  {
    step: "02",
    title: "Sampling & approval",
    description:
      "Lab samples, feedback loops, and sign-off before batch scale—so surprises stay off the production floor.",
  },
  {
    step: "03",
    title: "Packaging & artwork",
    description:
      "Structural packs, labels, and brand assets aligned with regulatory copy and your visual identity.",
  },
  {
    step: "04",
    title: "Production & QA release",
    description:
      "GMP filling, in-process checks, and batch records before goods leave our facility.",
  },
  {
    step: "05",
    title: "Dispatch to you",
    description:
      "Palletized delivery to your warehouse or 3PL with export documentation when you need it.",
  },
] as const;

export const facilityPillars = [
  {
    id: "rd",
    label: "Research & development",
    body: "Formulation chemists, pilot batches, and stability chambers to validate your product story before scale.",
  },
  {
    id: "qc",
    label: "Quality control",
    body: "Incoming RM inspection, in-line checks, and finished-goods release aligned with ISO 22716 practices.",
  },
  {
    id: "production",
    label: "Production",
    body: "Automatic filling, capping, labeling, and coding lines with batch traceability.",
  },
  {
    id: "packaging",
    label: "Packaging",
    body: "Secondary cartons, shrink bundling, and custom pack-out options for retail and e-commerce.",
  },
] as const;

export const plantNarrative = {
  title: "Manufacturing built for scale and safety",
  body: "Modern equipment, skilled operators, and preventive hygiene practices—from bulk manufacturing through final pack-out—so your customers receive consistent product every lot.",
} as const;

export const exportNarrative = {
  title: "Export-ready programs",
  body: "Documentation support, samples, and compliance guidance for brands shipping beyond India.",
  highlight: "40+ countries served via partner brands",
} as const;

export const certificationBadges = [
  "ISO 22716",
  "ISO 9001",
  "FDCA GMP",
  "HACCP aligned",
  "Halal / Kosher on request",
  "Export COA & MSDS",
] as const;

export const extendedFaqs = [
  {
    question: "Do you provide documented certifications for products manufactured under our brand?",
    answer:
      "Yes. We supply GMP-related certificates, MSDS, specifications, COA, and free-sale documentation where applicable—plus support for country-specific registration packs.",
  },
  {
    question: "What filling and packaging capabilities does RAWMIN SKINOLOGY offer?",
    answer:
      "Automatic tube and bottle lines, labeling, coding, shrink wrapping, and assorted primary packaging formats—selected to match your SKU and viscosity.",
  },
  {
    question: "What are your custom formulation capabilities?",
    answer:
      "Experienced chemists, broad naturals library, fragrance options, stability testing, and iterative sampling until your brief is met.",
  },
  {
    question: "Is packaging design included in contract manufacturing?",
    answer:
      "We collaborate on label artwork, dielines, and pack engineering. You can bring agency files or brief our team for production-ready assets.",
  },
  {
    question: "What is custom cosmetic formulation?",
    answer:
      "A formula developed exclusively for your brand specifications—not a stock base—with ingredients, texture, and claims aligned to your market.",
  },
] as const;

export const extendedCategoryLabels = [
  { slug: "skincare", name: "Skin care" },
  { slug: "haircare", name: "Hair care" },
  { slug: "mens-grooming", name: "Men's grooming" },
  { slug: "baby-care", name: "Baby care" },
  { slug: "oral-care", name: "Oral care" },
  { slug: "herbal", name: "Ayurvedic & herbal" },
  { slug: "skin-cleansers", name: "Bath & shower" },
  { slug: "kids-care", name: "Hygiene & kids" },
] as const;
