$(function(){
  // ajax사용
  $.ajax({ //객체형태로 받아옴
    url: 'data.xml', //데이터어디에
    dataType: 'xml', //어떤데이터
    success: function(data){ //위의 데이터를 파라미터로 받아올거임
      // 실행구문
      // console.log($(data).find("item")); //item의 개수를 가져옴
      // console.log($("item",data));

      /* 데이터의 item요소를 추출해 아래와 같이 개별로 dl의 내부 영역에 삽입하기.
      dt : xml파일 내부 item의 타이틀
      dt a href : xml파일 내부 item의 link
      dd : xml파일 내부 item의 description
      <dt><a href='http://daum.net'> 우주에서 숨쉰다...</a><dt>
      <dd>지구를 떠나서 ...</dd>  */
      /* 1.each 사용, 2.data정보를 tag와 조합, 3.append,prepend or string type의
      빈 변수 에 복합대입연산으로 추가가능*/


      // $(data).find("item").each(function() {
      //   console.log($(this).find("link").text());
      //   console.log($(this).find("title").text());
      //   console.log($(this).find("description").text());
      // });

      $("item", data).each(function(){ //length값 가져와서 for구문으로 돌릴 수 있음
        // console.log($("link", this).text());
        // console.log($("title", this).text());
        // console.log($("description", this).text());
        let linkTxt = $("link", this).text();
        let titleTxt = $("title", this).text();
        let desc = $("description", this).text();
        $("dl").append(`<dt><a href='${linkTxt}'>${titleTxt}</a></dt><dd>${desc}</dd>`)
      });
    }
  });

  /* 기사내용 click event로 노출*/
  // $("button").click(function(){
  //   if ($("button").hasClass("on")) {
  //     $("button").removeClass("on");
  //   } else {
  //     $("button").addClass("on");
  //   }
  // });
  
  $("button").click(function(){
    $("button").toggleClass("on");
  });

});
