"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/motion/marquee";
import { NAV_LINKS, REASONS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function TickerContent() {
  return (
    <>
      {REASONS.map((item) => (
        <span key={item} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
          <span className="size-1.5 rounded-full bg-primary" />
          {item}
        </span>
      ))}
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setOffset = () => {
      document.documentElement.style.setProperty("--header-offset", `${el.offsetHeight}px`);
    };

    setOffset();
    const ro = new ResizeObserver(setOffset);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="border-b border-border/50 bg-ticker-sage lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-[11px] text-foreground/75 sm:text-xs">
          <Marquee duration={20} className="min-w-0 flex-1">
            <TickerContent />
          </Marquee>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex shrink-0 items-center gap-1 font-medium hover:text-primary"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="size-3.5" />
            <span className="hidden sm:inline">{SITE.phone}</span>
          </a>
        </div>
      </div>

      <div className="hidden border-b border-border/50 bg-ticker-sage lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-2 text-xs text-foreground/75">
          <p className="shrink-0 font-medium text-foreground/80">Reason to choose us</p>
          <Marquee duration={22} className="flex-1">
            <TickerContent />
          </Marquee>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex shrink-0 items-center gap-1 hover:text-primary"
          >
            <Phone className="size-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          paddingTop: scrolled ? 8 : 10,
          paddingBottom: scrolled ? 8 : 10,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "border-b border-border/60 bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-md shadow-primary/5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:py-3 lg:py-4">
          <Link href="/" className="group flex min-w-0 items-center gap-2">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-mint-deep text-[10px] font-bold text-white shadow-md transition-transform group-hover:scale-105 sm:size-10 sm:text-xs">
              {SITE.logoMonogram}
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base md:text-lg">
                {SITE.name}
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:block">
                {SITE.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary lg:px-3"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav
            className="hidden max-w-[42%] items-center gap-0.5 overflow-x-auto lg:flex xl:hidden"
            aria-label="Main tablet"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full px-2 py-2 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button asChild size="sm" className="px-3 text-xs sm:hidden">
              <Link href="/contact">Inquire</Link>
            </Button>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Inquire Now</Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-border bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6 lg:hidden"
            style={{ top: "var(--header-offset, 4.5rem)" }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base font-medium hover:bg-accent active:bg-accent/80"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Inquire Now
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
