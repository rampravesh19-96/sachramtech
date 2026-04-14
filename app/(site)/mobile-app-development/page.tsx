import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { getRequiredServicePage } from "@/lib/service-pages";

const service = getRequiredServicePage("mobile-app-development");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/mobile-app-development",
  },
  openGraph: {
    title: `Sachram Technologies | ${service.metaTitle}`,
    description: service.metaDescription,
    url: "https://sachramtech.vercel.app/mobile-app-development",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sachram Technologies | ${service.metaTitle}`,
    description: service.metaDescription,
    images: ["/banner.png"],
  },
};

export default function MobileAppDevelopmentPage() {
  return <ServicePageTemplate service={service} />;
}
