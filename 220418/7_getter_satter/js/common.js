'use strict'

class User {
  constructor(name, age, local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce(){
    alert(`안녕하세요. ${this.local}에 사는 ${this.age}살, ${this.name}입니다.`);
  }
  get age() { //get과 set은 똑같이 써야하고 앞에 _도 써야함
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value; //나이가 0보다 작으면 0으로 넣고 아니면 value그대로
  }
}

let user1 = new User('홍길동', -1, '대구');
user1.introduce();
