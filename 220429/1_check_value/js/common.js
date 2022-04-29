$(function(){
  // check value
  $("a").click(function(){
    let mailNum = $("input[name=mail]").val(); //메일주소 입력값
    let checkNum = $("input[name=check]").val();
    if (mailNum !== checkNum) {
      $("em").text("메일 주소가 동일하지 않습니다.");
      // return false;
    } else {
      $("em").text("메일 주소가 동일합니다.");
      // return false;
    }

  });
});
