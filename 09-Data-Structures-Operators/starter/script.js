'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  openingHours,
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
// console.log(restaurant);
//OR assignment

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// let [gk, ...fieldPLayers] = game.players[0];

// const allPlayers = [...game.players[0], ...game.players[1]];

// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Peristic'];

// const { team1, x: draw, team2 } = game.odds;

// console.log(gk);
// console.log(fieldPLayers);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1, draw, team2);

// let printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} number of goals were scored`);
// };

// printGoals(...game.scored);

// team1 > team2 && console.log('team 1 will win');
// team2 > team1 && console.log('team 2 will win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`); //beacuse two small arrays will be made avaialble once entries function is used
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`); //beacuse two small arrays will be made avaialble once entries function is used
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'thu', 'fri', 'sat', ' tue', 'wed ', 'sun '];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we are open at ${open}`);
// }

// //Methods

// console.log(restaurant.order?.(0, 1) ?? 'method doent exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method doent exist');

// const properties = Object.keys(openingHours); // makes object in to array onlu collects values of obejcts
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(openingHours); // makes object in to array onlu collects values of obejcts
// console.log(values);

//Entire Object
// const entries = Object.entries(openingHours);//makes objects key value in two arrays
// console.log(entries);

// for (const [days, { open, close }] of entries) {
//   console.log(
//     `we are open on ${days} from ${open} 0 clock to ${close} 0 clock`
//   );
// }

// const playerGoals = Object.entries(game.scored);
// console.log(playerGoals);

// for (const [no, goaly] of playerGoals) {
//   console.log(`Goal ${parseInt(no) + 1}: ${goaly}`);
// }

// const odds = Object.entries(game.odds);
// console.log(odds);

// let avg = 0;

// for (const avgCalc of odds) {
//   avg += avgCalc[1];
//   avg /= odds.length;
// }
// console.log(avg);

// const teamOdds = Object.entries(game);
// console.log(teamOdds);

// for (const [team, odds] of Object.entries(game.odds)) {
//   console.log(`Odd of Victory ${game[team] ?? 'draw'} : ${odds}`);
// }

// const rest = new Map();
// rest.set('name', 'classico italino');
// rest.set('1', 'firenze italy');

// console.log(rest.set(2, 'lisbon,portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'veggie', 'oragnic'])
//   .set('open', 11)
//   .set('cloes', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are open :(');

// console.log(rest.get('name'));
// console.log(rest.get('true'));

// const time = 8;
// console.log(
//   rest.get(rest.get(time > rest.get('open')) && time < rest.get('close'))
// );

// object to map+++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Object.entries(openingHours));

// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);
// +++++++++++++++++++++ obj to map++++++++++++++++++++++++

// maps for decision makkng++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const question = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 💕💕'],
//   [false, 'InCorrect 🤔🤔'],
// ]);

// console.log(question);

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// // const answer = Number(prompt('Your Answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// // maps for decision makkng++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // ++++++++++++Convert map tio array+++++++++++++++++++++++++
// console.log(...question);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents);

// // 1.
// const events = new Set(gameEvents.values());
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.warn(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// // console.log([...gameEvents.entries()]);
// for (const [time, event] of [...gameEvents.entries()]) {
//   const half = time <= 45 ? 'First' : 'Second';
//   +console.log(`${half} Half ${time} : ${event}`);

//   // if (time < 45) {
//   //   console.log(`The ${event} happened at ${time} in the first half `);
//   // } else {
//   //   console.log(`The ${event} happened at ${time} in the second half`);
//   // }
// }

//  Strings ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
