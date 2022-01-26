// 화살표 함수는 기존의 함수를 보기 좋게 나타낸다.

// 기존 함수 만드는 방법 1.
function nameOf(arg) {}

// 변수에 넣는 것도 가능
const hello = function (arg) {};

// map 사용방법
const names = ['sumin', 'park', 'clappingmin'];

// map이 하는 일 : 각가의 아이템마다 함수를 호출하고 리턴한 값을 가진다.
const hearts = names.map(function addHearts(item) {
  return item + '😍';
});
console.log(hearts);

// 화살표 함수
const arrow = names.map((item, index) => {
  return item + '🍎 ' + index;
});
console.log(arrow);

// 위의 화살표 함수를 좀더 개선
// implicit return : 같은 줄에 뭘 적든 간에 return 된다는 의미
// => 뒤에 괄호를 추가하는 순간 implicit return이 사라져서 return을 넣어줘야 한다.
// argument가 두개 이상일 경우 (arg1, arg2) 같이 ( ) 안에 넣어준다.
const arrow2 = names.map((item, index) => item + '💋 ' + index);
console.log(arrow2);
