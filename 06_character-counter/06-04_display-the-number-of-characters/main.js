'use strict';
// イベントハンドラ
function keyUp(e) {
  // console.log('keyUp');
  // console.log(inputText.value);
  // console.log(inputText.value.length);
  // 入力された値を取得
  let str = inputText.value;
  // 残りの文字数
  let num = 10 - str.length;
  console.log(num);
  // 文字数表示部分の要素を取得
  const characterCount = document.getElementById('characterCount');
  // 残りの文字数をセットして表示
  characterCount.textContent = num;
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);