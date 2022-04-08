'use strict'
// 홀수 짝수 구분해서 별찍기
let outPut = '';
for (let i = 0; i < 10; i++){
  // i 홀수일때 '/*', 짝수일때 '/**', 복합대입연산자로 += output에 추가
  if (i % 2 == 0){
    outPut += '/**';
    console.log(outPut);
  } else if (i % 2 == 1){
    outPut += '/*';
    console.log(outPut);
  }
}
