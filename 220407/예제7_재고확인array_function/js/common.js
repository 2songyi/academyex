'use strict'
//상품을 입력받고 해당 상품의 재고를 확인하는 프로그램 구현
let count = 0;
let fruit = ['파인애플', '딸기', '오렌지', '바나나', '청포도' ];
let newFruit = prompt('검색하실 과일명을 입력해주세요.', '과일명');

function findFruit(){
  if (count < fruit.length){
    if (newFruit == fruit[count]){
      alert(`검색하신 ${newFruit}은 재고가 있습니다.`);
      let check = confirm('구매하시겠습니까?');
        if (check){
          alert('구매가 완료 되었습니다.')
        } else{
          alert('구매가 취소 되었습니다.')
          }
    }
  count++;
  findFruit();
  }
}

findFruit();
