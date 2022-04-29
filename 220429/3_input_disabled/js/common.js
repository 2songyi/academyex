$(function(){
  // input disalbed
  $("select").change(function(){
    // console.log($(this)[0][0]); //$(this)의 첫번째 배열에 첫번쨰꺼는 10대
    // console.log($(this)[0][$(this)[0].length-1]); //마지막 값 가져오기
    let selVal = $(":selected").attr("value"); //선택되어 있는거의 값을 가져오기
    // console.log($(this).val());

    /*10대 일때는 input text field를 비활성화 하고 10대가 아닐때는 활성화 하기
    removeAttr("") : attribute 삭제*/
    if (selVal == '10대') {
      $("input").attr("disabled", "disabled"); //true도 가능
    } else {
      $("input").removeAttr("disabled");
    }

  });
});
