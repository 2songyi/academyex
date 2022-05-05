$(function(){

  const widthNum = 150; //slide li 개별 너비, ul.column의 너비를 계산할 수 있다.

  // li의 개수 가져오기
  let liLeng = $("#carousel-inner ul.column li").length;
  console.log(liLeng);

  // li의 개수로 ul.column의 너비를 설정
  $("#carousel-inner ul.column").css("width", widthNum*liLeng);

  /* 슬라이드 포지션 초기화
    1) ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동하기
    2) ul.column의 초기 슬라이드 위치로 이동하기
    */
  initialFunc("prev");

  function initialFunc(init) {
    $("#carousel-inner").css("margin-left", -widthNum);
    if (init === "prev") {
      $("#carousel-inner ul li:last").prependTo("#carousel-inner ul");
    } else if (init === "next") {
      $("#carousel-inner ul li:first").appendTo("#carousel-inner ul");
    }
  }

  function btnClickFunc(elem) {
    elem.click(function() {
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let isAni = $("#carousel-inner").is(":animated");

      if (!isAni) {
        if ($(elem).hasClass("prev")) {
          $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", function(){
            initialFunc("prev");
          });
        } else if ($(elem).hasClass("next")) {
          $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", function(){
            initialFunc("next");
          });
        }
      }
    })
  }
  $(".btn").each(function(){
    btnClickFunc($(this));
  })

  // auto slide
  let autoInter;
  let auto = function(){
    autoInter = setInterval(function(){
      $("#carousel-next").trigger("click");
    }, 3000);
    return autoInter;
  }
  auto();

  $("#carousel-wrap").on({mouseenter: function(){
    clearInterval(autoInter);
  }, mouseleave: function(){
    autoInter = setInterval(function(){
      $("#carousel-next").trigger("click");
    }, 3000);
  }})


});
