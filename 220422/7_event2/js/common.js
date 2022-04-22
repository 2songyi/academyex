$(function() {
  //mouse move
  
  /*jquery 요소를 추가하는 method를 사용해 tooltip클래스를 가지고 있는 span태그를 body에 추가하기*/
  // $("body").append("<span></span>");
  // $("span").addClass("tootip")
  $("body").append("<span class='tooltip'></span>");

  $("img").mousemove(function(e) { //이미지영역 안에서 마우스 움직일때
    // console.log(e.clientX);
    /*1) span태그 내부에 "현재 x좌표는 : ** 현재 y좌표 : ***" 을 추가하고
    span 위치를 e.clientX, e.clientY 값을 사용하여 커서를 따라 다니는 로직을 구현하기*/
    let x = e.clientX;
    let y = e.clientY;
    $("span").html(`현재 x좌표: ${x}, y좌표: ${y}`);
    $("span").css({"top":y, "left":x});
  });
});
