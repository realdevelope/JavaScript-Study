//연산자
let value =1;
value = 2;

//산술연산자 : +, -, *, /
let a = 1+2;
console.log(a);

//계산기처럼도 가능
let a = 1 + 2 - (3 * 4) / 4;
console.log(a); 

//증감연산자도 가능
let a = 1;
a++;
++a;
console.log(a);

//대입연산자 : +=, -=, *=, /=
let a = 1;
a += 3;     //a = a + 3;
a -= 3;     //a = a - 3;
a *= 3;     //a = a * 3;
a /= 3;     //a = a / 3;
console.log(a);

//논리 연산자 : !, &&, ||
const a = !true;
console.log(a);

const a = true && true;
console.log(a);

const a = true || false;
console.log(a);

//연산 순서 : !(not) -> &&(and) -> ||(or)
const value = !(true && false || true && false || !false);
console.log(value);
//풀이 : !(true && false || true && false || true)
//       !(false || false || true)
//       !(false || true)
//       !(true)
//       false


//비교연산자 : === 두 값이 일치하는지 확인(타입도)
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);

//비교연산자 : == 두값이 일치하는지 확인(타입x)
const a = 1;
const b = "1";
const equals = a == b;
console.log(equals);

//비교연산자 : >, < 크고작음
const a = 10;
const b = 15;
const c = 15;

console.log(a < b);
console.log(a > b);
console.log(a <= c);
console.log(b >= c);
console.log(b < c);

//비교연산자 : " " + " " 문자열 붙이기 
const a = "안녕";
const b = "하세요";
console.log(a + b);