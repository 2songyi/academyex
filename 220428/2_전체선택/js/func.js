// 체크박스 전체선택 힘수
  function allCheckFunc(btn, elem) {
    btn.toggleClass("all");
    if (btn.hasClass("all")) {
      elem.prop("checked", true);
      btn.text("전체해제")
    } else {
      elem.prop("checked", false);
      btn.text("전체선택")
    }
  }
