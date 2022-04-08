'use strict'

// let arrayFruits = new Array(); 생성자로 배열 생성하는 법
// arrayFruits.push('사과');

let arrayFruits = ['사과', '배','수박', '포도', '키위', '수박', '레몬'];

// let inputText = prompt('찾는 과일','과일명');
// for (let i = 0; i < arrayFruits.length; i++){
//   // console.log(arrayFruits[i]);
//   if (inputText == arrayFruits[i]){
//     alert(`맛있는 ${arrayFruits[i]}`);
//   }
// }

//--------------------------------
// for구문에서 특정 구간에서 for구문 탈출
// let outPut = '';
// for (var i = 0; i < 10; i++) {
//   outPut += '@';
//   console.log(outPut);
//   if (i == 5){
//     console.log('여섯번째 입니다.')
//     break;
//   }
// }
//------------------------------------

//재고확인
let inputText = prompt('과일명을 입력하세요','과일명');
let checkNum = 0; //true false도 가능 , 0재고가 없다, 1=재고있다.
for (var i = arrayFruits.length - 1; i >= 0; i--) {
  if (inputText == arrayFruits[i]){
    alert(`맛있는 ${arrayFruits[i]}`);
    checkNum = 1;
    // break; //첫번째 재고 확인 후 종료
  } else if (i == 0){ //재고확인을 끝낸 마지막 인덱스
    console.log(`재고확인: ${checkNum}`);
    if (checkNum != 1){ //==0도 가능
    alert(`해당 과일의 재고가 없습니다.`)
    }
  }
}
