const calcExponent = (base, exp) => {
  if (exp === 0) {
    return 1;
  } else return base * calcExponent(base, exp - 1);
};

console.log(calcExponent(3, 3));
