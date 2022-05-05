$(function(){
  // 이미지 클릭시 작동하는 스크립트
  $("#navi a").click(function(){

  let imgSrc = $(this).attr("href");
  let checkAni = $("#main img:last").is(":animated"); //animated되고있는지 묻는거
  console.log(checkAni);
  if (checkAni ) { //animated 작동 중일때 누르면 멈추고 바로 이미지 바뀌게
    $("#main img:last").stop().css("opacity", 0);
    $("#main img:last").remove();
    $("#main img").attr("src", imgSrc);
    // 설정해둔 1초보다 빠르게 누르면 즉시 전환
  } else {
    $("#main img").before(`<img src="${imgSrc}">`);
    $("#main img:last").animate({opacity: 0},{//현재 떠있는거를 투명도0으로
      duration: 1000,
      easing: "swing",
      complete: function(){ //animate끝난 즉시 실행
        $(this).remove();
      }
    });
  }
  return false;
  });

  // prev, next 버튼으로 작동하는 스크립트
  // 하나의 함수로 리팩토링하기
  let marginLeftNum = $("#navi .page-wrap").css("margin-left");
  const marginNum = 300;

  function pagingBtnFunc(el) {
    el.click(function(){
      // console.log($(el).attr("class")); //each안해주면 next, prev 두개가 같이 안뜸
      marginLeftNum = parseInt($("#navi .page-wrap").css("margin-left"));
      let btnAni = $("#navi .page-wrap").is(":animated"); //우다다 누르면 넘어가서 안넘어가게
      console.log(btnAni);

      if (!btnAni) { //btnAni == false
        if ($(el).hasClass("next") && marginLeftNum > -(marginNum*2)) { //-600보다 클때만
          $("#navi .page-wrap").animate({
            marginLeft: marginLeftNum - marginNum
          }, "fast");
        } else if ($(el).hasClass("prev") && marginLeftNum < 0 ) {
          $("#navi .page-wrap").animate({
            marginLeft: marginLeftNum + marginNum
          }, "fast");
        } else if (marginLeftNum == -(marginNum * 2) || marginLeftNum == 0) {
          alert("더이상 이미지가 없습니다.");
        }
      } // animated가 false일때만 페이지 넘어가도록.
    });
  }

  // pagingBtnFunc($(".btn"));;
  $(".btn").each(function(){ //이렇게 해야 next prev뜸
    pagingBtnFunc($(this));
  });


});
