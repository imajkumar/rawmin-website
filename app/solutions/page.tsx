import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CertificationsCtaSection } from "@/components/home/certifications-cta-section";
import { SolutionsAddonsSection } from "@/components/solutions/solutions-addons-section";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { SolutionsPathsSection } from "@/components/solutions/solutions-paths-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Custom cosmetics, private label, packaging consulting, regulatory guidance, QA, and export support—end-to-end manufacturing solutions from RAWMIN SKINOLOGY.",
  path: "/solutions",
  keywords: [
    "cosmetic manufacturing solutions",
    "private label manufacturer",
    "custom formulation",
    "export cosmetics documentation",
  ],
});

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />
      <SolutionsHero />
      <SolutionsPathsSection />
      <SolutionsAddonsSection />
      <CertificationsCtaSection />
    </>
  );
}
