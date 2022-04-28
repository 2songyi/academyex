$(function(){
  // label change
  // input 선택 방식 1
  // let inputElem = $("input[type=radio]");
  // console.log(inputElem);

  // input 선택 방식 2 (축약형)
  // let inputElem = $(":radio");
  // console.log(inputElem);

  // $(":radio").change(function(){
  //   // console.log('change');
  //   let genderNum = $(this).attr("id"); //id값 가져오기
  //   // $("label[for='"+genderNum+"']").text(); //text를 가져와서 남성, 여성 텍스트가 뜸
  //   $("label").css("font-weight",""); // label의 모든 요소 font-weight 초기화
  //   $("label[for='"+genderNum+"']").css("font-weight","bold");
  // });

  /*취미를 구분하는 checkbox 및 label를 추가하고 (헬스, 그림)
    change method 내부에서 if문을 사용해 type 속성을 구분하고 checkbox, radio 일때
    로직을 구현하기*/
  // checked 확인 방법
  // 1번
  // if ($("input[type:checkbox]:checked").length > 0) { }
  // 2번
  // if ($("input[type:checkbox]:checked").prop("checked") == true) { }
  // 3번
  // if ($("input[type=checkbox]").is(":checked") == true) { }

  $(":checkbox, :radio").change(function(){
    let type = $(this).attr("type");
    if (type == 'radio') {
      let genderNum = $(this).attr("id");
      $("input[type=radio] + label").css("font-weight","");
      $("label[for='"+genderNum+"']").css("font-weight","bold");
    } else if (type == 'checkbox') {
      let hobbyNum = $(this).attr("id");
      if ($(this).prop("checked") == true) {
        $("label[for='"+hobbyNum+"']").css("font-weight","bold");
      } else {
        $("input[type=checkbox] + label[for='"+hobbyNum+"']").css("font-weight","");
      }
  }});
});
