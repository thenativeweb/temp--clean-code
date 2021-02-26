import { OcrStrip } from './interfaces/OcrStrip';

const separateAccountDigits = function (accountNumber: OcrStrip): OcrStrip [] {
  const result: OcrStrip [] = [];

  for (let index = 0; index < accountNumber.top.length / 3; index++) {
    result.push({
      top: accountNumber.top.slice(index * 3, (index * 3) + 3),
      center: accountNumber.center.slice(index * 3, (index * 3) + 3),
      bottom: accountNumber.bottom.slice(index * 3, (index * 3) + 3)
    });
  }

  return result;
};

export { separateAccountDigits };
