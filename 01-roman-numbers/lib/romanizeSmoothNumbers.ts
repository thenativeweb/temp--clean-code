import { arabicNumberToRomanDigit } from './arabicNumberToRomanDigit';
import { canBeExpressedAsSingleRomanDigit } from './canBeExpressedAsSingleRomanDigit';
import { getFirstDigit } from './utils/number/getFirstDigit';
import { getMaxValueFromArrayLessThan } from './utils/array/getMaxValueFromArrayLessThan';
import { isRepresentableAsRomanNumber } from './isRepresentableAsRomanNumber';

const arabicNumbers = Object.keys(arabicNumberToRomanDigit) as unknown as number[];

function romanizeSmoothNumbers (smoothArabicNumbers: number[]): string[] {
  const relevantArabicNumbers = smoothArabicNumbers.
    filter((arabicNumber): boolean => isRepresentableAsRomanNumber(arabicNumber));

  const romanNumbers = relevantArabicNumbers.
    map((arabicNumber): string => {
      if (canBeExpressedAsSingleRomanDigit(arabicNumber)) {
        return arabicNumberToRomanDigit[arabicNumber];
      }

      const maxArabicNumber = getMaxValueFromArrayLessThan(arabicNumbers, arabicNumber);
      const maxRomanDigit = arabicNumberToRomanDigit[maxArabicNumber];

      return maxRomanDigit.repeat(getFirstDigit(arabicNumber));
    });

  return romanNumbers;
}

export { romanizeSmoothNumbers };
