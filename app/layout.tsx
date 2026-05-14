import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bakkerpfi.co.nz"),

  title: {
    default: "Passive Fire Inspection Christchurch | BAKKER PFI LTD",
    template: "%s | BAKKER PFI LTD",
  },

  description:
    "Passive fire inspections, BWOF remedial surveys, compartmentation reviews and compliance reporting across Christchurch and Canterbury.",

  keywords: [
    "Passive Fire Christchurch",
    "Passive Fire Inspection Christchurch",
    "BWOF Passive Fire",
    "IQP Passive Fire",
    "Compartmentation Survey Christchurch",
    "Fire Compliance Christchurch",
    "Passive Fire NZ",
    "Fire Door Inspection Christchurch",
    "Passive Fire Penetrations",
    "Compliance Schedule",
    "Fire Separations NZ",
    "BAKKER PFI LTD",
    "Codexus",
  ],

  authors: [
    {
      name: "Benjamin Bakker",
    },
  ],

  creator: "BAKKER PFI LTD",

  openGraph: {
    type: "website",
    locale: "en_NZ",

    url: "https://bakkerpfi.co.nz",

    title: "Passive Fire Inspection Christchurch | BAKKER PFI LTD",

    description:
      "Passive fire inspections, BWOF remedial surveys and compartmentation reviews across Christchurch and Canterbury.",

    siteName: "BAKKER PFI LTD",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BAKKER PFI LTD",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Passive Fire Inspection Christchurch | BAKKER PFI LTD",

    description:
      "Passive fire inspections, BWOF remedial surveys and compliance reporting across Christchurch and Canterbury.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://bakkerpfi.co.nz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}