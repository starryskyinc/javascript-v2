'use strict';

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  // alert('clicked!');
  // IDによるノードの取得
  let headerTitle = document.getElementById('headerTitle');
  // let headerTitle = document.getElementById('hoge');
  console.log(headerTitle);
  // コンテンツの取得（テキストの取得）
  console.log(headerTitle.textContent);
}, false);