'use strict'

// class ClassName {
//   constructor() {
//
//   }
// }

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.getProduct = function() {
    // console.log('get product!');
  }
}

function Food(name, price) {
  // Product.call; //Product객체 함수를 가져올 수 있음
  Product.call(this, name, price); //원형객체를 상속받음
  this.category = 'food';
}

let pd = new Product('사과', 500);
console.log(pd.price);
pd.getProduct();

// let bread = new Food('chocobread', 700);
// console.log(bread.category); //food

//bakery객체 생성 후 alert으로 정보 출력
function Bakery(name, price) {
  Product.call(this, name, price);
  this.category = 'bakery';
  this.pdCheck = function() {
    alert(`${bakery.category} 카테고리에서 구매하신 상품은 ${bakery.name}이고 상품의 금액은 ${bakery.price}원 입니다.`)
  }
}
let bakery = new Bakery('cheese-bread', 7000);
bakery.pdCheck();
