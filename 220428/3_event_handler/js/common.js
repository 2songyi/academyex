$(function(){
  // event handler
  // 1)
  // event 개별 사용
  // $(":submit").mouseover(function() { //hover
  //   $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>");
  // });
  // $(":submit").mouseout(function() {
  //   // $(this).next().remove();
  //   $("p").remove();
  // });

  // event method chain 사용
  // $(":submit").mouseover(function(){
  //   $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>");
  // }).mouseout(function(){
  //   $(this).next().remove();
  // });

  //on
  // $(":submit").on(event, elem, func);
  // $(":submit").on(func);
  // $(":submit").on();
  $(":submit").on({
    mouseover: function(){
      $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>");
    }, mouseout: function(){
      $(this).next().remove();
    }
  }); // 이렇게 객체형태로 넣을 수 있다.
});
