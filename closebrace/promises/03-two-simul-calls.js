const movieList = [
  'Alien',
  'Aliens',
  'Alien 3',
  'Alien Resurrection',
  'Prometheus',
  'Alien Covenant',
];

const takeTooLongToUpperCase = str => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 2000);
  });
};

const upperCaseMovies = async list => {
  const item0 = takeTooLongToUpperCase(list[0]);
  const item1 = takeTooLongToUpperCase(list[1]);

  return [await item0, await item1];
};

upperCaseMovies(movieList).then(newList => {
  console.log(newList);
});
