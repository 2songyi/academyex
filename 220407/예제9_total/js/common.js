'use strict'

//입력값을 1씩 빼서 다 더하는 함수
let total = 0;
let inputText = prompt('점수입력');
inputText = Number(inputText);
let count = 0;


// function repeat(i) {
//   if (count == 0) {
//     total += i;
//   } else if (i == 0) {
//     return 0; //return false
//   } else {
//     total += i;
//   }
//   i--;
//   count++;
//   repeat(i);
// }
//
// repeat(inputText);
// alert(`total: ${total}`);


function repeat(i){
if (i == 0){
  return 0;
}
total += i;
i--;
repeat(i);
}

repeat(inputText);
alert(`합계는 ${total}입니다.`)
