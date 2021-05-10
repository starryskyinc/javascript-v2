'use strict';
// 例題: ユーザーオブジェクトの操作
// 変数userを用意
// 下記のオブジェクトを作成
// name: Taro Yamada
// gender: man
// birthYear: 1990
// 各値を、プロパティ（キー）を指定して、
// 取り出してコンソールに表示

// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);

// オブジェクト初期化子
let user = { name: 'Taro Yamada',
gender: 'man', birthYear: 1990};
console.log(user);

// ドット記法
console.log(user.name);
console.log(user.gender);
console.log(user.birthYear);

// ブラケット記法
console.log(user['name']);
console.log(user['gender']);
console.log(user['birthYear']);

// 個数
console.log(Object.keys(user).length);

// プロパティ（key）を取得
let keys = Object.keys(user);
console.log(keys);

// 追加
// user.prefecture = 'Kanagawa';
user['prefecture'] = 'Kanagawa';
console.log(user);

// 値の書き換え
// user.prefecture = 'Chiba';
user['prefecture'] = 'Chiba';
console.log(user);

// 結合
let obj1 = { a: 1, b: 2, c:3 };
let obj2 = { d: 4, e: 5, f:6 };
let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);

// 空のオブジェクト
let person = {};
console.log(person);