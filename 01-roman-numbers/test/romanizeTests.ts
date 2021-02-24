import { assert } from 'assertthat';
import { romanize } from '../lib/romanize'

const testCases: [number, string][] = [
  [ 1, 'I' ],
  [ 2, 'II' ],
  [ 3, 'III' ],
  [ 4, 'IV' ],
  [ 5, 'V' ],
  [ 6, 'VI' ],
  [ 7, 'VII' ],
  [ 8, 'VIII' ],
  [ 10, 'X' ],
  [ 20, 'XX' ],
  [ 30, 'XXX' ],
  [ 40, 'XL' ],
  [ 50, 'L' ],
  [ 80, 'LXXX' ],
  [ 100, 'C' ],
  [ 200, 'CC' ],
  [ 300, 'CCC' ],
  [ 400, 'CD' ],
  [ 500, 'D' ],
  [ 1000, 'M' ],
  [ 1523, 'MDXXIII' ],
  [ 2000, 'MM' ],
  [ 2085, 'MMLXXXV' ],
  [ 3000, 'MMM' ]
];

suite('romanize', (): void => {
  for (const [ arabicNumber, romanNumber ] of testCases) {
    test(`returns ${romanNumber} for ${arabicNumber}.`, async (): Promise<void> => {
      assert.that(romanize(arabicNumber)).is.equalTo(romanNumber);
    });
  }

  test('throws an error if we input a non-supported number.', async (): Promise<void> => {
    assert.that(() => {
      romanize(0);
    }).is.throwing('Can not romanize a non-supported number.');
  });
});
