//DOM : 각태그에 대한 정보를 지니고 있는 자바스크립트의 객체
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

//DOM에 내장되어 있는 기능들 중 몇가지만 사용해보기
console.log(number.innerText);  //해당 태그안에 있는 Text(정보)를 볼 수 있음
console.log(increase.offsetTop);    //Top위치를 알 수 있다.
console.log(decrease.id);   //id 조회 할 수 있다.


//이벤트 설정하기 및 값을 바꾸기- 수많은 이벤트가 있지만 그중 click 사용해보기
                //이벤트를 설정할떄는  dom.on ~~~  식으로 함수를 설정하는 형태로 하면됨
increase.onclick = () => {
    const current = parseInt(number.innerText, 10); //ParseInt : 문자열을 숫자로 변환, 두번째 파라미터 10 은 10진수로 하겠다는 뜻
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10); //ParseInt : 문자열을 숫자로 변환, 두번째 파라미터 10 은 10진수로 하겠다는 뜻
    number.innerText = current - 1;
}



//중요!!!!
//html에 id를 설정해주고 js에서 처음에 2~4번줄처럼 getElementById("해당id") 로 받아왔는데 만약 html에 id값이 없을때는
//const buttons = document.querySelectorAll("button");
//const [increase, decrease] = buttons;
//이런식으로 작성하여 가져와서 js를 적용시킬 수 있다. 그아래의 내용은 같음