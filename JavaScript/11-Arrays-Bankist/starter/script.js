'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // ==================================================================
// // ====================== SIMPLE ARRAY METHODS ======================
// // ==================================================================

// //Methods are functions that we can call on objects.

// // SLICE
// let arr = [...'abcde']; // ['a', 'b', 'c', 'd', 'e' ];
// // Slice, take a part of an array
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// // index at index 2
// console.log(...arr.slice(2)); // c d e
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// // shadow copy remember
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// //SPLICE
// //The diference that it mutate thats array look then with the originall
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b']
// //splice delete the part extracted
// arr = [...'abcde']; // ['a', 'b', 'c', 'd', 'e' ];
// // console.log(arr.splice(-1)); // ['e']
// arr.splice(-1); // ['e']
// console.log(arr); // ['a', 'b', 'c', 'd']
// arr = ['a', 'b', 'c', 'd', 'e']; // [...'abcde'];
// arr.splice(1, 2); // takes 'b' and 'c'
// console.log(arr); // ['a', 'd', 'e']

// // REVERSE
// //This also mutate the array and make it reverse.
// arr = [...'abcde'];
// let arr2 = [...'jihgjf'];
// console.log(arr2.reverse()); //['f', 'j', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'j', 'g', 'h', 'i', 'j']

// // CONCAT
// //This doesn't mutate the original arry
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']

// // JOIN
// //This doesn't mutate the array
// //Joining all the elements of the array but with the '-'
// console.log(letters.join('-')); // a-b-c-d-e-f-j-g-h-i-j
// console.log(letters.join(' - ')); // a - b - c - d - e - f - j - g - h - i - j

// // ==================================================================
// // ====================== AT METHOD ES6======================
// // ==================================================================

// const arr = [23, 11, 64];
// //If we want to take one element fo the array we usually...
// console.log(arr[0]); //23

// //But with at method
// //Array at position 0
// console.log(arr.at(0)); //23
// //The particulary of the at method is
// //supose we want the las position of the array we usually
// console.log(arr[arr.length - 1]);
// // or we can do it with slice for getting the last element
// console.log(arr.slice(-1)); // [64]
// console.log(arr.slice(-1)[0]); // 64
// //with at method
// console.log(arr.at(-1)); //64
// //So that is cointing from the left sice of the array

// console.log('Felix'.at(0)); //F

// // ==================================================================
// // ====================== F O R  E A C H ============================
// // ==================================================================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('===== FOR EACH =====');
//Doing the same with for each method in an easier way
// it needs a function
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
//The for each method calls the function, because it loop over the array
// and for each iterations
// The current element is recive as an argument

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

//Another example

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movment: ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movment: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}
// FOR EACH
console.log('==== FOR EACH ====');
//The order really is important that is stablish in index
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movment: ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movment: ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
  // console.log(array); // that's just the array
});
// YOU CAN NOT BREAKOUT A FOR EACH LOOP, IT ALWAYS LOOP TO THE ENTIRE ARRAY
// -_-
