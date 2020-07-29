async function friendlyFn() {
  return 'hello!';
}

function friendlyPromise() {
  return Promise.resolve('hello 2');
}

friendlyPromise().then(msg => console.log(msg));

async function oops() {
  throw new Error("you shouldn't have invoked me");
}

oops();
