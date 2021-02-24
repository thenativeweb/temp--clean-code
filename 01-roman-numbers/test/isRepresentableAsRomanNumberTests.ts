import { assert } from 'assertthat';
import { isRepresentableAsRomanNumber } from '../lib/isRepresentableAsRomanNumber';

suite('isRepresentableAsRomanNumber', (): void => {
  test('returns true for small positive numbers.', async (): Promise<void> => {
    assert.that(isRepresentableAsRomanNumber(23)).is.true();
  });

  test('returns false for zero.', async (): Promise<void> => {
    assert.that(isRepresentableAsRomanNumber(0)).is.false();
  });

  test('returns false for negative numbers.', async (): Promise<void> => {
    assert.that(isRepresentableAsRomanNumber(-23)).is.false();
  });

  test('returns false for numbers larger than or equal to 4000.', async (): Promise<void> => {
    assert.that(isRepresentableAsRomanNumber(4000)).is.false();
  });
});
