'use strict'

//10, 20을 매개변수로 받아 직사각형의 넓이를 구하는 내부함수(콜백함수)를 만드시오

//삼각형이나 원이나 다른 도형들의 넓이 구할때도 사용할 수 있게
function areaFunc(a, b, c) {
  let multi = a * b;
  return c(multi); //square에서 return한거는 areafunc으로만 오고 여기서 밖으로 값을 보내려면 이 안에서도 return해줘야함
}

function square(num) {
  // console.log(num);
  return num;
}

areaFunc(10, 20, square);
console.log(areaFunc(10, 20, square)) //areaFunc에서도 return해줘야 값이 나타남
