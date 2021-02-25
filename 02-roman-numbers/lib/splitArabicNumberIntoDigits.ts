function splitArabicNumberIntoDigits(arabicNumber: number): number[] {
  const arabicDigits = String(arabicNumber).
    split('').
    map((char): number => Number(char));

  return arabicDigits;
}

export { splitArabicNumberIntoDigits };
