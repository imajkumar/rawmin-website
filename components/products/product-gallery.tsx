"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProductGalleryProps = {
  images: string[];
  name: string;
  videoUrl?: string;
};

export function ProductGallery({ images, name, videoUrl }: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  const [view360, setView360] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((src, index) => (
              <div key={src} className="relative min-w-0 flex-[0_0_100%] aspect-square">
                <Image
                  src={src}
                  alt={`${name} image ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn("object-cover transition", view360 && "animate-[spin_8s_linear_infinite] scale-110")}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          <Button type="button" size="icon" variant="secondary" onClick={scrollPrev} aria-label="Previous image">
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={() => setZoomSrc(images[selected])}
            aria-label="Zoom image"
          >
            <ZoomIn className="size-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant={view360 ? "default" : "secondary"}
            onClick={() => setView360((v) => !v)}
          >
            360°
          </Button>
          <Button type="button" size="icon" variant="secondary" onClick={scrollNext} aria-label="Next image">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border",
              selected === index ? "border-primary ring-2 ring-primary/30" : "border-border",
            )}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      {videoUrl ? (
        <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-border">
          <iframe
            src={videoUrl}
            title={`${name} product video`}
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}

      {zoomSrc ? (
        <button
          type="button"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setZoomSrc(null)}
          aria-label="Close zoom"
        >
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image src={zoomSrc} alt={`${name} zoomed`} fill className="object-contain" sizes="90vw" />
          </div>
        </button>
      ) : null}
    </div>
  );
}
