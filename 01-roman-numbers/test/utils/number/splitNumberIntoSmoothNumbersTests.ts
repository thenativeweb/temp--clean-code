import { assert } from 'assertthat';
import { splitNumberIntoSmoothNumbers } from '../../../lib/utils/number/splitNumberIntoSmoothNumbers';

suite('splitNumberIntoSmoothNumbers', (): void => {
  test('returns the parts of the given number.', async (): Promise<void> => {
    assert.that(splitNumberIntoSmoothNumbers(82517)).is.equalTo([ 80000, 2000, 500, 10, 7 ]);
  });

  test('returns the parts for a single-digit number.', async (): Promise<void> => {
    assert.that(splitNumberIntoSmoothNumbers(7)).is.equalTo([ 7 ]);
  });

  test('returns 0 for 0.', async (): Promise<void> => {
    assert.that(splitNumberIntoSmoothNumbers(0)).is.equalTo([ 0 ]);
  });

  test('throws an error for negative numbers.', async (): Promise<void> => {
    assert.that((): void => {
      splitNumberIntoSmoothNumbers(-23);
    }).is.throwing('Failed to split digits for a negative number.');
  });
});
