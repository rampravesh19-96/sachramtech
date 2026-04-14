import type { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Software development, product design, and digital delivery",
  description:
    "Sachram Technologies helps businesses with web development, mobile app development, UI/UX design, custom software solutions, and product delivery support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sachram Technologies | Web, mobile, and custom software solutions",
    description:
      "A modern software development company helping businesses build websites, mobile apps, product experiences, and custom software systems.",
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
    title: "Sachram Technologies | Web, mobile, and custom software solutions",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.website,
    logo: `${company.website}/logo.svg`,
    email: company.email,
    telephone: company.phone,
    sameAs: [company.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: company.email,
        telephone: company.phone,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: company.website,
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
