// 평균구하기
// var score_1=85, score_2=90, score_3=95, score_4=100, score_5=75, leng=5, total, avg;
// total= score_1 + score_2 + score_3 + score_4 + score_5;
// avg = total / leng;
// console.log(`교과목 평균 점수는 ${avg}점 입니다.`)

// 나이 키 평균 구하기
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;
// 키 변수 선언
var height_1=175, height_2=180, height_3=182, height_4=190, height_5=185, height_6=179, height_7=182, height_8=183, height_9=192, height_10=187;
// 나이변수선언
var age_1=32, age_2=44, age_3=21, age_4=18, age_5=52, age_6=22, age_7=45, age_8=25, age_9=38, age_10=28;
// 키의 합산
heightTotal= height_1 + height_2 + height_3 + height_4 + height_5 + height_6 + height_7 + height_8 + height_9 + height_10;
// 나이합산
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5 + age_6 + age_7 + age_8 + age_9 + age_10;
// 키 평균
heightAvg = heightTotal / countLeng;
// 나이평균
ageAvg = ageTotal / countLeng;

console.log(`평균 키는 ${heightAvg}입니다.`)
console.log(`평균 나이는 ${ageAvg}입니다.`)
