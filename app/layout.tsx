import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://bakker-blfp8ijw7-bakkerpfis-projects.vercel.app"
  ),
  title: "Bakker Passive Fire Inspections | Sydney CBD",
  description:
    "Passive fire inspection, compliance reporting and fire register services throughout Sydney CBD commercial buildings.",
  keywords: [
    "passive fire inspections Sydney",
    "passive fire inspection Sydney CBD",
    "fire stopping inspection Sydney",
    "passive fire compliance reporting",
    "fire register Sydney",
    "Bakker PFI Australia",
    "Bakker Passive Fire Inspections",
  ],
  openGraph: {
    title: "Bakker Passive Fire Inspections | Sydney CBD",
    description:
      "Passive fire inspection, compliance reporting and fire register services throughout Sydney CBD commercial buildings.",
    url: "/",
    siteName: "Bakker Passive Fire Inspections",
    images: [
      {
        url: "/sydney-cbd.png",
        width: 1200,
        height: 630,
        alt: "Sydney CBD Passive Fire Inspections",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}