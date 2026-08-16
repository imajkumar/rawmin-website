export const SITE = {
  name: "RAWMIN SKINOLOGY",
  tagline: "Private Label Skin Care & Cosmetics Manufacturer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rawminskinology.com",
  email: "info@rawminskinology.com",
  phone: "+91 98765 43210",
  address:
    "2, Site No. 2, Plot No, NH-19, Block A, DLF Industrial Area, Sector 32, Faridabad, Haryana 121003",
  logoMonogram: "RS",
  logoSrc: "/brand/rawmin-logo.jpg",
  logoAlt: "RAWMIN — Min it to Win it",
  slogan: "Min it to Win it.",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/private-label", label: "Private Label" },
  { href: "/custom-cosmetics", label: "Custom Cosmetics" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const REASONS = [
  "Trust",
  "Value For Money",
  "Customer Delight",
  "Consistent Quality",
  "Reliability",
] as const;
