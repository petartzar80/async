const binarySearch = (val, arr) => {
  let lower = arr[0];
  let upper = arr[arr.length - 1];

  while (lower <= upper) {
    console.log('try');
    const middle = lower + Math.floor((upper - lower) / 2);
    if (val === arr[middle]) {
      return true;
    }
    if (val < arr[middle]) {
      upper = arr[middle - 1];
    } else {
      lower = arr[middle + 1];
    }
  }
  return false;
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(7, values));
console.log(binarySearch(11, values));
