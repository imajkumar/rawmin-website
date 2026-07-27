import { HeroSection } from "@/components/home/hero-section";
import { StorySection } from "@/components/home/story-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { OfferingsSection } from "@/components/home/offerings-section";
import { DevelopmentHighlightsSection } from "@/components/home/development-highlights-section";
import { ProcessTimelineSection } from "@/components/home/process-timeline-section";
import { FacilityPlantSection } from "@/components/home/facility-plant-section";
import { ClientsSection, CategoriesSection } from "@/components/home/clients-categories-section";
import { CategoryPillsSection } from "@/components/home/category-pills-section";
import { CertificationsCtaSection } from "@/components/home/certifications-cta-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqPreviewSection, BlogPreviewSection } from "@/components/home/faq-blog-section";
import { FeaturedProductsSection, InstagramSection, NewsletterSection } from "@/components/home/featured-extra-sections";
import { StatsStrip } from "@/components/home/stats-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/data/catalog";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HeroSection />
      <StorySection />
      <OfferingsSection />
      <DevelopmentHighlightsSection />
      <StatsStrip />
      <ProcessTimelineSection />
      <WhyChooseSection />
      <FacilityPlantSection />
      <CategoryPillsSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <ClientsSection />
      <CertificationsCtaSection />
      <TestimonialsSection />
      <FaqPreviewSection />
      <InstagramSection />
      <BlogPreviewSection />
      <NewsletterSection />
    </>
  );
}
