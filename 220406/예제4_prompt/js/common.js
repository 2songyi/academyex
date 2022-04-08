'use strict'
window.onload = function(){ //윈도우가 로드된 후 실행문 실행
  let inputTextNum = '이름을 입력해주세요';
  let nameText = prompt(inputTextNum);  //어떤값을 입력을 받고 그대로 반환해주는 역할
  console.log(nameText);
  // innerHTML 대문자
  // innerHTML은 값을 html 타입으로 반환한다.
  // document.body.innerHTML = '<p class="name">'+nameText+'</p>';
  // innerText T만 대문자 주의
  // document.body.innerText = '<input class="name" placeholder="" value="">';
  // document.body.innerHTML = '<input class="name" placeholder="'+inputTextNum+'" value="'+nameText+'">';
  document.body.innerHTML = `<input class="name" placeholder="${inputTextNum}" value="${nameText}">`;

}
