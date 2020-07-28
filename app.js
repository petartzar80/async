// sync code example

// function otherFunc() {
//   console.log('another function');
//   console.log('do some');
// }

// console.log('start');

// otherFunc();

// console.log('end');

// async code example

// console.log('start');
// setTimeout(() => {
//   console.log('in timeout');
// }, 2000);

// console.log('end');

console.log('start');

function loginUser(email, password, callback) {
  setTimeout(() => {
    onSuccess({ userEmail: email });
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback('title of the video');
  }, 1000);
}

// when you keep on stacking these things like this, it's called callback hell
const user = loginUser('deved@goomail.com', 123456, user => {
  console.log(user);
  getUserVideos(user.userEmail, videos => {
    console.log(videos);
    videoDetails(videos[0], title => {
      console.log(title);
    });
  });
});
console.log('finish');
