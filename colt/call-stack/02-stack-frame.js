// stack frame contents:

// the function that was invoked

// the parameters that were passed to the function

// current line number

function firstThing() {
  return 'FIRST THING';
}

function secondThing() {
  return firstThing() + ' SECOND THING!';
}

secondThing();

// stack definition:

// Stack is an ordered set of stack frames

// most recently invoked function is on top of the stack

// the bottom of the stack is the first function invoked

// stack is processed from top to bottom
