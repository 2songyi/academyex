'use strict'
// 변수선언
let array = ['사과', '배', '포도', '복숭아', '오렌지', '키위'];
let obj = {car: '승용차', phone: 'iphone', house: '아파트'}

for (let items of array){
  console.log(items)
} //value출력

for (let itmes in array){
  console.log(itmes)
} //index값 출력

for (let [key, val] of Object.entries(obj)){
  console.log(`key: ${key}, value:${val}`)
} //객체타입 key, value출력

for (let items in obj){
  console.log(items); //key
  console.log(obj[items]);//value
}


//map

let userMap = new Map();
userMap.set('first', '사과'); //key, value
userMap.set('second', '귤');

console.log(userMap);
console.log(userMap.has('first')); //key값에 있으면 true

for (let items of userMap){
  console.log(items);
}
