import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/how-we-work",
          "/web-development",
          "/mobile-app-development",
          "/ui-ux-design",
          "/custom-software-development",
          "/contact",
          "/faq",
        ],
        disallow: ["/offer-letter", "/policy"],
      },
    ],
    sitemap: "https://sachramtech.vercel.app/sitemap.xml",
    host: "https://sachramtech.vercel.app",
  };
}
