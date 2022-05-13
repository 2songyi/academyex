'use strict'
$(function(){
  let wHeight = $(window).innerHeight();
  let direc = 0; //방향전환을 위한 변수 선언
  let wheelAction = false;//휠 작동중인지 아닌지
  const maxDirec = $(".wheel-wrap section").length - 1;//page개수 - 1

  /*
  $(window).on('wheel', function(envet){
    // console.log(event.wheelDelta);
    let eventDelta = event.wheelDelta;
    if (eventDelta > 0 && wheelAction === false) { //휠 위로
      // console.log('wheel up');
      if (direc <= 0) {
        direc = 0; //첫페이지 오면 더이상 위로 스크롤 안되게 고정
      } else {
        direc--;
        console.log(direc);
        $("html").animate({scrollTop: direc * wHeight},{
          duration: 1000,
          start: function(){
            wheelAction = true;
          },
          complete: function(){
            wheelAction = false;
          }
        });
      }
    } else if (eventDelta < 0 && wheelAction === false) { //휠 아래로
      // console.log('wheel down');
      if (direc >= maxDirec ) { //마지막 페이지까지 가면 더이상 숫자가 증가하면 안되서 고정시킴
        direc = maxDirec;
      } else {
        direc++; //direc += 1;
        console.log(direc);
        $("html").animate({scrollTop: direc * wHeight},{
          duration: 1000,
          start: function(){ //에니메이션 시작할때 true로 만들기
            wheelAction = true;
          },
          complete: function(){ //애니메이션 종료시 false
            wheelAction = false;
          }
        });
      }
    }
  });
  */

// 리팩토링하기
function wheelMove() { //공통부분 함수로 빼옴
  $("html").animate({scrollTop: direc * wHeight},{
    duration: 1000,
    start: function(){
      wheelAction = true;
    },
    complete: function(){
      wheelAction = false;
    }
  });
}

wheelMove(); //refresh될때 스크롤 이상해지는거 이걸로 초기화

$(window).on('wheel', function(envet){
  let eventDelta = event.wheelDelta;
  if (eventDelta > 0 && wheelAction === false) { //wheel up
    if (direc <= 0) {
      direc = 0;
    } else {
      direc--;
      wheelMove();
    }
  } else if (eventDelta < 0 && wheelAction === false) { //wheel down
    if (direc >= maxDirec ) {
      direc = maxDirec;
    } else {
      direc++;
      wheelMove();
    }
  }

});

});
