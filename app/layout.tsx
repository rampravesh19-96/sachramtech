import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const siteUrl = "https://sachramtech.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sachram Technologies | Software Development Company",
    template: "%s | Sachram Technologies",
  },
  description:
    "Sachram Technologies is a software development company offering web development, mobile app development, UI/UX design, custom software solutions, and product delivery support.",
  applicationName: "Sachram Technologies",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Sachram Technologies",
    url: siteUrl,
    title: "Sachram Technologies | Software Development Company",
    description:
      "Sachram Technologies designs and builds websites, mobile apps, product experiences, and custom software for growing businesses.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Sachram Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachram Technologies | Software Development Company",
    description:
      "Web development, mobile app development, UI/UX design, and custom software delivery for growing businesses.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
