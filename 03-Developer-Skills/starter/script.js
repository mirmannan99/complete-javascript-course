// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const arr = [17, 21, 23];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]} degree in ${i + 1} days`;
  }
  console.log(str);
};

printForecast([17, 21, 23]);
