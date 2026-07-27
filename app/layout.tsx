import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AppProviders } from "@/components/providers/app-providers";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Pioneer skin care and cosmetic manufacturer in India. Private label, custom formulations, and spec-to-product manufacturing with ISO-certified quality.",
  path: "/",
  keywords: [
    "RAWMIN SKINOLOGY",
    "skin care manufacturer India",
    "private label skin care",
    "third party cosmetics manufacturing",
    "custom skin care formulation",
  ],
  }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd data={organizationJsonLd()} />
        <AppProviders>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
