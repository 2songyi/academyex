'use strict'
// 일반함수 표기
// function() {

// }
let commonFunc = function(){
  console.log('일반표기함수 입니다.')
}

// 선언적 함수
function numFunc(){

}

// arrow function 화살표함수
// ES6이상 사용
let arrowFunc = () => {
  console.log('화살표함수 입니다.')
}

commonFunc();
arrowFunc();

// 즉시실행함수
(function(){
  console.log('즉시실행함수')
})(); //따로 함수 호출하지 않아도됨
