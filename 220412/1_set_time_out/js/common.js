'use strict'
let setTimeNum;
let num = prompt('숫자를 입력하세요.','숫자');
num = Number(num);

setTimeNum = setTimeout(function(){ //일정시간 이후 로직을 작동시킴
  alert('this is setTimeout.')
}, 3000); //delay ms단위

if (num > 10) {
  clearTimeout(setTimeNum); //setTimeout 정지
  alert('setTimeout 정지하였습니다.')
} else  {
  alert('setTimeout 실행하였습니다.')
}
