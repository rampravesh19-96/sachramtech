import type { Metadata } from "next";
import Link from "next/link";
import { principles, processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About the Company",
  description:
    "Learn how Sachram Technologies approaches software development, product design, and digital delivery for growing businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sachram Technologies",
    description:
      "Learn how Sachram Technologies approaches software development, UI/UX design, and product delivery for growing businesses.",
    url: "https://sachramtech.vercel.app/about",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sachram Technologies",
    description:
      "How Sachram Technologies approaches software development, UI/UX design, and digital delivery.",
    images: ["/banner.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            About Sachram Technologies
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl tracking-tight text-slate-950 sm:text-6xl">
            A small company with a serious point of view on digital quality.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Sachram Technologies exists to help businesses present themselves
            better online, deliver digital work more thoughtfully, and build
            products and systems that feel more complete in real use.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              What we believe
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Strong digital work is rarely the result of speed alone. It comes
              from making better choices about structure, quality, and the way
              the finished product will be experienced by customers, teams, and
              stakeholders.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We are especially useful when a company wants more than a quick
              build. Our role is to help make the work feel coherent, credible,
              and ready to support the business properly.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Principles
            </p>
            <div className="mt-6 space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-tight text-slate-950">
            Where we tend to be most useful
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.slice(0, 3).map((step, index) => (
              <article
                key={step.step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {index === 0
                    ? "When direction needs shaping"
                    : index === 1
                      ? "When the work needs structure"
                      : "When presentation and usability matter"}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {index === 0
                    ? "Useful for teams that know something important needs to be built or improved but want help framing the right next step."
                    : index === 1
                      ? "Useful when a business needs a steadier path from idea to delivery, with less confusion around priorities and execution."
                      : "Useful when the end result needs to feel more polished, easier to use, and more credible to the people relying on it."}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white">
            <h3 className="text-3xl font-semibold tracking-tight">
              Want to understand whether we are the right kind of partner?
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Explore the services, read the process, or reach out directly if
              you want to talk through a website, product, or software need.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Start a conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore services
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See the delivery approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
