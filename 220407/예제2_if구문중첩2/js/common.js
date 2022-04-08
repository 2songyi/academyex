'use strict'
// 변수 선언

let num = prompt('숫자를 입력하세요');
num = Number(num);

const numCheck = 5; //범위 조건 변수
const numCheck2 = 2; //배수 조건 변수
//이렇게 변수 정의하고 이걸로 숫자 대체 가능

if ( num < numCheck ) {
    alert(`숫자 ${num}은/는 5보다 작습니다.`)
    if ( num % numCheck2 == 0 ){
      alert(`숫자 ${num}은/는 ${numCheck2}의 배수입니다.`)
    } else if ( num != numCheck2 ) {
      alert(`입력한 값은 3과 같지 않습니다.`)
    }
} else {
  alert(`숫자가 ${numCheck}보다 크거나 같습니다.`)
}
