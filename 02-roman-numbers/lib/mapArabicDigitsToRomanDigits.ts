import { mapArabicDigitToRomanDigit } from './mapArabicDigitToRomanDigit';

function mapArabicDigitsToRomanDigits(arabicDigits: number[]): string[] {
  // Reverse the arabic digits, because we want to iterate over the digits from
  // right to left instead of left to right. Of course, we need to revert the
  // effect afterwards again.
  const romanDigits = arabicDigits.
    reverse().
    map((arabicDigit, significance): string => mapArabicDigitToRomanDigit(arabicDigit, significance)).
    reverse();

  return romanDigits;
}

export { mapArabicDigitsToRomanDigits };
