'use strict'
// 배열선언
// let array = [123, 345, 678];
// console.log(array[2]);
// let lastIndex = array.length - 1;
// console.log(`첫번째 배열 값은 ${array[0]}입니다.`)
// console.log(`마지막 배열 값은 ${array[lastIndex]}입니다.`)

// let inputText = prompt('과일을 입력해주세요.','과일명');
const myFruit = '포도';
let count = 0;
let fruit = ['사과', '배', '수박', '포도'];
// fruit.push('딸기'); //배열의 마지막에 넣기
// fruit.push('오렌지');
// fruit.push('파인애플');
// fruit.pop(); //제일 마지막 값 삭제
// fruit.pop();
// fruit.pop();
// fruit.pop();
// fruit.shift();//배열의 첫번째 값 제거 메서드

// console.log(fruit.shift()); //첫번째 값 추출
// console.log(fruit); //추출 후 첫번째 값 삭제 됨
// fruit.unshift('오렌지'); //배열의 첫번째에 값 삽입
// console.log(fruit);
//
// fruit.splice( 1, 0, '블루베리'); //인덱스1에 블루베리를 추가
// console.log(fruit);
// fruit.splice( fruit.length, 0, '키위');
// console.log(fruit);

// alert(`총 과일의 개수는 ${fruit.length}개 입니다.`)



//함수 선언
//재귀 함수: 하나의 함수를 반복하여 작동하는 함수. 본인 스스로 호출
function checkFunc() {
  //실행코드 작성 영역
  if (count < fruit.length){
    console.log(fruit[count]);
    if (myFruit == fruit[count]){
      console.log(`${fruit[count]}는 제가 좋아하는 과일입니다.`)
    }
    count++;
    checkFunc();
  } else {
    alert('더 이상 과일이 없습니다.')
  }
}
//함수 호출
checkFunc();
