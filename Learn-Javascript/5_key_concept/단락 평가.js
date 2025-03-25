// 단락평가
// 논리 연산식에서 처음 값으로 판단이 가능한 경우 뒤의 값에 접근하지 않는 실행 방식

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // returnTrue는 실행되지 않음

// 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "yuno" });
