//비구조화 할당(구조분해)문법 활용
  //객체 안에 있는 값을 추출하여 변수 혹은 상수로 바로 선언 가능
    const object = { a: 1, b: 2 };

    const { a, b } = object;

    console.log(a); // 1
    console.log(b); // 2

  //함수의 파라미터에서도 사용가능
    const object = { a: 1, b: 2 };

    function print({ a, b }) {
    console.log(a);
    console.log(b);
    }

    print(object);  //1
                    //undefined

  
//1.비구조화 할당시 기본값 설정
const object = { a: 1 };

function print({ a, b = 2 }) {  // = 사용하면됨!
  console.log(a);
  console.log(b);
}

print(object);  // 1
                // 2

    //함수의 파라미터외에도 사용가능
    const object = { a: 1 };
    const { a, b = 2 } = object;    // = 사용하면됨!

    console.log(a); // 1
    console.log(b); // 2


//2.비구조화 할당시 이름 바꾸기
const animal = {
    name: "멍멍이",
    type: "개"
  };
const nickname = animal.name;   

console.log(nickname);  // 멍멍이


    //위의 코드를 비구조화 할당시 이름 바꾸기!!
    const animal = {
        name: '멍멍이',
        type: '개'
    };
    
    const { name: nickname } = animal   //{ 원래이름 : 새로지을 이름 }
    console.log(nickname);              //값을 바꿔줄 수 있는거지 완전히 바꾸는건 아님!!


//3.배열 비구조화 할당 : 객체외에 배열에도 가능
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

    //위의 코드를 배열 비구조화 할당!!
    const array = [1];
    const [one, two = 2] = array;

    console.log(one);
    console.log(two);



//4.객체의 깊숙한곳에 있는 값을 꺼내어 비구조화 할당
const deepObject = {
    state: {
      information: {
        name: "velopert",
        languages: ["korean", "english", "chinese"]
      }
    },
    value: 5
  };

    //위의 코드를 깊은 값 비구조화 할당!!!
       //1)비구조화 할당 문법을 두번 사용
    const deepObject = {
        state: {
          information: {
            name: "velopert",
            languages: ["korean", "english", "chinese"]
          }
        },
        value: 5
      };
      
      const { name, languages } = deepObject.state.information; 
      const { value } = deepObject;     //총 2번사용
      
      const extracted = {       //꺼낸것을 출력하기위해 작성
        name,       // name : name,
        languages,  //languages : languages,
        value       //value : value  
      };
      
      console.log(extracted);   // {name: "velopert", languages: Array[3], value: 5}

       
          //2)한번에 모두 추출하는 방법 사용 - 잘 사용하지 않을듯...
        const deepObject = {
            state: {
              information: {
                name: "velopert",
                languages: ["korean", "english", "chinese"]
              }
            },
            value: 5
          };
          
          const {
            state: {
              information: { name, languages }
            },
            value
          } = deepObject;
          
          const extracted = {
            name,
            languages,
            value
          };
          
          console.log(extracted);


          
