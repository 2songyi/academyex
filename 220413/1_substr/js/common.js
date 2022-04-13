'use strict'
//substr
let nameStr = ['박길동', '홍길동', '이길동'];
let str = 'hello javascript';
let strNum = '20220413';
let numberText = '1234567890';
// console.log(str.length);
// console.log(numberText.substr(1, 1)); //(시작인덱스, 길이)
// console.log(str.substr(0)); //전체가 다 출력
let ntNum_01 = numberText.substr(1, 1);
// console.log(ntNum_01);

console.log(`오늘은 ${strNum.substr(6, 2)}일입니다.\n저는 ${nameStr[0]}입니다.\n나이는 ${numberText.substr(1, 2)}세입니다.`);
