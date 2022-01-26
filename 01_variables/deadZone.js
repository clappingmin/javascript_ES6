// temporal dead zone
// let이랑 같이 소개되는 개념

// temporal dead zone이 없을 경우
// 자바스크립트는 위에서 아래로 실행되는 언어
console.log(myname); // undefined;
var myname = 'sumin';

// 에러가 아니라 undefined가 나오는 이유? 자바스크립트가 hoisting 하기 때문에..!
// hoistring이란 위의 코드를 아래의 코드처럼 실행하는 것, var를 프로그램이 시작되면 위로 끌어올려준다.
var myname;
console.log(myname);
myname = 'sumin';

// let은 이럴 경우 에러를 내준다 (장점)
// 내가 멍청한 짓을 하지 않게 해준다.
console.log(test);
let test = 'test';
