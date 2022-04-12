'use strict'
// move elements
let elem = document.getElementsByClassName('box')[0];
let xMove = 0;
let yMove = 0;
let xDirection = 1;
let yDirection = 1;
let moveInterval = setInterval(move, 5);

console.log(window.innerHeight);

function move() {
  xMove += 1 * xDirection;
  yMove += 1 * yDirection;
  if (xMove > window.innerWidth - 100 || xMove < 0) { //윈도우 width를 벗어날때 반대로 움직여야함(공 지름만큼 뺴줘야함)
    xDirection = xDirection * (-1);
  }

  if (yMove > window.innerHeight - 101 || yMove < 0) {
    yDirection = yDirection * (-1);
  }
  elem.style.left = `${xMove}px`;
  elem.style.top = `${yMove}px`;
}
