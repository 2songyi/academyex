'use strict'
// random number

let num = prompt('1~10숫자를 입력해주세요.','숫자');
// num = Math.random()*10; //난수받기
// num = Math.ceil(num); //올림
// console.log(Math.ceil(Math.random()*10));
let randomNum = Math.random()*10;
let sumNum = num + randomNum;
if (sumNum > 10) {
  num = sumNum - 10;
} else {
  num = sumNum;
}

// Math.floor() 소수점 버림
// Math.round() 소수점 반올림

function getNumber() {
  document.querySelectorAll('div')[num].setAttribute('class', 'selected');
  //[]안에는 랜덤숫자. setAttribute로 그 순번 태그에 class를 넣어줌
}
