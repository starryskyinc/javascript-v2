'use strict';
// 例題１） while文を使って、
// コンソールに1〜3の数字を表示する。
// let i = 1;
// while(i <= 3) {
//   console.log(i);
//   i++;
// }

// 例題2) whileループの途中で
// while文を抜ける。
// （jが5になったら、while文を抜ける。）

let j = 1;
while(j <= 10) {
  console.log(j);
  if(j === 5) {
    break;
  }
  j++;
}