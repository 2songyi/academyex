$(function() {
  // 1) script영역 append(), prepend() 사용 예시
  //prepend()
  // let elemNum = $("p#first");
  // elemNum.prepend("<span>hi!</span>")
  // //append()
  // elemNum.append("<span>have a good day</span>");

  /*
  p태그의 총 개수 3개
  각각의 p태그의 자식요소의 제일 앞쪽에 '<strong>kind: </strong>'을 추가하기
  for구문 사용해서 추가
  */
  // let pLeng = $("p").length;
  // for (let i = 0; i < pLeng; i++) {
  //   let elemNum = $(`p:nth-child(${i+1})`);
  //   elemNum.prepend("<strong>kind: </strong>");
  // }
  //
  // for (let i = 1; i < pLeng+1; i++) {
  //   let elemNum = $(`p:nth-child(${i})`);
  //   elemNum.append("<br><strong>add text</strong>");
  // }

  // 2)
  // $("ul li:nth-child(1) a").prepend("<img src='./img/bolt.png'>");
  // $("ul li:nth-child(2) a").prepend("<img src='./img/build.png'>");
  // $("ul li:nth-child(3) a").prepend("<img src='./img/paid.png'>");
  // $("ul li:nth-child(4) a").prepend("<img src='./img/watch.png'>");
  //배열, 반복구문으로 변경
  let imgArr = [];
  imgArr.push("<img src='./img/bolt.png'>");
  imgArr.push("<img src='./img/build.png'>");
  imgArr.push("<img src='./img/paid.png'>");
  imgArr.push("<img src='./img/watch.png'>");
  // for (let i = 0; i < imgArr.length; i++) {
  //   $(`ul li:nth-child(${i+1}) a`).prepend(imgArr[i]);
  // }

  // let elem = $("ul li");
  // console.log($("ul li").find("a"));

  /* 위 코드를 eq() 명령어(method)를 사용해 변경하기*/
  for (let i = 0; i < imgArr.length; i++) {
    // $(`ul li:eq(${i}) a`).prepend(imgArr[i]);
    $("ul li").eq(i).find("a").prepend(imgArr[i]); //메서드체인사용
  }
});
