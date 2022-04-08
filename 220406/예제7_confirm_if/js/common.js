'use strict'
// confirm test
let inputText = confirm('회원가입을 하시겠습니까?');
console.log(inputText);

// if (inputText == true){
//   alert('회원가입이 완료되었습니다.')
// } else {
//   alert('회원가입이 취소되었습니다.')
// }

if (inputText){
  alert('회원가입이 완료되었습니다.')
} else {
  alert('회원가입이 취소되었습니다.')
}
