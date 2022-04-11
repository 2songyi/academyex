'use strict'

// 이벤트 리스너 함수 타입 사용방법 1: 선언적 함수
// function getElementNum(){
  // document.getElementById('box').innerHTML = 'test';
// }
//1. html에 함수를 직접 호출하는 방법
//2.
// document.getElementById('btn').addEventListener('click',getElementNum);
/* addEventListener(a,b,c)
a매개변수:string타입 이벤트명을 넣어줌
 b: fuction 타입으로 값을 넣어줌.
 c:boolean 타입입력
 default: false(버블링), true(캡쳐링)*/

 //이벤트리스너 함수타입 사용방법2 : 익명함수
// document.getElementById('btn').addEventListener('click', function(){
//   document.getElementById('box').innerHTML = '익명함수 타입'
// })

function clickBtn(btn, elem, text) {
  let btnSelect = document.getElementById(btn); //이벤트대상
  let elemSelect = document.getElementById(elem); //이벤트 실행시 바꿀대상
  btnSelect.addEventListener('click',function(){
    //btn을 클릭했을때 이벤트내용
    elemSelect.innerHTML = text;
  })
}

clickBtn('btn', 'box', '클릭');
