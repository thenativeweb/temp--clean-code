import { chunk } from 'lodash';
import { OcrStrip } from './interfaces/OcrStrip';

const separateAccountNumbers = function (accountNumbers: string): OcrStrip[] {
  const lines: string[] = accountNumbers.split('\n');
  const accountNumberStrips: OcrStrip[] = chunk(lines, 4).map((linesPerStrip): OcrStrip => {
    const accountNumberStrip: OcrStrip = {
      top: linesPerStrip[0],
      center: linesPerStrip[1],
      bottom: linesPerStrip[2]
    };

    return accountNumberStrip;
  });

  return accountNumberStrips;
};

export { separateAccountNumbers };
