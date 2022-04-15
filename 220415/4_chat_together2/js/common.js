'use strict'

// let htmlTxt = ''; //전역변수
let inputTxt = ''; //전역변수

function inputChat(event) { //키보드 타이핑 및 엔터버튼 실행
  if (window.event.keyCode == 13) { //엔터눌렀을때 실행
    if (event.value != '') { //input에있는 텍스트가 비어있지 않을때
      chattingFunc(event, 0);
      clearTxt(inputTxt, event, 0); //i==0은 키보드
    }
  }
}

function sendTxt(e) { //보내기 버튼 실행
  if (e.previousElementSibling.value != '') { //입력창에 어떤값이 있을때
    chattingFunc(e, 1); //어떤 값 있을때만 실행
    clearTxt(inputTxt, e, 1); //i==1은 버튼으로 받은거다
  }
}

// i로 키보드로 받은건지 버튼으로 받은건지 구분
//엔터, 보내기클릭시 비워지게
function clearTxt(t, e, i) { //t:htmlTxt, e:event
  t = '';
  inputTxt = t;
  if (i == 1) { //send버튼으로 보냈을때
    e.previousElementSibling.value = '';
  } else { //i==0
    e.value = '';
  }
}

function chattingFunc(e, i) { //this중요 바뀌면안됨
  // console.log(e.previousElementSibling.value);
  if (i == 1) { //엔터, 버튼 으로 들어온값 구분 (보내기버튼)
    inputTxt = e.previousElementSibling.value;
  } else { //(엔터)
    inputTxt = e.value;
  }
  // console.log(elem[0].innerHTML); //elem(All)은 배열로 반환,안에있는 값 가져옴
  //scrollTop으로 채팅창 올라가게

  let thisClassName = e.getAttribute('class'); //이걸로 a,b,c구분
  let elem = document.querySelectorAll('.chat-box');
  let elemLeng = elem.length;
  let txt = []; //채팅창에서 입력값 받기
  let htmlTxt = []; //채팅창 내용 담을 변수
  console.log(thisClassName);

  for (let i = 0; i < elemLeng; i++) {
    htmlTxt[i] = elem[i].innerHTML; //기존 채팅 목록을 가져옴
  }
  if (thisClassName == 'user-a') {
    txt.push(`<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);
  } else if (thisClassName == 'user-b') { //b는 두번째 창에서 오른쪽에 있어야함
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
  } else {
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c right"><div class="txt">${inputTxt}</div></div>`);
  }
  for (let i = 0; i < elemLeng; i++) {
    htmlTxt[i] += txt[i]; //push로 받은거 넣음
    elem[i].innerHTML = htmlTxt[i]; //입력된 값을 포함하여 대화창으로 다시 입력
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight;
    //스크롤이 생겨서 최신 대화내용이 스크롤 영역으로 들어가서 안 보일 경우 올려주는 역할
  }

  //-----배열로 정리하기 전--------
  // let htm = elem[0].innerHTML; //크리스기존 채팅 목록을 가져옴
  // let htm = elem[1].innerHTML; //제인
  // let htm = elem[2].innerHTML; //탐
  //
  // if (thisClassName == 'user-a') {
  //   htm += `<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-a"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-a"><div class="txt">${inputTxt}</div></div>`;
  // } else if (thisClassName == 'user-b') { //b는 두번째 창에서 오른쪽에 있어야함
  //   htm += `<div class="line char-b"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-b right"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-b"><div class="txt">${inputTxt}</div></div>`;
  // } else {
  //   htm += `<div class="line char-c"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-c"><div class="txt">${inputTxt}</div></div>`;
  //   htm += `<div class="line char-c right"><div class="txt">${inputTxt}</div></div>`;
  // }
  //
  // elem[0].innerHTML = htmlTxt1;
  // elem[1].innerHTML = htmlTxt2;
  // elem[2].innerHTML = htmlTxt3;
  // elem[0].scrollTop = elem[0].scrollHeight - elem[0].offsetHeight;
  // elem[1].scrollTop = elem[1].scrollHeight - elem[1].offsetHeight;
  // elem[2].scrollTop = elem[2].scrollHeight - elem[2].offsetHeight;
  //------------

}
