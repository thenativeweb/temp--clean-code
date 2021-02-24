import { arabicNumberToRomanDigit } from './arabicNumberToRomanDigit';
import { canBeExpressedAsSingleRomanDigit } from './canBeExpressedAsSingleRomanDigit';
import { filterAndSelect } from './utils/array/filterAndSelect';
import { getFirstDigit } from './utils/number/getFirstDigit';
import { isBase10 } from './isBase10';
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

      const maxArabicNumber = filterAndSelect(
        arabicNumbers,
        (number): boolean => number < arabicNumber,
        'Failed to find max value.',
        (filteredNumbers): number => Math.max(...filteredNumbers)
      );
      const maxRomanDigit = arabicNumberToRomanDigit[maxArabicNumber];

      if (isBase10(maxArabicNumber)) {
        // TODO: Super ugly code, definitely needs to be cleaned up …
        if (getFirstDigit(arabicNumber) === 4) {
          const maxArabicNumber2 = filterAndSelect(
            arabicNumbers,
            (number): boolean => number > arabicNumber,
            'Failed to find min value.',
            (filteredNumbers): number => Math.min(...filteredNumbers)
          );
          const maxRomanDigit2 = arabicNumberToRomanDigit[maxArabicNumber2];

          return `${maxRomanDigit}${maxRomanDigit2}`;
        }

        return maxRomanDigit.repeat(getFirstDigit(arabicNumber));
      }

      const remainingArabicNumber = arabicNumber - maxArabicNumber;
      const remainingRomanNumber = romanizeSmoothNumbers([ remainingArabicNumber ]);

      const romanNumber = `${maxRomanDigit}${remainingRomanNumber}`;

      // TODO: Case for 9 is missing.

      return romanNumber;
    });

  return romanNumbers;
}

export { romanizeSmoothNumbers };
