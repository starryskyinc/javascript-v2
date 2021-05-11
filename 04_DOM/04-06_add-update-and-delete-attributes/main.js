'use strict';
// class属性を追加・更新(赤)
let setRedClassButton = document.getElementById('setRedClassButton');
setRedClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.setAttribute('class', 'red');
}, false);

// class属性を追加・更新(青)
let setBlueClassButton = document.getElementById('setBlueClassButton');
setBlueClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.setAttribute('class', 'blue');
}, false);

// class属性を削除
let removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.removeAttribute('class');
}, false);
