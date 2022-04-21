$(function() {
  // wrap(), wrapAll(), wrapInner()
  //wrap() : 특정 태그를 지장한 태그로 감싸는 method
  // $("strong").wrap("<h2></h2>"); //선택한 요소를 개별로 하나씩 감쌈
  /*
  menu 클래스 태그의 자신 요소 span을 선택하고 개별요소를
  "<a href="http://naver.com" target=''></a>" 로 감싸기.
  */
  // $(".menu ul li span").wrap("<a href='http://naver.com' target='_self'></a>")

  // $("span").wrapAll("<heaer></header>"); //전체를 한번에 다 감쌈
  //wrapAll주의사항 : 다른요소에 있는 span도 다 끌고와서 첫번째 실행된 태그에 다 모임
  // $("").wrapInner();

  // wrapAll()
  /* 1) .wrap-all의 요소에 있는 p태그들을 .item-wrap클래스 갖고 있는 div태그로
  wrapAll메서드를 사용해 감싸기 감싸기 */
  $(".wrap-all p").wrapAll("<div class='item-wrap'></div>");
  /* 2) .wrap-all의 요소에 있는 span태그들을 .span-wrap클래스 갖고 있는 div태그로
  wrapAll메서드를 사용해 감싸기 감싸기 */
  $(".wrap-all span").wrapAll("<div class='span-wrap'></div>");
  /* 3) .wrap-all의 요소에 있는 .items태그들을 .div-item-wrap클래스 갖고 있는 div태그로
  wrapAll메서드를 사용해 감싸기 감싸기 */
  $(".wrap-all .items").wrapAll("<div class='div-item-wrap'></div>");
  /* 4) strong태그들을 .title클래스 갖고 있는 div태그로 wrapAll메서드를 사용해 감싸기 감싸기 */
  $("strong").wrapAll("<div class='title'></div>");

  //wrapInner()
  // wrapInner method사용시 선택한 요소의 자식 요소 모두를 특정태그로 감싼다.
  $(".wrap-inner").wrapInner("<div class='inner'></div>"); //wrap-inner의 자식요소를 다 감쌈
  // .items의 자식요소들을 wrapInner를 사용해 "<a href='http://daum.net'></a>"로 감싸기
  //.items안에 있는 텍스트들 nodeText라 특정 이름을 이용해 특정불가능. 그래서 자식요소로 선택해서 감싼다.
  $(".items").wrapInner("<a href='http://daum.net'></a>");
  
});
