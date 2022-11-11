'use strict';

// //? #5 Constructor functions and new operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //! never do this because it will create function for each object
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

// //?6 Prototypes

// //! each and every function in js has prototype

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   //! protypal inheritace of the Person object
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// //! every object has access to the protype of person

// console.log(jonas.__proto__ === Person.prototype);

// //!Person.prototype is  the prototype of jonas but not the prototype of the Person itself

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';

// //? #8 ........................

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor); //! will point back to the person itself

// const arr = [3, 4, 4, 4, 5, 6, 8, 2, 21, 3, 5, 6, 7, 3, 5, 7, 4]; //* same as => new Array ==[]
// console.log(arr.__proto__); //! contains prototype of array and inherits methods that we use in the arrays

// console.log(arr.__proto__ === Array.prototype); //! Prototype property of that constructor is gonna prototype be all the objects created by that constructor

// console.log(arr.__proto__.__proto__); //! first prototype here is an object so it has access to all the objects  of the prototype

// Array.prototype.unique = function () {
//   return [...new Set(this)]; //* self defined prototype of the array constructor now all arrays will inherit this method
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1); //! all the dom functions will work

// console.dir(x => x + 1);

//? #9

//+ Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// // bmw.accelerate();
// // mercedes.accelerate();
// bmw.brake();
// bmw.accelerate();

//? #10 ES6 classes

// //* class expression

// // const PersonCl = class {};

// //* class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     //!constructor wil get called automatically when we create a new instance
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // calcAge() {
//   //   console.log(2037 - this.birthYear); //! all the objects we write in the class will in the prototype of the class and will be added to the .prototype property of the class
//   // }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //* sets a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     //* this.fullname creates a conflict because constructor and the setter is trying to set  the same property so we use this._firstname this creates a new variable
//     else alert(`${name} is not a full name`);
//   }

//   //* gets a value from a  property
//   get fullName() {
//     return this._fullName;
//   }

//   //- static method can use without object
//   static hey() {
//     console.log(`hey there`); //! created a static method which does not require objext and can be accessed via constructor
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('jessica', 1996);

// console.log(jessica);

// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`); //! we can also use the old way to declare function using prototypal inheritance outside the class
// };

// jessica.greet();

//? #11 getters and setters

// const account = {
//   owner: 'jonas',
//   movements: [200, 300, 400, 120],
//   get latest() {
//     return this.movements.slice(-1).pop(); //*  useful to read a certain property before doing some calculations
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const jessica = new PersonCl('jessica davis', 1996);

// console.log(jessica);

// //? #12 static methods

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   //! created a static method which does not require objext and can be accessed via constructor
//   console.log(`hey there`);
//   console.log(this);
// };

// const jonas = new Person('jonas', 1997);

// Person.hey();
// // jonas.hey();

// PersonCl.hey();

//? #13 object create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// console.log(steven);

// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init(`sarah`, 1996);
// sarah.calcAge();

//? #14 coding challenge #2

// Coding Challenge #2

//+ Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

//+ Coding challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

//? #15 inheritance

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // //*Linking protoype

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student(`Mike`, 2020, `Computer Science`);

// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
//? Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (battery, make, speed) {
//   Car.call(this, make, speed);
//   this.battery = battery;
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.battery = chargeTo;
// };

// EV.prototype = Object.create(Car);

// EV.prototype.accelerate = function () {
//   this.speed += 10;
//   this.battery--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.battery}%`
//   );
// };

// const tesla = new EV(20, 'tesla', 120);
// tesla.accelerate();
// console.log(tesla);

// tesla.accelerate();

//? #17 inheritance between the classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
// }

// class Student extends PersonCl {
//   constructor(fullname, birthYear, course) {
//     //* always call the super first we will then be able to access the this keyword

//     super(fullname, birthYear); //! constructor of the parent function and the arguments to the parent

//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   //-Overriding the previous calcAge()
//   calcAge() {
//     console.log(
//       `i am ${
//         2037 - this.birthYear
//       } years old, but as a student i feel more like this ${
//         20137 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new Student('Martha jones', 2012, `Computer science`);
// // const martha = new Student('Martha jones', 2012); //* if we dont want have any new poperties we can skip child contructor and super will automatically be called

// martha.introduce();
// martha.calcAge();

//? #19 Another Class example
class Account {
  //*public fields
  local = navigator.language;

  //* private fields only supported in chrome browser
  #movements = [];

  //! fields will be only added to instances not to the prototype

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //-ptotected property marked with _
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thannks ${this.owner}`);
  }

  //! now we will use this to access the private feild and not change it
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);

    return this; //* by returning now we can chain methods because it will now point to the same object after finishing the function
  }

  withdraw(val) {
    this.deposit(-val);
    return this; //* by returning now we can chain methods because it will now point to the same object after finishing the function
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
    }
    return this;
  }

  //* private Methods
  //! no browser supports it at this time
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account(`jonas`, `Eur`, 1111);

//acc1.movements.push(250); //* we are directly manipu;ating the array we should use method for that
//acc1.movements.push(-450);

acc1.deposit(250);
acc1.withdraw(-150);
acc1.requestLoan(1000); //! no encapsu;ation in the code

console.log(acc1);
console.log(acc1.pin); //! accessible outside the class

//? #20 Encpsulation

// acc1.movements.push(250);
//just a convention not truly protected

//? #21 Encapsulation private class fields
//public fields
//private fields
//private methods
//public methods

console.log(acc1);
// acc1.#movements.push(250); //! cannot acces outside the class

//? 22 Chaining Methods

acc1.deposit(200).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
//*method chaining with the help of returning this from the function
