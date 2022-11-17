'use strict';
// console.log(document.querySelector('.message').textContent); //selectez element
// document.querySelector('.message').textContent = 'mniau';
// console.log(document.querySelector('.message').textContent); //DOM manipulation
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 23; //atribuire valoare
// console.log(document.querySelector('.guess').value);
let nr = Math.trunc(Math.random() * 20) + 1;
let a = Number(document.querySelector('.score').textContent);
console.log(a);
let high;
let ver = false;
// document.querySelector('.guess').style.width = '300rem';

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  if (document.querySelector('.guess').value == nr) {
    ver = true;
    document.querySelector('.message').textContent = 'bine mai';
    document.querySelector('body').style.backgroundColor = '#60b347'; //CSS manipulare
    document.querySelector('.number').style.width = '30rem';
  } else if (document.querySelector('.guess').value > nr) {
    document.querySelector('.message').textContent = 'prea mare mai';
    a--;
    document.querySelector('.score').textContent = a;
    console.log(a);
  } else if (document.querySelector('.guess').value < nr) {
    document.querySelector('.message').textContent = 'prea mic mai';
    a--;
    document.querySelector('.score').textContent = a;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (
    Number(document.querySelector('.highscore').textContent) < a &&
    ver == true
  ) {
    high = a;
  }
  document.querySelector('.highscore').textContent = high;
  document.querySelector('.score').textContent = 20;
  a = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  nr = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
