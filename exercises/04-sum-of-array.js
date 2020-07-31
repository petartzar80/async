const sumOfArray = (arr, sum = 0) => {
  if (!arr.length) return sum;
  sum += arr.pop();
  return sumOfArray(arr, sum);
};

const sumOfArray2 = arr => {
  if (arr.length === 1) {
    return arr[0];
  } else return arr.pop() + sumOfArray2(arr);
};

console.log(sumOfArray2([1, 2, 3, 4, 5, 6]));
