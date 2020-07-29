const dynamic = 'hobbies';

const user = {
  name: 'Ed',
  email: 'deved@ail.com',
  [dynamic]: 'stealing',
};

console.log(user);

// array to object

const users = [1, 2, 3, 4, 5, 6];
const usersObject = { ...users };
console.log(usersObject);

// object to array

const userObj = {
  name: 'Ed',
  occupation: 'model',
  hobbies: 'licking doors',
};

const userArray = Object.values(userObj);
console.log(userArray);
