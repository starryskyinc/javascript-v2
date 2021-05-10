'use strict';
// 例題）入賞メッセージの出力。
// 順位numによって、出力するメッセージを変えるプログラム
// 1 → 金賞
// 2 → 銀賞
// 3 → 銅賞
// 4 → 4位
// 5 → 5位
// それ以外の値 → 選外

// let num = 6;
// switch(num) {
//   case 1:
//     console.log('金賞');
//     break;
//   case 2:
//     console.log('銀賞');
//     break;
//   case 3:
//     console.log('銅賞');
//     break;
//   case 4:
//     console.log('4位');
//     break;
//   case 5:
//     console.log('5位');
//     break;
//   default:
//     console.log('選外');
//     // break;
// }

let num = 6;
if(num === 1) {
  console.log('金賞');
} else if(num === 2) {
  console.log('銀賞');
} else if(num === 3 ) {
  console.log('銅賞');
} else if(num === 4) {
  console.log('4位');
} else if(num === 5) {
  console.log('5位');
} else {
  console.log('選外');
}