$(function() {
  //scroll 반응형 페이지

  $(window).scroll(function() {
    let scTop = $(window).scrollTop();
    let winHeight = $(window).height();
    let h = $("h2").text();
    $(".slide").each(function() { //each로 각각의 값을 가져옴
    let thisOffset = $(this).offset(); //this = slide
      // console.log(thisOffset); //객체타입 키값이 top, left로 뿌려짐 좌표값 알려줌
    /*slide 구간을 if구문으로 체크하고 각 구간마다 h2의 텍스트를 로그에 출력하기*/
      // if (scTop >= 0 && scTop < 968) {
      //   console.log($(this).find("h2").text());
      // } else if (scTop >= 968 && scTop < 1936) {
      //   console.log($(this).find("h2").text());
      // } else if (scTop >= 1936 && scTop < 2904) {
      //   console.log($(this).find("h2").text());
      // } else if (scTop >= 2904 && scTop < 3872) {
      //   console.log($(this).find("h2").text());
      // } else if (scTop >= 3872 && scTop < 4845) {
      //   console.log($(this).find("h2").text());
      // } else if (scTop >= 4845) {
      //   console.log($(this).find("h2").text());
      // }
      //scTop변하는 값, thisOffset 고정값
      if (thisOffset.top <= scTop && thisOffset.top + winHeight/3 > scTop) { //Height값을 조정하면 뜨는 위치 조정가능
        // console.log($(this).find("h2").text());
      /*body 요소에 background color값을 현재 .slide 요소의 data-bg 값으로 변경하기 */
        let bodyBg = $(this).data("bg");
        // $("body").css("background-color",bodyBg);
        $("body").css({"background-color":bodyBg});
        $(this).addClass("on");
      } else {
        // $(this).removeClass("on"); //초기에 로드될때만 동적으로 하려면 else 쓰지않기
      }
    });


    /*scroll method를 이용해 scrolltop의 값이 첫번째 slide높이값(window)보다 클 때
    nav태그에 fixed클래스를 추가하기*/
    if (winHeight - 70 <= scTop) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed")
    }
  });


});
