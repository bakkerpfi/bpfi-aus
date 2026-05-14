import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bakkerpfi.com.au"),

  title: {
    default: "Passive Fire Inspection Sydney | BAKKER PFI Australia",
    template: "%s | BAKKER PFI Australia",
  },

  description:
    "Passive fire inspections, compartmentation surveys, compliance reporting and AFSS support across Sydney and NSW.",

  keywords: [
    "Passive Fire Sydney",
    "Passive Fire Inspection Sydney",
    "AFSS Passive Fire",
    "Compartmentation Survey Sydney",
    "Fire Compliance Sydney",
    "Essential Fire Safety Measures",
    "Passive Fire Australia",
    "Fire Door Inspection Sydney",
    "NCC Passive Fire",
    "BAKKER PFI Australia",
    "Codexus",
  ],

  authors: [
    {
      name: "Benjamin Bakker",
    },
  ],

  creator: "BAKKER PFI Australia",

  openGraph: {
    type: "website",
    locale: "en_AU",

    url: "https://bakkerpfi.com.au",

    title: "Passive Fire Inspection Sydney | BAKKER PFI Australia",

    description:
      "Passive fire inspections, compartmentation surveys and compliance reporting across Sydney and NSW.",

    siteName: "BAKKER PFI Australia",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BAKKER PFI Australia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Passive Fire Inspection Sydney | BAKKER PFI Australia",

    description:
      "Passive fire inspections, compartmentation surveys and compliance reporting across Sydney and NSW.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://bakkerpfi.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}