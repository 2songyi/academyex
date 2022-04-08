'use strict'
//가로2, 세로3 인 사각형의 넓이는 @입니다.

function sqArea(width, height){
  return width*height;
}
function triArea(width, height){
  return width*height/2;
}

console.log(`가로: 2, 세로: 3 인 사각형의 넓이는 ${sqArea(2,3)}입니다.`);
console.log(`가로: 2, 세로: 3 인 삼각형의 넓이는 ${triArea(2,3)}입니다.`)
