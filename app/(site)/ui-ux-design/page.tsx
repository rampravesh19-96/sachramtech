import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { getRequiredServicePage } from "@/lib/service-pages";

const service = getRequiredServicePage("ui-ux-design");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/ui-ux-design",
  },
  openGraph: {
    title: `Sachram Technologies | ${service.metaTitle}`,
    description: service.metaDescription,
    url: "https://sachramtech.vercel.app/ui-ux-design",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sachram Technologies | ${service.metaTitle}`,
    description: service.metaDescription,
    images: ["/banner.png"],
  },
};

export default function UiUxDesignPage() {
  return <ServicePageTemplate service={service} />;
}
