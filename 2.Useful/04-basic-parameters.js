//함수의 기본 파라미터 : 함수를 호출할때 기본파라미터를 넣지 않게되었을때 기본값으로 사용할것을 지정하는것
//원의 넓이를 구하는 코드
function calculateCircleArea(r) {   //r = 반지름
    return Math.PI * r * r; //math.PI = 3.14 (원주율)
  }
  
  const area = calculateCircleArea(4);
  console.log(area); // 50.26548245743669 출력

  
  //파라미터를 넣지 않았을때
  function calculateCircleArea(r) {   //r = 반지름
    return Math.PI * r * r; //math.PI = 3.14 (원주율)
  }
  
  const area = calculateCircleArea();   //NaN 출력
  console.log(area); 

  //파라미터를 넣지 않았을때 기본값으로 설정하기
     //1.단축 평가 논리 계산법을 사용함
     function calculateCircleArea(r) {
        const radius = r || 1;  //값이 주어지지 않았으면 1로 사용하겠다!
        return Math.PI * radius * radius;
      }
      
      const area = calculateCircleArea();
      console.log(area); // 3.141592653589793

      
      //2.ES6사용
      function calculateCircleArea(r = 1) { //=1을 사용하여 기본값을 1로 사용!!!
        return Math.PI * r * r;
      }
      
      const area = calculateCircleArea();
      console.log(area); // 3.141592653589793


    //3.화살표 함수 사용
    const calculateCircleArea = (r = 1) => Math.PI * r * r;

    const area = calculateCircleArea();
        console.log(area); // 3.141592653589793




