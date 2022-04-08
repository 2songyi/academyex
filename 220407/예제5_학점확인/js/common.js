'use strict'

let score = prompt('학점을 입력하세요', '학점');

if (score == '학점' || score == '') {
  alert(`입력된 숫자가 없습니다.`)
} else {
  score = Number(score);
  if (isNaN(score)) {
    alert('영문자/한글/특수문자는 사용할 수 없습니다. 숫자를 입력해주세요.')
  } else if (score > 4.2 && score <= 4.5) {
    alert(`학점은 A+입니다.`)
  } else if (score > 3.8 && score <= 4.2) {
    alert(`학점은 A0입니다.`)
  } else if (score > 3.4 && score <= 3.8) {
    alert(`학점은 A-입니다.`)
  } else if (score > 3.1 && score <= 3.4) {
    alert(`학점은 B+입니다.`)
  } else if (score > 2.8 && score <= 3.1) {
    alert(`학점은 B0입니다.`)
  } else if (score > 2.4 && score <= 2.8) {
    alert(`학점은 B-입니다.`)
  } else if (score > 2.1 && score <= 2.4) {
    alert(`학점은 C+입니다.`)
  } else if (score > 1.8 && score <= 2.1) {
    alert(`학점은 C0입니다.`)
  } else if (score > 1.4 && score <= 1.8) {
    alert(`학점은 C-입니다.`)
  } else if (score > 1.1 && score <= 1.4) {
    alert(`학점은 D+입니다.`)
  } else if (score > 0.8 && score <= 1.1) {
    alert(`학점은 D0입니다.`)
  } else if (score > 0.0 && score <= 0.8) {
    alert(`학점은 D-입니다.`)
  } else if (score == 0) {
    alert(`학점은 F입니다.`)
  }
}
