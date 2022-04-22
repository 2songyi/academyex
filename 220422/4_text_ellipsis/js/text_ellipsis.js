$(function() {
  //text ellipsis
  let elem = $(".more-text");
  const showText = 100;
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let content = elem.html();
  let contentLeng = content.length;
  let lessText = content.substr(0, showText);
  let moreText = content.substr(showText, contentLeng);
  let changeHtml = '';
  if (showText < contentLeng) {
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
    elem.html(changeHtml);
  }
  $(".more-btn").click(function(e){=
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
