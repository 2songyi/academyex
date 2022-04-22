$(function() {
  //text ellipsis

  // elem = document.body.getElementsByClassName('more-text');
  // for (let i = 0; i < elem.length; i++) {
  //   let content = elem[i].html();
  // } //아래 each method와 같은 구문
  // elem.each(function(){
  //   console.log($(this).text());
  // }); //이렇게 하면 각각의 글들이 다 나옴

  let elem = $(".more-text");
  const showText = 100;
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";

  elem.each(function(i) {
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = '';

  if (showText < contentLeng) {
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
    $(this).html(changeHtml);
      if( i == 0) {
        $(this).html('1'+ changeHtml);
      }else if( i == 1 ) {
        $(this).html('2' + changeHtml);
      }else if( i == 2 ) {
        $(this).html('3' + changeHtml);
      }
  }
});

  $(".more-btn").click(function(e){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).html(`<span>${lessBtnText}</span>`);
    } else {
      $(this).addClass("active");
      $(this).html(`<span>${moreBtnText}</span>`);
    }
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    e.preventDefault();
    return false;
  });

});
