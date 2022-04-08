'use strict'
let x = prompt('x 숫자를 입력하세요');
let y = prompt('y 숫자를 입력하세요');

x = Number(x);
y = Number(y);
//숫자로 변환 안해주면 아스키코드로 계산됨

alert(`입력값이 입력완료 되었습니다. x값은 ${x}이고, y값은 ${y}입니다.`)

if (x == y){
  alert('x는 y와 같습니다.')
} else if( x > y) {
  alert('x는 y보다 큽니다.')
} else {
  alert('x는 y보다 작습니다.')
}
