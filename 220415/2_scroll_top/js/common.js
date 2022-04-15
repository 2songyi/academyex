'use strict'
//scroll top

let numY = 0; //y축 scroll변수
let numX = 0;
let elem = document.querySelector('#mydiv');
let ctnElem = document.querySelector('#content');

//y축 scroll 작동 함수
function scrollTopFunc() {
  numY += 10;
  elem.scrollTop = numY; //클릭하는만큼 내려감
  console.log(elem.scrollTop); //스크롤 내린만큼 값 출력
  // console.log(`scroll height : ${elem.scrollHeight}, offset height : ${elem.offsetHeight}`);
  //scrollHight 스크롤 전체의 높이, offsetHeight 스크롤창높이
  // console.log(`scroll width : ${elem.scrollWidth}, offset width:${elem.offsetWidth}`)

  let maxHeight = elem.offsetHeight; //최대값넘어가면 못넘어가게
  if (numY >= maxHeight) {
    numY = maxHeight;
  }
}

function scrollBottomFunc() {
  numY -= 10;
  elem.scrollTop = numY;
  console.log(numY);
  if (numY <= 0) {
    numY = 0;
  }
}

//x축 scroll 작동 함수
function scrollRightFunc() {
  numX += 100;
  elem.scrollLeft = numX;
  console.log(elem.scrollLeft)


  // let maxWidth = elem.offsetWidth;
  // if (numX >= maxWidth) {
  //   numX = maxWidth;
  // }
}

function scrollLeftFunc() {
  numX -= 100;
  elem.scrollLeft = numX;

  if (numX <= 0) {
    numX = 0;
  }
}
