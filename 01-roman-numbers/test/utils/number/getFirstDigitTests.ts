import { assert } from 'assertthat';
import { getFirstDigit } from '../../../lib/utils/number/getFirstDigit';

suite('getFirstDigit', (): void => {
  test('returns 2 for 23.', async (): Promise<void> => {
    assert.that(getFirstDigit(23)).is.equalTo(2);
  });

  test('returns 2 for 2.', async (): Promise<void> => {
    assert.that(getFirstDigit(2)).is.equalTo(2);
  });

  test('returns 0 for 0.', async (): Promise<void> => {
    assert.that(getFirstDigit(0)).is.equalTo(0);
  });

  test('throws an error for negative numbers.', async (): Promise<void> => {
    assert.that(() => {
      getFirstDigit(-23);
    }).is.throwing('Failed to get first digit of negative number.');
  });
});
