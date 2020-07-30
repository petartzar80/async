// await holds up the rest of the function from executing until the promise resolves

const movieList = [
  'Alien',
  'Aliens',
  'Alien 3',
  'Alien Resurrection',
  'Prometheus',
  'Alien Covenant',
];

const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movieList);
    }, 2000);
  });
};

const storeMovies = movies => {
  return new Promise((resolve, reject) => {
    // Simulating a "succesfully stored to DB" response
    resolve({
      status: 200,
      message: 'Success',
    });
  }, 2000);
};

const storeReversedMovies = async () => {
  const movies = await getMovies();
  const reversedMovies = movies.reverse();
  const response = await storeMovies(reversedMovies);
  if (response.status === 200) {
    console.log(reversedMovies);
    return;
  }
  console.log('failed');
};

storeReversedMovies();
