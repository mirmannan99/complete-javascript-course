"use strict";
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage=(score1, score2, score3) => ( score1 + score2 + score3)/3;

// const checkWinner = function (avgDolphins,avgKoalas)
// {
//     if (avgDolphins>(avgKoalas*2))
//     {
//         return `Dolphins are the winner with ${avgDolphins} points`;
//     }
//     else if((avgDolphins*2)<avgKoalas)
//     {
//         return `Koalas are the winner with ${avgKoalas} points`;
//     }
//     else
//     {
//         return `match is draw both have ${avgKoalas} points`;
//     }
// }

// const avgDolphins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(65,54,49);

// const winner = checkWinner(avgDolphins,avgKoalas)

// console.log(winner);

// const jonas = {
//     firstName: "Jonas",
//     lastName: 'schmedtman',
//     birthYear: 1991,
//     friends: ['Micheal', 'Jordan', 'peter'],
//     job: "teacher",
//     hasDriverLicense: false,

//     calAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} ${this.lastName} is a ${this.job} and his age is ${this.calAge()} and ${(this.hasDriverLicense)?"has":"not has"} drivers license`;
//     }
// }

// console.log(jonas.getSummary());

// const phrase = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`;
// console.log(phrase);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let totals = [];
// let tips = [];

// // Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// const calcTip = function() {

//     for (let i = 0; i < bills.length; i++) {
//         if (bills[i] > 50 && bills[i] < 300) {
//             let tip = bills[i] * .15;
//             tips.push(tip);
//             let total = tip + bills[i];
//             totals.push(total);
//         } else {
//             let tip = bills[i] * .20;
//             tips.push(tip);
//             let total = tip + bills[i];
//             totals.push(total);
//         }
//     }
// }

// calcTip();

// // console.log(bills, tips, totals);

// const calcAvg = function(arr) {
//     // console.log(arr);
//     let sum = 0;
//     let avg = 0;
//     // console.log(sum);
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         avg = sum / arr.length;
//     }
//     console.log(`the total of bills is ${sum}`);
//     console.log(`the total of Average of totals is ${avg}`);
// }

// calcAvg(totals);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let totals = [];
let tips = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// console.log(tips, totals);

const calcAvg = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
ole.log(calcAvg(totals));

let back = "this is game";

let back = `we are goin to use ${12}`;

console.log(back);
