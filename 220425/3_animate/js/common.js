$(function() {
  //animate()
  let count = 0;
  $("button").click(function() {
    // 수치 증가 복합 대입연산 사용 방법
    // $(".box").css("left", count);
    // count++;
    /*
    $(".box").animate(변화된 값, duration, timminFunc(), function(){에니메이션 종료 시 실행});
    첫번째 인자 : 변화된 값
    두번째 : 경과 후 지속시간 :number
    세번째: 변화 곡선 (timminFunction) : string(ex:linear)
    네번째 : 애니메이션 종료된 시점 실행되는 함수
    */
    console.log($(".box:animated"));
    $(".box:animated").stop(); //새로 클릭하면 앞에꺼 취소하고 현재 animate만 쓰겠다
    // $(".box").animate({left: '+=10px', top: '+=10px'});

    // css style 다중 적용
    // $(".box").animate({left: '250px', opacity: "0.5", height: "150px", width: "150px"});

    //toggle 사용 방법
    // elem.toggle();
    // $(".box").animate({height: "toggle", width: "toggle"}); //내부 함수에서 toggle을 인식함
    // $(".box").animate({top: "toggle", left: "toggle"});

    //animate 다중사용
    let elem = $(".box");
    // slow: 0.6s, defalut: 0.4s, fast: 0.2s
    elem.animate({height: "300px", opacity: "0.4"}, 'slow');
    elem.animate({width: "300px", opacity: "0.8"}, 'slow');
    elem.animate({height: "100px", opacity: "0.4"}, 'slow');
    elem.animate({width: "100px", opacity: "0.8"}, 'slow');
    //순차적으로 하나씩 종료되면 다음 애니메이션이 실행 됨

    // animate 재귀함수 사용 (무한루프 주의)
    // function aniBox() {
    //   $(".box").animate({
    //     height: "+=10px",
    //     width: "+=10px"
    //   }, 1000, "swing", aniBox);
    // }
    // aniBox(); //처음 클릭했을때 트리거 역할


  });
});
