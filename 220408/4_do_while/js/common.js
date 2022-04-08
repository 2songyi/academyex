'use strict'
//do-while구문
let foods = ['치킨', '삼겹살', '피자', '만두'];
let count = 0;
do{
  console.log(foods[count]);
  count++;
} while (count < foods.length);
//데이터가 비어있으면 안되는 경우 사용함
