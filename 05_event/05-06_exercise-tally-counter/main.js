'use strict';
// 演習：数取器のプログラム
let num = 0;

function updateCounter(num) {
  const counter = document.getElementById('counter');
  counter.textContent = num;
}

function countUp() {
  num++;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num)
}

function reset() {
  num = 0;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

const countUpBtn = document.getElementById('countUpButton');
countUpBtn.addEventListener('click', countUp, false);

const resetBtn = document.getElementById('resetButton');
resetBtn.addEventListener('click', reset, false);




