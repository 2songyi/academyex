'use strict'
// attribute
// let x = document.querySelectorAll('div')[0].getAttribute('id');
//모든 div를가져오고 배열로 받음 all지우면 첫번째꺼만 가져옴
// console.log(document.querySelectorAll('div')[0]);
// console.log(x);

// let num = document.querySelector('.container > div').getAttribute('class');
// console.log(num)

// 로고 href 속성 값 가져오기
// let hrefNum = document.querySelector('h1 a');
// hrefNum.setAttribute('href','http://daum.net'); //속성값을 바꿈
// hrefNum.setAttribute('class', 'link'); //class없을때 이렇게 넣으면 속성 들어감
//setAttribute의 첫번째 인자는 속성의 name값이고 두번째 인자는 속성의 값을 입력한다.
// console.log(hrefNum.getAttribute('class'));
// console.log(hrefNum.getAttribute('href'));


//href속성값을 가져와서 split로 naver를 추출하기
let hrefNum = document.querySelector('h1 a').getAttribute('href');
console.log(hrefNum);

let array = hrefNum.split('//');
array = array[1].split('.');
console.log(array)

let site = array[0];
// alert(`현재방문하신 사이트는 ${site}입니다.`)

// console.log(window.location); //주소값 다 나옴
// window.location.href = 'http://naver.com'; //로드되고 바로 이 주소로 이동

// 입력한 단어와 관련된 사이트로 이동하는 로직
function locationFunc() {
  let thisHref = window.location;
  let numText = document.querySelector('#location').value;
  console.log(numText);
  thisHref.href = `http://${numText}.com`;
}
