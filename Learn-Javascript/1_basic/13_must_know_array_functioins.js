/**
 * Array Methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('-------------')
//pop() -마지막
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-------------')
//shift() -첫번째
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('-------------')
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);


iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);


// concat() - 새로운 배열이 만들어지는 느낌
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

//slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('-------------')
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그래도 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b)=> a > b ? -1 : 1);
console.log(numbers);


// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}))
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n,0));