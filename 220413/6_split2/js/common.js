'use strict'
// split2
let divTest = document.getElementsByClassName('txt')[0];
console.log(divTest.innerText);
//textContent말고 innerText로 가져오는거도 가능함
let str = divTest.textContent.split(' ');
console.log(str);
