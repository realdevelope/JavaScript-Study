//객체 : 변수나 상수를 사용할 시 하나의 이름에 여러 종류의 값을 넣을 수 있다
        //객체 형식과 함수형식 헷갈리지 않게 주의!!

const dog = {       
    name : "멍멍이",
    age : 2,
    cute : true
};
//name, age, cute : key 라고 부름
//key에 해당하는 부분은 공백이 없어야함
// 공백을 사용하려면 "" 로 감싸주어야함

console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log(dog.cute);


//예제1
const ironMan = {
    name : "토니 스타크",
    actor : "로버트 다우니 주니어",
    alias : "아이언 맨"
};

const captainAmerica = {
    name : "스티븐 로저스",
    actor : "크리스 에반스",
    alias : "캡틴 아메리카"
};

console.log(ironMan);
console.log(captainAmerica);


//예제 2 - 함수에서 객체를 파라미터로 받아오기
function print(hero){
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);


//예제 3 - 비구조 할당1 (객체구조 분해)
//코드를 더욱 짧고 보기좋게 작성할 수 있음
function print(hero){
    const { alias, name, actor} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
}

print(ironMan);
print(captainAmerica);


//예제 4 - 비구조할당2 (객체구조 분해)
//코드를 더욱 짧고 보기좋게 작성할 수 있음
function print({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);


  //객체 안에 함수넣기 1
  //이때는 화살표 함수사용x -> function의 this는 함수자기자신을 가르키는반면 화살표 함수는 그렇지 못함.
  const dog ={
      name: "멍멍이",
      sound: "멍멍!",
      say: function say(){
          console.log(this.sound);  //여기서 this는 자기가 속해있는곳을 가르킴. 즉 dog함수를 의미
      }
  };

  dog.say();


  //객체안에 함수넣기 2
  //이때는 화살표 함수사용 x 
  const cat = {
      name : "야옹이",
      sound: "야옹~"
  };

  cat.say = dog.say;       
  dog.say();
  cat.say();   //cat 객체에 say가 등록이되는거고 this는 cat을 가르키게 되어 "야옹~"이 출력된다.


//getter 함수와 setter 함수
// getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다
// getter 함수는 파라미터 값을 가질 수 없다.
const numbers = {
    a: 1,
    b: 2,

    get sum(){
        console.log("sum 함수가 실행됩니다!");
            return this.a + this.b;
    }
};

console.log(numbers.sum);   //함수를 호출한게 아니라 조회하려고할때 특정코드를 실행시키고 연산된 값을 반환하는 것!!!
numbers.b = 5;
console.log(numbers.sum);


//setter 함수는 특정 값이 변경되어 질 때마다 함수를 실행하는데 사용한다.
// setter 함수는 한개의 파라미터를 가져야 한다.
const dog ={
    _name: "멍멍이",        //setter 함수와 겹치지 않기위해 _ 붙임
   
    set name(value){
        console.log("이름이 바뀝니다..." + value);
        this._name = value;
    }
};

console.log(dog._name);
dog.name = "뭉뭉이";
console.log(dog._name);


//getter 함수 setter 함수 활용 예제
const number ={
    _a : 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log("calculate");
        this.sum = this._a + this._b;
    },

    get a(){
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a(value){
        this._a = value;
        this.calculate();
    },
    set b(value){
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
