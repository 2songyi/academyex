'use strict'
window.onload = function() {

  init(); //window가 로드된 이후 초기화 코드
  // createInputFunc('male', 'checkbox', contain);
  // createLabelFunc('male', '남성', contain);
  // createInputFunc('female', 'checkbox', contain);
  // createLabelFunc('female', '여성', contain);
}

//공통부분 전역변수
let contain = document.createElement('div');
contain.classList.add('wrap');

function init() {
  let btn = document.createElement('div'); //태그 생성만
  btn.id = 'btn';  //btn.classList.add 였는데 id는 단일요소라 id만 쓰면됨
  btn.removeAttribute('id'); //제거
  let text = document.createTextNode('click!');
  // btn.append(text); //after
  // let contain = document.createElement('div');
  // contain.classList.add('wrap');//contain 요소에 wrap class 추가하기
  // contain.append(btn);
  console.log(contain);
  let divBox = document.createElement('div');
  // divBox.prepend(document.createTextNode('div-box')); //이 안에는 nodebox뿐이라 prepend append의미없는 상황
  document.body.append(contain); //after
  document.body.prepend(divBox); //before


  //여성 남성 체크박스만들기
  //남성
  // let input = document.createElement('input');
  // input.id = 'male';
  // input.setAttribute('type','checkbox');
  //
  // contain.prepend(input); //이 wrap class 안에 input을 포함하겠다
  //
  // let label = document.createElement('label');
  // label.id = 'gender';
  // label.setAttribute('for','male');
  // // let textMale = document.createTextNode('남성');
  // label.prepend(document.createTextNode('남성')); //바로넣기
  //
  // contain.prepend(label); //input체크박스보다 앞쪽에 가야하니 prepend
  //
  // //여성
  // let input2 = document.createElement('input');
  // input2.id = 'female';
  // input2.setAttribute('type','checkbox');
  // contain.prepend(input2);
  //
  // let label2 = document.createElement('label');
  // label2.id = 'gender';
  // label2.setAttribute('for','female');
  // label2.prepend(document.createTextNode('여성'));
  //
  // contain.prepend(label2);
  // document.body.prepend(contain);
// }

// createInputFunc('male', 'checkbox');
// createLabelFunc('gender', 'male', '남성');
// createInputFunc('female', 'checkbox');
// createLabelFunc('gender', 'female', '여성');
//---------------------

//input, label공통부분 함수만들기
function createInputFunc(id, type) { //id, checkbox, contain(div가 아닌 다른태그일때도 사용가능하게)
  let elem = document.createElement('input');
  elem.id = id;
  elem.setAttribute('type', type);
  // ctn.prepend(elem);
  return elem;
}

function createLabelFunc(id, forelem, text) {
  let elem = document.createElement('label'); //let 스코프영역 블럭
  elem.id = id;
  elem.setAttribute('for', forelem);
  elem.prepend(document.createTextNode(text));
  // ctn.prepend(elem);
  // document.body.prepend(ctn);
  return elem;
}

contain.prepend(createInputFunc('male', 'checkbox'));
contain.prepend(createLabelFunc('gender', 'male', '남성'))
contain.prepend(createInputFunc('female', 'checkbox'));
contain.prepend(createLabelFunc('gender', 'female', '여성'))
// function안에 contain을 넣지않고 따로 꺼내서 추가해줘도 된다
// 함수안 주석처럼 함수안에서 prepend해서 사용가능
}
