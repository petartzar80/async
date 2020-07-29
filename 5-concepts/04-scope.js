// two types of scopes

// global scope

const name = 'Ed';
const age = 39;

console.log(name);

function sayName() {
  // function first checks if the name is available in here
  // because it's not in this scope, it goes one level above
  // and finds it
  console.log(`Hello there my name is ${name}`);
  sayAge();
  function sayAge() {
    const age = 10;
    // check for age here
    // if it's not checks for level above
    // it's not so it finds it in the global scope
    console.log(`my age is ${age}`);
  }
}

sayName();

// function scope
function sayFullName() {
  const name = 'Jesse';
  const age = 100;

  console.log(`My name is ${name} and my age is ${age}`);
}

sayFullName();

// all functionally scoped variables cannot be used outside that function
