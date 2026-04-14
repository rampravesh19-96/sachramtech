import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Modern software, product, and design delivery",
  description:
    "Sachram Technologies helps businesses design, build, and improve digital products through product engineering, UI/UX design, custom software, and launch support.",
  openGraph: {
    title: "Sachram Technologies | Product engineering and digital delivery",
    description:
      "A modern product engineering and design partner for companies that need polished digital delivery and dependable execution.",
    url: "https://sachramtech.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://sachramtech.vercel.app/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachram Technologies | Product engineering and digital delivery",
    description:
      "Sachram Technologies designs and builds websites, apps, product experiences, and custom software for growing companies.",
    images: ["https://sachramtech.vercel.app/banner.png"],
  },
  verification: {
    google: "A9z6GytTUG0pgz_OxLuNKAuQmxP-Nd3q-IczTKDrSKA",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
