// callback is just a function that gets passed in to a parameter of another function
// that callback is going to run after that first function finishes

// synchronous callback
const sayName = (name, cb) => {
  console.log('running some code');
  console.log('running some code');
  console.log(`My name is ${name}`);
  cb();
};

function callback() {
  console.log('this ran at the end');
}

sayName('Pete', callback);

// async
console.log('first');

setTimeout(() => {
  console.log('from callback');
}, 2000);

console.log('last');

async function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 3000);
  });

  let result = await promise;
  console.log(result);
}

getData();
