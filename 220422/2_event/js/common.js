$(function() {
  // event사용예
  // button으로 event 실행
  // document.querySelector('button').addEventListner('click', function(){});
  // document.querySelector('button').onclick = function(){};
  // let num = 0;

  console.log($("img").attr("title"));

  /* 아래 코드를 사용해 이미지를 toggle형태로 구현하고
  첫번째 이미지에 alt값 : 산이미지1
  두번째 이미지에 alt값 : 산이미지2
  */
  $("button").click(function(){
    // console.log("click");
    // console.log(num);
    // num++;
    if ($("img").attr("title") == "mountain_01") {
      $("img").attr({"src":"./img/mountain_02.png", "title":"mountain_02", "alt":"산이미지2"});
    } else {
      // $("img").attr("src", "./img/mountain_01.png").attr("title", "mountain_01").attr("alt", "산이미지1");
      $("img").attr({"src":"./img/mountain_01.png", "title":"mountain_01", "alt":"산이미지1"});
    }
  });

  /*
  a태그 click event사용 시 함수 내 return false 사용, 하위 브라우저 혹은
  특정 브라우저에서 a link 기본 속성이 먼저 실행하여 event가 작동하지 않는 경우가 있다.
  */
  $("a").click(function(e){
    if ($("img").attr("title") == "mountain_01") {
      $("img").attr({"src":"./img/mountain_02.png", "title":"mountain_02", "alt":"산이미지2"});
    } else {
      $("img").attr({"src":"./img/mountain_01.png", "title":"mountain_01", "alt":"산이미지1"});
    }
    // e.preventDefault();
    // return false; //이렇게하면 naver로 안넘어감
  });

});
