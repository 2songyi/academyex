$(function() {
  //preppendTo(), appendTo()
  // $("strong").appendTo("p"); //strong태그를 p태그안에 넣는다
  // $("strong").prependTo("p");
  // $(".items:last-child").prependTo("#wrap");
  // $(".items:nth-child(3)").appendTo("#wrap"); //바뀐 후 위치를 가져옴

  //insertAfter() inserBefore()
  $("#wrap").insertBefore("p"); //wrap을 p의 바로앞에 넣기

  // items5의 바로 앞으로 items3을 이동시키기
  $(".items:nth-child(5)").insertBefore(".items:nth-child(3)");
  // strong태그를 items3자리 뒤로 이동시키기
  $("strong").insertAfter(".items:nth-child(4)");

  //inserBefore, inserAfter 작동 이후 last-child 요소가 변경된다.

});
