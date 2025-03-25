/**
 * Prototype
 */
const testObj = {};

//__proto__ 모든 객체에 존재하는 프로퍼티다.
//class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값니다.
console.log(testObj.__proto__);

function IdolModel(name, year){
    this.name =name;
    this.year = year;
}

console.log(IdolModel.prototype); 

console.dir(IdolModel.prototype, {
    showHidden: true,
});

console.log(IdolModel.prototype.constructor === IdolModel)