$(function() {
  //prev toggle 사용
  // document.quertSelector("#gnb").prevElementSibiling
  console.log($("#gnb").prev());
  console.log($("#gnb").next());
  $("button").click(function(){
    $("#header").toggle(); //노출유무 
  });



});
