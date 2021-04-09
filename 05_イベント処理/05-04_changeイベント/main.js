'use strict';
// イベントハンドラ
function handleChange() {
  // 「すべてにチェックボックス」の要素を取得
  const checkAll = document.getElementById('checkAll');
  // name属性がlanguageのチェックボックス要素を取得
  const checkBoxes = document.getElementsByName('language');
  // name属性がlanguageのチェックボックス要素をループ処理
  for(let i = 0; i < checkBoxes.length; i++){
    // 各チェックボックスのチェック状態を、
    //「すべてチェック」の状態に合わせる
    checkBoxes[i].checked = checkAll.checked;
  }
   
}

// checkAllボタンのchangeイベントのイベントハンドラを登録
checkAll.addEventListener('change', handleChange, false);
