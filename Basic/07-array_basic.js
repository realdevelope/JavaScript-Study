//배열 : 한 변수 혹은 상수에 여러개의 항목들이 들어있는 리스트와 같음
//선언시 [] 안에 감싸줘야함

const array =[1, "blabla", {}, 4];  //번지는 0부터시작함
console.log(array[0]);


//객체배열
const objets = [
    {name : "멍멍이"},
    {name : "야옹이"}
];

console.log(objets);
console.log(0);
console.log(1);


//배열에 새로운 항목 추가하기 = push - 배열 내장함수
const objets = [
    {name : "멍멍이"},
    {name : "야옹이"}
];

objets.push({
    name : "멍뭉이"
});

console.log(objects);


//배열의 크기 알아내기 = lenght  = 즉 배열안에 몇개가있는지 가 곧 크기다
const objets = [
    {name : "멍멍이"},
    {name : "야옹이"}
];

console.log(object.length);

objets.push({
    name : "멍뭉이"
});

console.log(object.length);


//복습
const array = [1, true, {a: 1}, [1, 2, 3, 4]];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

array.push(6);      //배열에 새로운항목 추가하기 push

console.log(array);
console.log(array.length);  //배열의 크기를 확인하기 length





