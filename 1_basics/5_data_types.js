/**
 * Data Type : 6개의 Primitive Type과 1개의 Object 타입이 존재
 *
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 */

// 1. number
const age = 32;
console.log(typeof age);

// 2. String
const name = 'age';
console.log(typeof name);

/*
* Template Literal
*
* 1) newLine -> \n
* 2) tab -> \t
* 3) 백슬래시를 String로 표현하려면 두번 입력
* */

const iveYuJin = '안유진\n안유진';
console.log(iveYuJin);
const iveYuJin1 = '안유진\t안유진';
console.log(iveYuJin1);
const iveYuJin3 = '안유진\\안유진';
console.log(iveYuJin3);

const smallQutoation = '아이브\'코트팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `"둘다 자연스럽게"'사용' 가능하다`;
console.log(iveWonYoung2);


// 3. boolean
const isTrue = true;
const isFalue = false;

console.log(isFalue)
console.log(typeof isFalue)


// 4. Undefined : 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
let noInit;
console.log(noInit)
console.log(typeof noInit)

// 5. null : JS에서 개발자가 명시적으로 없는 값으로 초기화할 때 사용
let init = null;
console.log(init)
console.log(typeof init)

// 6. Symbol : 유일무이한 값을 생성할 때 사용
//           : Symbol 함수를 호출해서 사용한다.

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);


// Object type
/**
 * 1) Map
 * = key : value의 쌍으로 이루어져 있다.
*/
const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색'
}

console.log(dictionary);
console.log(dictionary['red']);

/**
 * 2) Array
 * - 값을 리스트로 나열할 수 있는 타입
 * - index : 0부터 시작
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영'
];

console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log(iveMembersArray[3]);

iveMembersArray[3] = '박서인';
console.log(iveMembersArray);

/*
* static typeing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
* dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
*
* */
