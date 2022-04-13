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

  if (h >= 12 && m >= 50 || h == 13 && m <= 59) {
  // if (h >= 17 && m >= 26 || h == 13 && m <= 59) {
    document.body.style.backgroundImage = 'url(./img/background_01.gif)'; //파일경로 html기준
    document.body.style.backgroundColor = '#ffffff';
    document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time!</p>\n${h}:${m}:${s}`;
  } else {
    document.body.style.backgroundImage = 'url(./img/background_02.jpg)'; //파일경로 html기준
    document.body.style.backgroundColor = '#67c7b2';
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }

  // 정각되기 10초전 빨갛게
  if (m == 59 && s >= 50) {
    document.body.style.color = 'red';
  }

  t = setTimeout(startTime, 1000);
}

// 13-9 입력하고 클릭하면 텍스트 띄우기
// function innerTxt() {
//   let title = document.querySelector('#input-text').value;
//   // console.log(title);
//   document.querySelector('.content h2 p').innerHTML = title;
// }

// 00:00:00
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
