//Truthy and Falsy  : true같은거 / false같은거
function print(person) {
    console.log(person.name);
  }
  
  const person = {
    name: "John"
  };
  
  print(person);


  //만약 object가 주어지지않았다면
  function print(person) {
      if(person === undefined || person === null){        //null checking
          return;
      }
    console.log(person.name);
  }
  
  const person = {
    name: "John"
  };
  
  print();


//Falsy한 값 : undefined, null, -, "", Nan
console.log(!undefined);
console.log(!null);
console.log(0);
console.log(!"");
console.log(!NaN);    //not a number


//Truthy한 값
console.log(!3);
console.log(!"Hello");
console.log(!["array"]);
console.log(![]);
console.log(!{value: 1});


//특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false 로 값을 표현하는 것
const value = {
    a = 1
};

const truthy = value ? true : false;
console.log(truthy);

//위의 삼항연산자 쓰지않고 좀 더 쉽게 사용하는법
const value = {
    a : 1
};
const truthy = !!value; //!value 는 false 가 되고, 여기에 !false 는 true 가 되어서, 결과는 true 가됨
