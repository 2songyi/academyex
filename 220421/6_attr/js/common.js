$(function() {
// attr()
// #wrap-id class attribute 가지고온다
//javascript 구현
let attrNum = document.querySelector("#wrap-id").getAttribute('class');
console.log(attrNum);
//jquery 구현
let num = $("#wrap-id").attr("class");
console.log(`get class attribute: ${num}`);
//.wrap-inner 클래스로 선택해 id값을 가져오시오
num = $(".wrap-inner").attr("id");
console.log(`get id attribute: ${num}`);
});
