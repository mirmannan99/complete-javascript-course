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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    
    <div class="movements__value">${mov}₤</div>
    </div>    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₤`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₤`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}₤`;
};

// ? #12 Computing Usernames

// const user = 'Steven Thomas Williams';
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //!to add new property in the object with for each method+
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
  // const username = user
  //   .toLowerCase()
  //   .split(' ')
  //   .map(name => name[0])
  //   .join('');

  // return username;
};

// createUsername('Mir Abdul Mannan');

createUsername(accounts);

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);
  // Display Summary
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

/// Event handlers here
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from getting submit
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display Ui and welcome message
    labelWelcome.textContent =
      'Welcome back, ' + currentAccount.owner.split(' ')[0];
    containerApp.style.opacity = 100;
    //clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    //ADD the movements

    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //delete account
    accounts.splice(index, 1);
    console.log(accounts);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// + LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h', 'i', 'j'];

// console.log(arr.slice(2));
// //*return new array from index 2
// console.log(arr.slice(2, 4));
// //*return new array from index 2 ends at 4

// console.log(arr.slice(-1)); //* to get last element of array

// console.log(arr.slice(1, -2)); //* trims last two and first one element

// console.log(arr.slice()); //* gets copy of array

// console.log([...arr]);

// ? splice
//! it mutates the original array

// console.log(arr.splice(2)); //* it extracts the part of array and original array loses it
// console.log(arr.splice(-1));
// console.log(arr);
// arr.splice(1, 2); //* got to index of one and then deletes two elements
// console.log(arr);

//? Reverse
//! it mutates the original array and reverses it

// console.log(arr.reverse()); //*  reverses the array
// console.log(arr);

//? Concat

// const letters = arr.concat(arr2); //* merge two arrays
// console.log(letters);

// console.log([...arr, ...arr2]); //* merges two arrays

//? Join

// console.log(letters.join('-'));

//? The new at method

// const arNum = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(-1)); //* start from right side

//? Loooping Arrays_forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.warn('-----ForEach-----');

// movements.forEach(function (mov, i, arr) {   //* array passes its arguments to this callback function parameters
//   if (mov > 0) {
//     console.log(`Movement ${i}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
//   }
// });

//* usually used to iterate over arrays

//? #6 for each method for maps and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// //- sets

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'AUD', 'USD']);

// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// }); //* in sets the value and key is same basically sets doesn't have indexes also

///////////////////////////////////////
//+ Coding Challenge #1

/* 
          Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
          
          Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
          
          1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
          2. Create an array with both Julia's (corrected) and Kate's data
          3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
          4. Run the function for both test datasets
          
          HINT: Use tools from all lectures in this section so far 😉
          
          TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
          TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
          
          GOOD LUCK 😀
          */

//! My answer

// let julia = [3, 5, 2, 12, 7];
// let kate = [4, 1, 15, 8, 3];
// let juliaCopy = julia.slice(1, -2);
// let bothDogs = [...juliaCopy, ...kate];
// bothDogs.forEach(function (age, i) {
//   if (age < 3) {
//     console.log(
//       `Dog number ${i + 1} is still a puppy 🐶, and is ${age} years old`
//     );
//   } else {
//     console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//   }
// });

//! Jonas Answer

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // console.warn(dogsJulia.slice(1, 3));
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (age, i) {
//     if (age < 3) {
//       console.log(
//         `Dog number ${i + 1} is still a puppy 🐶, and is ${age} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//? #11 the Map Method
const movements = account1.movements;

// const eurtoUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurtoUsd;
//   // return 11;
// }); //*returns new elements

// const movementsUSD = movements.map(mov => mov * eurtoUsd); //* with arrow function

// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurtoUsd);
// } //*with the help of loop

// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescription);

// ? #13 The filter Method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);

// console.log(deposits);

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawal);

// ? #14 The reduce method

//* acculmulator is like a snowball rolling down the hill

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balance);

//- Mximum value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

///////////////////////////////////////
// ? Coding Challenge #2

/* 
          Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
          
          Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
          
          1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
          2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
          3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
          4. Run the function for both test datasets
          
          TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
          TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
          
          GOOD LUCK 😀
          */

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (dogAge) {
//     if (dogAge <= 2) {
//       return 2 * dogAge;
//     } else {
//       return 16 + dogAge * 4;
//     }
//   });
//   const adults = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   const avg =
//     adults.reduce(function (acc, age, i, arr) {
//       // console.log(arr.length);
//       return acc + age;
//     }, 0) / adults.length;
//   console.log(humanAge);
//   console.log(adults);
//   console.log(avg);
//   return avg;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

///////////////////////////////////////

// ? #16 The Magic of chaining
const eurtoUsd = 1.1;

//+ pipeline

// const totalDepositedUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurtoUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// const totalDepositedUsd = movements
//   .filter(mov => mov < 0)
//   .map((mov, i, arr) => {
//     console.log(arr); //!inspecting the previous methods reults
//     return mov * eurtoUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositedUsd);

// ? #17 Coding Challenge

// Coding Challenge #3
/* 
          Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
          
          TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
          TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
          
          GOOD LUCK 😀
          */
//! with method chaining and without if else

// const calcAverageHumanAge2 = function (ages) {
//   return ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// };

// const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

// const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg3, avg4);

//? #18 The Find Method

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

// ?  #22 some and every

// //+some
// console.log(movements);

// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 500);
// console.log(anyDeposits);

// //+every

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// ? #23 flat and flatmaps

// + changes nested array into simple arrays

// const arrr = [[1, 2, 3], [4, 5, 6], 7, 8];

// const arrrDeep = arrr.flat();
// console.log(arrrDeep);

// const accountsMovements = accounts.map(acc => acc.movements);

// console.log(accountsMovements);

// const allMovements = accountsMovements.flat();
// console.log(allMovements);

// const overAllBal = allMovements.reduce((acc, mov) => acc + mov, 0);

// console.log(overAllBal);

// @ if we use chaining for the same method

// const overAllBalance = accounts //! with the help of chaining
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overAllBalance);

// ! we use map and flat all the time for that the new method was introduced called flatMap();

// //+ flatmap()
// const overAllBalanceFlatMap = accounts //! with the help of chaining and flatMap()
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overAllBalanceFlatMap);

// ? #24 Sorting Arrays

//Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// //NUmbers

// console.log(movements);
// console.log(movements.sort());

// ! sort method sorts in the form of string basically it treats every thing in the form of string either it is a number or anything

// movements.sort((a, b) => {
//   if (a > b) return 1; //! if number are in negative
//   if (b > a) return -1;
// });

// console.log(movements);

// ? #25 more ways of creating and filling Arrays

// //+ Array.fill()
// // const y = [1, 2, 3, 4, 5, 7];
// const x = new Array(7); //!specifes the length

// console.log(x);

// // x.fill(1); //!fills array with same element

// x.fill(1, 3, 5); //! start and end

// // y.fill(23, 2, 5); //! fills array at specific position(2-5 index)
// // console.log(y);

// console.log(x);

// //+ Array.from()

// const y = Array.from({ length: 7 }, () => 1);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

//! this method is used to create arrays from other iterables

// labelBalance.addEventListener('click', function () {
//   const movementsUi = Array.from(
//     document.querySelector('.movements__value'),
//     el => Number(el.textContent.replace('₤', ''))
//   );

//   console.log(movementsUi);
// });

//? #28 coding challenge #4
