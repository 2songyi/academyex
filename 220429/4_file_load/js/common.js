$(function(){
  // file load
  $("button").click(function(){
    $("p").load("./sample1.txt"); //load 외부파일을 가져올 수 있음. p태그안에 해당요소를 load
  });
});
