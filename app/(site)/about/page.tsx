import type { Metadata } from "next";
import Link from "next/link";
import { company, principles, processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Sachram Technologies approaches product engineering, design, and delivery for growing businesses.",
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
            A company built around thoughtful design, dependable delivery, and
            digital work that feels professionally finished.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We support businesses that want stronger digital products, clearer
            brand presentation, and more reliable software execution. Our work
            lives where product thinking, design clarity, and practical
            development meet.
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
              Small teams can deliver serious quality when they are clear about
              process, selective about execution, and committed to details that
              shape trust. For us, that means communication that stays practical,
              software that remains maintainable, and design that helps the
              business look credible from the outside.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We are especially useful when a company wants more than a quick
              build. Our role is to help make the end result feel coherent,
              polished, and ready for real use.
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
            How we stay grounded in delivery
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.slice(0, 3).map((step) => (
              <article
                key={step.step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
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

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white">
            <h3 className="text-3xl font-semibold tracking-tight">
              Need a digital partner that works with structure and clarity?
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Reach out if you want to discuss a website, software build, design
              refresh, or product direction.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact Us
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
