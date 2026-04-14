import type { Metadata } from "next";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for the Sachram Technologies website and contact channels.",
};

export default function Policy() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Privacy Policy
          </p>
          <h1 className="font-display mt-5 text-5xl tracking-tight text-slate-950">
            Privacy and website use
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This page outlines how Sachram Technologies handles basic information
            shared through this website and its contact channels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We may collect personal information such as name, email address,
              phone number, and project details when you contact us or discuss
              services with our team.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-slate-950">
              2. How We Use Information
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Information shared with us is used to respond to enquiries, assess
              project requirements, communicate updates, and improve the way we
              deliver our services.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-slate-950">
              3. Cookies and Analytics
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The website may use standard browser technologies such as cookies
              to support performance and usability. You can manage cookie
              preferences in your browser settings.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-slate-950">
              4. Contact
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              If you have questions about this policy, you can contact us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                {company.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
