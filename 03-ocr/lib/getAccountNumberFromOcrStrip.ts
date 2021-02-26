import { getNumberFromOcrStripDigit } from './getNumberFromOcrStripDigit';
import { OcrStrip } from './interfaces/OcrStrip';
import { separateAccountDigits } from './separateAccountDigits';

const getAccountNumberFromOcrStrip = function (accountNumberStrip: OcrStrip): number {
  const accountDigits: OcrStrip[] = separateAccountDigits(accountNumberStrip);

  return Number(accountDigits.map((ocrStripDigit): number =>
    getNumberFromOcrStripDigit(ocrStripDigit)).join(''));
};

export { getAccountNumberFromOcrStrip };
