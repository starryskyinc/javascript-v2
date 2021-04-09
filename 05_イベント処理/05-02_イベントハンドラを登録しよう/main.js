'use strict';
const sayHelloButton = document.getElementById('sayHelloButton');
// sayHelloButton.addEventListener('click', function(e){
//   console.log('Hello!');
//   console.log(e);
// }, false);

// sayHelloButton.addEventListener('click', function(){
//   console.log('Hello!');
// }, false);

// sayHelloButton.addEventListener('click', (e) => {
//   console.log('Hello!');
//   console.log(e);
// }, false);

function sayHelloEventHandler(e) {
  console.log('Hello');
  console.log(e);
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

