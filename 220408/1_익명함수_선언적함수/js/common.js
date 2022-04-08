'use strict'
//함수선언
// var repeat = function(){
//   alert('나는 익명함수 입니다.')
// };

// console.log(repeat); 실행이 아니고 함수 자체를 불러와서 출력함
// console.log(typeof(repeat)); type=function
// repeat();

// function repeat(){
//   alert('나는 선언적함수 입니다.');
// }
// console.log(typeof(repeat));
// console.log(repeat);
// repeat();
/*함수 호출 시 익명함수가 호출되는 이유는 선언적 함수가 먼저 생성되고 익명함수가
나중에 생성되기 때문이다.hoisting으로 나중에 선언된것은 선언 영역의
아래쪽에 배치되기 때문에*/


// 전역변수 / 지역변수

// 전역변수=num
// 지역변수=i,j,sumCalc, checkNum

let num = 10;
function testFunction(i, j){
  let checkNum = 20;
  let sumCalc = i + j + num + checkNum;
  return sumCalc;
}

// console.log(testFunction(1, 2));

let sumTotal =  testFunction(1, 0);
console.log(typeof(sumTotal));
// console.log(sumTotal);
console.log(`함수에서 반환한 값을 출력: ${sumTotal}`)
