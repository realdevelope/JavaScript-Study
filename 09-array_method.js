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