import { assert } from 'assertthat';
import { getNumberFromOcrStripDigit } from '../lib/getNumberFromOcrStripDigit';
import { OcrStrip } from 'lib/interfaces/OcrStrip';

const testCases: OcrStrip[] = [
  {
    top: ' _ ',
    center: '| |',
    bottom: '|_|'
  },

  {
    top: '   ',
    center: '  |',
    bottom: '  |'
  },

  {
    top: ' _ ',
    center: ' _|',
    bottom: '|_ '
  },

  {
    top: ' _ ',
    center: ' _|',
    bottom: ' _|'
  },

  {
    top: '   ',
    center: '|_|',
    bottom: '  |'
  },

  {
    top: ' _ ',
    center: '|_ ',
    bottom: ' _|'
  },

  {
    top: ' _ ',
    center: '|_ ',
    bottom: '|_|'
  },

  {
    top: ' _ ',
    center: '  |',
    bottom: '  |'
  },

  {
    top: ' _ ',
    center: '|_|',
    bottom: '|_|'
  },

  {
    top: ' _ ',
    center: '|_|',
    bottom: ' _|'
  }
];

suite('getNumberFromOcrStripDigit', (): void => {
  for (const [ index, digit ] of testCases.entries()) {
    test(`returns ${index} if the input ocr strip contains ${index}.`, async (): Promise<void> => {
      assert.that(getNumberFromOcrStripDigit(digit)).is.equalTo(index);
    });
  }

  test('throws error the parameter is invalid.', async (): Promise<void> => {
    assert.that((): void => {
      getNumberFromOcrStripDigit({
        top: '',
        center: '',
        bottom: ''
      });
    }).is.throwing('Invalid parameter.');
  });
});
