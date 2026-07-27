import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { categories } from "@/data/catalog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const knowledgeLinks = [
  { href: "/blog", label: "Blogs" },
  { href: "/faq", label: "FAQs" },
  { href: "/about", label: "Testimonials" },
  { href: "/contact", label: "Download Brochure" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-semibold">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            High-quality, innovative cosmetic product solutions that exceed expectations and meet your brand&apos;s
            specific needs.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              {SITE.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              {SITE.email}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint">General</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint">Products</p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/category/${cat.slug}`} className="text-white/80 transition hover:text-white">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint">Knowledge base</p>
          <ul className="mt-4 space-y-2 text-sm">
            {knowledgeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-sm font-medium">Subscribe for manufacturing insights</p>
            <form className="mt-3 flex flex-col gap-2 sm:flex-row" action="/api/newsletter" method="post">
              <Input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/45"
              />
              <Button type="submit" variant="secondary" size="sm" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name} — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Social" className="hover:text-white">
              <Share2 className="size-4" />
            </Link>
            <Link href="#" aria-label="Website" className="hover:text-white">
              <Globe className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
