'use strict';
// 例1) タイマー処理
// 3秒経過したら、
// コンソールに「Timeout!」と表示する。

// const displayMessage = function() {
//   console.log('Timeout!');
// }

// setTimeout(displayMessage, 3000);

// 例2）
// お名前の入力が完了したら、
// 「Hello! 〇〇-san.」と
// コンソールに表示する

// コールバック関数
function greeting(name) {
  console.log('Hello!' + name + '-san.');
}

function inputUserName(callback) {
  let name = prompt('あなたのお名前を入力してください！');
  callback(name);
}

inputUserName(greeting);
