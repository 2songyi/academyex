'use strict'
$(function(){
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(x){
      $("item", x).each(function(){
        let titleTxt = $("title", this).text();
        let linkTxt = $("link", this).text();
        let dateTxt = $("date", this).text();
        let descTxt = $("desc", this).text();
        $("dl").append(`<dt><a href='${linkTxt}'>${titleTxt}</a></dt><dd>${dateTxt}</dd><dd>${descTxt}</dd>`);
      });
    }
  });
  $("button").click(function(){
    $("button").toggleClass("on");
  });
});
