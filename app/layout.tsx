import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Sachram Technologies | Website & App Development",
  description: "Sachram Technologies provides professional IT solutions including websites, mobile apps, and UI/UX design for businesses.",
  verification: {
    google: "A9z6GytTUG0pgz_OxLuNKAuQmxP-Nd3q-IczTKDrSKA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/logo.svg  " />
</head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}