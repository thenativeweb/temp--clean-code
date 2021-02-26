import { assert } from 'assertthat';
import { OcrStrip } from 'lib/interfaces/OcrStrip';
import { separateAccountDigits } from '../lib/separateAccountDigits';

suite('separateAccountDigits', (): void => {
  test('returns one digit.', async (): Promise<void> => {
    const accountNumberDigit: OcrStrip = {
      top: '   ',
      center: '  |',
      bottom: '  |'
    };

    assert.that(separateAccountDigits(accountNumberDigit)[0].top.length).is.equalTo(3);
  });
  test('returns multiple digits.', async (): Promise<void> => {
    const accountNumberDigit: OcrStrip = {
      top: '      ',
      center: '  |  |',
      bottom: '  |  |'
    };

    assert.that(separateAccountDigits(accountNumberDigit)[0].top.length).is.equalTo(3);
    assert.that(separateAccountDigits(accountNumberDigit)[1].center.length).is.equalTo(3);
    assert.that(separateAccountDigits(accountNumberDigit).length).is.equalTo(2);
  });
});
