//프로토타입과 클래스
//객체 생성자 : 함수를 통해서 새로운 객체를 만들고 그안에 넣고 싶은 값, 함수들을
               //구현할 수 있게 해준다.
function Animal(type, name, sound){     //객체생성사를 만들땐 첫글자가 대문자!!
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){  //익명함수(이름없는 함수)
        console.log(this.sound);
    }
}

const dog = new Animal("개", "멍멍이", "멍멍")
const cat = new Animal("고양이", "야옹이", "야옹"); //new라는 키워드 가 앞에오고 그뒤에 객체생성자 사용

dog.say();
dog.say();


//프로토타입 : 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 함
             //객체 생성자 함수 아래에 .prototype.[원하는키] = 코드 를 입력하여 설정
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);


//프로토타입 - 객체 생성자 상속받기
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
  }
  Dog.prototype = Animal.prototype;
  
  function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
  }
  Cat.prototype = Animal.prototype;
  
  const dog = new Dog('멍멍이', '멍멍');
  const cat = new Cat('야옹이', '야옹');
  
  dog.say();
  cat.say();


//클래스 : es6에 클래스가 도입되었지만 다른 언어의 클래스랑은 조금 다르다
        //객체생성자로 구현했던 코드를 명확하고, 깔끔하며, 상속을 좀 더 쉽게 할 수 있다.
class Animal {
    constructor(type, name, sound) {    //constructor :객체생성함수(객체생성자)
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();


//클래스 - 상속
class Animal {
    constructor(type, name, sound) {    //constructor :객체생성함수(객체생성자)
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound) {
      super('개', name, sound);
    }
  }
  
  class Cat extends Animal {
    constructor(name, sound) {
      super('고양이', name, sound);
    }
  }
  
  const dog = new Dog('멍멍이', '멍멍');
  const cat = new Cat('야옹이', '야옹');
  
  dog.say();
  cat.say();

//연습 - 클래스 만들기
class Food {
    constructor(name) {
        this.naem = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name} 을 파는 음식점들 :`);
        console.log(this.brands.join(","));
    }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();
