'use strict'
$(function() {
  // script 영역 text() 사용 예
  // let textNum = '';
  // textNum = $("p#first");
  // textNum.text('hi! jquery!');
  // console.log(textNum);

  /* 특정 요소의 텍스트를 다른 요소에 삽입하는 예 */
  // 방법 1
  // console.log($("p#second").text()); //second text를 가져와서
  // $("p#first").text($("p#second").text()); //넣음
  // 방법 2 : 변수처리
  // a type
  // let elem = $("p#first");
  // let elemInputText = $("p#second").text();
  // elem.text(elemInputText);
  //b type
  // let elem = $("p#first");
  // let elemInput = $("p#second");
  // elem.text(elemInput.text());

  // let numHtml = '';
  // numHtml = document.querySelector("p#second").innerHTML; //js
  // numHtml = $("p#second").html(); //text말고 html로 했더니 값을 다 가져옴
  // console.log(numHtml);

  //#third 의 자식요소 h2의 텍스트를 가져와서 p#first에 추가하기
  let numHtml = $("#third h2").text();
  $("p#first").text(numHtml);
  //js 방법으로 가져오기
  // let numHtmlJs = document.querySelector("#third h2").innerText;
  // document.querySelector("p#first").innerText = numHtmlJs;
  //innerHTML도 가능
});
