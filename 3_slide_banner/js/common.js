$(function(){
  // 이미지 클릭시 작동하는 스크립트
  const widthNum = 620; //605+15 slider개별 너비 (carousel-inner너비 계산할 수 있음)

  // ul의 개수 가져오기
  let ulLeng = $("#carousel-inner ul.column").length;
  // console.log(ulLeng);

  // ul의 개수로 #carousel-inner 초기 너비 설정
  // $("#carousel-inner").css("width", widthNum*ulLeng); //2480px
  $("#carousel-inner").width(widthNum*ulLeng);

  // 슬라이드 포지션 초기화
  // $("#carousel-inner ul.column:last").prependTo("#carousel-inner"); //젤 뒤에있는 이미지를 맨 앞으로
  // $("#carousel-inner").css("margin-left", -widthNum); //앞에 넣어준걸 밀어줌
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

  // prev button script
  // let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  // $("#carousel-prev").click(function(){
  //   console.log(caInMarginLeft);
  //   $("#carousel-prev, #carousel-next").hide(); //움직이는 동안 버튼 사라지게
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function(){
  //     // animation 실행이 끝난 직후 실행 영역
  //     initialFunc("prev");
  //     $("#carousel-prev, #carousel-next").show();
  //   });
  // });
  //
  // $("#carousel-next").click(function(){
  //   // let carInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   console.log(caInMarginLeft);
  //   $("#carousel-prev, #carousel-next").hide();
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function(){
  //     initialFunc("next");
  //     $("#carousel-prev, #carousel-next").show();
  //   })
  // });

  //prev button 스크립트 리팩토링 (함수화)
  // show, hide는 isanimated로 없애기
  /* prev, next button script를 하나의 함수로 구현하기*/
  let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  function btnClickFunc(elem) {
    elem.click(function() {
      $("#carousel-prev, #carousel-next").hide();
      if ($(elem).hasClass("prev")) {
        $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function(){
          initialFunc("prev");
          $("#carousel-prev, #carousel-next").show();
        });
      } else if ($(elem).hasClass("next")) {
        $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function(){
          initialFunc("next");
          $("#carousel-prev, #carousel-next").show();
        });
      }
    })
  }
  $(".btn").each(function() {
    btnClickFunc($(this));
  })

});
