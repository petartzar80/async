// callstack is a data structure that dictates the way our functions run and the way the code gets executed

function sayHello() {
  console.log('hello my name is Pete');
}
function sayAge() {
  console.log('my age is 39');
}
function sayAll() {
  sayHello();
  sayAge();
}

sayAll();
console.log('final');

// in the callstack, the first thing that is created when the file runs is main()

// after you invoke the function it gets added to the stack, on top of main()

// after that function is finished, it gets removed and another function gets added to the stack

// after the code finishes, even main() gets taken off the stack

// first stack here : main() -> sayAll() -> sayHello() -> console.log('hello)

// console.log is finished and gets removed:

// main() -> sayAll() -> sayHello()

// sayHello() is also finished now and gets removed from the stack

// main() -> sayAll()

// we move on to sayAge()

// main() -> sayAll() -> sayHello()

// console.log keeps adding to stack

// main() -> sayAll() -> sayAge() -> console.log('age')

// console.log gets removed and then sayAge after that

// main() -> sayAll()

// now sayAge is empty too, it gets removed and we can move on to final console.log

// main() -> console.log('final');

// it finishes, gets removed and our code ends
// the main gets removed as well
