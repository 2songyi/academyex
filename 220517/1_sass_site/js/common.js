$(function(){

  /* 실습
  : #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여 해당 메뉴에 on class 추가하기
   */

  // let currentHref = $(location).attr("href").split("/");
  // currentHref = currentHref[currentHref.length - 1].split('.')[0];
  let locationFunc = splitHref(location); //each안에서 하면 each문 돌지않아도 되는데 돌아서 밖에서 선언하는게 나음

  $("#lnb a").each(function(){
    //text는 대문자가 있어서 매칭이 안됨. href값에서 가져옴
    // let matcbHref = $(this).attr("href").split('/');
    // matchHref = matcbHref[matcbHref.length - 1].split('.')[0]; //length-1 마지막인덱스

    if (locationFunc == splitHref(this)) {
      $(this).addClass("on");
    }
  });

  function splitHref(x) { //함수로 리팩토링
    let xHref = $(x).attr("href").split("/");
    xHref = xHref[xHref.length - 1].split('.')[0];
    return xHref;
  }

});
