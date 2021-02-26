import { assert } from 'assertthat';
import { getAccountNumberFromOcrStrip } from '../lib/getAccountNumberFromOcrStrip';

suite('getAccountNumberFromOcrStrip', (): void => {
  test('returns a number that represents the input ocr strip.', async (): Promise<void> => {
    const inputOcrStrip = {
      top: '    _ ',
      center: '  ||_|',
      bottom: '  ||_|'
    };

    assert.that(getAccountNumberFromOcrStrip(inputOcrStrip)).is.equalTo(18);
  });
});
