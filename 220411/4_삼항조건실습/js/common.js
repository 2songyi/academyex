'use strict'

let num = prompt('숫자를 입력하세요', '숫자');
// if (num == '' || num == '숫자') {
//   alert('숫자를 입력하세요.')
// }
num = Number(num);
let absNum = Math.abs(num); //절댓값
// console.log(absNum);
num % 2 == 0 ? alert(num + '은 짝수 입니다.') : alert(num + '은 홀수 입니다.')
