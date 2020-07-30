// recursion is a process (a function in our case) that calls itself

// how recursive functions work:
// invoke the same function with a different input until you reach your base case

// the base case is where the recursion ends
// the most important concept to understand

// if no base case: stack overflow - the recursive version of an infinite loop

// two essential parts of a recursive function:
// base case & different input

function countDown(num) {
  if (!num) num <= 0;
  if (num <= 0) {
    console.log('all done');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown();
