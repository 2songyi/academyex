'use strict'

function textFunc() {
  // class 단일 추가
  // document.querySelector('#text').classList.add('change-font-style');
  // document.querySelector('#text').classList.add('change-bg');
  // document.querySelector('#text').classList.add('change-width');

  // class 다중 추가
  // document.querySelector('#text').classList.add('change-width','change-font-style','change-bg');

  // class 단일 삭제
  document.querySelector('#text').classList.remove('change-font-style');
  // class 다중 삭제
  document.querySelector('#text').classList.remove('change-width','change-font-style','change-bg');

}
