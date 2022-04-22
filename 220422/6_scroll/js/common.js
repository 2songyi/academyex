$(function() {
  $(window).scroll(function() { //화면자체에 스크롤이 발생했을때 이벤크
    // console.log($(this)); //여기서 this는 window의미
    let scTop = $(this).scrollTop();
    let winHeight = $(window).height(); //this로 받으면 리사이징된거 반영안됨
    //전체의 높이값이 900이라면 gnb 70px을 뺀만큼 갔을때 멈추기
    if (winHeight - 70 <= scTop ) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }

})
});
