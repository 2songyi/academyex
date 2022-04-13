'use strict'
// substring
let a = '1234567890';
// let abc = a.substring(2, 5);
// let abc = a.substring(5, 2);
// let abc = a.substring(-5);
// let abc = a.substring(0);
// console.log(abc)

let stringTest = 'Hello this is string';
//substring()메서드 사용해서 hi라는 값 출력하기
// console.log(stringTest.substring(7, 9));

let infoText = '안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세입니다.';
let age = infoText.substring(29, 32);
let name = infoText.substring(17, 20);
let area = infoText.substring(10, 12);

console.log(`나이: ${age}, 이름: ${name}, 지역: ${area}`)
