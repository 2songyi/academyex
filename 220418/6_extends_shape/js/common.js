'use strict'

class Shape {
  static circleRate = 3.14; //상수
  constructor(width, height, color) {
    this.width = width; //Shape.width
    this.height = height;
    this.color = color;
  }
  inputDraw(a, b) { //매개변수 추가: 값을 받아와서 그리기
    //드로잉 로직 구현
    console.log(`${a};${b}`);
  }
  draw() {
    console.log('도형그리기');
  }
  getArea() {
    console.log(`${this.width*this.height}`);
  }
}

class Rectangle extends Shape { //부모로부터 상속받음
}

class Triangle extends Shape {
  draw() {//(오버라이딩)
    console.log('삼각형 그리기');
    // super.draw(); //상위클래스 호출
  }
  getArea() {
    console.log((this.width * this.height) / 2);
  }
}

// let triClass = new Triangle(10, 20, 'blue');
// triClass.draw();
// triClass.getArea();

// let shapeBox = new Shape(10, 10, 'red');
// shapeBox.inputDraw(25, 10);
// shapeBox.draw();
// shapeBox.getArea();

//원형도형의 class생성
class Circle extends Shape {
  constructor(radius, color){
    super(); //생성자 재정의 시 부모의 field를 사용하지 않더라도 먼저 호출 후 아래 재정의 하여 사용함
    this.radius = radius;
    this.color = color;
  }
  draw() {
    console.log('원형 그리기');
  }
  getArea() {
    console.log('파이상수:'+Shape.circleRate); //constructor안에 있지 않기때문에 this로 가져올 수 없음
    console.log(`${Shape.circleRate * this.radius * this.radius}`);
  }
  rotate() { //개별함수 만들기
    console.log('원형도형 회전하기');
  }
}

let rect = new Rectangle(5, 8, 'red');
rect.getArea();
console.log(rect.color);
rect.draw();
let tria = new Triangle(5, 8, 'blue');
tria.getArea();
tria.draw();
let circ = new Circle(10, 'yellow');
circ.draw();
circ.getArea();
