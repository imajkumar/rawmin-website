import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
  /** White pill behind logo (footer on dark background) */
  onLightPanel?: boolean;
};

export function BrandLogo({
  className,
  showTagline = false,
  priority,
  onLightPanel = false,
}: BrandLogoProps) {
  const imageBox = (
    <div className="relative h-9 w-[150px] sm:h-10 sm:w-[175px] md:h-11 md:w-[200px]">
      <Image
        src={SITE.logoSrc}
        alt={SITE.logoAlt}
        fill
        priority={priority}
        sizes="200px"
        className="object-contain object-left"
      />
    </div>
  );

  return (
    <div className={cn("flex min-w-0 flex-col", className)}>
      {onLightPanel ? (
        <div className="inline-flex w-fit rounded-lg bg-white px-2 py-1.5 shadow-sm">{imageBox}</div>
      ) : (
        imageBox
      )}
      {showTagline ? (
        <p className="mt-0.5 hidden max-w-[14rem] text-[10px] uppercase leading-snug tracking-[0.16em] text-muted-foreground md:block">
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
  onLightPanel,
}: {
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
  onLightPanel?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center transition-opacity hover:opacity-90", className)}
    >
      <BrandLogo showTagline={showTagline} priority={priority} onLightPanel={onLightPanel} />
    </Link>
  );
}
