'use strict'

//심각형

// let outPut = '';
// for (let i = 0; i < 15; i++){
//   for (let j = 15; j > i; j--){
//     outPut += ' ';
//   }
//   for (let k = 0; k < 2*i-1; k++){
//     outPut += '*';
//   }
//   outPut += '\n';
// }
//
// console.log(outPut);

//마름모

let outPut = '';
for (let i = 0; i < 15; i++){
  for (let j = 15; j > i; j--){
    outPut += ' ';
  }
  for (let k = 0; k < 2*i-1; k++){
    outPut += '*';
  }
  outPut += '\n';
}
for (let i = 15; i >= 0; i--){
  //>=0해줘야지 맨 밑 공간생김 , i = 15하면 뾰족해게 됨
  for (let j = 15; j > i; j--){
    outPut += ' ';
  }
  for (let k = 0; k < 2*i-1; k++){
    outPut += '*';
  }
  outPut += '\n';
}

console.log(outPut);
