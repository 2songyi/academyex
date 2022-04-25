$(function() {
  //input value

  let pHtml = $("p").html();

  $("button").click(function() {
    let btnNum = $(this); //현재누른버튼 불러옴

    // console.log(btnNum);
    // elem.innerText : js
    if (btnNum.text() == "확인") {
      //elem.dcu~.value : js
      let inputVal = $("input").val(); //input의 value값을 가져올 수 있음
      $("p").text(`${inputVal}로 전송이 됩니다. 전송을 원하시면 전송버튼을 눌러주세요.`)
      btnNum.text("전송"); //클릭시 확인에서 전송으로 글자 변경

      //for : js / Each : jquery
      /*each를 사용해 버튼의 첫번째 요소의 텍스트를 '전송'으로 변경*/
      // $("button").each(function(i) { //"button"의 개수만큼 i에 담기게 됨
      //   if (i == 0) {
      //     $(this).text("전송");
      //   }
      // });

    } else if (btnNum.text() == "reset") {
      /*html(p태그 내부) 초기화*/
      //방법 1 : 직접입력
      // $("p").html("E-mail : <input type='email' name='name'>");
      //방법 2 : 초기 로드 시 html을 변수로 담는다.
      $("p").html(pHtml);

      /*버튼 텍스트 초기화*/
      //방법 1 : each
      // $("button").each(function(i){
      //   if (i == 0 && $(this).text() == "전송"){
      //     $(this).text("확인");
      //   }
      // });
      //방법 2 : prev
      let btnNumPrev = btnNum.prev();
      if (btnNumPrev.text() == "전송") {
        btnNumPrev.text("확인");
      }
      // if ($(".btn01").text() == "전송") {
      //   $(".btn01").text("확인");
      // }

    } else if (btnNum.text() == "전송"){
      // $("p").text("전송이 완료 되었습니다.");
      alert("전송이 완료 되었습니다.");
      // window.location.href = "http://naver.com";
      $(location).attr("href", "http://naver.com");
    }

  });
});
