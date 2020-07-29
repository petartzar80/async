class Pokemon {
  constructor(id) {
    this.id = id;
  }

  async logName() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    const res = await (await fetch(url)).json();
    console.log(res.name);
  }
}

const pokemon = new Pokemon(1);

pokemon.logName();
