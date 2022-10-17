'use strict';
/*const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', undefined, 133);
createBooking('LH123');*/

/*const flight = 'LH234';
const jonas = {
  name: 'Abdul Mannan',
  passport: 23456421,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = `Mr. ${passenger.name}`;
  if (passenger.passport === 23456421) alert('Checked in');
  else alert('Wrong passport! ');
  console.warn(passenger);
};
checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jonas);
checkIn(flight, jonas);*/

// //? function one
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// //? function two
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split('');

//   return [first.toUpperCase(), ...others].join('');
// };

// //* higher order function

// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by : ${fn.name}`);
// };

// //? function call
// transformer(`javascript is the best!`, upperFirstWord);
// transformer(`javascript is the best!`, oneWord);

// const high5 = function () {
//   console.log('💘');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'mannan', 'martha'].forEach(high5);

//?returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Mannan');
// greeterHey('Mannan');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hi')('mannan');

// //? the call and apply methods

// const lufthansa = {
//   airline: 'Lufthase',
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Mir Abdul Mannan');
// lufthansa.book(639, 'Ehsaan Qazi');

// // console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Lufthase',
//   iataCode: `LH`,
//   bookings: [],
// };

// const swiss = {
//   airline: 'swiss air lines',
//   iataCode: `LX`,
//   bookings: [],
// };

// const book = lufthansa.book;
// // //? Call method

// // //* no we want this method to work in both objects we simply use call methods

// // book.call(eurowings, 123, `isra`); //!this simply points this towards the first argument which is a object

// // console.log(eurowings.bookings);

// // ? .apply Method

// const flightData = [583, `GeorgeCooper`]; //! this simply converts array into the number of args to match the function
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // ? Bind Method

// const bookEW = book.bind(eurowings); //! directly sets method to that object and this keyword is also set to this objects points or creates an new function for the specific object

// bookEW(235, 'Steven Williams'); //! new function of eurowings

// const bookEw23 = book.bind(eurowings, 23);
// bookEw23('mir  mannan');

// // ? with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa)); //! returns the function and binds it to the this of the defined object otherwise it would have pointed towards the object it is which in this case is the dom element .buy

// // ? Partial Application

// // const addTax = (rate, value) => value + value * rate;

// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23); //! we set the this keyword to null as we dont need it

// // console.log(addVAT(100));

// //+ self defined partial function

// const addTax = function (rate) {
//   return function (value) {
//     const tax = value + value * rate;
//     console.log(tax);
//   };
// };

// const addVat = addTax(0.23);
// addVat(100);

//? coding challenge 1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

//!Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join(`\n`)}\n(write option number)`
//       )
//     );
//     console.log(answer);

//     //! register number

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },

//   // ! display number
//   displayResults(type = `array`) {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();
// // ! query selector calling a number
// document
//   .querySelector(`.poll`)
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
/*
// ? immediately invoked functions

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// -  immediately invoked function expression

(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`THis will never run again`))();*/

//? Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function()_{
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// };

// const booker = secureBooking();

///////////////////////////////////////
//+ Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
