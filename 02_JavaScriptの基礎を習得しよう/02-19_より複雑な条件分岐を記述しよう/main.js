'use strict';
// 例題
// テストの点数xによって、
// 通知表の成績をコンソールに
// 出力するプログラムを書く

// 90点以上 A
// 80点以上 B
// 60点以上 C
// 60点未満 D

let x = 59;
if(x >= 90) {
  console.log('A');
} else if(x >= 80) {
  console.log('B');
} else if(x >= 60) {
  console.log('C');
} else {
  console.log('D');
}
