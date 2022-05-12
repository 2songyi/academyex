'use strict'
$(function(){
  $(".wrap").each(function(i){
    let thisWrap = $(this); // 현재 .wrap을 가져오기
    let itemsNum = thisWrap.find(".items"); //현재 wrap의 items 선택
    // let itemsNum = $(".items", this);
    let itemsLeng = itemsNum.length;
    // console.log(itemsLeng);
    itemsNum.mouseenter(function(){
      // mouseenter 실행구문
      let thisIndex = $(this).index(); //현재의 this items임
      // console.log(thisIndex);
      $(this).addClass("on");
      if (thisIndex == 0){
        thisWrap.css("margin-left", "0px");
      } else if (thisIndex == itemsLeng - 1) {
        thisWrap.css("margin-left", "-100px");
      } else {
        thisWrap.css("margin-left", "-50px");
      }
    }).mouseleave(function(){
      // $(this).removeClass("on");
      itemsNum.removeClass("on"); //깔끔하게 모든 클래스 지우는거도 방법
      thisWrap.css("margin-left", "0px");
    });
  })
});
