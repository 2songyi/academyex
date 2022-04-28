$(function(){
  // document.querySelector("input").value
  // #cccccc로 입력한 값의 font color 변경
  $("input").val("입력해주세요.").css("color", "#cccccc").one("focus", function() { //초기 포커스 일때 한번만 실행
    $(this).val("").css("color", "#000000");
  })
  .blur(function(){ //focus out 일때
    if ($(this).val() == "") { //input값이 비어있을떄만.
    $(this).val("입력해주세요.").css("color", "#cccccc").one("focus", function() {
      $(this).val("").css("color", "#000000");
    })
  }
  });

});
