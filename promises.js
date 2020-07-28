// promise i s just an object that either gives us back the result of an async operation or its failure

console.log('start');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('got the user');
    // resolve({ user: 'ed' });
    reject(new Error('user not logged in'));
  }, 2000);
});

promise
  .then(user => {
    console.log(user);
  })
  .catch(err => console.log(err.message));

console.log('end');
