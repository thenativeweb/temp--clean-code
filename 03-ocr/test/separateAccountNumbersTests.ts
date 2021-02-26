import { assert } from 'assertthat';
import { separateAccountNumbers } from '../lib/separateAccountNumbers';

suite('separateNumbers', (): void => {
  test('returns a single OcrStrip.', async (): Promise<void> => {
    const accountNumbers = '    _  _     _\n  | _| _||_||_\n  ||_  _|  | _|';

    assert.that(separateAccountNumbers(accountNumbers)[0].bottom).is.equalTo('  ||_  _|  | _|');
  });
  test('returns multiply OcrStrips.', async (): Promise<void> => {
    const accountNumbers = '    _  _     _\n  | _| _||_||_\n  ||_  _|  | _|\n\n    _  _     _\n  | _| _||_||_\n  ||_  _|  | _|';

    assert.that(separateAccountNumbers(accountNumbers).length).is.equalTo(2);
  });
});
