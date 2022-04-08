'use strict'

let num = prompt('숫자를 입력하세요', '숫자'); //숫자입력안하고 확인 누르면 콘솔에 숫자라고 입력됨

//숫자 입력하지 않고 확인을 누른 경우 || 빈칸으로 입력한 경우
if (num === '숫자' || num == '') { //조건 A OR B 를 의미하고 하나만 true여도 true반환
  alert('입력된 숫자가 없습니다.')
} else {
   num = Number(num);
   const numCheck = 0;
   if (isNaN(num)) {
     alert(`숫자를 입력해 주세요`)
   } else if (num < numCheck) {
     alert(`입력하신 숫자 ${num}은 음수입니다.`)
   } else if (num > numCheck) {
     alert(`입력하신 숫자 ${num}은 양수입니다.`)
   } else if (num == 0) {
     alert(`입력하신 숫자는 ${num}입니다. `)
   }
}
