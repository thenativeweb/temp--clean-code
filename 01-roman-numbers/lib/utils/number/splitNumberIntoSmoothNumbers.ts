import { splitNumberIntoDigits } from './splitNumberIntoDigits';

function splitNumberIntoSmoothNumbers (number: number): number[] {
  const digits = splitNumberIntoDigits(number);
  const smoothNumbers = digits.map((digit, i): number => digit * 10 ** (digits.length - i - 1));

  return smoothNumbers;
}

export { splitNumberIntoSmoothNumbers };
