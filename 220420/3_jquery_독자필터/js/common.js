'use strict'
$(function() {
  /* first, first-child/ last, last-child 의 비교예제 */
  // $("p:first-child").css("color","red"); //p를 자식요소로 갖고 있는 요소의 자식들중 첫번째 p를 선택
  // $("p:first").css("color", "blue"); //document 전체에서 선택한 요소의 첫번째를 선택(제일 상위에 있는 p)
  // $("p:last-child").css("color","green");
  // $("p:last").css("color", "skyblue");

  /* even, odd홀수 */
  // $("li:even").css("color", "green"); //css랑 다르게 index를 0으로 시작
  // $("li:odd").css("color", "pink");
  //인덱스값이 0부터 시작한다.css의 even과 odd는 선택이 다르다.

  /* eq, gt(greater than)초과, lt(less than)미만 */
  // $("li:eq(2)").css("color", "red"); //해당 인덱스와 같은 위치의 요소를 선택(index 0부터 시작)
  // $("li:gt(2)").css("color", "blue"); //본인보다 큰거
  // $("li:lt(2)").css("color", "pink"); //본인보다 작은거
  // console.log($("li:gt(2)").length); //뒤에 몇개남았는지
  // $("li:lt(2)").css("color","green"); //less than eq기준으로 index가 작은 요소들을 선택

  /* heading 태그 선택*/
  // $(":header").css("color", "red");
  // $("h1, h6").css("color", "blue");

  /*contains 필터 선택 예제*/
  //contains : 문자열로 포함 유무 확인 후 요소 선택
  // $("li:contains('menu1')").css("color", "red");
  // $("p:contains('사과')").css("color", "red");
  // $("p:contains('오렌지')").css("color", "orange");
  // $("p:contains('안녕')").css("color", "skyblue");
  //
  // let elem = $("li:contains('menu1')");
  // console.log(elem);
  // if (elem.length > 0) {
  //   console.log('menu1이 존재합니다.');
  // }

  /*has 예제*/
  //":has"태그 포함 유무 확인휴 선택
  // $("li:has(strong)").css("color", "red");
  /*
  1. p태그 갖거 있는 li 텍스트가 blue변경
  2. span 태그 갖고 있는 li 텍스트 색상 orange로 변경
  3. a 태그 갖고 있는 li 텍스트 색상 green로 변경
  */
  // $("li:has(p)").css("color", "blue");
  // $("li:has(span)").css("color", "orange");
  // $("li:has(a), li:has(a) a").css("color", "green"); //a태그를 포함하고 있는li의 a태그 색 변경

  //자식요소를 가지고 있는 요소를 선택
  $("li:parent").css("border", "1px solid red");
  //부정유사클래스를 사용해 자식 요소가 존재하지 않는 요소를 선택할 수 있다.
  // $("li:not(parent)").css("border", "1px solid red");

  
});
