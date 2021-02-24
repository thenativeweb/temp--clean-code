import { assert } from 'assertthat';
import { getMaxValueFromArrayLessThan } from '../../../lib/utils/array/getMaxValueFromArrayLessThan';

suite('getMaxValueFromArrayLessThan', (): void => {
  test('returns the max value less than the given upper limit.', async (): Promise<void> => {
    const numbers = [ 2, 3, 5, 7, 11, 13 ];
    const maxValue = getMaxValueFromArrayLessThan(numbers, 10);

    assert.that(maxValue).is.equalTo(7);
  });

  test('does not return the upper limit.', async (): Promise<void> => {
    const numbers = [ 2, 3, 5, 7, 11, 13 ];
    const maxValue = getMaxValueFromArrayLessThan(numbers, 11);

    assert.that(maxValue).is.equalTo(7);
  });

  test('throws an error if no max value is found.', async (): Promise<void> => {
    const numbers = [ 2, 3, 5, 7, 11, 13 ];

    assert.that((): void => {
      getMaxValueFromArrayLessThan(numbers, 2);
    }).is.throwing('Failed to find max value.');
  });

  test('throws an error if no numbers are given.', async (): Promise<void> => {
    const numbers: number[] = [];

    assert.that((): void => {
      getMaxValueFromArrayLessThan(numbers, 2);
    }).is.throwing('Failed to find max value.');
  });
});
