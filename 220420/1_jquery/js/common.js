'use strict'
$(function(){
  /*1) jquery 실행구문*/
  // document.querySelector("li").style.color = 'red';
  // $("li").css("color","red"); //tag / (속성, 값)
  // $("#first").css("color", "blue"); //id
  // $("li.fourth").css("background", "grey"); //class

  //3번째 li의 span요소에 배경색을 blue로 변경
  // $("li.third span").css("background","skyblue"); //자손 선택 (공백)
  //두번째 li p요소의 font-size : 10px로 변경
  // $("li.second p").css("font-size","10px");

  // let num = 30;
  // $(".first, .third, .fourth").css("left",num + 'px');
  // $(".first, .third, .fourth").css("left",num); //px말고 다른 단위일 경우 명시해야함
  // $(".first, .third, .fourth").css("left",`${num}px`);

  /*2) ul의 첫번째 li의 자식 요소 span에 텍스트 색상을 red로 변경*/
  // $("li.first > span").css("color", "red");

  // $("*").css("color", "blue"); //(유니버셜 선택자)
  //인라인요소 가장 아래에 작성한게 우선순위가 높음 (css랑 다름)

  /*ul의 세번째 li요소를 인접선택자를 사용해 텍스트 생상 변경*/
  // $("ul li.second + li").css("color", "skyblue"); //인접선택자: 바로 다음 요소

  // $("li:first-child").css("color","green"); //유사클래스를 사용해 요소 선택
  // $("li:last-child").css("color","red").css("font-size", "10px"); //(method chain)으로 css다중사용

  // $("li.second ~ li").css("color", "yellow"); //(동위선택자) 2번째 요소 이후에 나오는것들은 다 노란색으로

  // $("li:not(:first-child)").css("color", "red"); //첫번째 요소 제외하고 다 레드로 (부정유사클래스)

  /*3) 메뉴 구조 요소를 선택하고 style을 적용*/
  $("span").css("color", "red");
  /*서브메뉴 내부요소 span의 텍스트 색상 변경*/
  $(".submenu > li > a > p > span").css("color", "blue");
  // $("ul.submenu span").css("color", "blue");
  $(".submenu li span:empty").css("background", "grey"); //비어있냐엾냐 판단해줌



});
