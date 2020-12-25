//삼항 연산자 :   if문을 좀더 간결하게 사용가능하며,
                //형식은  조건 ? true일떄 : false 일때     입니다.
                //기본 if문 사용
const array = [];
let text = '';
if (array.length === 0) {
    text = "배열이 비어있습니다.";
} else {
    text = "배열이 비어있지 않습니다.";
}

console.log(text);


//삼항연산자 사용
const array = [];
let text = array.length === 0   ? "배열이 비어있습니다."   : "배열이 비어있지 않습니다.";

console.log(text);


//삼항연산자 중첩해서 사용 - 가급적 사용x
const condition1 = false;
const condition2 = false;

const value = condition1   ? "와우"   : condition2     ? "blabla"     : "foo";

console.log(value);

