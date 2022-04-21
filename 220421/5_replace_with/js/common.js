$(function() {
// replaceWith(..) : 태그를 다른 태그로 변경함
  $("h2").replaceWith("<h2>remove</h2>");
  /* p태그를 "<span class='box'>text box</span>"으로 변경하기*/
  $("p").replaceWith("<span class='box'>text box</span>");
// remove(..) : 태그 제거.
  //위에서 만든 태그를 바로 다음줄에도 반영됨
  $(".box").remove();

// 1) .items태그를 "<a href='http://naver.com'></a>"로 replaceWith()를 사용해 변경
  $(".items").replaceWith("<a href='http://naver.com'></a>");
  //2) 변경된 a 태그를 remove()를 사용해 제거하기
  $("a").remove();
});
