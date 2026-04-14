import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  faqSections,
  faqStructuredDataItems,
} from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about Sachram Technologies services, project fit, timelines, collaboration, delivery process, and how to get started.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Sachram Technologies",
    description:
      "Answers to common questions about working with Sachram Technologies across websites, mobile apps, UI/UX design, and custom software projects.",
    url: "https://sachramtech.vercel.app/faq",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Sachram Technologies",
    description:
      "Common questions about services, delivery, collaboration, timelines, and getting started with Sachram Technologies.",
    images: ["/banner.png"],
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqStructuredDataItems,
  };

  return (
    <main className="bg-white text-slate-900">
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Frequently asked questions
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl tracking-tight text-slate-950 sm:text-6xl">
            Clear answers for teams evaluating a software, design, or digital
            delivery partner.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            This page covers the questions we hear most often about fit, scope,
            collaboration, timelines, and getting started. If you are comparing
            options or preparing to enquire, it is a practical place to begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {faqSections.map((section) => (
              <section
                key={section.title}
                aria-labelledby={section.title.toLowerCase().replace(/\s+/g, "-")}
                className="rounded-[2rem] border border-slate-200 bg-slate-50/70 p-6 shadow-sm sm:p-8"
              >
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                    FAQ section
                  </p>
                  <h2
                    id={section.title.toLowerCase().replace(/\s+/g, "-")}
                    className="font-display mt-4 text-4xl tracking-tight text-slate-950"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {section.intro}
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  {section.items.map((item) => (
                    <article
                      key={item.question}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:p-7"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {item.question}
                      </h3>
                      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                        {item.answer}
                      </p>
                      {item.links && item.links.length > 0 ? (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {item.links.map((link) => (
                            <Link
                              key={`${item.question}-${link.href}`}
                              href={link.href}
                              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              Still weighing whether the project is a fit?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Send a short overview of the need, the current challenge, or the
              kind of product work you are considering. We can help clarify the
              likely next step.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact Sachram Technologies
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn more about the company
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
