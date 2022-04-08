'use strict'

const date = new Date();
let hours = date.getHours();

if ( hours < 11 ) {
  alert(`현재시간 ${hours}시 아침식사 시간입니다.`);
} else {
    if ( hours < 15 ) {
      alert(`현재시간 ${hours}시 점심식사 시간입니다.`);
    } else {
      alert(`현재시간 ${hours}시 저녁식사 시간입니다.`);
    }
}
