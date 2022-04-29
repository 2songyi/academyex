$(function(){
  // file load paging
  $("header").load("./header.html .inner");
  $("footer").load("./footer.html .inner");

  /* window Location href 값을 가져오고 split를 사용해 해당페이지를 인식할 수 있는
  스트링값으로 현재페이지 동일한 gnb li요소에 on class추가하기*/
  let hrefNum = window.location.href;
  let splitNum = hrefNum.split("ing/");
  let pageTxtSplit = splitNum[splitNum.length-1].split(".");
  let pageTxt = pageTxtSplit[0];

  $("header").load("./header.html .inner", function() {
    //로드완료 후 실행
    $("#gnb ul li").each(function(){
      if ($(this).text() == pageTxt) {
        $(this).addClass("on");
      } //메뉴 선택하면 색 변경하는거
    });
  });

});
