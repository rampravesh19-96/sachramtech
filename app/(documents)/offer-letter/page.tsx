import { OfferLetterEditor } from "@/components/offer-letter/OfferLetterEditor";
import { formatOfferLetterJson, getDefaultOfferLetter } from "@/lib/offerLetters";

export default function OfferLetterPage() {
  const defaultLetter = getDefaultOfferLetter();
  const defaultJsonText = formatOfferLetterJson(defaultLetter);

  return (
    <OfferLetterEditor
      defaultLetter={defaultLetter}
      defaultJsonText={defaultJsonText}
    />
  );
}
