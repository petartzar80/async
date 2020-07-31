const evenOrNot = n => {
  const dividedByTwo = n / 2;
  return n === Math.ceil(dividedByTwo) * 2;
};

console.log(evenOrNot(5));
