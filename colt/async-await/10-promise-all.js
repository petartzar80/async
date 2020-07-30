async function catchSomeOfThemParallel2() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  const urls = [`${baseURL}/1/`, `${baseURL}/2/`, `${baseURL}/3/`];
  const pokemon = await Promise.all(
    urls.map(url =>
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          return data;
        })
    )
  );

  console.log(`The first pokemon is ${pokemon[0].name}`);
  console.log(`The second pokemon is ${pokemon[1].name}`);
  console.log(`The third pokemon is ${pokemon[2].name}`);
}

catchSomeOfThemParallel2();
