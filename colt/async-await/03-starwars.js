const starWars = {
  genre: 'sci-fi',
  async logMovieData() {
    const url = `https://swapi.dev/api/films/`;
    // const res = await fetch(url);
    // const movieData = await res.json();
    const movieData = await (await fetch(url)).json();
    console.log(movieData.results);
  },
};

starWars.logMovieData();
