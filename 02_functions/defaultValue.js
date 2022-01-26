// es6에서 함수에 추가된 점은 default value(기본값)이다.
// arrow function 뿐만 아니라 normal function에도 제공되는 것

// 기본값을 안쓰면 이렇게 해야됨
// 별로임
function sayHi(aName) {
  return 'hello ' + (aName || 'anon');
}
console.log(sayHi());

// 기본값 사용
function sayHi2(aName = 'anon') {
  return 'hello ' + aName;
}
console.log(sayHi2());

// 기본값 + 화살표 함수
const sayHi3 = (aName = 'anon') => 'hello ' + aName;
console.log(sayHi3());

// default value를 variable로 할 수도 있음
// defailt value는 array든 object든 뭐로든 만들 수 있다.
const DEFAULT = 'lalalala';
const sayHi4 = (aName = DEFAULT) => 'hello ' + aName;
console.log(sayHi4());
