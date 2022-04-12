'use strict'
let count = 0; //숫자 카운트를 담는 변수
let t = null; // setTimeout을  담는 변수
let timerIsOn = 0; //setTimeout의 진행여부 확인하는 변수

// setTimeout 실행 함수
function timeCount(){ //1초마다 한번씩 카운트 증가시키는 함수
  // console.log('this is timeCount!');
  document.getElementById('stop-watch').innerHTML = count; //화면에 띄우기
  //count가 시작되기전에 띄워야함 아니면 0초부터가 아닌 1초부터 시작됨

  count += 1;
  // if (count == 60){
  //   m += 1;
  //   count = 1;
  // }
  console.log(count);
  t = setTimeout(timeCount, 1000);
}

function startCount(){ //timeCount함수를 실행시키는 함수
  // console.log('this is startCount!');
  if (timerIsOn == 0){
    timerIsOn = 1;
    timeCount();
  } //start버튼이 한번만 먹히게, stop눌렀을때 다시 0으로 만들어줘야함
}

function stopCount(){ //setTimeout을 정지시킴
  clearTimeout(t);
  timerIsOn = 0; //start버튼 먹히게 다시 0으로 초기화
  console.log('정지');
}

//setTimeout은 전역변수이기 때문에 clear했다가 다시 start해도 계속 값 이어짐

function resetCount(){ //리셋함수
  clearTimeout(t);
  count = 0;
  timerIsOn = 0;
  document.getElementById('stop-watch').innerHTML = count;
}
