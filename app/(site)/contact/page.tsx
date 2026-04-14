import type { Metadata } from "next";
import Link from "next/link";
import { company, contactCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sachram Technologies to discuss web development, mobile app development, UI/UX design, software development, or custom digital work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sachram Technologies",
    description:
      "Get in touch with Sachram Technologies to discuss web development, mobile app development, UI/UX design, and custom software solutions.",
    url: "https://sachramtech.vercel.app/contact",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sachram Technologies",
    description:
      "Contact Sachram Technologies about software development, product design, and digital delivery work.",
    images: ["/banner.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Contact
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl tracking-tight text-slate-950 sm:text-6xl">
            Start the conversation with a short outline of what you need.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Whether the need is a website, mobile app, interface refresh, or
            custom software requirement, a short message is enough to get the
            discussion moving.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  {card.title}
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {card.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </a>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Best way to reach us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Share the context, the need, and what feels most urgent.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                A short message with your business context, the problem, and the
                kind of help you are looking for is enough to get started.
              </p>
              <p>
                If the scope is still forming, that is fine too. We can help
                clarify what the right next step should be.
              </p>
              <p>
                You can also review our{" "}
                <Link href="/services" className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4">
                  services
                </Link>{" "}
                or learn more{" "}
                <Link href="/about" className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4">
                  about the company
                </Link>
                . If you want quick answers before reaching out, our{" "}
                <Link
                  href="/faq"
                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
                >
                  FAQ page
                </Link>{" "}
                and our{" "}
                <Link
                  href="/how-we-work"
                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
                >
                  how we work
                </Link>{" "}
                page cover common questions about project fit, timelines, and
                collaboration.
              </p>
              <p>
                Location: <span className="font-semibold text-slate-900">{company.address}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
