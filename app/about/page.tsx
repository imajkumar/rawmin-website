import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${SITE.name}—custom and private label skin care and cosmetic manufacturing in India.`,
  path: "/about",
  keywords: ["about RAWMIN SKINOLOGY", "skin care manufacturer India", "private label skin care"],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-semibold">About {SITE.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {SITE.name} is a pioneer in manufacturing custom skin care and cosmetic products, helping brands move from
          concept to warehouse with a spec-to-product approach backed by ISO-aligned quality systems.
        </p>
      </section>
      <WhyChooseSection />
      <TestimonialsSection />
    </>
  );
}
