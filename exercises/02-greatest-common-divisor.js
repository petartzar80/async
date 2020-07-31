const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(gcd3(32, 24));
