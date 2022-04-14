'use strict'

let t = null;

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let amPm = 'AM';

  //오늘 날짜
  let year = today.getFullYear();
  let mon = today.getMonth() + 1;
  let date = today.getDate();
  console.log(`${year}/${mon}/${date}`);
  document.querySelector('.date').innerHTML = `${year}/${mon}/${date}`;

  // am pm 표시하기
  if (h >= 12) {
    amPm = 'PM';
    // h = h - 12;
  }

  // if 조건문
  if (h >= 9 && h <=17) {
    if (h >= 12 && m >= 50 ) { //점심시간
      if (h <= 13 && m <= 59) {
        document.querySelector('#txt').innerHTML = `<p>점심시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/balloon.png)';
        document.body.style.backgroundSize = '50%';
      }
    }
  }

  if (m >=50) { //쉬는시간
        document.querySelector('#txt').innerHTML = `<p>쉬는시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
        document.body.style.backgroundSize = '50%';
      }
      else if (h == 9) {
        document.querySelector(`#txt`).innerHTML = `<p>1교시 수업시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 10) {
        document.querySelector(`#txt`).innerHTML = `<p>2교시 수업시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 11) {
        document.querySelector(`#txt`).innerHTML = `<p>3교시 수업시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 12) {
        document.querySelector(`#txt`).innerHTML = `<p>4교시 수업시간 입니다!</p>\n${h}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 14) {
        document.querySelector(`#txt`).innerHTML = `<p>5교시 수업시간 입니다!</p>\n${h-12}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 15) {
        document.querySelector(`#txt`).innerHTML = `<p>6교시 수업시간 입니다!</p>\n${h-12}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 16) {
        document.querySelector(`#txt`).innerHTML = `<p>7교시 수업시간 입니다!</p>\n${h-12}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h == 17) {
        document.querySelector(`#txt`).innerHTML = `<p>8교시 수업시간 입니다!</p>\n${h-12}:${m}:${s} ${amPm}`;
        document.body.style.backgroundImage = 'url(./img/board.png)';
      } else if (h > 17) {
        document.querySelector(`#txt`).innerHTML = `${h-12}:${m}:${s} ${amPm}`;
      }

  // 정각되기 10초전 빨갛게
  // if (m == 59 && s >= 50) {
    if (s >= 50) {
      document.body.style.color = 'red';
    } else if (s < 50){
      document.body.style.color = 'white';
    }
    // }

  t = setTimeout(startTime, 1000);
}

//버튼 클릭시 자리비움텍스트
function textAdd() {
  let text = ' 잠시 자리 비움 😉🤚';
  document.querySelector('h3').innerHTML = text;
  console.log(text);
}


// 00:00:00
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
