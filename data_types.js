/**
 * Object 타입
 * 1. Map
 *  키:밸류의 쌍으로 이루어져있다.
 *  key:value
 *
 * 2. Array
 *  값을 배열로 나열 할 수 있는 타입이다.
 *
 * 3. Function
 */

const dic = {
  one: 1,
  two: 2,
};
console.log(dic); //{ one: 1, two: 2 }
console.log(dic["one"]); // 1

const numArray = [1, 2, 3, 4, 5];
console.log(numArray); //[ 1, 2, 3, 4, 5 ]
console.log(numArray[2]); // 3

/**
 * static typing -> 변수를 선언할떄 어떤 타입의 변수를 선언할지 명시를한다. = C
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다. = JS
 */
