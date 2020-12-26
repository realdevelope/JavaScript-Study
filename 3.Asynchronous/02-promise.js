//promise : 비동기 작업을 편하게 처리 할 수있는 ES6 기능
            //callback 을 많이 사용하면 난잡해져서 사용

    //비동기 작업이 많을경우 난잡해지는 예제
    function increaseAndPrint(n, callback) {
        setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
        }, 1000);
    }
    
    increaseAndPrint(0, n => {
        increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                console.log("끝!");            // <- Callback Hell(콜백지옥)
            });
            });
        });
        });
    });           

    //위와같이 난잡한 코드를 Promise 를 사용한 예제
    //promise 만들기 - promise는 성공할수도 있고 실패할수도있다.
                   //-> 성공시 resolve 호출, 실패시 reject 호출
   
    //성공시
    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result");
    }, 1000);
    });

    myPromise.then(n => {   //promise가 끝나고 나서 할 작업을 설정
    console.log("result");
    }); 
    

    //실패시
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error());
        }, 1000);
      });
      
      myPromise.then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });

    
    //Promise 를 만드는 함수 작성
    function increaseAndPrint(n) {  //callback 받아오지 x
        return new Promise((resolve, reject) => {       //promise
          setTimeout(() => {
            const value = n + 1;

            if (value === 5) {
              const error = new Error();
              error.name = "ValueIsFiveError";  //에러명 설정
              reject(error);
              return;
            }
            console.log(value);     //실패하는 상황이 아닐때 설정
            resolve(value);
          }, 1000); //1초뒤 1더한값을 반환
        });
      }

        increaseAndPrint(0)
        .then(n => {
            return increaseAndPrint(n);   //callback 이랑 비슷한데 더 깔끔함
        })                                // ->  than을 연달아서 사용할 수 있음
        .then(n => {
            return increaseAndPrint(n);
        })
        .then(n => {
            return increaseAndPrint(n);
        })
        .then(n => {
            return increaseAndPrint(n);
        })
        .then(n => {
            return increaseAndPrint(n);
        })
        .catch(e => {
            console.error(e);
        });


        //위의 than 부분을 좀 더 깔끔하게 작성
        function increaseAndPrint(n) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const value = n + 1;
                if (value === 5) {
                  const error = new Error();
                  error.name = "ValueIsFiveError";
                  reject(error);
                  return;
                }
                console.log(value);
                resolve(value);
              }, 1000);
            });
          }
          
          increaseAndPrint(0)               //like this!!!!ㅋ
            .then(increaseAndPrint)
            .then(increaseAndPrint)
            .then(increaseAndPrint)
            .then(increaseAndPrint)
            .then(increaseAndPrint)
            .catch(e => {
              console.error(e);
            });


            