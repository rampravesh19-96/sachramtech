import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Sachram Technologies | Website & App Development",
  description: "Professional IT solutions: websites, mobile apps, UI/UX design.",
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