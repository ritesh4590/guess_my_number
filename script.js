'use strict';

// document.querySelector('.message').textContent = '🎉Correct Number!!';
// document.querySelector('.number').textContent = 50;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let scoreLeft = Number(document.querySelector('.score').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {
  scoreLeft = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = scoreLeft;
  console.log('secretNo-', secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number...';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Please enter no between 1 and 20...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!!';
    document.querySelector('.highscore').textContent = scoreLeft;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (scoreLeft > 0) {
      document.querySelector('.message').textContent = 'Too high!!📈';
      scoreLeft--;
      document.querySelector('.score').textContent = scoreLeft;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
    }
  } else if (guess < secretNumber) {
    if (scoreLeft > 0) {
      document.querySelector('.message').textContent = 'Too Low!!📉';
      scoreLeft--;
      document.querySelector('.score').textContent = scoreLeft;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
    }
  }
});
