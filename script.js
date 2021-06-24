'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const number = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guess) {
      displayMessage('No Number! ⛔');

      //when player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 correct Number! ');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //when guess is worng
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('😭 Game Over');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.Change').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.show-modal');
const theNum = document.querySelector('.the-num');
const change = document.querySelector('.Change');
const btnChangeNumberOpen = document.querySelector('.change-number');
const changemodal = document.querySelector('.change-modal');

const theChangeNum = document
  .querySelector('.submit')
  .addEventListener('click', function () {
    changemodal.classList.toggle('hidden');
    const sendNum = Number(document.querySelector('.Change').value);
    if (!sendNum && sendNum < 20) {
      displayMessage('Select a number to change');
    } else {
      secretNumber = sendNum;
    }
  });

const openModal = function () {
  modal.classList.toggle('hidden');
  theNum.textContent = secretNumber;
};

const openchange = function () {
  changemodal.classList.toggle('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnChangeNumberOpen.addEventListener('click', openchange);
