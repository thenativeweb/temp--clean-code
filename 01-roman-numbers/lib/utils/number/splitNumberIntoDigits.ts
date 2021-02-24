function splitNumberIntoDigits (number: number): number[] {
  if (number < 0) {
    throw new Error('Failed to split digits for a negative number.');
  }

  return String(number).split('').map((char): number => Number(char));
}

export { splitNumberIntoDigits };
