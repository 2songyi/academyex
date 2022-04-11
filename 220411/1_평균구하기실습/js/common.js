window.onload = function(){

  let name = ['홍길동', '박길동', '김길동', '이길동', '최길동'];
  let age = [30, 18, 21, 35, 38];
  let height = [175, 180, 190, 185, 178];
  let score = [85, 88, 90, 82, 95];

  function total(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
      total += array[i];
    }
    return total;
  }

  function avg(array){
    let avg;
    return avg = total(array) / array.length;
  }

  var list = '';
  list += '<table>';
  list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
  for (let i = 0; i < 5; i++){
    list += `<tr><td>${name[i]}</td><td>${age[i]}</td><td>${height[i]}</td><td>${score[i]}</td></tr>`;
  }
  list += `<tr><td>합계</td><td>${total(age)}</td><td>${total(height)}</td><td>${total(score)}</td></tr>`;
  list += '<tr><td>평균'+'</td><td>'+avg(age)+'</td><td>'+avg(height)+'</td><td>'+avg(score)+'</td></tr>';
  list += '</table>';
  document.body.innerHTML = list;
}
