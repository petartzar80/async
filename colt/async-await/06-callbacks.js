const baseURL = 'https://pokeapi.co/api/v2/pokemon';

fetch(`${baseURL}/1/`)
  .then(async p1 => {
    const pokemon1 = await p1.json();
    console.log(`The first pokemon is ${pokemon1.name}`);
    return fetch(`${baseURL}/2/`);
  })
  .then(async p2 => {
    const pokemon2 = await p2.json();
    console.log(`The second pokemon is ${pokemon2.name}`);
    return fetch(`${baseURL}/3/`);
  })
  .then(async p3 => {
    const pokemon3 = await p3.json();
    console.log(`The third pokemon is ${pokemon3.name}`);
    return fetch(`${baseURL}/3/`);
  });
