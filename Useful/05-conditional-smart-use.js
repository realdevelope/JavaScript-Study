//조건문 더 스마트하게 사용하기
//1. 특정값이 여러 값중 하나인지 확인할때
function isAnimal(text) {
    return (
      text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
    );
  }
  
  console.log(isAnimal("개"));          // true
  console.log(isAnimal("노트북"));      // false

  //값들이 너무 많을떄는 배열의 includes 함수 사용
  function isAnimal(text) {
    const animals = ["고양이", "개", "거북이", "너구리"];
    return animals.includes(text);  //includes : 배열의 내장함수!
  }
  
  console.log(isAnimal("개"));      // true
  console.log(isAnimal("노트북"));  // false

  //화살표 함수를 사용하여 더 짧게도 작성가능
  const isAnimal = name => ["고양이", "개", "거북이", "너구리"].includes(name);

    console.log(isAnimal("개"));     // true
    console.log(isAnimal("노트북")); // false


//2.값에 따라 다른 결과물을 반환해야 할 때
  //if문 - 비효율적이지만 일단 이렇게
function getSound(animal) {
    if (animal === "개"){
        return "멍멍!";
    }
    if (animal === "고양이"){
        return "야옹~";
    } 
    if (animal === "참새"){
        return "짹짹";
    } 
    if (animal === "비둘기"){
        return "구구 구 구";
    } 
    return "...?";
  }
  
  console.log(getSound("개"));      // 멍멍!
  console.log(getSound("비둘기"));  // 구구 구 구
  console.log(getSound("인간"));    //...?

//swich-case문 - 비효율적이지만 일단 이렇게
function getSound(animal) {
    switch (animal) {
      case "개":
        return "멍멍!";
      case "고양이":
        return "야옹~";
      case "참새":
        return "짹짹";
      case "비둘기":
        return "구구 구 구";
      default:
        return "...?";
    }
  }
  
  console.log(getSound("개"));      // 멍멍!
  console.log(getSound("비둘기"));  // 구구 구 구
  console.log(getSound("인간"));    //..? 


  //객체를 사용해서 깔끔하고 효율적인 코드
  function getSound(animal) {
    const sounds = {
      개: "멍멍!",
      고양이: "야옹~",
      참새: "짹짹",
      비둘기: "구구 구 구"
    };
    return sounds[animal] || "...?";    //파라미터로 가져온 키를 넣고 단축평가 논리계산법 사용
  }
  
  console.log(getSound("개"));      // 멍멍!
  console.log(getSound("비둘기"));  // 구구 구 구
  console.log(getSound("인간"));    //...?


  //값에따라 실행해야하는 구문이 다를때 : 객체마다 함수를 넣어줌
  function makeSound(animal) {
    const tasks = {
      개: () => {
        console.log("멍멍");
      },
      고양이: () => {
        console.log("고양이");
      },
      비둘기() {
        console.log("구구 구 구");
      }
    };
    if (!tasks[animal]) {   //없는경우에 ...?출력
      console.log("...?");
      return;
    }
    tasks[animal]();
  }
  
  getSound("개");       //멍멍!
  getSound("비둘기");   //구구 구 구
  getSound("인간");     //...? 


  //중요!!
  //getsound() = 소리를 받아와서 직접 출력!!! ->> console.log(getsound(animal)); 
  //makesound() = 함수가 출력!!!  ->> getSound("");
