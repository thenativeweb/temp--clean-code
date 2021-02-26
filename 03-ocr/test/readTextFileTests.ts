import { assert } from 'assertthat';
import path from 'path';
import { readTextFile } from '../lib/readTextFile';

suite('readTextFile', (): void => {
  test('returns non empty string for existing file.', async (): Promise<void> => {
    assert.that(readTextFile(path.join(__dirname, '../data/input.txt')).length).is.atLeast(1);
  });
  test('throws error when trying to read non existing file.', async (): Promise<void> => {
    assert.that((): void => {
      readTextFile('');
    }).is.throwing('File not found.');
  });
});
