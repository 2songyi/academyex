'use strict'
// window.onload = function() {
//
// }

function getTextFunc(){
// substring2
let infoText = "javascript, html, css3, photoshop, xd";
let aHTML = '<h1>My Skill</h1>';

// infoText를 subString으로 단어를 개별 추출 후 해당 값을 배열에 담아 aHTML의 변수에 반복구문을 사용해
//추가(ul)한 후 document에 있는 요소 .demo element에 출력해주세요.

let strArray = [];
strArray[0] = infoText.substring(0, 10);
strArray[1] = infoText.substring(12, 16);
strArray[2] = infoText.substring(18, 22);
strArray[3] = infoText.substring(24, 33);
strArray[4] = infoText.substring(35, 38);

// 방법2
// let str = [];
// str.push(infoText.substring(0, 10));
// console.log(str)

aHTML += `<ul>`
for (let i = 0; i < strArray.length; i++) {
  aHTML += `<li>${i+1}. ${strArray[i]}</li>`
}
aHTML += `</ul>`

document.getElementsByClassName('demo')[0].innerHTML = aHTML;
}
