'use strict'

function autoType(elementClass, typingSpeed) {
  $(elementClass).each(function(){
    let thisElem = $(this);
    thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>');
    thisElem = thisElem.find(".text");

    let text = thisElem.text().trim().split('');
    thisElem.text("");
    let amntOfChars = text.length;
    let newString = '';

    setTimeout(function(){
      thisElem.css("opacity", 1);
      thisElem.prev().removeAttr("style");
      for (let i = 0; i < amntOfChars; i++){
        (function(count, char){
          setTimeout(function(){
            newString += char;
            thisElem.text(newString);
          }, count*typingSpeed)
        })(i + 1, text[i])
      }
    }, 1500);
  });


$(function(){
  autoType(".typing", 200);
});
