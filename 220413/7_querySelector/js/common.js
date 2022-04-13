'use strict'
// querySelector

function textColorChange() {
  // document.getElementsByTagName('p')[0].style.color = 'red';
  // document.querySelector('.txt').style.color = 'blue'; //css랑 표기법 동일
  let txtNum = document.querySelectorAll('.txt'); //class name "txt"인 배열리스트 가져온다.
  let txtNumLeng = txtNum.length; //배열의 수
  console.log(txtNum.length);

  for (let i = 0; i < txtNumLeng; i++) {
    // document.querySelectorAll('.txt')[i].style.color = 'red'
    txtNum[i].style.color = 'red';
  }
}
