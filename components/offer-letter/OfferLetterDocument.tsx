"use client";

import Image from "next/image";
import type { OfferLetter } from "@/types/offer-letter";

type OfferLetterDocumentProps = {
  letter: OfferLetter;
};

function compactList(values: Array<string | undefined>) {
  return values.filter(Boolean).join(" | ");
}

function buildDetailItems(letter: OfferLetter) {
  return [
    { label: "Designation", value: letter.roleTitle },
    { label: "Department", value: letter.department },
    { label: "Internship Type", value: letter.internshipType },
    { label: "Duration", value: `${letter.startDate} to ${letter.endDate}` },
    {
      label: "Work Mode",
      value:
        compactList([letter.workMode, letter.workLocation]) ||
        "As assigned by the company",
    },
    {
      label: "Working Hours",
      value: letter.workingHours || "As per team schedule and company policy",
    },
    {
      label: "Reporting To",
      value:
        compactList([letter.managerName, letter.managerTitle]) ||
        "Assigned reporting manager",
    },
    { label: "Monthly Stipend", value: letter.stipend },
  ];
}

function buildCandidateLines(letter: OfferLetter) {
  return [
    letter.candidateAddress,
    compactList([letter.candidateEmail, letter.candidatePhone]) || undefined,
  ].filter(Boolean);
}

export function OfferLetterDocument({ letter }: OfferLetterDocumentProps) {
  const detailItems = buildDetailItems(letter);
  const candidateLines = buildCandidateLines(letter);
  const hasLogo = Boolean(letter.logoPath);
  const acceptanceDeadline =
    letter.acceptanceDeadline || "within 3 business days of receipt";
  const signatoryName = letter.signatureName || "Authorized Signatory";
  const signatoryTitle = letter.signatureTitle || "For Sachram Technologies";

  return (
    <div className="offer-letter-shell relative mx-auto mb-5 max-w-[1020px]">
      <div className="screen-only absolute inset-0 rounded-[2rem] border border-white/70 bg-white/60 p-3 shadow-[0_34px_84px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-5">
        <div className="h-full rounded-[1.5rem] bg-[linear-gradient(140deg,rgba(15,23,42,0.05),rgba(37,99,235,0.08),rgba(255,255,255,0.88))]" />
      </div>

      <article className="offer-letter-page a4-page print-root relative z-10 mx-auto flex w-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white text-[12px] leading-[1.4] text-slate-800 print:rounded-none">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-[linear-gradient(90deg,#0f172a_0%,#1e3a8a_42%,#2563eb_100%)]" />
        <div className="absolute right-0 top-0 h-[112px] w-[180px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.36),rgba(255,255,255,0))]" />

        <div className="relative flex min-h-full flex-1 flex-col px-[24px] pb-[18px] pt-[18px] md:px-[28px]">
          <header className="offer-letter-avoid-break relative mb-3.5 grid grid-cols-[1.18fr_0.82fr] gap-5 border-b border-slate-200 pb-3">
            <div className="flex min-w-0 items-start gap-3 text-white">
              <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/12 p-2 shadow-sm">
                {hasLogo ? (
                  <Image
                    src={letter.logoPath!}
                    alt={`${letter.companyName} logo`}
                    width={40}
                    height={40}
                    className="h-auto w-auto object-contain"
                    priority
                  />
                ) : (
                  <span className="text-lg font-bold tracking-[0.08em] text-white">
                    {letter.companyName.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="min-w-0 pt-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-blue-100/90">
                  Internship Offer Letter
                </p>
                <h2 className="mt-1 break-words text-[19px] font-semibold leading-[1.08] tracking-[0.01em]">
                  {letter.companyName}
                </h2>
                {letter.companyTagline ? (
                  <p className="mt-1 break-words text-[9.5px] uppercase tracking-[0.18em] text-blue-100/90">
                    {letter.companyTagline}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="relative z-10 justify-self-end text-right text-[10px] leading-[1.45] text-slate-600">
              {letter.companyAddress ? (
                <p className="whitespace-pre-line break-words">
                  {letter.companyAddress}
                </p>
              ) : null}
              {letter.companyEmail ? <p>{letter.companyEmail}</p> : null}
              {letter.companyPhone ? <p>{letter.companyPhone}</p> : null}
              {letter.companyWebsite ? <p>{letter.companyWebsite}</p> : null}
            </div>
          </header>

          <section className="offer-letter-avoid-break mb-3.5 flex items-start justify-between gap-5">
            <div className="min-w-0 max-w-[57%]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Offered To
              </p>
              <p className="mt-1.5 break-words text-[15px] font-semibold leading-[1.16] text-slate-950">
                {letter.candidateName}
              </p>
              <div className="mt-1 space-y-0.5 text-[10.75px] leading-[1.42] text-slate-600">
                {candidateLines.length > 0 ? (
                  candidateLines.map((line) => (
                    <p key={line} className="whitespace-pre-line break-words">
                      {line}
                    </p>
                  ))
                ) : (
                  <p>Candidate contact details on file with HR.</p>
                )}
              </div>
            </div>

            <div className="offer-letter-avoid-break shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Issue Date
              </p>
              <p className="mt-1 text-[11.5px] font-semibold text-slate-900">
                {letter.issueDate}
              </p>
            </div>
          </section>

          <section className="offer-letter-avoid-break mb-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-900">
              Subject
            </p>
            <h1 className="mt-1 break-words text-[21px] font-semibold leading-[1.1] tracking-tight text-slate-950">
              Offer of Internship for the Position of {letter.roleTitle}
            </h1>
          </section>

          <section className="offer-letter-copy space-y-2 text-[11.35px] leading-[1.45] text-slate-700">
            <p>Dear {letter.candidateName},</p>
            <p>
              We are pleased to offer you an internship with{" "}
              <span className="font-semibold text-slate-950">
                {letter.companyName}
              </span>{" "}
              as a{" "}
              <span className="font-semibold text-slate-950">
                {letter.roleTitle}
              </span>{" "}
              in the{" "}
              <span className="font-semibold text-slate-950">
                {letter.department}
              </span>{" "}
              team. This internship has been designed to provide practical
              exposure to live projects, structured mentorship, and a strong
              foundation in professional delivery standards.
            </p>
            <p>
              During the course of the internship, you will contribute to
              assigned work under the guidance of your reporting manager,
              collaborate with internal teams, and maintain the standards of
              confidentiality, professionalism, and accountability expected
              within our organization.
            </p>
          </section>

          <section className="offer-letter-avoid-break my-3.5 rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] px-4 py-3">
            <div className="mb-2.5 flex items-center justify-between gap-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700">
                Internship Details
              </h2>
              {letter.workMode ? (
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-blue-900">
                  {letter.workMode}
                </span>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="offer-letter-detail-card rounded-[18px] border border-white bg-white px-3 py-1.5"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-0.5 break-words text-[10.75px] font-medium leading-[1.3] text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-[1.08fr_0.92fr] gap-3.5">
            <div className="offer-letter-copy space-y-2 text-[11.1px] leading-[1.44] text-slate-700">
              <p>
                Your internship is scheduled from{" "}
                <span className="font-semibold text-slate-950">
                  {letter.startDate}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-slate-950">
                  {letter.endDate}
                </span>
                . You will follow{" "}
                <span className="font-semibold text-slate-950">
                  {letter.workingHours ||
                    "the working schedule communicated by your team"}
                </span>
                {letter.workLocation ? (
                  <>
                    {" "}
                    and will be expected to work from{" "}
                    <span className="font-semibold text-slate-950">
                      {letter.workLocation}
                    </span>
                    .
                  </>
                ) : (
                  "."
                )}
              </p>
              <p>
                You will receive a stipend of{" "}
                <span className="font-semibold text-slate-950">
                  {letter.stipend}
                </span>
                , subject to attendance, performance, and adherence to company
                policies. This internship does not constitute a promise of
                permanent employment, and any future continuation will remain at
                the sole discretion of the company.
              </p>
            </div>

            <div className="offer-letter-avoid-break rounded-[22px] border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-900">
                Key Terms
              </p>
              <ul className="mt-2 space-y-1.5 text-[10.5px] leading-[1.38] text-slate-700">
                {letter.additionalTerms.map((term) => (
                  <li key={term} className="flex gap-2">
                    <span className="mt-[4px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                    <span className="break-words">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="offer-letter-avoid-break mt-3.5 border-t border-slate-200 pt-2.5 text-[11.05px] leading-[1.43] text-slate-700">
            <p>
              If you wish to accept this offer, please confirm your acceptance by{" "}
              <span className="font-semibold text-slate-950">
                {acceptanceDeadline}
              </span>
              {letter.companyEmail ? (
                <>
                  {" "}
                  by replying to{" "}
                  <span className="font-semibold text-slate-950">
                    {letter.companyEmail}
                  </span>
                  .
                </>
              ) : (
                "."
              )}{" "}
              We look forward to welcoming you to{" "}
              <span className="font-semibold text-slate-950">
                {letter.companyName}
              </span>{" "}
              and supporting your professional development with us.
            </p>
          </section>

          <div className="min-h-3 flex-1" />

          <footer className="offer-letter-signature offer-letter-avoid-break mt-3.5 flex items-end justify-between gap-6 border-t border-slate-100 pt-3.5">
            <div className="min-w-[240px] max-w-[320px]">
              <p className="text-[11px] text-slate-700">Sincerely,</p>
              <div className="mt-5.5 w-[176px] border-b border-slate-300" />
              <p className="mt-1.5 text-[12px] font-semibold text-slate-950">
                {signatoryName}
              </p>
              <p className="text-[10.5px] text-slate-600">{signatoryTitle}</p>
            </div>

            <div className="max-w-[228px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-right text-[9.5px] leading-[1.45] text-slate-500">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-600">
                Acceptance Window
              </p>
              <p className="mt-1 text-[10.5px] font-medium text-slate-700">
                {acceptanceDeadline}
              </p>
              <p className="mt-2">
                This letter is generated from approved local offer data for
                internal HR use and PDF export.
              </p>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
