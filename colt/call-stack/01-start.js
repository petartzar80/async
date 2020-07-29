// whenever you invoke a function, teh details of the invocation are saved to the top of the stack (pushed to the top)

// whenever a function returns, the information about the invocation is taken off the top of the stack (popped off the top)

// in every single JS file the main() function is the first invoked

// here on bottom of the stack is the function main

// then on top we add the stack frame with the function multiply, which is invoked at var res

// then after the return, multiply goes off the stack

// then main goes off the stack and it's done

function multiply(x, y) {
  return x * y;
}

var res = multiply(3, 5);
