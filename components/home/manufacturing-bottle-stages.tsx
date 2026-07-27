import type { CompareStage } from "@/components/home/scroll-compare-stages";

/** SVG-only manufacturing stages — labels live below the compare slider, not on the artwork. */

import { BRAND } from "@/lib/brand-colors";

const mint = BRAND.mintDeep;
const blue = BRAND.blue;

function Bottle({
  x,
  scale = 1,
  label,
  labelOpacity = 0,
  fill = mint,
  cap = "#1a1a1a",
}: {
  x: number;
  scale?: number;
  label?: string;
  labelOpacity?: number;
  fill?: string;
  cap?: string;
}) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      <rect x="28" y="18" width="44" height="14" rx="4" fill={cap} />
      <rect x="34" y="8" width="32" height="14" rx="3" fill={cap} opacity="0.85" />
      <rect x="18" y="32" width="64" height="120" rx="18" fill={fill} />
      <rect x="24" y="48" width="52" height="76" rx="10" fill="white" opacity="0.08" />
      {label ? (
        <text
          x="50"
          y="92"
          textAnchor="middle"
          fill="white"
          fontSize="9"
          fontWeight="700"
          opacity={labelOpacity}
          letterSpacing="0.08em"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function Jar({
  x,
  scale = 1,
  fill = mint,
  label,
  labelOpacity = 0,
}: {
  x: number;
  scale?: number;
  fill?: string;
  label?: string;
  labelOpacity?: number;
}) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      <ellipse cx="50" cy="138" rx="42" ry="10" fill="#000" opacity="0.08" />
      <rect x="14" y="52" width="72" height="86" rx="14" fill={fill} />
      <rect x="10" y="42" width="80" height="18" rx="4" fill="#e8e2ef" />
      {label ? (
        <text x="50" y="98" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" opacity={labelOpacity}>
          {label}
        </text>
      ) : null}
    </g>
  );
}

function StageFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 200" className="h-full max-h-[min(52vh,380px)] w-full" aria-hidden>
      <g transform="translate(0, 8)">
        <ellipse cx="160" cy="170" rx="120" ry="14" fill="#000" opacity="0.06" />
        {children}
      </g>
    </svg>
  );
}

export function ManufacturingStage0() {
  return (
    <StageFrame>
      <g stroke="#94a3b8" strokeWidth="2" fill="#f8fafc">
        <rect x="48" y="58" width="52" height="96" rx="14" />
        <rect x="128" y="52" width="56" height="104" rx="16" />
        <rect x="212" y="68" width="64" height="78" rx="12" />
      </g>
    </StageFrame>
  );
}

export function ManufacturingStage1() {
  return (
    <StageFrame>
      <Bottle x={30} scale={0.92} fill="#c4b5fd" />
      <Bottle x={108} scale={1.02} fill={mint} />
      <Jar x={188} scale={0.88} fill={blue} />
    </StageFrame>
  );
}

export function ManufacturingStage2() {
  return (
    <StageFrame>
      <Bottle x={108} scale={1.08} fill={mint} label="LABEL" labelOpacity={0.35} />
      <rect x="118" y="72" width="84" height="36" rx="4" fill="none" stroke="white" strokeDasharray="4 3" opacity="0.55" />
    </StageFrame>
  );
}

export function ManufacturingStage3() {
  return (
    <StageFrame>
      <Bottle x={108} scale={1.12} fill={mint} label="YOUR BRAND" labelOpacity={1} />
    </StageFrame>
  );
}

export function ManufacturingStage4() {
  return (
    <StageFrame>
      <Jar x={8} scale={0.78} fill="#60a5fa" label="YOUR BRAND" labelOpacity={1} />
      <Bottle x={72} scale={0.82} fill="#86efac" label="YOUR BRAND" labelOpacity={1} />
      <Bottle x={136} scale={0.88} fill="#f472b6" label="YOUR BRAND" labelOpacity={1} />
      <Bottle x={200} scale={0.95} fill={mint} label="YOUR BRAND" labelOpacity={1} />
    </StageFrame>
  );
}

export const MANUFACTURING_COMPARE_STAGES: CompareStage[] = [
  {
    id: "concept",
    beforeLabel: "Concept",
    afterLabel: "Blank packaging",
    title: "Concept & mold",
    subtitle: "Wireframe packs before material and fill are selected.",
    node: <ManufacturingStage0 />,
  },
  {
    id: "blank",
    beforeLabel: "Blank packaging",
    afterLabel: "Unbranded fill",
    title: "Unbranded stock packaging",
    subtitle: "Ready-to-fill bottles and jars awaiting your brand.",
    node: <ManufacturingStage1 />,
  },
  {
    id: "formula",
    beforeLabel: "Unbranded fill",
    afterLabel: "Label design",
    title: "Artwork & formulation",
    subtitle: "Label placement and formula locked for sampling.",
    node: <ManufacturingStage2 />,
  },
  {
    id: "brand",
    beforeLabel: "Label design",
    afterLabel: "Your brand",
    title: "Private label ready",
    subtitle: "Your brand on pack—custom requirements and actives protected.",
    node: <ManufacturingStage3 />,
  },
  {
    id: "lineup",
    beforeLabel: "Your brand",
    afterLabel: "Launch ready",
    title: "Full SKU lineup for your brand",
    subtitle: "Multiple formats and categories ready for market launch.",
    node: <ManufacturingStage4 />,
  },
];

export const STORY_COMPARE_STAGES: CompareStage[] = [
  {
    id: "story-blank",
    beforeLabel: "Blank packaging",
    afterLabel: "In development",
    title: "Unbranded stock packaging",
    node: <ManufacturingStage1 />,
  },
  {
    id: "story-dev",
    beforeLabel: "In development",
    afterLabel: "Label design",
    title: "Artwork & formulation",
    node: <ManufacturingStage2 />,
  },
  {
    id: "story-brand",
    beforeLabel: "Label design",
    afterLabel: "Your brand",
    title: "Private label ready",
    subtitle: "Personal / custom requirement · Your secret ingredients",
    node: <ManufacturingStage3 />,
  },
  {
    id: "story-lineup",
    beforeLabel: "Your brand",
    afterLabel: "Launch ready",
    title: "Full SKU lineup for your brand",
    node: <ManufacturingStage4 />,
  },
];
