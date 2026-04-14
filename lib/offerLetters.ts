import defaultOfferLetterSource from "@/data/offer-letter.json";
import type { OfferLetter, RawOfferLetter } from "@/types/offer-letter";

const REQUIRED_FIELDS: Array<keyof Pick<
  OfferLetter,
  | "companyName"
  | "issueDate"
  | "candidateName"
  | "roleTitle"
  | "department"
  | "internshipType"
  | "startDate"
  | "endDate"
  | "stipend"
>> = [
  "companyName",
  "issueDate",
  "candidateName",
  "roleTitle",
  "department",
  "internshipType",
  "startDate",
  "endDate",
  "stipend",
];

function normalizeText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").trim();
}

function normalizeMultilineText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function normalizeTerms(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((term) => normalizeText(term))
    .filter(Boolean)
    .slice(0, 4);
}

export function sanitizeOfferLetter(raw: RawOfferLetter): OfferLetter | null {
  const sanitized: OfferLetter = {
    companyName: normalizeText(raw.companyName),
    companyTagline: normalizeText(raw.companyTagline) || undefined,
    companyAddress: normalizeMultilineText(raw.companyAddress) || undefined,
    companyEmail: normalizeText(raw.companyEmail) || undefined,
    companyPhone: normalizeText(raw.companyPhone) || undefined,
    companyWebsite: normalizeText(raw.companyWebsite) || undefined,
    logoPath: normalizeText(raw.logoPath) || undefined,
    issueDate: normalizeText(raw.issueDate),
    candidateName: normalizeText(raw.candidateName),
    candidateAddress: normalizeMultilineText(raw.candidateAddress) || undefined,
    candidateEmail: normalizeText(raw.candidateEmail) || undefined,
    candidatePhone: normalizeText(raw.candidatePhone) || undefined,
    roleTitle: normalizeText(raw.roleTitle),
    department: normalizeText(raw.department),
    internshipType: normalizeText(raw.internshipType),
    startDate: normalizeText(raw.startDate),
    endDate: normalizeText(raw.endDate),
    stipend: normalizeText(raw.stipend),
    managerName: normalizeText(raw.managerName) || undefined,
    managerTitle: normalizeText(raw.managerTitle) || undefined,
    workLocation: normalizeText(raw.workLocation) || undefined,
    workMode: normalizeText(raw.workMode) || undefined,
    workingHours: normalizeText(raw.workingHours) || undefined,
    acceptanceDeadline: normalizeText(raw.acceptanceDeadline) || undefined,
    additionalTerms: normalizeTerms(raw.additionalTerms),
    signatureName: normalizeText(raw.signatureName) || undefined,
    signatureTitle: normalizeText(raw.signatureTitle) || undefined,
  };

  const missingRequiredFields = REQUIRED_FIELDS.filter((field) => !sanitized[field]);

  if (missingRequiredFields.length > 0) {
    return null;
  }

  if (sanitized.additionalTerms.length === 0) {
    sanitized.additionalTerms = [
      "You are expected to follow company policies, maintain confidentiality, and uphold professional conduct throughout the internship term.",
    ];
  }

  return sanitized;
}

export function getDefaultOfferLetter(): OfferLetter {
  const sanitized = sanitizeOfferLetter(defaultOfferLetterSource as RawOfferLetter);

  if (!sanitized) {
    throw new Error("Default offer letter JSON is missing required fields.");
  }

  return sanitized;
}

export function formatOfferLetterJson(letter: RawOfferLetter) {
  return `${JSON.stringify(letter, null, 2)}\n`;
}
