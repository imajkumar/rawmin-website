import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  showTagline?: boolean;
  priority?: boolean;
};

export function BrandLogo({ className, imageClassName, showTagline = false, priority }: BrandLogoProps) {
  return (
    <div className={cn("flex min-w-0 flex-col", className)}>
      <Image
        src={SITE.logoSrc}
        alt={SITE.logoAlt}
        width={280}
        height={80}
        priority={priority}
        className={cn("h-9 w-auto max-w-[min(100%,220px)] object-contain object-left sm:h-11 md:h-12", imageClassName)}
      />
      {showTagline ? (
        <p className="mt-0.5 hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:block">
          {SITE.tagline}
        </p>
      ) : null}
    </div>
  );
}

export function BrandLogoLink({
  className,
  showTagline,
  priority,
}: {
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("group inline-flex min-w-0 shrink transition-opacity hover:opacity-90", className)}>
      <BrandLogo showTagline={showTagline} priority={priority} />
    </Link>
  );
}
