import type { Metadata } from "next";
import Link from "next/link";
import {
  bestFitEngagements,
  clientExpectations,
  collaborationModels,
  deliveryOverview,
  deliveryStages,
} from "@/lib/how-we-work-content";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Learn how Sachram Technologies approaches discovery, planning, design, development, launch, communication, and post-launch support for digital projects.",
  alternates: {
    canonical: "/how-we-work",
  },
  openGraph: {
    title: "How We Work | Sachram Technologies",
    description:
      "A clear overview of how Sachram Technologies approaches project discovery, planning, delivery, communication, launch, and support.",
    url: "https://sachramtech.vercel.app/how-we-work",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Sachram Technologies",
    description:
      "See how Sachram Technologies approaches project delivery, communication, and collaboration from discovery through launch and support.",
    images: ["/banner.png"],
  },
};

export default function HowWeWorkPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            How we work
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl tracking-tight text-slate-950 sm:text-6xl">
            A delivery approach built to keep digital projects clear, practical,
            and well executed.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            This page explains how Sachram Technologies approaches discovery,
            planning, design, development, review, launch, and follow-on
            support. The aim is not extra ceremony. It is to make the work
            easier to understand and easier to deliver well.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Discuss your project
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

      <section className="border-b border-slate-200 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Engagement overview
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950">
              We move from understanding the problem to delivering something
              clients can use with confidence.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            {deliveryOverview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              For visitors exploring{" "}
              <Link
                href="/services"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                our services
              </Link>
              , this page is intended to show how the work is typically
              structured in practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Delivery stages
            </p>
            <h2 className="font-display mt-5 max-w-[15ch] text-4xl tracking-tight text-slate-950 sm:text-5xl">
              The stages we use to keep projects structured from discovery to
              launch and iteration.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {deliveryStages.map((stage) => (
              <article
                key={stage.step}
                className="rounded-[1.9rem] border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1.15rem] bg-slate-950 text-sm font-semibold text-white">
                    {stage.step}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {stage.heading}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              What clients can expect
            </p>
            <h2 className="font-display mt-5 max-w-[13ch] text-4xl tracking-tight text-slate-950">
              Communication and execution that stay grounded in real delivery.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              The process only matters if it helps the work move forward. We
              try to keep communication practical, decisions visible, and
              progress easy to review.
            </p>
          </div>

          <div className="grid gap-4">
            {clientExpectations.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-9 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              Working model
            </p>
            <h2 className="font-display mt-5 max-w-[13ch] text-4xl tracking-tight text-white">
              Flexible enough to fit the engagement, structured enough to keep
              it moving.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              We can work directly with founders, collaborate with existing
              teams, or support companies that need a dependable outside partner
              for delivery-critical digital work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read common questions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Start the conversation
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {collaborationModels.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Best-fit engagements
            </p>
            <h2 className="font-display mt-5 max-w-[15ch] text-4xl tracking-tight text-slate-950 sm:text-5xl">
              The kinds of teams and projects that tend to benefit most from our
              approach.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {bestFitEngagements.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-base leading-8 text-slate-600">
              If you already know the type of delivery support you need, you can
              explore our{" "}
              <Link
                href="/web-development"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                web development
              </Link>
              ,{" "}
              <Link
                href="/mobile-app-development"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                mobile app development
              </Link>
              ,{" "}
              <Link
                href="/ui-ux-design"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                UI/UX design
              </Link>
              , or{" "}
              <Link
                href="/custom-software-development"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                custom software development
              </Link>{" "}
              pages for a more service-specific overview.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to talk through your project or current delivery challenge?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Share a short summary of what you need, what already exists, and
              where the work needs to go next. We can then discuss fit, scope,
              and the most practical way to move forward.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact Sachram Technologies
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
