"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/logo.svg";
import { primaryNav } from "@/lib/site-content";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const navigateToSection = (href: string, sectionId?: string) => {
    setIsMenuOpen(false);

    if (!sectionId) {
      router.push(href);
      return;
    }

    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(`/#${sectionId}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[88px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <Image
                src={logo}
                alt="Sachram Technologies"
                width={34}
                height={34}
                className="h-auto w-auto"
                priority
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.04em] text-slate-950">
                Sachram Technologies
              </p>
              <p className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                Product | Design | Engineering
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {primaryNav.map((item) =>
              "sectionId" in item ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigateToSection(item.href, item.sectionId)}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:bg-slate-800"
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {primaryNav.map((item) =>
                "sectionId" in item ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => navigateToSection(item.href, item.sectionId)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
