'use strict'
let outPutText = ''

function getText(){
  outPutText += document.getElementById('fname').value;
  if (outPutText != ''){
    outPutText += '<br>'
  } //이미 들어간 텍스트가 있을때는 줄바꿈해주기
  document.getElementById('textarea').innerHTML = outPutText;
}

// js에 style추가하기
let domStyle = document.getElementById('textarea').style;
domStyle.backgroundColor = "skyblue";
domStyle.color = "white";

console.log(domStyle);

document.getElementById('btn').addEventListener('click', getText);


//강사님코드
// function getText(){
//  if (outPutText == ''){
//     outPutText += document.getElementById('fname').value;
//  } else {
//    outPutText += '<br>'+document.getElementById('fname').value;
//  }
//  document.getElementById('textarea').innerHTML = outPutText;
// }
