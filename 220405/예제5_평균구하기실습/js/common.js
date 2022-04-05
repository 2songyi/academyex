window.onload = function(){
  //싷행문

  //이름
  var name_1, name_2, name_3, name_4, name_5;
  name_1='홍길동';
  name_2='박길동';
  name_3='김길동';
  name_4='이길동';
  name_5='최길동';

  //나이
  var age_1=30, age_2=18, age_3=21, age_4=35, age_5=38;
  var ageTotal=age_1+age_2+age_3+age_4+age_5;
  var leng=5;
  var ageAvg=ageTotal/leng;
  console.log(ageAvg)

  // 키
  var height_1,height_2,height_3,height_4,height_5;
  height_1=175;
  height_2=180;
  height_3=190;
  height_4=185;
  height_5=178;
  var heightTotal=height_1+height_2+height_3+height_4+height_5;
  var heightAvg=heightTotal/leng;
  console.log(heightAvg)

  //점수
  var score_1=85, score_2=88, score_3=90, score_4=82, score_5=95;
  var scoreTotal=score_1 +score_2+ score_3+ score_4+ score_5;
  var scoreAvg= scoreTotal/leng;
  console.log(scoreAvg)

  // 표 형태로 출력
  var list = '';

  list += '<table>';
  list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
  list += '<tr><td>'+name_1+'</td><td>'+age_1+'</td><td>'+height_1+'</td><td>'+score_1+'</td></tr>';
  list += '<tr><td>'+name_2+'</td><td>'+age_2+'</td><td>'+height_2+'</td><td>'+score_2+'</td></tr>';
  list += '<tr><td>'+name_3+'</td><td>'+age_3+'</td><td>'+height_3+'</td><td>'+score_3+'</td></tr>';
  list += '<tr><td>'+name_4+'</td><td>'+age_4+'</td><td>'+height_4+'</td><td>'+score_4+'</td></tr>';
  list += '<tr><td>'+name_5+'</td><td>'+age_5+'</td><td>'+height_5+'</td><td>'+score_5+'</td></tr>';
  list += '<tr><td>평균'+'</td><td>'+ageAvg+'</td><td>'+heightAvg+'</td><td>'+scoreAvg+'</td></tr>';
  list += '</table>';

  console.log(list)
  document.body.innerHTML = list;
}
