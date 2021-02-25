const mappings = [
  { base: 'I', helperBase: 'V' },
  { base: 'X', helperBase: 'L' },
  { base: 'C', helperBase: 'D' },
  { base: 'M', helperBase: 'd' }
];

const mapArabicDigitToRomanDigit = function (arabicDigit: number, significance: number): string {
  const { base, helperBase } = mappings[significance];

  if ([ 1, 2, 3 ].includes(arabicDigit)) {
    return base.repeat(arabicDigit);
  }

  if ([ 4 ].includes(arabicDigit)) {
    return `${base}${helperBase}`;
  }

  if ([ 5, 6, 7, 8 ].includes(arabicDigit)) {
    const remainingArabicDigits = arabicDigit - 5;

    return `${helperBase}${base.repeat(remainingArabicDigits)}`;
  }

  if ([ 9 ].includes(arabicDigit)) {
    const { base: nextBase } = mappings[significance + 1];

    return `${base}${nextBase}`;
  }

  return '';
};

export { mapArabicDigitToRomanDigit };
