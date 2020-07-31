const fib = (num, result = [0, 1]) => {
  if (result.length >= num) {
    return result;
  }
  result.push(result[result.length - 1] + result[result.length - 2]);
  return fib(num, result);
};

console.log(fib(8));
