/**
 * Basic data type
 * String, number, boolen, null, undefined
 */

/**
 * Object type
 * Map, Array, Function, RegexExp
 */

//1. Map
const dic = {
  one: 1,
  two: 2,
};
console.log(dic); //{ one: 1, two: 2 }
console.log(dic["one"]); // 1

// 2. Array
const numArray = [1, 2, 3, 4, 5];
console.log(numArray); //[ 1, 2, 3, 4, 5 ]
console.log(numArray[2]); // 3

// 3. Function
function calculate(number) {
  console.log((number * 10 - number / 10).toString());
}

calculate(5); //49.5

//함수 파라미터 default 값 설정
function multiply(x, y = 10) {
  return x * y;
}

const result1 = multiply(3, 4); //12
const result2 = multiply(2); //20

// ... 을 사용하면 함수에 몇개의 파라미터가 들어올지 모를 때 나머지 인자들을 배열로 받아줍니다.
const multiplyAll = function (...arguments) {
  return arguments.reduce((acc, cur) => acc * cur, 1);
};

console.log(multiplyAll(1, 2, 3, 4)); //24

// immediately invoked function
(function (x, y) {
  console.log(x * y);
})(3, 4);

/**
 * static typing -> 변수를 선언할떄 어떤 타입의 변수를 선언할지 명시를한다. = C
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다. = JS
 */
