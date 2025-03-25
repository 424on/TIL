// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 2. 객체의 구조 분해 할당
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

let person = {
  name: "yuno",
  age: 24,
  hobby: "tennis",
};

let { name, age, hobby } = person;
console.log(name, age, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
