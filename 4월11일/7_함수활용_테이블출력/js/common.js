'use strict'
window.onload = function() {
  let name = ['홍길동', '박길동', '김길동', '이길동', '최길동'];
  let age = [30, 18, 21, 35, 38];
  let height = [175, 180, 190, 185, 178];
  let score = [85, 88, 90, 95, 95];



  function avgFunc(arrayNum){
    let total = 0;
    let scoreLeng = arrayNum.length;
    let scoreAvg;
    for (let i = 0; i < scoreLeng; i++){
      total += arrayNum[i];
    }
    scoreAvg = total / scoreLeng;
    return scoreAvg = Math.ceil(scoreAvg);
    //올림으로 처리하시오ceil
    //빈올림 round, 버림 floor
  }
  console.log(`나이 평균: ${avgFunc(age)}, 키 평균: ${avgFunc(height)}, 점수 평균: ${avgFunc(score)}`)



  // document에 text출력
  let list = '<table>';
  list += `<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>`
  for (let i = 0; i < name.length; i++){
    list += `<tr><td>${name[i]}</td><td>${age[i]}</td><td>${height[i]}</td><td>${score[i]}</td></tr>`
  }
  list += `<tr><th>평균</th><th>${avgFunc(age)}</th><th>${avgFunc(height)}</th><th>${avgFunc(score)}</th></tr>`
  list += '</table>'

  let domTable = document.getElementsByClassName('table-wrap')[0]; //class는 배열처럼 인식 히니기 존재하도 배열찍어줘야함(그냥하면 컬렉션됨)

function getInfo(){  // 버튼클릭시 테이블 오픈
    domTable.innerHTML = list; //뿌려주는거만 함수안에 넣으면 됨
    }
    // console.log(domTable);

    // let domDiv = document.getElementsByTagName('div')[0]; //tag도 배열처럼 해줘야함
    // console.log(domDiv);
    // domDiv.innerHTML = list

    // console.log(list);
    // document.getElementById('table-wrap').innerHTML = list;


  //버튼클릭시 테이블오픈하는 이벤트리스너
  document.getElementById('get-info').addEventListener('click', getInfo);

}
