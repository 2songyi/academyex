$(function(){
  // let thisIndex = 0;
  // $("td").mouseover(function(){
  //   // $(this).index(); //현재의 인덱스값을 가져올 수있다.(형제요소중 몇번쨰인지)
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $(`td:nth-child(${thisIndex})`).addClass("hover");
  // }).mouseout(function(){
  //   thisIndex = $(this).index() + 1;
  //   $(`td:nth-child(${thisIndex})`).removeClass("hover");
  // });

  let thisIndex = 0;
  // $("td").mouseenter(function(){
  //   // $(this).index(); //현재의 인덱스값을 가져올 수있다.(형제요소중 몇번쨰인지)
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $(`td:nth-child(${thisIndex})`).addClass("hover");
  // }).mouseleave(function(){
  //   thisIndex = $(this).index() + 1;
  //   $(`td:nth-child(${thisIndex})`).removeClass("hover");
  // });
  //객체형태로 고치기
  // $("td").on({mouseenter: function(){
  //   thisIndex = $(this).index() + 1;
  //   $(`td:nth-child(${thisIndex})`).addClass("hover");
  // }, mouseleave: function(){
  //   thisIndex = $(this).index() + 1;
  //   $(`td:nth-child(${thisIndex})`).removeClass("hover");
  // }});

  // 다른 구조로 작성하기
  $("td").on({mouseenter: function(){
    console.log(this);
    thisIndex = $(this).index();
    // $("table tr").each(function(){
      // $(this).find("td").eq(thisIndex).addClass("hover");
    // }
  );
  }, mouseleave: function(){
    thisIndex = $(this).index();
    $("table tr").each(function(){
      $(this).find("td").eq(thisIndex).removeClass("hover");
    });
  }});

});
