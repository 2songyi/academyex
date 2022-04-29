$(function(){
  // file reader
  // $(":file").mouseenter(function(){
  //   // 마우스 올렸을때
  //   $(this).after("<p>업로드 가능한 파일의 용량은 300kb입니다.");
  // }).mouseleave(function(){
  //   $(this).next().remove();
  // }); //mouseover, out보다 이벤트가 적게 실행됨

  // on
  // $(":file").on({mouseover: function(){}, mouseout: function(){});

  $("#img-input").change(function(){
    // console.log($(this)); //jquery object type 으로 요소 반환
    // console.log(this); //태그로 출력 dom요소로 반환
    readURL(this);
  });

  function readURL(input) {
    // console.log(input.files[0]);
    if (input.files && input.files[0]) { //파일이 존재할때
      // console.log("파일을 가져왔습니다.");
      let reader = new FileReader(); //내장객체 생성
      // console.log(reader);
      reader.readAsDataURL(input.files[0]); //파일데이터 가져옴
      reader.onload = function(e){ //객체가 로드되었을때
        // console.log(e.target.result); //e 안에 target 안에 result에 이미지값 있음
        $("#image-section").attr("src",e.target.result);
      }
    }
  }
});
