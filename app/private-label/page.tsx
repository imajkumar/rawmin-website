import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Private Label",
  description: "Launch faster with RAWMIN SKINOLOGY private label skin care—proven stock formulas, your branding, and flexible packaging.",
  path: "/private-label",
  keywords: ["private label cosmetics", "third party manufacturing", "white label beauty"],
});

export default function PrivateLabelPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Private Label", path: "/private-label" }]} />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-semibold">Private label solutions</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Choose from time-tested stock formulas, add your packaging and brand identity, and go to market with lower
          development time and cost—without compromising on quality.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            "Curated formula library across skin, hair, and oral care",
            "Custom label artwork & packaging options",
            "MOQ-friendly programs for emerging brands",
            "Regulatory documentation support for exports",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-8">
          <Link href="/products">Browse private label catalog</Link>
        </Button>
      </div>
      <section className="border-t border-border bg-muted/20 py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-center font-serif text-2xl font-semibold">Start your private label project</h2>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <InquiryForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
