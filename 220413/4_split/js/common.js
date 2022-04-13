'use strict'
// split
let num = '1,2,3,4,5';
let array = num.split(',');
// console.log(array[1]);

let chatText_1 = "How are you doing today?";
let chatText_2 = "let's go";
let chatText_3 = "i am a boy";
let chatText_4 = "good luck man!";

// let str = chatText_1.split('a'); //'a'로 문자열을 잘라서 배열로 반환
// let str = chatText_1.split('a',2); //배열의 2번째까지만 가져오겠다
let str = chatText_1.split(' '); //띄어쓰기 기준으로 잘라서 단어들 반환
// console.log(str)

let str_1 = chatText_1.split(' ');
let str_2 = chatText_2.split(' ');
let str_3 = chatText_3.split(' ');
let str_4 = chatText_4.split(' ');

console.log(`${str_1[2]} ${str_1[1]} ${str_3[2]} ${str_4[0]} ${str_4[2]}`);
