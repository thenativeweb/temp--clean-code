import { arabicNumberToRomanDigit } from './arabicNumberToRomanDigit';

function canBeExpressedAsSingleRomanDigit (arabicNumber: number): boolean {
  return Boolean(arabicNumberToRomanDigit[arabicNumber]);
}

export { canBeExpressedAsSingleRomanDigit };
