'use strict';
// 例題1) 繰り返し処理forを使って、
// コンソールに1から3まで順に表示。

// for(let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// 例題2) 配列['a', 'b', 'c']の値を、
// for文を利用して、
// 1つずつコンソールに出力
let arr = ['a', 'b', 'c'];
// for(let i = 0; i < 3; i++) {
//   console.log(arr[i]);
// }

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

