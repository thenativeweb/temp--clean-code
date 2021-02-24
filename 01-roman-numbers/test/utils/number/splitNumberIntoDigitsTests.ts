import { assert } from 'assertthat';
import { splitNumberIntoDigits } from '../../../lib/utils/number/splitNumberIntoDigits';

suite('splitNumberIntoDigits', (): void => {
  test('returns the digits of the given number.', async (): Promise<void> => {
    assert.that(splitNumberIntoDigits(82517)).is.equalTo([ 8, 2, 5, 1, 7 ]);
  });

  test('returns 0 for 0.', async (): Promise<void> => {
    assert.that(splitNumberIntoDigits(0)).is.equalTo([ 0 ]);
  });

  test('throws an error for negative numbers.', async (): Promise<void> => {
    assert.that((): void => {
      splitNumberIntoDigits(-23);
    }).is.throwing('Failed to split digits for a negative number.');
  });
});
