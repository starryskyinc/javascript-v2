'use strict';
const images = [
  {src: 'https://source.unsplash.com/C0zDWAPFT9A', description: '猫の画像1'},
  {src: 'https://source.unsplash.com/fEK4jvgnApg', description: '猫の画像2'},
  {src: 'https://source.unsplash.com/egfS7HzgKcc', description: '猫の画像3'},
  {src: 'https://source.unsplash.com/e-S23SJzFqs', description: '猫の画像4'},
  {src: 'https://source.unsplash.com/Hnwm8ktAd6E', description: '猫の画像5'}
];

// メイン画像の初期値を設定
let image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].description);

// 説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;

// 作成した要素を表示する
let mainImage = document.getElementById('main_image');
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);






