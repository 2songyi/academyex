'use strict'
/*
<표기 방법에 따른 분류>
익명함수 : function(){}
선언적 함수: function testFunc(){}
<사용방법에 따른 분류>
재귀 함수: function testFunc(){ testFunc(); }
콜백 함수: 다른 함수의 매개변수로 사용되거나 event로 특정시점에 호출되는 함수
비동기적으로 작동될때 사용
*/

function avgCalc(a, b, c) {
  let sum = a + b;
  c (sum); //함수 실행
}

// 익명함수로 콜백함수 호출
avgCalc(10, 30, function(num) {
  let avg = num / 2;
  console.log(avg);
});


//arrow function으로 콜백함수 호출
avgCalc (20, 30, (num) => { //매개변수 하나면 괄호생략가능
  let avg = num / 2;
  console.log(avg);
})

//선언적 함수로 callback함수 부르기
function avg(num) {
  let avg = num / 2;
  console.log(avg);
}

avgCalc(50, 100, avg);
// let sum = 50 + 100;
//avg(sum) -> avg(num)

window.onload = function() {
  document.getElementById('wrap').innerHTML = myFunction();
  function myFunction() {
    return this; //window객체
    //use strict하면 undefined뜸 ES5,6혼용시 발생하는 오류
  }
}
