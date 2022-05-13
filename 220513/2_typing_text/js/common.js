'use strict'
function autoType(elementClass, typingSpeed) {
  // console.log(elementClass + typingSpeed);
  let thisElem = $(elementClass);
  // console.log(thisElem);
  thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>'); //앞쪽에 커서를 넣을거임
  // 커서의 위치를 -5만큼 줬는데 텍스트 없을때는 필요없으니 초기화
  thisElem = thisElem.find(".text"); //텍스트로 재할당
  let text = thisElem.text().trim().split(''); //trim 텍스트 양쪽끝에 있는 공백 없애줌
  // console.log(text[0]); //split배열이라 배열로 하나씩 받아올 수 있음
  thisElem.text(""); //처음에는 텍스트가 비어있어야함

  let amntOfChars = text.length; //amount 텍스트 개수
  // console.log(amntOfChars);
  let newString = ''; //텍스트들을 담을 변수

  setTimeout(function(){ //일정시간 뒤 실행
    thisElem.css("opacity", 1); //thisElem -> text
    thisElem.prev().removeAttr("style"); //위에서 설정해준 커서 스타일 없앰
    for (let i = 0; i < amntOfChars; i++){
      //for구문은 시간제어가 안돼서 setTimeout한번 더 써줌
      (function(count, char){ //즉시실행함수
        setTimeout(function(){
          newString += char; //받아온 글자 하나하나를 newString에 넣겠다
          thisElem.text(newString);
        }, count*typingSpeed) //함수에 넣은 200이 타이핑스피드고 count는 for문의 i임.
      })(i + 1, text[i])
    }
  }, 1500);
}

$(function(){
  autoType(".typing", 200);

});
