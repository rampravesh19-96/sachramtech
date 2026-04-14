"use client";

import { useEffect, useRef, useState } from "react";
import { OfferLetterDocument } from "@/components/offer-letter/OfferLetterDocument";
import { formatOfferLetterJson, sanitizeOfferLetter } from "@/lib/offerLetters";
import type { OfferLetter, RawOfferLetter } from "@/types/offer-letter";

type OfferLetterEditorProps = {
  defaultLetter: OfferLetter;
  defaultJsonText: string;
};

type EditorStatus = "default" | "edited" | "invalid";

const PARSE_DEBOUNCE_MS = 350;

export function OfferLetterEditor({
  defaultLetter,
  defaultJsonText,
}: OfferLetterEditorProps) {
  const [rawJson, setRawJson] = useState(defaultJsonText);
  const [lastValidLetter, setLastValidLetter] = useState(defaultLetter);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      try {
        const parsed = JSON.parse(rawJson) as RawOfferLetter;
        const sanitized = sanitizeOfferLetter(parsed);

        if (!sanitized) {
          setErrorMessage(
            "Required fields are missing. Preview is using the last valid data.",
          );
          return;
        }

        setLastValidLetter(sanitized);
        setErrorMessage(null);
      } catch {
        setErrorMessage("JSON is invalid. Preview is using the last valid data.");
      }
    }, PARSE_DEBOUNCE_MS);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [rawJson]);

  const handleReset = () => {
    setRawJson(defaultJsonText);
    setLastValidLetter(defaultLetter);
    setErrorMessage(null);
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(rawJson) as RawOfferLetter;
      const sanitized = sanitizeOfferLetter(parsed);

      if (!sanitized) {
        setErrorMessage(
          "Cannot format because required fields are missing. Preview is using the last valid data.",
        );
        return;
      }

      setRawJson(formatOfferLetterJson(parsed));
      setLastValidLetter(sanitized);
      setErrorMessage(null);
    } catch {
      setErrorMessage("Cannot format invalid JSON. Preview is using the last valid data.");
    }
  };

  const isUsingDefaultData = rawJson === defaultJsonText && !errorMessage;
  const editorStatus: EditorStatus = errorMessage
    ? "invalid"
    : isUsingDefaultData
      ? "default"
      : "edited";

  const statusCopy =
    editorStatus === "default"
      ? "Using default data"
      : editorStatus === "edited"
        ? "Using edited data"
        : "JSON invalid — preview using last valid data";

  const statusClassName =
    editorStatus === "default"
      ? "border-emerald-100 bg-emerald-50 text-emerald-700"
      : editorStatus === "edited"
        ? "border-blue-100 bg-blue-50 text-blue-900"
        : "border-amber-200 bg-amber-50 text-amber-800";

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 md:px-6 md:py-10">
      <div className="mx-auto max-w-[1520px]">
        <div className="screen-only mb-6 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-900">
              Offer letter generator
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Live JSON editor + printable offer letter
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Edit the JSON, validate it locally, and print the same live preview.
              If the JSON becomes invalid, the page keeps rendering the last valid
              offer letter so printing remains safe.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${statusClassName}`}
            >
              {statusCopy}
            </span>
            <button
              type="button"
              onClick={handleFormat}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Format JSON
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Reset to default
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(360px,440px)_1fr]">
          <section className="screen-only rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">JSON editor</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Edit the default offer-letter object below. The preview updates
                  from the last valid JSON.
                </p>
              </div>
            </div>

            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-900">
              Best PDF result: Chrome/Edge, A4, headers and footers off
            </p>

            <textarea
              value={rawJson}
              onChange={(event) => setRawJson(event.target.value)}
              spellCheck={false}
              className="min-h-[720px] w-full resize-y rounded-[1.5rem] border border-slate-300 bg-slate-950 p-4 font-mono text-[13px] leading-6 text-slate-100 outline-none ring-0 transition focus:border-blue-400"
              aria-label="Offer letter JSON editor"
            />

            <div className="mt-4 min-h-11">
              {errorMessage ? (
                <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  {errorMessage}
                </p>
              ) : (
                <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Preview and print currently use the JSON shown here.
                </p>
              )}
            </div>
          </section>

          <section>
            <div className="screen-only mb-5 rounded-[2rem] border border-white/70 bg-white/60 p-3 shadow-[0_34px_84px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-5">
              <div className="rounded-[1.5rem] bg-[linear-gradient(140deg,rgba(15,23,42,0.05),rgba(37,99,235,0.08),rgba(255,255,255,0.88))] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-900">
                      Live preview
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      Printable offer letter
                    </h2>
                  </div>
                  <span
                    className={`rounded-full border px-4 py-2 text-xs font-semibold ${statusClassName}`}
                  >
                    {statusCopy}
                  </span>
                </div>
              </div>
            </div>

            <OfferLetterDocument letter={lastValidLetter} />
          </section>
        </div>
      </div>
    </main>
  );
}
