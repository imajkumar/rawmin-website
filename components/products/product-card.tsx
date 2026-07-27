import Link from "next/link";
import Image from "next/image";
import { Factory } from "lucide-react";
import type { Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export function ProductCard({ product, className, priority }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <Image
          src={product.images[0]}
          alt={`${product.name} — sample formulation`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
          <Factory className="size-3" />
          Third-party
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted-foreground">{product.categoryName}</p>
        <h3 className="mt-1 line-clamp-2 font-medium leading-snug group-hover:text-primary">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{product.shortDescription}</p>
        <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wide text-primary">
          View formulation details →
        </p>
      </div>
    </Link>
  );
}
