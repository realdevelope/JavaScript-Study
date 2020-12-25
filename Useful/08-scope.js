// scope : 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위
    //1. Global (전역) Scope : 코드의 모든 범위에서 사용이 가능
    //2. Function (함수) Scope : 함수 안에서만 사용이 가능
    //3. Block (블록) Scope : if, for, switch 등 특정 블록 내부에서만 사용이 가능
        //2,3 지역변수라고도함

//예시1
const value = "hello!";     //Global Scope

function myFunction() {
    console.log("myFunction: ");
    console.log(value);
}

function otherFunction() {
    console.log("otherFunction: ");
    const value = "bye!";
    console.log(value);     // Function Scope -> Global 에는 영향을 주지않음
}

myFunction();
otherFunction();

console.log("global scope: ");
console.log(value);     //Global Scope 출력


//예시2 
const value = "hello!";

function myFunction() {
  const value = "bye!";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value);     //bye!
    console.log(anotherValue);  //world
  }
  functionInside();
}


myFunction()
console.log("global scope: ");
console.log(value);     //hello!
console.log(anotherValue);  //not defined


//예시3 - 함수안에 조건문 안에 블록변수 사용
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);   //world
  }
  console.log('function scope: ');
  console.log(value);   //bye!
}

myFunction();
console.log('global scope: ');
console.log(value);     //hello!


//예시4 - var 을 사용했을때
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value);     //world
  }
  console.log('function scope: ');
  console.log(value);       //world
}

myFunction();
console.log('global scope: ');
console.log(value);     //hello!
//var로 선언시 : 블록단위로 보는게 아니라 함수단위로 보기떄문에 다른 블록이더라도 영향이 감
//let으로 선언시 : 블록단위로 보기때문에 블록 밖에는 영향ㅇ ㅣ가지 않음
//var 보단 let을 사용 해야하는 이유!!!