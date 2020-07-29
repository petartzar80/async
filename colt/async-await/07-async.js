async function catchSomeOfThem() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  let p1 = await (await fetch(`${baseURL}/1/`)).json();
  let p2 = await (await fetch(`${baseURL}/2/`)).json();
  let p3 = await (await fetch(`${baseURL}/3/`)).json();

  console.log(`The first pokemon is ${p1.name}`);
  console.log(`The second pokemon is ${p2.name}`);
  console.log(`The third pokemon is ${p3.name}`);
}

catchSomeOfThem();

// above we are making three requests sequentially
// each must wait for the previous request before starting
// but the requests are independent!
// this can slow down the application, so how to fix it?
