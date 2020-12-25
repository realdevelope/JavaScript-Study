//함수 : 특정코드를 하나의 명령으로 실행 할 수 있게 해주는 기능

function add(a, b){
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

//연습1 (문자열 합치기 + 사용)
function hello(name){
    console.log("Hello, " + name + "!");
}

//연습2 (문자열 합치기 응용 -> 템플릿 리티럴 사용)
function hello(name){
    console.log(`hello, ${name}`);
}
hello('velopert');

//연습3 (점수를 성적등급으로 변환)
function getGrade(score){
    if(score === 100){
        return "A+";
    }
    else if(score >= 90){
        return "A";
    }
    else if(score === 89){
        return "B+";
    }
    else if(score >= 80){
        return "B";
    }
    else if(score === 79){
        return "C+";
    }
    else if(score >= 70){
        return "C";
    }
    else if(score === 69){
        return "D+";
    }
    else if(score >= 60){
        return "D";
    }
   else{
       return "F";
   }
}

const grade = getGrade(100);
console.log(grade);

//람다함수 (화살표 함수)
const add = (a, b) =>{
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

//람다함수 연습 (템플릿 리터럴 `` ${}사용)
const hello = (name) =>{
    console.log(`Hello, ${name}!`);
}

hello("velopert");

