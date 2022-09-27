'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//logical assignment operator

const rest1 = {
  name: 'Capri',
  numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Li Piazzo',
  owner: 'Giovanni Rossi',
};
//OR assignment

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

//SHort circuitin g

// restaurant.numGuests = 23;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// restaurant.numGuests = 23;
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// // console.log(guest1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

//////////////////////////////////////////////////
/*
const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
*/
