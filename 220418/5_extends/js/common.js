'use strict'

let objNum = {name:'jane'}
console.log(objNum.name);

class Test { //생성자의 이름은 대문자로시작
  constructor(num) {
    this.num = num;
  }
  popupFunc() {
    alert('this is popup.');
  }
}

let testBox = new Test('안녕하세요');
console.log(testBox.popupFunc());
