import { OcrStrip } from './interfaces/OcrStrip';

const numbersAsOcrStrips: string[] = [
  ' _ ' +
  '| |' +
  '|_|',

  '   ' +
  '  |' +
  '  |',

  ' _ ' +
  ' _|' +
  '|_ ',

  ' _ ' +
  ' _|' +
  ' _|',

  '   ' +
  '|_|' +
  '  |',

  ' _ ' +
  '|_ ' +
  ' _|',

  ' _ ' +
  '|_ ' +
  '|_|',

  ' _ ' +
  '  |' +
  '  |',

  ' _ ' +
  '|_|' +
  '|_|',

  ' _ ' +
  '|_|' +
  ' _|'
];

const getNumberFromOcrStripDigit = function (ocrStripDigit: OcrStrip): number {
  const result: number = numbersAsOcrStrips.indexOf(`${ocrStripDigit.top}${ocrStripDigit.center}${ocrStripDigit.bottom}`);

  if (result === -1) {
    throw new Error('Invalid parameter.');
  }

  return result;
};

export { getNumberFromOcrStripDigit };
