import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { solutionAddons } from "@/data/solutions-content";

export function SolutionsAddonsSection() {
  return (
    <section className="border-t border-border bg-muted/20 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {solutionAddons.map((addon) => (
            <StaggerItem
              key={addon.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <Reveal>
                <h3 className="text-xl font-semibold">{addon.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{addon.body}</p>
                {addon.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {addon.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <Button asChild variant="outline" className="mt-6 w-fit">
                  <Link href="/contact">Enquire now</Link>
                </Button>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
