/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original ='안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('--------------');
clone += ' 안유진 입니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name :'안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('--------------');
originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj ={
    name: '최지호',
    group: '코드팩토리',
}
console.log(originalObj === cloneObj);
console.log(originalObj);
console.log(cloneObj);

const yuJin3 = {
    name: '안유진',
    group: '아이브',
}
/**
 * Spread Operator ...을 통해 copy를 하면 copy by value
 * 값을 추가할때 위치가 중요함
 */
const yuJin4= {
    ...yuJin3,
}
console.log(yuJin4);

console.log(yuJin4===yuJin3);

const yuJin5= {
    year: 2003,
    ...yuJin3,
}
console.log(yuJin5);

//덮어 쓰기 되어 버림 (6,7)
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin6);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);