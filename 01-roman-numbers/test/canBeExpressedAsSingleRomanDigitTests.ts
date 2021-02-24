import { assert } from 'assertthat';
import { canBeExpressedAsSingleRomanDigit } from '../lib/canBeExpressedAsSingleRomanDigit';

suite('canBeExpressedAsSingleRomanDigit', (): void => {
  test('returns true for 5.', async (): Promise<void> => {
    assert.that(canBeExpressedAsSingleRomanDigit(5)).is.true();
  });

  test('returns false for 7.', async (): Promise<void> => {
    assert.that(canBeExpressedAsSingleRomanDigit(7)).is.false();
  });
});
