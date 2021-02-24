import { filterAndSelect } from './filterAndSelect';

function getMaxValueFromArrayLessThan (numbers: number[], upperLimit: number) {
  return filterAndSelect(
    numbers,
    (number): boolean => number < upperLimit,
    'Failed to find max value.',
    (filteredNumbers): number => Math.max(...filteredNumbers)
  );
}

export { getMaxValueFromArrayLessThan };
