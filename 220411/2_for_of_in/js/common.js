'use strict'
// 변수선언
let array = ['사과', '배', '포도', '복숭아', '오렌지', '키위'];
//let array = new Array();
let obj = {car: '승용차', phone: 'iphone', house: '아파트'}
//let obj = new Object();
// console.log(typeof(array));
// console.log(typeof(obj));
// console.log(obj);
// console.log(obj.house);
// console.log(obj['house']); //key값 인식하려면 ''해줘야함

for (let items of array) { //반복가능한 객체(iterable), 배열도 객체이며 array, set, map등으로 사용할 수 있다.
  // console.log('for of 구문으로 출력하기 : '+items)
} //배열의 value값만 가져옴

for (let items in array) {
  // console.log('for in 구문으로 index 출력하기 : '+items)//인덱스값
  // console.log('for in 구문으로 value 출력하기 : '+array[items])//value
}

//obj는 iterable하지 않기(순차적으로 나열되어있지 않기)때문에 불가능
// for (let items of obj){ //일반 객체타입은 iterable하지 않기 때문에 for of를 사용할 수 없다.
  // console.log('for of 구문으로 출력하기: '+obj);
// }
for (let [key, val] of Object.entries(obj) ){ //일반 객체타입을 iterable하게 사용하기
  // console.log('for of 구문으로 출력하기: key: '+key+',value: '+val);
}

for (let items in obj){
  // console.log('for in 구문으로 index 출력하기: '+items); //key값만 가져오기
  // console.log('for in 구문으로 value 출력하기: '+obj[items]) //value
  // console.log('for in 구문으로 value 출력하기: '+obj.items) //string타입으로 인식되어 불가능
}

//---map---
let userMap = new Map();
userMap.set('test', 'tt');
// userMap.set('fruit', '오렌지');
// userMap.set('closet', '후드티');
// console.log(userMap); //iterable하니까 for of로 받아 출력 가능
// console.log(userMap.has('test')); //특정데이터가 존재하는지 확인

if (userMap.has('test')){
  console.log('test는 존재합니다.')
  console.log(userMap.get('test'))
  console.log(userMap.size)
}

// for (let items of userMap){
//   console.log(items);
// }
