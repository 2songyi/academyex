$(function(){
  //on
  // $("a").one("click", function() { //한번만 작동 됨
  //   $("a").removeClass("on");
  //   $(this).addClass("on");
  //   $("img").attr("src", $(this).attr("href"));
  //   return false;
  // });

  // ul이 가지고있는 것 중 a태그가 변화할때 체크
  /*ul요소에 추가 또는 변화되는 속성, 태그 등 document load이후 (Dom형성 이후)
    변화를 체크해 스크립트에 적용할 수 있다.*/
  $("ul").on("click", "a", function() {
    $("a").removeClass("on");
    $(this).addClass("on");
    $("img").attr("src", $(this).attr("href"));
    return false;
  });

  // 이미지 버튼 클릭했을 때
  $("button").click(function() {
    /* ul태그 내부에 자식요소의 첫번째 위치에
    <li><a href="./img/img04.jpg">바다</a></li>
    코드 추가하기*/
    $("ul").prepend("<li class='txt'><a href='./img/img04.jpg'>바다</a></li>");
  });
});
