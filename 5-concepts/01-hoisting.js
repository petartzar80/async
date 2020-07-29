// the compiler takes a look at our variable declarations and our function declarations

console.log(name);
var name = 'Ed';

// behind the scenes :

// var name;
// console.log(name);
// name = 'Ed';

// this is because only the declaration is being hoisted to the top, assigning the value happens later in the thread

sayName();
function sayName() {
  console.log('Hello there');
}

// if a function is defined this way, it's going to be hoisted to the top in its entirety

sayAge();
var sayAge = function () {
  console.log('My age is 39');
};

// this function expression is not going to work because at line 21 sayAge is still not a function
// var sayAge is a variable declaration - the var is declared and hoisted to the top and the function is added to it only after sayAge is being called

// behind the scenes:

// var sayAge;
// sayAge();
// sayAge = function () {
//   console.log('My age is 39');
// };
