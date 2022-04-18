'use strict'

// function outFunc(a) {
//   let outerText = a;
//   console.log(outerText);
//   function innerFunc() {
//     let innerText = 'inner-text';
//     console.log(`${outerText}, ${innerText}`);
//   }
//   innerFunc();
// }
//-----
// outFunc('안녕하세요 외부함수입니다.');

// function outFunc(a) {
//   let outerText = 'outer-text';
//   function innerFunc(num) {
//     let innerText = num;
//     console.log(`${outerText}, ${innerText}`);
//   }
//   innerFunc(a);
// }
//
// outFunc('안녕하세요 내부함수입니다.');
//-----

function outFunc() {
  let outerText = 'outer-text';
  function innerFunc(a) {
    let innerText = 'inner-text';
    console.log(`${outerText}, ${a}`);
  }
  return innerFunc; //내부함수를 return을 통해 외부로 노출 closure: 이 경우 외부에서 매개변수를 가질 수 있다.
}

let closureFunc = new outFunc();
closureFunc('안녕하세요 크로저입니다.'); //return으로 받은 내부함수
// console.log(typeof(closureFunc));
//-----

/*
중첩함수
:변수선언 이름과 동일한 함수명을 사용 할 수 없고 변수로 사용된다
중첩 함수는 외부에서 내부함수를 호출할 수 없다(일반적으로) 내부에서만 호출이 가능함

클로저(폐쇄)
1.함수를 중첩으로 사용하여 외부와 단절 시킴
2.return을 사용하여 외부에 함수를 노출, 외부에서 매개변수 등 을 통해 내부함수에 접근할 수 있다.

*/
