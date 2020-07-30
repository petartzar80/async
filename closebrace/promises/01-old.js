// promises allow you to write code that sits and waits for the returned value and then does stuff to it while the rest of your code is moving on with its life

const data = [
  'Deadpool',
  'Domino',
  'Bedlam',
  'Shatterstar',
  'Negasonic Teenage Warhead',
];

// const timer = setTimeout(() => {
//   return data;
// }, 2000);

const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

getData.then(data => {
  data.forEach(name => console.log(`first one: ${name}`));
});

// getBadData
//   .then(data => {
//     data.forEach(name => console.log(name));
//   })
//   .catch(err => console.warn(err));

getData
  .then(data => {
    const shoutData = data.map(name => name.toUpperCase());
    return shoutData;
  })
  .then(data => console.log(data));

getData
  .then(data => {
    const whisperData = data.map(name => name.toLowerCase());
    return whisperData;
  })
  .then(data => {
    const body = document.body;
    console.log(body);
    data.forEach(name => {
      body.innerHTML += `<p>${name}</p>`;
    });
  });
