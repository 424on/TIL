console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

// JS는 싱글 스레드를 사용하기 JS엔진이 아닌 Web Browser 의 WebAPIs에서 실행됨
