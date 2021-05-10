'use strict';
// イベントハンドラ
function keyUp(e) {
  // console.log('keyUp');
  console.log(inputText.value);
  console.log(inputText.value.length);
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);