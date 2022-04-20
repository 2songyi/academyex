'use strict'
$(function() {
  //jquery실행구문

  // for (var i = 1; i < 5; i++) { //nth-child(n)이 1부터 시작이라 i==1로 시작
  //   if (i == 1) {
  //     $("li:nth-child(" + i + ")").css("color", "red");
  //   } else if (i == 2) {
  //     $("li:nth-child(" + i + ")").css("color", "green");
  //   } else if (i == 3) {
  //     $("li:nth-child(" + i + ")").css("color", "orange");
  //   } else {
  //     $("li:nth-child(" + i + ")").css("color", "blue");
  //   }
  // }
  //아래 코드와 같은 결과가 나옴
  // $("li:nth-child(1)").css("color", "red");
  // $("li:nth-child(2)").css("color", "green");
  // $("li:nth-child(3)").css("color", "orange");
  // $("li:nth-child(4)").css("color", "blue");
  //------------

  // 속성 선택자
  // $("[class] a").css("color", "red"); //class속성을 가진 a색상변경
  // $("ul li[title != 'fourth'] a").css("color", "blue"); // =, !=(부정유사클래스와 비슷)

  /*
  1. 's'문자로 시작하는 title의 속성을 가진 요소의 a태그 텍스트 색상 red로 변경
  2. 'rd'문자로 끝나는 title a태그 blue로 변경
  3. 'com'으로 끝나는 href 속성을 갖고있는 요소의 택스트 색상을 yellow로 변경
  4. 'net'으로 끝나는 href 속성을 갖고있는 요소의 택스트 색상을 red로 변경
  5. 'th'문자를 포함한 title속성을 갖고있는 요소 텍스트 green
  */
  $("ul li[title ^= 's'] a").css("color", "red"); //^= 시작
  $("ul li[title $= 'rd'] a").css("color", "blue"); //$= 끝
  $("ul li a[href $= 'com']").css("color", "yellow");
  $("ul li a[href $= 'net']").css("color", "red");
  $("ul li[title *= 'th'] a").css("color", "green"); //*= 포함

});
