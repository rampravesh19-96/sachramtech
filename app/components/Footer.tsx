import Link from "next/link";
import { company, primaryNav, serviceCards } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                Sachram Technologies
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Design-led digital delivery for businesses that want to look and
                operate more professionally online.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Discuss your project
            </Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Company
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              We help businesses launch better digital products, strengthen their
              web presence, and improve the quality of the systems they rely on.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {serviceCards.slice(0, 4).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>{company.address}</p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition hover:text-white"
                >
                  {company.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-white"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={company.linkedin} className="transition hover:text-white">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sachram Technologies. All rights reserved.</p>
          <p>Built to support modern product, software, and design delivery.</p>
        </div>
      </div>
    </footer>
  );
}
