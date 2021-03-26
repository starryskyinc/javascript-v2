'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  let elements = document.getElementsByName('inputText');
  console.log(elements);
  console.log(elements[0].value);
}, false);
