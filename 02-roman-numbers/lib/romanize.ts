import { mapArabicDigitsToRomanDigits } from './mapArabicDigitsToRomanDigits';
import { splitArabicNumberIntoDigits } from './splitArabicNumberIntoDigits';

const romanize = function (arabicNumber: number): string {
  if (arabicNumber <= 0) {
    throw new Error('Can not romanize a non-supported number.');
  }

  const arabicDigits = splitArabicNumberIntoDigits(arabicNumber);
  const romanDigits = mapArabicDigitsToRomanDigits(arabicDigits);
  const romanNumber = romanDigits.join('');

  return romanNumber;
};

export { romanize };
