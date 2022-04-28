$(function(){
  // 1) click event, attr
  // $("button").click(function() {
    // $("input[type='checkbox']").attr("checked", "checked");
    // $(":checked").attr("checked", "checked"); //축약형
  // });

  // 2) on method, prop
  $("body").on("click", "button", function() {
    // $(":checkbox").attr("checked", "checked"); //true, false도 사용 가능
    // $(":checkbox").prop("checked", true);

    // $(":checkbox").each(function(){ //토글처럼 작동
    //   if ($(this).is(":checked")) { //체크가 되어있다면 체크 해제
    //     $(this).prop("checked", false);
    //   } else {
    //     $(this).prop("checked", true); //미체크시 체크
    //   }
    // });

    /* 전체 선택 버튼을 all 클래스를 추가해 checkbox를 모두 선택하고
    버튼텍스트는 '전체 해제'로 변경 전체 해제 버튼을 클릭하면 all을 제거하고
    checkbox를 모두 선택 해제하는 로직을 구현하기 */
    // toggleClass, hasClass, text, Prop
    $("button").toggleClass("all");
    if ($("button").hasClass("all")) {
      $(":checkbox").prop("checked", true);
      $("button").text("전체해제")
    } else {
      $(":checkbox").prop("checked", false);
      $("button").text("전체선택")
    }

  });
});
