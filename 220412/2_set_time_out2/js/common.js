'use strict'

function timeText(){
  let x = document.getElementById('txt');
  // x.value = 'this setTimeout';
  // 특정시간이 경과했을때 input의 value값을 바꾸기
  setTimeout(function(){x.value = '2초'}, 2000);
  setTimeout(function(){x.value = '4초'}, 4000);
  setTimeout(function(){x.value = '6초'}, 6000);
  setTimeout(function(){x.value = '8초'}, 8000);
  setTimeout(function(){x.value = '10초'}, 10000);
}
