// inside of an async function we can use the await keyword

// await pauses the execution of the async function

// you can await any async operation returning a promise (like other async functions)

// the await keyword waits for promise to resolve & extracts its reloved value

// after that it resumes the async function's execution

// think of the await keyword as a pause button

async function getStarWarsData() {
  console.log('starting!');
  let res = await fetch(`https://swapi.dev/api/films/`);
  let movieData = await res.json();
  // these lines do not run until the promise is resolved
  console.log(movieData);
  console.log('all done');
}

getStarWarsData();
