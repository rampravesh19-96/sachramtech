import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intern Offer Letter | Sachram Technologies",
  description:
    "Printable intern offer letter generated from local repository data.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfferLetterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
