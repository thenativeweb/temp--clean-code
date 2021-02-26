import { assert } from 'assertthat';
import { getOcrNumbers } from '../lib/getOcrNumbers';
import path from 'path';

suite('getOcrNumbers', (): void => {
  test('returns a number array that represents the account numbers.', async (): Promise<void> => {
    assert.that(getOcrNumbers(path.join(__dirname, '../data/input.txt'))).is.equalTo([ 12_345, 234_507 ]);
  });
});
