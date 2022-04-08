'use strict'
// 중첩for구문
// 다중배열 or 다차원배열

// let array = [['가', '나', '다'], 'b', ['파리', '런던', '스위스']];
// console.log(array[0][0]);
// console.log(array[0].length);


// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   for (let j = 0; j < 5; j++){
//     console.log(`중첩for ${j}`);
//   }
// }

let getItems = [['반바지', '슬랙스'],['점퍼', '조끼'],['슬립온', '워커', '스니커즈'],['크로스백', '백팩', '클러치백']]

// 중첩for문을 이용해 반바지,스니커즈,백팩을 출력하시오

//--내코드--
// let pants = '반바지';
// let shose = '스니커즈';
// let bag = '백팩'
// for (let i = 0; i < getItems.length; i++) {
//   for (let j = 0; j < getItems[i].length; j++) {
//     if (pants == getItems[i][j]) {
//       console.log(getItems[i][j])
//     } else if (shose == getItems[i][j]) {
//       console.log(getItems[i][j])
//     } else if (bag == getItems[i][j]) {
//       console.log(getItems[i][j])
//     }
//   }
// }

//--강사님코드--
for (let i = 0; i < getItems.length; i++) {
  if (i == 0){//바지 섹션
      outputItems(i, 0);
  } else if (i == 2){//신발
      outputItems(i, 2);
  } else if (i == 3){//가방}
      outputItems(i, 1);
      }
    }


//--코드 리팩토링-- items가져오기 함수 만들기
function outputItems(currentArray, checkIndex){ //currentArray=i, checkIndex=숫자
  for (let j = 0; j < getItems[currentArray].length; j++) {
    if (j == checkIndex){
      console.log(getItems[currentArray][j])
    }
  }
}
