'use strict'
// query selector

//input에 입력한 텍스트  버튼클릭시 타이틀을 그걸로 변경
function innerTxt() {
  let title = document.querySelector('#input-text').value;
  // console.log(title);
  document.querySelector('.content h2 p').innerHTML = title;
}
