# JS

## 목록
1. [기본기](#1-consolelog)




## 1. 기본기

#### 1. console.log(' ') : 콘솔로 문자열을 출력   

#### 2. 주석 
- // : 한줄 주석 작성   
- /* */ : 여러 줄 주석 작성

#### 3. 변수
- 특징
   - var (사용 x), let, const
   - let과 var로 선언하면 추후 변경할 수 있다.
   - const의 경우 값을 변경할 수 없다 => 선언할 때 할당해야한다.
   - 할당을 하지 않으면 undefined가 할당된다.   

#### 4. Naming Conventions
- 특징
  - 일반적으로 영어(라틴문자)를 사용하여 문자와 숫자를 모두 사용할 수 있다.
  - 특수기호는 _와 $만을 사용할 수 있다.
  - 숫자로 이름을 시작할 수 없다 
  - 키워드는 변수명으로 사용할 수 없다   

- 종류
     - camelCase : 첫 글자는 소문자로 넣고, 띄어쓰기 할 때마다 첫 번째 글자를 대문자로
     - snake_case : 띄어쓰기를 _ 로 표현
     - PascalCase : 첫 글자도 대문자로 넣고, 띄어쓰기 할 때마다 첫 번째 글자를 대문자로

#### 5. DataType 
- typeof() 함수를 통해 DataType를 알 수 있다.
- Infinity : 무한대 (-Infinity : -무한대)
- Template Literal : 백틱 (``) &rarr; 변수값은 $() 사용
- static typeing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
- dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다. (JS)
- 종류
  1) Number
  2) String
  3) Boolean
  4) undefined
  5) null
  6) Symbol
  7) Object
     - Map = key : value 
     - Array = 값을 리스트로 나열할 수 있는 타입
     - Function
     - Array
     - Object

#### 6. Hoisting
1. Hoisting 
    - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
    - var 경우 방지할 수 없다.
    