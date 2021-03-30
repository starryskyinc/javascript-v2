'use strict';
// window.console.log('Hello');
// コンソール出力
// console.log('Hello');

// 警告表示
// window.alert('Are you OK?');

// 確認ダイアログ
// window.confirm('Are you OK?');

// 別のWindowを開く
// window.open('https://www.google.co.jp');

// Windowを閉じる
// window.close();

// スクロール
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  window.scroll(0, 300);
}, false);