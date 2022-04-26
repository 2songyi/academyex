$(function() {
  //table scroll 생성 시 스크롤바 수정
  // $(".body").prepend("<div class='box'></div>"); 로또추첨기 

  $(".box").each(function(){
    // console.log($(this));
    let transSize = "+"; //크기변화 전환
    let leftDir = "+"; //x축 방향 전환
    let topDir = "+"; //y축 방향 전환
    let speedNum = 1;
    let thisElem = $(this);

    //resize될때마다
    $(window).resize(function(){
      let thisOffset = thisElem.offset(); //x,y축 받아오기
      // size 변화 조건식
      if (thisElem.width() > 200) {
        transSize = "-";
      } else if (thisElem.width() < 50) {
        transSize = "+";
      }
      // x축 변화 조건식
      if (thisOffset.left + thisElem.width() > $(window).width()) {
        leftDir = "-";
        // console.log(Math.ceil(Math.random()*10));
        speedNum = Math.ceil(Math.random()*10);
        thisElem.css("left", $(window).width() - thisElem.width());
      } else if (thisOffset.left < 0) {
        leftDir = "+";
      }
      // y축 변화 조건식
      if (thisOffset.top <= 0) {
        topDir = "+";
      } else if (thisOffset.top + thisElem.height() >= $(window).height()) {
        topDir = "-";
        speedNum = Math.ceil(Math.random()*10);
        thisElem.css("top", $(window).height() - thisElem.height());
      }
      // thisElem 최종 적용
      thisElem.css({"width": transSize+"=1px", "height": transSize+"=1px"});
      thisElem.css({"left": leftDir+"="+speedNum+"px", "top": topDir+"="+speedNum+"px"});
    });
  });
});
