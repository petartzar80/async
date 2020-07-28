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

// loginUser('ed', 'bumba')
//   .then(user => getUserVideos(user.email))
//   .then(videos => videoDetails(videos[0]))
//   .then(detail => console.log(detail));

async function displayUser() {
  try {
    const loggedUser = await loginUser('ed', 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log('we could not get the videos');
  }
}

displayUser();
