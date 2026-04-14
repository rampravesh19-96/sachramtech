import type { Metadata } from "next";
import { company, contactCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sachram Technologies to discuss websites, product design, software development, or custom digital work.",
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
            Let&apos;s discuss what you are building and where you need help.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you need a website, product support, a design refresh, or a
            custom software solution, reach out with a short overview and we can
            take the conversation from there.
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
              Share a brief outline of your project, product, or current challenge.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                A short message with your business context, delivery goals, and
                what you need help with is enough to get the discussion started.
              </p>
              <p>
                If you are still shaping the scope, that is fine too. We can help
                clarify what the right next step should be.
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
