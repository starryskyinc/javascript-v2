'use strict';
let birthYear = '2000';
let age = 18;

console.log(birthYear + age);
console.log(age + birthYear);

// '文字列' + 数値 ＝ '文字列'
// 数値 + '文字列' ＝ '文字列'
// 数値 + 数値 ＝ 数値
// '文字列'+ '文字列'＝ '文字列'

console.log(Number(birthYear) + age);
console.log(Number('Nakamura'));

console.log(age + '歳');
console.log(String(age) + '歳');

