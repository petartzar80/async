// if a promise is rejected using await, an error will be thrown

// we can use try/catch statement to handle errors

async function getUser(user) {
  try {
    const url = `https://api.githgsfdgsdgub.com/users/${user}`;
    // const url = `https://api.github.com/users/${user}`;
    const res = await (await fetch(url)).json();
    console.log('res: ', res);
    console.log(`${res.name}: ${res.public_repos}`);
  } catch (e) {
    console.log("user doesn't exist:", e);
  }
}

getUser('psgfdklčkljd0');
