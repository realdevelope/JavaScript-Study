//spread 와 rest : ES6 에서 도입되었으며 spread 는 객체, 배열을 등을 펼친다?!
                //rest 는  spread와 비슷하나 역할이 다르고, 함수의 파라미터에서도 사용가능
const slime = {
  name: "슬라임"
};

const cuteSlime = {
  name: "슬라임",
  attribute: "cute"
};

const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

console.log(slime);     //object {name: "슬라임"}
console.log(cuteSlime);     //object {name : "슬라임", attribute: "cute"}
console.log(purpleCuteSlime);   //object {name : "슬라임", attribute: "cute" color: "purple"}

    //위의 코드를 spread 문법을 사용하여 작성
    const slime = {
        name: "슬라임"
      };
      
      const cuteSlime = {
        ...slime,       //...  가 spread 연산자!! 
        attribute: "cute"
      };
      
      const purpleCuteSlime = {
        ...cuteSlime,       //...  가 spread 연산자!! 
        color: "purple"
      };
      
      console.log(slime);
      console.log(cuteSlime);
      console.log(purpleCuteSlime);

    //배열에서도 사용가능
    const animals = ["개", "고양이", "참새"];
    const anotherAnimals = [...animals, "비둘기"];  //기존의 animals는 건드리지 않으면서 anotheranimals에 anmails의 값을 넣을 수 있다.
    console.log(animals);
    console.log(anotherAnimals);


    //배열에서 여러번 사용가능
    const numbers = [1, 2, 3, 4, 5];

    const spreadNumbers = [...numbers, 1000, ...numbers];
    console.log(spreadNumbers);     // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]



//rest : rest는 생김새는 spread 랑 비슷한데, 역할이 반대로 퍼져있는걸 모아옴!!
    //rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.
    //객체에서의 rest
    const purpleCuteSlime = {
        name: "슬라임",
        attribute: "cute",
        color: "purple"
      };
      
      const { color, ...rest } = purpleCuteSlime;  
      console.log(color);
      console.log(rest);

    //1.배열에서의 rest
    const numbers = [0, 1, 2, 3, 4, 5, 6];

    const [one, ...rest] = numbers;

    console.log(one);
    console.log(rest);  //[1, 2, 3, 4, 5, 6]

    //중요!!! - 단 배열에서의 rest는 맨 마지막에 와야한다.
                 //const [...rest, one] = numbers;   이런식으로 안됨!!!

    //2.함수 파라미터에서의 rest
    function sum(a, b, c, d, e, f, g) {
        let result = 0;
        if (a) result += a;
        if (b) result += b;
        if (c) result += c;
        if (d) result += d;
        if (e) result += e;
        if (f) result += f;
        if (g) result += g;
        return result;  
      }
      
      const result = sum(1, 2, 3, 4, 5, 6);
      console.log(result);


    //위의 코드를 reduce 함수 사용
    function sum(...rest) {     //하나의 배열로 받아옴
        return rest.reduce((acc, current) => acc + current, 0);
      } //기본값 0으로 시작해서 acc가 0이되고, current에 sum값이 들어가지고 순차적으로 실행됨
      
      const result = sum(1, 2, 3, 4, 5, 6);
      console.log(result); 


//3.함수 인자와 spread
      //인자 : 함수를 사용할때 넣어주는 값   /   파리미터 : 함수에서 받아오는 값
    function sum(...rest) {     //하나의 배열로 받아옴
    return rest.reduce((acc, current) => acc + current, 0);
    } //기본값 0으로 시작해서 acc가 0이되고, current에 sum값이 들어가지고 순차적으로 실행됨

    const result = sum[1, 2, 3, 4, 5, 6];
    console.log(sum(...numbers)); 


//퀴즈 : 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
function max(...numbers) {
    return numbers.reduce(
      // acc 이 current 보다 크면 결과값을 current 로 하고
      // 그렇지 않으면 acc 가 결과값
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
  
  // 테스트 코드에서 불러오기 위하여 사용하는 코드
  export default max;
