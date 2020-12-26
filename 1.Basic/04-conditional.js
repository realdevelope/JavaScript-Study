//조건문
//if문 - ~라면 ~를 해라 
const a = 1;

if(a + 1 ===2){
    console.log("a + 1 이 2 입니다.");
}

//if문 - (블록밖에선 같은 이름으로 변수를 선언 가능)
const a = 1;

if(a + 1 ===2){
    const a = 2;
    console.log("if 문 안의 a 값은" + a);   //문자열 과 연결! (절대 증감연산자아님!)
}
console.log("if 문 밖의 a 값은" + a);   //문자열 과 연결! (절대 증감연산자아님!)


//if-else문 - ~하다면 ~하고, 그렇지 않으면 ~를 해라
const a = 10;

if(a > 15){
    console.log("a 가 15보다 큽니다");
}
else{
    console.log("a 가 15보다 크지 않습니다.");
}

//if-else if 문 : 여러가지 조건에 따라 다른 작업을 해야할 떄 사용
const a = 10;
if(a === 5){
    console.log("5 입니다!");
}
else if(a === 10){
    console.log("10입니다!");
}
else if(a === 7){
    console.log("7 입니다!");
}
else{
    console.log("5도 아니고 10도 아닙니다.");
}


//switch case 문 : 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용
const device = "iphone";

switch(device){
    case "iphone":
        console.log("아이폰!");
        break;
    case "ipad":
        console.log("아이패드!");
        break;
    case "galaxy note":
        console.log("갤럭시 노트!");
        break;
    default:
        console.log("모르겠네요");


}