import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Request a quote, sample, or manufacturing consultation with RAWMIN SKINOLOGY.",
  path: "/contact",
  keywords: ["contact cosmetic manufacturer", "private label inquiry", "third party quote"],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]} />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Contact us now</h1>
          <p className="mt-4 text-muted-foreground">
            Tell us about your brand stage, categories, and goals. Our manufacturing specialists will respond with next
            steps.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="font-medium">Phone:</span> {SITE.phone}
            </li>
            <li>
              <span className="font-medium">Email:</span> {SITE.email}
            </li>
            <li>
              <span className="font-medium">Location:</span> {SITE.address}
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold">Request an estimate</h2>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </>
  );
}
