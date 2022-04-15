'use strict'

function textFunc() {
  let leng = document.querySelector('#text').classList; //text아이디를 가진거의 클래스 리스트 배열형태로 가져옴
  console.log(leng);
  // contains method는 classList에 해당 클래스가 포함되어 있는지 여부 확인해 boolean으로 반환
  let bulNum = document.querySelector('#text').classList.contains('change-bg');
  console.log(bulNum);


}

function sideMenuSlide() {
  let elem = document.querySelector('#sideMenu');
  let activeNum = elem.classList.contains('on'); //on있으면 제거 없으면 추가
  if (activeNum) {
    elem.classList.remove('on');
  } else {
    elem.classList.add('on');
  }
}
