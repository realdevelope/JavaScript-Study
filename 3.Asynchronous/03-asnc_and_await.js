// async/await : async/await : ES8문법으로서, Promise 를 더욱 쉽게 사용가능
    //기본사용법
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function process() {    //함수의 앞부분에 async 키워드 붙이면 됨!!!
        console.log("안녕하세요!");
        await sleep(1000); // 1초쉬기(유닉스 수업생각남) - 프로미스 앞부분에 await 붙이면됨!!!!
        console.log("반갑습니다!");
    }
    
    process();

    
    //에러를 발생시킬때는 throw!!   
    //에러를 잡아낼때는 try catch 문 사용!
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function makeError() {
        await sleep(1000);
        const error = new Error();
        throw error;        //에러 발생시킬때
      }
      
      async function process() {
        try {                   //에러 잡아낼때
          await makeError();
        } catch (e) {
          console.error(e);
        }
      }
      
      process();

      
      
      //비동기 함수 여러개 더 만들어보기
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getDog = async () => {
        await sleep(1000);
        return "멍멍이";
      };
      
      const getRabbit = async () => {
        await sleep(500);
        return "토끼";
      };
      const getTurtle = async () => {
        await sleep(3000);
        return "거북이";
      };
      
      async function process() {
        const dog = await getDog();
        console.log(dog);
        const rabbit = await getRabbit();
        console.log(rabbit);
        const turtle = await getTurtle();
        console.log(turtle);
      }
      
      process();

      
     
      //만약에 여러개의 Promise를 동시에 사용하고 싶을땐 : Promise.all 이라는 함수사용
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getDog = async () => {
        await sleep(1000);
        return "멍멍이";
      };
      
      const getRabbit = async () => {
        await sleep(500);
        return "토끼";
      };
      const getTurtle = async () => {
        await sleep(3000);
        return "거북이";
      };
      
      async function process() {
        const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
        console.log(results);
      }
      
      process();


     
      //만약에 각각 결과값을 따로 얻고 싶을때는 배열 비구조화 활당 문법사용
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getDog = async () => {
        await sleep(1000);
        return "멍멍이";
      };
      
      const getRabbit = async () => {
        await sleep(500);
        return "토끼";
      };
      const getTurtle = async () => {
        await sleep(3000);
        return "거북이";
      };
      
      async function process() {
        const [dog, rabbit, turtle] = await Promise.all([
          getDog(),
          getRabbit(),
          getTurtle()
        ]);
        console.log(dog);
        console.log(rabbit);
        console.log(turtle);
      }
      
      process();        



      // Promise.race : Promise.all 과 달리 여러개의 프로미스를 실행해서 가장 빨리끝난것만 가져옴
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getDog = async () => {
        await sleep(1000);
        return "멍멍이";
      };
      
      const getRabbit = async () => {
        await sleep(500);
        return "토끼";
      };
      const getTurtle = async () => {
        await sleep(3000);
        return "거북이";
      };
      
      async function process() {
        const first = await Promise.race([
          getDog(),
          getRabbit(),
          getTurtle()
        ]);
        console.log(first);
      }
      
      process();


      //정리!!!!
      //Promise.all : 여러개 중 하나라도 실패할시 모두 실패한걸로 침!! -> 즉 에러가 뜬다
                    //그 에러를 try catch 문으로 잡아낼 수 있다.
                    //실제 개발에서 사용할일이 있음
      //Promise.race : 가장 빨리 끝난게 에러일때만 에러로 간주!!
                      //사실 쓸일이 많진 않고, 작업을 취소처리한다던지 할떄 사용하긴함
        