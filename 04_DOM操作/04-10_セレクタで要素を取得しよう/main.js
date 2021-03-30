'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  // let element = document.querySelector('.foo');
  // console.log(element);
  // console.log(element.textContent);

  let elements = document.querySelectorAll('.foo');
  console.log(elements);
  for(let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
  }
}, false);
