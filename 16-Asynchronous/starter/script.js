'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (response, className = '') {
  const html = ` <article class="country ${className}">
          <img class="country__img" src="${response.flag}" />
          <div class="country__data">
            <h3 class="country__name">${response.name}</h3>
            <h4 class="country__region">${response.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +response.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              response.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              response.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// ? #3 asynchronous javascript

// let p = `before callback`;
// console.log(p);

// setTimeout(function () {
//   p = `Inside callback`; //! no code will wait for its execution it will executed in future
//   console.log(p);
// }, 5000);

// p = 'after callback';
// console.log(p);

// ?4 AJAX

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const data = JSON.parse(this.responseText);

//     const [response] = data;

//     console.log(response);

//     const html = ` <article class="country">
//           <img class="country__img" src="${response.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${response.name}</h3>
//             <h4 class="country__region">${response.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +response.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               response.languages[0].name
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               response.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// ? #6 welocme to callback hell

// //! here we have one callback inside one another

// const getCountryAndNeighbour = function (country) {
//   //* ajax call country 1

//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //* render country data
//     renderCountry(data);

//     //* get neighbour country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //* ajax call country 2

//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// ? #7 promises and fetch

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// ? #8 Consuming Promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) //!returning a promise
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //! read data from response this itself return the promise
//     })
//     .then(function (data) {
//       //! we call then method on that promise
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//+ Simplified version of above code

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('USA');

// ? #9 Chaining Promises

// const getCountryData = function (country) {
//   //country 1

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, `neighbour`));
// };
// // !if we want to get data from the previous promise
// //! always get then from returning the fetch
// getCountryData('USA');

// ? #10 Handling rejected errors

// const getCountryData = function (country) {
//   //country 1

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       response => response.json()
//       // err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(
//       response => response.json()
//       // err => alert(err)
//     )
//     .then(data => renderCountry(data, `neighbour`))
//     .catch(err => {
//       console.log(`${err} 🎇🎇🎇🎇🎇🎇`);
//       renderError(`Something went Wrong 🎇  ${err.message}. Try Again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('USA');
// });

// getCountryData('ddsfsa');

// ? Throwing Errors manually

// const getJSON = function (url, errorMSg = 'Something Went Wrong !') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMSg} ${response.status}`);
//     //! to throw an self defined message/error to the catch()  method

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No Neighbour Found!');

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country Not Found'
//       );
//     })

//     .then(data => renderCountry(data, `neighbour`))

//     .catch(err => {
//       renderError(`Something went Wrong 🎇  ${err.message}. Try Again!!`);
//     })

//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// ? #13 Coding challenge

///////////////Coding Challenge //////////////////////
// do this after countries

// ? #14 behind the scenes

// ?16 creating simple promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //*executer function

//   console.log('Lottery draw is happening here 🔮🔮🔮🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win the lottery 😄😄😄');
//     } else {
//       reject(`You Loose the Lottery😢😢😢`);
//     }
//   }, 1000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //* promisifying the set timeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`i waited for 1 sec`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 2 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 3 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 4 second`);
//     return wait(1);
//   });

// ? #17 promisfy geolocation API

// const getPosition = function name(params) {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => console.log(position),
//     //   err => reject(err)
//     // );

//     //+ it is same as above but argument assign automatically

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// ? 19 consuming promises with async await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    const apiKey = `12594082499165416140x516`;
    //GeoLocation
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;
    // console.log(lat, lng);

    // console.log(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`);

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`
    );

    if (!resGeo.ok) throw new Error(`Problem gettting geo data`);

    const dataGeo = await resGeo.json();

    // console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    ); //!it will first rsolve the first await promise and then rest of the code will be executed

    // fetch(`https://restcountries.com/v2/name/${country}`).then(function (res) {
    //   return console.log(res);
    // }); //! this is same as above code

    const data = await res.json();

    renderCountry(data[0]);
    // console.log(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err); //! will catch error incase of the problem
    renderCountry(`Something Went wrong ${err.message}`);

    //Reject promise from returned function;
    throw err; //* rethrowing the error so that we can propogate it down
  }
};

//? #20 Error handling

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (e) {
//   alert(e.message);
// }
/// implemeted above

//? #21 Returning values from async function

// console.log(`1: i will get the location`);

// const city = whereAmI(); //*runs in the background but first it will return the promise and after that when the promise will be fullfilled this will return the value

// console.log(city); //* async always return a promise

//* instead of the above we can use then()

// whereAmI()
//   .then(city => console.log(`1: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: finished getting location`)); //* returned from then will be assigned to the city

// console.log(`3: got the location`);

//* asunc await in iffe
//! same as above code

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (error) {
//     console.error(`2: ${error.message}`);
//   }
//   console.log(`3: Finished getting location`);
// })();

//?  #22 Running Promises in parrallel

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//* in this we will call 3 ajax call but all work one after another but this takes lot of time
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('portugal', 'canada', 'india');

//+ above code better

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    //* if one promise rejects all reject

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

// get3Countries('portugal', 'canada', 'india');

//? #23 promise Combinators

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/turkey`),
    getJSON(`https://restcountries.com/v2/name/russia`),
  ]);
  // console.log(res);
  //* shortcircuits when one settles
})();

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too too long! ${sec}`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/russia`),
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeOut(10),
  timeOut(1),
]).then(data => console.log(data));
//! after 1 sec this function will be called and all the other promise will be cancelled because .race only waits for the one  to settle

//+ Promise.allSettled

//! it never shortcicuits when one of the promise rejects
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('Error'),
  Promise.resolve('success'),
  Promise.resolve('success'),
]).then(res => console.log(res));

//+ promise.any [es2021]

//* it returns first fullfilled promise if any of the rejects

Promise.any([
  Promise.reject('error1'),
  Promise.reject('Error'),
  Promise.resolve('success2'),
  Promise.resolve('success4'),
]).then(res => console.log(res));
