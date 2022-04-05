console.log(typeof('hello')); //string 문자형
console.log(typeof(613)); //number 숫자형
console.log(typeof(true)); //boolean 불형
console.log(typeof(function(){})); //function 함수형
console.log(typeof({})); //object 객체형
console.log(typeof([])); //배열도 객체에 포함된다.

// 문자열과 조합
// var stringVar = '안녕';
// var numberVar = 10;
// var sum = stringVar + numberVar;
// console.log(sum);
// console.log(typeof(sum));

// 숫자를 입력한 문자열과 조합
// var stringVar = '100';
// var numberVar = 10;
// var sum = stringVar + numberVar;
// console.log(sum); //문자열에 더하면 전부다 string이 된다.
// console.log(typeof(sum));

// 숫자형과 숫자형의 조합
var strVar = 50;
var numVar = 10;
sum = strVar + numVar;
console.log(strVar+','+typeof(strVar));
console.log(numVar+','+typeof(numVar));
console.log(sum+','+typeof(strVar));
