'use strict'
//while구문
let travel = ['파리', '뉴욕', '캐나다', '런던', '스위스'];
//
// let count = 0;
// while (count < travel.length){
//   console.log(travel[count]);
//   count++;
//
// }
//
// let travel = ['파리', '뉴욕', '캐나다', '런던', '스위스'];
// let count = travel.length - 1;
//
// while (count >= 0){
//   console.log(travel[count]);
//   count--;
// }


//for구문
for (let count = 0; count < travel.length; count++){
  console.log(travel[count]);
}

for (let count = travel.length - 1; count >= 0; count--){
  console.log(travel[count]);
}
