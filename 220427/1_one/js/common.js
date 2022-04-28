$(function(){
  //one
  // $("a").click(function(){
  //   console.log($(this));
  //   $("a").removeClass("on"); //모든 a태그에 class제거 (기존 모든 요소에 추가된 클래스 초기화(삭제))
  //   $(this).addClass("on");
  //   $("img").attr("src", $(this).attr("href")); //href에 있는 이미지 링크 img에 넣기
  //   return false; //눌렀을때 다른페이지로 넘어가지 않게 a의 원래기능 무력화
  // });

  $("a").one("click", function() { //한번만 작동 됨
    $("a").removeClass("on");
    $(this).addClass("on");
    $("img").attr("src", $(this).attr("href"));
    return false;
  });
});
