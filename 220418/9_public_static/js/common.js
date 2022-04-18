'use strict'

class Mobility {
  static staticField = 'stativ1234';
  constructor(kind, mName, year) {
    this.kind = kind;
    this.mName = mName;
    this.year = year;
  }
}

let mobility1 = new Mobility('승용차', 'v3', '2020');
console.log(mobility1.staticField); //생성자 객체에서는 확인 할 수 없다.(복사본)
console.log(Mobility.staticField); //원형 객체에서는 상수값을 확인 할 수 있다.(원본)
