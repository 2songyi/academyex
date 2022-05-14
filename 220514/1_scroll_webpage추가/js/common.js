'use strict'
$(function(){
  const intervalNum = 150;
  $("nav ul li a, .back-to-top a, a.button, #footer ul li a").click(function(){
    // console.log(this.hash); //해당값의 밸류값 뽑아오기
    // console.log($(this.hash).offset().top);
    let thisHash = $(this.hash);

    //1번방법 애니메이션 작동될때 여러번 클릭 방지
    // let isAni = $("html,body").is(":animated")
    // if ( !isAni ) {
    //   $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    // }

    //2번방법 즉시 스크롤 대상 변경
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    return false
  });

  // 실습2
  // back-to-top요소(scroll 상단 이동버튼)가 window scroll top값이 0이 아닐 경우에
  // .on class를 추가하여 표시하시오
  let winH = $(window).height();
  $(window).scroll(function(){
    let scTop = $(this).scrollTop();
    if(scTop > 0) {
      $(".back-to-top").addClass("on");
    }else {
      $(".back-to-top").removeClass("on");
    }
    // 실습3
    // section offset method를 사용하여 window가 스크롤 될때 해당 section의
    // offset top window scrollTop이 같고 section의 높이만큼의 영역 안일때 해당
    // section에 active class를 추가하시오

    // console.log(scTop);
    $("section").each(function(){
      let thisOffset = $(this).offset();
      let thisElem = $(this);
      // console.log(thisOffset);
      if(thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + winH) {
        thisElem.addClass("active");
      }
      // else { 만약 구간 벗어날 시 다른효과를 넣어주고싶다면 사용
      //   thisElem.removeClass("active");
      // }
    })



  })





});
