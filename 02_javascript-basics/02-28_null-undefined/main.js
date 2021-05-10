'use strict';
// undefined
// 未定義。変数を宣言したが、値は代入していない状態。

// null
// 変数は定義されているが、該当する値が無い状態。

// undefined
let x;
console.log(x);

// null
let item = null;
console.log(item);

if(x === undefined) {
  console.log('undefinedです');
}

if(item === null) {
  console.log('nullです');
}
