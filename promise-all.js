const yt = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting stuff from yt');
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting stuff from fb');
    resolve({ user: 'Name' });
  }, 3000);
});

Promise.all([yt, fb]).then(result => console.log(result));
