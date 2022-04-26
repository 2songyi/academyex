$(function() {
  //table scroll 생성 시 스크롤바 수정
  // $(window).onload(function(){}).resize(function(){});
  $(window).on("load resize", function(){ //onload, resize동시에 될때
    // 실행구문 영역
    console.log(`table parent width: ${$(".tbl-content").outerWidth()}, table width: ${$(".tbl-content table").outerWidth()}`);
    let scrollBarWidth = $(".tbl-content").outerWidth() - $(".tbl-content table").outerWidth();
    console.log(scrollBarWidth); //크스롤바의 실제 width만큼 header에 padding을 줌
    $(".tbl-header").css("padding-right", scrollBarWidth);

  }).resize(); //resize될때도 실행하겠다
});
