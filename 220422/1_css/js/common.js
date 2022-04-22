$(function() {
  // css() 사용 3가지 방법
  // 방법1
  // $(".box").css("width", "300px");
  // $(".box").css("height", "300px");
  // $(".box").css("border", "5px solid yellow");
  // 방법2
  // $(".box").css("width", "300px").css("height", "300px").css("border", "5px solid yellow");
  // 방법3
  $(".box").css({"width":"300px", "height":"300px", "border":"5px solid yellow"});
  
});
