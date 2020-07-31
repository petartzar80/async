const range = (a, b, result = []) => {
  if (a === b - 1) {
    return result;
  } else {
    a++;
    result.push(a);
    range(a, b, result);
  }
  return result;
};

console.log(range(2, 9));
