$(function() {
  //text ellipsis
  let elem = $(".more-text");
  const showText = 100;  //보여주고 싶은 글자 수
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let content = elem.html(); //이렇게 가져온 텍스트의 길이가 필요 (태그가 들어갈 수읶기때문에 text대신 html로 가져옴)
  let contentLeng = content.length; //총 글자 수
  let lessText = content.substr(0, showText);  //(시작인덱스, 길이)화면 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText, contentLeng);
  let changeHtml = ''; //골라낸 텍스트 다시 합쳐서 넣기

  if (showText < contentLeng) {
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
    elem.html(changeHtml); //글자가 showText에서 설정한 개수보다 적으면 버튼도 안보임
  }

  // 버튼 실행 영역
  /*.more-btn 버튼을 클릭힐때마다 .active가 toggle형태로 추가될 수 있도록 if구문 작성하기*/
  $(".more-btn").click(function(e){ //if에서 이 class를 추가해줘서 여기서 불러오는거 가능
     // $(this).toggleClass("active"); //클래스제거 추가만하면 toggle쓰면 편함
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).html(`<span>${lessBtnText}</span>`);
    } else {
      $(this).addClass("active");
      $(this).html(`<span>${moreBtnText}</span>`);
    }

    // console.log($(this).prev()); //바로앞 요소 span
    // console.log($(this).parent()); //부모영역 선택 메서드

    /*prev(), parent(), toggle() 3개의 메서드를 사용해 줄임말 포함된 span과 잘려나간 텍스트(moreText)를
    담은 span을 toggle형태로 반환하기*/
    //prev() : 선택자의 바로 앞 요소 선택
    //next() : 선택자의 바로 뒤 요소 선택
    //parent() : 선택자의 부모 요소 선택
    //toggle() : display:none 반복하여 나타냄
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    e.preventDefault();
    return false;

  });


});
