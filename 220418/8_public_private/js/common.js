'use strict'

class User {
  #idNumber = '1234'; //private field (#) 이 안에서는 사용가능 외부에서 사용 불가능
  constructor(name, age, local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  //소개
  introduce() {
    alert(`안녕하세요. ${this.local}에 사는 ${this.age}살, ${this.name}입니다.${this.#idNumber}`);
  }
}

let user1 = new User('tom', 20, 'LA');
// user1.introduce();
// console.log(user1.#idNumber); 외부에서 pricate불러서 사용하는거 불가능
