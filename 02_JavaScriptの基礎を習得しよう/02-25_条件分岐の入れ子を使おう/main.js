'use strict';
// 例題）2の倍数、かつ、3の倍数のときに、
// メッセージを表示する

// let num = 12;
// if(num % 2 === 0) {
//   if(num % 3 === 0) {
//     console.log(`${num}は、２の倍数、かつ、3の倍数です`);
//   }
// }

let num = 12;
if((num % 2 === 0) && (num % 3 === 0)) {
  console.log(`${num}は、２の倍数、かつ、3の倍数です`);
}