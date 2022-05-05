$(function(){
  // 이미지 클릭시 작동하는 스크립트
  const widthNum = 620;
  let ulLeng = $("#carousel-inner ul.column").length;

  // ul의 개수로 #carousel-inner 초기 너비 설정
  $("#carousel-inner").width(widthNum*ulLeng);

  // 슬라이드 포지션 초기화
  initialFunc("prev");

  // 슬라이드 포지션 초기화 함수
  function initialFunc(init) {
    $("#carousel-inner").css("margin-left", -widthNum);
    if (init === "prev") {
      $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    } else if (init === "next") {
      $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
    }
  }

  /* prev, next button script를 하나의 함수로 구현하기*/
  function btnClickFunc(elem) {
    elem.click(function() {
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let caroInner = $("#carousel-inner");
      let isAni = caroInner.is(":animated"); //hide, show대신

      if (!isAni) {
        if ($(elem).hasClass("prev")) { // (elem.attr("id") === "carousel-prev")
          caroInner.animate({marginLeft: caInMarginLeft + widthNum}, "slow", function(){
            initialFunc("prev");
          });
        } else if ($(elem).hasClass("next")) {
          caroInner.animate({marginLeft: caInMarginLeft - widthNum}, "slow", function(){
            initialFunc("next");
          });
        }
      }
    })
  }
  $(".btn").each(function() {
    btnClickFunc($(this));
  });

  // auto slide
  // setInterver 사용
  let timerId = null;
  let auto = function(){
    timerId = setInterval(function() {
      //5초에 한번씩 실행할 실행구문
      // console.log("slide");
      $("#carousel-next").trigger("click"); //버튼을 클릭하게하는 트리거 발생시키기
    }, 3000);
    return timerId;
  }//closure함수로 작동시켜서 오류가 생기지 않음

  auto();

  console.log(timerId);

  // $("#carousel-prev, #carousel-next").mouseenter(function(){
  //   clearInterval(timerId); //마우스 올렸을때는 슬라이드 멈추기
  // }).mouseleave(function(){
  //   timerId = setInterval(function() {
  //     $("#carousel-next").trigger("click");
  //   }, 3000);
  //   console.log(timerId);
  // });

  /* method chain을 on method를 사용해 작성*/
  $("#carousel, #carousel-prev, #carousel-next").on({mouseenter: function(){
    clearInterval(timerId);
  }, mouseleave: function(){
    timerId = setInterval(function() {
      $("#carousel-next").trigger("click");
    }, 3000);
  }});

});
