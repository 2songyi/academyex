$(function(){
  // 이미지 클릭시 작동하는 스크립트
  $("#navi a").click(function(){
    // let imgSrc = $(this).attr("href");
    // let checkAni = $("#main img:last").is(":animated"); //animated되고있는지 묻는거
    // console.log(checkAni);
    // if (checkAni ) { //animated 작동 중일때 누르면 멈추고 바로 이미지 바뀌게
    //   $("#main img:last").stop().css("opacity", 0);
    //   $("#main img:last").remove();
    //   $("#main img").attr("src", imgSrc);
    //   // 설정해둔 1초보다 빠르게 누르면 즉시 전환
    // } else {
    //   $("#main img").before(`<img src="${imgSrc}">`);
    //   $("#main img:last").animate({opacity: 0},{//현재 떠있는거를 투명도0으로
    //     duration: 1000,
    //     easing: "swing",
    //     complete: function(){ //animate끝난 즉시 실행
    //       $(this).remove();
    //     }
    //   });
    // }

    //start함수 추가해서 작성
    // if (checkAni == false) {
    //   $("#main img:last").animate({opacity: 0},{//현재 떠있는거를 투명도0으로
    //     duration: 1000,
    //     easing: "swing",
    //     start: function(){ //animate 시작되는 동시에
    //       $("#main img").before(`<img src="${imgSrc}">`);
    //     },
    //     complete: function(){ //animate끝난 즉시 실행
    //       $(this).remove();
    //     }
    //   });
    // }

    //if == false조건문 없이 작성
    $("#main img:last").animate({opacity: 0},{
      duration: 1000,
      easing: "swing",
      start: function(){ //animate 시작되는 동시에
        $("#main img").before(`<img src="${imgSrc}">`);
      },
      complete: function(){ //animate끝난 즉시 실행
        $(this).remove();
      }
    });
    return false; //a태그 기본속성 없애기
  });

  // prev, next 버튼으로 작동하는 스크립트
  // let marginLeftNum = $("#navi .page-wrap").css("margin-left");
  // // parseInt(marginLeftNum); //정수로 변환
  // const marginNum = 300; //width:300px;
  // $("img.next").click(function(){
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({
  //     marginLeft: parseInt(marginLeftNum) - marginNum
  //   }, "fast",
  //   function(){
  //     console.log($("#navi .page-wrap").css("margin-left"));
  //   }
  //   );
  // });
  // $("img.prev").click(function(){
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({
  //     marginLeft: parseInt(marginLeftNum) + marginNum
  //   }, "fast",
  //   function(){
  //     console.log($("#navi .page-wrap").css("margin-left"));
  //   }
  //   );
  // });

  // 하나의 함수로 리팩토링하기
  let marginLeftNum = $("#navi .page-wrap").css("margin-left");
  const marginNum = 300;
  function btnFunc(pom) {
    if (pom == 'next') {
      $("#navi .page-wrap").animate({
        marginLeft: parseInt(marginLeftNum) - marginNum
      }, "fast");
    } else if (pom == 'prev') {
      $("#navi .page-wrap").animate({
        marginLeft: parseInt(marginLeftNum) + marginNum
      }, "fast");
    }
  }


  $("img.next").click(function(){
    console.log('test');
  })

});
