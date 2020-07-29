async function catchSomeOfThemParallel() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  let p1Promise = await (await fetch(`${baseURL}/1/`)).json();
  let p2Promise = await (await fetch(`${baseURL}/2/`)).json();
  let p3Promise = await (await fetch(`${baseURL}/3/`)).json();

  // this allows them to happen in parallel:

  const p1 = await p1Promise;
  const p2 = await p2Promise;
  const p3 = await p3Promise;

  console.log(`The first pokemon is ${p1.name}`);
  console.log(`The second pokemon is ${p2.name}`);
  console.log(`The third pokemon is ${p3.name}`);
}

catchSomeOfThemParallel();
