//반복문 : 특정 작업을 반복적으로 사용할때 사용하는 구문
          //1.조건을 확인후 -> 2.조건의 결과가 true면 특정 구문을 실행(연산, 출력 등)
          //3.구문이 끝나면 다시 조건을 확인 -> 4.조건의 결과가 true이면 다시 특정 구문을 실행
          //이렇게 반복하다가 조건의 결과가 false 이면 반복문을 종료(탈출)


//for문 : 가장 기본적인 반복문 - 조건에 만족시 1씩 증가
for( let i = 0; i < 10; i++){
    console.log(i);
}


//for문 : 가장 기본적인 반복문 - 조건에 만족시 1씩 감소
for( let i = 0; i < 10; i--){
    console.log(i);
}

////for문 : 가장 기본적인 반복문 - 조건에 만족시 2씩 감소
for( let i = 0; i < 10; i-=2){
    console.log(i);
}


//배열과 for
const names = ["멍멍이", "야옹이", "멍뭉이"];

for(let i =0; i < names.length; i++){    // names 의 배열의 크기는 3 -> 0 , 1 , 2 총 3개기때문에 3보다 작은 0,1,2 까지 반복한다는것
    console.log(names[i]);
}



//while문 : 특정 조건이 참이라면 계속해서 반복하는 반복문
            //조건을 확인만하면서 반복하기 때문에 조건문 내부에서 변화를 줘야함
let i = 0;

while( i < 10){
    console.log(i);
    i++;    //조건의 변화를 블록안에 넣어야함! / 변수의 초기값이 반복문 밖에서 이루어졌음 / 조건을 언젠간 false 가 되도록 작성해야함!!
}


//while문 
let i = 0;
let isFun = false;

while( isFun === false){ // (!isFun) 과 같음!
    console.log(i);
    i++;
    if( i === 30){
        isFun = true;
    }
} 


//for ...of문 : 배열을 다루게 될때(배열에 관한 반복문을 돌리기 위해) 사용되는 반복문
const numbers =[10, 20, 30, 40, 50];      //그냥 알아만 두자! 거의 안씀
for (let number of numbers){
    console.log(number);
}


//for ...in 문을 하기전에 객체의 키값들을 배열의 형태로 가져오기 위한 3가지 함수들을 먼저 알아보기!
const doggy = {
    name : "멍멍이",
    sound : "멍멍",
    age : 2
};

console.log(Object.entries(doggy)); //Object.entries() : 객체의 각 키에 해당하는 값 끼리 배열의 형태로 가져오는법
console.log(Object.keys(doggy));    //Object.keys() : 객체의 키들만 배열의 형태로 가져오는법
console.log(Object.values(doggy));   //Object.values() : 객체의 값들만 배열의 형태로 가져오는법


//for ...in문 : 객체를 다루게 될때(객체에 관한 반복문을 돌리기 위해) 사용하는 반복문
const doggy = {
    name : "멍멍이",
    sound : "멍멍",
    age : 2
};

for (let key in doggy){
    console.log(key);
}   // 이렇게 할시 키들이 출력됨

for (let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}   //키와 값들을 함꼐 출력됨 - 템플릿 리터럴사용



//brack 와 continue 
//break : 반복문에서 벗어나게(탈출하게)한다
//continue : 그 다음 루프를 돌게 한다(계속 진행) 
// 둘다 어느 반복문에서도 사용가능하다!!!!

for(let i = 0; i < 10; i++){
    if(i ===2) {
        continue;   //다음 루프 실행
    }    
    console.log(i);
    if(i === 5){
        break;      //반복문 끝내기
    }
}


//반복문 연습
//numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어라
function sumOf(number){
    let sum = 0;
    
    for(let i =0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

//퀴즈 -숫자로 이루어진 배열이 주어졌을 때, 
//      해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 
//      배열을 새로 만들어서 반환해보세요
function biggerThanThree(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 3) {
        array.push(numbers[i]);
      }
    }
    return array;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  
  export default biggerThanThree;
  