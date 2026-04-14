import Link from "next/link";
import type { ServicePageContent } from "@/lib/service-pages";
import { company } from "@/lib/site-content";

type ServicePageTemplateProps = {
  service: ServicePageContent;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#eef2ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              {service.title}
            </p>
            <h1 className="font-display mt-6 max-w-[13ch] text-5xl tracking-tight text-slate-950 sm:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              {service.heroDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.16)] transition hover:bg-slate-800"
              >
                Discuss this service
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Back to all services
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_26px_80px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Service overview
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {service.intro}
              </p>
              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Best contact
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    {company.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Suitable for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Teams that want this service handled with care, structure,
                    and a clear sense of business context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              What we offer
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950">
              A service scope designed around real business and product needs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.whatWeOffer.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.9rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
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
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              What clients can expect
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950">
              The working standards behind this service.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {service.expectations.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-slate-200 bg-white px-6 py-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Process
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950">
              How this service usually moves from first discussion to rollout.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {service.process.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Best-fit use cases
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950">
              Where this service tends to create the most value.
            </h2>
            <ul className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              {service.bestFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Why work with us
            </p>
            <div className="mt-5 space-y-5">
              {service.whyUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm"
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
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              Next step
            </p>
            <h2 className="font-display mt-5 max-w-[15ch] text-4xl tracking-tight text-white">
              If this sounds close to what you need, we can talk through the fit.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Share a short outline of the requirement, the current challenge,
              or the product direction. We can then clarify scope and the most
              sensible next step.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Related pages
            </p>
            <div className="mt-6 space-y-4">
              {service.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
