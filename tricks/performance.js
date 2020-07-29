let startAt = performance.now();

// here execute crazy code that may take a long time

for (let i = 0; i < 21920; i++) {
  console.log(i);
}

let endAt = performance.now();

console.log(`${endAt - startAt} took miliseconds to execute`);
