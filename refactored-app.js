console.log('start');

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 1000);
  });
}

loginUser('ed', 'bumba')
  .then(user => getUserVideos(user.email))
  .then(videos => videoDetails(videos[0]))
  .then(detail => console.log(detail));

// when you keep on stacking these things like this, it's called callback hell
// const user = loginUser('deved@goomail.com', 123456, user => {
//   console.log(user);
//   getUserVideos(user.userEmail, videos => {
//     console.log(videos);
//     videoDetails(videos[0], title => {
//       console.log(title);
//     });
//   });
// });
console.log('finish');
