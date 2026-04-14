import type { Metadata } from "next";
import Link from "next/link";
import { company, processSteps, serviceCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sachram Technologies services across web development, mobile apps, UI/UX design, custom software, and digital product delivery.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Services
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl tracking-tight text-slate-950 sm:text-6xl">
            Digital services designed to help growing companies present better,
            operate better, and ship with confidence.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We work across design and delivery, helping businesses strengthen
            their public-facing presence and the digital systems behind it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Service
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-tight text-slate-950">
            Delivery process
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  {step.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              Looking for the right combination of design, development, and
              delivery support?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Tell us where your website, product, or internal software needs to
              improve and we can help shape the next step.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Talk to us
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
