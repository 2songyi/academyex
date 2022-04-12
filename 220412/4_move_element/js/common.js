'use strict'
// setInterval(function(){ //1000ms초마다 반복 (setTimeout이랑 같음)
//   console.log('test');
// }, 1000);

// move elements
function moveElem() {
  let pos = 0;
  let elem = document.getElementById('animate');
  setInterval(frame, 10); //버튼클릭시 1초마다 frame함수 실행, 1초마다 top에서 1px씩 멀어짐
  function frame() { //중첩함수
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

  }
}
