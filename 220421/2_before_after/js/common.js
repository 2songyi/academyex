$(function() {
  //script 영역 before(), after()
  //before()
  // $("p#first").before("<h2>html</h2>");
  // $("p#second").before("<h2>css3</h2>");
  // $("p#third").before("<h2>javascript</h2>");
  //prepend는 자식요소의 앞쪽

  $("p#first").before("<h2>html</h2>").after("<h2>css3</h2>");
  $("p#second").after("<h2>javascript</h2>");
});
