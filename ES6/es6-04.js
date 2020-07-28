// Constructor functions

// OLD

function Person(name, age, hairColor) {
  this.name = name;
  this.age = age;
  this.hairColor = hairColor;
}

Person.prototype.sayName = function () {
  console.log('My name is ' + this.name);
};

function Ed(occupation, hobbys, name, age, hairColor) {
  Person.call(this, name, age, hairColor);
  this.occupation = occupation;
  this.hobbys = hobbys;
}

Ed.prototype = Object.create(Person.prototype);

const person = new Ed('Dev', 'Dancing', 'Edwin', 25, 'brown');

console.log(person);

person.sayName();

// ES6

class ShoppingList {
  constructor(items, nr) {
    this.items = items;
    this.nr = nr;
  }

  sayList() {
    console.log(this.items);
  }
}

const myList = new ShoppingList(['Milk', 'Choco', 'Mate'], 3);

class Product extends ShoppingList {
  constructor(items, nr, amount, cost) {
    super(items, nr);
    this.amount = amount;
    this.cost = cost;
  }
}

const product = new Product(['Redbull', 'Choco', 'Candy'], 3, 2, 20);

console.log(product);
product.sayList();
