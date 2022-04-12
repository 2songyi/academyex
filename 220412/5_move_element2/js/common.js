'use strict'
let pos = 0;
let elem = document.getElementsByClassName('box')[0];
let t = null;
let on = 0; //interval이 진행중인지 판단하는 변수

function startMove() {
  if (on == 0) {
    on = 1;
    t = setInterval(moveFunc, 50);
    function moveFunc() {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

function stopMove() {
  clearInterval(t);
  on = 0;
}

function returnMove() {
  clearInterval(t);
  on = 0;
  pos = 0;
  elem.style.left = pos + 'px';
}
