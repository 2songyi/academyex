'use strict'

function chattingFunc(e) { //this중요 바뀌면안됨
  console.log(e.previousElementSibling.value);
  let elem = document.querySelectorAll('.chat-box');
  let inputTxt = e.previousElementSibling.value;
  let htmlTxt = '';
  // console.log(elem[0].innerHTML); //elem(All)은 배열로 반환,안에있는 값 가져옴
  htmlTxt = elem[0].innerHTML; //기존 채팅 목록을 가져옴
  htmlTxt += `<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`;
  elem[0].innerHTML = htmlTxt;

}
