// console.log('hello javascript')
// 변수 선언과 할당
// var num = 15; //변수 선언과 할당을 동시에 할 수 있다.
// var num;
// num = 10; //변수 선언과 할당을 따로(뱐수에 값이 처음 할당될 경우 변수 초기화라고 함)
// console.log(num)
// num = 20; //변수의 값을 재할당
// console.log(num)
// alert('입력하신 숫자는 '+num+'입니다.') //경고창으로 띄우기
// alert(`입력하신 숫자는 ${num}입니다.`)

// 변수 다중 선언
var _sum_1, _sum_2, _sum_3, _total;
_sum_1 = 1000;
_sum_2 = 500;
_sum_3 = 2000;
_total = _sum_1 + _sum_2 + _sum_3;
// console.log(_total)
// alert(`합계는 ${_total}원 입니다.`)

// 원주율
var pi = 3.14159265;
var radius = 10;
var result;
// 원둘레
result = 2*pi*radius;
console.log(`원의 둘레는 ${result}입니다.`);

// 원의 넓이
result = pi*radius*radius;
console.log('원의 넓이는 '+result+'입니다.');

// 자료형의 종류
var stringVar = 'string'; //string 문자열 타입
var numberVar = 12345; //number 숫자타입
var booleanVar = true; //boolean true/false
var functionVar = function(){/*실행코드*/} //function 함수형타입
var objectVar = {/*변수, 함수, string, array, object*/} //object 객체형타입
