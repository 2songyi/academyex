'use strict'

let num = prompt('숫자를 입력하세요');
num = Number(num);

const numCheck = 0;

if ( num < numCheck ){
  alert(`입력하신 숫자 ${num}은 음수입니다.`)
} else if ( num > numCheck ) {
  alert(`입력하신 숫자 ${num}은 양수입니다.`)
} else if ( num == 0 ){
  alert(`입력하신 숫자는 ${num}입니다. `)
}
