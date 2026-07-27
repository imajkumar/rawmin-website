import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/data/catalog";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs",
  description: "Frequently asked questions about private label manufacturing, quality, sourcing, and exports at RAWMIN SKINOLOGY.",
  path: "/faq",
  keywords: ["cosmetic manufacturing FAQ", "private label questions", "third party manufacturer"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faq" }]} />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-serif text-4xl font-semibold">Frequently asked questions</h1>
        <p className="mt-3 text-muted-foreground">Still have questions? We got your back.</p>
        <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-border px-5">
          {homeFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
