function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 3 seconds:
// async function doSomething() {
//   let p1 = await pause(1000);
//   let p2 = await pause(1000);
//   let p3 = await pause(1000);
//   console.log('all done');
// }

// 1 second:
async function doSomething() {
  let promise1 = pause(1000);
  let promise2 = pause(1000);
  let promise3 = pause(1000);

  await promise1;
  await promise2;
  await promise3;
  console.log('all done');
}

doSomething();
