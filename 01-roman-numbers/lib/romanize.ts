import { isRepresentableAsRomanNumber } from './isRepresentableAsRomanNumber';
import { romanizeSmoothNumbers } from './romanizeSmoothNumbers';
import { splitNumberIntoSmoothNumbers } from './utils/number/splitNumberIntoSmoothNumbers';

function romanize (arabicNumber: number): string {
  if (!isRepresentableAsRomanNumber(arabicNumber)) {
    throw new Error('Can not romanize a non-supported number.');
  }

  const smoothArabicNumbers = splitNumberIntoSmoothNumbers(arabicNumber);
  const romanNumbers = romanizeSmoothNumbers(smoothArabicNumbers);
  const romanNumber = romanNumbers.join('');

  return romanNumber;
}

export { romanize };
