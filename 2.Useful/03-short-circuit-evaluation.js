//Short-circuit-evaluation : 단축 평가 논리 계산법
                            //논리연사자를 사용해서 코드를 좀 더 짧게 사용하는것!!
true && true    // and -> true 
true && false   // and -> false
true || false   // or -> true
false || true   // or -> true


//꼭 true, false 만 들어가지 않고 문자열이나 숫자, 객체도 사용할 수 있다.
const dog = {
    name: "멍멍이"
  };
  
  function getName(animal) {
    return animal.name;
  }
  
  const name = getName(dog);
  console.log(name);    // 멍멍이

// 위의 코드를 &&을 사용하여 단축
const dog = {
    name: "멍멍이"
  };
  
  function getName(animal) {
    return animal && animal.name;
  }
  
  const name = getName(dog);
  console.log(name);    // 멍멍이

// && 정리 - 중요!!! 
//즉 falsy한 값 5개 이외에 다른건 true라 할 수 있고
//truthy 한 값은 뒤에있는 값이 출력되고, falsy한 값은 앞에있는 값이 출력된다.

console.log(true && "hello");//이때 true가 출력되는것이아니라 true이면 뒤에있는 hello가 출력되는것
console.log(false && "hello");//flase 이면 뒤에꺼 보지도 않고 false 출력되는것

console.log("hello" && "bye");//hello가 truthy한 값이기때문에 뒤에있는 bye가 출력
console.log(null && "hello");//null 이 falsy한 값이기때문에 그대로 null이 출력
console.log(undefined && "hello");//undefined 가 falsy한 값이기 때문에 그대로 undefined 가 출력
console.log("" && "hello");//공백은 falsy한 값이기 때문에 ""공백이 출력
console.log(0 && "hello");//0은 falsy한 값이기 때문에 0이 출력
console.log(1 && "hello");//1은 truthy한 값이기때문에 뒤에있는 hello가 출력
console.log(1 && 1);//왼쪽에 있는 1이 truthy한 값이기떄문에 뒤에있는 1이 출력
//어디에 쓰이느냐 : 특정값이 유효할때만 어떤값을 조회해야할 경우!!!



//|| 연산자 : 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 유용하게 사용
const namelessDog = {
    name: ''    // 공백 : falsy한 값
  };
  
  function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
      return "이름이 없는 동물입니다.";
    }
    return name;
  }
  
  const name = getName(namelessDog);
  console.log(name);    // 이름이 없는 동물입니다.


//위의 코드를 ||를 사용하여 단축
const namelessDog = {
    name: ''    // 공백 : falsy한 값
  };
  
  function getName(animal) {
    const name = animal && animal.name;     //if문 대신 이렇게 사용
    return name || "이름이 없는 동물입니다.";
  }
  
  const name = getName(namelessDog);
  console.log(name); // 이름이 없는 동물입니다.


  // ||정리 - 중요!!!
    // &&와 반대로 falsy한 값 5개 이외에 다른건 flase라 할 수 있고
    //falsy 한 값은 뒤에있는 값이 출력되고, truthy한 값은 앞에있는 값이 출력된다.
  console.log(false || "hello"); //flase가 falsy한 값이기 때문에 뒤에있는 hello가 출력
  console.log("" || "이름없다");//공백 ""은 falsy한 값이기 때문에 뒤에있는 이름없다가 출력
  console.log(null || "널이다");//널은 falsy한 값이기 때문에 뒤에있는 널이다가 출력
  console.log(undefined || "defined 되지 않겠다");//undefined 는 falsy한 값이기 떄문에 뒤에있는 defined 되지 않겠다 가 출력
  console.log(0 || "제로다");//0는 falsy한 값이기 때문에 뒤에있는 제로다가 출력된다
  
  console.log(1 || "음?");  //1은 truthy한 값이기 떄문에 뒤를 보지않고 앞에있는 1을 출력한다
  console.log(true || "여기 안본다");//true는 truthy 한 값이기 때문에 앞에있는 true가 출력
  console.log("와아" || "여기 안봄");//"와아"는 truthy한 값이기 떄문에 앞에있는 "와아"가 출력
  console.log([] || "진짜 안봄");//[]은 truthy한 값이기 떄문에 앞에있는 []가 출력