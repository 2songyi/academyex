'use strict'
const money = 10000; //현재보유금액
let fruitX = prompt('사과의 가격을 입력하세요.');
let fruitY = prompt('배의 가격을 입력하세요.');
fruitX = Number(fruitX);
fruitY = Number(fruitY);
let totalFruit = fruitX + fruitY;
alert(`사과의 가격은 ${fruitX}이고, 배의 가격은 ${fruitY}입니다.\n총 지불 금액은 ${totalFruit}입니다.`)

if (money == totalFruit){
  alert('적당하네요. 살게요~')
} else if( money > totalFruit) {
  alert('가격이 싸네요. 살게요!')
} else {
  alert('너무 비싸요. 안살게요...')
}
