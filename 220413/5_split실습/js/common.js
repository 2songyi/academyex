'use strict'

function getTextFunc(){
// substring2
let infoText = "javascript,html,css3,photoshop,xd";
let aHTML = '<h1>My Skill</h1>';

// let strArray = [];
// strArray[0] = infoText.substring(0, 10);
// strArray[1] = infoText.substring(11, 15);
// strArray[2] = infoText.substring(16, 20);
// strArray[3] = infoText.substring(21, 30);
// strArray[4] = infoText.substring(31, 34);

//split으로 수정
let strArray = infoText.split(',');
console.log(strArray)

aHTML += `<ul>`
for (let i = 0; i < strArray.length; i++) {
  aHTML += `<li>${i+1}. ${strArray[i]}</li>`
}
aHTML += `</ul>`

document.getElementsByClassName('demo')[0].innerHTML = aHTML;
}
