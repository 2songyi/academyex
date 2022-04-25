$(function() {
  //animate() count
  let boxNum = $(".flex-box .count");
  boxNum.each(function(){
    // console.log($(this));
    // $(this).attr('src', './img...');
    $(this).prop("Counter", 0).animate({Counter: $(this).text()},{
      duration: 4000,
      easing: "swing",
      step: function(now) { //now임의의 파라미터
        // console.log(now);
        console.log(Math.ceil(now));
        $(this).text(Math.ceil(now));
      },
      complete: function() {
        $("body").css("background", "skyblue");
        $(this).css("background", "#105ba1");
        $(this).css("font-size", "35px");
        $(this).css({"width":"120px", "height":"120px"});
        console.log("완료!");
      }
    }); //prop로 속성값을 가져와서 animate하겠다 (0~counter로 변화시키겠다)
  });

 //  boxNum.animate({left: '100px'}, 4000, 'swing', function(){
 //    alert("animation이 종료 되었습니다.");
 // });
});
