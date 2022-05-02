$(function(){
  // ajax사용
  $.ajax({ //객체형태로 받아옴
    url: 'data.xml', //데이터어디에
    dataType: 'xml', //어떤데이터
    success: function(data){ //위의 데이터를 파라미터로 받아올거임

      $("item", data).each(function(){ //length값 가져와서 for구문으로 돌릴 수 있음
        // console.log($("link", this).text());
        // console.log($("title", this).text());
        // console.log($("description", this).text());
        let comp = $("company", this).text();
        let linkTxt = $("link", this).text();
        let titleTxt = $("title", this).text();
        let date = $("date", this).text();
        let name = $("name", this).text();
        let desc = $("description", this).text();
        $("dl").append(`<dt><a href='${linkTxt}'>${titleTxt}</a></dt>
        <dd>${date}, ${name}</dd>
        <dd>${desc}</dd>`);
      });
    }
  });

  $("button").click(function(){
    $("button").toggleClass("on");
  });

});
