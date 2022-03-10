'use strict';
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'correct number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;


document.querySelector('.guess').value=23;

console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😡 no number';
  }
  //when the is correct answer
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = '30rem';
  }
  //when number is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when number is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});
