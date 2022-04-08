'use strict'
let startTime = new Date().getTime(); //현재시간(1/1000초)
console.log(startTime);

for (let i = 0; new Date().getTime() < startTime + 1000; i++){
  // console.log(`${startTime}, ${new Date().getTime()}`)
  console.log(i);
}
