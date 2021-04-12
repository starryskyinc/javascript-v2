'use strict';
// 演習：数取器のプログラム
let num = 0;
function updateCounter(n) {
  const counter = document.getElementById('counter');
  counter.textContent = n;
}
function countUp() {
  num++;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

function reset() {
  num = 0;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

countUpButton.addEventListener('click', countUp, false);
resetButton.addEventListener('click', reset, false);

