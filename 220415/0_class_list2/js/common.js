'use strict'
//sideMenuslide

function sideMenuSlide() {

  let elem = document.querySelector('#sideMenu');
  let checkNum = elem.getAttribute('class');
  elem.classList.toggle('on');

}
