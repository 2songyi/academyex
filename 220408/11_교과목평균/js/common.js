'use strict'
//배열선언
let korean = [85, 75, 88, 90, 95, 97, 77, 80, 100, 88]
let math = [85, 75, 88, 90, 95, 97, 77, 80, 90, 88]
let english = [85, 75, 88, 87, 90, 95, 77, 85, 100, 88]

function avgFunc(arrayNum){
  let total = 0; //점수의 합계
  let scoreLeng = arrayNum.length; //인덱스 개수: 힉생별 점수
  let scoreAvg; //학생들의 평균 점수

  for (let i = 0; i < scoreLeng; i++){
    total += arrayNum[i];
  }
  return scoreAvg = total / scoreLeng;
}

// console.log(avgFunc(korean));
console.log(`국어 평균점수: ${avgFunc(korean)}점, 수학 평균점수: ${avgFunc(math)}점, 영어 평균점수: ${avgFunc(english)}점`)
