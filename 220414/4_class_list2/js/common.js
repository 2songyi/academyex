'use strict'
//sideMenuslide

function sideMenuSlide() {
  // document.querySelector('#sideMenu').getAttribute('class', 'on')
  //console.log(document.querySelector('#sideMenu').getAttribute('class')); //on이라는 값 반환
  let className = document.querySelector('#sideMenu').getAttribute('class');
  console.log(className);
  if (className == 'on') { // on class가 있을때
    //on을 삭제하는 코드
    document.querySelector('#sideMenu').classList.remove('on');
  } else {
    //on을 추가하는 코드
    document.querySelector('#sideMenu').classList.add('on');
  }
}
