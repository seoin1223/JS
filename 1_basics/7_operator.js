/*
* 산술 연산자
* - 덧셈
* - 뺄셈
* - 곱셈
* - 나눗셈
* - 나머지
* */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log("----------------------")
console.log(10*(10+10));

/* 증가와 감소*/

let number = 0
console.log(number++)
console.log(number--)

console.log(++number)
console.log(--number)

/* 연산자의 위치*/
let result= number++;
console.log(result,number);

result= number--;
console.log(result,number);

result= ++number;
console.log(result,number);
result= --number;
console.log(result,number);
console.log("----------------------")
/*
* 숫자 타입이 아닌 타입에 +, - 를 사용할 경우
* */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

console.log("----------------------")

sample = true;
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);
console.log("----------------------")


sample = false;
console.log(+sample);
console.log(typeof +sample)

sample= '안유진';

console.log(+sample)

sample = '99';
console.log(-sample);


/* 할당 연산자 */
number = 100;
console.log(number)

number+=10;
console.log(number)

console.log("비교 연산자 ----------------------")

/* 비교 연산자
* 1) 값의 비교
* 2) 값과 타입의 비교
* */
console.log(5==5);
console.log(5=='5');
console.log(0=='');
console.log(true==1);
console.log(true=='1');
console.log(false==0);

console.log("-----------------------------")
console.log(5===5);
console.log(5==='5');
console.log(0==='');

/*
* 대소 관계 비교 연산자
* */

console.log(100 >1 );
console.log(100 <1 );
console.log(100 <=1 );
console.log(100 >=1 );

/*
* 단축 평가
*  && 사용 했을 떄 좌측이 true이면 우측 값 반환
*  && 사용 했을 때 좌측이 false면 좌측 값 반환
*  || 사용했을 때 좌측이 true면 좌측 값 반환
*  || 사용했을 때 좌측이 false면 우측값 반환
* */
console.log("단축 평가 -----------------")
console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');





