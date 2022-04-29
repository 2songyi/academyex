$(function(){
  // file load
  $("#content").load("./load_file.html .section1"); //초기에 이거뜨게

  // $("ul li").click(function(){
  //   // console.log($(this).index()); //내가 클릭한게 몇번째 인덱스인지 알수있음
  //   // console.log($(this).attr("id"));
  //   let thisId = $(this).attr("id");
  //   if (thisId == "section1") {
  //     $("#content").load("./load_file.html .section1");
  //   } else if (thisId == "section2") {
  //     $("#content").load("./load_file.html .section2");
  //   } else if (thisId == "section3") {
  //     $("#content").load("./load_file.html .section3");
  //   }
  // });

  /* 위 코드를 리팩토링해서 코드를 재작성하기*/
  $("ul li").click(function() {
    //click하는 요소의 index값을 받아온다.
    let thisIndex = $(this).index() + 1;
    let thisId = $(this).attr("id");
    if (thisId == `section${thisIndex}`) {
      $("#content").load(`./load_file.html .section${thisIndex}`);
    }
    
    // 내가쓴코드
    // let thisId = $(this).attr("id");
    // let count = $("li").length;
    // for (let i = 1; i <= count; i++) {
    //   if (thisId == `section${i}`) {
    //     $("#content").load(`./load_file.html .section${i}`);
    //   }
    // }
  });

});
