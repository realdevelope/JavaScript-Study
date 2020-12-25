//배열 내장함수 : 배열을 다룰때 알고있으면 너무나 유용한 내장함수들
//기본 배열 반복문 사용

const superheroes = [
    "아이언맨",
    "캡틴 아메리카",
    "토르",
    "닥터 스트레인지"
];

for(let i = 0; i < superheroes.length; i++){
    console.log(superheroes[i]);
}


//forEach : 가장 쉬운 배열 내장함수로써 for문을 대체!
//배열 내장함수 forEach 사용

const superheroes = [
    "아이언맨",
    "캡틴 아메리카",
    "토르",
    "닥터 스트레인지"
];

function print(hero){
    console.log(hero);
}

superheroes.forEach(print);  //배열명.forEach(함수명);


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/


//map : 배열 안의 각 원소를 변환할 때 사용하며 새로운 배열이 만들어짐
//기본 배열 반복문 사용

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

for (let i =0; i < array.length; i++){
    squared.push(array[i] * array[i]);  //제곱 하는 식
}
console.log(squared);


//배열 내장함수 map 사용
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = n => n * n;
const squared = array.map(squared);

console.log(squared);


//배열 내장함수 map 활용 - 객체 배열들을 text로만 된 문자열 배열로 바꾸기
const items = [
{
    id : 1,
    text : "hello"
},
{
    id: 2,
    text: "bye"
}    
];

const texts = items.map(item => item.text);
console.log(texts);


//indexOF : 배열에서 원하는 항목이 어디에 있는지 찾아주는 함수
        //특정항목이 배열에서 몇번째 항목에 있는지 알 수 있음
const superheroes = [
    "아이언맨",
    "캡틴 아메리카",
    "토르",
    "닥터 스트레인지"
];

const index = superheroes.indexOf("토르");
console.log(index);


//findindex : indexOf와 비슷하지만 배열안의 있는 항목이 객체이거나, 배열이라면 
              //indexOf로 찾을 수 없고 findindex를 사용해야한다.
const todos =[
    {
        id : 1,
        text : "자바스크립트 입문",
        done: true
    },
    {
        id : 2,
        text : "함수 배우기",
        done : true
    },
    {
        id : 3,
        text : "객체와 배열 배우기",
        done : true
    },
    {
        id : 4,
        text : "배열 내장함수 배우기",
        done : false
    },
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); 


const itodo = todos.find(todo => todo.done === false);
console.log(todo);

//정리
//indexof :  특정값이랑 일치한것을 찾을때
//findIndex : findIndex 내부에 함수를 넣어줘서 특정값을 조건으로 찾아서 그것이 몇번째인지 찾는것
//find : findIndex에서 그렇게 찾은 값 자체를 반환



//filter : 배열에서 특정조건을 만족하는 원소들을 찾아서 원소들을 가지고 새로운 배열을 만드는것

const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);    //done 값만 필터링


//splice : 배열에서 특정항목을 제거할 때 사용
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);    //indexOF = 원하는 항목이 몇번째 원소인지 찾아줌
numbers.splice(index, 1);     //index 부터 1개를 지운다 (index, 2) 할시 index 부터 2개를 지우게 된다.

console.log(numbers);

//splice 2
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);    
const spliced = numbers.splice(index, 2);  

console.log(spliced);
console.log(numbers);



//slice : splice랑 비슷하며, 배열을 잘라낼때 사용하는데 기존의 배열은 건드리지 않는다
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지!!! (2는 아님 주의!!!!!!!)

console.log(sliced); 
console.log(numbers); 



//shift 와 pop
//shift : 첫번째 원소를 배열에서 추출(빼냄)
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
numbers.shift();
numbers.shift();    //빌때까지 계쏙 빠짐

console.log(value);
console.log(numbers);


//pop : 마지막 원소를 배열에서 추출(빼냄)
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
numbers.pop();
numbers.pop();      //빌때까지 계쏙 빠짐

console.log(value);
console.log(numbers);


//unshift : shift의 반대로 배열의 맨앞에 새원소를 추가함
const numbers = [10, 20, 30, 40];
numbers.unshift(5);

console.log(numbers);

//정리
//짝 :  push와 pop / shift 와 unshift


//concat : 여러개의 배열을 하나의 배열로 합쳐줌
       //기존의 배열을 건드리지 않는다 / 새로운배열을 만들어서 변수에 담는다
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated); //[1, 2, 3, 4, 5, 6]


//join : 배열안의 값들을 하나의 문자열 형태로 합쳐줌
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5


//reduce : 총합을 구할때 사용(진짜 쓸곳이 많은 유용한 함수!!! - but 어려움ㅠㅠ)
            //배열이 주어졌을떄 모든값들을 사용하여 어떤값을 연산할떄 사용
            //forEach를 사용했을때
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});

console.log(sum);

//reduce 함수를 사용하여 총 합계를 구했을때
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);



//reduce 함수를 사용하여 평균을 구했을때
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  
    if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);

//reduce 다른 예제
const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
const counts = alphabets.reduce((acc, current) => {
    if(acc[current]){
        acc[current] += 1;
    }
    else{
        acc[current] =1;
    }
    return acc;
}, {})

console.log(counts);    //{a: 3, b: 1, c: 2, d: 1, e: 1}


//퀴즈 - 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers) {
    let count = 0;
    numbers.forEach(n =>{
      if(n > 10){
      count++;
    }
  });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
