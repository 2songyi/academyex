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
  const marginNum = 600; //width값
  const pwElem = $($("#navi .page-wrap")); //재할당할 일 없으니 const
  const pageLeng = $("#navi .page-wrap .page").length; //page 개수로 범위 지정
  $(pwElem).width(marginNum*pageLeng); //.page의 length값을 가져와서 .page-wrap의 초기 너비 값을 설정

  function pagingBtnFunc(el) {
    el.click(function(){
      let marginLeftNum = parseInt(pwElem.css("margin-left"));
      let btnAni = pwElem.is(":animated");

      if (!btnAni) {
        if ($(el).hasClass("next") && marginLeftNum > -(marginNum * (pageLeng-1))){
          pwElem.animate({ marginLeft: marginLeftNum - marginNum }, "fast");
        } else if ($(el).hasClass("prev") && marginLeftNum < 0 ) {
          pwElem.animate({ marginLeft: marginLeftNum + marginNum }, "fast");
        } else if (marginLeftNum == -(marginNum * (pageLeng-1)) || marginLeftNum == 0) {
          alert("더이상 이미지가 없습니다.");
        }
      }
    });
  }

  // pagingBtnFunc($(".btn")); //배열의 첫번째꺼만 노출 됨
  //하나의 함수로 작동시키기 위해 btn class를 추가함
  $(".btn").each(function(){ //이렇게 해야 next prev뜸
    pagingBtnFunc($(this));
  });


});
