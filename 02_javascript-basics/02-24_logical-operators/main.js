'use strict';
// && 論理AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// || 論理OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// ! 論理NOT
// console.log(!true);
// console.log(!false);

// ! && ||
// console.log(false && true || true);
// console.log(false && (true || true));

// 例題）運転免許証を持っていて、
// かつ、いわゆるゴールド免許の場合には、
// 「あなたは優良ドライバーです」と表示する。

let hasDriversLicense = false;
let hasGoldLicense = false;

if(hasDriversLicense && hasGoldLicense) {
  console.log('あなたは優良ドライバーです');
}
