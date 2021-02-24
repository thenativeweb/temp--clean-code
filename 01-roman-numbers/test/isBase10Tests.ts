import { assert } from 'assertthat';
import { isBase10 } from '../lib/isBase10';

suite('isBase10', (): void => {
  test('returns true for 100.', async (): Promise<void> => {
    assert.that(isBase10(100)).is.true();
  });

  test('returns false for 50.', async (): Promise<void> => {
    assert.that(isBase10(50)).is.false();
  });
});
