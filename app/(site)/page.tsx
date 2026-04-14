import Link from "next/link";
import {
  capabilityGroups,
  company,
  differentiators,
  heroPillars,
  principles,
  processSteps,
  serviceCards,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section
        id="hero"
        className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.07),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_46%,#eef2ff_100%)]"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-22 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8 lg:py-30">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700">
              Product engineering | Design | Delivery
            </p>
            <h1 className="font-display mt-6 max-w-[12ch] text-5xl leading-[0.94] tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
              Digital products and company websites built to earn trust fast.
            </h1>
            <p className="mt-7 max-w-[40rem] text-lg leading-8 text-slate-600">
              Sachram Technologies helps businesses design, build, and improve
              digital experiences with a strong focus on product clarity,
              engineering quality, and professional presentation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.16)] transition hover:bg-slate-800"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Product-minded execution
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Design and development shaped around real business needs.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Clear communication
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Transparent project flow, practical recommendations, and steady updates.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Long-term maintainability
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Solutions designed to stay usable and supportable after launch.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pt-6">
            <div className="rounded-[2.25rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_44px_120px_rgba(15,23,42,0.24)]">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Sachram Technologies
                  </p>
                  <p className="mt-3 max-w-sm text-[1.75rem] font-semibold leading-tight text-white">
                    Built for businesses that need a reliable digital partner.
                  </p>
                </div>
                <div className="hidden h-14 w-14 rounded-[1.35rem] border border-white/10 bg-white/5 lg:block" />
              </div>

              <div className="mt-7 space-y-4">
                {heroPillars.map((pillar, index) => (
                  <div
                    key={pillar}
                    className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-sky-200">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-200">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-8 -left-5 hidden rounded-[1.65rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.10)] lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Best fit
              </p>
              <p className="mt-3 max-w-[16rem] text-sm leading-6 text-slate-700">
                Teams that want sharper presentation, cleaner execution, and a
                partner who communicates with clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Trusted introduction
            </p>
            <h2 className="font-display mt-5 max-w-[13ch] text-4xl tracking-tight text-slate-950">
              A focused digital partner for companies that care how their work feels.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-600 lg:grid-cols-2">
            <p>
              {company.name} works at the intersection of product design,
              software execution, and business presentation. We help companies
              build the digital surfaces that shape how customers, teams, and
              partners experience the business.
            </p>
            <p>
              Whether the need is a sharper company website, a product interface,
              a custom operational system, or a modernized app experience, our
              focus is the same: thoughtful delivery, strong fundamentals, and a
              result that feels professional from day one.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              Services
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-white sm:text-5xl">
              Practical digital services built with more rigor than a typical brochure site.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              We support product, software, and design needs that are important
              enough to do properly and visible enough to reflect on the company.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Service
                  </p>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-sky-200 transition group-hover:bg-sky-400/10">
                    ST
                  </span>
                </div>
                <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
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

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Why choose us
            </p>
            <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-slate-950 sm:text-5xl">
              A working style built around clarity, responsiveness, and dependable execution.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
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

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              How we work
            </p>
            <h2 className="font-display mt-5 max-w-[15ch] text-4xl tracking-tight text-slate-950 sm:text-5xl">
              A delivery process designed to reduce confusion and improve output quality.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.9rem] border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1.15rem] bg-slate-950 text-sm font-semibold text-white">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Capabilities
            </p>
            <h2 className="font-display mt-5 max-w-[15ch] text-4xl tracking-tight text-slate-950 sm:text-5xl">
              The kind of work we are built to support.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              About Sachram Technologies
            </p>
            <h2 className="font-display mt-5 max-w-[13ch] text-4xl tracking-tight text-white sm:text-5xl">
              A small company with a serious approach to digital quality.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We are building Sachram Technologies around a simple idea: growing
              companies deserve digital experiences that feel considered,
              trustworthy, and professionally executed.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              We work best with teams that want thoughtful execution, open
              communication, and a delivery partner that cares about how the final
              result will actually be used after launch.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Operating principles
            </p>
            <div className="mt-6 space-y-5">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.6rem] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_46%,#0f172a_100%)] px-8 py-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.22)] lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                  Start the conversation
                </p>
                <h2 className="font-display mt-5 max-w-[14ch] text-4xl tracking-tight text-white sm:text-5xl">
                  If you need a sharper digital presence or a dependable delivery partner, let&apos;s talk.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Tell us what you are building, what needs improvement, or where
                  your current product or website is falling short. We can help
                  you shape a practical next step.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-5 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    {company.email}
                  </p>
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-5 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Phone
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    {company.phone}
                  </p>
                </a>
                <a
                  href={company.whatsapp}
                  className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-5 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    WhatsApp
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    Quick discussion
                  </p>
                </a>
                <Link
                  href="/contact"
                  className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-5 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Contact page
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    Full contact details
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
