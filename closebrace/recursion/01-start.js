// function shoutHello(howManyTimes) {
//   if (howManyTimes === 0) return;
//   console.log('Hello');
//   shoutHello(--howManyTimes);
// }

// shoutHello(5);

const fibonacciArray = (steps, array = [], count = 0) => {
  if (array.length) count = array.length;
  if (count === steps) {
    return array;
  }
  if (count < 2) {
    array.push(count);
  } else {
    array.push(array[count - 1] + array[count - 2]);
    count = array.length + 1;
    fibonacciArray(steps, array, count);
  }
  return array;
};
console.log(fibonacciArray(12, [1, 1]));
