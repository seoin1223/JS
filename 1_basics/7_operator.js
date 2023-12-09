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
