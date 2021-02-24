function getFirstDigit (number: number) {
  if (number < 0) {
    throw new Error('Failed to get first digit of negative number.');
  }

  return Number(String(number)[0]);
}

export { getFirstDigit };
