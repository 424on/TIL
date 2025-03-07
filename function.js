// 1. 함수 선언문 (Function Declaration)
function funcA() {
  console.log("funcA");
}

funcA();
// 함수 선언문은 호이스팅의 대상이므로 코드의 어느 위치에서든 호출 가능함

// 2. 함수 표현식 (Function Expression)
let varB = function funcB() {
  console.log("funcB");
};

varB();
// 변수에 익명 함수가 할당된 이후에 호출하고 있어서 문제 없음

// 3. 함수 표현식과 호이스팅의 차이점
console.log(varC);
// undefined
// 변수 선언만 호이스팅되었고, 값은 할당되기 전이므로 undefined가 출력됨

// varC();
// TypeError 발생
// 호이스팅 시 변수에 undefined만 할당되어 있기 때문에 함수 호출 불가능

let varC = function () {
  console.log("varC");
};

// 2. 화살표 함수
let varD = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varD(10));
