import { getFirstDigit } from './utils/number/getFirstDigit';

function isBase10 (arabicNumber: number): boolean {
  return getFirstDigit(arabicNumber) === 1;
}

export { isBase10 };
