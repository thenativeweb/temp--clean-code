// TODO: Tests for this function are missing.
function filterAndSelect <TArrayItem> (
  array: TArrayItem[],
  filterFn: (item: TArrayItem) => boolean,
  filterErrorMessage: string,
  selectFn: (array: TArrayItem[]) => TArrayItem
) {
  const filteredArray = array.filter(filterFn);

  if (filteredArray.length === 0) {
    throw new Error(filterErrorMessage);
  }

  const selectedItem = selectFn(filteredArray);

  return selectedItem;
}

export { filterAndSelect };
