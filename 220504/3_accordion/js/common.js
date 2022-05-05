$(function(){
  // 아코디언 UI 인터렉션 만들기
  // $("dd:not(:first)").css("display", "none"); //첫번째를 제외한 나머지는 접어두기
  // $("dl dt").click(function(){
  //   console.log($("+dd",this).text());
  //   if ($("+dd", this).css("display") == "none") {
  //     $("dd").slideUp("slow"); //초기화
  //     $("+dd", this).slideDown("slow");
  //   } else {
  //     $("+dd", this).slideUp("slow");
  //   }
  // });

  /* dt click event를 animate method를 사용해 구현하기*/
  $("dd:not(:first)").css({
    "display":"none", "height":0 });

  // $("dl dt").click(function(){
  //   let thisElem = $(this);
  //   // console.log(thisElem); //dt
  //   if ($("+dd", thisElem).css("display") == "none") {
  //     $("dd").each(function(){
  //       // console.log($(this)); //dd
  //       if ($(this).css("display") == "block") {
  //         $(this).animate({height: 0}, "slow", function() {
  //           console.log($(this).text()); //each의 dd와는 다른거 block상태인거만
  //           $(this).css("display", "none");
  //         });
  //       }
  //     });
  //     $("+dd", thisElem).css("display", "block").animate({height: 300});
  //   }
  // });

  //height를 조건에 사용
  $("dl dt").click(function(){
    let thisElem = $(this);
    if ($("+dd", thisElem).css("display") == "none") {
      $("dd").each(function(){
        if (parseInt($(this).css("height")) == 300) {
          $(this).animate({height: 0}, "slow", function(){
            $(this).css("display", "none"); //이거 안하면 안에 텍스트 겹쳐서 나옴
          });
        }
      });
      $("+dd", thisElem).css("display", "block").animate({height: 300});
    }
  })



});
