// 문자열 안에 +가 많아지고 '로 열었다가 '로 닫았다가 반복하는 것은 별로다.
// ` ${} `을 사용하자
// ${} 에 함수는 넣을 수 없다.

const sayHi = (aName = 'anon') => `Hello ${aName} lovely to have you`;
console.log(sayHi());

const test = 0;
console.log(`Hello ${test + 1343}`);

// ${} 에 함수는 넣을 수 없다.
// string안에서 함수를 실행시키려면?
const add = (a, b) => a + b;
console.log(`Hello ${add(2, 3)}`);
