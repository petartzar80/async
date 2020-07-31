const binarySearch = (val, arr) => {
  let lower = arr[0];
  let upper = arr[arr.length - 1];
  const middle = lower + Math.floor((upper - lower) / 2);
  if (val === arr[middle]) {
    return true;
  }
  if (val < arr[middle]) {
    binarySearch(arr.slice(0, arr.middle - 1));
  } else {
    binarySearch(arr.slice(middle + 1, arr.length - 1));
  }
  return false;
};
