'use strict'
// live watch

// (function(){}()); 즉시실행함수로 변경해보기

let t = null
// t = setInterval(startTime, 1000); 인터벌로도 가능함
function startTime() {
  let today = new Date(); //날짜 생성자;
  let h = today.getHours(); //시간
  let m = today.getMinutes(); //분
  let s = today.getSeconds(); //분

//십의자리에 0을 포함시키는 함수
  // if (h < 10) { h = `0` + h; }
  // if (m < 10) { m = `0` + m; }
  // if (s < 10) { s = `0` + s; }
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  if (h > 15 && m > 25){
    document.getElementById('txt').innerHTML = '7교시 수업중입니다.';
  }
  if (h > 15 && m > 49){
    document.getElementById('txt').innerHTML = '7교시 끝. 쉬는시간입니다.';
  }
  if (h > 16 && m >= 0) {
    document.getElementById('txt').innerHTML = '8교시 시작! 수업시간입니다.';
  } else {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }


  // console.log(`${h}:${m}:${s}`);
  // document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;

  t = setTimeout(startTime, 1000);
}

startTime();
