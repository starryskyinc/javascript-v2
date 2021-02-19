'use strict';
let temperature = 29;
if (temperature > 28) {
  console.log('冷房稼働！');
}

console.log(29 > 28);
console.log(20 > 28);

// 以上
let a = 100;
if (a => 100) {
  console.log('100以上');
}

// より大きい
let b = 101;
if(b > 100) {
  console.log('100より大きい');
}

// 以下
let c = 100;
if (c <= 100) {
  console.log('100以下');
}

// 未満
let d = 99;
if (d < 100) {
  console.log('100未満');
}

// 等しい
let e = 100;
if (e == 100) {
  console.log('100と等しい');
}

// 等しくない
let f = 111;
if(f != 100) {
  console.log('100と等しくない');
}

// if / else
// let g = 101;
let g = 99;
if (g >= 100) {
  console.log('100以上');
} else {
  console.log('100以上では無い')
}