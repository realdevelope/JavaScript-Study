// 동기적(Synchronous) 으로 처리하게된다면 : 다른작업이 끝날때까지 기다렸다가 실행
// 비동기적(Asynchronous) 으로 처리하게 된다면 : 동시에 여러작업을 처리할 수 있고 기다리는 과정에서 다른 함수를 호출할 수도 있다. 


//동기적
function work() {
  const start = Date.now(); //현재날짜를 숫자형태로 표시해주는 자바스크립트 내장함수
  for (let i = 0; i < 1000000000; i++) {

  }
  const end = Date.now();
  console.log(end - start + "ms"); // 1000m/s - 1초
}

work(); //얼마나걸렸는지 알려주는 함수
console.log("다음 작업");


//비동기적 - setTimeout
function work() {
    setTimeout(() => {
      const start = Date.now(); //현재날짜를 숫자형태로 표시해주는 자바스크립트 내장함수
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + "ms"); // 1000m/s - 1초
    }, 0);
  }
  
  console.log("작업 시작!");
  work(); //얼마나걸렸는지 알려주는 함수
  console.log("다음 작업");
  

//비동기적 -collback 함수를 사용 : work함수 끝난후에 어떤작업을 하고싶을때
function work(callback) {   //파라미터로 넘겨주고 파라미터로 받은 함수를  특정 작업이 끝나고 호출
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {

      }
      const end = Date.now();
      console.log(end - start + 'ms');
      callback(end - start);
    }, 0);
  }
  
  console.log("작업시작 !");
  work((ms) => {
    console.log("작업이 끝났어요!");
    console.log(ms + "ms 걸렸다고 해요.");
  });
  console.log("다음 작업");


  
// <나중엔 비동기적으로 처리하는것들>
// 1. Ajac Web API 요청 - 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에
// 2. 파일 읽기 - 주로 서버 쪽에서 파일을 읽어야 하는 상황
// 3. 암호화/복호화 - 시간이 어느정도 걸리는 경우가 있기 때문에 
// 4. 작업예약 - 스케줄링!!!!! (setTimeout 을 이용)
