import { readTextFile } from './readTextFile';
import { separateAccountNumbers } from './separateAccountNumbers';

const getOcrNumbers = function (fileName: string): number[] {
  const accountNumbers = readTextFile(fileName);
  const accountNumberStrips = separateAccountNumbers(accountNumbers);
}

export { getOcrNumbers };
