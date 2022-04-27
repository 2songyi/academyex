$(function(){
  // change
  /* 1) prev(), next(), find() method 를 사용해 변경된 select값을 해당 input에 입력하기*/
  // $("select").change(function() {
  //   let thisVal = $(this).val();
  //   $(this).next().find("input").val(thisVal);
  // });

  // $("input.inputtest").change(function() {
  //   alert(`input text가 ${$(this).val()}로 변경되었습니다.`);
  // });

  // 2)
  // $("select").change(function() {
  //   let thisVal = $(this).val();
  //   // window.location.href = thisVal; //해당페이지로 클릭하면 이동되는거
  //   $(location).attr("href", thisVal);
  //   console.log(thisVal);
  // });

  /* 1), 2) type을 change method 내부에서 if구문을 사용해 구현하기*/
  $("select").change(function() {
    let thisVal = $(this).val();
    if ($(this).hasClass("family-site")) {
      $(location).attr("href", thisVal);
    } else {
      $(this).next().find("input").val(thisVal);
    }
  });

  // let selectElem = document.querySelector("select");
  // selectElem.addEventListener("change", function(){
  //
  // })

});
