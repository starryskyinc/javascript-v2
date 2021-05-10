'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  // IDによるノードの取得
  let headerTitle = document.getElementById('headerTitle');
  // テキストの置換
  headerTitle.textContent = 'タイトルが変更されました';
}, false);