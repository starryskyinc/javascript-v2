'use strict';
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);

// 末尾に追加
colors.push('Black');
console.log(colors);

// 先頭に追加
colors.unshift('White');
console.log(colors);

// 更新
colors[1] = 'Aka';
console.log(colors);

// 指定した位置に1つ以上の値を挿入
let insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D');
console.log(insertArr);

// 複数挿入
insertArr.splice(2, 0, 'X', 'Y', 'Z');
console.log(insertArr);

// 指定した位置から削除
insertArr.splice(2, 2);
console.log(insertArr);

// 結合
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(arr1);
console.log(arr2);

// 先頭を削除
let arr3 = ['a', 'b', 'c', 'd'];
arr3.shift();
console.log(arr3);

// 末尾を削除
arr3.pop();
console.log(arr3);
