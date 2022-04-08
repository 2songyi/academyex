'use strict'
// number string test
window.onload = function(){
  let num = 1;
  let textNum = '안녕';
  let numberVar = 10;
  // console.log(num + numberVar); 11나옴
  let changeString = String(num);
  let changeNumber = null;
  // console.log(changeString + numberVar); 110나옴
  // console.log('값: '+changeString+', 데이터타입: '+typeof(changeString));

  changeString += numberVar;
  changeNumber = Number(changeString);
  // console.log(changeString) //string type  110
  console.log('값: '+(changeNumber + 20)+', 데이터타입: '+typeof(changeNumber));
}
