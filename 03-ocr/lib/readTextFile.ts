import fs from 'fs';

const readTextFile = function (fileName: string): string {
  let accountNumbers = '';

  try {
    // eslint-disable-next-line no-sync
    accountNumbers = fs.readFileSync(fileName, { encoding: 'utf8' });
  } catch {
    throw new Error('File not found.');
  }

  return accountNumbers;
};

export { readTextFile };
