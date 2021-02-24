function getMaxValueFromArrayLessThan (numbers: number[], upperLimit: number) {
  const numbersLessThanUpperLimit = numbers.
    filter((number): boolean => number < upperLimit);

  if (numbersLessThanUpperLimit.length === 0) {
    throw new Error('Failed to find max value.');
  }

  const maxValue = Math.max(...numbersLessThanUpperLimit);

  return maxValue;
}

export { getMaxValueFromArrayLessThan };
