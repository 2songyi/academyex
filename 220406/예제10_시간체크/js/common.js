'use strict'
// 시간체크하기
const date = new Date(); //생성자는 대문자로 시작
let year = date.getFullYear();
let month = date.getMonth(); //월은 0부터 시작해서 1더해줘야한다.
let day = date.getDate();
let weekday = date.getDay();
let hours = date.getHours(); //현재시간
let minutes = date.getMinutes(); //현재 분단위, date라는 객체에서 minute라는 함수를 가져와서 쓰겠다


if( hours < 12){
  alert(`지금은 ${year}년 ${month + 1}월 ${day}일 오전 ${hours}:${minutes}입니다.`)
}else if( hours > 12){
  alert(`지금은 ${year}년 ${month + 1}월 ${day}일 오후 ${hours - 12}:${minutes}입니다.`)
}else if( hours == 12){
  alert(`지금은 ${year}년 ${month + 1}월 ${day}일 정오입니다.`)
}
