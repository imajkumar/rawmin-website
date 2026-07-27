import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CategoriesSection } from "@/components/home/clients-categories-section";
import { CertificationsCtaSection } from "@/components/home/certifications-cta-section";
import { FaqPreviewSection } from "@/components/home/faq-blog-section";
import { CustomAboutSection, CustomBenefitsSection } from "@/components/custom-cosmetics/custom-about-benefits";
import { CustomCosmeticsHero } from "@/components/custom-cosmetics/custom-cosmetics-hero";
import { CustomPageStats } from "@/components/custom-cosmetics/custom-page-stats";
import { CustomSevenStepProcess } from "@/components/custom-cosmetics/custom-seven-step-process";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/data/catalog";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Cosmetics",
  description:
    "Custom skin care and cosmetic development—spec-to-product manufacturing, seven-step process, and tailored packaging with RAWMIN SKINOLOGY.",
  path: "/custom-cosmetics",
  keywords: [
    "custom cosmetics manufacturer",
    "custom skin care formulation",
    "contract manufacturing",
    "spec to product",
  ],
});

export default function CustomCosmeticsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Custom Cosmetics", path: "/custom-cosmetics" }]} />
      <CustomCosmeticsHero />
      <CustomPageStats />
      <CustomAboutSection />
      <CustomBenefitsSection />
      <CustomSevenStepProcess />
      <CategoriesSection />
      <CertificationsCtaSection />
      <FaqPreviewSection />
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-center text-2xl font-semibold">Request custom development</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Share your brief—our team will follow the process above with you step by step.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
