'use strict'
//var, let, const test
var numVar; //변수 선언
numVar = 10; //할당 및 초기화
console.log(numVar);
var numVar; //재선언
console.log(numVar);

let numLet;
numLet = 20;
console.log(numLet);
// let numLet; 재선언 불가능
numLet = 30; //재할당
console.log(numLet);

const numConst = 40; //초기화와 선언을 동시에 해야함
// numConst = 50; 재선언 재할당 불가능
console.log(numConst);
