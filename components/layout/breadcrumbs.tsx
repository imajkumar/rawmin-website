import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl overflow-x-auto px-4 pt-4 sm:px-6 sm:pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1">
              {index > 0 ? <ChevronRight className="size-3.5" aria-hidden /> : null}
              {isLast ? (
                <span className={cn("font-medium text-foreground")} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
