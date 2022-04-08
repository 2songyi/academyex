'use strict'
//피타고라스 정리 함수
function square(x){
  return x*x;
}
function pytha(width, height){//피타고라스 함수
  // return `${square(width)}, ${square(height)}`;
  return Math.sqrt(square(width) + square(height));
}

console.log(pytha(3,4));
