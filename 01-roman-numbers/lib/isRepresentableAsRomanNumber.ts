// The max Roman number is 3999, because this is the last number that can be
// represented without violating the rule that there may not be more than three
// equal number characters in a row. 4000 would be MMMM.
const maxRomanNumber = 3999;

function isRepresentableAsRomanNumber (arabicNumber: number): boolean {
  if (arabicNumber <= 0) {
    return false;
  }
  if (arabicNumber > maxRomanNumber) {
    return false;
  }

  return true;
}

export { isRepresentableAsRomanNumber };
