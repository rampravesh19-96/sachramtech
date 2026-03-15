import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="A9z6GytTUG0pgz_OxLuNKAuQmxP-Nd3q-IczTKDrSKA"
        />

        {/* Basic Meta */}
        <title>Sachram Technologies | Website & App Development</title>
        <meta
          name="description"
          content="Website and App Development Solutions by Sachram Technologies. We provide professional IT solutions including websites, mobile apps, and UI/UX design."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="Sachram Technologies | IT Solutions" />
        <meta
          property="og:description"
          content="We provide professional IT solutions including websites, mobile apps, and UI/UX design to help businesses grow."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sachramtech.vercel.app/" />
        <meta property="og:image" content="https://sachramtech.vercel.app/banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sachram Technologies | IT Solutions" />
        <meta
          name="twitter:description"
          content="We provide professional IT solutions including websites, mobile apps, and UI/UX design to help businesses grow."
        />
        <meta name="twitter:image" content="https://sachramtech.vercel.app/banner.png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}