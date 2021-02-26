import { getAccountNumberFromOcrStrip } from './getAccountNumberFromOcrStrip';
import { OcrStrip } from './interfaces/OcrStrip';
import { readTextFile } from './readTextFile';
import { separateAccountNumbers } from './separateAccountNumbers';

const getOcrNumbers = function (fileName: string): number[] {
  const accountNumbers = readTextFile(fileName);
  const accountNumberStrips = separateAccountNumbers(accountNumbers);

  const result: number[] = accountNumberStrips.map((accountNumberStrip: OcrStrip): number =>
    getAccountNumberFromOcrStrip(accountNumberStrip));

  return result;
};

export { getOcrNumbers };
