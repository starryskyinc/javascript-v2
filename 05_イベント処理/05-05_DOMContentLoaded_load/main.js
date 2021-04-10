'use strict';
// 例題
// 「Now Loading...」表示 + 画像表示をする
// DOMContentLoadedイベントが発生したら、alertダイアログを表示する。
// loadイベントが発生したら、「Now Loading...」を非表示にする

// DOMCOntentLoaded
document.addEventListener('DOMContentLoaded', function() {
  alert('DOMContentLoaded!');
}, false);

// load
window.onload = function() {
  const nowLoading = document.getElementById('nowLoading');
  nowLoading.style.display = 'none';
}