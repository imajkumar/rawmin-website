import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/motion/section-intro";
import { blogPosts, homeFaqs } from "@/data/catalog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqPreviewSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionIntro
          align="center"
          className="mx-auto"
          eyebrow="FAQs"
          title="Still have questions? We got your back"
          titleClassName="font-serif"
        />
        <Reveal delay={0.1} className="mt-8">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/faq">View more</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Informative blogs</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Read what&apos;s trending</h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/blog">View all blogs</Link>
        </Button>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-border">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</p>
                <h3 className="mt-2 font-medium leading-snug group-hover:text-primary">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
