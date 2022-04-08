'use strict'
// 숫자나열
// 변수선언 (전역변수)
let num = ''; //숫자를 담을 변수
let count = 0; //숫자 개수

function repeat(i, j){ //i 시작숫자 지역변수
  if (count == 0){//초기실행
    num += i;
  } else if (i > j){ //최대숫자 제한
    return 0;
  } else { //초기실행이 아니라면 콤마 추가
    num += ',' + i;
  }
  i++;
  count++;
  repeat(i, j);
}

repeat(50, 80);
console.log(num);
